## What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
getElementById: Select an element by ID and return single element
getElementsByClassName: Selects all elements with that class and return HTML collections
querySelector: Selects the first element that matches a CSS selector return single element
querySelectorAl: Selects all elements that match a CSS selector return NodeList


## How do you create and insert a new element into the DOM?
Create the element: document.createElement("tagName") ex: const Div = document.createElement("div");
Insert into the DOM: .appendChild()   ex: callContainer.appendChild(Div); 


## What is Event Bubbling and how does it work?
Event Bubbling refers to when an event starts from the target element and bubbles up through its parent elements until it reaches the document.
let clicking a button inside a <div> inside <body> → the click first triggers on <button>, then <div>, then <body>, then document.It works this way

## What is Event Delegation in JavaScript? Why is it useful?
Event Delegation refers instead of attaching event listeners to every child element,I can attach a single listener to a parent and use event bubbling to handle events for its children.
It is useful because saves memory and makes code simpler.

## What is the difference between preventDefault() and stopPropagation() methods?
preventDefault(): Prevents the default browser action
stopPropagation(): Stops the event from bubbling up to parent elements
