function hello(){
    console.log("hello")
}

let d = hello
let e = hello()
console.log(e)
console.log(typeof(d)) //function
d()

d = () => {console.log("hey this is lambda")}
console.log(typeof(d))

d = function(){
    console.log("hey this is anonymous function")
}
