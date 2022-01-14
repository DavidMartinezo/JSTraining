/**
 * Challenge: Create a new object type
 * 
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

import Backpack from "./Backpack.js";
import Book from "./Book.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

const backpack =` <main class="content">
<article>
  <h1>${everydayPack.name}</h1>
  <ul>
    <li>Volume:${everydayPack.volume}</li>
    <li>Color:${everydayPack.color}</li>
    <li>Age:${everydayPack.backpackAge()}</li>
    <li>Number of pockets:${everydayPack.pocketNum}</li>
    <li>Left strap length:${everydayPack.strapLength.left}</li>
    <li>Right strap length:${everydayPack.strapLength.right}</li>
    <li>Lid status:${everydayPack.lidOpen}</li>
  </ul>
</article>
</main>`;
//document.body.innerHTML=backpack;
console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());

const ThousandYears = new Book(
  "cien años de soledad",
  "Gabriel Garcia Marquez",
  "1985",
  470,
  "Lectura",
  123
);

const books = `<article>
<h1>${ThousandYears.title}</h1>
<ul>
  <li>autor:${ThousandYears.author}</li>
  <li>año publicacion:${everydayPack.releaseDate}</li>
  <li>Pages:${everydayPack.pages}</li>
  <li>status:${everydayPack.status}</li>
  <li>codigo:${everydayPack.codigo}</li>
</ul>
</article>`; 


const libro2 = new Book(
  "libro 2",
  "Gabriel Garcia Marquez",
  "1986",
  471,
  "Lectura",
  123
);
const books2 = `<article>
<h1>${ThousandYears.title}</h1>
<ul>
  <li>autor:${ThousandYears.author}</li>
  <li>año publicacion:${everydayPack.releaseDate}</li>
  <li>Pages:${everydayPack.pages}</li>
  <li>status:${everydayPack.status}</li>
  <li>codigo:${everydayPack.codigo}</li>
</ul>
</article>`; 
document.body.innerHTML = backpack +  books +books2 ;
const libro3 = new Book(
  "libro 2",
  "Gabriel Garcia Marquez",
  "1986",
  471,
  "Lectura",
  123
);

console.log("este es el libro cien años de soledad antes de cambio", ThousandYears);

ThousandYears.updateStatus("Terminado");
console.log("estado actualizado: ", ThousandYears);