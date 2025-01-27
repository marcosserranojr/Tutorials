#!/usr/bin/env python3

#==========================================================
#           CHAPTER FOUR EXERCISES
#
# chmod a+x ./exercises.py
# ./exercises.py
#==========================================================
"""
#=== Exercise Number 1 ==================================================
# --- Validate input as positive interger
num = (input("Please Enter a POSITIVE REAL INTEGER Number. "));

def isPostive(num):
    if num.isnumeric():
        return int(num)

    return 0

returnNum = isPostive(num)

if returnNum > 0:
    print("Your inputed number "+num+" is postive")

else:
    print("Your inputed number was not postive")


#=== Exercise Number 2 ====================================================
#----- Get the longest length of the string in a collection and format

def get_longest_length(word_list):
    return len(max(word_list, key=len)) # get the max value form word_list using key of length to sort and return that length


words = {"hello","telephone", "areial surgery","mouse","boo"}

longest = get_longest_length(words)

print(longest)
for word in words:
    print (f"{word:>{longest}s}") #printing the word with format of ":>" right indenting width length of the value of longest with spaces


#=== Exercise Number 3 ======================================================================================
#---- create function similar to the sum function

def get_sum(*params): #function takes a variable number of parameters
    return sum(params)

numbers=[1, 7, 22, 53, 0, 13]
print("The sum of {0} is {1}".format(numbers, get_sum(1, 7, 22, 53, 0, 13)))


#=== Exercise Number 4 ================================================================================
#---- rewrite previous function return a tuple instead of the sum tuple will havethe sum and average

def get_sum_avg(*params): #function takes a variable number of parameters
    calc_sum = sum(params)
    calc_avg = calc_sum / len(params)
    return (calc_sum, calc_avg) # returned tuple

numbers=[1, 7, 22, 53, 0, 13]
print("The sum and avg of {0} is {1}".format(numbers, get_sum_avg(1, 7, 22, 53, 0, 13)))


#=== Exercise Number 5 ================================================================================
#---- Calculator application

def add():
    x, y = get_numbers()
    print(f"{x}+{y} = {x+y}\n")

def subtract():
    x, y = get_numbers()
    print(f"{x}-{y} = {x-y}\n")

def multiply():
    x, y = get_numbers()
    print(f"{x}*{y} = {x*y}\n")

def divide():
    x, y = get_numbers()
    print(f"{x}/{y} = {x/y}\n")

def get_numbers():
    x = int(input("Enter first operand: "))
    y = int(input("Enter the second operand: "))
    return (x, y)
    
def quit():
    print("Exiting the calculator application")
    exit()

def impossible():
    print("can't perform this operation")

calculator={
    "1": add,
    "2": subtract,
    "3": multiply,
    "4": divide,
    "5": quit
}

while True:
    print("Calcualtor options:")
    for key in calculator:
        print(f"{key}: {calculator[key].__name__.capitalize()}")
    choice = input("Choose an operation: ")
    calculator.get(choice, impossible)()


#=== Exercise Number 6 ================================================================================
#---- Calculator application

def postive_only(some_list):
    result=[]
    for element in some_list:
        if (type(element) != int) and (type(element) != float):
            print("NOT INT TYPE: ",type(element), element)
            continue
        if element > 0:
            result.append(element)
        
    return result


elements = ["boo", 15, -3, 99, "a car", [1,2,3], -99, 4.0,-2.0]
print("Original Elemets: ",elements)
result_list = postive_only(elements)

print("Positive List: ", result_list)

"""
#=== Exercise Number 7 ================================================================================
#---- Return a list of numbers greater than the boundary from a list of variable number arguments 

def num_of_greater(*var_list, boundary):
    num_greater = 0
    for item in var_list:
        if item >boundary:
            num_greater += 1;
    return num_greater


result = num_of_greater(7,19,-30,22,55,97,48, boundary=17)

print("Those numbers greater than the boundary: ", result)

#=== Exercise Number 8 ================================================================================
#---- 1:57:29 