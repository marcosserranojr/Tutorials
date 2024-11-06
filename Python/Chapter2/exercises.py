#!/usr/bin/env python3
"""
#==== Exercise 1. ========
num = None;

num = (input("Please Enter a POSITIVE REAL INTEGER Number. "));

if num.isdigit():
    num = int(num);
    isInt = isinstance(num, int);
    if isInt:
        print("The Number "+ str(num) +" is AN INTERGER!!!");
    else:
        print("The Number entered is NOT AN INTERGER!!!");
else:
    print("VALUE ENTERED IS INVALID")



#==== Excercise 2. =======

num = None;

num = (input("Please Enter a POSITIVE REAL INTEGER Number. "));

if num.isdigit():
    length = len(num);
    num = int(num);
    isInt = isinstance(num, int);    
    if isInt:
        print("The Number "+ str(num) +" is AN INTERGER and has " + str(length) + " Digits.");
    else:
        print("The Number entered is NOT AN INTERGER!!!");
else:
    print("VALUE ENTERED IS INVALID")

   

   #==== Exercise 3.

num1 = int(input("Please Enter an Integer. "));
num2 = int(input("Please Enter a Second Interger. "));
msg = None;

if num1 > num2:
    msg = "The first number "+ str(num1)+" is larger";

elif num2>num1:
    msg = "The second number "+ str(num2)+" is larger";

elif num1==num2:
    msg = "The numbers entered are equal.";


print(msg);
"""
#====== Exercise 4. ========

num1 = int(input("Please Enter an Integer. "));
num2 = int(input("Please Enter a Second Interger. "));
upper = None;
lower = None
total = None;
counter = None;

if num1 > num2:
    upper = num1;
    lower = num2
    
elif num2 > num1:
    upper = num2;
    lower = num1;

counter = lower
total = lower;

while counter < upper:
    counter = counter+1
    total += counter     
    

print ("Adding all numbers", total)