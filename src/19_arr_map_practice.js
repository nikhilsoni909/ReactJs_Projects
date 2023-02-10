const nums = [1, 2, 3, 4, 5]
const squared = nums.map(function (item) {
    return item * item;
})

console.log(squared);

// 2{
const names = ["nikhil", "nanda", "mummy", "heroiinni"]
const uppercase = names.map((name) => {
    return name[0].toUpperCase() + name.slice(1);
})

console.log(uppercase);

const pokemon = ["Bulbasaur", "chadarmod", "Squirtle"]
const elements = pokemon.map(mon => `<p>${mon}<p>`)
console.log(elements);