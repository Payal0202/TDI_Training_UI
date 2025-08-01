//json object
let rectangle = {side1:12, side2:10, area: ()=>{return side1*side2}}  //properties

console.log(rectangle.side1,",",rectangle.side2)

//destructing
let {side1, side2} = rectangle  //local var
console.log(side1,"by",side2)

//destructuring by alias
let {side1:s} = rectangle
console.log(s)

let {area} = rectangle
console.log(area())

