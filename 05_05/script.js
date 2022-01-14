/**
 * Traverse the DOM tree using querySelector() and querySelectorAll()
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll
 */

import Backpack from "./Backpack.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST",
  "../assets/images/everyday.svg"
);

const main = document.querySelector(".maincontent");

const content = `
  <article class="backpack" id="everyday">
    <figure class="backpack__image">
      <img src=${everydayPack.image} alt="" />
    </figure>
    <h1 class="backpack__name">${everydayPack.name}</h1>
    <ul class="backpack__features">
      <li class="packprop backpack__volume">Volume:<span> ${
        everydayPack.volume
      }l</span></li>
      <li class="packprop backpack__color">Color:<span> ${
        everydayPack.color
      }</span></li>
      <li class="backpack__age">Age:<span> ${everydayPack.backpackAge()} days old</span></li>
      <li class="packprop backpack__pockets">Number of pockets:<span> ${
        everydayPack.pocketNum
      }</span></li>
      <li class="packprop backpack__strap">Left strap length:<span> ${
        everydayPack.strapLength.left
      } inches</span></li>
      <li class="packprop backpack__strap">Right strap length:<span> ${
        everydayPack.strapLength.right
      } inches</span></li>
      <li class="packprop backpack__lid">Lid status:<span> ${
        everydayPack.lidOpen
      }</span></li>
    </ul>
    <input type="button" value="Click Me" onclick="abrir();">
  </article>


`;

main.innerHTML = content;

// var pack02 = document.getElementById('pack02');
//cambiar la imgen por defecto
document.querySelector('img').setAttribute('src','https://www.google.com/logos/doodles/2021/seasonal-holidays-2021-6753651837109324-6752733080595603-cst.gif');
document.querySelector('img').setAttribute('alt','se cambia a la imagen de google');

document.querySelector('.backpack__name').style.color="blue"
document.querySelector('.backpack__color').style.color=   everydayPack.color;
if ( everydayPack.lidOpen){
  document.querySelector('.backpack__lid').style.color="green";
}else{
  document.querySelector('.backpack__lid').style.color="red";
}

 function abrir (color){
  document.querySelector('.backpack__lid span').style.color=this.color;

}