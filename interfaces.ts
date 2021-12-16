interface Car{
    model: number,
    fourWheeler: boolean,
    personal?: boolean,
    drive?(now:boolean): void 
}

class Nisan implements Car{
    model: number = 2020
    fourWheeler: boolean = false;
    personal: boolean =  true;
}

let N = new Nisan()

N.model // returns 2020

class Suzuki implements Car{
    model: number = 2021
    fourWheeler: boolean = true;
    personal: boolean =  false;
    drive(now: boolean): void {
        console.log(`Are we driving it now? ${now}`)
    }   
}

let S = new Suzuki();
S.drive(true);