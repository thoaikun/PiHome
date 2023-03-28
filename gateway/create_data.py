import json
import random
import time

def create_temperature_data(self, value_temp):
    obj = {
        'from': 'tempController',
        'to': 'client',
        'data':{
            'temperature': value_temp
        }
    }
    return json.dumps(obj)

def create_humidity_data(self, value_humi):
    obj = {
        'from': 'humiController',
        'to': 'client',
        'data':{
            'humidity': value_humi
        }
    }
    return json.dumps(obj)


