"use strict";

let student={
    name:'Nicolas',
    favoriteFood:"Salad",
    city:"Paris",
}
let values=Object.values(student);
console.log(values);
let count=values.reduce((acc,value)=>acc+value.length,0)
console.log(count);

if(count%2==0){ // si le nombre est pair
    console.log("pair"); // afficher dans la console "pair"
}else{
    console.log("impair"); // sinon afficher "impair"
}
