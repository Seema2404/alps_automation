import requests
from dateutil.relativedelta import *
import time
from datetime import datetime
from calendar import monthrange

def get_api_response(api_url):
    response = requests.get(api_url)
    return response.json()

def mtd_factor_calculator(current,previous):

    if(current):
        now = datetime.now()
        total_days_month=monthrange(now.year, now.month)[1]
        r=time.strftime("%d")
        return ((int(r))/float(total_days_month))
    if(previous):
        now=datetime.now()-relativedelta(months=1)
        total_days_month=monthrange(now.year, now.month)[1]
        r=time.strftime("%d")
        return ((int(r))/float(total_days_month))



