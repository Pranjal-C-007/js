function addTwoNumbers (number1, number2)//number1 and 2 are parameters
{
  //  console.log(number1 + number2);
}

addTwoNumbers(3, 4)//3,4 are arguments

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    //Generally, a return value is used where the function is an intermediate step in a calculation of some kind.
    //  You  want to get to a final result, which involves some values that need to be calculated by a function.
    //  After the function calculates the value, it can return the result so it can be stored in a variable; 
    // and you can use this variable in the next stage of the calculation.
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);

function loginUserMessage(username){
    if(!username)//username === undefined
        {
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`//this wont execute cause of that up return 
}

//console.log(loginUserMessage(""))

//func array
function CalculateCartPrice(val1, val2, ...num1){
    return num1
}

//console.log(CalculateCartPrice(1000, 220, 333, 400))
//obj n func 
const user = {
    username: "Pranjal",
    price: 99
}

function handleObject(anyobject){
    //console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user)
handleObject({
    username: "sam",
    price: 666
})

const myNewArray = [200, 400, 330 ,300]

function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 330 ,300]))