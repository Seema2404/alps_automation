import utils
from expected_rollup_lookup import keyword_rollup_lookup
from base_api_rollup_automation import BaseALPSROLLUPAPIAutomation
import unittest

class TestProjectKeywordRollup(BaseALPSROLLUPAPIAutomation):
    API_URL = 'http://qa5.smallbizvoices.com/alps/dashboard/iquanti/projects/85/projectkeywordsrollup?alias=0&month_range=2&keyword_types=non_branded&sort_by=alias_name&&&limit=10&offset=0&session_token=alps_st_018mh5zlp4srdum5zuzmu3onyrm9008c'
    REPORT_FILE_NAME = 'project_keyword_rollup_api.csv'

    def test_rank(self):
        field = 'search_volume'
        for alias_name, values in keyword_rollup_lookup.iteritems():
            actual = self.actual_rollup_lookup[alias_name][field]
            expected = values[field]
            response = self.assert_rollup_actual_expected(alias_name, field, actual, expected)
            if response['is_failed']:
                failed_msg = 'actual: %s, expected: %s' % (actual, expected)
                print failed_msg
                self.write_to_csv([response['metric'], response['alias_name'], failed_msg, ''])
            elif response['is_error']:
                print response['metric'] + response ['alias_name'] + response['error_msg']
                self.write_to_csv([response['metric'], response['alias_name'], '', response['error_msg']])

if __name__ == '__main__':
    unittest.main()