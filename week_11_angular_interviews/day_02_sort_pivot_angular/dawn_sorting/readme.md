#Sorting Algorithms

There are diffrent types of sorting algorithms that commonly come up on Interviews.

##Bubble

1.	Look at the first two items in the list.
2.	If the first item is greater, then swap the items.
3.	Now compare the second and third items in the same way.
4.	Continue doing this until you get to the end of the list - 1.
5.	Repeat the whole process n times (where n is the length of your list).


```
def bubble_sort(list)
    list.each_index do |i|
    (list.length - i - 1).times do |job|
        if list[job] > list[job + 1]
        list[job], list[job + 1] = list[job + 1], list[job]
        end
    end
    end
end

list = [9, 0, 45, 3, 6, 7, 20, 19, 5]
p list
p bubble_sort(list)
```


##Merge
1.	Divide the unordered list in half recursively until we have sublists containing 1 element each.
2.	Repeatedly merge the sublists back together again.

```
def mergesort(list)
  return list if list.size <= 1
  mid = list.size / 2
  left  = list[0, mid]
  right = list[mid, list.size-mid]
  merge(mergesort(left), mergesort(right))
end

def merge(left, right)
  sorted = []
  until left.empty? or right.empty?
    if left.first <= right.first
      sorted << left.shift
    else
      sorted << right.shift
    end
  end
  sorted.concat(left).concat(right)
end
```


##Quick
1.	Select an element to be used as a pivot
2.	Put all elements that are less than or equal to that element to the left.
3.	Put all elements which are greater to its right.
4.	Recursively call this method on the sublists.

```
def quick_sort(list)
  sl = list.clone
  return sl if sl.size <= 1
  pivot = sl.pop
  left, right = sl.partition { |e| e < pivot }
  quick_sort(left) + [pivot] + quick_sort(right)
end

list = [9, 0, 45, 3, 6, 7, 20, 19, 5]
p list
p quick_sort(list)
```
