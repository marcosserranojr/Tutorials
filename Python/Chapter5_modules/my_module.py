#!/usr/bin/env python3

def importFunc(a,b):
    add_sum = a+b
    print(f"This is the imported function. The sum of {a} and {b} equals = {add_sum}\n")
    print("Module "+__name__ + " , function "+importFunc.__name__)

