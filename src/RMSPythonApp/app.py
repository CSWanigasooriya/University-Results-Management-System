#Need to make decision of the user meaning to check if he/she is a lecturer or student
import firebase_admin
import time
import notifyapp as notify
from firebase_admin import credentials
from firebase_admin import firestore

def lec_or_stud(record):
    try:
        sub = bool(record['roles']['subscriber'])
        mod = bool(record['roles']['moderator'])
        sett = bool(record['roles']['setter'])
        if(sub == True and mod == False and sett == False):#meaning he/she is a lecturer
            return 'students'
        else:
            return 'lecturers' 
    except:
        print("lec or student module error")        

def looping_method(record):
    document = lec_or_stud(record)
    print("document = " + document)
    while True:
        db = firestore.client()
        emp_ref = db.collection('notice').document(document)
        docs = emp_ref.get()
        message_dict = docs.to_dict()  
        message = message_dict['message']
        if(str(message) == ""):
            message="No updated broadcast..."
        date = message_dict['date']
        message = str(message) + "\n" + str(date)
        notify.Notify(message)

        time.sleep(60*60)#this loop sleeps for one hour