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
FILENAME = 'Theme_Details'+TODAY.strftime('%d-%m-%Y')+'.csv'

try:
    csvfile1= open('/opt/Alps_Automation/Theme_Details.csv', 'wb')
    csvWriter1 = csv.writer(csvfile1, delimiter=',')
    csvWriter1.writerow(['Fields', 'Expected', 'Actual', 'Result'])

    CONTSUM1_EXP='http://aut1.smallbizvoices.com/alps/dashboard/iquanti/projects/17/projectthemesgraph?themes=200&month_range=13&traffic_sources=estimated_traffic&keyword_types=branded&keyword_types=non_branded'
    CONTSUM1_ACT='http://qa5.smallbizvoices.com/alps/dashboard/iquanti/projects/17/projectthemesgraph?themes=200&month_range=13&traffic_sources=estimated_traffic&keyword_types=branded&keyword_types=non_branded'


    CS1_EXP = (requests.get(CONTSUM1_EXP).content)
    CS1_ACT = (requests.get(CONTSUM1_ACT).content)


    datajsonCS1_EXP=json.loads(CS1_EXP)
    datajsonCS1_ACT=json.loads(CS1_ACT)

    for d1, d2 in zip(datajsonCS1_EXP['conversion_data'], datajsonCS1_ACT['conversion_data']):
     for key, value in d1.items():
        if str(value).strip() != str(d2[key]).strip():

            csvWriter1.writerow([key,value,d2[key],'Fail'])
        if str(value).strip() == str(d2[key]).strip():
            csvWriter1.writerow([key,value,d2[key],'Pass'])
    csvfile1.close()




    csvfile1= open('/opt/Alps_Automation/Theme_Details.csv', 'a')
    csvWriter1 = csv.writer(csvfile1, delimiter=',')
    csvWriter1.writerow(['Fields', 'Expected', 'Actual', 'Result'])


    CONTSUM2_EXP='http://aut1.smallbizvoices.com/alps/dashboard/iquanti/projects/17/projectkeywordestimated?alias=0&sort_by=-estimated_traffic_mom&query=&themes=200&limit=10&offset=0&&traffic_sources=estimated_traffic&keyword_types=branded&keyword_types=non_branded'
    CONTSUM2_ACT='http://qa5.smallbizvoices.com/alps/dashboard/iquanti/projects/17/projectkeywordestimated?alias=0&sort_by=-estimated_traffic_mom&query=&themes=200&limit=10&offset=0&&traffic_sources=estimated_traffic&keyword_types=branded&keyword_types=non_branded'


    CS2_EXP = (requests.get(CONTSUM2_EXP).content)
    CS2_ACT = (requests.get(CONTSUM2_ACT).content)


    datajsonCS2_EXP=json.loads(CS2_EXP)
    datajsonCS2_ACT=json.loads(CS2_ACT)

    for d1, d2 in zip(datajsonCS2_EXP['data'], datajsonCS2_ACT['data']):
     for key, value in d1.items():
        if str(value).strip() != str(d2[key]).strip():

            csvWriter1.writerow([key,value,d2[key],'Fail'])
        if str(value).strip() == str(d2[key]).strip():
            csvWriter1.writerow([key,value,d2[key],'Pass'])
    csvfile1.close()




    csvfile1= open('/opt/Alps_Automation/Theme_Details.csv', 'a')
    csvWriter1 = csv.writer(csvfile1, delimiter=',')
    csvWriter1.writerow(['Fields', 'Expected', 'Actual', 'Result'])


    CONTSUM3_EXP='http://aut1.smallbizvoices.com/alps/dashboard/iquanti/projects/17/projectkeywordthemes?alias=0&sort_by=rank_mom&traffic_sources=estimated_traffic&keyword_types=branded&keyword_types=non_branded'
    CONTSUM3_ACT='http://qa5.smallbizvoices.com/alps/dashboard/iquanti/projects/17/projectkeywordthemes?alias=0&sort_by=rank_mom&traffic_sources=estimated_traffic&keyword_types=branded&keyword_types=non_branded'


    CS3_EXP = (requests.get(CONTSUM3_EXP).content)
    CS3_ACT = (requests.get(CONTSUM3_ACT).content)


    datajsonCS3_EXP=json.loads(CS3_EXP)
    datajsonCS3_ACT=json.loads(CS3_ACT)

    for d1, d2 in zip(datajsonCS3_EXP['data'], datajsonCS3_ACT['data']):
     for key, value in d1.items():
        if str(value).strip() != str(d2[key]).strip():

            csvWriter1.writerow([key,value,d2[key],'Fail'])
        if str(value).strip() == str(d2[key]).strip():
            csvWriter1.writerow([key,value,d2[key],'Pass'])
    csvfile1.close()




    csvfile1= open('/opt/Alps_Automation/Theme_Details.csv', 'a')
    csvWriter1 = csv.writer(csvfile1, delimiter=',')
    csvWriter1.writerow(['Fields', 'Expected', 'Actual', 'Result'])
    print (type(datajsonCS1_ACT))

    if((datajsonCS1_EXP.items()==datajsonCS1_ACT.items()) and (datajsonCS2_EXP.items()==datajsonCS2_ACT.items()) and (datajsonCS3_EXP.items()==datajsonCS3_ACT.items())):
        csvfileN= open('/opt/Alps_Automation/Final.csv', 'a')
        csvWriterN = csv.writer(csvfileN, delimiter=',')
        csvWriterN.writerow(['Theme detail has ' 'Passed'])
    else:
         csvfileN= open('/opt/Alps_Automation/Final.csv', 'a')
         csvWriterN = csv.writer(csvfileN, delimiter=',')
         csvWriterN.writerow(['Theme detail has ' 'Failed'])
        




except Exception as e:
   import sys, traceback
   formatted_lines = traceback.format_exc().splitlines()
   print (formatted_lines)
   csvfileN= open('/opt/Alps_Automation/Final.csv', 'a')
   csvWriterN = csv.writer(csvfileN, delimiter=',')
   csvWriterN.writerow(['Theme detail has failed due to ', formatted_lines])

bucket = CONN.get_bucket(BUCKET)
key = Key(bucket)
key.key = S3_PATH+FILENAME
key.set_contents_from_filename('/opt/Alps_Automation/Theme_Details.csv')

#os.remove('/opt/Alps_Automation/Theme_Details.csv')
