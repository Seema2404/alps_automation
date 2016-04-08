__author__ = '10569'


__author__ = '10569'
import requests
import json
import os
#import xlsxwriter
#import xlrd
import subprocess
import csv
import pymongo
from pymongo import MongoClient
from pymongo import MongoClient
from mongoengine import connect
import csv
import json
from boto import s3
from boto.s3.connection import S3Connection
from boto.s3.key import Key
import datetime
# import Mailer_Reporter
import itertools

CONN = s3.connect_to_region(region_name='us-east-1', aws_access_key_id='AKIAIDIF4SRGVJGDDUOQ',
                                        aws_secret_access_key='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')
BUCKET = 'qa.transform.test'
S3_PATH = 'iquanti/downloads/'
TAG = 'latest|en-us|google'
TODAY = datetime.datetime.today()
FILENAME = 'Theme List-'+TODAY.strftime('%d-%m-%Y')+'.csv'



csvfile1= open('/opt/Alps_Automation/Theme List.csv', 'wb')
csvWriter1 = csv.writer(csvfile1, delimiter=',')
csvWriter1.writerow(['Fields', 'Expected', 'Actual', 'Result'])


try:
 ALL_KW5_EXP='http://aut1.smallbizvoices.com/alps/dashboard/iquanti/projects/17/projectkeywordthemes?sort_by=theme_name&&limit=10&'
 ALL_KW5_ACT='http://qa5.smallbizvoices.com/alps/dashboard/iquanti/projects/17/projectkeywordthemes?sort_by=theme_name&&limit=10&'

 ALL_KW_EXP = requests.get(ALL_KW5_EXP).content
 ALL_KW_ACT = requests.get(ALL_KW5_ACT).content


 datajsonALL_KW_EXP=json.loads(ALL_KW_EXP)
 datajsonALL_KW_ACT=json.loads(ALL_KW_ACT)
except Exception as e:
 csvfileN= open('/opt/Alps_Automation/Final.csv', 'a')
 csvWriterN = csv.writer(csvfileN, delimiter=',')
 csvWriterN.writerow(['Theme List failed due to API response error'])
 csvfileN.close()



f=0
if((cmp(datajsonALL_KW_EXP['data'], datajsonALL_KW_ACT['data'])==0) and (len(datajsonALL_KW_EXP['data'])==len(datajsonALL_KW_ACT['data']))):

  for d1, d2 in zip(datajsonALL_KW_EXP['data'], datajsonALL_KW_ACT['data']):
    for key, value in d1.items():
        if str(value).strip() != str(d2[key]).strip():

            csvWriter1.writerow([key,value,d2[key],'Fail'])
        if str(value).strip() == str(d2[key]).strip():
            csvWriter1.writerow([key,value,d2[key],'Pass'])

if((cmp(datajsonALL_KW_EXP['data'], datajsonALL_KW_ACT['data'])!=0) and (len(datajsonALL_KW_EXP['data'])==len(datajsonALL_KW_ACT['data']))):
   f+=1
   for x in range(0,len(datajsonALL_KW_EXP['data'])):
        for t,z in zip(datajsonALL_KW_EXP['data'][x].keys(),datajsonALL_KW_ACT['data'][x].keys()):

               if(t in (datajsonALL_KW_ACT['data'][x].keys())):
                   if(str(datajsonALL_KW_EXP['data'][x][t]).strip()==str(datajsonALL_KW_ACT['data'][x][t]).strip()):
                     csvWriter1.writerow([t,datajsonALL_KW_EXP['data'][x][t],datajsonALL_KW_ACT['data'][x][t],'Pass'])
                   else:
                     csvWriter1.writerow([t,datajsonALL_KW_EXP['data'][x][t],datajsonALL_KW_ACT['data'][x][t],'Fail'])

                   print t,datajsonALL_KW_EXP['data'][x][t],datajsonALL_KW_ACT['data'][x][t]
               if(t not in (datajsonALL_KW_ACT['data'][x].keys())):

                   csvWriter1.writerow([t,datajsonALL_KW_EXP['data'][x][t],'Key not found','Fail'])


if((cmp(datajsonALL_KW_EXP['data'], datajsonALL_KW_ACT['data'])==0) and (len(datajsonALL_KW_EXP['data'])!=len(datajsonALL_KW_ACT['data']))):
  f+=1
  for d1, d2 in itertools.izip(datajsonALL_KW_EXP['data'], datajsonALL_KW_ACT['data']):
    for key, value in d1.items():
        if value != d2[key]:

            csvWriter1.writerow([key,value,d2[key],'Fail'])
        if value == d2[key]:
            csvWriter1.writerow([key,value,d2[key],'Pass'])

if((cmp(datajsonALL_KW_EXP['data'], datajsonALL_KW_ACT['data'])!=0) and (len(datajsonALL_KW_EXP['data'])!=len(datajsonALL_KW_ACT['data']))):
   f+=1
   for x in range(0,min(len(datajsonALL_KW_EXP['data']),len(datajsonALL_KW_EXP['data']))):
     try:
        for t,z in itertools.izip(datajsonALL_KW_EXP['data'][x].keys(),datajsonALL_KW_ACT['data'][x].keys()):

               if(t in (datajsonALL_KW_ACT['data'][x].keys())):
                   if(str(datajsonALL_KW_EXP['data'][x][t]).strip()==str(datajsonALL_KW_ACT['data'][x][t]).strip()):
                     csvWriter1.writerow([t,datajsonALL_KW_EXP['data'][x][t],datajsonALL_KW_ACT['data'][x][t],'Pass'])
                   if(str(datajsonALL_KW_EXP['data'][x][t]).strip()!=str(datajsonALL_KW_ACT['data'][x][t]).strip()):
                     csvWriter1.writerow([t,datajsonALL_KW_EXP['data'][x][t],datajsonALL_KW_ACT['data'][x][t],'Fail'])

                   print t,datajsonALL_KW_EXP['data'][x][t],datajsonALL_KW_ACT['data'][x][t]
               if(t not in (datajsonALL_KW_ACT['data'][x].keys())):

                   csvWriter1.writerow([t,datajsonALL_KW_EXP['data'][x][t],'Key not found','Fail'])
     except Exception:
         pass
csvfileN= open('/opt/Alps_Automation/Final.csv', 'a')
csvWriterN = csv.writer(csvfileN, delimiter=',')
# csvWriterN.writerow(['Test Case','Result'])

if(f!=0):
    csvWriterN.writerow(['Theme List has ' 'Failed'])
if(f==0):
    csvWriterN.writerow(['Theme List has ' 'Passed'])

csvfileN.close()

csvfile1.close()
bucket = CONN.get_bucket(BUCKET)
key = Key(bucket)
key.key = S3_PATH+FILENAME
key.set_contents_from_filename('/opt/Alps_Automation/Theme List.csv')

os.remove('/opt/Alps_Automation/Theme List.csv')

