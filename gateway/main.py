import sys
from Adafruit_IO import MQTTClient
from uart import *
import time
import json
# import random
# from create_data import *

AIO_FEED_IO = ["pihome-light", "pihome-fan"]
AIO_USERNAME = "tuyetvy_nguyen"
AIO_KEY = "aio_Bnrt28M3hNVkRFqy4aiyLx69jw1s"

#Vận hành giao thức MQTT, IoT Gateway -> Server Adafruit
def connected(client) :
    print("Ket noi thanh cong...")
    for feed in AIO_FEED_IO:
        client.subscribe(feed)

def subscribe(client, userdata, mid, granted_qos) :
    print("Subscribe thanh cong...")

def disconnected (client) :
    print("Ngat ket noi../")
    sys.exit(1)

def message(client, feed_io, payload):
    print("Nhan du lieu: " + payload + " , feed io:" + feed_io)
    data = json.loads(payload)
    print(data)
    if feed_io == "pihome-light":
        if data['data']['command'] == "off":
            writeData("T")
        else:
            writeData("S")      
    if feed_io == "pihome-fan":
        if payload == "0":
            writeData("0")
        elif payload == "20":
            writeData("1")
        elif payload == "40":
            writeData("2")
        elif payload == "60":
            writeData("3")
        elif payload == "80":
            writeData("4")
        elif payload == "100":
            writeData("5")

#Taọ đối tượng MQTT Client
client = MQTTClient(AIO_USERNAME, AIO_KEY)
client.on_connect = connected
client.on_disconnect = disconnected
client.on_message = message
client.on_subscribe = subscribe
client.connect()
client.loop_background()

while True:
    # value_temp = random.randint(20, 50)
    # value_humi = random.randint(0, 100)
    # client.publish("pihome-temperature", value_temp)
    # client.publish("pihome-humidity", value_humi)
    readSerial(client)
    time.sleep(2)
    pass
