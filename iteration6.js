//Iteration 6: Mixed for...of e includes
//usar un bucle for...of para recorrer todos los juguetes y elimina los que incluyan la palabra gato.
//Recuerda que puedes usar la función .includes() para comprobarlo.

const toys = [
  { id: 5, name: "Buzz MyYear" },
  { id: 11, name: "Action Woman" },
  { id: 23, name: "Barbie Man" },
  { id: 40, name: "El gato con Guantes" },
  { id: 40, name: "El gato felix" },
];



for (let toy = 0; toy < toys.length; toy++) {
    
    if (toys[toy].name.includes("gato")) {
        toys.splice(toy, 1);
        toy--;
    }  
};

console.log("Esta es la lista de jueguetes, excluyendo los que tienen que ver con gato", toys);