#!/usr/bin/env python3

import random

#QUOTES
quotes = (
    "To get what you want, deserve what you want. Trust, success, and admiration are earned. - (Charlie Munger)",
    "Success with a negative attitude is called luck. And success with a positive attitude is called achievement. - (Anonymous)",
    "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. - (Oprah Winfrey)",
    "May you live all the days of your life. - (Jonathan Swift)",
    "Live in this world as if you are a stranger or a wayfarer - (Prophet Muhammad PBUH)",
    "If life were predictable it would cease to be life, and be without flavor. - (Eleanor Roosevelt)",
    "Never let the fear of striking out keep you from playing the game. - (Babe Ruth)",
    "Success is not final, failure is not fatal, It is the courage to continue that counts. - (Winston S. Churchill)",
    "Happiness comes from helping others, by being with others, and by sharing, even if it's only a smile. - (Zain Hashmi)",
    "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. - (Dr. Seuss)",
    "You only live once, but if you do it right, once is enough. - (Mae West)",
    "It doesn't make sense to hire smart people and then tell them what to do; we hire smart people so they can tell us what to do. - (Steve Jobs)",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - (Nelson Mandela)",
    "Success usually comes to those who are too busy to be looking for it. - (Henry David Thoreau)",
    "Successful people do what unsuccessful people are not willing to do. Don't wish it were easier; wish you were better. - (Jim Rohn)",
    "There are no secrets to success. It is the result of preparation, hard work, and learning from failure. - (Colin Powell)"
)

def get_quote(seq = -1):
    if seq <0:
        seq = random.randint(0, len(quotes))
    if seq >= len(quotes):
        return "ERROR: No corresponding quote for number"
    return quotes[seq]

def get_quote_count():
    return str(len(quotes))

def main():
    print("This is a module, please import")
    
if __name__ =="__main__":
    main()