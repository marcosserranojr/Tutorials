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
#---- Nested function

def outer(x,y):
    def inner():
        return x+y

    return inner #Note: the return of the outer is the return of the inner adding "inner()" breaks the logic since that returns a call to the function 

f = outer(5,5)

print(f"Return value is {f()}")


#=== Exercise Number 9 ================================================================================
#---- rewritting the Nested function above

def outer():
    def inner(x, y):
        return x + y
    
    return inner


f = outer()

print(f"Return value is {f(5,6)}")


#=== Exercise Number 10 ================================================================================10
#---- rewritting the Nested function above to use lamba

def outer():
    return lambda x,y: x+y

f = outer()

print(f"Return value is {f(5,6)}")


#=== Exercise Number 11 ================================================================================10
#---- Function takes two lists and returns a list on common items using sets

def get_common_elements( list1, list2):
    s1 = set(list1)
    s2 = set(list2)

    return list(s1 & s2)
    


first_list = ["foo", 77, "tractor" ]
second_list = [77,"skyscraper", 99, "foo"]

print(get_common_elements(first_list, second_list))


#=== Exercise Number 12 ================================================================================10
#---- Function takes as parameters a number and a dictionary and adds that number to every value in the dictionary

def add_number(operand, dictionary):
    for key in dictionary.keys():
        dictionary[key] = dictionary[key]+operand #Note: we reference the value of the dictiontary by the reference key and add the number 
                                                # then reassign the new value to the appropriate referenced position overriding previous value.

    return dictionary


myDict = {
    "low" : 7,
    "medium" : 50,
    "high" : 99

}

print(add_number(1, myDict))


#=== Exercise Number 13 ================================================================================10
#---- Function returns the index of a list where the nth occurence of that item appears

# 1. parameter - Search list    2. Parameter - search item in list  3. Parameter - represents the number of occurences


def  nth_occurence_of (alist, item, n):
    if alist.count (item) < n:
        return -1
    start_at = 0

    for x in range(n): # range loop no more that n times
        
        found_at = alist.index(item, start_at) # returns index where item is found once
        print("found at:", found_at,"Index Position", start_at)        
        start_at = found_at +1 # move the start index by one so that it continues down the list
        
    return found_at # returns the index of the last time found based on the range given


mylist = ["a car", 66, "a car", 9, "bagle", [1,2,3], "a car", "sky"]
nth = 3

print(f"The {nth} occurence of 'a car' is at index: {nth_occurence_of(mylist, 'a car', nth)}")

"""

#=== Exercise Summary ================================================================================10
#---- Card playing function


import random

#==== Create and shuffle a deck and return it ===
def suffle():
    #create a list of possible card types
    colors = ("Diamonds", "Hearts", "Spades", "Clubs")
    ranks = ("Ace", "King", "Queen", "Jack") + tuple( num for num in range(10, 1, -1))

    #testing the tuple
    test = (tuple( num for num in range(10, 1, -1))) #tuple: immutable array from a range starting at 10 decreasing by 1 untill one less the end range.

    #Full deck created
    deck = [(rank, color) for rank in ranks for color in colors]

    #recreate the deck in no particular order
    random.shuffle(deck)
    random.shuffle(deck)

    return deck

#=== Deal out five cards ===
def deal(deck, num):
    hand = []
    for x in range(num):
        hand.append(deck.pop()) # add five cards to hand array as they are poped from deck tuple
    return hand

#=== Show user thier hand ===
def show_hand(hand):
    for pos, (rank, color ) in enumerate(hand): #use enumerate function to iterate through the hand array
        print(f"{pos+1} - {rank} of {color}")


#=== change cards ===
def change_cards(deck,hand, num):
    for x in range(num):
        show_hand(hand)
        while True:
            num_cards = input(" which card do you wish to exchange? ")
            if not num_cards.isnumeric() or int(num_cards)<1 or int(num_cards) > len(hand):
                print("Invalid choice in card count. Please Try Again.")
                continue
            break
        (rank, color) = hand[int(num_cards) - 1]
        hand.remove((rank, color))# note that rank and color are considered one value so in () represents a tuple.
            
    new_hand = deal(deck, num)
    return hand + new_hand



# == Lets play ===
deck = suffle()
hand = deal(deck, 5)
show_hand(hand)

while True:
    while True:
        nchange =  input("How many cards do you want to change (up to three)?")
        if not nchange.isnumeric() or int(nchange) > 4  :
            print(" Invalid choice, please try again")
            continue

        nchange = int(nchange)
        break

    if nchange == 0:
        break

    hand = change_cards(deck, hand, nchange)
    show_hand(hand)