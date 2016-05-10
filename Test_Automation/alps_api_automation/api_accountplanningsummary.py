import requests
import unittest
import Lookup
import csv
import sys

class ProjectKeywordDetailAPI(unittest.TestCase):


 @classmethod
 def setUpClass(cls):


    try:

            cls.csv_file = open('acountplanningsummary.csv', 'wb')
            cls.csv_writer = csv.writer(cls.csv_file, delimiter=',')
            cls.csv_writer.writerow(['Metric', 'SubMetric', 'Result', 'Failure Reason'])
            API_URL='http://qa5.smallbizvoices.com/alps/dashboard/iquanti/projects/224/accountplanning/summary?&session_token=alps_st_018mh5zlp4srdum5zuzmu3onyrm9008c'
            api_call=requests.get(API_URL)
            cls.actual_lookup=api_call.json()


    except Exception as e:
            cls.csv_writer.writerow(['API Failure'])


 def comparator(self,metric,submetric):
   try:

    if(self.actual_lookup[metric][submetric]==Lookup.lookup_account_planning_summary[metric][submetric]):
      self.csv_writer.writerow([metric,submetric,'Passed'])
    else:
      self.csv_writer.writerow([metric,submetric,'Failed',str(self.actual_lookup[metric][submetric])+'!='+str(Lookup.lookup_account_planning_summary[metric][submetric])])
   except Exception as e:
      exc_type, exc_value, exc_traceback = sys.exc_info()
      self.csv_writer.writerow([metric,submetric,'Failed',str(exc_traceback)])

 def test_rank_current(self):
    self.comparator('rank','current')
 def test_rank_change(self):
    self.comparator('rank','change')
 def test_rank_projected(self):
    self.comparator('rank','projected')
 def test_rank_change_percentage(self):
     self.comparator('rank','change_percentage')


 def test_traffic_current(self):
    self.comparator('traffic','current')
 def test_traffic_change(self):
    self.comparator('traffic','change')
 def test_traffic_projected(self):
    self.comparator('traffic','projected')
 def test_traffic_change_percentage(self):
    self.comparator('traffic','change_percentage')

if __name__=='__main__':
    unittest.main()