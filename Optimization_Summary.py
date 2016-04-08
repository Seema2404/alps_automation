__author__ = '10569'
import requests
import json
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
import os
import itertools

CONN = s3.connect_to_region(region_name='us-east-1', aws_access_key_id='AKIAIDIF4SRGVJGDDUOQ',
                                        aws_secret_access_key='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')
BUCKET = 'qa.transform.test'
S3_PATH = 'iquanti/downloads/'

TAG = 'latest|en-us|google'
TODAY = datetime.datetime.today()
FILENAME1 = 'My Domain Optimisation Summary-'+TODAY.strftime('%d-%m-%Y')+'.csv'
FILENAME2='Competitor Optimisation Summary-'+TODAY.strftime('%d-%m-%Y')+'.csv'

GET_ALL_KW_ID='http://qa5.smallbizvoices.com/alps/manage/iquanti/projects/17/details'
GET_ALLKW_ID_CON = requests.get(GET_ALL_KW_ID).content
datajsonGET_ALL_KW_ID=json.loads(GET_ALLKW_ID_CON)
KWID_LIST=[]

csvfile1= open('/opt/Alps_Automation/My Domain Optimisation Summary.csv', 'wb')
csvWriter1 = csv.writer(csvfile1, delimiter=',')
csvWriter1.writerow(['Fields', 'Expected', 'Actual', 'Result'])

csvfile2= open('/opt/Alps_Automation/Competitor Optimisation Summary.csv', 'wb')
csvWriter2 = csv.writer(csvfile2, delimiter=',')
csvWriter2.writerow(['Fields', 'Expected', 'Actual', 'Result'])

for key, value in datajsonGET_ALL_KW_ID['data'].iteritems():
    if key == 'keywords':
        for keyword in value.iteritems():
            KWID_LIST.append(keyword[1]['id'])


for id in KWID_LIST:

   MYDOM_KWURL_EXP='http://aut1.smallbizvoices.com/alps/dashboard/iquanti/projects/17/projectkeyworddetail?alias=0&keywords='+str(id)+'&limit=10&offset=0&latest_only=1'
   COMPDOM_KWURL_EXP='http://aut1.smallbizvoices.com/alps/dashboard/iquanti/projects/17/projectkeyworddetail?&alias=-1&alias=64&alias=65&keywords='+str(id)+'&limit=10&offset=0&&&latest_only=1'
   MYDOM_KWURL_ACT='http://qa5.smallbizvoices.com/alps/dashboard/iquanti/projects/17/projectkeyworddetail?&alias=0&keywords='+str(id)+'&limit=10&offset=0&latest_only=1'
   COMPDOM_KWURL_ACT='http://qa5.smallbizvoices.com/alps/dashboard/iquanti/projects/17/projectkeyworddetail?&alias=-1&alias=64&alias=65&keywords='+str(id)+'&limit=10&offset=0&&&latest_only=1'


   MY_EXP = requests.get(MYDOM_KWURL_EXP).content
   COMP_EXP = requests.get(COMPDOM_KWURL_EXP).content

   MY_ACT=requests.get(MYDOM_KWURL_ACT).content
   COMP_ACT=requests.get(COMPDOM_KWURL_ACT).content


   datajsonMY_EXP=json.loads(MY_EXP)
   datajsonCOMP_EXP=json.loads(COMP_EXP)



   datajsonMY_ACT=json.loads(MY_ACT)
   datajsonCOMP_ACT=json.loads(COMP_ACT)


f=0
if((cmp(datajsonMY_EXP['data'], datajsonMY_ACT['data'])==0) and (len(datajsonMY_EXP['data'])==len(datajsonMY_ACT['data']))):

  for d1, d2 in zip(datajsonMY_EXP['data'], datajsonMY_ACT['data']):
    for key, value in d1.items():
        if str(value).strip() != str(d2[key]).strip():

            csvWriter1.writerow([key,value,d2[key],'Fail'])
        if str(value).strip() == str(d2[key]).strip():
            csvWriter1.writerow([key,value,d2[key],'Pass'])

if((cmp(datajsonMY_EXP['data'], datajsonMY_ACT['data'])!=0) and (len(datajsonMY_EXP['data'])==len(datajsonMY_ACT['data']))):
   f+=1
   for x in range(0,len(datajsonMY_EXP['data'])):
        for t,z in zip(datajsonMY_EXP['data'][x].keys(),datajsonMY_ACT['data'][x].keys()):

               if(t in (datajsonMY_ACT['data'][x].keys())):
                   if(str(datajsonMY_EXP['data'][x][t]).strip()==str(datajsonMY_ACT['data'][x][t]).strip()):
                     csvWriter1.writerow([t,datajsonMY_EXP['data'][x][t],datajsonMY_ACT['data'][x][t],'Pass'])
                   else:
                     csvWriter1.writerow([t,datajsonMY_EXP['data'][x][t],datajsonMY_ACT['data'][x][t],'Fail'])

                   print t,datajsonMY_EXP['data'][x][t],datajsonMY_ACT['data'][x][t]
               if(t not in (datajsonMY_ACT['data'][x].keys())):

                   csvWriter1.writerow([t,datajsonMY_EXP['data'][x][t],'Key not found','Fail'])


if((cmp(datajsonMY_EXP['data'], datajsonMY_ACT['data'])==0) and (len(datajsonMY_EXP['data'])!=len(datajsonMY_ACT['data']))):
  f+=1
  for d1, d2 in itertools.izip(datajsonMY_EXP['data'], datajsonMY_ACT['data']):
    for key, value in d1.items():
        if value != d2[key]:

            csvWriter1.writerow([key,value,d2[key],'Fail'])
        if value == d2[key]:
            csvWriter1.writerow([key,value,d2[key],'Pass'])

if((cmp(datajsonMY_EXP['data'], datajsonMY_ACT['data'])!=0) and (len(datajsonMY_EXP['data'])!=len(datajsonMY_ACT['data']))):
   f+=1
   for x in range(0,min(len(datajsonMY_EXP['data']),len(datajsonMY_EXP['data']))):
     try:
        for t,z in itertools.izip(datajsonMY_EXP['data'][x].keys(),datajsonMY_ACT['data'][x].keys()):

               if(t in (datajsonMY_ACT['data'][x].keys())):
                   if(str(datajsonMY_EXP['data'][x][t]).strip()==str(datajsonMY_ACT['data'][x][t]).strip()):
                     csvWriter1.writerow([t,datajsonMY_EXP['data'][x][t],datajsonMY_ACT['data'][x][t],'Pass'])
                   if(str(datajsonMY_EXP['data'][x][t]).strip()!=str(datajsonMY_ACT['data'][x][t]).strip()):
                     csvWriter1.writerow([t,datajsonMY_EXP['data'][x][t],datajsonMY_ACT['data'][x][t],'Fail'])

                   print t,datajsonMY_EXP['data'][x][t],datajsonMY_ACT['data'][x][t]
               if(t not in (datajsonMY_ACT['data'][x].keys())):

                   csvWriter1.writerow([t,datajsonMY_EXP['data'][x][t],'Key not found','Fail'])
     except Exception:
         pass

csvfileN= open('/opt/Alps_Automation/Final.csv', 'a')
csvWriterN = csv.writer(csvfileN, delimiter=',')
# csvWriterN.writerow(['Test Case','Result'])

if(f!=0):
    csvWriterN.writerow(['My Domain Optimisation Summary has ' 'Failed'])
if(f==0):
    csvWriterN.writerow(['My Domain Optimisation Summary has ' 'Passed'])

csvfileN.close()


bucket1 = CONN.get_bucket(BUCKET)
key = Key(bucket1)
key.key = S3_PATH+FILENAME1
key.set_contents_from_filename('/opt/Alps_Automation/My Domain Optimisation Summary.csv')



f=0
if((cmp(datajsonCOMP_EXP['data'], datajsonCOMP_ACT['data'])==0) and (len(datajsonCOMP_EXP['data'])==len(datajsonCOMP_ACT['data']))):

  for d1, d2 in zip(datajsonCOMP_EXP['data'], datajsonCOMP_ACT['data']):
    for key, value in d1.items():
        if str(value).strip() != str(d2[key]).strip():

            csvWriter2.writerow([key,value,d2[key],'Fail'])
        if str(value).strip() == str(d2[key]).strip():
            csvWriter2.writerow([key,value,d2[key],'Pass'])

if((cmp(datajsonCOMP_EXP['data'], datajsonCOMP_ACT['data'])!=0) and (len(datajsonCOMP_EXP['data'])==len(datajsonCOMP_ACT['data']))):
   f+=1
   for x in range(0,len(datajsonCOMP_EXP['data'])):
        for t,z in zip(datajsonCOMP_EXP['data'][x].keys(),datajsonCOMP_ACT['data'][x].keys()):

               if(t in (datajsonCOMP_ACT['data'][x].keys())):
                   if(str(datajsonCOMP_EXP['data'][x][t]).strip()==str(datajsonCOMP_ACT['data'][x][t]).strip()):
                     csvWriter2.writerow([t,datajsonCOMP_EXP['data'][x][t],datajsonCOMP_ACT['data'][x][t],'Pass'])
                   else:
                     csvWriter2.writerow([t,datajsonCOMP_EXP['data'][x][t],datajsonCOMP_ACT['data'][x][t],'Fail'])

                   print t,datajsonCOMP_EXP['data'][x][t],datajsonCOMP_ACT['data'][x][t]
               if(t not in (datajsonCOMP_ACT['data'][x].keys())):

                   csvWriter2.writerow([t,datajsonCOMP_EXP['data'][x][t],'Key not found','Fail'])


if((cmp(datajsonCOMP_EXP['data'], datajsonCOMP_ACT['data'])==0) and (len(datajsonCOMP_EXP['data'])!=len(datajsonCOMP_ACT['data']))):
  f+=1
  for d1, d2 in itertools.izip(datajsonCOMP_EXP['data'], datajsonCOMP_ACT['data']):
    for key, value in d1.items():
        if value != d2[key]:

            csvWriter2.writerow([key,value,d2[key],'Fail'])
        if value == d2[key]:
            csvWriter2.writerow([key,value,d2[key],'Pass'])

if((cmp(datajsonCOMP_EXP['data'], datajsonCOMP_ACT['data'])!=0) and (len(datajsonCOMP_EXP['data'])!=len(datajsonCOMP_ACT['data']))):
   f+=1
   for x in range(0,min(len(datajsonCOMP_EXP['data']),len(datajsonCOMP_EXP['data']))):
     try:
        for t,z in itertools.izip(datajsonCOMP_EXP['data'][x].keys(),datajsonCOMP_ACT['data'][x].keys()):

               if(t in (datajsonCOMP_ACT['data'][x].keys())):
                   if(str(datajsonCOMP_EXP['data'][x][t]).strip()==str(datajsonCOMP_ACT['data'][x][t]).strip()):
                     csvWriter2.writerow([t,datajsonCOMP_EXP['data'][x][t],datajsonCOMP_ACT['data'][x][t],'Pass'])
                   if(str(datajsonCOMP_EXP['data'][x][t]).strip()!=str(datajsonCOMP_ACT['data'][x][t]).strip()):
                     csvWriter2.writerow([t,datajsonCOMP_EXP['data'][x][t],datajsonCOMP_ACT['data'][x][t],'Fail'])

                   print t,datajsonCOMP_EXP['data'][x][t],datajsonCOMP_ACT['data'][x][t]
               if(t not in (datajsonCOMP_ACT['data'][x].keys())):

                   csvWriter2.writerow([t,datajsonCOMP_EXP['data'][x][t],'Key not found','Fail'])
     except Exception:
         pass
csvfileN= open('/opt/Alps_Automation/Final.csv', 'a')
csvWriterN = csv.writer(csvfileN, delimiter=',')
# csvWriterN.writerow(['Test Case','Result'])

if(f!=0):
    csvWriterN.writerow(['Competitor Optimisation Summary has ' 'Failed'])
if(f==0):
    csvWriterN.writerow(['Competitor Optimisation Summary has ' 'Passed'])

csvfileN.close()

csvfile2.close()

bucket2 = CONN.get_bucket(BUCKET)
key = Key(bucket2)
key.key = S3_PATH+FILENAME2
key.set_contents_from_filename('/opt/Alps_Automation/Competitor Optimisation Summary.csv')

