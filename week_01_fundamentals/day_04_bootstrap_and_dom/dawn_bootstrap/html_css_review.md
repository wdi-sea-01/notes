## HTML Review

### What is this <!DOCTYPE html>?

Always, always make sure to put this at the top of your HTML file, otherwise you will enter quirks mode, which is no fun for anyone - read more about quirks mode here [http://en.wikipedia.org/wiki/Quirks_mode](http://en.wikipedia.org/wiki/Quirks_mode) and read a very good Stack Overflow answer as to why you need a Doctype [here](http://stackoverflow.com/questions/6076432/why-do-i-need-a-doctype-what-does-it-do)

### Meta Tags

Metadata is data (information) about data. The <meta> tag provides metadata about the HTML document. Metadata will not be displayed on the page, but will be machine parsable. Meta elements are typically used to specify page description, keywords, author of the document, last modified, and other metadata. The metadata can be used by browsers (how to display content or reload the page), search engines (keywords), or other web services.

Some common meta tags you will see are charset, content, author, description (for SEO), http-equiv (which we will learn about more when we discuss HTTP Headers)

### Divs + Spans

HTML provides for us two 'empty' containers to store whatever content we want. One is a div (block element) and the other is a span (inline element)

### Forms, Labels, Input Types and HTML5 Attributes

Forms - One of the most common ways to send data to a server is by using a form. A form has two essential attributes, action and method.

* Action - This specifies a route where you are going to. For example an action of '/test' will take you to the /test route (something you have probably configured in your server side code)

* Method - The HTTP Verb that this form will be using (HTML only knows GET and POST, but there are ways to override this default which we will see when we use Node and Rails. The default method is GET so if you are making a GET request you can leave this empty.

Label - Labels are text you place before/after inputs to tell the user what the input is for. The for attribute is for screen readers and if the ID of the input matches the ID of the for attribute then you can click on the label and have it automatically focus/check the input.

HTML5 provides a couple new attributes for inputs which improve user experience. Some of these are:

* autofocus - automatically focuses on an input (don't put this on more than one)
* required - ensures that there is text in the input field you place it before the user submits the form (you can put this on as many inputs as you'd like). If your input type is email or number, the validation will be a bit different.

### Tables

Before CSS became mainstream, websites were designed using tables. Although they are much less frequently used, building tables is still a very useful skill to know. The tags for tables are such:

* `<table></table>` - create a table
* `<tr></tr>` - create a table row
* `<th></th>` - create a table heading
* `<td></td>` - create a table cell
* `<tbody></tbody>` - create the body of the table (newer tag)
* `<thead></thead>` - create the head of the table (newer tag). No matter where this is located, whatever is in it will be the first row
* `<tfoot></tfoot>` - create the foot of the table (newer tag). No matter where this is located, whatever is in it will be the last row

# CSS Review

### 3 ways to style

1. Inline
2. `<style>`
3. Seperate css file

### IDs vs Classes

1. ID's are assigned with a #
2. Classes are assigned with a .

### The cascade (!important, inline, ID, class, element)

##### What happens if you have an ID and a class that conflict? The Cascade in CSS comes into play here. In order of importance:

1. !important (use very rarely! This is like dropping an atomic bomb on your css style)
1. Inline Style (use infrequently as you want to try to separate your CSS from HTML)
2. ID (use infrequently as well, lot's of IDs pollute your CSS)
3. Classes (your most common way of styling)
4. Element (use for broad styling like font-size, padding and margin)

Awesome article from CSS tricks on the cascade - [http://css-tricks.com/specifics-on-css-specificity/](http://css-tricks.com/specifics-on-css-specificity/)

### Centering, positioning (absolute, relative, fixed)

To center your text you can use `text-align:center` and for block elements you can set `margin: 0 auto`

When you want to move elements around the page or set their position so that they do not change you use the position property. An element's position can either be static (default), relative, absolute or fixed. Once position is applied to an element, that element has access to top, left, right and bottom properties which will move the element around. Absolutely positioned elements are in relation to their parent container (if there is none, it is in relation to the browser window just like relatively positioned elements). Fixed positioning will fix the element to the page and ensure that it never moves.


### Box Model (margin, padding, border)

Although we don't use tables anymore to design our site, we can still think of the layout of a page as a series of boxes. This thought process is the foundation of the box model, which is an essential principle in CSS that helps us create layouts and define width and height. The box model encompases width and height along with padding, border and __not__ margin. Here is a good visual to help:

![The Box Model](http://guistuff.com/css/images/boxmodel.png)

To calculate the true width/height include the padding and border

### Display (inline vs block level elements)

Different elements in CSS have different display properties. For example a span is an inline element and a div is a block level element which means that multiple spans next to each other will continue in a line like this:

- span1 span2 span3

while block elements like divs will stack on top of each other like blocks:

div1
<br>
div2
<br>
div3

This also means that properties like width and height can not be applied to the span. If you want to change the display of an element use the CSS property `display` and set it to `block`, `inline`, or `inline- block` (allows the element to line up and also have properties like width and height)

### CSS selectors

[This](http://code.tutsplus.com/tutorials/the-30-css-selectors-you-must-memorize--net-16048) is ESSENTIAL memorizing material, but here are some of the most common ways to select elements based on certain characteristics

1. Select by element - `div { }`
2. Select by class - `.className`
3. Select by ID - `#IDName`
4. Select an element inside of another element - `li a` (select all a tags inside an li)

### Pseudo Selectors

Some actions like hovering can be targeted using a pseudo selector. Some common ones are :hover, :visited, :focus, and :active. To apply these, just add them to your CSS selector. For example `.link:hover` or `li:focus`

### Media queries

Let's jump ahead for a second and think about how we can apply our knowledge of CSS for designing apps for devices of different sizes. We know how to change the width, height and size of our elements, but what happens when everything is condensed to <420px (phones) or <760px (tablets)? How do we write different styles for different width's and heights? Media queries is our answer. We define our media query and the dimensions that we want to target and then apply specific styles here. Here is the syntax:

`@media screen and (max-width:___px) and (min-width:___px) { } `