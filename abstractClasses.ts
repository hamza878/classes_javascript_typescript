abstract class WhoAmI{

    name: string;
    
    myType(){
        console.log('i think i am a person')
    }
    abstract myName(): void;

    myDetails(): void{
        console.log(`Now i remember my name, it is ${this.myName()}`)
    }
}

class IAmHuman extends WhoAmI{
    myName(): string {
        return 'Hamza'
    }
}

let I = new IAmHuman();
I.myDetails();