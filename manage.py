#!/usr/bin/env python
import os
import sys

if __name__ == '__main__':
	configuration = os.getenv('ENVIRONMENT', 'development').title()

	os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'ff4.settings')
	os.environ.setdefault('DJANGO_CONFIGURATION', configuration)

	from configurations.management import execute_from_command_line

	execute_from_command_line(sys.argv)
