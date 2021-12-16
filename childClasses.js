class Person{
    constructor( name = 'john', email = 'john@gmail.com' ){
        this.name = name,
        this.email = email
    }

    letsPrintWord(word){
        console.log(`I print word, lets see what you typed here -> ${word}`)
    }
    letsPrintYourDetails(){
        console.log(`I print your details -> ${this.name}, ${this.email}`)
    }
}

const p = new Person();
p.letsPrintWord('Hello World')
p.letsPrintYourDetails()

// p.letsPrintYourDetails() prints nothing, lets set values for name and email

p.name = 'Hamza';
p.email = 'hamza@gmail.com'

p.letsPrintYourDetails()

// Now we have a successful print on the console log


///////////////////////////////////////////////////////////////////////

//Lets declare some child class that extends person class

class Teacher extends Person{
    constructor(age){
        super()
        this.name = 'Teacher'
        this.email = 'teacher@gmail.com'
        this.age = 30
    }

    teach(){
        console.log(`I teach and and here are my details ${this.name}, ${this.email} and ${this.age}`)
    }
}

let t1 = new Teacher();
t1.letsPrintWord('Print from child class')
// t1.name = 'Hamza';
// t1.email = 'hamza@gmail.com'
t1.letsPrintYourDetails()

// Lets see if parent if able to call the teach method from child

//p.teach();

// p.teach() is not callable but t1.teach() is

t1.teach();
