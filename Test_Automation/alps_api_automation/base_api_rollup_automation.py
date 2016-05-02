import csv
import unittest
from unittest import TestCase
import utils


class BaseALPSROLLUPAPIAutomation(TestCase):

    API_URL = None
    REPORT_FILE_NAME = None

    def assert_rollup_actual_expected(self, alias_name, metric, actual, expected):
        is_success, is_failed, is_error = True, False, False
        error_msg = ''
        try:
            self.assertEqual(actual, expected)
        except AssertionError as e:
            is_failed = True
            error_msg = str(e)
        except Exception as e:
            is_error = True
            error_msg = str(e)
        finally:
            is_success = not(is_failed or is_error)

        response_dict = {
                    'alias_name': alias_name,
                    'metric': metric,
                    'is_success': is_success,
                    'is_failed': is_failed,
                    'is_error': is_error,
                    'error_msg': error_msg
                }
        log_msg = '%(alias_name)s %(metric)s %(is_success)d, %(is_failed)d, %(is_error)d, %(error_msg)s'
        # print  log_msg % response_dict
        return response_dict

    def check_actual_expected(self,alias_name,metric,actual,expected):
        is_success, is_failed, is_error = True, False, False
        error_msg = ''
        if (actual == expected):
            pass
        else:
            print 'expected is not matching with actual result '

        response_dict = {
                    'alias_name': alias_name,
                    'metric': metric,
                    'is_success': is_success,
                    'is_failed': is_failed,
                    'is_error': is_error,
                    'error_msg': error_msg
                }
        log_msg = '%(alias_name)s %(metric)s %(is_success)d, %(is_failed)d,'
        return response_dict



    def write_to_csv(self, row):
        self.csv_writer.writerow(row)

    @classmethod
    def setUpClass(cls):
        try:
            cls.csv_file = open(cls.REPORT_FILE_NAME, 'wb')
            cls.csv_writer = csv.writer(cls.csv_file, delimiter=',')
            cls.csv_writer.writerow(['Metric', 'alias_name', 'Failure', 'Error'])
            json_response =  utils.get_api_response(cls.API_URL)
            cls.actual_rollup_lookup = {k['alias_name']: k for k in json_response['data']}
        except Exception as e:
            cls.csv_writer.writerow(['API Failure'])
            print "API did not give any response: %s" % cls.API_URL

    @classmethod
    def tearDownClass(cls):
        cls.csv_file.close()

if __name__ == '__main__':
    unittest.main()
    csv_file.close()