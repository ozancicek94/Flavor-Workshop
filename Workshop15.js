let inputFlavors = prompt("Hello! Enter flavors with a comma inbetween please");

console.log(inputFlavors);

let arrayFlavors = inputFlavors.split(",");

function orderTotal(inputFlavors) {

const objFlavors = {};

for (let i = 0; i<arrayFlavors.length; i++) {

  if (!Object.hasOwn(objFlavors, arrayFlavors[i])) {

    objFlavors[arrayFlavors[i]] = 1;

  } else {
    objFlavors[arrayFlavors[i]] += 1
  }

}

console.table (objFlavors)
}

orderTotal(inputFlavors);


