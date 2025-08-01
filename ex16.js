//spread operator syntax => used to create copy 

let obj = {pname:"pen", cost:10, brand:"dom"}

// let obj2 = obj  //one copy of object and two ref

// let obj2 = {obj}  //create an object that has property named obj
let obj2 = {...obj} //create copy using spread operator
obj2.cost = 30
obj.cost = 20

console.log("obj= ", obj)
console.log("obj2= ", obj2)


//copy of array using spread operator
let arr = [10,20,30]
let copy =[...arr]

arr[0] = Math.pow(10,4)
console.log(arr)
console.log(copy)


//not creating deep copy
let tri1 = {base:10, height:10}
let tri2 = {base:100, height:20}

let triangle = [tri1, tri2]

//create copy of arr and 
//change base of traingle to 150 and 
//check base of 1st ele triangles and copy arr

// let copyt = [...triangle]  //create copy of arr but not copy of object in arr

//hence to create deep copy of arr
let copyt = [...triangle]
copyt[0] = {...triangle[0]}
copyt[1] = {...triangle[1]}
//if so many ele put it in loop

triangle[0].base = 150

console.log(triangle[0])
console.log(copyt[0])