import os
from supabase import create_client, Client

url: str = os.environ.get("SUPABASE_URL", "https://qhlsgempmzuxeyizwkuh.supabase.co")
key: str = os.environ.get("SUPABASE_KEY", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFobHNnZW1wbXp1eGV5aXp3a3VoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI5NzM1NTAsImV4cCI6MjAyODU0OTU1MH0.7uY2VwbEywP8B8K6wwFOUfR7NjMG7v08LIZSkdKJ9go")
supabase: Client = create_client(url, key)

#Implementations for General Table

def Authentication_insert(User, Pwd, FName, LName, Currency, Weight, Height, CalGoal, CalsBurn, HSExercise):

    data, count = supabase.table('General').insert({"USER": User, "PASSWORD": Pwd, "fName": FName, "lName": LName, "Currency": Currency, "Weight": Weight, "Height": Height, "HSExercising": HSExercise, "CalGoal": CalGoal, "CalBurn": CalsBurn}).execute()

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

def getFName(User):
    response = supabase.table('General').select("fName").eq('USER', User).execute()
    try:
        return response.data[0]['fName']
    except:
        return "na"

def getLName(User):
    response = supabase.table('General').select("lName").eq('USER', User).execute()
    try:
        return response.data[0]['lName']
    except:
        return "na"

def getCurrency(User):
    response = supabase.table('General').select("Currency").eq('USER', User).execute()
    try:
        return response.data[0]['Currency']
    except:
        return "na"

def getWeight(User):
    response = supabase.table('General').select("Weight").eq('USER', User).execute()
    try:
        return response.data[0]['Weight']
    except:
        return "na"

def getHeight(User):
    response = supabase.table('General').select("Height").eq('USER', User).execute()
    try:
        return response.data[0]['Height']
    except:
        return "na"

def getCalGoal(User):
    response = supabase.table('General').select("CalGoal").eq('USER', User).execute()
    try:
        return response.data[0]['CalGoal']
    except:
            return "na"

def getCalBurn(User):
    response = supabase.table('General').select("CalBurn").eq('USER', User).execute()
    try:
        return response.data[0]['CalBurn']
    except:
            return "na"

def getHSExercising(User):
    response = supabase.table('General').select("HSExercising").eq('USER', User).execute()
    try:
        return response.data[0]['HSExercising']
    except:
            return "na"
        
    
def updateFName(User,fName):
    response = supabase.table('General').update({'fName' : fName}).eq('USER', User).execute()
    try:
        if response:
            return True
    except:
        return False 

def updateLName(User, lName):
    response = supabase.table('General').update({'lName': lName}).eq('USER', User).execute()
    try:
        if response:
            return True
    except:
        return False

def updateCurrency(User, currency):
    response = supabase.table('General').update({'Currency': currency}).eq('USER', User).execute()
    try:
        if response:
            return True
    except:
        return False

def updateWeight(User, weight):
    response = supabase.table('General').update({'Weight': weight}).eq('USER', User).execute()
    try:
        if response:
            return True
    except:
        return False

def updateHeight(User, height):
    response = supabase.table('General').update({'Height': height}).eq('USER', User).execute()
    try:
        if response:
            return True
    except:
        return False

def updateCalGoal(User, CalGoal):
    response = supabase.table('General').update({'CalGoal': CalGoal}).eq('USER', User).execute()
    try:
        if response:
            return True
    except:
        return False

def updateCalBurn(User, CalBurn):
    response = supabase.table('General').update({'CalBurn': CalBurn}).eq('USER', User).execute()
    try:
        if response:
            return True
    except:
        return False

def updateHSExercising(User, HSExercising):
    response = supabase.table('General').update({'HSExercising': HSExercising}).eq('USER', User).execute()
    try:
        if response:
            return True
    except:
        return False

def updatePassword(User,oldP,newP):
    if Authenticate_user(User,oldP):
        response = supabase.table('General').update({'PASSWORD': newP}).eq('USER', User).execute()
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

#Testing for General

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

def Goal_Insert(GNum, User, Target, Deadline):
    
    data, count = supabase.table('Goals').insert({"Goal Num": GNum, "Target": Target, "Deadline": Deadline, "USER": User}).execute()

def Goal_Update(GNum, User, Target, Deadline, Progress):
    
    data, count = supabase.table('Goals').update({"Target": Target, "Deadline": Deadline, "Progress": Progress}).eq("Goal Num", GNum).eq("USER", User).execute()

def Update_Target(GNum, User, Target):

    data, count = supabase.table('Goals').update({"Target": Target}).eq("Goal Num", GNum).eq("USER", User).execute()

def Update_Deadline(GNum, User, Deadline):

    data, count = supabase.table('Goals').update({"Deadline": Deadline}).eq("Goal Num", GNum).eq("USER", User).execute()

def Update_Progress(GNum, User, Progress): 

    data, count = supabase.table('Goals').update({"Progress": Progress}).eq("Goal Num", GNum).eq("USER", User).execute()

def Goal_Delete(GNum, User):

    data, count = supabase.table('Goals').delete().eq("Goal Num", GNum).eq("USER", User).execute()

#Implementation for Prices Table

def getPrices():
    response = supabase.table('Prices').select("*").execute()
    for i in response.data:
        print("price of", i["Hog"], "is", i["Cost"])
    return response

