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
        console.log(`Phi\t:${this.phi}`);
        console.log(`Diameter\t:${this.diameter}`);
        console.log(`Jari jari\t:${this.jari}`);

    }
}

class Kerucut extends Lingkaran{
    constructor(phi,d,r,t,s,p){
        super(phi,d,r)
        this.tinggi = t;
        this.sisi = s;
        this.pelukis = p;    
    }
    cetakPropert(){
        super.cetakPropert();
    }
    
    volumekerucut(){
        return 1/3*this.phi*this.jari*this.jari*this.tinggi;
    }
    luaspermukaan(){
        return (4*this.sisi)-(this.phi*this.jari*this.jari)+(this.phi*this.jari*this.pelukis);
    }
    luasselimut(){
        return this.phi*this.jari*this.pelukis;
    }
}
console.log("Kerucut");

const phi = 3.14;
console.log("Phi:"+phi);
let d = 20;
console.log("Diameter:"+d);
let r = d/2;
let t = 40;
console.log("Tinggi:"+t);
let s = 20;
console.log("Sisi Alas:"+s);
let p = 41;
console.log("Pelukis:"+p);

let obj= new Kerucut(phi,d,r,t,s,p);
obj.cetakPropert;

console.log(`Volume \t:${obj.volumekerucut()}`);
console.log(`Luas Permukaan\t:${obj.luaspermukaan()}`);
console.log(`Luas Selimut\t:${obj.luasselimut()}`);