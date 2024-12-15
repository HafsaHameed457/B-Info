## Array

An array is a collection of data items stored at contiguous memory locations. The idea is to store multiple items of the same type together. This makes it easier to calculate the position of each element by simply adding an offset to a base value, i.e., the memory location of the first element of the array (generally denoted by the name of the array). 

    An array stores items (in case of C/C++ and Java Primitive Arrays) or their references (in case of Python, JS, Java Non-Primitive) at contiguous locations.

    It offers mainly the following advantages over other data structures.

    - Random Access : i-th item can be accessed in O(1) Time as we have the base address and every item or reference is of same size.

    - Cache Friendliness : Since items / references are stored at contiguous locations, we get the advantage of locality of reference.

    - It is not useful in places where we have operations like insert in the middle, delete from middle and search in a unsorted data.

    - It is a fundamental and linear data structure using which we build other data structures like Stack Queue, Deque, Graph, Hash Table, etc.