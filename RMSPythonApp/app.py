#Need to make decision of the user meaning to check if he/she is a lecturer or student
import firebase_admin
import notifyapp as notify
from firebase_admin import credentials
from firebase_admin import firestore

cred = credentials.Certificate('rms_sdk.json')
firebase_admin.initialize_app(cred)
db = firestore.client()

emp_ref = db.collection('notice')
docs = emp_ref.stream()

message="No updated broadcast..."
for doc in docs:
    message_dict = doc.to_dict()
message = message_dict["message"]
date = message_dict["date"]
message = message + "\n" + date
notify.Notify(message)