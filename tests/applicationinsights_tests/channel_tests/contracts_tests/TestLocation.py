from .Utils import JsonEncoder
from applicationinsights.channel.contracts import *
import unittest
import datetime
import uuid
import sys
import json

import sys
import os
import os.path
root_directory = os.path.join(os.path.dirname(
    os.path.realpath(__file__)), '..', '..', '..', '..')
if root_directory not in sys.path:
    sys.path.append(root_directory)


class TestLocation(unittest.TestCase):
    def test_construct(self):
        item = Location()
        self.assertNotEqual(item, None)

    def test_ip_property_works_as_expected(self):
        expected = 'Test string'
        item = Location()
        item.ip = expected
        actual = item.ip
        self.assertEqual(expected, actual)
        expected = 'Other string'
        item.ip = expected
        actual = item.ip
        self.assertEqual(expected, actual)

    def test_serialize_works_as_expected(self):
        item = Location()
        item.ip = 'Test string'
        actual = json.dumps(item.write(), separators=(
            ',', ':'), cls=JsonEncoder)
        expected = '{"ai.location.ip":"Test string"}'
        self.assertEqual(expected, actual)
