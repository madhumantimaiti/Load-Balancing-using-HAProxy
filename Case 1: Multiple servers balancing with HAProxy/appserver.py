from flask import Flask, request
import sys

portno=sys.argv[1]

app=Flask(__name__)

@app.route('/')
def index():
        print(request.headers)
        return "Welcome to server 1 with  %s" %portno
        
if __name__ =="__main__":
       app.run(port=sys.argv[1])        

