import os
from supabase import create_client, Client

url: str = os.environ.get("SUPABASE_URL", "https://qhlsgempmzuxeyizwkuh.supabase.co")
key: str = os.environ.get("SUPABASE_KEY", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFobHNnZW1wbXp1eGV5aXp3a3VoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI5NzM1NTAsImV4cCI6MjAyODU0OTU1MH0.7uY2VwbEywP8B8K6wwFOUfR7NjMG7v08LIZSkdKJ9go")
supabase: Client = create_client(url, key)

print("\nyahoo!\n")

def Authentication_insert(self, Id, User, Pwd, FName, LName, Currency, Weight, Height):
    self.id = Id
    self.user = User
    self.pwd = Pwd
    self.fName = FName
    self.lName = LName
    self.currency = Currency
    self.weight = Weight
    self.height = Height

    data, count = supabase.table('General') \
    .insert({"ID": 3, "USER": "Zeanders", "PASSWORD": "noyou'reshit", "fName": "Zack", "lName": "Anderson", "Currency": 0, "Weight": 190, "Height": 70}) \
    .execute()