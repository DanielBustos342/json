const deportista={
    nombre: "messi",
    champspion: 4,

};
console.log(deportista);

console.log(JSON.stringify(deportista)); //transforma un objeto a json

const deportista1=`{"nombre": "messi", "champspion": 4}`;

console.log(deportista1);
console.log(JSON.parse(deportista1)); //transforma un json a objeto

fetch('http://127.0.0.1:5500/pasajeros.json')
.then((Response)=>Response.json())
.then((data)=>console.log(data));

fetch('http://127.0.0.1:5500/pasajeros.json')
.then((Response)=>Response.json())
.then((pasajeros)=>{
    const nombresDePasajeros = pasajeros.map((pasajeros)=>pasajeros.nombre);
    console.log(nombresDePasajeros);
})