import utils
import unittest
from base_api_automation import BaseALPSAPIAutomation
from expected_lookup import keyword_lookup


class TestProjectKeywordEstimated(BaseALPSAPIAutomation):

    #API_URL = 'http://qa5.smallbizvoices.com/alps/dashboard/iquanti/projects/224/projectkeywordestimated?alias=0&sort_by=-estimated_traffic_mom&offset=0&&rates=true&session_token=alps_st_018mh5zlp4srdum5zuzmu3onyrm9008c'
    API_URL = 'http://uat5.smallbizvoices.com/alps/dashboard/iquanti/projects/77/projectkeywordestimated?alias=0&sort_by=-estimated_traffic_mom&format=json&offset=0&&rates=true&session_token=alps_st_018mh5zlp4srdum5zuzmu3onyrm9008c'
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
            expected = None
            if estimated_traffic_prev == 0:
                expected = 0
            else:
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

    def test_conversion_rate(self):
        field = 'conversion_rate'
        for keyword, values in keyword_lookup.iteritems():
            actual = self.actual_lookup[keyword][field]
            expected = values[field]
            response = self.assert_actual_expected(keyword, field, actual, expected)
            if response['is_failed']:
                failed_msg = 'actual: %s, expected: %s' % (actual, expected)
                self.write_to_csv([response['metric'], response['keyword'], failed_msg, ''])
            elif response['is_error']:
                self.write_to_csv([response['metric'], response['keyword'], '', response['error_msg']])

    def test_sales_rate(self):
        field = 'sales_rate'
        for keyword, values in keyword_lookup.iteritems():
            actual = self.actual_lookup[keyword][field]
            expected = values[field]
            response = self.assert_actual_expected(keyword, field, actual, expected)
            if response['is_failed']:
                failed_msg = 'actual: %s, expected: %s' % (actual, expected)
                self.write_to_csv([response['metric'], response['keyword'], failed_msg, ''])
            elif response['is_error']:
                self.write_to_csv([response['metric'], response['keyword'], '', response['error_msg']])

    def test_conversion_rate_prev(self):
        field = 'conversion_rate_prev'
        for keyword, values in keyword_lookup.iteritems():
            actual = self.actual_lookup[keyword][field]
            expected = values[field]
            response = self.assert_actual_expected(keyword, field, actual, expected)
            if response['is_failed']:
                failed_msg = 'actual: %s, expected: %s' % (actual, expected)
                self.write_to_csv([response['metric'], response['keyword'], failed_msg, ''])
            elif response['is_error']:
                self.write_to_csv([response['metric'], response['keyword'], '', response['error_msg']])

    def test_sales_rate_prev(self):
        field = 'sales_rate_prev'
        for keyword, values in keyword_lookup.iteritems():
            actual = self.actual_lookup[keyword][field]
            expected = values[field]
            response = self.assert_actual_expected(keyword, field, actual, expected)
            if response['is_failed']:
                failed_msg = 'actual: %s, expected: %s' % (actual, expected)
                self.write_to_csv([response['metric'], response['keyword'], failed_msg, ''])
            elif response['is_error']:
                self.write_to_csv([response['metric'], response['keyword'], '', response['error_msg']])


    def test_estimated_conversion(self):
        field = 'estimated_conversion'
        for keyword, values in keyword_lookup.iteritems():
            actual = self.actual_lookup[keyword][field]
            print keyword
            print actual
            if values['estimated_traffic_mom']!='NA' and values['conversion_rate']!='NA':
                estimated_conversion_expected = values['estimated_traffic_mom']*values['conversion_rate']
                expected = estimated_conversion_expected
                response = self.assert_actual_expected(keyword, field, actual, expected)
                if response['is_failed']:
                    failed_msg = 'actual: %s, expected: %s' % (actual, expected)
                    self.write_to_csv([response['metric'], response['keyword'], failed_msg, ''])
                elif response['is_error']:
                    self.write_to_csv([response['metric'], response['keyword'], '', response['error_msg']])

    def test_estimated_conversion_prev(self):
        field = 'estimated_conversion_prev'
        for keyword, values in keyword_lookup.iteritems():
            actual = self.actual_lookup[keyword][field]
            if values['estimated_traffic_prev']!='NA' and values['conversion_rate_prev']!='NA':
                estimated_conversion_prev_expected = values['estimated_traffic_prev']*values['conversion_rate_prev']
                expected = estimated_conversion_prev_expected
                response = self.assert_actual_expected(keyword, field, actual, expected)
                if response['is_failed']:
                    failed_msg = 'actual: %s, expected: %s' % (actual, expected)
                    self.write_to_csv([response['metric'], response['keyword'], failed_msg, ''])
                elif response['is_error']:
                    self.write_to_csv([response['metric'], response['keyword'], '', response['error_msg']])

    def test_estimated_sales(self):
        field = 'estimated_sales'
        for keyword, values in keyword_lookup.iteritems():
            actual = self.actual_lookup[keyword][field]
            if values['estimated_traffic_mom']!='NA' and values['sales_rate']!='NA':
                estimated_sales_expected = values['estimated_traffic_mom']*values['sales_rate']
                expected = estimated_sales_expected
                response = self.assert_actual_expected(keyword, field, actual, expected)
                if response['is_failed']:
                    failed_msg = 'actual: %s, expected: %s' % (actual, expected)
                    self.write_to_csv([response['metric'], response['keyword'], failed_msg, ''])
                elif response['is_error']:
                    self.write_to_csv([response['metric'], response['keyword'], '', response['error_msg']])


    def test_estimated_sales_prev(self):
        field = 'estimated_sales_prev'
        for keyword, values in keyword_lookup.iteritems():
            actual = self.actual_lookup[keyword][field]
            if values['estimated_traffic_prev']!='NA' and values['sales_rate_prev']!='NA':
                estimated_sales_prev_expected = values['estimated_traffic_prev']*values['sales_rate_prev']
            expected = estimated_sales_prev_expected
            response = self.assert_actual_expected(keyword, field, actual, expected)
            if response['is_failed']:
                failed_msg = 'actual: %s, expected: %s' % (actual, expected)
                self.write_to_csv([response['metric'], response['keyword'], failed_msg, ''])
            elif response['is_error']:
                self.write_to_csv([response['metric'], response['keyword'], '', response['error_msg']])


    def test_estimated_conversion_mom(self):
        field = 'estimated_conversion_mom'
        for keyword, values in keyword_lookup.iteritems():
            actual = self.actual_lookup[keyword][field]
        if values['estimated_traffic_prev']!='NA' and values['conversion_rate_prev']!='NA' and values['estimated_traffic_mom']!='NA' and values['conversion_rate']!='NA':
                estimated_conversion = values['estimated_traffic_mom']*values['conversion_rate']
                estimated_conversion_prev = values['estimated_traffic_prev']*values['conversion_rate_prev']
                estimated_conversion_mom_expected = estimated_conversion - estimated_conversion_prev
                expected = estimated_conversion_mom_expected
                response = self.assert_actual_expected(keyword, field, actual, expected)
                if response['is_failed']:
                    failed_msg = 'actual: %s, expected: %s' % (actual, expected)
                    self.write_to_csv([response['metric'], response['keyword'], failed_msg, ''])
                elif response['is_error']:
                    self.write_to_csv([response['metric'], response['keyword'], '', response['error_msg']])


    def test_estimated_conversion_mom_percentage(self):
        field = 'estimated_conversion_mom_percentage'
        for keyword, values in keyword_lookup.iteritems():
            actual = self.actual_lookup[keyword][field]
        if values['estimated_traffic_prev']!='NA' and values['conversion_rate_prev']!='NA' and values['estimated_traffic_mom']!='NA' and values['conversion_rate']!='NA':
                estimated_conversion = values['estimated_traffic_mom']*values['conversion_rate']
                estimated_conversion_prev = values['estimated_traffic_prev']*values['conversion_rate_prev']
                estimated_conversion_mom = estimated_conversion - estimated_conversion_prev
                if estimated_conversion_prev!=0:
                    estimated_conversion_mom_percentage_expected = (estimated_conversion_mom/estimated_conversion_prev)*100
                    expected = estimated_conversion_mom_percentage_expected
                    response = self.assert_actual_expected(keyword, field, actual, expected)
                if response['is_failed']:
                    failed_msg = 'actual: %s, expected: %s' % (actual, expected)
                    self.write_to_csv([response['metric'], response['keyword'], failed_msg, ''])
                elif response['is_error']:
                    self.write_to_csv([response['metric'], response['keyword'], '', response['error_msg']])


    def test_estimated_sales_mom(self):
        field = 'estimated_sales_mom'
        for keyword, values in keyword_lookup.iteritems():
            actual = self.actual_lookup[keyword][field]
        if values['estimated_traffic_prev']!='NA' and values['sales_rate_prev']!='NA' and values['estimated_traffic_mom']!='NA' and values['sales_rate']!='NA':
                estimated_sales = values['estimated_traffic_mom']*values['sales_rate']
                estimated_sales_prev = values['estimated_traffic_prev']*values['sales_rate_prev']
                estimated_sales_mom_expected = estimated_sales - estimated_sales_prev
                expected = estimated_sales_mom_expected
                response = self.assert_actual_expected(keyword, field, actual, expected)
                if response['is_failed']:
                    failed_msg = 'actual: %s, expected: %s' % (actual, expected)
                    self.write_to_csv([response['metric'], response['keyword'], failed_msg, ''])
                elif response['is_error']:
                    self.write_to_csv([response['metric'], response['keyword'], '', response['error_msg']])



    def test_estimated_sales_mom_percentage(self):
        field = 'estimated_sales_mom_percentage'
        for keyword, values in keyword_lookup.iteritems():
            actual = self.actual_lookup[keyword][field]
        if values['estimated_traffic_prev']!='NA' and values['sales_rate_prev']!='NA' and values['estimated_traffic_mom']!='NA' and values['sales_rate']!='NA':
                print keyword
                estimated_sales = values['estimated_traffic_mom']*values['sales_rate']
                estimated_sales_prev = values['estimated_traffic_prev']*values['sales_rate_prev']
                estimated_sales_mom = estimated_sales - estimated_sales_prev
                estimated_sales_mom_percentage_expected = (estimated_sales_mom/estimated_sales_prev)*100
                expected = estimated_sales_mom_percentage_expected
                response = self.assert_actual_expected(keyword, field, actual, expected)
                if response['is_failed']:
                    failed_msg = 'actual: %s, expected: %s' % (actual, expected)
                    self.write_to_csv([response['metric'], response['keyword'], failed_msg, ''])
                elif response['is_error']:
                    self.write_to_csv([response['metric'], response['keyword'], '', response['error_msg']])


if __name__ == '__main__':
    unittest.main()