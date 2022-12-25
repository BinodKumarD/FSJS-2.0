## Javascript -> <em>02. Intermediate</em> 

<hr/>

# Table of Contents
- [Table of Contents](#table-of-contents)
  - [1. Functions](#1-functions)
  - [2. Context](#2-context)
  - [3. hoisting](#3-hoisting)
  - [4. scope chaining](#4-scope-chaining)
  - [5. Array](#5-array)
  - [6. Arrow function and callback function](#6-arrow-function-and-callback-function)
  - [7. fill and filter function in array](#7-fill-and-filter-function-in-array)
  - [8. slice and splice function in array](#8-slice-and-splice-function-in-array)
  - [9. Javascript Objects](#9-javascript-objects)
  - [10. Methods and objects](#10-methods-and-objects)
  - [11. for loops](#11-for-loops)
  - [12. While and Do While Loops](#12-while-and-do-while-loops)

<hr/>

## 1. Functions

A JavaScript function is a block of code designed to perform a particular task. Function is executed when "something" invokes it (calls it). It is defined with the function keyword, followed by a name, followed by parentheses.

![](./00.%20Output/01.%20functions.png)

<hr/>

Using functions to know the role of the user.

![](00.%20Output/02.%20UserRoleFunctions.png)

<hr/>

## 2. Context

In JavaScript, “context” refers to an object. Within an object, the keyword “this” refers to that object (i.e. “self”), and provides an interface to the properties and methods that are members of that object. When a function is executed, the keyword “this” refers to the object that the function is executed in.
When a function executes in the global context, “this” refers to the global, or “window” object.

![](./00.%20Output/03.%20jsContext.png)

<hr/>

## 3. hoisting

JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.

![](./00.%20Output/04.%20hoisting.png)

<hr/>

## 4. scope chaining

Scope in JavaScript actually determines the accessibility of variables and functions at various parts in one’s own code or program. Within a scope itself, a variable or a function, or a method could be accessed. Outside the specified scope of a variable or function, the data cannot be accessed.
There are three types of scopes available in JavaScript: Global Scope, Local / Function Scope, and Block Scope

![](./00.%20Output/05.%20scopeChaining.png)

<hr/>

## 5. Array

Arrays are used to store multiple values in a single variable. This is compared to a variable that can store only one value. Each item in an array has a number attached to it, called a numeric index, that allows you to access it. In JavaScript, arrays start at index zero and can be manipulated with various methods.

![](./00.%20Output/06.%20array.png)

<hr/>

## 6. Arrow function and callback function

Arrow function — also called fat arrow function— is a new feature introduced in ES6 that is a more concise syntax for writing function expressions. A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

![](./00.%20Output/07.%20arrow_callback.png)

<hr/>

## 7. fill and filter function in array

The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array. The filter() method creates a new array with all elements that pass the test implemented by the provided function.

![](./00.%20Output/08.%20fill_filter.png)

<hr/>

## 8. slice and splice function in array

The slice() method can be used to create a copy of an array or return a portion of an array. It is important to note that the slice() method does not alter the original array but instead creates a shallow copy.
Unlike the slice() method, the splice() method will change the contents of the original array. The splice() method is used to add or remove elements of an existing array and the return value will be the removed items from the array.

![](./00.%20Output/09.%20slice_splice.png)

<hr/>

## 9. Javascript Objects

A javaScript object is an entity having state and behavior (properties and method). For example: car, pen, bike, chair, glass, keyboard, monitor etc.
JavaScript is an object-based language. Everything is an object in JavaScript.
JavaScript is template based not class based. Here, we don't create class to get the object. But, we direct create objects.

![](./00.%20Output/10.%20Objects.png)

<hr/>

## 10. Methods and objects

JavaScript methods are actions that can be performed on objects. A JavaScript method is a property containing a function definition.

![](./00.%20Output/11.%20methods_objects.png)

<hr/>

## 11. for loops

A for loop repeats until a specified condition evaluates to false. The JavaScript for loop is similar to the Java and C for loop. 
There are mainly types of for loops:
i. for loop
ii. for each loop this loop applies in the array only and this counted as array function but not as loop.
iii. for of loop this loop applies on the array.
iv. for in loop this loop aplies on the object of the array.

![](./00.%20Output/12.%20forLoops.png)

<hr/>

## 12. While and Do While Loops

A while statement executes its statements as long as a specified condition evaluates to true.The do...while statement repeats until a specified condition evaluates to false.

![](./00.%20Output/13.%20while_doWhile.png)

<hr/>