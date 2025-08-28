
### Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Ans: getElementById is a DOM method which provides us the HTML element which has the given id . It is   used to find a specific element. getElementsByClassName is a method of DOM  like getElementById but it gives us an HTML collection of elements which have the given class name . we use it to find some elements specifically . on the other hand querySelector is a method which gives us the first HTML element by the given css selector . it can find elements with class , id or even tag name. querySelectorAll is same as querySelector, but it provides all elements with the selector in a nodelist.


2. How do you **create and insert a new element into the DOM**?

Ans: first i have to create an element with a tag name . then i have to add the element in a section. such as:' const banner = document.getElementById('banner'); 
          const newDiv = document.createElement('div');
          banner.appendChild(newDiv) '
           

3. What is **Event Bubbling** and how does it work?

Ans: when an event happens in an element it reaches to the document step by step.it is called event bubbling.such as first the event will go from child to it's parent and like this it will go through body to document 


4. What is **Event Delegation** in JavaScript? Why is it useful?

Ans: Event Delegation is a technique where in place of attaching event listener to childs we add only a single event listener to the parent.it is related to event bubbling.if we have so many child, we have to add event listener to each child . in this case event delegation is helpful. it saves memory and time. the code looks clear and shorter.in new child we don't have to reattach event listeners.it becomes easy to maintain the code.


5. What is the difference between **preventDefault() and stopPropagation()** methods?

Ans: preventDefault() is a method to prevent the default action of an element in a specific event .But it don't stops the propagation. And    stopPropagation() is used to stop the event from going further up or down in DOM tree while bubbling or capturing

