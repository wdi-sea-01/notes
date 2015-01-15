#Add tags to bog (many to many)

Today we're add tags to the bog app using a many to many relationship.

##What we need

* Models
    * Tag
    * Creature
    * Creatures_Tags (join table
* Association
    * Tag <-> creatures_tags <-> Creature
    * creature `has_and_belongs_to_many` tags
    * tag `has_and_belongs_to_many` creatures
* Views
    * creatures#edit - add/remove tags checkboxes
    * creatures#new - add/remove tags checkboxes
    * creatures#tag
        * /creatures/tag/:tag
        * list all creatures with a specific tag



##Generating models
 
**Creatures**

`rails g model creature name desc`
 
**Tags**

`rails g model tag name`

**Creatures_Tags**

`rags g model creatures_tags creature:references tag:references`

##Setting up associations

When you do `:references` it automatically creates the `belongs_to` relations on the join table (creatures_tags), but we need to manually add the `has_and_belongs_to_many` to the tag and creature model.

**models/creature.rb**

`has_and_belongs_to_many :tags`

**models/tag.rb**

`has_and_belongs_to_many :creatures`

##Adding tags

assume: `c = Creature.first` (or any creature)

**c.tags << tag**

Adds a tag to a creature. `tag` could be any Tag. For example, `tag = Tag.first` or `tag = Tag.find_by_id(2)`

##Removing tags

assume: `c = Creature.first` (or any creature)

**c.tags.clear**

Removes all tags from creature
(leaves in tag table)

**c.tags.delete(tag)**

Removes a tag from a creature (leaves in tag table). `tag` could be any Tag. For example, `tag = Tag.first` or `tag = Tag.find_by_id(2)`

**c.tags.first.delete**

Calling delete on an individual tag removes it from TAG table leaves in creature association DANGER - DO NOT USE.

**c.tags.first.destroy**

Removes tag from Tag table AND creature association.



##Referencing and listing

Because creature and tag reference eachother with `has_and_belongs_to_many` they can reference eachother.

**Basic Examples**

```ruby
#lists all tags
Tag.all


#lists all creatures
Creature.all

#gets first creature in the database
Creature.first

#lists all tags of first creature
Creature.first.tags

#lists all creatures of first tag
Tag.first.creatures
```

**Advanced Examples / chaining**

```ruby

#All creatures of the first tag of the first creature
Creature.first.tags.first.creatures


```



