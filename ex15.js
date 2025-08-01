let arr = [10,20,30,40,50]

//access 1st and 2nd element in var a and b
let a = arr[0]
let b = arr[1]

console.log(a,b)

//destructuring syntax  == for smaller array
let [x,y] = arr
console.log(x,y)

//access 1st and 3rd ele
let [p,,q] = arr
console.log(p,q)

//to access 57th ele use subscript notation arr[57]

let arr2 = [30, (x)=>{return ++x}]
let [v, incr] = arr2  //destructuring syntax
console.log("the incremented value", incr(v))
