#!/usr/bin/env python3


greeting="Hello Stanger"

greetings={
    "joe": "Yo Joe, It's been a while",
    "jane": "Let it rain, Jane",
    "tom": "Tom, have you seen your mom"
}

def greet(name=""):    
    """
    if not name:
        return greeting
    if name in greetings.keys():
        return greetings[name]
    return greeting
    """
    #cleaner version 
    return greetings.get(name, greeting)


def main():
    print("This is a module, please import")
    
if __name__ =="__main__":
    main()