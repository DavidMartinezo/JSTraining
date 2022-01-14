/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */
/*create a basic basic declaration */
const main_ = document.querySelector("main");
 const ObtenerDivArrowF=()=> {
    const div_ = document.createElement("div");
    div_.classList.add("id");
    div_.innerHTML=`<h1>Este es una arrow function </h1>`
//const divMain = document.querySelector("main");
main_.append(div_);

 };
// immediately invoked function expression (IIFE)
(function ObtenerDiv() {
    const div_ = document.createElement("div");
    div_.classList.add("id");
    div_.innerHTML=`<h1>immediately invoked function </h1>`
//const divMain = document.querySelector("main");
main_.append(div_);

})();

ObtenerDivArrowF();



//Make a change to an element int the DOM (query selector, Addind a class, an do on)
//Call the function declaration 

//create a basic function expression 
/*aditional 
*find an elemente
*Make a change to it 
*Call the function 
*Confirm that it works 
*Repeat with an arrow function 


*/