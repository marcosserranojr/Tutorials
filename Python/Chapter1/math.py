#!/usr/bin/env python3

# Example 5: How to raise a int to a power 
radius = int(input("Please enter a radius of a circle: "))
print("The radius you entered was "+str(radius));
pi = 3.14159
area = (pi*(radius ** 2));
print("There Area of a circlt for radius: "+str(radius)+ " is equal to: "+str(area));

#Example 6: Identifies non integers can not be converted to interger since we type case the input

first = int(input("Please enter an integer."))
second = int(input("Please enter a second integer."))

product = first * second

print("The product of the two intergers is: ", product);


#Example 7: Using a while loop

string = input("Please enter a string. ");
number = int(input("Please enter a integer. "))

i=1;
while i<=number:
    print(string);
    i+=1

print("The string was printed "+ str(number)+" times.")


#Exmaple 8: Using exponenets 

base = int(input("Please enter an integer to be used as the base: "))
expo = int(input("Please enter an integer to be used as an exponenet: "))

print("The number "+str(base)+" rasied to the exponent of "+ str(expo)+" is equal to: ", base ** expo);
print("{0} to the power of {1} equals {2}".format(base, expo, base ** expo));