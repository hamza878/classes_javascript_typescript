export class Person{
    constructor( name = '', email = '' ){
        this.name = name,
        this.email = email
    }

    letsPrintWord(word){
        console.log(`I print word, lets see what you typed here -> ${word}`)
    }
    letsPrintYourDetails(){
        console.log(`I your details -> ${this.name}, ${this.email}`)
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