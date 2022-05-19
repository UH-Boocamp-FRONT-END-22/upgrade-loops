//Iteration 4: Probando for...in
//Usa un for in para imprimir por consola los datos del alienígena.

const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
};

for (const object in alien) {
    console.log("Estos son los items que hay en el objeto alien", object);
};