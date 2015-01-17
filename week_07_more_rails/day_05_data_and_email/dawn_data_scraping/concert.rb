require 'nokogiri'
require 'open-uri'
require 'awesome_print'

url = open("index.html")
# url = open("http://seattlemusic.calendar.fm/")

data = Nokogiri::HTML(url)
final_data = []

# Parsing the object
data.css("tbody tr").each do |row|

  row_item =  row.css("td").map do |item|
    item.text
  end

  final_data << row_item

end

# ap final_data

# Getting it ready for the db

mapped_data = final_data.map do |r|
  { day: r[0],
    date:r[1],
    artist:r[2],
    venue:r[3],
    price:r[4],
    sale:r[5],
    link:r[6],
    age: r[7],
    region: r[8]
  }
end

ap mapped_data
