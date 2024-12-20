/*
Q1.) Write the code, one line for each action:
        Create an empty object user.
        Add the property name with the value John.
        Add the property surname with the value Smith.
        Change the value of the name to Pete.
        Remove the property name from the object.
*/
const user = {
    name: 'John',
    surname: 'Smith'
}
user.name = 'Pete'
delete user.name

console.log(user);

/**
 * Q2.) Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
        Should work like that:
        let schedule = {};
        alert( isEmpty(schedule) ); // true
        schedule["8:30"] = "get up";
        alert( isEmpty(schedule) ); // false

 */
function isEmpty(obj) {
    for(let key in obj){
        return false
    }
}
let schedule = {}
console.log(isEmpty(schedule));
schedule["8:30"] = "get up"
console.log(isEmpty(schedule));

/*
Q3.) We have an object storing salaries of our team:
        let salaries = {
        John: 100,
        Ann: 160,
        Pete: 130
        }
        Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
        If salaries is empty, then the result must be 0.

*/
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

function checkSalary(salary) {
    if(salary === 0){
        return 0
    }else{
        let sum = 0
        for(let key in salary){
            sum += salary[key]
        }
        return sum
    }
}
console.log(checkSalary(salaries));

/*
Q4.) Create an object calculator with three methods:
        read() prompts for two values and saves them as object properties with names a and b respectively.
        sum() returns the sum of saved values.
        mul() multiplies saved values and returns the result
*/

let calculator = {
  // ... your code ...
    a: 0,
    b: 0,
    read() {
        this.a = +prompt("Enter the first number:", 0);
        this.b = +prompt("Enter the second number:", 0);
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    }
};


calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
