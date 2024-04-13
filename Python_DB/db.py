import os
import math
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
        return 0

def getWeight(User):
    response = supabase.table('General').select("Weight").eq('USER', User).execute()
    try:
        print("getting weight:",response.data[0]['Weight'])
        return response.data[0]['Weight']
    except:
        return 0

def getHeight(User):
    response = supabase.table('General').select("Height").eq('USER', User).execute()
    try:
        return response.data[0]['Height']
    except:
        return 0

def getCalGoal(User):
    response = supabase.table('General').select("CalGoal").eq('USER', User).execute()
    try:
        return response.data[0]['CalGoal']
    except:
            return 0

def getCalBurn(User):
    response = supabase.table('General').select("CalBurn").eq('USER', User).execute()
    try:
        return response.data[0]['CalBurn']
    except:
            return 0

def getHSExercising(User):
    response = supabase.table('General').select("HSExercising").eq('USER', User).execute()
    try:
        return response.data[0]['HSExercising']
    except:
            return 0
        
    
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
    burn = getCalBurn(User)
    newBurn = burn + CalBurn
    
    if newBurn >= getCalGoal(User):
        print("Calorie Goal Reached")

    response = supabase.table('General').update({'CalBurn': newBurn}).eq('USER', User).execute()
    try:
        if response:
            return True
    except:
        return False

def updateHSExercising(User, HSExercising):
    time = getHSExercising(User)
    newTime = time + HSExercising
    response = supabase.table('General').update({'HSExercising': newTime}).eq('USER', User).execute()
    try:
        if response:
            return True
    except:
        return False
    
def calculateCalBurned(User, minutes, exercise):
    currWeight = getWeight(User)
    if currWeight == 0:
        currWeight = 172

    print("currWeight:",currWeight)

    if exercise == "Bench Press":
        calculation = (2.933)*(minutes)
        calc = math.floor(calculation)
    elif exercise == "Barbell Squat":
        calculation = (2.933)*(minutes)
        calc = math.floor(calculation)
    elif exercise == "Deadlift":
        calculation = (2.933)*(minutes)
        calc = math.floor(calculation)
    elif exercise == "Skull Crushers":
        calculation = (2.933)*(minutes)
        calc = math.floor(calculation)
    elif exercise == "Barbell Rows":
        calculation = (3.858/60)*currWeight*(minutes)
        calc = math.floor(calculation)
    elif exercise == "Dumbbell Hammer Curls":
        calculation = (2.933)*(minutes)
        calc = math.floor(calculation)
    elif exercise == "Dumbbell Step Ups":
        calculation = (5/60)*currWeight*(minutes)
        calc = math.floor(calculation)
    elif exercise == "Calf Raises":
        calculation = (2.933)*(minutes)
        calc = math.floor(calculation)
    elif exercise == "Box Jumps":
        calculation = (11.5)*(minutes)
        calc = math.floor(calculation)
    elif exercise == "Lines":
        calculation = (6.810/60)*currWeight*(minutes)
        calc = math.floor(calculation)
    elif exercise == "Mountain Climbers":
        calculation = (5.866)*(minutes)
        calc = math.floor(calculation)
    elif exercise == "Long Distance Running":
        calculation = (3.634/60)*currWeight*(minutes)
        calc = math.floor(calculation)

    hrs = minutes/60
    
    response = supabase.table('General').update({"CalBurn": calc}).eq("USER", User).execute()
    response = supabase.table('General').update({"HSExercising": hrs}).eq("USER", User).execute()


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


