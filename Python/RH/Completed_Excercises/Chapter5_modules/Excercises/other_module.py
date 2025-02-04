#!/usr/bin/env python3
def other_Func(a,b):
    add_sum = a+b
    print(f"This is the imported function. The sum of {a} and {b} equals = {add_sum}\n")
    print("Module "+__name__ + " , function "+other_Func.__name__)