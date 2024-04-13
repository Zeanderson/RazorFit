import os
import math
from supabase import create_client, Client
from flask import Flask, request, Response
from flask_cors import CORS, cross_origin
import datetime

x = datetime.datetime.now()

url: str = os.environ.get("SUPABASE_URL", "https://qhlsgempmzuxeyizwkuh.supabase.co")
key: str = os.environ.get("SUPABASE_KEY", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFobHNnZW1wbXp1eGV5aXp3a3VoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI5NzM1NTAsImV4cCI6MjAyODU0OTU1MH0.7uY2VwbEywP8B8K6wwFOUfR7NjMG7v08LIZSkdKJ9go")
supabase: Client = create_client(url, key)

app = Flask(__name__)
CORS(app, origins="http://localhost:3000")

#Implementations for General Table
@app.route('/Authentication_insert')
@cross_origin()
def Authentication_insert():
    User = request.args.get('User')
    Pwd = request.args.get('Pwd')
    FName = request.args.get('FName')
    LName = request.args.get('LName')
    Currency = request.args.get('Currency')
    Weight = request.args.get('Weight')
    Height = request.args.get('Height')
    CalGoal = request.args.get('CalGoal')
    CalsBurn = request.args.get('CalsBurn')
    HSExercise = request.args.get('HSExercise')
    data, count = supabase.table('General').insert({"USER": User, "PASSWORD": Pwd, "fName": FName, "lName": LName, "Currency": Currency, "Weight": Weight, "Height": Height, "HSExercising": HSExercise, "CalGoal": CalGoal, "CalBurn": CalsBurn}).execute()

@app.route('/Authenticate_user')
@cross_origin()
def Authenticate_user():
    User = request.args.get('User')
    Pwd = request.args.get('Pwd')
    response = supabase.table('General').select("USER").eq("USER", User).eq("PASSWORD", Pwd).execute()

    if response.data:
        return Response(status=200, response="Pass")
    else:
        return Response(status=401, response="Fail")  # Unauthorized status code

@app.route('/getFname')
@cross_origin()
def getFName():
    User = request.args.get('User')
    response = supabase.table('General').select("fName").eq('USER', User).execute()
    try:
        return response.data[0]['fName']
    except:
        return "na"
@app.route('/getLName')
@cross_origin()
def getLName():
    User = request.args.get('User')
    response = supabase.table('General').select("lName").eq('USER', User).execute()
    try:
        return response.data[0]['lName']
    except:
        return "na"
@app.route('/getCurrency')
@cross_origin()
def getCurrency():
    User = request.args.get('User')
    response = supabase.table('General').select("Currency").eq('USER', User).execute()
    try:
        return str(response.data[0]['Currency'])
    except:
        return ""
@app.route('/getWeight')
@cross_origin()
def getWeight():
    User = request.args.get('User')
    response = supabase.table('General').select("Weight").eq('USER', User).execute()
    try:
        print("getting weight:",response.data[0]['Weight'])
        return str(response.data[0]['Weight'])
    except:
        return ""
@app.route('/getHeight')
@cross_origin()
def getHeight():
    User = request.args.get('User')
    response = supabase.table('General').select("Height").eq('USER', User).execute()
    try:
        return str(response.data[0]['Height'])
    except:
        return ""
@app.route('/getCalGoal')
@cross_origin()
def getCalGoal():
    User = request.args.get('User')
    response = supabase.table('General').select("CalGoal").eq('USER', User).execute()
    try:
        return str(response.data[0]['CalGoal'])
    except:
            return ""
@app.route('/getCalBurn')
@cross_origin()
def getCalBurn():
    User = request.args.get('User')
    response = supabase.table('General').select("CalBurn").eq('USER', User).execute()
    try:
        return str(response.data[0]['CalBurn'])
    except:
            return ""
@app.route('/getHSExercising')
def getHSExercising():
    User = request.args.get('User')
    response = supabase.table('General').select("HSExercising").eq('USER', User).execute()
    try:
        return str(response.data[0]['HSExercising'])
    except:
            return ""
        
@app.route('/updateFName')
def updateFName():
    User = request.args.get('User')
    fName = request.args.get('fName')
    response = supabase.table('General').update({'fName' : fName}).eq('USER', User).execute()
    try:
        if response:
            return True
    except:
        return False 
@app.route('/updateLName')
def updateLName():
    User = request.args.get('User')
    lName = request.args.get('lName')
    response = supabase.table('General').update({'lName': lName}).eq('USER', User).execute()
    try:
        if response:
            return True
    except:
        return False
@app.route('/updateCurrency')
def updateCurrency():
    User = request.args.get('User')
    currency = request.args.get('currency')
    response = supabase.table('General').update({'Currency': currency}).eq('USER', User).execute()
    try:
        if response:
            return True
    except:
        return False
@app.route('/updateWeight')
def updateWeight():
    User = request.args.get('User')
    weight = request.args.get('weight')
    response = supabase.table('General').update({'Weight': weight}).eq('USER', User).execute()
    try:
        if response:
            return True
    except:
        return False
@app.route('/updateHeight')
def updateHeight():
    User = request.args.get('User')
    height = request.args.get('height')
    response = supabase.table('General').update({'Height': height}).eq('USER', User).execute()
    try:
        if response:
            return True
    except:
        return False
@app.route('/updateCalGoal')
def updateCalGoal():
    User = request.args.get('User')
    CalGoal = request.args.get('CalGoal')
    response = supabase.table('General').update({'CalGoal': CalGoal}).eq('USER', User).execute()
    try:
        if response:
            return True
    except:
        return False
@app.route('/updateCalBurn')
def updateCalBurn():
    User = request.args.get('User')
    CalBurn = request.args.get('CalBurn')
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
@app.route('/updateHSExercising')
def updateHSExercising():
    User = request.args.get('User')
    HSExercising = request.args.get('HSExercising')
    time = getHSExercising(User)
    newTime = time + HSExercising
    response = supabase.table('General').update({'HSExercising': newTime}).eq('USER', User).execute()
    try:
        if response:
            return True
    except:
        return False
@app.route('/calculateCalBurned')
def calculateCalBurned():
    User = request.args.get('User')
    minutes = request.args.get('minutes')
    exercise = request.args.get('exercise')
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

@app.route('/updatePassword')
def updatePassword():
    User = request.args.get('User')
    oldP = request.args.get('oldP')
    newP = request.args.get('newP')
    if Authenticate_user(User,oldP):
        response = supabase.table('General').update({'PASSWORD': newP}).eq('USER', User).execute()
    try:
        if response:
            print('updated password')
    except:
        print('error')
@app.route('/updateUserName')
def updateUserName():
    oUser = request.args.get('oUser')
    nUser = request.args.get('nUser')
    pwd = request.args.get('pwd')
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
@app.route('/addExersise')
def addExersise():
    name = request.args.get('name')
    MuscleG = request.args.get('MuscleG')
    Sport = request.args.get('Sport')
    type = request.args.get('type')
    link = request.args.get('link')
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
@app.route('/insertHogs')
def insertHogs():
    User = request.args.get('User')
    hog = request.args.get('hog')
    data, count = supabase.table('Hogs').insert({"USER": user, "Hog": hog}).execute()

#Implementations for Goals Table
@app.route('/Goal_Insert')
def Goal_Insert():
    GNum = request.args.get('GNum')
    User = request.args.get('User')
    Target = request.args.get('Target')
    Deadline = request.args.get('Deadline')
    data, count = supabase.table('Goals').insert({"Goal Num": GNum, "Target": Target, "Deadline": Deadline, "USER": User}).execute()
@app.route('/Goal_Update')
def Goal_Update():
    GNum = request.args.get('GNum')
    User = request.args.get('User')
    Target = request.args.get('Target')
    Deadline = request.args.get('Deadline')
    Progress = request.args.get('Progress')
    data, count = supabase.table('Goals').update({"Target": Target, "Deadline": Deadline, "Progress": Progress}).eq("Goal Num", GNum).eq("USER", User).execute()
@app.route('/Update_Target')
def Update_Target():
    GNum = request.args.get('GNum')
    User = request.args.get('User')
    Target = request.args.get('Target')
    data, count = supabase.table('Goals').update({"Target": Target}).eq("Goal Num", GNum).eq("USER", User).execute()
@app.route('/Update_Deadline')
def Update_Deadline():
    GNum = request.args.get('GNum')
    User = request.args.get('User')
    Deadline = request.args.get('Deadline')
    data, count = supabase.table('Goals').update({"Deadline": Deadline}).eq("Goal Num", GNum).eq("USER", User).execute()
@app.route('/Update_Progress')
def Update_Progress(): 
    GNum = request.args.get('GNum')
    User = request.args.get('User')
    Progress = request.args.get('Progress')
    data, count = supabase.table('Goals').update({"Progress": Progress}).eq("Goal Num", GNum).eq("USER", User).execute()
@app.route('/Goal_Delete')
def Goal_Delete():
    GNum = request.args.get('GNum')
    User = request.args.get('User')
    data, count = supabase.table('Goals').delete().eq("Goal Num", GNum).eq("USER", User).execute()

#Implementation for Prices Table
@app.route('/getPrices')
def getPrices():
    response = supabase.table('Prices').select("*").execute()
    for i in response.data:
        print("price of", i["Hog"], "is", i["Cost"])
    return response


if __name__ == '__main__':
    app.run(debug=True)
