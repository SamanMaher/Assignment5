
// QUESTION-1
//  Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.

function ingredientsList(num1: string, num2: string, num3: string, num4: string, num5: string, num6: string) {


    let result: string[] = [num1, num2, num3, num4, num5, num6]
    result.splice(1, 2, "Vinegar")
    return result

}
var rollNrResult: string[] = ingredientsList("SALT", "Corn Syrup", "Sugar", "Bread", "Chicken", "Cloves")
console.log(rollNrResult);

// QUESTION-2
// Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation

let shoppingCart: string[] = ["3 Bread Packet ", "1kg Salt", "2 kg Sugar"];

// Function for Adding items in ShoppingCart
function addItems(itemIndex: number, itemRemove: number, itemName: string) {
    shoppingCart.splice(0, 1, itemName);
    return shoppingCart;
}
console.log(addItems(0, 1, '8 kg Meat'));

// Question-3
// Write a program that uses a while loop to print the first 25 integers.

let value: number = 1;

while (value <= 25) {
    console.log(value);
    value += 1;

}

// QUESTION-4
// Write a program that uses a while loop to print the first 10 even numbers.

let val: number = 1;
while (val <= 35) {
    if (val % 2 == 0) {
        console.log(val);


    }
val +=1;
}

// QUESTION-5
// Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.

function value2(nu:number):number {
    let result:number=1;
    while (nu>0){
        result*=nu;
        nu-=1  
        
    }
    return result;
} 
console.log(value2(5));