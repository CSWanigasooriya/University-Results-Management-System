import firebase_admin
import pyrebase
import app as ap
import notifyapp as notify
from getpass import getpass
from firebase_admin import credentials, auth
from firebase_admin import firestore, db

def listener(email):
    try:
        cred = credentials.Certificate('rms_sdk.json')
        firebase_admin.initialize_app(cred)

        db = firestore.client()

        docs = db.collection('users').where('email', '==', email).stream()
        print("LOL1")
        for doc in docs:
            diction = doc.to_dict()
        print("LOL2")
        print(diction)
        ap.looping_method(diction)
    except:
        notify.Notify("Something went wrong...\nCheck your internet connection")


listener("wdamore@yahoo.com")
#as soon as user logs in to the site pass email and password to below variables
#email = input("Please enter email: \n")
#password = getpass("Please enter your password: \n")

#user = auth.sign_in_with_email_and_password(email, password)
#print("Success...")'''