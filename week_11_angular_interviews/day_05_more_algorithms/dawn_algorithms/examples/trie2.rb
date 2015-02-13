class WordTreeNode

  attr_accessor :value, :children, :complete

  def initialize value="", complete=false
    @value = value
    @children = []
    @complete = complete
  end

  def learn word

    stem = word[0 .. @value.length]
    complete = stem == word

    node = @children.find {|child| child.value ==stem}

    unless node
      node = WordTreeNode.new(stem, complete)
      @children.push node
    end

    # node.complete ||= true if node.complete

    node.learn(word) unless complete


  end

  def words
    words = self.complete ? [self] : []

    @children.reduce(words) do |words, subtree|
      words += subtree.words
    end
  end

  def completions_for str

    completions = []
    stem = str[0..@value.length]

    if stem==str && stem.length == @value.length
      completions += words()
    else
      subtree = @children.find{|child| child.value == stem}
      completions += subtree.completions_for(str) if subtree
    end

  completions
  end
end


tree = WordTreeNode.new
tree.learn 'apple'
tree.learn 'ape'
tree.learn 'boy'
tree.learn 'business'
tree.learn 'butter'
tree.learn 'baking'
# p tree.words.map(&:value)
# puts tree.words

# p tree.completions_for('a').map(&:value)
p tree.completions_for('a').map(&:value)