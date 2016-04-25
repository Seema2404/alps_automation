import utils
from expected_pagecontent_details import project_pagecontent_lookup
from base_api_pagecontent_automation import BaseALPSPAGECONTENTAPIAutomation
import unittest

class TestProjectPageContentDetails(BaseALPSPAGECONTENTAPIAutomation):
    API_URL = 'http://qa5.smallbizvoices.com/alps/dashboard/iquanti/projects/85/projectpagecontentdetail?keywords=1554&sort_by=rank&limit=10&offset=0&format=json&session_token=alps_st_018mh5zlp4srdum5zuzmu3onyrm9008c'
    REPORT_FILE_NAME = 'project_page_content_details_api.csv'

    def test_rank(self):
        field = 'rank'
        for base_domain, values in project_pagecontent_lookup.iteritems():
            actual = self.actual_pagecontent_lookup[base_domain][field]
            expected = values[field]
            response = self.assert_pagecontent_actual_expected(base_domain, field, actual, expected)
            if response['is_failed']:
                failed_msg = 'actual: %s, expected: %s' % (actual, expected)
                print failed_msg
                self.write_to_csv([response['metric'], response['base_domain'], failed_msg, ''])
            elif response['is_error']:
                print response['metric'] + response['base_domain'] + response['error_msg']
                self.write_to_csv([response['metric'], response['base_domain'], '', response['error_msg']])

    def test_estimated_traffic(self):
        field = 'estimated_traffic'
        for base_domain, values in project_pagecontent_lookup.iteritems():
            actual = self.actual_pagecontent_lookup[base_domain][field]
            expected = values[field]
            response = self.assert_pagecontent_actual_expected(base_domain, field, actual, expected)
            if response['is_failed']:
                failed_msg = 'actual: %s, expected: %s' % (actual, expected)
                print failed_msg
                self.write_to_csv([response['metric'], response['base_domain'], failed_msg, ''])
            elif response['is_error']:
                print response['metric'] + response['base_domain'] + response['error_msg']
                self.write_to_csv([response['metric'], response['base_domain'], '', response['error_msg']])

if __name__ == '__main__':
    unittest.main()