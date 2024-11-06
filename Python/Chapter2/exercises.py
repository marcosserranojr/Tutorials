#!/usr/bin/env python3

import math;
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


#==== Exercise 5.
 
numList = input("Please Enter a list of  Integer seperated by a space. ");
splitList = numList.split();
zero = float(0.0);

for value in splitList:
    if not value.isnumeric():
        print("Not Numeric ",value)
        continue;
    if int(value) >0:
        print(str(value));

#===== Excersise 6. ======

start = int(input("Please Enter an starting number. "));
end = int(input("Please Enter a ending number. "));
step = int (input("Please enter STEP: "))

if step >0 and start > end:
    print("Can not increment from larger to lower number");

elif step < 0 and start < end:
    print ("Can not decrement from lower to larger");

elif step == 0:
    print ("Step can not be Zero")

else:
    print("Printing numbers in a range from:",start," to",end," with a step of ",step)
    for x in range(start, end+1, step):        
        print (x)

        

 #== Exercise 7 =======
mylist = "";

for x in range(0,50, 1):
    mylist += str(x)+" ";
print("============================")
print("MY LIST",mylist);

splitStr = mylist.split();
print("SPLIT STRING:", splitStr)

counter = len(splitStr);
print("THE COUNTER:", counter)
print("====================================")
capture= " ";
i=0;
while i < counter:
    j = 0;
    while j < 10:
        capture += splitStr[i]+" ";
        i = i+1  
        j = j+1  
    print(capture+'\n')
    capture="";
   
"""
# another version

for val in range(50):
    print(" ", end=""); # Adds a space in front of each number
    if val < 10: #for the first row add another space so the numbers are blocked
       print(" ", end ="")   
    print(val, end ="");#this prints every number in the range
    if val % 10 == 9: #every number divided by 10 with a remainder of 9 print a new line
        print()
    