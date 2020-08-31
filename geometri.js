let r = 3;
let a = 4;
let n = 10;
let tempp;
let temp = 0;

for(let i = 1; i <= n; i++){
    tempp = a * Math.pow(r,i-1);
    console.log(tempp);
    temp += tempp;
}
console.log("Total : "+temp);