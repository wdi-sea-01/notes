require 'pry'

class Node
attr_accessor :data, :next
  def initialize data
    @data = data
    @next = nil
  end
end

class LinkedList

  attr_accessor :head, :tail, :count

  def initialize
    @head = Node.new(nil)
    @tail = Node.new(nil)
    @head.next = @tail
    @count = 0
  end

  def insert_front data
    temp = @head
    @head = Node.new(data)
    @head.next = temp
    @count+=1
  end

  def to_s
    node = @head
    s = "output:"
    while node.data
      s +=  "<#{node.data.to_s}>"
      node = node.next
    end
    s
  end


end

list = LinkedList.new
list.insert_front 5
list.insert_front 3
list.insert_front 8
p list
