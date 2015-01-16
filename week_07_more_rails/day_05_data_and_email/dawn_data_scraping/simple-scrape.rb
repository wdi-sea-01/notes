#needed for open() to load a url
require 'open-uri'

#needed for parsing data
require 'nokogiri'


#load data from reddit
url1 = open("http://www.reddit.com/r/aww")

#load data into Noko giri
data = Nokogiri::HTML(url1)

#output the title of the sub-reddit
puts ("-"*40)
puts "Posts on sub-reddit: "+data.css('span.pagename').text
puts ("-"*40)

#list all of the posts
data.css('p.title a.title').each do |title|
    puts title.text
end


