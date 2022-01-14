/**
 * Scope and the var statement
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
 */

const color = "purple"; //this produce a console error. 
//let color = "purple";
document.querySelector(".left").style.backgroundColor = color;
document.querySelector(".left .color-value").innerHTML = color;

color="skyblue";
function headingColor() {8
  let  color = "blue";
    document.querySelector(".title").style.color = color;
  }


document.querySelector(".right").style.backgroundColor = color;
document.querySelector(".right .color-value").innerHTML = color;

  headingColor();
