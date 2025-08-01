class Book{
    // bname
    // author
    static publisher

    // constructor(){
    //     bname = "learn java"
    //     author = "aaa"
    // }

    constructor(n,a,cost){
        this.bname=n
        this.author=a
        this.cost = cost
    }

    display(){
        console.log(this.bname+","+this.author+","+this.cost)
    }

    get cost(){
        return this._cost
    }

    set cost(value){
        if(typeof(value)=="number" && value>0)
            this._cost = value
        else
            console.log("invalid cost")
    }
}

let x = new Book()
x.bname = "learning js"
x.author = " xyz"
Book.publisher = "p1"
x.cost = 300
console.log(x)

let y = new Book("learning java","abc","100")
console.log(y)

