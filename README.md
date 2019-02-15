# W6D5 - Lecture - JavaScript Prototype

- Object-Oriented Programming in JS

### Programming Paradigms

1. Procedural Programming
2. Object-Oriented Programming
3. Functional Programming

#### Procedual Programming

- Imperative coding with procedures (functions that don't necessarily return values)
- Lots of mutations
- Flow of execution is dependant on the structure of the program
- Less code reusability
- Doesn't scale

#### Functional Programming

- Everything is a function with no side effects ie no mutations
- Encapsulation through function compositions
- Declarative coding
- Uses recursion for looping

#### Object-Oriented Programming

- Everything is an object

  - Each object is based off a class (the blueprint)
  - Each object has properties and methods
  - Can only change an object state through the allowed methods

- Encapsulation through inheritance

## Object-Oriented Programming in JS

### ES6 Class Syntax

- ES6 introduced a new syntax to create objects.
- The new syntax is much more approachable.
- The new syntax is however, just sugar coating the same prototype based OOP.

### Prototype Based OOP

- Objects are built by constructor calls ( a function with the new keyword)
- Functions are added to the prototype

### Difference between prototype and classes

- In traditional OOP, the class is a blueprint. The instance is a copy of the class. There is not an active link between the class and the instance.

- A constructor makes an object _linked_ to its prototype.
