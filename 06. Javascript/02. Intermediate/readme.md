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