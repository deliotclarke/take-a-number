console.log("am i a working boy?")

//write a function that accepts a band name as an argument

//function will increment a counting variable each time it's used

//will return that number and the band name together

let bandNumber = 1

const takeNumber = function (name) {
  bandNumber += 1;
  return `${bandNumber}. ${name}`;
}

const scum = takeNumber("Galactic Scum")
console.log(scum)

const under = takeNumber("Underdogs")
console.log(under)

const gimme = takeNumber("Gimme the Bad News");
console.log(gimme);