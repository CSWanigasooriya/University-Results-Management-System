import firebase_admin
import pyrebase
import app as ap
import sys
import eel
import notifyapp as notify
from getpass import getpass
import pyrebase
from firebase_admin import credentials, auth
from firebase_admin import firestore, db

eel.init('web')

@eel.expose
def login(email, pw):
    try:
        cred = credentials.Certificate('rms_sdk.json')
        firebase_admin.initialize_app(cred)
        config = {
        'apiKey': 'AIzaSyCd0SGZg_599s1k0WTHhEXoBcWhNHXdWaY',
        'authDomain': 'result-management-system-b3f8b.firebaseapp.com',
        'databaseURL': 'https://result-management-system-b3f8b.firebaseio.com',
        'projectId': 'result-management-system-b3f8b',
        'storageBucket': 'result-management-system-b3f8b.appspot.com',
        'messagingSenderId': '523016644319',
        'appId': '1:523016644319:web:15d612982ddc0cd19c6b6a',
        'measurementId': 'G-B120G5CJLD'
        }
        firebase = pyrebase.initialize_app(config)
        auth = firebase.auth()
        try:
            user = auth.sign_in_with_email_and_password(email, pw)
            notify.Notify("Welcome")
            listener(email)
        except:
            notify.Notify("Either your email or password is incorrect\nrelaunch the app")
            sys.exit()
    except:
        notify.Notify("Something went wrong...\nCheck your internet connection\nand relaunch the app")
        sys.exit()     

'''def Login(email, Password):
    print("Logging in")
    try:
        active, ind = user_active(email)
        print("Done")
        global success
        if(bool(active) == False):
            user = auth.sign_in_with_email_and_password(email, password)
            activate(email)
            success = True
        elif(bool(active) == True and ind == 1):    
            success = True
            print("Logged in")
        else:
            print("User may be already logged in on another device")    
    except:
        print("Either your email address or password is wrong")
'''
#@eel.expose
def listener(email):
    print("Listener Called")#For testing
    try:
        '''print("LMAO0")
        cred = credentials.Certificate('rms_sdk.json')
        firebase_admin.initialize_app(cred)'''
        print("LMAO00000")
        db = firestore.client()
        print("LMAO")
        docs = db.collection('users').where('email', '==', email).stream()
        for doc in docs:
            diction = doc.to_dict()
        print(diction)
        ap.looping_method(diction)
    except:
        notify.Notify("Something went wrong...\nCheck your internet connection")


eel.start('index.html')
#listener()#For testing
#listener("dummy_silva@dummy.com")
#Use the above method to listen for the email passed as the parameter