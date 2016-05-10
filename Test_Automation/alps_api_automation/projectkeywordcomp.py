

import requests
import unittest
import Lookup
import csv
import sys

class ProjectKeywordAPI(unittest.TestCase):


 @classmethod
 def setUpClass(cls):


    try:
            cls.kw_list=[1157,11758,11760,11762,11759,11761,11763,11764,11766,11768,11765,11767,11769]
            cls.alias_id=[0,1,2]
            cls.csv_file = open('projectkeywordcomp.csv', 'wb')
            cls.csv_writer = csv.writer(cls.csv_file, delimiter=',')
            cls.csv_writer.writerow(['Metric', 'Keyword', 'Result', 'Failure Reason'])

    except Exception as e:
            cls.csv_writer.writerow(['API Failure'])


 def comparator(self,metric):

    url = "http://qa5.smallbizvoices.com/alps/dashboard/iquanti/projects/224/projectkeyword?"
    for i in self.alias_id:
        url= url+'alias_id='+str(i)+'&'

    actual_lookup={}
    for kw in self.kw_list:
      try:
        API_URL=url+'keywords='+str(kw)+'&&offset=0&&month_range=13&sort_by=rank&query=&latest_only=1&session_token=alps_st_018mh5zlp4srdum5zuzmu3onyrm9008c'
        print API_URL
        api_call=requests.get(API_URL)
        m=0
        a=0
        actual_lookup = {k['month']: k for k in api_call.json()['data']}
        print "here"+str(actual_lookup['3']['keyword'])
        if(Lookup.project_keyword_lookup[actual_lookup['3']['keyword']]['3'][metric]==actual_lookup['3'][metric]):
            self.csv_writer.writerow([metric,actual_lookup['3']['keyword'],'Passed for March'])
            m+=1
        if(Lookup.project_keyword_lookup[actual_lookup['4']['keyword']]['4'][metric]==actual_lookup['4'][metric]):
            self.csv_writer.writerow([metric,actual_lookup['4']['keyword'],'Passed for April'])
            a+=1
        else:
            if(m==0):
             self.csv_writer.writerow([metric,actual_lookup['4']['keyword'],'Failed for March',str(Lookup.project_keyword_lookup[actual_lookup['3']['keyword']]['3'][metric])+'!='+str(actual_lookup['3'][metric])])
             m=0
            if(a==0):
             self.csv_writer.writerow([metric,actual_lookup['4']['keyword'],'Failed for April',str(Lookup.project_keyword_lookup[actual_lookup['3']['keyword']]['3'][metric])+'!='+str(actual_lookup['3'][metric])])
             a=0


      except:
          exc_type, exc_value, exc_traceback = sys.exc_info()
          self.csv_writer.writerow([metric,' Failed for '+str(actual_lookup['4']['keyword'])+'for alias_id'+str(Lookup.project_keyword_lookup[actual_lookup['3']['keyword']]['3']['alias_id']),exc_traceback,exc_type,exc_value])







 def test_rank(self):
    self.comparator('rank')
 def test_search_volume(self):
    self.comparator('search_volume')
 def test_estimated_traffic(self):
     self.comparator('estimated_traffic')
 def test_estimated_traffic_day(self):
     self.comparator('estimated_traffic_day')


if __name__=='__main__':
    unittest.main()