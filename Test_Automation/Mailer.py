

import smtplib
from email.MIMEMultipart import MIMEMultipart
from email.MIMEBase import MIMEBase
from email import Encoders


SUBJECT = "Email Data"

msg = MIMEMultipart()
msg['Subject'] = SUBJECT
msg['From'] = 'qa@iquanti.com'
msg['To'] = ', '.join('parikshit.mukherjee@iquanti.com')

part = MIMEBase('application', "octet-stream")
part.set_payload(open("Metric_Test_Report.csv", "rb").read())
Encoders.encode_base64(part)

part.add_header('Content-Disposition', 'attachment; filename="Metric_Test_Report.csv"')

msg.attach(part)

server = smtplib.SMTP('secure.emailsrvr.com')
server.sendmail('qa@iquanti.com','parikshit.mukherjee@iquanti.com', msg.as_string())