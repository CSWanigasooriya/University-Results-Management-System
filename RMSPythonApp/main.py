import firebase_admin
import pyrebase
from getpass import getpass
from firebase_admin import credentials, auth
from firebase_admin import firestore, db

cred = credentials.Certificate('rms_sdk.json')
firebase_admin.initialize_app(cred)

config = {
    "apiKey": "AIzaSyCd0SGZg_599s1k0WTHhEXoBcWhNHXdWaY",
    "authDomain": "result-management-system-b3f8b.firebaseapp.com",
    "databaseURL": "https://result-management-system-b3f8b.firebaseio.com",
    "projectId": "result-management-system-b3f8b",
    "storageBucket": "result-management-system-b3f8b.appspot.com",
    "messagingSenderId": "523016644319",
    "appId": "1:523016644319:web:15d612982ddc0cd19c6b6a",
    "measurementId": "G-B120G5CJLD"
}



firebase = pyrebase.initialize_app(config)

auth = firebase.auth()

#as soon as user logs in to the site pass email and password to below variables
email = input("Please enter email: \n")
password = getpass("Please enter your password: \n")

user = auth.sign_in_with_email_and_password(email, password)
print("Success...")