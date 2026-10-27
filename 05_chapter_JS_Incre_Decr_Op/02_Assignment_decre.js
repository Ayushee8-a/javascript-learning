
//Assignment 2:Decrementoperator_1
console.log("Assignment 2: Decrement Operator");
{

let a = 37;

console.log(--a + a--);

console.log(a);
}

//Assignment 3: decrement operator
console.log ("Assignment 3: Decrement Operator");
{
let a = 5;
let b = a-- - --a;
console.log(b, a);
}

//Assignment 4: increment with conditional operator
console.log("Assignment 4: increment with conditional operator");
{   
let i = 1;
let r = i++ > 1 ? i++ : ++i; 
console.log(r, i);
//condition ? value_if_true : value_if_false;
//If the condition is true, execute the expression after ?.
//- If the condition is false, execute the expression after :.
/*
Initially, i = 1.
```
i++ > 1
```
Because i++ is post-increment:
- The current value 1 is used in the comparison.
- Then i increases from 1 to 2.
- The comparison becomes 1 > 1, which is false.
Current value: i = 2.
Since the condition is false, JavaScript executes:
```
++i
```
This is pre-increment:
- Increase i from 2 to 3.
- Return the updated value 3.
- Assign that value to r.
Therefore:
- r = 3
- i = 3
Only the selected ternary branch executes; i++ after the ? is skipped.
```
3 3
```
*/

}