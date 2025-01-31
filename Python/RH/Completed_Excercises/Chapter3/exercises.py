#!/usr/bin/env python3

#==========================================================
#           CHAPTER THREE EXERCISES
#
# chmod a+x ./exercises.py
# ./exercises.py



#=== Exercise Number 1
"""
first = ["Sun","Mon","Tues","Wed","Thu","Fri","Sat"]
second = ["day","day","day","nesday","rsday","day","urday"]

days = [];

for idx in range(len(first)):
    days.append(str(first[idx]+str(second[idx])));

print(days)

#=== Exercise Number 2.

mylist = [];

prompt = "Enter a number (or the word 'end' to quit)";

while True:
    data = input(prompt)
    if data == "end":
        break;
    mylist.append(int(data))

print (mylist);

total = 0;

for value in mylist:
    total += value

print(total);

#=== Exercise Number 3.

myset = set();
duplicates=0;

prompt = "Enter a number (or the word 'end' to quit)";

while True:
    data = input(prompt)
    if data == "end":
        break;
    elif data in myset:
        duplicates +=1;
    else:
        myset.add(data)

print (myset);
print ("{0} entries not added.".format(duplicates))


#=== Exercise Number 4.

newset = set();
unique=0;

prompt = "Enter a word (or the word 'end' to quit)";

while True:
    data = input(prompt)
    if data == "end":
        break;
    elif data not in newset:  
        newset.add(data)
        unique +=1;

print (sorted(newset));
print ("{0} words are unique".format(unique))


#=== Exercise Number 5.

numbers = {

    0:"zero",
    1:"one",
    2:"two",
    3:"three",
    4:"four",
    5:"five",
    6:"six",
    7:"seven",
    8:"eight",
    9:"nine"
}

while True:
    num = input("Please enter a number: ")
    if num.isnumeric():
        break;    
    print("{0} is not a number. Please try again. ".format(num));

for digit in num:
    print (numbers[int(digit)], end=" ")

print();

"""

#=== Exercise Number 6.

words = dict();
unique=0;

prompt = "Enter a word (or the word 'end' to quit)";

while True:
    data = input(prompt).strip()
    if data == "end":
        break;
    cur_count = words.get(data, 0)
    cur_count += 1;
    words[data] = cur_count

print("The Dictonary: ", words)

used_words = sorted(words.keys())
print("The 'used_words' Dictionary sorted by Keys: ", used_words) #Alphabetical order

for word in used_words:
    print(word, "Was used", words[word], "times") # find the value where the key is used, value=number, key =word

#/// Function sorts dictionary by key
def sort_by_freq(key):
    return words[key]

used_words.sort(key=sort_by_freq) #use sorted dict 'words' as the key to sort the dict 'used_words'

for word in used_words:
    print(word,"was used", words[word], "times")


