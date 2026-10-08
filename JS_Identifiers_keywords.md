# **JavaScript Keywords & Identifiers**

## **1. What are they?**

- **Keyword** = a word JavaScript already owns. You cannot use it as
  your own name.

- **Identifier** = a name YOU choose for a variable, function, class,
  etc.

let age = 20; // let = keyword, age = identifierfunction greet() {} //
function = keyword, greet = identifier

## **2. Rules for Identifiers**

### **Rule 1: Only letters, digits, \_ and \$ are allowed**

let user_name = \"A\"; // validlet \$price = 10; // validlet \_count =
5; // validlet user@mail = \"A\"; // invalid

### **Rule 2: Cannot start with a digit**

let name1 = \"A\"; // validlet 1name = \"A\"; // invalid

### **Rule 3: No spaces**

let userName = \"A\"; // validlet user name = \"A\"; // invalid

### **Rule 4: No hyphens or special symbols (- @ \# % ! & \* + .)**

let first_name = \"A\"; // validlet first-name = \"A\"; // invalid (JS
reads it as first minus name)

### **Rule 5: Cannot be a keyword**

let className = \"A\"; // validlet let = 5; // invalidlet if = 10; //
invalidlet class = \"A\"; // invalid

### **Rule 6: Case-sensitive**

let age = 20;let Age = 30;let AGE = 40; // three different variables

### **Rule 7: No length limit (keep names meaningful)**

let totalPriceOfAllItems = 500; // valid, and clearlet x = 500; //
valid, but unclear

### **Rule 8: Same name cannot be declared twice with let or const in the same scope**

let a = 1;let a = 2; // SyntaxError: Identifier \'a\' has already been
declared

## **3. Rules for Keywords**

### **Rule 1: Reserved, so they cannot be variable or function names**

function for() {} // invalidlet return = 5; // invalid

### **Rule 2: Lowercase and case-sensitive**

let If = 5; // legal (not the keyword), but confusinglet IF = 5; //
legal, but avoid it

### **Rule 3: Can be used as object property names (avoid it)**

const obj = { class: \"A\", if: 5 };console.log(obj.class); // A

### **Rule 4: undefined, NaN, Infinity are not keywords, but never use them as names**

console.log(typeof undefined); // undefined (it is a value, not a
keyword)

### **Rule 5: Never reuse built-in names like console**

let console = \"hi\"; // legal, but breaks console.log

## **4. Naming Style (good habits)**

- camelCase for variables and functions

- PascalCase for classes

- UPPER_SNAKE_CASE for fixed constants

let userName = \"Sam\"; // camelCasefunction getTotal() {} //
camelCaseclass UserAccount {} // PascalCaseconst MAX_SIZE = 100; //
UPPER_SNAKE_CASE

## **5. Common Keywords**

- **Declaring:** var, let, const, function, class

- **Decisions:** if, else, switch, case, default

- **Loops:** for, while, do, break, continue

- **Functions:** return, async, await

- **Errors:** try, catch, finally, throw

- **Objects:** new, this, delete, typeof, instanceof, in

- **Modules:** import, export

- **Values:** true, false, null

const isAdult = true; // const, true = keywordsif (isAdult) { // if =
keyword

console.log(\"Adult\");} else { // else = keyword

console.log(\"Minor\");}

## **6. Quick Check: valid or invalid?**

- myName - valid

- 2ndPlace - invalid (starts with a digit)

- total_price - valid

- first-name - invalid (hyphen)

- \$amount - valid

- for - invalid (keyword)

- Class - valid (capital C is not the keyword class)

- user name - invalid (space)

## **7. Interview Questions (IQ)**

- **What is an identifier?** A name you choose for a variable, function,
  class, etc.

- **What is a keyword?** A reserved word with a built-in meaning in
  JavaScript.

- **Can an identifier start with a digit?** No.

- **Which special characters are allowed?** Only \_ and \$.

- **Is JavaScript case-sensitive?** Yes. age, Age, AGE are different.

- **Can a keyword be an identifier?** No.

- **Can the same name be declared twice with let?** No, in the same
  scope.

**8. One-Line Summary**

Keywords belong to JavaScript. Identifiers belong to you. Identifiers
use letters, digits, \_ and \$, never start with a digit, have no spaces
or symbols, are case-sensitive, and cannot be a keyword.
