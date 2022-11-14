#!/usr/bin/python3

"""
this module contains a function that adds 2 integers
>>> print(add_integer(8, 0))
8
"""


def add_integer(a, b=98):
    """ Returns the addition of two integers or float
    Raises TypeError if a or b aren't integers with a message
    """

    if isinstance(a, str):
        raise TypeError("a must be an integer")

    elif isinstance(b, str):
        raise TypeError("b must be an integer")

    elif (isinstance(a, int) or isinstance(a, float)) and (isinstance(b, int) or isinstance(b, float)):
        result = int(a) + int(b)

    else:
        raise TypeError("a must be an integer")

    return result
