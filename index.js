let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats = cats.push(name);
}
function destructivelyPrependCat(name){
    cats = cats.unshift(name);
}
function destructivelyRemoveLastCat(){
    cats = cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats = cats.shift();
}
function appendCat(name){
    return [...cats, name];
}
function prependCat(name){
    return [name, ...cats];
}
function removeLastCat(){
    let newCats = [...cats];
    return newCats.slice(0, -1);
}
function removeFirstCat(){
    let newCats = [...cats];
    return newCats.slice(1);
}
