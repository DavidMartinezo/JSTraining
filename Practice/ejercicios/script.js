//function declaration 

function doSomeMath(a, b){
    let c= a + b;
    return c;
}

// function expression
const doMoreMath = function(a, b){
let c = a*b; 
return c;
}

console.log("Do some math: " + doSomeMath(2,2));
console.log("Do more math: "  + doMoreMath);

// immediately invoked function expression (IIFE)
(function (){
    let a= 5;
    let b=5;
    let c= doSomeMath(a,b);
    console.log( `the sum of a and b is ${c}`);
})();

const greenPack = {
    name: "Frog Pack",
    color: "green",
    volume: 8,
    pocketNum: 3,
  };
  
  //arrow functions can be call after they have been declared  
  const CurrentPack = (  cpack   )=>{
      const newArticle= document.createElement("div");
      newArticle.innerHTML=`<h1>Este es un H1</>
      <ul>
      <li>Volume: ${cpack.volume} </li>
      <li>Color: ${cpack.color} </li>
      <li>Number Of Pockets:  ${cpack.pocketNum} </li>
      </ul>`;
      return newArticle;
  };

  const main = document.querySelector("div div");
  main.append(CurrentPack(greenPack));