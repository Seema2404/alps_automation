
__author__ = '10569'
import requests
import os
import csv
import json
from boto import s3

from boto.s3.key import Key
import datetime
import itertools

CONN = s3.connect_to_region(region_name='us-east-1', aws_access_key_id='AKIAIDIF4SRGVJGDDUOQ',
                                        aws_secret_access_key='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')
BUCKET = 'qa.transform.test'
S3_PATH = 'iquanti/downloads/'
TAG = 'latest|en-us|google'
TODAY = datetime.datetime.today()
FILENAME = 'All Keywords-'+TODAY.strftime('%d-%m-%Y')+'.csv'



csvfile1= open('/opt/Alps_Automation/All Keywords.csv', 'wb')
csvWriter1 = csv.writer(csvfile1, delimiter=',')
csvWriter1.writerow(['Fields', 'Expected', 'Actual', 'Result'])

ALL_KW5_EXP='http://qa5.smallbizvoices.com/alps/dashboard/iquanti/projects/17/projectkeywordestimated?alias=0&sort_by=-estimated_traffic_mom_percentage&&&limit=10&offset=0&'
ALL_KW5_ACT='http://qa5.smallbizvoices.com/alps/dashboard/iquanti/projects/17/projectkeywordestimated?alias=0&sort_by=-estimated_traffic_mom_percentage&&&limit=10&offset=0&'

ALL_KW_EXP = requests.get(ALL_KW5_EXP).content
ALL_KW_ACT = requests.get(ALL_KW5_ACT).content


datajsonALL_KW_EXP=json.loads(ALL_KW_EXP)
datajsonALL_KW_ACT=json.loads(ALL_KW_ACT)



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
    csvWriterN.writerow(['All Keywords has ' 'Failed'])
if(f==0):
    csvWriterN.writerow(['All Keywords has ' 'Passed'])

csvfileN.close()

csvfile1.close()
bucket = CONN.get_bucket(BUCKET)
key = Key(bucket)
key.key = S3_PATH+FILENAME
key.set_contents_from_filename('/opt/Alps_Automation/All Keywords.csv')

os.remove('/opt/Alps_Automation/All Keywords.csv')

