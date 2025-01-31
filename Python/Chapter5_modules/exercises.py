#!/usr/bin/env python3

#==========================================================
#           CHAPTER FIVE EXERCISES
#
# chmod a+x ./exercises.py
# ./exercises.py
#==========================================================

""""
#=== Exercise Number 1 ================================================================================10
#---- Import a module

import my_module


def main():
    print(my_module.importFunc(10,20))


main()



#=== Exercise Number 2================================================================================10
#---- Import two modules

import my_module
import other_module

def main():
    print(my_module.importFunc(10,20))
    print(other_module.other_Func(11,12))


main()


#=== Exercise Number 3================================================================================10
#---- Sort the arguments passed via the call to the application
import sys

args = sys.argv
args.pop(0)
print(sorted(args))

"""
#=== Exercise Number 4================================================================================10
#---- Import a module to access system arguments and sum up the numbers passed in the terminal and provide the average

import sys

args = sys.argv
args.pop(0)
args_sum = 0

for arg in args:
    args_sum += int(arg)

args_avg = (args_sum / len(args))
print(f"The sum of the arguments passed is {args_sum} and the average is {args_avg}")
