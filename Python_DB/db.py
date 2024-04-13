import os
from supabase import create_client, Client

url: str = os.environ.get("SUPABASE_URL", "https://qhlsgempmzuxeyizwkuh.supabase.co")
key: str = os.environ.get("SUPABASE_KEY", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFobHNnZW1wbXp1eGV5aXp3a3VoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI5NzM1NTAsImV4cCI6MjAyODU0OTU1MH0.7uY2VwbEywP8B8K6wwFOUfR7NjMG7v08LIZSkdKJ9go")
supabase: Client = create_client(url, key)

print("\nyahoo!\n")

def Authentication_insert(User, Pwd, FName, LName, Currency, Weight, Height):

    data, count = supabase.table('General').insert({"USER": User, "PASSWORD": Pwd, "fName": FName, "lName": LName, "Currency": Currency, "Weight": Weight, "Height": Height}).execute()

def Authenticate_user(User, Pwd):
    response = supabase.table('General').select("USER").eq("USER", User).eq("PASSWORD", Pwd).execute()
    try:
        print("response data is", response.data[0])
        print("Authentication passed")
    except:
        print("Authentication failed")

#Testing functions

#Pass
#Authentication_insert("Zeanders", "balls", "Zack", "Anderson", 1, 190, 70)
#Pass
#Authenticate_user("Zeanders","balls")

