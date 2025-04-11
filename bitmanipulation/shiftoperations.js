/*

bitwise operators

and operator 
returns 1 if both bits are 1 else returns 0

or operator 
returns 1 if any of the 1 bits are 1 

xor operator
returns 1 if the bits are different

not operator
inverts the bits (flips 0 to 1 and vice versa)


*/

/*

bitwise left shift operations

suppose we have a number 6 binary representation is 0110

now left shift means move the bits to the left 
and replace the right ones with 0

if the binary representation of a number has 4 bits
then after shifting consider only 4 bits



mathematically we can do it 

(original value * 2^ no of shifts) mod 2^k
where k is the no of bits of original value in binary representation

Thus, while the mechanics of left shifting are similar for signed and unsigned numbers,
their interpretations and potential outcomes differ significantly.

*/

/*
right shift operator is important because it is different from the left shift
because it is different for both signed and unsigned numbers

shift the number of bits to the right as mentioned
and the most significant bits are added based on sign
eg: if the num is positive then add 0's to the left 
if the num is negative then add 1's to the left

mathematically it is represented as

result = [original value/2 ^ x]
where x is the no of shifts to make

*/
