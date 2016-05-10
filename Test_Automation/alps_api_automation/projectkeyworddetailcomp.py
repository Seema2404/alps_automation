import requests
import unittest
import Lookup
import csv
import sys

class ProjectKeywordDetailAPI(unittest.TestCase):


 @classmethod
 def setUpClass(cls):


    try:
            cls.kw_list=[11757,11758,11760,11762,11759,11761,11763,11764,11766,11768,11765,11767,11769]
            cls.alias_id=[0]
            cls.csv_file = open('projectkeyworddetailcomp.csv', 'wb')
            cls.csv_writer = csv.writer(cls.csv_file, delimiter=',')
            cls.csv_writer.writerow(['Metric', 'Keyword', 'Result', 'Failure Reason'])

    except Exception as e:
            cls.csv_writer.writerow(['API Failure'])
            print "API did not give any response: %s" % cls.API_URL

 def comparator(self,metric):
    actual_lookup={}
    url = "http://qa5.smallbizvoices.com/alps/dashboard/iquanti/projects/224/projectkeyworddetail?"
    for i in self.alias_id:
        url= url+'alias_id='+str(i)+'&'
    for kw in self.kw_list:
      try:
        API_URL=url+'keywords='+str(kw)+'&limit=10&offset=0&&sort_by=rank&query=&latest_only=1&session_token=alps_st_018mh5zlp4srdum5zuzmu3onyrm9008c&session_token=alps_st_018mh5zlp4srdum5zuzmu3onyrm9008c'

        api_call=requests.get(API_URL)


        actual_lookup = {k['keyword']: k for k in api_call.json()['data']}

        if(Lookup.project_keyworddetail_lookup[actual_lookup.values()[0]['keyword']][metric]==actual_lookup.values()[0][metric]):
            self.csv_writer.writerow([metric,str(actual_lookup.values()[0]['keyword']),'Passed for alias_id'+str(Lookup.project_keyworddetail_lookup[actual_lookup.values()[0]['keyword']]['alias_id'])])

        else:
            self.csv_writer.writerow([metric,str(actual_lookup.values()[0]['keyword']),'Failed for alias_id'+str(Lookup.project_keyworddetail_lookup[actual_lookup.values()[0]['keyword']]['alias_id']),str(Lookup.project_keyworddetail_lookup[actual_lookup.values()[0]['keyword']][metric])+'!='+str(actual_lookup.values()[0][metric])])


      except:
          exc_type, exc_value, exc_traceback = sys.exc_info()
          self.csv_writer.writerow([metric,' Failed for '+str(actual_lookup.values()[0]['keyword']+'for alias_id'+str(Lookup.project_keyworddetail_lookup[actual_lookup.values()[0]['keyword']]['alias_id'])),exc_traceback,exc_type,exc_value])
 def test_rank(self):
    self.comparator('rank')
 def test_search_volume(self):
    self.comparator('search_volume')


if __name__=='__main__':
    unittest.main()