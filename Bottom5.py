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
FILENAME = 'Bottom5-'+TODAY.strftime('%d-%m-%Y')+'.csv'


csvfile1= open('/opt/Alps_Automation/Bottom5.csv', 'wb')
csvWriter1 = csv.writer(csvfile1, delimiter=',')
csvWriter1.writerow(['Fields', 'Expected', 'Actual', 'Result'])

BOT5_EXP='http://aut1.smallbizvoices.com/alps/dashboard/iquanti/projects/85/projectkeywordestimated?alias=0&limit=5&sort_by=estimated_traffic_mom'
BOT5_ACT='http://qa5.smallbizvoices.com/alps/dashboard/iquanti/projects/85/projectkeywordestimated?alias=0&limit=5&sort_by=estimated_traffic_mom'


BOT_EXP = requests.get(BOT5_EXP).content
BOT_ACT = requests.get(BOT5_ACT).content


datajsonBOT_EXP=json.loads(BOT_EXP)
datajsonBOT_ACT=json.loads(BOT_ACT)

f=0
if((cmp(datajsonBOT_EXP['data'], datajsonBOT_ACT['data'])==0) and (len(datajsonBOT_EXP['data'])==len(datajsonBOT_ACT['data']))):

  for d1, d2 in zip(datajsonBOT_EXP['data'], datajsonBOT_ACT['data']):
    for key, value in d1.items():
        if str(value).strip() != str(d2[key]).strip():

            csvWriter1.writerow([key,value,d2[key],'Fail'])
        if str(value).strip() == str(d2[key]).strip():
            csvWriter1.writerow([key,value,d2[key],'Pass'])

if((cmp(datajsonBOT_EXP['data'], datajsonBOT_ACT['data'])!=0) and (len(datajsonBOT_EXP['data'])==len(datajsonBOT_ACT['data']))):
   f+=1
   for x in range(0,len(datajsonBOT_EXP['data'])):
        for t,z in zip(datajsonBOT_EXP['data'][x].keys(),datajsonBOT_ACT['data'][x].keys()):

               if(t in (datajsonBOT_ACT['data'][x].keys())):
                   if(str(datajsonBOT_EXP['data'][x][t]).strip()==str(datajsonBOT_ACT['data'][x][t]).strip()):
                     csvWriter1.writerow([t,datajsonBOT_EXP['data'][x][t],datajsonBOT_ACT['data'][x][t],'Pass'])
                   else:
                     csvWriter1.writerow([t,datajsonBOT_EXP['data'][x][t],datajsonBOT_ACT['data'][x][t],'Fail'])

                   print t,datajsonBOT_EXP['data'][x][t],datajsonBOT_ACT['data'][x][t]
               if(t not in (datajsonBOT_ACT['data'][x].keys())):

                   csvWriter1.writerow([t,datajsonBOT_EXP['data'][x][t],'Key not found','Fail'])


if((cmp(datajsonBOT_EXP['data'], datajsonBOT_ACT['data'])==0) and (len(datajsonBOT_EXP['data'])!=len(datajsonBOT_ACT['data']))):
  f+=1
  for d1, d2 in itertools.izip(datajsonBOT_EXP['data'], datajsonBOT_ACT['data']):
    for key, value in d1.items():
        if value != d2[key]:

            csvWriter1.writerow([key,value,d2[key],'Fail'])
        if value == d2[key]:
            csvWriter1.writerow([key,value,d2[key],'Pass'])

if((cmp(datajsonBOT_EXP['data'], datajsonBOT_ACT['data'])!=0) and (len(datajsonBOT_EXP['data'])!=len(datajsonBOT_ACT['data']))):
   f+=1
   for x in range(0,min(len(datajsonBOT_EXP['data']),len(datajsonBOT_EXP['data']))):
     try:
        for t,z in itertools.izip(datajsonBOT_EXP['data'][x].keys(),datajsonBOT_ACT['data'][x].keys()):

               if(t in (datajsonBOT_ACT['data'][x].keys())):
                   if(str(datajsonBOT_EXP['data'][x][t]).strip()==str(datajsonBOT_ACT['data'][x][t]).strip()):
                     csvWriter1.writerow([t,datajsonBOT_EXP['data'][x][t],datajsonBOT_ACT['data'][x][t],'Pass'])
                   if(str(datajsonBOT_EXP['data'][x][t]).strip()!=str(datajsonBOT_ACT['data'][x][t]).strip()):
                     csvWriter1.writerow([t,datajsonBOT_EXP['data'][x][t],datajsonBOT_ACT['data'][x][t],'Fail'])

                   print t,datajsonBOT_EXP['data'][x][t],datajsonBOT_ACT['data'][x][t]
               if(t not in (datajsonBOT_ACT['data'][x].keys())):

                   csvWriter1.writerow([t,datajsonBOT_EXP['data'][x][t],'Key not found','Fail'])
     except Exception:
         pass

csvfileN= open('/opt/Alps_Automation/Final.csv', 'a')
csvWriterN = csv.writer(csvfileN, delimiter=',')
# csvWriterN.writerow(['Test Case','Result'])

if(f!=0):
    csvWriterN.writerow(['Bottom 5 has ' 'Failed'])
if(f==0):
    csvWriterN.writerow(['Bottom 5 has ' 'Passed'])

csvfileN.close()

csvfile1.close()
bucket = CONN.get_bucket(BUCKET)
key = Key(bucket)
key.key = S3_PATH+FILENAME
key.set_contents_from_filename('/opt/Alps_Automation/Bottom5.csv')

os.remove('/opt/Alps_Automation/Bottom5.csv')

