from win10toast import ToastNotifier 
def Notify(message):
    toaster = ToastNotifier()
    toaster.show_toast("KDU Result Management System", message, duration=10, 
    icon_path="Paomedia-Small-N-Flat-Bell.ico")