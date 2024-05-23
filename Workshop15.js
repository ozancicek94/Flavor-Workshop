let inputFlavors = prompt("Hello! Enter flavors with a comma inbetween please");

console.log(inputFlavors);

let arrayFlavors = inputFlavors.split(",");



const objFlavors = {
  
};

for (let i = 0; i<arrayFlavors.length; i++) {

  if (!Object.hasOwn(objFlavors, arrayFlavors[i])) {

    objFlavors[arrayFlavors[i]] = 1;

  } else {
    objFlavors[arrayFlavors[i]] += 1
  }

}

console.log(objFlavors)