import serial.tools.list_ports
import json
import time


def getPort():  #Hàm tìm cổng COM
    ports = serial.tools.list_ports.comports()
    N = len(ports)
    commPort = "None"
    for i in range(0, N):
        port = ports[i]
        strPort = str(port)
        if "USB-SERIAL CH340" in strPort:
            splitPort = strPort.split(" ")
            commPort = (splitPort[0])
    return commPort

if getPort() != "None":
    ser = serial.Serial(port= getPort(), baudrate= 115200)
    print(ser)

##############

def processData(client, data) :           #Hàm phân tách dữ liệu
    data = data.replace("!", "")
    data = data.replace("#", "")
    splitData = data.split(":")
    print(splitData)
    try:
        if splitData[0] == "TEMP":
            data = {
                'from': 'temperatureController',
                'to': 'client',
                'data':{
                    'temperature': splitData[1]
                }
            }
            client.publish("pihome-temperature", json.dumps(data))

        elif splitData[0] == "HUMI":
            data = {
                'from': 'humidityController',
                'to': 'client',
                'data':{
                    'humidity': splitData[1]
                }
            }
            client.publish("pihome-humidity", json.dumps(data))

        elif splitData[0] == "LUX":
            client.publish("pihome-lux", splitData[1])

        elif splitData[0] == "THIEF":
            data = {
                'from': 'thiefController',
                'to': 'client',
                'data':{
                    'status': True if splitData[1] == 'True' else False
                }
            }
            client.publish("pihome-thief", json.dumps(data))
            time.sleep(10)

        elif splitData[0] == "FIRE":
            data = {
                'from': 'fireController',
                'to': 'client',
                'data':{
                    'status': True if splitData[1] == 'True' else False
                }
            }
            client.publish("pihome-fire", json.dumps(data))
            time.sleep(5)

        elif splitData[0] == 'EARTHQUAKE':
            data = {
                'from': 'earthquakeController',
                'to': 'client',
                'data':{
                    'status': True if splitData[1] == 'True' else False
                }
            }
            client.publish("pihome-earthquake", json.dumps(data))
            time.sleep(10)

    except:
        pass

mess = ""

########################

def readSerial(client): #Hàm đọc dữ liệu
    byteToRead = ser.inWaiting()
    if (byteToRead > 0):
        global mess
        mess = mess + ser.read(byteToRead).decode("UTF-8")
        while ("#" in mess) and ("!" in mess):
            start = mess.find("!")
            end = mess.find("#")
            processData(client, mess[start:end + 1])
            if (end == len(mess)) :
                mess = ""
            else:
                mess = mess[end+1:]

def writeData(data):
    ser.write(str(data).encode())

