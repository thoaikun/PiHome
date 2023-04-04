import sys
from Adafruit_IO import MQTTClient
# from uart import *
import time
import json
import random
from create_data import *

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
    # print(payload)
    # print("Nhan du lieu: " + payload + " , feed io:" + feed_io)
    payload = json.loads(payload)
    if feed_io == "pihome-light":
        if payload['command'] == "off":
            writeData("T")
        else:
            writeData("S")
    if feed_io == "pihome-fan":
        if payload['command'] == "0":
            print('Lạnh vãi bùi, tắt quạt nè')
            # writeData("0")
        elif payload['command'] == "20":
            print('Bật quạt chill chill cái coi')
            # writeData("1")
        elif payload['command'] == "40":
            print('Vẫn nóng, tăng thêm cái nè')
            # writeData("2")
        elif payload['command'] == "60":
            pass
            # writeData("3")
        elif payload['command'] == "80":
            pass
            # writeData("4")
        elif payload['command'] == "100":
            pass
            # writeData("5")

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
    # client.publish("pihome-temperature", create_temperature_obj(value_temp))
    # client.publish("pihome-humidity", create_humidity_obj(value_humi))
    # readSerial(client)
    time.sleep(10)
    pass
