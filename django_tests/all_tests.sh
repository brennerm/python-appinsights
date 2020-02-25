#!/bin/bash

if [ -z $PYTHON ]; then
	PYTHON=$(which python)
fi

cd $(dirname $0)
BASEDIR=$(pwd)

# Django/python compatibility matrix https://docs.djangoproject.com/en/dev/faq/install/#what-python-version-can-i-use-with-django
if $PYTHON -c "import sys; sys.exit(0 if sys.version_info < (3, 0) else 1)"; then
	# Django2.0 won't support Python2
	DJANGO_VERSIONS='1.7.11 1.8.19 1.9.13 1.10.8 1.11.13'
elif $PYTHON -c "import sys; sys.exit(0 if sys.version_info < (3, 5) else 1)"; then
	DJANGO_VERSIONS='1.7.11 1.8.19 1.9.13 1.10.8 1.11.28 2.0.13'
elif $PYTHON -c "import sys; sys.exit(0 if sys.version_info < (3, 8) else 1)"; then
	# python3.5 dropped html.parser.HtmlParserError versions older than Django1.8 won't work
	DJANGO_VERSIONS='1.8.19 1.9.13 1.10.8 1.11.28 2.0.13 2.1.15 2.2.10'
else
	DJANGO_VERSIONS='2.2.10 3.0.3'
fi

# For each Django version...
for v in $DJANGO_VERSIONS
do
	echo ""
	echo "***"
	echo "*** Running tests for Django $v"
	echo "***"
	echo ""

	# Create new directory
	TMPDIR=$(mktemp -d)
	function cleanup
	{
		rm -rf $TMPDIR
		exit $1
	}

	trap cleanup EXIT SIGINT

	# Create virtual environment
	if $PYTHON -c "import sys; sys.exit(0 if sys.version_info < (3, 3) else 1)"; then
		if command -v virtualenv >/dev/null 2>&1; then
			virtualenv -p $PYTHON $TMPDIR/env || exit $?
		elif $PYTHON -c "import sys; sys.exit(0 if sys.version_info < (3, 0) else 1)"; then
			if command -v virtualenv2 >/dev/null 2>&1; then
				virtualenv2 -p $PYTHON $TMPDIR/env || exit $?
			fi
		else
			echo Requires virtualenv
			exit 1
		fi
	else
		$PYTHON -m venv $TMPDIR/env
	fi

	# Install Django version + application insights
	. $TMPDIR/env/bin/activate
	pip install Django==$v || exit $?
	cd $BASEDIR/..
	python setup.py install || exit $?

	# Run tests
	cd $BASEDIR
	bash ./run_test.sh || exit $?

	# Remove venv
	deactivate
	rm -rf $TMPDIR
done
