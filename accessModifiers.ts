class Person{
    name: string;
    email: string;
    bankBalance: number;
    creditCardNo: number;
    
    constructor( name = 'john', email = 'john@gmail.com', bankBalance = 20000, creditCardNo = 424242424242424242 ){
        this.name = name,
        this.email = email,
        this.bankBalance = bankBalance,
        this.creditCardNo = creditCardNo
    }

    letsPrintWord(word: string): void {
        console.log(`I print word, lets see what you typed here -> ${word}`)
    }
    letsPrintYourDetails(): void {
        console.log(`I print your details -> ${this.name}, ${this.email}`)
    }
    protected letsPrintMyBankBalance(): void {
        console.log(`I print your bank balance -> ${this.bankBalance}`)
    }
    private letsPrintMyCreditCardNumber(): void {
        console.log(`I print your credit card number -> ${this.creditCardNo}`)
    }
    protected onlyMyChildGetsMyCreditCard(): void{
        this.letsPrintMyCreditCardNumber()
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
    age: number;

    constructor(age = 30){
        super()
        this.name = 'Teacher'
        this.email = 'teacher@gmail.com'
        this.age = age
    }

    teach(){
        console.log(`I teach and and here are my details ${this.name}, ${this.email} and ${this.age}`)
    }

    getMyBankingInfo(){
        this.letsPrintMyBankBalance();
    }
    getMyParentsCreditCard(){
        this.onlyMyChildGetsMyCreditCard();
    }
}

let t1 = new Teacher();
t1.letsPrintWord('Print from child class')
// t1.name = 'Hamza';
// t1.email = 'hamza@gmail.com'
t1.letsPrintYourDetails()
t1.getMyBankingInfo()
t1.getMyParentsCreditCard()

// Lets see if parent if able to call the teach method from child

//p.teach();

// p.teach() is not callable but t1.teach() is

t1.teach();
