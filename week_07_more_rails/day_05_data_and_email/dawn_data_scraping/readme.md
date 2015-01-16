#Data Scraping

Data scraping is the process of extracting data from a web site. This is used primarily when the data is not available from an existing API.

##Nokogiri

Nokogiri is a parser for html and xml. It allows us to process an html file (locally or on a remote server) and extract the data from it.

[http://www.nokogiri.org/](http://www.nokogiri.org/)

**Gem Installation**

```
gem install nokogiri
```

**In rails (Gemfile)**

```ruby
gem 'nokogiri'
```

##Loading html data (from file or http)

###In terminal

```
wget -O reddit_aww.html "http://reddit.com/r/aww"
```

Downloads data from `http://reddit.com/r/aww` and stores it in `reddit_aww.html`. The -O flag (capital o) tells it the ouput file to store the data.

What if wget doesn't work?? Just install wget with brew.

```
brew install wget
```

###In ruby

```
require 'open-uri'

#remote url
url1 = open("http://reddit.com/r/aww")

#local file (previously downloaded with wget or something)
url2 = open("reddit_aww.html")
```

In the above example the `url1` and `url2` variables would both be url object that references the data of the `/r/aww` subreddit.


##Parsing the data

Before we can parse data we need to require nokogiri at the top of the file like this

```ruby
require 'nokogiri'
```

then we can use nokogiri to process the data loaded with the open command (above).

```ruby
#load url data in to nokogiri
data = Nokogiri::HTML(url1)

#output the name of the sub reddit
puts data.css('span.pagename').text
#outputs: "aww"
```

You can also retrive a collection of items and loop through them in the same way we would loop through any array.

```ruby
data.css('p.title a.title').each do |title|
    puts title.text
end
```
