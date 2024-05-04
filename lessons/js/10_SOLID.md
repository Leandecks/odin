## SOLID Design Principles

### 1. Single Responsability
A class should have just one kind of thing to do.   
If there are several, create more classes and separate them into modules.

### 2. Open / Closed
A class should be open for extension, but closed for modification.

### 3. Liskov Substitution
Every subclass of a class should be usable as the class itself.   
Can be avoided using composition over inheritance.

### 4. Interface Segregation
An object created from a class, should not have unused functions.   
Use composition to just add the neccessary ones.

### 5. Dependency Inversion
If you have dependencies add an intermediate processor that always outputs the same modules.