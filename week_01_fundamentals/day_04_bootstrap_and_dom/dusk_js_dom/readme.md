
#Intro to DOM and Events
| Objectives |
| :---- |
| Students should be able to select elements from the DOM using selectors |
| Students should be able to add events to elements in the DOM |
| Students should be able to manage scope and control logic with the page. |




##DOM Manipulation with JavaScript

**Review:** What is the DOM?

Go to Developer Console. Look at DOM in *Elements*, then look at the DOM in *Console*. The object 'document' represents the DOM in JavaScript. We can change the DOM, i.e. the page, by changing the **document object**.

Google "DOM document api", pick the MDN documentation. Inspect a few properties, for example:

  document.URL
  document.head
  document.links (what does it return?)

How to change the DOM? Select elements and manipulate them.

**Select by tag id:**

  var greeting_div = document.getElementById("greeting");

What's the greeting?

  greeting_div.innerHTML

Change it:

  greeting_div.innerHTML = "Wow, something changed."

Change styling:

  greeting_div.style.backgroundColor = "yellow"
  greeting_div.style.color = "red"
  greeting_div.style.height = "100px"
  etc.


Properties can be a getter and setter. What does this mean?

**Select by class**

  var content_div = document.getElementsByClassName("content");

Change it:

  content_div.innerHTML = "I can change,too";



**Select by tag name**

  all_li_elems = document.getElementsByTagName("li")

**Preferred: select using CSS selectors**

Get elements by tag name or class is very unspecific. You can go after specific CSS selectors, just like you would in stylesheets:

  document.querySelectorAll("li")
  document.querySelectorAll("li.selected")
  document.querySelectorAll("div#essentials > ul > li")


**Accessing and changing element attributes**

  document.querySelector("img").getAttribute("src")
  document.querySelector("img").setAttribute("src","./images/beer.jpeg")

##Events

Now that we know how to select DOM elements, we can attach events to them:

- Common Events:
  - change
  - click
  - mouseover
  - mouseout
  - keydown
  - keyup

* [List of Event Types](https://developer.mozilla.org/en-US/docs/Web/Events)

#####"Shortcut" Method

```
document.getElementById("myDiv").onchange = function() { };

document.getElementById("myDiv").onclick = function() { };

document.getElementById("myDiv").onmouseover = function() { };
```

Let's attach a click handler to he image element. Try in console first.

#####addEventListener

What would happen if we had two different parts of our program that wanted to modify to do something when an `click` happened this can't happend with the `onclick` syntax. Hence we use the `addEventListener` syntax from here on out to allow this.

Also this is the style you should use often.

```
document.getElementById("myDiv").addEventListener("click", function() {
  //Your code here
}
```

Events can only be attached to specific elements. Therefore, when you return a collection such as the result of `document.querySelectorAll` you CANNOT simply do this:

```
document.querySelectorAll(".li").addEventListener("click", function() {
  console.log("Click worked");
}
```

