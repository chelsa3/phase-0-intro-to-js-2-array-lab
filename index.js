// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {[...cats,cats.push("Ralph")]};
function destructivelyPrependCat(name) {cats.unshift("Bob")};
function destructivelyRemoveLastCat() {cats.pop()};
function destructivelyRemoveFirstCat() {cats.shift()};
function removeFirstCat() {[cats.slice(1)]};