//pass a fun to another fun
//sync callbacks
function Greeting(f1){
    console.log("******")
    f1()
    console.log("****")
}

// Greeting(10)
Greeting(() => {console.log("Good Day")})
Greeting(function(){console.log("Good Day")})

function f1(){
    console.log("good day")
}

Greeting(f1)