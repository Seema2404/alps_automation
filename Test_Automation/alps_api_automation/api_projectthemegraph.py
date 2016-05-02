import csv
import requests
import unittest
import expected_lookup

class ProjectThemeGraphAPI(unittest.TestCase):

 @classmethod
 def setUpClass(cls):
    try:
            cls.csv_file = open('projectthemegraph.csv', 'wb')
            cls.csv_writer = csv.writer(cls.csv_file, delimiter=',')
            cls.csv_writer.writerow(['Metric', 'Theme', 'Failure', 'Error'])

            api=requests.get('http://qa5.smallbizvoices.com/alps/dashboard/iquanti/projects/224/projectthemesgraph?themes=674&month_range=13&session_token=alps_st_018mh5zlp4srdum5zuzmu3onyrm9008c')
            #api=requests.get('http://uat5.smallbizvoices.com/alps/dashboard/iquanti/projects/77/projectthemesgraph?themes=674&month_range=13&session_token=alps_st_018mh5zlp4srdum5zuzmu3onyrm9008c')
            cls.actual_response=api.json()['aggregated_data']

    except Exception as e:
            cls.csv_writer.writerow(['API Failure'])
            print "API did not give any response: %s" % cls.API_URL

 def comparator(self,metric):
     try:
        if(expected_lookup.theme_rollup_lookup['april'][metric]!=self.actual_response[0][metric]):
            self.csv_writer.writerow([metric,'Auto',str(expected_lookup.theme_rollup_lookup['april'][metric])+'!='+str(self.actual_response[0][metric])])
        if(expected_lookup.theme_rollup_lookup['march'][metric]!=self.actual_response[1][metric]):
            self.csv_writer.writerow([metric,'Auto',str(expected_lookup.theme_rollup_lookup['march'][metric])+'!='+str(self.actual_response[1][metric])])
     except Exception as e:
        self.csv_writer.writerow(['weighted_rank','Auto','','Code failure due to exception'])



 def test_weighted_rank(self):
     self.comparator(metric='weighted_rank')

 def test_total_monthly_search_volume(self):
    self.comparator(metric='total_monthly_search_volume')

 def test_total_traffic(self):
     self.comparator(metric='total_traffic')


if __name__ == '__main__':
    unittest.main()