import utils
from expected_rollup_lookup import keyword_rollup_lookup
from base_api_rollup_automation import BaseALPSROLLUPAPIAutomation
import unittest

class TestProjectKeywordRollup(BaseALPSROLLUPAPIAutomation):
    API_URL = 'http://qa5.smallbizvoices.com/alps/dashboard/iquanti/projects/224/projectkeywordsrollup?alias=0&month_range=2&keyword_types=non_branded&sort_by=alias_name&&&month=4&year=2016&limit=10&offset=0&session_token=alps_st_018mh5zlp4srdum5zuzmu3onyrm9008c'
    #API_URL = 'http://uat5.smallbizvoices.com/alps/dashboard/iquanti/projects/77/projectkeywordsrollup?alias=0&month_range=2&keyword_types=non_branded&sort_by=alias_name&&&month=4&year=2016&limit=10&offset=0&session_token=alps_st_018mh5zlp4srdum5zuzmu3onyrm9008c'
    REPORT_FILE_NAME = 'project_keyword_rollup_api.csv'

    def test_search_volume(self):
        field = 'search_volume'
        for alias_name, values in keyword_rollup_lookup.iteritems():
            actual = self.actual_rollup_lookup[alias_name][field]
            expected = values[field]
            response = self.assert_rollup_actual_expected(alias_name, field, actual, expected)
            print 'actual value is %s and expected va;ue is %s' %(actual,expected)
            if response['is_failed']:
                failed_msg = 'actual: %s, expected: %s' % (actual, expected)
                print failed_msg
                self.write_to_csv([response['metric'], response['alias_name'], failed_msg, ''])
                self.fail()
            elif response['is_error']:
                print response['metric'] + response ['alias_name'] + response['error_msg']
                self.write_to_csv([response['metric'], response['alias_name'], '', response['error_msg']])

    def test_rank_distribution(self):
        field = 'rank_distribution'
        for alias_name, values in keyword_rollup_lookup.iteritems():
            actual = self.actual_rollup_lookup[alias_name][field]
            expected = values[field]
            response = self.assert_rollup_actual_expected(alias_name,field,actual, expected)
            print 'actual value is %s and expected va;ue is %s' %(actual,expected)
            if response['is_failed']:
                failed_msg = 'actual: %s, expected: %s' % (actual, expected)
                print failed_msg
                self.write_to_csv([response['metric'], response['alias_name'], failed_msg, ''])
                self.fail()
            elif response['is_error']:
                print response['metric'] + response ['alias_name'] + response['error_msg']
                self.write_to_csv([response['metric'], response['alias_name'], '', response['error_msg']])

    def test_share_of_search(self):
        field = 'share_of_search'
        for alias_name, values in keyword_rollup_lookup.iteritems():
            actual = self.actual_rollup_lookup[alias_name][field]
            expected = values[field]
            response = self.assert_rollup_actual_expected(alias_name,field,actual, expected)
            print 'actual value is %s and expected va;ue is %s' %(actual,expected)
            if response['is_failed']:
                failed_msg = 'actual: %s, expected: %s' % (actual, expected)
                print failed_msg
                self.write_to_csv([response['metric'], response['alias_name'], failed_msg, ''])
                self.fail()
            elif response['is_error']:
                print response['metric'] + response ['alias_name'] + response['error_msg']
                self.write_to_csv([response['metric'], response['alias_name'], '', response['error_msg']])

    def test_share_of_search_mom_percentage(self):
        field = 'share_of_search_mom_percentage'
        for alias_name, values in keyword_rollup_lookup.iteritems():
            actual = self.actual_rollup_lookup[alias_name][field]
            expected = values[field]
            response = self.assert_rollup_actual_expected(alias_name,field,actual, expected)
            print 'actual value is %s and expected va;ue is %s' %(actual,expected)
            if response['is_failed']:
                failed_msg = 'actual: %s, expected: %s' % (actual, expected)
                print failed_msg
                self.write_to_csv([response['metric'], response['alias_name'], failed_msg, ''])
                self.fail()
            elif response['is_error']:
                print response['metric'] + response ['alias_name'] + response['error_msg']
                self.write_to_csv([response['metric'], response['alias_name'], '', response['error_msg']])






if __name__ == '__main__':
    unittest.main()