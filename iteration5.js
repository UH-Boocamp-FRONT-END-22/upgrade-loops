//Iteration 5: Probando For
//usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40
//Impre en un console.log el array

const placesToTravel = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];

for (let index = 0; index < placesToTravel.length; index++) {
  if (placesToTravel[index].id === 11) {
    placesToTravel.splice(index, 1);
    index--;
  } else if (placesToTravel[index].id === 40) {
    placesToTravel.splice(index, 1);
    index--;
  }
}

console.log(
  "Mostrando todos los paises, excepto los correspondientes al id 11 y 40",
  placesToTravel
);
