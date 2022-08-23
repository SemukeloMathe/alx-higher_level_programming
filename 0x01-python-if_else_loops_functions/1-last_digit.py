#!/usr/bin/python3
import random
number = random.randint(-10000, 10000)

if number > 0:
    aux = number % 10
#    print(f"{number:d} & {aux:d}")
elif number < 0:
    aux = (number % 10) - 10
#    print(f"{number:d} & {aux:d}")
else:
    aux = number % 10
#    print(f"{number:d} & {aux:d}")

if aux > 5:
    print(f"Last digit of {number:d} is {aux:d} and is greater than 5")
elif aux == 0:
    print(f"Last digit of {number:d} is {aux:d} and is 0")
elif 6 > aux < 0:
    print(f"Last digit of {number:d} is {aux:d} and is less than 6 and not 0")
