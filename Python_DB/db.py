import os
from supabase import create_client, Client

url: str = os.environ.get("SUPABASE_URL", "https://qhlsgempmzuxeyizwkuh.supabase.co")
key: str = os.environ.get("SUPABASE_KEY", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFobHNnZW1wbXp1eGV5aXp3a3VoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI5NzM1NTAsImV4cCI6MjAyODU0OTU1MH0.7uY2VwbEywP8B8K6wwFOUfR7NjMG7v08LIZSkdKJ9go")
supabase: Client = create_client(url, key)

#Implementations for General Table

def Authentication_insert(User, Pwd, FName, LName, Currency, Weight, Height):

    data, count = supabase.table('General').insert({"USER": User, "PASSWORD": Pwd, "fName": FName, "lName": LName, "Currency": Currency, "Weight": Weight, "Height": Height}).execute()

def Authenticate_user(User, Pwd):
    response = supabase.table('General').select("USER").eq("USER", User).eq("PASSWORD", Pwd).execute()
    try:
        print("response data is", response.data[0])
        #print("User is ", response.data[0]['USER'])
        print("Authentication passed")
        return True
    except:
        print("Authentication failed")
        return False

def getFName(user):
    response = supabase.table('General').select("fName").eq('USER', user).execute()
    try:
        return response.data[0]['fName']
    except:
        return "na"

def getLName(user):
    response = supabase.table('General').select("lName").eq('USER').execute()
    try:
        return response.data[0]['lName']
    except:
        return "na"

def getCurrency(user):
    response = supabase.table('General').select("Currency").eq('USER').execute()
    try:
        return response.data[0]['Currency']
    except:
        return "na"

def getWeight(user):
    response = supabase.table('General').select("Weight").eq('USER').execute()
    try:
        return response.data[0]['Weight']
    except:
        return "na"

def getHeight(user):
    response = supabase.table('General').select("Height").eq('USER').execute()
    try:
        return response.data[0]['Height']
    except:
        return "na"
    
def updateFName(user,fName):
    response = supabase.table('General').update({'fName' : fName}).eq('USER').execute()
    try:
        if response:
            return True
    except:
        return False 

def updateLName(user, lName):
    response = supabase.table('General').update({'lName': lName}).eq('USER', user).execute()
    try:
        if response:
            return True
    except:
        return False

def updateCurrency(user, currency):
    response = supabase.table('General').update({'Currency': currency}).eq('USER', user).execute()
    try:
        if response:
            return True
    except:
        return False

def updateWeight(user, weight):
    response = supabase.table('General').update({'Weight': weight}).eq('USER', user).execute()
    try:
        if response:
            return True
    except:
        return False

def updateHeight(user, height):
    response = supabase.table('General').update({'Height': height}).eq('USER', user).execute()
    try:
        if response:
            return True
    except:
        return False

def updatePassword(user,oldP,newP):
    if Authenticate_user(user,oldP):
        response = supabase.table('General').update({'PASSWORD': newP}).eq('USER', user).execute()
    try:
        if response:
            print('updated password')
    except:
        print('error')
        
def updateUserName(oUser,nUser,pwd):
    response = supabase.table('General').select('*').eq('USER', nUser).execute()
    try:
        if response:
            print('username taken')
        else:
            if Authenticate_user(oUser,pwd):
                response = supabase.table('General').update({'USER':nUser}).eq('USER',oUser).execute()
    except: 
        print('error')

#Implementations for Exercise Table

def addExersise(name,MuscleG, Sport, type, link):
    t = int(time.time())
    response = supabase.table('Exersise').eq('Num', t).eq('MuscleG', MuscleG).eq('Type', type).execute()
    if response: 
        return False
    else:
        response = supabase.table('Exersise').insert({'Name':name,'MuscleG': MuscleG, 'Sport':Sport, 'Type':type,'link':link}).execute()
        if response:
            return True
        else:
            return False

#Implementations for Hogs Table

def insertHogs(user, hog):
    data, count = supabase.table('Hogs').insert({"USER": user, "Hog": hog}).execute()

#Implementations for Goals Table

#Implementation for Prices Table

def getPrices():
    response = supabase.table('Prices').select("*").execute()
    for i in response.data:
        print("price of", i["Hog"], "is", i["Cost"])
    return response
