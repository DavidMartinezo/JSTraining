/**
 * Working with arrays
 * @link https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays
 */



let item = "flashlight";

const collection = ["Piggy", item, 5, true];

let last= collection.pop();

console.log(collection);
console.log("last: " + last);
console.log(collection);
collection.push(last);
console.log(collection);
collection[collection.length]=5;
console.log(typeof collection.pop());
//collection.shift()
//collection.unshift()

const fruits = ["Banana","Pine Apple","Apple","Orange","Mango","Kiwi","MELON" ]
console.log("indexOf " + fruits.indexOf("MELON"));
console.log(fruits);

fruits.forEach(function (item){
    item= `<li>${fruits.indexOf(item)+ "-" + item}</li>`
    console.log(item);
});
fruits.push("Mandarina");
//Finding items in an array
console.log("la posicion " + fruits.indexOf("Mango") + " es: ");
console.log(fruits[fruits.indexOf("Mango")]);

// Accessing every item
for( const  fruit of fruits){
    console.log(`<li>${fruit}</li>`);
    console.log("longitud " + fruit.length);
}

function isLong(fruit){
    return fruit=="Mango";
}

const longer = fruits.filter(isLong);
console.log(longer);
//document.getElementById("main").innerHTML(item);



// To remove the first item from an array, use shift():
let vshift=fruits.shift()
console.log(fruits);


// To remove the last item from the array, use pop().
//let vpop=fruits.pop()
fruits.unshift(fruits.pop());
console.log(fruits);

//splice() 
//he first argument says where to start removing items, and the second argument says how many items should be removed. So you can remove more than one item:

let vsplice=fruits.splice(3,1);
console.log(fruits);
//adding items to the arrays 
console.log("se agregaron los items eliminados")
fruits.unshift(vshift);
// fruits.push(vpop);
fruits.push(vsplice.toString());
console.log("arreglo sin ordenar");
console.log(fruits);
console.log("arreglo ordenado");
console.log(fruits.sort());
console.log("Encontramos a: " + fruits.find(item => item=="Mango"));
/*este es otro arreglo */
const fotos = ["img/sd.webp","https://i.pinimg.com/originals/50/0c/48/500c4879bd825ad4b722271115b88fb6.jpg", "https://images3.alphacoders.com/101/thumb-1920-1017059.png"]
const div_ =document.createElement("div");

for( const foto in fotos ){
   var img = new Image();
   img.src=fotos[foto];
   img.classList.add("img");
   /*img.classList.add("imgs");
   img.setAttribute('src',fotos[foto]);
   img.setAttribute('id',foto);*/
//    console.log("ss",img);  
   document.body.appendChild(img);
}


