class Person{
    constructor(pname,dob){
        this.pname = pname
        this.dob = dob
    }
}

class Employee extends Person{
    constructor(dept,salary,pname,dob){
        super(pname,dob)
        this.dept = dept
        this.salary = salary
    }
}

let obj = new Employee("training",100000,"ppp",new Date(2020,2,3))
console.log(obj)