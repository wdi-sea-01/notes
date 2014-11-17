# WDI Seattle Notes

## Distributed Lesson Materials


###  Topical Index

The following will be a topical organization of the lesson notes.

### Contributing

Below is an outline of how to add notes to this repository, navigate and develop the folder structure, as well as notes on maintaining the *Topical Index* above.


* Adding Notes
  * Note: Always Update the **Topical Index**
* Folder **Prefix** and **Suffix**
* Sample Structure
* Topical Index
* ignored files

#### Adding notes

For each lesson the notes (if any) will be added to a `weekly_folder` in the repo in a subfolder related to that day's lesson materials separated into `dawn` or `dusk` day times.

A lesson on `Monday` in `week 2` in the `morning` on  **intro to css** would go in a `week_02_web_fundamentals` folder for `Week 2` under something like the following:

```
week_02_web_fundamentals/
  day_1_intro_js_css/
    dawn_intro_css/
      ...
```

Each `dawn` or `dusk` folder should have a markdown file containing relevant notes,

```
week_02/
  day_1_intro_js_css/
    dawn_intro_css/
      ReadMe.md

```
The **main** lesson notes should be added to the repo as a `ReadMe` **markdown** file, so GitHub can render something for that folder.

#### IMPORTANT NOTE

>Each lesson added to the repo should update the `ReadMe` topical index, e.g. using the lesson above one would find the most relevant  **Topical Bullet** and add a sub-bullet for the new `sub-topic`.

=====

#### Folder Prefix and Suffix Explanation

Each folder in the repo has a *naming convention* involving a *date or time **prefix*** and a *theme_of_the_datetime **suffix***,

```
 time_or_date_prefix + the_overall_theme
```

For a **week** we might have the following:

* Week 1 has a `week_1` **prefix** plus its *weekly theme* `programming_and_web_fundamentals` **suffix**.

  ```
  Week 1 => week_1_programming_and_web_fundamentals
  ```
* Day 1 in Week 1 would also have a suffix theme, e.g. *a concatenation of the lesson topics from the day at the very least.*

  ```
  day_1_intro_js_css/
  ```
* Dawn in Day 1 above would just have suffix that *is the **topic of the lesson***.

  ```
  dawn_intro_css/
  ```




#### Sample Structure

```
week_00_prep_work/
  day_1_workflow_and_js/
    dawn_terminal_and_git/
        terminal_stuff.png
        git_stuff.png
        ReadMe.md
    dusk_intro_js/
        cool_js.png
        ReadMe.md
  day_2_more_js/
    dawn_conditionals/
      ...
    dusk_advanced_control_flow/
      ...
  ...
week_01_intro_web/
  day_1_the_web_and_html/
    ...
  day_2_js_fundamentals/
    ...
  ...
...

```

#### Topical Index
Links in the **Topical Index** are relative to the repo, so if one were to add `intro_git` as a link under the `prep_work` bullet it would be added as follows:

```
* prep_work
  * [intro_git](/00/day_1/dawn/intro_git)
```

### Ignored Files

If you're working on material you don't want commited then add the `working` prefix.