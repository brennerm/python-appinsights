from os import getenv
import platform
import time

from applicationinsights import TelemetryClient
from applicationinsights.channel import AsynchronousSender
from applicationinsights.channel import AsynchronousQueue
from applicationinsights.channel import TelemetryChannel
from applicationinsights.logging import LoggingHandler

import bottle

CONF_PREFIX = "APPINSIGHTS"

CONF_ENDPOINT_URI = CONF_PREFIX + "_ENDPOINT_URI"
CONF_KEY = CONF_PREFIX + "_INSTRUMENTATIONKEY"
CONF_DISABLE_REQUEST_LOGGING = CONF_PREFIX + "_DISABLE_REQUEST_LOGGING"


current_milli_time = lambda: int(round(time.time() * 1000))

# more info: https://bottlepy.org/docs/dev/plugindev.html
class AppInsights(object):
    """ This class represents a plugin that enables request telemetry,
     logging for a Bottle application. The telemetry
    will be sent to Application Insights service using the supplied
    instrumentation key.

    The following Bottle config variables can be used to configure the extension:

    - Set ``APPINSIGHTS_INSTRUMENTATIONKEY`` to a string to provide the
      instrumentation key to send telemetry to application insights.
      Alternatively, this value can also be provided via an environment variable
      of the same name.

    - Set ``APPINSIGHTS_ENDPOINT_URI`` to a string to customize the telemetry
      endpoint to which Application Insights will send the telemetry.

    - Set ``APPINSIGHTS_DISABLE_REQUEST_LOGGING`` to ``False`` to disable
      logging of Bottle requests to Application Insights.

    .. code:: python

            from bottle import run, Bottle
            from applicationinsights.bottle.plugin import AppInsights

            app = Bottle()
            app.config["APPINSIGHTS_INSTRUMENTATIONKEY"] = "<YOUR INSTRUMENTATION KEY GOES HERE>"
            app.install(AppInsights())

            @app.route('/hello')
            def hello():
                return "Hello World!"

            if __name__ == '__main__':
                run(app, host='localhost', port=8080)
    """

    name = "appinsights"
    api = 2

    def __init__(self):
        """
        Initialize a new instance of the extension.

        """
        self._key = None
        self._endpoint_uri = None
        self._channel = None
        self._tc = None

    def setup(self, app):
        """
        Initializes the plugin for the provided Bottle application.

        Args:
            app (bottle.Bottle). the Bottle application for which to initialize the extension.
        """
        self._key = app.config.get(CONF_KEY) or getenv(CONF_KEY)

        if not self._key:
            return

        self._endpoint_uri = app.config.get(CONF_ENDPOINT_URI)
        sender = AsynchronousSender(self._endpoint_uri)

        queue = AsynchronousQueue(sender)
        self._channel = TelemetryChannel(None, queue)
        self._tc = TelemetryClient(self._key, self._channel)

        self.context.cloud.role_instance = platform.node()

    def close(self):
        self.flush()

    @property
    def context(self):
        """
        Accesses the telemetry context.

        Returns:
            (applicationinsights.channel.TelemetryContext). The Application Insights telemetry context.
        """
        return self._channel.context

    def apply(self, callback, route):
        """
        Sets up request logging unless ``APPINSIGHTS_DISABLE_REQUEST_LOGGING``
        is set in the Bottle config.
        """
        if route.app.config.get(CONF_DISABLE_REQUEST_LOGGING, False) or self._tc is None:
            return callback

        def wrapper(*args, **kwargs):
            start_time = current_milli_time()
            result = callback(*args, **kwargs)
            try:
                duration = current_milli_time() - start_time

                self._tc.track_request(
                    route.method + " " + route.rule,
                    route.rule,
                    bottle.response.status_code < 400,
                    start_time,
                    duration,
                    bottle.response.status_code,
                    route.method
                )
            finally:
                return result

        return wrapper

    def flush(self):
        """Flushes the queued up telemetry to the service.
        """
        if self._tc:
            self._tc.flush()
