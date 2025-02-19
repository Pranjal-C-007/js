// singleton
//object.create

// object literals
const sym = Symbol("key1")
const JsUser = {
    name: "pranjal",
    [sym]: "key1",
    age: 18,
    location: "Mumbai",
    email: "abc@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//console.log(JsUser.email)
//console.log(JsUser["email"])
//console.log(JsUser[sym])

JsUser.email = "xyz@gmail.com"
Object.freeze(JsUser)
JsUser.email = "xyzygy@gmaiggghl.com"
//console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());