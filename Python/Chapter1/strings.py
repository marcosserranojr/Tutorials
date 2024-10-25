#!/usr/bin/env python3

#First exercise - find length of string
strText = input("Please enter a string of text. ")
print("You entered: ",strText)
print("Your string contains {length} characters.".format(length = len(strText)))

#======================================================
#Second - use input and indexing a string
fName = input("Please enter your first name: ")
lName = input("Please enter your last name: ")
fullName = fName.strip() +" "+lName.strip()
print("Your Name is: ", fullName)
print("Your Initials are: ",fName[0]+"."+lName[0]+".")



#=====================================================
#Third - Using endswith, isalpha, and replace functions


inputStr = input("Please enter a string to anlyalyze. ");
print("The string you inputed is: "+'"'+inputStr+'"');



print("String ends with a period? "+str(inputStr.endswith(".")))
print("The string contains only Alpha characters? "+str(inputStr.isalpha()))
print("Is there is a letter x in the string? "+str("x" in inputStr))
print("The letter 'e' of the Input string replaced: "+inputStr.replace("e", "E"));


print("=============VARIATION USING FOR LOOP and IF Statement========================================")

outputStr = "";
char0=".";
char1=" "
char2="x"
isAlpha=False;

stringCount = len(inputStr);

for i in inputStr:

    checkChar = i;
    isPeriod = (checkChar==(char0));
    isAlpha=(checkChar.isalpha())
    isX = checkChar ==char2;

    if isPeriod==True:
    
        outputStr+=checkChar

    
    if isX==True:

        outputStr+=checkChar

    
    if isAlpha==True:
    
         outputStr+=checkChar
    

print("Your string was checked for a '.', 'x', and any alapha characters");
print("Those characters matching are outputed here: "+outputStr);




#=====================================================================================
#Fourth - Using length function and indexing
input = "Lets input a string here";

print("The First Character is: "+input[0]);

count = len(input);

last = input[count-1]

print("The last Leter is: "+input[count-1]);

print("The Letter "+last+" Appears "+ str(input.count(last))+ " Times")