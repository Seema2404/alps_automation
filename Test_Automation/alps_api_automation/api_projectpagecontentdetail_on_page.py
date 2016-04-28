import utils
from expected_pagecontent_details import project_pagecontent_lookup
from base_api_pagecontent_automation import BaseALPSPAGECONTENTAPIAutomation
import unittest



class TestProjectPageContentDetails(BaseALPSPAGECONTENTAPIAutomation):

    field = 'keyword_id'
    for keyword, values in project_keyword_lookup.iteritems():
            keyword_id = values[field]
            API_URL = 'http://qa5.smallbizvoices.com/alps/dashboard/iquanti/projects/224/projectpagecontentdetail?keywords=%s' % (keyword_id) + '&sort_by=rank&limit=10&offset=0&format=json&session_token=alps_st_018mh5zlp4srdum5zuzmu3onyrm9008c'
            #API_URL = 'http://uat5.smallbizvoices.com/alps/dashboard/iquanti/projects/77/projectpagecontentdetail?keywords=%s' % (keyword_id) + '&sort_by=rank&limit=10&offset=0&format=json&session_token=alps_st_018mh5zlp4srdum5zuzmu3onyrm9008c'

#API_URL ='http://qa5.smallbizvoices.com/alps/dashboard/iquanti/projects/85/projectpagecontentdetail?keywords='+'%s' %(a)+'&sort_by=rank&limit=10&offset=0&format=json&'+'%s' %(session_token)
    REPORT_FILE_NAME = 'project_page_content_details_api1.csv'

    def test_base_domain(self):

            def test_rank(self):
                field = 'rank'
                for keyword, values in project_keyword_lookup.iteritems():
                    for base_domain, metric in values['base_domains'].iteritems():
                        actual = self.actual_pagecontent_lookup[base_domain][field]
                        expected = metric[field]
                        response = self.assert_pagecontent_actual_expected(keyword.aliases, field, actual, expected)
                        print 'actual value is %s and expected va;ue is %s' %(actual,expected)
                        if response['is_failed']:
                            failed_msg = 'actual: %s, expected: %s' % (actual, expected)
                            print failed_msg
                            self.write_to_csv([response['metric'], response['base_domain'], failed_msg, ''])
                        elif response['is_error']:
                            print response['metric'] + response['base_domain'] + response['error_msg']
                            self.write_to_csv([response['metric'], response['base_domain'], '', response['error_msg']])

            def test_estimated_traffic(self):
                print "test_estimated_traffic"
                field = 'estimated_traffic'
                for keyword, values in project_keyword_lookup.iteritems():
                        for base_domain, metric in values['base_domains'].iteritems():
                            actual = self.actual_pagecontent_lookup[base_domain][field]
                            expected = metric[field]
                            response = self.assert_pagecontent_actual_expected(keyword.aliases, field, actual, expected)
                            print 'actual value is %s and expected va;ue is %s' %(actual,expected)
                            if response['is_failed']:
                                failed_msg = 'actual: %s, expected: %s' % (actual, expected)
                                print failed_msg
                                self.write_to_csv([response['metric'], response['base_domain'], failed_msg, ''])
                            elif response['is_error']:
                                print response['metric'] + response['base_domain'] + response['error_msg']
                                self.write_to_csv([response['metric'], response['base_domain'], '', response['error_msg']])

            def test_project_conversion_sales_type(self):
                field = 'project_conversion_sales_type'
                for base_domain, values in project_keyword_lookup.iteritems():
                    actual = self.actual_pagecontent_lookup[base_domain][field]
                    expected = values[field]
                    print expected
                    response = self.assert_rollup_actual_expected(base_domain,field,actual, expected)
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