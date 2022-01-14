/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at traversing the DOM using JavaScript.
 */
var backpack1 = document.getElementById('pack01');

console.log(backpack1);

var img = backpack1.querySelector('backpack__image');
console.log(img);

var backpack__strap = backpack1.querySelectorAll('feature backpack__strap').forEach(item=> item.getElementsByClassName.backgroundColor="red");

console.log(backpack__strap);
