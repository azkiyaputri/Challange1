class Lingkaran{
    constructor(phi,d,r){
        this.phi = phi;
        this.diameter = d;
        this .jari = r;
    }
    jarijari(){
        return this.diameter/2;
    }
    luas(){
        return this.phi*this.jari*this.jari;
    }
    keliling(){
        return 2*this.phi*this.jari;
    }

    cetakPropert(){
        console.log(`phi\t:${this.phi}`);
        console.log(`Diameter\t:${this.diameter}`);
        console.log(`Jari jari\t:${this.jari}`);

    }
}

class Bola extends Lingkaran{
    constructor(phi,d,r){
        super(phi,d,r);
    }

    cetakPropert(){
        super.cetakPropert();
    }   
    volumebola(){
        return 4/3*this.phi*this.jari*this.jari*this.jari;
    }
    luaspermukaan(){
        return 4*this.phi*this.jari*this.jari;
    } 
}
console.log("Bola");

const phi = 3.14;
console.log("Phi:"+phi);
let d = 30;
console.log("Diameter:"+d);
let r = d/2;

let obj=new Bola(phi,d,r);
obj.cetakPropert;

console.log(`Jari Jari\t:${obj.jarijari()}`);
console.log(`Volume \t:${obj.volumebola()}`);
console.log(`Luas Permukaan\t:${obj.luaspermukaan()}`);