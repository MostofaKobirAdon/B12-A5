
### Answer of Batch 12 Assignment 5 qustions:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Ans: GetElementById is a DOM method which provides us the HTML element which has the given id . It is   used to find a specific element.
GetElementsByClassName is a method of DOM  like getElementById but it gives us an HTML collection of elements which have the given class name . We use it to find some elements specifically . 
On the other hand querySelector is a method which gives us the first HTML element by the given css selector . It can find elements with class , id or even tag name.
querySelectorAll is same as querySelector, but it provides all elements with the selector in a nodelist.


2. How do you **create and insert a new element into the DOM**?

Ans: Here are the steps for creating and inserting a new element in DOM:
    First i have to create an element with a tag name .
    Then i have to add the element in a section. 
Example:  const banner = document.getElementById('banner'); 
          const newDiv = document.createElement('div');
          banner.appendChild(newDiv) 
           

3. What is **Event Bubbling** and how does it work?

Ans: When an event happens in an element it reaches to the document step by step.It is called event bubbling. 
First the event will go from child to it's parent and like this it will go through body to document 


4. What is **Event Delegation** in JavaScript? Why is it useful?

Ans: Event Delegation is a technique where in place of attaching event listener to childs we add only a single event listener to the parent.It is related to event bubbling.If we have so many child, we have to add event listener to each child . In this case event delegation is helpful. It saves memory and time. The code looks clear and shorter.In new child we don't have to reattach event listeners.It becomes easy to maintain the code.


5. What is the difference between **preventDefault() and stopPropagation()** methods?

Ans: Here are the difference between preventDefault() and stopPropagation():
    preventDefault() is a method to prevent the default action of an element in a specific event .But it don't stops the propagation. 
    stopPropagation() is used to stop the event from going further up or down in DOM tree while bubbling or capturing.

