require 'rest-client'

search_term='snail'

response = RestClient.get 'http://www.reddit.com/search.json', {:params => {:q => search_term, :limit => 10}}

if(response.code==200)
    response_object = JSON.parse(response)
    reddit_posts = response_object['data']['children']
    reddit_posts.each do |post|
        puts post['data']['title']
        puts "http://www.reddit.com#{post['data']['permalink']}"
    end
else
    puts "an error happened"
    puts response
    puts response.code
end