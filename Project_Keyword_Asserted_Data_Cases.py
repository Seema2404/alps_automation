__author__ = '10569'
import requests
import csv
import json
from boto import s3
from boto.s3.connection import S3Connection
from boto.s3.key import Key
import datetime
import os
from collections import defaultdict
from pymongo import MongoClient
import itertools
import unittest
import unittest
#
# CONN = s3.connect_to_region(region_name='us-east-1', aws_access_key_id='AKIAJQTJYAOFX37E42ZA',
#                                         aws_secret_access_key='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')
# BUCKET = 'qa.transform.test'
# S3_PATH = 'iquanti/downloads/'
#
# TAG = 'latest|en-us|google'
# TODAY = datetime.datetime.today()
# FILENAME = 'Project_Keyword-'+TODAY.strftime('%d-%m-%Y')+'.csv'

#API_RESPONSE_TOP5_ESTIMATED=requests.get('http://qa5.smallbizvoices.com/alps/dashboard/iquanti/projects/85/projectkeywordestimated?alias=0&limit=5&sort_by=-estimated_traffic_mom&month=2&year=2016&traffic_sources=estimated_traffic')
#API_RESPONSE_BOTTOM5_ESTIMATED=requests.get('http://qa5.smallbizvoices.com/alps/dashboard/iquanti/projects/85/projectkeywordestimated?alias=0&limit=5&sort_by=estimated_traffic_mom&month=2&year=2016&traffic_sources=estimated_traffic')

import json
from urllib.request import urlopen

response = urlopen("http://qa5.smallbizvoices.com/alps/dashboard/iquanti/projects/85/projectkeywordestimated?alias=0&limit=5&sort_by=-estimated_traffic_mom&month=2&year=2016&traffic_sources=estimated_traffic").read().decode('utf8')


API_RESPONSE_TOP5_ESTIMATED_JSON=json.loads(response)

print (API_RESPONSE_TOP5_ESTIMATED_JSON['data'])
EXPECTED_DICT={}

client = MongoClient('52.87.217.175', 27017)
db=client.alps
DB=db.project_keyword_url_transform

KW_LIST=['american express delta credit card','no fee small business credit card','get business credit card','corporate business credit cards','best no fee business credit card']

for kw in KW_LIST:

 for n in range (0,len(API_RESPONSE_TOP5_ESTIMATED_JSON['data'])):
     if(API_RESPONSE_TOP5_ESTIMATED_JSON['data'][n]==kw):
         n=n

 print (kw)

 Q1=DB.find({'project_id':85,'keyword':kw,'alias_id':'0','month':1,'year':2016,'_tag':'latest_201601|en-us|google'})

 Q2=DB.find({'project_id':85,'keyword':kw,'alias_id':'0','month':2,'year':2016,'_tag':'latest_201602|en-us|google'})


 if(Q1.count==0):
    print ('No Data in mongo for keyword'+kw)
 if(Q2.count==0):
     pass
 if(Q1.count==0 and Q2.count==0):
     pass

 print(Q1.count(),Q2.count())
 try:
     t=0
     li=[]
     if(Q2.count()>=1):
        for i in range (0,Q2.count()):
         li.append(Q2[i]['rank'])
         t+=(Q2[i]['search_volume']*Q2[i]['ctr_percentage'])
         EXPECTED_DICT['estimated_traffic']=t/100
     li.sort()
     EXPECTED_DICT['rank']=(li[0])

     t=0
     li=[]
     if(Q1.count()>=1):
       for i in range (0,Q1.count()):
         li.append(Q1[i]['rank'])
         t+=(Q1[i]['search_volume']*Q1[i]['ctr_percentage'])
         EXPECTED_DICT['estimated_traffic_prev']=t/100
     li.sort()
     EXPECTED_DICT['rank_prev']=(li[0])
 except:
     pass




 EXPECTED_DICT['alias_id']=Q2[0]['alias_id']
 EXPECTED_DICT['search_volume']=Q2[0]['search_volume']
 EXPECTED_DICT['month']=Q2[0]['month']
 EXPECTED_DICT['year']=Q2[0]['year']
 EXPECTED_DICT['serp_date']=Q2[0]['serp_date']
 EXPECTED_DICT['keyword']=Q2[0]['keyword']
 EXPECTED_DICT['url']=Q2[0]['url']
 EXPECTED_DICT['alias_name']=Q2[0]['alias_name']
 EXPECTED_DICT['search_volume']=Q2[0]['search_volume']
 EXPECTED_DICT['tenant_code']=Q2[0]['tenant_code']
 EXPECTED_DICT['search_volume_prev']=Q1[0]['search_volume']
 EXPECTED_DICT['project_id']=Q2[0]['project_id']
 EXPECTED_DICT['rank_mom']=EXPECTED_DICT['rank']-EXPECTED_DICT['rank_prev']
 EXPECTED_DICT['search_volume_mom']=Q1[0]['search_volume']-Q2[0]['search_volume']
 EXPECTED_DICT['search_volume_mom_percentage']=((EXPECTED_DICT['search_volume_mom'])/Q2[0]['search_volume'])*100
 EXPECTED_DICT['estimated_traffic_mom']=EXPECTED_DICT['estimated_traffic']-EXPECTED_DICT['estimated_traffic_prev']
 EXPECTED_DICT['estimated_traffic_mom_percentage']=(EXPECTED_DICT['estimated_traffic_mom']/EXPECTED_DICT['estimated_traffic_prev'])*100

 def nearly_equal(a,b,sig_fig):
    return ( a==b or
             int(a*10**sig_fig) == int(b*10**sig_fig)
           )

 try:
   assert (set(EXPECTED_DICT)) == (set(API_RESPONSE_TOP5_ESTIMATED_JSON['data'][n]))
   assert nearly_equal(a=EXPECTED_DICT['estimated_traffic_mom'],b=API_RESPONSE_TOP5_ESTIMATED_JSON['data'][n]['estimated_traffic_mom'],sig_fig=1)
   assert nearly_equal(a=EXPECTED_DICT['estimated_traffic_mom_percentage'],b=API_RESPONSE_TOP5_ESTIMATED_JSON['data'][n]['estimated_traffic_mom_percentage'],sig_fig=1)
   assert nearly_equal(a=EXPECTED_DICT['rank_mom'],b=API_RESPONSE_TOP5_ESTIMATED_JSON['data'][n]['rank_mom'],sig_fig=1)
   assert nearly_equal(a=EXPECTED_DICT['search_volume_mom'],b=API_RESPONSE_TOP5_ESTIMATED_JSON['data'][n]['search_volume_mom'],sig_fig=1)
   assert nearly_equal(a=EXPECTED_DICT['search_volume_mom_percentage'],b=API_RESPONSE_TOP5_ESTIMATED_JSON['data'][n]['search_volume_mom_percentage'],sig_fig=1)

   csvfileN= open('Final.csv', 'a')
   csvWriterN = csv.writer(csvfileN, delimiter=',')
   csvWriterN.writerow(['Project Keyword for estimated Top 5 has passed using assertion'])

 except Exception as e:
   csvfileN= open('Final.csv', 'a')
   csvWriterN = csv.writer(csvfileN, delimiter=',')
   csvWriterN.writerow(['Project Keyword for estimated Top 5 has failed using assertion'])

