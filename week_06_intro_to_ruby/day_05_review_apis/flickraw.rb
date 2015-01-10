require 'flickraw'
require 'awesome_print'

FlickRaw.api_key=ENV["FLICKR_KEY"]
FlickRaw.shared_secret=ENV["FLICKR_SECRET"]

list = flickr.photos.search :text => ARGV.first, :sort => "relevance"

# ap list

results = list.map do |photo|
  FlickRaw.url_b(photo)
  # "https://farm#{photo.farm}.staticflickr.com/#{photo.server}/#{photo.id}_#{photo.secret}_b.jpg"
end

ap results