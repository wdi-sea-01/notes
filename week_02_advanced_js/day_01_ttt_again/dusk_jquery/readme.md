# Intro to jQuery
## Dom Manipulation

| Objectives  |
| :---- |
| .. select elements on the page using jQuery selectors |
| .. add events to element on the page using jquery |
| .. students will apply their knowledge of jquery to build examples |




### Intro

Before we begin with jQuery I want everyone to brainstorm how they would do the following:

* `append` new div's with some internal content to the page.
* `handle` forms where users want to dyanmically add elements to the page.
* `listen` for events on a collection similar of divs. (You might think about a series of comments that each have a like button)

[for_example](http://jsbin.com/jepoz/2/edit)

### Selectors in jQuery

In jQuery selecting elements is very similar to `querySelectorAll` that we covered with the js DOM api. To get a DOM element we use `$('selector')` to fetch the element from the DOM.

Let's do an `#id` example,

```
  <div id="myDiv">
    Hello World!!
  </div>

  <script>
    $("#myDiv").css("color", "blue")
  </script>
```

Or by css `.myClass`

```
  <div class="myClass">
    Hello World!!
  </div>

  <div class="myClass">
    Hello World!!
  </div>

  <div class="myClass">
    Hello World!!
  </div>
  <script>
    $(".myClass").css("color", "blue")
  </script>
```

With  a random color

```

  <div class="myClass">
    Hello World!!
  </div>

  <div class="myClass">
    Hello World!!
  </div>

  <div class="myClass">
    Hello World!!
  </div>

  <script>
      var randVal = function(){
        return Math.floor(Math.random()*255);
      };

      var randColor = function(){
        var red = randVal();
        var green = randVal();
        var blue = randVal();

        return "rgb("+red +","+green+","+blue+")";
      }
    $(".myClass").css("color", randColor())
  </script>
  ```

### Appending elements
Moving elements

[`example_4`](http://jsbin.com/owoLELUf/1/edit)

```
   <style>
    #funList {
      border: dashed 1px blue;
      padding: 10px;
    }

  </style>

  <div id="funList">

        <div id="funItem">
            Fun Stuff
        </div>
    </div>

    <script>
      var sampleData = {text: "Brooklyn Austin YOLO drinking vinegar authentic, fixie trust fund skateboard leggings fap mustache. Tote bag tattooed food truck DIY. Art party bespoke selvage narwhal four loko. High Life twee organic polaroid raw denim, Truffaut cred irony Pitchfork retro put a bird on it. Bushwick mlkshk yr viral Odd Future pour-over. Sartorial lomo organic whatever Portland. Disrupt deep v chia pug actually selfies, Pinterest mlkshk meh roof party."}

      var $sampleDiv = $("<div> " + sampleData["text"] + "</div>");

      $("#funList").append($sampleDiv);

    </script>
```

[`example_5`](http://jsbin.com/USuqEne/1/edit)

```
  <style>
    #funList {
      border: dashed 1px blue;
      padding: 10px;
    }

    #crazyList {
      border: dashed 1px red;
      padding: 10px;
    }
  </style>

  <div id="funList">

        <div id="funItem">
            Fun Stuff
        </div>
    </div>

    <div id="crazyList">

    </div>

    <script>
      // Select `#funItem`
       var $funItem = $("#funItem");
       // Change color of `$funItem`
       $funItem.css("color", "red");

       //Move the $moveItem
       $("#crazyList").append($funItem);
    </script>

```

### Exercises:

* Hidden forms fields
  * Create a div that says click me, and when clicked updates a count variable called `numberOfClicks`
  * Create a form that has a hidden input field for `numberOfClicks`
  * on form submit `alert` the `numberOfClicks`
* Use jQuery to design a form that allows you to dynamically update form fields:
  * Make a form for a new `event` that accepts a `event[name]` and `event[organizer]`.
  * Add an `invite friends` button that appends an `input` field to the form and that expect an `email`.
  * Add an input field for `event[invites][...]` where `[...]` should hold the current count of `invites`
