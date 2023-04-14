import sys
from Adafruit_IO import MQTTClient
from uart import *
import time
import json
import random

AIO_FEED_IO = ["pihome-light", "pihome-fan", "pihome-door"]
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
    payload = json.loads(payload)
    print(payload)
    if feed_io == "pihome-light":
        if payload['command'] == "off":
            writeData("T")
        else:
            writeData("S")

    if feed_io == "pihome-door":
        if 'command' in payload:
            if payload['command'] == "off":
                writeData("C")
            else:
                writeData("O")

    if feed_io == "pihome-fan":
        if payload['status'] == 'off':
            writeData("0")
        else:
            if payload['command'] == 0:
                writeData("0")
            elif payload['command'] == 1:
                writeData("1")
            elif payload['command'] == 2:
                writeData("2")
            elif payload['command'] == 3:
                writeData("3")
            elif payload['command'] == 4:
                writeData("4")
            elif payload['command'] == 5:
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
    readSerial(client)
    time.sleep(10)
    pass
