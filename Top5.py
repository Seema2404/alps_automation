__author__ = '10569'

import requests
import json
#import xlsxwriter
#import xlrd
import subprocess
import csv
# import  Mailer_Reporter
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
import os
from collections import defaultdict

import itertools

CONN = s3.connect_to_region(region_name='us-east-1', aws_access_key_id='AKIAIDIF4SRGVJGDDUOQ',
                                        aws_secret_access_key='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')
BUCKET = 'qa.transform.test'
S3_PATH = 'iquanti/downloads/'

TAG = 'latest|en-us|google'
TODAY = datetime.datetime.today()
FILENAME = 'Top5-'+TODAY.strftime('%d-%m-%Y')+'.csv'

csvfileN = open('/opt/Alps_Automation/Final.csv', 'a')
csvfile1= open('/opt/Alps_Automation/Top5.csv', 'wb')
csvWriter1 = csv.writer(csvfile1, delimiter=',')
csvWriter1.writerow(['Fields', 'Expected', 'Actual', 'Result'])

TOP5_EXP='http://aut1.smallbizvoices.com/alps/dashboard/iquanti/projects/85/projectkeywordestimated?alias=0&limit=5&sort_by=-estimated_traffic_mom'
TOP5_ACT='http://qa5.smallbizvoices.com/alps/dashboard/iquanti/projects/85/projectkeywordestimated?alias=0&limit=5&sort_by=-estimated_traffic_mom'


TOP_EXP = (requests.get(TOP5_EXP).content).decode("utf-8")
TOP_ACT = (requests.get(TOP5_ACT).content).decode("utf-8")

print(TOP_EXP)

datajsonTOP_EXP=json.loads(TOP_EXP)
datajsonTOP_ACT=json.loads(TOP_ACT)

f=0
if((cmp(datajsonTOP_EXP['data'], datajsonTOP_ACT['data'])==0) and (len(datajsonTOP_EXP['data'])==len(datajsonTOP_ACT['data']))):

  for d1, d2 in zip(datajsonTOP_EXP['data'], datajsonTOP_ACT['data']):
    for key, value in d1.items():
        if str(value).strip() != str(d2[key]).strip():

            csvWriter1.writerow([key,value,d2[key],'Fail'])
        if str(value).strip() == str(d2[key]).strip():
            csvWriter1.writerow([key,value,d2[key],'Pass'])

if((cmp(datajsonTOP_EXP['data'], datajsonTOP_ACT['data'])!=0) and (len(datajsonTOP_EXP['data'])==len(datajsonTOP_ACT['data']))):
   f+=1
   for x in range(0,len(datajsonTOP_EXP['data'])):
        for t,z in zip(datajsonTOP_EXP['data'][x].keys(),datajsonTOP_ACT['data'][x].keys()):

               if(t in (datajsonTOP_ACT['data'][x].keys())):
                   if(str(datajsonTOP_EXP['data'][x][t]).strip()==str(datajsonTOP_ACT['data'][x][t]).strip()):
                     csvWriter1.writerow([t,datajsonTOP_EXP['data'][x][t],datajsonTOP_ACT['data'][x][t],'Pass'])
                   else:
                     csvWriter1.writerow([t,datajsonTOP_EXP['data'][x][t],datajsonTOP_ACT['data'][x][t],'Fail'])

                   print t,datajsonTOP_EXP['data'][x][t],datajsonTOP_ACT['data'][x][t]
               if(t not in (datajsonTOP_ACT['data'][x].keys())):

                   csvWriter1.writerow([t,datajsonTOP_EXP['data'][x][t],'Key not found','Fail'])


if((cmp(datajsonTOP_EXP['data'], datajsonTOP_ACT['data'])==0) and (len(datajsonTOP_EXP['data'])!=len(datajsonTOP_ACT['data']))):
  f+=1
  for d1, d2 in itertools.izip(datajsonTOP_EXP['data'], datajsonTOP_ACT['data']):
    for key, value in d1.items():
        if value != d2[key]:

            csvWriter1.writerow([key,value,d2[key],'Fail'])
        if value == d2[key]:
            csvWriter1.writerow([key,value,d2[key],'Pass'])

if((cmp(datajsonTOP_EXP['data'], datajsonTOP_ACT['data'])!=0) and (len(datajsonTOP_EXP['data'])!=len(datajsonTOP_ACT['data']))):
   f+=1
   for x in range(0,min(len(datajsonTOP_EXP['data']),len(datajsonTOP_EXP['data']))):
     try:
        for t,z in itertools.izip(datajsonTOP_EXP['data'][x].keys(),datajsonTOP_ACT['data'][x].keys()):

               if(t in (datajsonTOP_ACT['data'][x].keys())):
                   if(str(datajsonTOP_EXP['data'][x][t]).strip()==str(datajsonTOP_ACT['data'][x][t]).strip()):
                     csvWriter1.writerow([t,datajsonTOP_EXP['data'][x][t],datajsonTOP_ACT['data'][x][t],'Pass'])
                   if(str(datajsonTOP_EXP['data'][x][t]).strip()!=str(datajsonTOP_ACT['data'][x][t]).strip()):
                     csvWriter1.writerow([t,datajsonTOP_EXP['data'][x][t],datajsonTOP_ACT['data'][x][t],'Fail'])

                   print t,datajsonTOP_EXP['data'][x][t],datajsonTOP_ACT['data'][x][t]
               if(t not in (datajsonTOP_ACT['data'][x].keys())):

                   csvWriter1.writerow([t,datajsonTOP_EXP['data'][x][t],'Key not found','Fail'])
     except Exception:
         pass



#csvfileN= open('Final.csv', 'a')
csvWriterN = csv.writer(csvfileN, delimiter=',')
# csvWriterN.writerow(['Test Case','Result'])

if(f!=0):
    csvWriterN.writerow(['Top 5 has ' 'Failed'])
if(f==0):
    csvWriterN.writerow(['Top 5 has ' 'Passed'])

csvfileN.close()

csvfile1.close()
bucket = CONN.get_bucket(BUCKET)
key = Key(bucket)
key.key = S3_PATH+FILENAME
key.set_contents_from_filename('/opt/Alps_Automation/Top5.csv')

os.remove('/opt/Alps_Automation/Top5.csv')

