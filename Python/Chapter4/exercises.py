#!/usr/bin/env python3

#==========================================================
#           CHAPTER FOUR EXERCISES
#
# chmod a+x ./exercises.py
# ./exercises.py


"""


#=== Exercise Number 1 ===============
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
"""

#=== Exercise Number 2 ===================
#----- Get the longest length of the string in a collection and format

def get_longest_length(word_list):
    return len(max(word_list, key=len)) # get the max value form word_list using key of length to sort and return that length


words = {"hello","telephone", "areial surgery","mouse","boo"}

longest = get_longest_length(words)

print(longest)
for word in words:
    print (f"{word:>{longest}s}") #printing the word with format of ":>" right indenting width length of the value of longest with spaces



