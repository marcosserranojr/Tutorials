#!/usr/bin/env python3


import quotes
import greetings
from flask import Flask
#==============================================================================
#           CHAPTER FIVE REVIEW EXAMPLE PROBLEM 
#           Greetings and quotes web service using FLASK
#
# ----- Run the python file or flask file using below:
# Linux
# chmod a+x ./exercises.py
# "./exercises.py" or "falsk --app ./review.py"
#
# Windows
# "python excercises.py" or "python -m flask --app review.py run"
#
# ------- Python Virtual Environment in VS Code-----------------------------------------------
#
# ctrl+shift+p   -- Python: Create Environment - creates virtual environment and the venv directory
#                -- all new dependencies will be installed in venv dir
#                -- Open new terminal -- execute:\> pip install flask - Dependency added 
#                -- Import the dependency in your code
#=============================================================================

#Activate the flask application
app = Flask(__name__) 

#METHODS
@app.get("/hello")
def greet_anonymous():
    return greetings.greet() + "\n"

@app.get("/hello/<name>")
def greet_user(name):
    return greetings.greet(name) + "\n"

@app.get("/quote")
def get_random_quote():
    return quotes.get_quote() + "\n"

@app.get("/quote/<int:num>")
def get_specific_quote(num):
    return quotes.get_quote(num) + "\n"

@app.get("/quote/count")
def get_quote_count():
    return quotes.get_quote_count() + "\n"


"""
print(greet_anonymous())
print(greet_user("Tom"))
print(greet_user("Joe"))
print(get_random_quote())
print(get_quote_count())
print(get_specific_quote(5))
"""