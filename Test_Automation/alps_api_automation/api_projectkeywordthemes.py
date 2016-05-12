import utils
import unittest
from base_api_projectkeywordthemes import BaseALPSAPIAutomation
from expected_lookup import theme_lookup


class TestProjectKeywordThemes(BaseALPSAPIAutomation):

    API_URL = 'http://qa5.smallbizvoices.com/alps/dashboard/iquanti/projects/224/projectkeywordthemes?sort_by=theme_name&&limit=10&session_token=alps_st_018mh5zlp4srdum5zuzmu3onyrm9008c'
    REPORT_FILE_NAME = 'project_keyword_themes_api.csv'

    def test_avg_rank(self):
        field = 'rank'
        for theme_name, values in theme_lookup.iteritems():
            actual = self.actual_lookup[theme_name][field]
            expected = values[field]
            response = self.assert_actual_expected(theme_name, field, actual, expected)
            if response['is_failed']:
                failed_msg = 'actual: %s, expected: %s' % (actual, expected)
                self.write_to_csv([response['metric'], response['theme_name'], failed_msg, ''])
            elif response['is_error']:
                self.write_to_csv([response['metric'], response['theme_name'], '', response['error_msg']])

    def test_search_volume(self):
        field='search_volume'
        for theme_name, values in theme_lookup.iteritems():
            actual = self.actual_lookup[theme_name][field]
            expected = values[field]
            response = self.assert_actual_expected(theme_name, field, actual, expected)
            if response['is_failed']:
                failed_msg = 'actual: %s, expected: %s' % (actual, expected)
                self.write_to_csv([response['metric'], response['theme_name'], failed_msg, ''])
            elif response['is_error']:
                self.write_to_csv([response['metric'], response['theme_name'], '', response['error_msg']])

    def test_rank_mom(self):
        field = 'rank_mom'
        for theme_name, values in theme_lookup.iteritems():
            actual = self.actual_lookup[theme_name][field]
            expected = values[field]
            response = self.assert_actual_expected(theme_name, field, actual, expected)
            if response['is_failed']:
                failed_msg = 'actual: %s, expected: %s' % (actual, expected)
                self.write_to_csv([response['metric'], response['theme_name'], failed_msg, ''])
            elif response['is_error']:
                self.write_to_csv([response['metric'], response['theme_name'], '', response['error_msg']])

    def test_search_volume_mom(self):
        field = 'search_volume_mom'
        for theme_name, values in theme_lookup.iteritems():
            actual = self.actual_lookup[theme_name][field]
            expected = values[field]
            response = self.assert_actual_expected(theme_name, field, actual, expected)
            if response['is_failed']:
                failed_msg = 'actual: %s, expected: %s' % (actual, expected)
                self.write_to_csv([response['metric'], response['theme_name'], failed_msg, ''])
            elif response['is_error']:
                self.write_to_csv([response['metric'], response['theme_name'], '', response['error_msg']])

    def test_traffic(self):
        field = 'traffic'
        for theme_name, values in theme_lookup.iteritems():
            actual = self.actual_lookup[theme_name][field]
            expected = values[field] * utils.mtd_factor_calculator(current=True,previous=False)
            response = self.assert_actual_expected(theme_name, field, actual, expected)
            if response['is_failed']:
                failed_msg = 'actual: %s, expected: %s' % (actual, expected)
                self.write_to_csv([response['metric'], response['theme_name'], failed_msg, ''])
            elif response['is_error']:
                self.write_to_csv([response['metric'], response['theme_name'], '', response['error_msg']])

    def test_traffic_mom(self):
        field = 'traffic_mom'
        for theme_name, values in theme_lookup.iteritems():
            actual = self.actual_lookup[theme_name][field]
            traffic = values['traffic'] * utils.mtd_factor_calculator(current=True,previous=False)
            traffic_prev = values['traffic_prev'] * utils.mtd_factor_calculator(current=False,previous=True)
            expected = traffic - traffic_prev
            response = self.assert_actual_expected(theme_name, field, actual, expected)
            if response['is_failed']:
                failed_msg = 'actual: %s, expected: %s' % (actual, expected)
                self.write_to_csv([response['metric'], response['theme_name'], failed_msg, ''])
            elif response['is_error']:
                self.write_to_csv([response['metric'], response['theme_name'], '', response['error_msg']])

    def test_traffic_mom_percentage(self):
        field = 'traffic_mom_percentage'
        for theme_name, values in theme_lookup.iteritems():
            actual = self.actual_lookup[theme_name][field]
            traffic = values['traffic'] * utils.mtd_factor_calculator(current=True,previous=False)
            traffic_prev = values['traffic_prev'] * utils.mtd_factor_calculator(current=False,previous=True)
            expected = ((traffic - traffic_prev)/traffic_prev)*100
            response = self.assert_actual_expected(theme_name, field, actual, expected)
            if response['is_failed']:
                failed_msg = 'actual: %s, expected: %s' % (actual, expected)
                self.write_to_csv([response['metric'], response['theme_name'], failed_msg, ''])
            elif response['is_error']:
                self.write_to_csv([response['metric'], response['theme_name'], '', response['error_msg']])

    #working on it

    def test_estimated_sales(self):
        field = 'estimated_sales'
        for theme_name, values in theme_lookup.iteritems():
            actual = self.actual_lookup[theme_name][field]
            estimated_sales_conversion = values['sales_rate']*values['traffic']
            estimated_sales_conversion_prev = values['sales_rate_prev']*values['traffic_prev']
            response = self.assert_actual_expected(theme_name, field, actual, expected)
            if response['is_failed']:
                failed_msg = 'actual: %s, expected: %s' % (actual, expected)
                self.write_to_csv([response['metric'], response['theme_name'], failed_msg, ''])
            elif response['is_error']:
                self.write_to_csv([response['metric'], response['theme_name'], '', response['error_msg']])





    def test_estimated_sales_mom_percentage(self):
        field = 'estimated_sales_mom_percentage'
        for theme_name, values in theme_lookup.iteritems():
            actual = self.actual_lookup[theme_name][field]
            response = self.assert_actual_expected(theme_name, field, actual, expected)
            if response['is_failed']:
                failed_msg = 'actual: %s, expected: %s' % (actual, expected)
                self.write_to_csv([response['metric'], response['theme_name'], failed_msg, ''])
            elif response['is_error']:
                self.write_to_csv([response['metric'], response['theme_name'], '', response['error_msg']])



    def test_estimated_conversions_prev(self):
        field = 'estimated_conversions_prev'
        for theme_name, values in theme_lookup.iteritems():
            actual = self.actual_lookup[theme_name][field]
            estimated_conversion_expected_prev = values['conversion_rate_prev']*values['traffic_prev']
            print estimated_conversion_expected_prev
            expected = estimated_conversion_expected_prev
            response = self.assert_actual_expected(theme_name, field, actual, expected)
            if response['is_failed']:
                failed_msg = 'actual: %s, expected: %s' % (actual, expected)
                self.write_to_csv([response['metric'], response['theme_name'], failed_msg, ''])
            elif response['is_error']:
                self.write_to_csv([response['metric'], response['theme_name'], '', response['error_msg']])

    def test_estimated_conversion(self):
        field = 'estimated_conversion'
        for theme_name, values in theme_lookup.iteritems():
            actual = self.actual_lookup[theme_name][field]
            estimated_conversion_expected = values['conversion_rate']*values['traffic']
            print conversion_rate
            expected = estimated_conversion_expected
            response = self.assert_actual_expected(theme_name, field, actual, expected)
            if response['is_failed']:
                failed_msg = 'actual: %s, expected: %s' % (actual, expected)
                self.write_to_csv([response['metric'], response['theme_name'], failed_msg, ''])
            elif response['is_error']:
                self.write_to_csv([response['metric'], response['theme_name'], '', response['error_msg']])








if __name__ == '__main__':
    unittest.main()





