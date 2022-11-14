""" this module contains a function that adds 2 integers """

""" 
For example,

>>> print(add_integer(5, 0))
5
"""


def add_integer(a, b=98):
    """ Returns the addition of two integers or floats.

    >>> print(add_integer(9, 4))
    13
    >>> print(add_integer(56, 10))
    66
    >>> print(add_integer(12))
    110

    If a or b is not an integer or float a TypeError is raised
    >>> print(add_integer(4, '0'))
    Traceback (most recent call last):
        ...
    TypeError: b must be an integer

    >>> print(add_integer(None))
    Traceback (most recent call last):
        ...
    TypeError: a must be an integer
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
