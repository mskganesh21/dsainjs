/*
data structure is used to store and organise data
    DOM - tree data structure
    browser back and forward - stack data structure
    os job scheduling - queue data structure
*/

/*
built in data structures in js
arrays
Objects
sets 
map

custom data structures

linked list
tree
graph

*/

/*

objects 
key - value pairs


*/


/*
SET data structure
values must be unique
can contain a mix of different data types
sets are dynamically sized.
they are iterable
insertion order is not maintained
sets cannot have duplicates


*/

const set = new Set([1,2,3]);
set.add(4);
const result = set.has(4);
console.log(result);
set.delete(3);
console.log(set.size);

for(const item of set){
  console.log(item);
}

/*
MAP data structure

unordered collection of key-value pairs
both keys and values can be of any data type
can be iterated
can only store data and not methods

*/

const map = new Map([['a', 1], ['b', 2]]);

map.set('c', 3);
console.log(map.has('c'));

for(const [key,value] of map){
  console.log(`${key}: ${value}`)
}
