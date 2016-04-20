import utils
import unittest
from base_api_automation import BaseALPSAPIAutomation
from expected_lookup import keyword_lookup


class TestProjectKeywordsRollup(BaseALPSAPIAutomation):

    API_URL = 'http://qa5.smallbizvoices.com/alps/dashboard/iquanti/projects/224/projectkeywordsrollup?alias=0&month_range=2&session_token=alps_st_018mh5zlp4srdum5zuzmu3onyrm9008c'
    REPORT_FILE_NAME = 'project_keywords_rollup_api.csv'

    def test_search_volume(self):
        field = 'search_volume'
        for keyword, values in keyword_lookup.iteritems():
            actual = self.actual_lookup[keyword][field]
            expected = values[field]
            response = self.assert_actual_expected(keyword, field, actual, expected)
            if response['is_failed']:
                failed_msg = 'actual: %s, expected: %s' % (actual, expected)
                self.write_to_csv([response['metric'], response['keyword'], failed_msg, ''])
            elif response['is_error']:
                self.write_to_csv([response['metric'], response['keyword'], '', response['error_msg']])


if __name__ == '__main__':
    unittest.main()