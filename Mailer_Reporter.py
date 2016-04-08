__author__ = '10569'

import smtplib
import requests
import json
import csv
import os


def mail():

 email_server = "secure.emailsrvr.com"
 sender = "qa@iquanti.com"
 to1 = "ajay.rama@iquanti.com"
 to2="anshul.singh@iquanti.com"
 to3="parikshit.mukherjee@iquanti.com"
 to4="yuvraj@iquanti.com"
 subject = "Test Result"
 headers1 = "From: %s\r\nTo: %s\r\nSubject: %s\r\n\r\n" % (sender, to1, subject)
 headers2 = "From: %s\r\nTo: %s\r\nSubject: %s\r\n\r\n" % (sender, to2, subject)
 headers3 = "From: %s\r\nTo: %s\r\nSubject: %s\r\n\r\n" % (sender, to3, subject)
 headers4 = "From: %s\r\nTo: %s\r\nSubject: %s\r\n\r\n" % (sender, to4, subject)
 msg=''
 with open('/opt/Alps_Automation/Final.csv', 'rb') as csvfile:
    resreader = csv.reader(csvfile, delimiter=' ')
    for row in resreader:
         msg += ' '.join(row)+"\n\n"
 print msg
 text = msg +' For Results: https://console.aws.amazon.com/s3/home?region=us-east-1#&bucket=qa.transform.test&prefix=iquanti/downloads/ '
 message1 = headers1 + text
 message2 = headers2 + text
 message3 = headers3 + text
 message4 = headers4 + text
 mailServer = smtplib.SMTP(email_server)

 mailServer.set_debuglevel(1)
 mailServer.ehlo()
 mailServer.login('qa@iquanti.com', 'smallbiz@08')
 mailServer.ehlo()
 mailServer.sendmail(sender, to1, message1)
 mailServer.sendmail(sender, to2, message2) 
 mailServer.sendmail(sender, to3, message3)
 mailServer.sendmail(sender, to4, message4)

 mailServer.quit()
 os.remove('/opt/Alps_Automation/Final.csv')

mail()
