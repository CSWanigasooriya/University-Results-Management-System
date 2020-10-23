import firebase_admin
import pyrebase
import app as ap
import eel
import notifyapp as notify
from getpass import getpass
from firebase_admin import credentials, auth
from firebase_admin import firestore, db

eel.init('web')

@eel.expose
def listener(email):
    print("Listener Called")#For testing
    try:
        cred = credentials.Certificate('rms_sdk.json')
        firebase_admin.initialize_app(cred)

        db = firestore.client()

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