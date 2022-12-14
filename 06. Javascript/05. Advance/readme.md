## Javascript -> <em>05. Advance</em> 

<hr/>

# Table of Contents 
- [Table of Contents](#table-of-contents)
  - [1. Scope](#1-scope)
  - [2. strings](#2-strings)
  - [3. maps](#3-maps)
  - [4. Destructure the Data](#4-destructure-the-data)
  - [5. Spread and rest](#5-spread-and-rest)
  - [6. Class and Objects](#6-class-and-objects)
  - [7. Getter and Setter](#7-getter-and-setter)
  - [8. Inheritance](#8-inheritance)
  - [9. Promise Async and Await](#9-promise-async-and-await)
  - [10. API](#10-api)
  - [11. Quirky Behavior of Javascript](#11-quirky-behavior-of-javascript)
  - [12. Double shot](#12-double-shot)

<hr/>

## 1. Scope

JavaScript had only Global Scope and Function Scope. ES6 introduced two important new JavaScript keywords: let and const. These two keywords provide Block Scope in JavaScript. Variables declared inside a { } block cannot be accessed from outside the block.

![](./00.%20Output/01.%20scope.png)

<hr/>

## 2. strings

In JavaScript, strings are created by surrounding them with quotes. There are three ways you can use quotes.
- Single quotes: 'Hello'
- Double quotes: "Hello"
- Backticks: \`Hello`

![](./00.%20Output/02.%20strings.png)

<hr/>

## 3. maps

The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

![](./00.%20Output/03.%20maps.png)

<hr/>

## 4. Destructure the Data

The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

![](./00.%20Output/04.%20pickData.png)

<hr/>

## 5. Spread and rest

Spread syntax can be used when all elements from an object or array need to be included in a new array or object, or should be applied one-by-one in a function call's arguments list.

![](./00.%20Output/05.%20spreadRest.png)

<hr/>

## 6. Class and Objects

Classes and Objects are basic concepts of Object Oriented Programming that revolve around real-life entities. 

Classes: Classes were first introduced in the new version of the ES6 classes which replaced the previously used functions. Class is nothing but a blueprint for an object of it. It is used to create an object mainly. If we relate it to a real-life example then it is like a plan for a building or house where that plan contains details about doors, windows, floors, etc. 

![](./00.%20Output/06.%20class.png)

![](./00.%20Output/07.%20classObjects.png)

<hr/>

## 7. Getter and Setter

ECMAScript 5 (ES5 2009) introduced Getter and Setters.
Getters and setters allow us to define Object Accessors (Computed Properties).

![](./00.%20Output/08.%20getterSetter.png)

<hr/>

## 8. Inheritance

To create a class inheritance, use the extends keyword. A class created with a class inheritance inherits all the methods from parent class.

![](./00.%20Output/09.%20Inheritance.png)

<hr/>

## 9. Promise Async and Await

Promise is an object representing intermediate state of operation which is guaranteed to complete its execution at some point in future.
Async/Await is a syntactic sugar for promises, a wrapper making the code execute more synchronously.

![](./00.%20Output/10.%20Promise.png)

<hr/>

## 10. API

API stands for Application Programming Interface.
A Web API is an application programming interface for the Web.
A Browser API can extend the functionality of a web browser.
A Server API can extend the functionality of a web server.

![](./00.%20Output/11.%20API.png)

<hr/>

## 11. Quirky Behavior of Javascript

JavaScript is strange in that it's different from what developers coming to it from other programming languages often expect. In particular because JavaScript has C/C++/Java-like syntax, which causes such developers to assume that it has similar semantics as well but its not.

![](./00.%20Output/12.%20jsTest.png)

<hr/>

## 12. Double shot

Double shot its useful in real time application in which we don't need truthy or false values but we need true or false values which are boolean in nature so that our application doesn't face any issue. So, for this we use double exclamation to convert falsy value to false value.

![](./00.%20Output/13.%20doubleShot.png)

<hr/>

