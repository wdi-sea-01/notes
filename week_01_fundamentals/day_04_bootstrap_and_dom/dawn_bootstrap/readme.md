# Intro to Bootstrap

A little while back, a couple wonderful folks at Twitter created a front end framework called Bootstrap to make responsive web development much easier. Bootstrap is extremely popular and knowledge of at least one CSS framework is a very valuable skill to have. Bootstrap comes with a ton of features including a responsive grid system, buttons, icons and some very nifty JavaScript plugins.

### How to include it

You can include Bootstrap multiple ways, the easiest to start is a CDN and the most practical as you build more robust applications is to use something like Bower (or a gem when we get to rails)

1. CDN (content delivery network - someone else hosts the library/framework and you access it via a URL)
2. Include the actual CSS and JS files - great for offline development
3. Bower - a package manager for your front end dependencies (written by some Twitter people also!)

### Start with a container

To make sure that all your bootstrap styles behave properly, it's always best to put your content inside an element with a class "container" (usually a div). This will create a width of 1170px, and center all your content. If you would like to use the full width of the screen use `class = "container-fluid"`

### Layout/Grid (row class, spans, offset, nesting)

The bootstrap grid is based on 12 columns that can are accessible using by placing the columns in ```<div class = "row">``` (you must place your columns in a row) and then you use the following classes for these screen sizes.

* col-xs = <768px
* col-sm = <992px
* col-md <1200px
* col-lg >1200px

Here is an example of an two column layout.

```
<div class="row">
  <div class="col-md-6">.col-md-6</div>
  <div class="col-md-6">.col-md-6</div>
</div>
```

You can see some more good examples [here](http://getbootstrap.com/css/#grid)

You can also offset and nest your columns. When you offset a column, you add a column of whitespace and push the column to the right. Here is a example

```
<div class="row">
  <div class="col-md-3 col-md-offset-3">
  	This column takes 1/4 of the width of the page and is moved to the 	right by 1/4 of the page
  </div>
</div>
```

Here is an example of nesting columns (putting one row inside another)

```
<div class="row">
  <div class="col-sm-6">
    Level 1: Column takes 1/2 the width of the page
    <div class="row">
      <div class="col-sm-4">
        Level 2: This column takes 1/3 the width of it's parent column
      </div>
      <div class="col-sm-8">
        Level 2: This column takes 2/3 the width of it's parent column
      </div>
    </div>
  </div>
</div>
```

### Buttons/positioning

To align text, use these classes.

```
<p class="text-left">Left aligned text.</p>
<p class="text-center">Center aligned text.</p>
<p class="text-right">Right aligned text.</p>
<p class="text-justify">Justified text.</p>
<p class="text-nowrap">No wrap text.</p>
```

### Icons

Bootstrap comes with a set of icons which can be accessed using the `<i></i>` tag. You can access these icons (here)[include bootstrap link]

### Typography (lead, muted, warning/error/success/info, small>cite attr -> cite title = "test")

Bootstrap also comes with some nice styles to improve the quality of your typography including:

`<p class="lead">This text will stand out in a paragraph</p>`

`<small>This line of text is meant to be treated as fine print.</small>`

`<p class="text-lowercase">Lowercased text.</p>`
`<p class="text-uppercase">Uppercased text.</p>`
`<p class="text-capitalize">Capitalized text.</p>`

### lists (unstyled class removed padding and bullets class inline to display on the same line")

You can also use Bootstrap to style your lists and remove bullet points and margin

```
<ul class="list-unstyled">
  <li>I will have no list-style and left-margin</li>
  <li>Me neither!</li>
</ul>
```

You can also style them to be inline (good for navigation)

```
<ul class="list-inline">
  <li>About</li> |
  <li>Pricing</li> |
  <li>Contact</li>
</ul>
```

### Tables

Bootstrap is really awesome at formatting tables for you and with only a couple classes you can have some spiffy looking tables. Add `class="table"` to your table tag to include this and if you would like a striped design include the class `table-striped` to your table tag. The table-striped will only add stripes to whatever is in your `tbody` tag. If you would like borders as well include `table-bordered` in your table tag.

### Buttons (link, xs, sm, lg, block, disabled)

Bootstrap comes with quite a few button default sizes and colors, to add these make sure you add a `class = btn btn-___` Bootstrap defines  these as:

```
<!-- Standard button -->
<button type="button" class="btn btn-default">Default</button>

<!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
<button type="button" class="btn btn-primary">Primary</button>

<!-- Indicates a successful or positive action -->
<button type="button" class="btn btn-success">Success</button>

<!-- Contextual button for informational alert messages -->
<button type="button" class="btn btn-info">Info</button>

<!-- Indicates caution should be taken with this action -->
<button type="button" class="btn btn-warning">Warning</button>

<!-- Indicates a dangerous or potentially negative action -->
<button type="button" class="btn btn-danger">Danger</button>

<!-- Deemphasize a button by making it look like a link while maintaining button behavior -->
<button type="button" class="btn btn-link">Link</button>
```

You can also add .btn-lg, .btn-sm, or .btn-xs for additional sizes.

### Images (img-rounded, img-responsive, img-circle)

Bootstrap helps you format images using img-rounded (rounds the corners), img-circle (makes the image a circle) and img-thumbnail (adds a border). You can also add a class of img-responsive to your image to make it scale well when the screen size changes (this sets its max-width to 100% and the height to auto)

### Forms

Bootstrap is also very helpful when you need to style your forms. All textual `<input>, <textarea>, and <select>` elements with `.form-control `are set to width: 100%; by default. Wrap labels and controls in .form-group for optimum spacing. You can create horizontal and inline forms and style each of your inputs and validations as well. Read more about form styling [here](http://getbootstrap.com/css/#forms)

### JavaScript + Bootstrap

Bootstrap can also do some nifty things for you with it's JavaScript plugins. This includes carousels, modals, popovers, dropdowns and other nice pieces of functionality that will really spruce up your app. Always make sure you understand what the code is doing before copying and pasting it. Fortunately, this is not too challenging and Bootstrap has excellent documentation. As always, if you're confused or things are breaking - google around. Bootstrap is pretty much ubiquitous and it is likely that the problems you have, other people have had (and hopefully solved) as well.
