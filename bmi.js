let berat = 90
let tinggi = 1.7

let hasil = berat / (tinggi*tinggi);
console.log("Hasil : " + hasil);

if(hasil < 18.5){
    console.log("Kategori : Kekurangan Berat Badan");
}else if(hasil >= 18.5 && hasil <=24.9){
    console.log("Kategori : Normal(Ideal)");
}else if(hasil >= 25 && hasil <=29.9){
    console.log("Kategori : Kelebihan Berat Badan");
}else{
    console.log("Kategori : Obesitas");
}