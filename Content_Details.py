__author__ = '10569'

__author__ = '10451'

import requests
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
FILENAME = 'Content_Details'+TODAY.strftime('%d-%m-%Y')+'.csv'


csvfile1= open('/opt/Alps_Automation/Content_Details.csv', 'wb')
csvWriter1 = csv.writer(csvfile1, delimiter=',')
csvWriter1.writerow(['Fields', 'Expected', 'Actual', 'Result'])

CONTSUM1_EXP='http://aut1.smallbizvoices.com/alps/dashboard/iquanti/projects/5/projectcontentdetailurl?alias=0'
CONTSUM1_ACT='http://qa5.smallbizvoices.com/alps/dashboard/iquanti/projects/5/projectcontentdetailurl?alias=0'


CS1_EXP = requests.get(CONTSUM1_EXP).content
CS1_ACT = requests.get(CONTSUM1_ACT).content


datajsonCS1_EXP=json.loads(CS1_EXP)
datajsonCS1_ACT=json.loads(CS1_ACT)

f=0
if((cmp(datajsonCS1_EXP['data'], datajsonCS1_ACT['data'])==0) and (len(datajsonCS1_EXP['data'])==len(datajsonCS1_ACT['data']))):

  for d1, d2 in zip(datajsonCS1_EXP['data'], datajsonCS1_ACT['data']):
    for key, value in d1.items():
        if str(value).strip() != str(d2[key]).strip():

            csvWriter1.writerow([key,value,d2[key],'Fail'])
        if str(value).strip() == str(d2[key]).strip():
            csvWriter1.writerow([key,value,d2[key],'Pass'])

if((cmp(datajsonCS1_EXP['data'], datajsonCS1_ACT['data'])!=0) and (len(datajsonCS1_EXP['data'])==len(datajsonCS1_ACT['data']))):
   f+=1
   for x in range(0,len(datajsonCS1_EXP['data'])):
        for t,z in zip(datajsonCS1_EXP['data'][x].keys(),datajsonCS1_ACT['data'][x].keys()):

               if(t in (datajsonCS1_ACT['data'][x].keys())):
                   if(str(datajsonCS1_EXP['data'][x][t]).strip()==str(datajsonCS1_ACT['data'][x][t]).strip()):
                     csvWriter1.writerow([t,datajsonCS1_EXP['data'][x][t],datajsonCS1_ACT['data'][x][t],'Pass'])
                   else:
                     csvWriter1.writerow([t,datajsonCS1_EXP['data'][x][t],datajsonCS1_ACT['data'][x][t],'Fail'])

                   print t,datajsonCS1_EXP['data'][x][t],datajsonCS1_ACT['data'][x][t]
               if(t not in (datajsonCS1_ACT['data'][x].keys())):

                   csvWriter1.writerow([t,datajsonCS1_EXP['data'][x][t],'Key not found','Fail'])


if((cmp(datajsonCS1_EXP['data'], datajsonCS1_ACT['data'])==0) and (len(datajsonCS1_EXP['data'])!=len(datajsonCS1_ACT['data']))):
  f+=1
  for d1, d2 in itertools.izip(datajsonCS1_EXP['data'], datajsonCS1_ACT['data']):
    for key, value in d1.items():
        if value != d2[key]:

            csvWriter1.writerow([key,value,d2[key],'Fail'])
        if value == d2[key]:
            csvWriter1.writerow([key,value,d2[key],'Pass'])

if((cmp(datajsonCS1_EXP['data'], datajsonCS1_ACT['data'])!=0) and (len(datajsonCS1_EXP['data'])!=len(datajsonCS1_ACT['data']))):
   f+=1
   for x in range(0,min(len(datajsonCS1_EXP['data']),len(datajsonCS1_EXP['data']))):
     try:
        for t,z in itertools.izip(datajsonCS1_EXP['data'][x].keys(),datajsonCS1_ACT['data'][x].keys()):

               if(t in (datajsonCS1_ACT['data'][x].keys())):
                   if(str(datajsonCS1_EXP['data'][x][t]).strip()==str(datajsonCS1_ACT['data'][x][t]).strip()):
                     csvWriter1.writerow([t,datajsonCS1_EXP['data'][x][t],datajsonCS1_ACT['data'][x][t],'Pass'])
                   if(str(datajsonCS1_EXP['data'][x][t]).strip()!=str(datajsonCS1_ACT['data'][x][t]).strip()):
                     csvWriter1.writerow([t,datajsonCS1_EXP['data'][x][t],datajsonCS1_ACT['data'][x][t],'Fail'])

                   print t,datajsonCS1_EXP['data'][x][t],datajsonCS1_ACT['data'][x][t]
               if(t not in (datajsonCS1_ACT['data'][x].keys())):

                   csvWriter1.writerow([t,datajsonCS1_EXP['data'][x][t],'Key not found','Fail'])
     except Exception:
         pass


csvfile1.close()
csvfile1= open('/opt/Alps_Automation/Content_Details.csv', 'a')
csvWriter1 = csv.writer(csvfile1, delimiter=',')
csvWriter1.writerow(['Fields', 'Expected', 'Actual', 'Result'])

CONTSUM1_EXP='http://aut1.smallbizvoices.com/alps/dashboard/iquanti/projects/5/projectcontentdetailkeyword?alias=0&url=https%3A%2F%2Fwww.americanexpress.com%2Fus%2Fsmall-business%2Fopenforum%2Farticles%2F7-best-apps-for-tracking-business-expenses%2F'
CONTSUM1_ACT='http://qa5.smallbizvoices.com/alps/dashboard/iquanti/projects/5/projectcontentdetailkeyword?alias=0&url=https%3A%2F%2Fwww.americanexpress.com%2Fus%2Fsmall-business%2Fopenforum%2Farticles%2F7-best-apps-for-tracking-business-expenses%2F'


CS1_EXP = requests.get(CONTSUM1_EXP).content
CS1_ACT = requests.get(CONTSUM1_ACT).content


datajsonCS1_EXP=json.loads(CS1_EXP)
datajsonCS1_ACT=json.loads(CS1_ACT)

f=0
if((cmp(datajsonCS1_EXP['data'], datajsonCS1_ACT['data'])==0) and (len(datajsonCS1_EXP['data'])==len(datajsonCS1_ACT['data']))):

  for d1, d2 in zip(datajsonCS1_EXP['data'], datajsonCS1_ACT['data']):
    for key, value in d1.items():
        if str(value).strip() != str(d2[key]).strip():

            csvWriter1.writerow([key,value,d2[key],'Fail'])
        if str(value).strip() == str(d2[key]).strip():
            csvWriter1.writerow([key,value,d2[key],'Pass'])

if((cmp(datajsonCS1_EXP['data'], datajsonCS1_ACT['data'])!=0) and (len(datajsonCS1_EXP['data'])==len(datajsonCS1_ACT['data']))):
   f+=1
   for x in range(0,len(datajsonCS1_EXP['data'])):
        for t,z in zip(datajsonCS1_EXP['data'][x].keys(),datajsonCS1_ACT['data'][x].keys()):

               if(t in (datajsonCS1_ACT['data'][x].keys())):
                   if(str(datajsonCS1_EXP['data'][x][t]).strip()==str(datajsonCS1_ACT['data'][x][t]).strip()):
                     csvWriter1.writerow([t,datajsonCS1_EXP['data'][x][t],datajsonCS1_ACT['data'][x][t],'Pass'])
                   else:
                     csvWriter1.writerow([t,datajsonCS1_EXP['data'][x][t],datajsonCS1_ACT['data'][x][t],'Fail'])

                   print t,datajsonCS1_EXP['data'][x][t],datajsonCS1_ACT['data'][x][t]
               if(t not in (datajsonCS1_ACT['data'][x].keys())):

                   csvWriter1.writerow([t,datajsonCS1_EXP['data'][x][t],'Key not found','Fail'])


if((cmp(datajsonCS1_EXP['data'], datajsonCS1_ACT['data'])==0) and (len(datajsonCS1_EXP['data'])!=len(datajsonCS1_ACT['data']))):
  f+=1
  for d1, d2 in itertools.izip(datajsonCS1_EXP['data'], datajsonCS1_ACT['data']):
    for key, value in d1.items():
        if value != d2[key]:

            csvWriter1.writerow([key,value,d2[key],'Fail'])
        if value == d2[key]:
            csvWriter1.writerow([key,value,d2[key],'Pass'])

if((cmp(datajsonCS1_EXP['data'], datajsonCS1_ACT['data'])!=0) and (len(datajsonCS1_EXP['data'])!=len(datajsonCS1_ACT['data']))):
   f+=1
   for x in range(0,min(len(datajsonCS1_EXP['data']),len(datajsonCS1_EXP['data']))):
     try:
        for t,z in itertools.izip(datajsonCS1_EXP['data'][x].keys(),datajsonCS1_ACT['data'][x].keys()):

               if(t in (datajsonCS1_ACT['data'][x].keys())):
                   if(str(datajsonCS1_EXP['data'][x][t]).strip()==str(datajsonCS1_ACT['data'][x][t]).strip()):
                     csvWriter1.writerow([t,datajsonCS1_EXP['data'][x][t],datajsonCS1_ACT['data'][x][t],'Pass'])
                   if(str(datajsonCS1_EXP['data'][x][t]).strip()!=str(datajsonCS1_ACT['data'][x][t]).strip()):
                     csvWriter1.writerow([t,datajsonCS1_EXP['data'][x][t],datajsonCS1_ACT['data'][x][t],'Fail'])

                   print t,datajsonCS1_EXP['data'][x][t],datajsonCS1_ACT['data'][x][t]
               if(t not in (datajsonCS1_ACT['data'][x].keys())):

                   csvWriter1.writerow([t,datajsonCS1_EXP['data'][x][t],'Key not found','Fail'])
     except Exception:
         pass



csvfile1.close()
csvfile1= open('/opt/Alps_Automation/Content_Details.csv', 'a')
csvWriter1 = csv.writer(csvfile1, delimiter=',')
csvWriter1.writerow(['Fields', 'Expected', 'Actual', 'Result'])


CONTSUM1_EXP='http://aut1.smallbizvoices.com/alps/dashboard/iquanti/projects/5/projectcontentdetailkeyword?alias=0&url=https%3A%2F%2Fwww.americanexpress.com%2Fus%2Fsmall-business%2Fopenforum%2Farticles%2F7-best-apps-for-tracking-business-expenses%2F'
CONTSUM1_ACT='http://qa5.smallbizvoices.com/alps/dashboard/iquanti/projects/5/projectcontentdetailkeyword?alias=0&url=https%3A%2F%2Fwww.americanexpress.com%2Fus%2Fsmall-business%2Fopenforum%2Farticles%2F7-best-apps-for-tracking-business-expenses%2F'


CS1_EXP = requests.get(CONTSUM1_EXP).content
CS1_ACT = requests.get(CONTSUM1_ACT).content


datajsonCS1_EXP=json.loads(CS1_EXP)
datajsonCS1_ACT=json.loads(CS1_ACT)

f=0
if((cmp(datajsonCS1_EXP['data'], datajsonCS1_ACT['data'])==0) and (len(datajsonCS1_EXP['data'])==len(datajsonCS1_ACT['data']))):

  for d1, d2 in zip(datajsonCS1_EXP['data'], datajsonCS1_ACT['data']):
    for key, value in d1.items():
        if str(value).strip() != str(d2[key]).strip():

            csvWriter1.writerow([key,value,d2[key],'Fail'])
        if str(value).strip() == str(d2[key]).strip():
            csvWriter1.writerow([key,value,d2[key],'Pass'])

if((cmp(datajsonCS1_EXP['data'], datajsonCS1_ACT['data'])!=0) and (len(datajsonCS1_EXP['data'])==len(datajsonCS1_ACT['data']))):
   f+=1
   for x in range(0,len(datajsonCS1_EXP['data'])):
        for t,z in zip(datajsonCS1_EXP['data'][x].keys(),datajsonCS1_ACT['data'][x].keys()):

               if(t in (datajsonCS1_ACT['data'][x].keys())):
                   if(str(datajsonCS1_EXP['data'][x][t]).strip()==str(datajsonCS1_ACT['data'][x][t]).strip()):
                     csvWriter1.writerow([t,datajsonCS1_EXP['data'][x][t],datajsonCS1_ACT['data'][x][t],'Pass'])
                   else:
                     csvWriter1.writerow([t,datajsonCS1_EXP['data'][x][t],datajsonCS1_ACT['data'][x][t],'Fail'])

                   print t,datajsonCS1_EXP['data'][x][t],datajsonCS1_ACT['data'][x][t]
               if(t not in (datajsonCS1_ACT['data'][x].keys())):

                   csvWriter1.writerow([t,datajsonCS1_EXP['data'][x][t],'Key not found','Fail'])


if((cmp(datajsonCS1_EXP['data'], datajsonCS1_ACT['data'])==0) and (len(datajsonCS1_EXP['data'])!=len(datajsonCS1_ACT['data']))):
  f+=1
  for d1, d2 in itertools.izip(datajsonCS1_EXP['data'], datajsonCS1_ACT['data']):
    for key, value in d1.items():
        if value != d2[key]:

            csvWriter1.writerow([key,value,d2[key],'Fail'])
        if value == d2[key]:
            csvWriter1.writerow([key,value,d2[key],'Pass'])

if((cmp(datajsonCS1_EXP['data'], datajsonCS1_ACT['data'])!=0) and (len(datajsonCS1_EXP['data'])!=len(datajsonCS1_ACT['data']))):
   f+=1
   for x in range(0,min(len(datajsonCS1_EXP['data']),len(datajsonCS1_EXP['data']))):
     try:
        for t,z in itertools.izip(datajsonCS1_EXP['data'][x].keys(),datajsonCS1_ACT['data'][x].keys()):

               if(t in (datajsonCS1_ACT['data'][x].keys())):
                   if(str(datajsonCS1_EXP['data'][x][t]).strip()==str(datajsonCS1_ACT['data'][x][t]).strip()):
                     csvWriter1.writerow([t,datajsonCS1_EXP['data'][x][t],datajsonCS1_ACT['data'][x][t],'Pass'])
                   if(str(datajsonCS1_EXP['data'][x][t]).strip()!=str(datajsonCS1_ACT['data'][x][t]).strip()):
                     csvWriter1.writerow([t,datajsonCS1_EXP['data'][x][t],datajsonCS1_ACT['data'][x][t],'Fail'])

                   print t,datajsonCS1_EXP['data'][x][t],datajsonCS1_ACT['data'][x][t]
               if(t not in (datajsonCS1_ACT['data'][x].keys())):

                   csvWriter1.writerow([t,datajsonCS1_EXP['data'][x][t],'Key not found','Fail'])
     except Exception:
         pass



csvfile1.close()
csvfile1= open('/opt/Alps_Automation/Content_Details.csv', 'a')
csvWriter1 = csv.writer(csvfile1, delimiter=',')
csvWriter1.writerow(['Fields', 'Expected', 'Actual', 'Result'])


CONTSUM1_EXP='http://aut1.smallbizvoices.com/alps/dashboard/iquanti/projects/5/projectpagecontentdetail?keywords=330&sort_by=rank&limit=10&offset=0'
CONTSUM1_ACT='http://qa5.smallbizvoices.com/alps/dashboard/iquanti/projects/5/projectpagecontentdetail?keywords=330&sort_by=rank&limit=10&offset=0'


CS1_EXP = requests.get(CONTSUM1_EXP).content
CS1_ACT = requests.get(CONTSUM1_ACT).content


datajsonCS1_EXP=json.loads(CS1_EXP)
datajsonCS1_ACT=json.loads(CS1_ACT)

f=0
if((cmp(datajsonCS1_EXP['data'], datajsonCS1_ACT['data'])==0) and (len(datajsonCS1_EXP['data'])==len(datajsonCS1_ACT['data']))):

  for d1, d2 in zip(datajsonCS1_EXP['data'], datajsonCS1_ACT['data']):
    for key, value in d1.items():
        if str(value).strip() != str(d2[key]).strip():

            csvWriter1.writerow([key,value,d2[key],'Fail'])
        if str(value).strip() == str(d2[key]).strip():
            csvWriter1.writerow([key,value,d2[key],'Pass'])

if((cmp(datajsonCS1_EXP['data'], datajsonCS1_ACT['data'])!=0) and (len(datajsonCS1_EXP['data'])==len(datajsonCS1_ACT['data']))):
   f+=1
   for x in range(0,len(datajsonCS1_EXP['data'])):
        for t,z in zip(datajsonCS1_EXP['data'][x].keys(),datajsonCS1_ACT['data'][x].keys()):

               if(t in (datajsonCS1_ACT['data'][x].keys())):
                   if(str(datajsonCS1_EXP['data'][x][t]).strip()==str(datajsonCS1_ACT['data'][x][t]).strip()):
                     csvWriter1.writerow([t,datajsonCS1_EXP['data'][x][t],datajsonCS1_ACT['data'][x][t],'Pass'])
                   else:
                     csvWriter1.writerow([t,datajsonCS1_EXP['data'][x][t],datajsonCS1_ACT['data'][x][t],'Fail'])

                   print t,datajsonCS1_EXP['data'][x][t],datajsonCS1_ACT['data'][x][t]
               if(t not in (datajsonCS1_ACT['data'][x].keys())):

                   csvWriter1.writerow([t,datajsonCS1_EXP['data'][x][t],'Key not found','Fail'])


if((cmp(datajsonCS1_EXP['data'], datajsonCS1_ACT['data'])==0) and (len(datajsonCS1_EXP['data'])!=len(datajsonCS1_ACT['data']))):
  f+=1
  for d1, d2 in itertools.izip(datajsonCS1_EXP['data'], datajsonCS1_ACT['data']):
    for key, value in d1.items():
        if value != d2[key]:

            csvWriter1.writerow([key,value,d2[key],'Fail'])
        if value == d2[key]:
            csvWriter1.writerow([key,value,d2[key],'Pass'])

if((cmp(datajsonCS1_EXP['data'], datajsonCS1_ACT['data'])!=0) and (len(datajsonCS1_EXP['data'])!=len(datajsonCS1_ACT['data']))):
   f+=1
   for x in range(0,min(len(datajsonCS1_EXP['data']),len(datajsonCS1_EXP['data']))):
     try:
        for t,z in itertools.izip(datajsonCS1_EXP['data'][x].keys(),datajsonCS1_ACT['data'][x].keys()):

               if(t in (datajsonCS1_ACT['data'][x].keys())):
                   if(str(datajsonCS1_EXP['data'][x][t]).strip()==str(datajsonCS1_ACT['data'][x][t]).strip()):
                     csvWriter1.writerow([t,datajsonCS1_EXP['data'][x][t],datajsonCS1_ACT['data'][x][t],'Pass'])
                   if(str(datajsonCS1_EXP['data'][x][t]).strip()!=str(datajsonCS1_ACT['data'][x][t]).strip()):
                     csvWriter1.writerow([t,datajsonCS1_EXP['data'][x][t],datajsonCS1_ACT['data'][x][t],'Fail'])

                   print t,datajsonCS1_EXP['data'][x][t],datajsonCS1_ACT['data'][x][t]
               if(t not in (datajsonCS1_ACT['data'][x].keys())):

                   csvWriter1.writerow([t,datajsonCS1_EXP['data'][x][t],'Key not found','Fail'])
     except Exception:
         pass





csvfileN= open('/opt/Alps_Automation/Final.csv', 'a')
csvWriterN = csv.writer(csvfileN, delimiter=',')


if(f!=0):
    csvWriterN.writerow(['Content Details has ' 'Failed'])
if(f==0):
    csvWriterN.writerow(['Content Details has ' 'Passed'])

csvfileN.close()


csvfile1.close()
bucket = CONN.get_bucket(BUCKET)
key = Key(bucket)
key.key = S3_PATH+FILENAME
key.set_contents_from_filename('/opt/Alps_Automation/Content_Details.csv')

os.remove('/opt/Alps_Automation/Content_Details.csv')

