import utils
import unittest
from base_api_automation import BaseALPSAPIAutomation
from expected_lookup import keyword_lookup


class TestProjectKeywordEstimated(BaseALPSAPIAutomation):

    API_URL = 'http://qa5.smallbizvoices.com/alps/dashboard/iquanti/projects/224/projectkeywordestimated?alias=0&sort_by=-estimated_traffic_mom&offset=0&&rates=true&session_token=alps_st_018mh5zlp4srdum5zuzmu3onyrm9008c'
    REPORT_FILE_NAME = 'project_keyword_estimated_api.csv'

    def test_rank(self):
        field = 'rank'
        for keyword, values in keyword_lookup.iteritems():
            actual = self.actual_lookup[keyword][field]
            expected = values[field]
            response = self.assert_actual_expected(keyword, field, actual, expected)
            if response['is_failed']:
                failed_msg = 'actual: %s, expected: %s' % (actual, expected)
                self.write_to_csv([response['metric'], response['keyword'], failed_msg, ''])
            elif response['is_error']:
                self.write_to_csv([response['metric'], response['keyword'], '', response['error_msg']])


    def test_search_volume(self):
        field='search_volume'
        for keyword, values in keyword_lookup.iteritems():
            actual = self.actual_lookup[keyword][field]
            expected = values[field]
            response = self.assert_actual_expected(keyword, field, actual, expected)
            if response['is_failed']:
                failed_msg = 'actual: %s, expected: %s' % (actual, expected)
                self.write_to_csv([response['metric'], response['keyword'], failed_msg, ''])
            elif response['is_error']:
                self.write_to_csv([response['metric'], response['keyword'], '', response['error_msg']])



    def test_estimated_traffic(self):
        field = 'estimated_traffic'
        for keyword, values in keyword_lookup.iteritems():
            actual = self.actual_lookup[keyword][field]
            expected = values[field] * utils.mtd_factor_calculator(current=True,previous=False)
            response = self.assert_actual_expected(keyword, field, actual, expected)
            if response['is_failed']:
                failed_msg = 'actual: %s, expected: %s' % (actual, expected)
                self.write_to_csv([response['metric'], response['keyword'], failed_msg, ''])
            elif response['is_error']:
                self.write_to_csv([response['metric'], response['keyword'], '', response['error_msg']])


    def test_estimated_traffic_mom(self):
        field = 'estimated_traffic_mom'
        for keyword, values in keyword_lookup.iteritems():
            actual = self.actual_lookup[keyword][field]
            estimated_traffic = values['estimated_traffic'] * utils.mtd_factor_calculator(current=True,previous=False)
            estimated_traffic_prev = values['estimated_traffic_prev'] * utils.mtd_factor_calculator(current=False,previous=True)
            expected = estimated_traffic - estimated_traffic_prev
            response = self.assert_actual_expected(keyword, field, actual, expected)
            if response['is_failed']:
                failed_msg = 'actual: %s, expected: %s' % (actual, expected)
                self.write_to_csv([response['metric'], response['keyword'], failed_msg, ''])
            elif response['is_error']:
                self.write_to_csv([response['metric'], response['keyword'], '', response['error_msg']])


    def test_estimated_traffic_mom_percentage(self):
        field = 'estimated_traffic_mom_percentage'
        for keyword, values in keyword_lookup.iteritems():
            actual = self.actual_lookup[keyword][field]
            estimated_traffic = values['estimated_traffic'] * utils.mtd_factor_calculator(current=True,previous=False)
            estimated_traffic_prev = values['estimated_traffic_prev'] * utils.mtd_factor_calculator(current=False,previous=True)
            expected = ((estimated_traffic - estimated_traffic_prev)/estimated_traffic_prev)*100
            response = self.assert_actual_expected(keyword, field, actual, expected)
            if response['is_failed']:
                failed_msg = 'actual: %s, expected: %s' % (actual, expected)
                self.write_to_csv([response['metric'], response['keyword'], failed_msg, ''])
            elif response['is_error']:
                self.write_to_csv([response['metric'], response['keyword'], '', response['error_msg']])


    def test_search_volume_mom(self):
        field = 'search_volume_mom'
        for keyword, values in keyword_lookup.iteritems():
            actual = self.actual_lookup[keyword][field]
            expected = values['search_volume']-values['search_volume_prev']
            response = self.assert_actual_expected(keyword, field, actual, expected)
            if response['is_failed']:
                failed_msg = 'actual: %s, expected: %s' % (actual, expected)
                self.write_to_csv([response['metric'], response['keyword'], failed_msg, ''])
            elif response['is_error']:
                self.write_to_csv([response['metric'], response['keyword'], '', response['error_msg']])

    def test_search_volume_mom_percentage(self):
        field = 'search_volume_mom_percentage'
        for keyword, values in keyword_lookup.iteritems():
            actual = self.actual_lookup[keyword][field]
            expected = ((values['search_volume']-values['search_volume_prev'])/values['search_volume_prev'])*100
            response = self.assert_actual_expected(keyword, field, actual, expected)
            if response['is_failed']:
                failed_msg = 'actual: %s, expected: %s' % (actual, expected)
                self.write_to_csv([response['metric'], response['keyword'], failed_msg, ''])
            elif response['is_error']:
                self.write_to_csv([response['metric'], response['keyword'], '', response['error_msg']])

    def test_rank_mom(self):
        field = 'rank_mom'
        for keyword, values in keyword_lookup.iteritems():
            actual = self.actual_lookup[keyword][field]
            expected = values['rank_prev']-values['rank']
            response = self.assert_actual_expected(keyword, field, actual, expected)
            if response['is_failed']:
                failed_msg = 'actual: %s, expected: %s' % (actual, expected)
                self.write_to_csv([response['metric'], response['keyword'], failed_msg, ''])
            elif response['is_error']:
                self.write_to_csv([response['metric'], response['keyword'], '', response['error_msg']])


if __name__ == '__main__':
    unittest.main()