# Table of Contents
- [Table of Contents](#table-of-contents)
  - [1. Padding And Margin](#1-padding-and-margin)
  - [2. Fonts](#2-fonts)
  - [3. Colors](#3-colors)
  - [4. Borders And Background](#4-borders-and-background)
  - [5. Float, clear and Alignment](#5-float-clear-and-alignment)
  - [6. Display Properties](#6-display-properties)
  - [7. Positions](#7-positions)
  - [8. Visibility and z-index](#8-visibility-and-z-index)
  - [9. Flexbox](#9-flexbox)
  - [10. Size Units](#10-size-units)
  - [11. Selectors](#11-selectors)
  - [12. Attribute and n-th child selector](#12-attribute-and-n-th-child-selector)
  - [13. Pseudo class Selector](#13-pseudo-class-selector)
  - [14. Box shadow and text shadow](#14-box-shadow-and-text-shadow)
  - [15. Variables in css](#15-variables-in-css)
  - [16. Animations and keyframes](#16-animations-and-keyframes)

<hr/>

## 1. Padding And Margin<a name="padding"></a>

Padding is the space between an element's border and the element's content while margin is the space around an element's border. 

![](./Output/1.PaddingMargin.jpg)

<hr/>

## 2. Fonts<a name="fonts"></a>

To change our text with different fonts we will use font-family. We can use our desired font family by importing google fonts in html file or in css file.

![](./Output/2.fonts.jpg)

<hr/>

## 3. Colors<a name="colors"></a>

Color property is used to set the color to our text, background or any other html elements. We can use several different ways to specify the colors like: color keywords, rgb, rgba, hex values, etc.

![](./Output/3.Colors.jpg)

<hr/>

## 4. Borders And Background<a name="borders"></a>

Border helps us to define border to particular html element.

![](./Output/4.borders.jpg)

<hr/>

## 5. Float, clear and Alignment<a name="float"></a>

Float specifies how an element should float whereas clear property specifies what elements can float beside the cleared element and on which side. 
The text-align property in CSS is used to specify the horizontal alignment of text in an element ie., it is used to set the alignment of the content horizontally, inside a block element or table-cell box.

![](./Output/5.alignment.jpg)

<hr/>

## 6. Display Properties<a name="display"></a>

The display property specifies how an element is displayed.

Every HTML element has a default display value depending on what type of element it is. The default display value for most elements is block or inline.

![](./Output/6.Display.jpg)

<hr/>

## 7. Positions<a name="position"></a>

The position property specifies the type of positioning method used for an element.

There are five different position values:
i.   static
ii.  relative
iii. absolute
iv.  fixed
v.   sticky

Elements are then positioned using the top, bottom, left, and right properties. However, these properties will not work unless the position property is set first. They also work differently depending on the position value.

![](./Output/7.Posititons.jpg)

<hr/>

## 8. Visibility and z-index<a name="visibility"></a>

The visibility property specifies whether or not an element is visible. Visbility hides the element but will show its empty space whereas Display: none hides the element and the space.z-index will work only for position: relative, absolute, fixed or sticky. z-index does not work on static position. With the help of z-index we can specify the preference of one element over the other element.  

![](./Output/8.Visibility.jpg)

<hr/>

## 9. Flexbox<a name="flexbox"></a>

Flexbox is a one-dimensional layout method for laying out items in rows or columns. Css flexbox is a better way to align items into a container.
(Flexbox = flexible + box)

Flex properties on flex container:
1. **flex-driection**: row, column, row-reverse, column-reverse (by default row).
2. **flex-wrap**: wrap, no-wrap, wrap-reverse (by default no wrap),
wrapping the items in the container.
3. **flex-flow**: short hand of flex-direction and flex-wrap.
4. **justify-content**: center, space-between, space-evenly, space-around,
it will justify the elements in horizontal direction.
5. **align-items**: center, flex-end, flex-start, center,
it will justify content in vertical direction.

Flex properties on flex items:
1. **order**: higher the order later it shows up in the container.
2. **flex-grow**: specifies how much the item will grow relative to the rest of the flexible items inside the same container.
3. **flex-shrink**: specifies how much the item will shrink relative to the rest of the flexible items inside the same container.
4. **flex-basis**: when flex-direction is set to row flex basis will control the width and if the flex-direction is column it will control height.
5. **align-self**: flex-end, flex-start, center,
align the particular element in vertical direction.
6. **flex**: short-hand of flex-grow flex-shrink and flex-basis.

![](./Output/9.Flexbox.jpg)

<hr/>

## 10. Size Units<a name="size"></a>

Absolute length units are based on an actual physical unit, and are generally considered to be the same size across devices. However, depending on your screen size and quality, or settings in your browser or OS, there may be some exceptions.

Here are some common absolute length units in CSS are: px, rem, em, vh and vw

![](./Output/10.sizeunits.jpg)

<hr/>

## 11. Selectors<a name="selectors"></a>

CSS selectors define the pattern to select elements to which a set of CSS rules are then applied. Selectors can be grouped into the following categories based on the type of elements they can select.

Various types of selectors are: universal selctor, type selector, class and id selector, child combinator and so on.

![](./Output/11.Selectors.jpg)

<hr/>

## 12. Attribute and n-th child selector<a name="attribute"></a>

It is possible to style HTML elements that have specific attributes or attribute values. The [attribute] selector is used to select elements with a specified attribute.The :nth-child() CSS pseudo-class matches elements based on their position among a group of siblings. 

![](./Output/12.Attribute.jpg)

<hr/>

## 13. Pseudo class Selector<a name="pseudo"></a>

Pseudo classes are useful in defining the special state to any element or using ::before and ::after pseudo class selectors we can add add content to our web page without changing in html page.

![](./Output/13.pseudo.jpg)

<hr/>

## 14. Box shadow and text shadow<a name="shadow"></a>

Using css we can add shadow to the box as well as on text. shadow can be implement as offset and inset. Parameters on which shadow can be done are : x-axis, y-axis, blur-radius, spread-radius, and color.

![](./Output/14.boxshadow.jpg)

<hr/>

## 15. Variables in css<a name="variables"></a>

Complex websites have very large amounts of CSS, often with a lot of repeated values. For example, the same color might be used in hundreds of different places, requiring global search and replace if that color needs to change. Custom properties allow a value to be stored in one place, then referenced in multiple other places.

![](./Output/15.variables.jpg)

<hr/>

## 16. Animations and keyframes<a name="animations"></a>

 Animations make it possible to animate transitions from one CSS style configuration to another. Animations consist of two components, a style describing the CSS animation and a set of keyframes that indicate the start and end states of the animation's style, as well as possible intermediate waypoints.

![](Output/16.Animations.jpg)

<hr/>