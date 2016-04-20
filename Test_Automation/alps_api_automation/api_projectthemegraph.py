#http://qa5.smallbizvoices.com/alps/dashboard/iquanti/projects/85/projectthemesgraph?themes=200&month_range=13
import utils
import unittest
from base_api_automation import BaseALPSAPIAutomation
from expected_lookup import keyword_lookup


class TestProjectKeywordEstimated(BaseALPSAPIAutomation):

    API_URL = 'http://qa5.smallbizvoices.com/alps/dashboard/iquanti/projects/85/projectthemesgraph?themes=200&month_range=13&session_token=alps_st_018mh5zlp4srdum5zuzmu3onyrm9008c'
    REPORT_FILE_NAME = 'project_keyword_estimated_api.csv'


    def test_total_monthly_search_volume(self):
        field = 'total_monthly_search_volume'
        for keyword, values in keyword_lookup.iteritems():
            actual = self.actual_lookup[keyword][field]
            print actual
            total_search_volume = 0
            total_search_volume = values['search_volume']+ total_search_volume
            print total_search_volume
            expected = values[field] * utils.mtd_factor_calculator()
            self.assert_actual_expected(keyword, field, actual, expected)



if __name__ == '__main__':
    unittest.main()