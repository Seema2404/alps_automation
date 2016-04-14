import requests
import json
import csv
import unittest
import sys
import time,calendar,datetime
import data_collection_projectkeywordestimated




class TestProjectKeywordEstimated(unittest.TestCase):

#Setup method establish connection with API ,gets the data and loads into JSON format
  @classmethod
  def setUpClass(cls):

        cls.keyword_metrics=data_collection_projectkeywordestimated.keyword_metrics
        cls.csvfile1= open('Metric_Test_Report.csv', 'wb')
        cls.csvWriter1 = csv.writer(cls.csvfile1, delimiter=',')
        cls.csvWriter1.writerow(['\bMetric results for projectkeywordestimated API\b\n\n\n'])

        try:
            project_keyword_api_response='http://qa5.smallbizvoices.com/alps/dashboard/iquanti/projects/224/projectkeywordestimated?alias=0&sort_by=-estimated_traffic_mom&offset=0&&rates=true&session_token=alps_st_018mh5zlp4srdum5zuzmu3onyrm9008c'
            str_project_keyword_api_response = (requests.get(project_keyword_api_response).content).decode("utf-8")
            cls.json_project_keyword_api_response=json.loads(str_project_keyword_api_response)
        except Exception as e:
            print "ProjectKeywordEstimated API did not give any response"
            cls.csvWriter1.writerow(['ProjectKeywordEstimated API did not give any response'])


#This is a generic method to compare metrics

  def comparator(self,metric):


      for k in range(0,len(self.keyword_metrics)):

          try:
            f1=self.keyword_metrics[k][metric]
            f2=self.json_project_keyword_api_response['data'][k][metric]

            if(round(f1,3)==round(f2,3)):
              print "(%s passed for %s)" %(metric,self.keyword_metrics[k]['keyword'])
              self.csvWriter1.writerow([metric+' passed for '+self.keyword_metrics[k]['keyword']])
            else:
              print "(%s failed for %s because assertion value mismatch:Expected %s but API returned %s)" %(metric,str(self.keyword_metrics[k]['keyword']),str(self.keyword_metrics[k][metric]),str(self.json_project_keyword_api_response['data'][k][metric]))
              self.csvWriter1.writerow([metric+' failed for '+str(self.keyword_metrics[k]['keyword'])+' because assertion value mismatch:Expected '+str(self.keyword_metrics[k][metric])+' but API returned '+str(self.json_project_keyword_api_response['data'][k][metric])])


          except Exception as e:
            exc_type, exc_value, exc_traceback = sys.exc_info()
            print "(%s failed for %s due to code failure %s)" %(metric,str(self.keyword_metrics[k]['keyword']),str(exc_type))
            self.csvWriter1.writerow([metric+' failed for '+str(self.keyword_metrics[k]['keyword'])+' due to code failure '+str(exc_type)])

#This is a generic method to calculate mtd_factor
  def mtd_factor_calculator(self):
      now = datetime.datetime.now()
      total_days_month=calendar.monthrange(now.year, now.month)[1]
      r=time.strftime("%d")
      factor=((int(r))/float(total_days_month))

      return factor
#This is to test boundary conditions of rank_metric(0,any int,NA,bit int)

  def test_rank(self):
      print "Test Case: 01_Boundary_cases_for_rank_variable"
      print "Description:Boundary values: null,any int,>51,<51,NA"
      self.comparator('rank')

#This is to test boundary conditions of rank_mom_metric(0,any int,NA,bit int)
#01_Boundary_cases_for_rank_mom
#(Boundary values: null,any int,>51,<51,NA)
  def test_rank_mom(self):
      print "Test Case: 02_Boundary_cases_for_rank_mom"
      print "Description:Boundary values: null,any int,>51,<51,NA"
      self.comparator('rank_mom')


#This is to test boundary conditions of rank_prev_metric(0,any int,NA,bit int)
#01_Boundary_cases_for_rank_prev_variable
#(Boundary values: null,any int,>51,<51,NA)
  def test_rank_prev(self):
      print "Test Case: 03_Boundary_cases_for_rank_prev_variable"
      print "Description:Boundary values: null,any int,>51,<51,NA"
      self.comparator('rank_prev')


#This is to test boundary conditions of search_volume_metric(0,any int,NA,bit int)
#01_Boundary_cases_for_search_volume
#(Boundary values: null,big int,big float,NA,)
  def test_search_volume(self):
     print "Test Case: 04_Boundary_cases_for_search_volume"
     print "Description:Boundary values: null,big int,big float,NA"
     self.comparator('search_volume')

#This is to test boundary conditions of search_volume_prev_metric(0,any int,NA,bit int)
#01_Boundary_cases_for_search_volume_variable
#(Boundary values: null,big int,big float,NA,)
  def test_search_volume_prev(self):
     print "Test Case: 05_Boundary_cases_for_search_volume_variable"
     print "Description:Boundary values: null,big int,big float,NA"
     self.comparator('search_volume_prev')

#This is to test boundary conditions of search_volume_mom_percentage(0,any int,NA,bit int,float)
#01_Boundary_cases_for_search_volume_mom_percentage_variable
#(Boundary values: null,big int,big float,NA,)
  def test_search_volume_mom_percentage(self):
      print "Test Case: 06_Boundary_cases_for_search_volume_mom_percentage"
      print "Description:Boundary values: null,big int,big float,NA"
      self.comparator('search_volume_mom_percentage')

#This is to test boundary conditions of search_volume_mom_metric(0,any int,NA,bit int,float)
#01_Boundary_cases_for_search_volume_mom_percentage_variable
#(Boundary values: null,big int,big float,NA,)
  def test_search_volume_mom(self):
       print "Test Case: 07_Boundary_cases_for_search_volume_mom_percentage"
       print "Description:Boundary values: null,big int,big float,NA"
       self.comparator('search_volume_mom')

#This is to test boundary conditions of estimated_traffic_mtd_metric(0,any int,NA,bit int,float)
#01_Boundary_cases_for_estimated_traffic_mtd_variable
#(Boundary values: null,big int,big float,NA,)
  def test_estimated_traffic_mtd(self):
       print "Test Case: 07_Boundary_cases_for_estimated_traffic_mtd_variable"
       print "Description:Boundary values: null,big int,big float,NA"
       for j in range (0,len(self.keyword_metrics)):
                  mtd_factor=self.mtd_factor_calculator()
                  try:
                    computed_est_traffic_mtd=(self.keyword_metrics[j]['search_volume']*(self.keyword_metrics[j]['ctr_percentage'])/100)*mtd_factor

                  except Exception as e:
                      a =  computed_est_traffic_mtd
                      print computed_est_traffic_mtd
                      exc_type, exc_value, exc_traceback = sys.exc_info()
                      print "(computed_est_traffic_mtd calculation failed for %s due to %s %s)" %(str(self.keyword_metrics[j]['keyword']),str(exc_type),str(exc_traceback))
                      self.csvWriter1.writerow(['computed_est_traffic_mtd calculation failed for '+str(self.keyword_metrics[j]['keyword'])+'due to'+str(exc_type)+str(exc_traceback)])

                  try:
                    self.assertAlmostEqual(computed_est_traffic_mtd,self.json_project_keyword_api_response['data'][j]['estimated_traffic'])
                    print "(Estimated_traffic metric passed for %s )" %(str(self.keyword_metrics[j]['keyword']))
                    self.csvWriter1.writerow(['Estimated_traffic metric passed for  '+str(self.keyword_metrics[j]['keyword'])])
                  except AssertionError as e:
                    print "(Estimates_traffic failed for %s because assertion value mismatch:Expected %s but API returned %s)" %(str(self.keyword_metrics[j]['keyword']),str(computed_est_traffic_mtd),str(self.json_project_keyword_api_response['data'][j]['estimated_traffic']))
                    self.csvWriter1.writerow(['Estimates_traffic failed for '+str(self.keyword_metrics[j]['keyword'])+ ' because assertion value mismatch:Expected '+str(computed_est_traffic_mtd)+' but API returned '+str(self.json_project_keyword_api_response['data'][j]['estimated_traffic'])])
                  except Exception as e:
                   exc_type, exc_value, exc_traceback = sys.exc_info()
                   print "(Estimated_traffic failed for %s due to code failure %s)" %(str(self.keyword_metrics[j]['keyword']),str(exc_type))
                   self.csvWriter1.writerow(['Estimated_traffic failed for  '+str(self.keyword_metrics[j]['keyword'])+' due to code failure '+str(exc_type)])

#This is to test boundary conditions of estimated_traffic_prev(0,any int,NA,bit int,float)
#This is to test boundary conditions of estimated_traffic_mtd_metric(0,any int,NA,bit int,float)
#01_Boundary_cases_for_estimated_traffic_mtd_variable
#(Boundary values: null,big int,big float,NA,)
  def test_estimated_traffic_prev(self):
   print "Test Case: 07_Boundary_cases_for_estimated_traffic_prev"
   print "Description:Boundary values: 0,any int,NA,bit int,float"
   self.comparator('estimated_traffic_prev')
#This is to test boundary conditions of estimated_traffic_mom_metric(0,any int,NA,bit int,float)
#01_Boundary_cases_for_estimated_traffic_mom_variable
#(Boundary values: null,big int,big float,NA,)
  def test_estimated_traffic_mom(self):
      print "Test Case: 07_Boundary_cases_for_estimated_traffic_mom_variable"
      print "Description:Boundary values: 0,any int,NA,bit int,float"
      self.comparator('estimated_traffic_mom')
#This is to test boundary conditions of estimated_traffic_mom_percentage_metric(0,any int,NA,bit int,float)
#This is to test boundary conditions of estimated_traffic_mom_percentage_metric(0,any int,NA,bit int,float)
#01_Boundary_cases_for_estimated_traffic_mom_percentage_variable
#(Boundary values: null,big int,big float,NA,)
  def test_estimated_traffic_mom_percentage(self):
      print "Test Case: 07_Boundary_cases_for_estimated_traffic_mom_percentage"
      print "Description:Boundary values: null,big int,big float,NA"
      self.comparator('estimated_traffic_mom_percentage')

