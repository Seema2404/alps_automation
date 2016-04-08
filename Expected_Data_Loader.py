__author__ = '10569'

import subprocess


import psycopg2
import sys

from datetime import date, timedelta
from django.utils import timezone
from django.conf import settings





settings.configure()
yesterday = ((timezone.now()-timedelta(1)).__str__())
con = None
try:
      con = psycopg2.connect("dbname='alps' user='alps' host='alps-qa.c38p5wwu7ots.us-east-1.rds.amazonaws.com' port='5432' password='Q-HorS3RaDd!sH-A'")
      cur = con.cursor()
      query1 = "UPDATE alps_project SET crawling_status=FALSE WHERE id=17;"
      query2= "UPDATE alps_project SET next_crawled_dt='%s' WHERE id=17;" %(str(yesterday))
      cur.execute(query1)
      cur.execute(query2)
      con.commit()
      cur.execute("SELECT * from alps_project where id=17")
      rows = cur.fetchall()
      for row in rows:
        print "Crawling status = ", row[15]
        print "Next Crawled Date", row[13]
      con.close()
      # self.run_services()
      #self.run_transforms()
except psycopg2.DatabaseError, e:
      print 'Error %s' % e
      sys.exit(1)


 
if(subprocess.call("/opt/Alps_Automation/automation/bin/python /opt/server_qa_expected/server/src/manage.py service_manager --settings=settings.qa --service_code project_schedule")==0):

   print 'Project Schedule Completed'

   if(subprocess.call("/opt/Alps_Automation/automation/bin/python /opt/server_qa_expected/server/src/manage.py --settings=settings.qa --service_code project_pending")==0):

      print 'Project Pending Completed'

      if(subprocess.call("/opt/Alps_Automation/automation/bin/python /opt/server_qa_expected/server/src/manage.py service_manager --settings=settings.qa --service_code project_keyword_pending")==0):

          print 'Project Keyword Pending Completed'

          if(subprocess.call("/opt/Alps_Automation/automation/bin/python /opt/server_qa_expected/server/src/manage.py service_manager --settings=settings.qa --service_code project_url_pending")==0):

              print 'Project URL pending Completed'


if(subprocess.call("/opt/Alps_Automation/automation/bin/python /opt/server_qa_expected/server/src/manage.py keyword_transform --queue_name=QA_AUTO_KW_URL_TRANSFORM_PENDING --settings=settings.local --visibility_timeout=600")==0):
    print 'Keyword Transform Completed'

    if(subprocess.call("/opt/Alps_Automation/automation/bin/python /opt/server_qa_expected/server/src/manage.py project_transform --queue_name=QA_AUTO_PROJECT_TRANSFORM_PENDING --settings=settings.local --visibility_timeout=3600")==0):
        print 'Project Transform Completed'

