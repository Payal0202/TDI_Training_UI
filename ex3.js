// # COMPARISONS

// let x = 12
// let y = 12

let x = "hello"
let y = "hello"
let z = new String("hello")
let a = new String("hello")
//for ==
//both primitive compare content
//LHS or RHS is primitive and other is obj, it gets valueOf primitive -> compare content
//if both object so compare reference

// === if both type same only then compare else false

// if(x===z)  //type diff
// if(z===a)   //ref diff
// if(z.equals(a)) //error
if(z.valueOf(a))
// if(a == z)
    console.log("same")
else
    console.log("different")