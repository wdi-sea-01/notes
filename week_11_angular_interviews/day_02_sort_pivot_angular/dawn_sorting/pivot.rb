input = [1, 4, 6, 3, 2]

def get_pivot(input=[])
  1.upto(input.length-2) do |pivot|
    left = input[0...pivot].inject(:+)
    right = input[pivot+1..-1].inject(:+)
    return pivot if left == right
  end
  return -1
end

puts get_pivot()