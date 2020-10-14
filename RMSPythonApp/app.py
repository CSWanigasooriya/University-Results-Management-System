#Need to make decision of the user meaning to check if he/she is a lecturer or student
import firebase_admin
import time
import notifyapp as notify
from firebase_admin import credentials
from firebase_admin import firestore

def lec_or_stud(record):
    try:
        if(record['roles']['subscriber':True, 'moderator':False, 'setter':False]):#meaning he/she is a lecturer
            return 'students'
        else:
            return 'lecturers' 
    except:
        print("Anee Hutto")        

def looping_method(record):
    document = lec_or_stud(record)
    while True:
        db = firestore.client()
        print("LMAO1")
        emp_ref = db.collection('notice').document(document)
        print("LMAO2")
        docs = emp_ref.stream()
        print("LMAO3")

        for doc in docs:
            message_dict = doc.to_dict()
        message = message_dict["message"]
        if(str(message) == ""):
            message="No updated broadcast..."
        date = message_dict["date"]
        message = message + "\n" + date
        notify.Notify(message)

        time.sleep(60*60)