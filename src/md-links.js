// Modulos exportados en este proyecto
const mdLinks = require('./index.js')
// Modulos exportados en este proyecto
const path = require('path');
const fs = require('fs');
// Variable global
let route = process.argv[2];

let pathExtname = route.split('.');
let extname = pathExtname.pop();

let validate = false;
let status = false;

// Si la ruta es relativa la normaliza y convierte en absoluta.
if (!path.isAbsolute(route)) {
  route = path.normalize(route)
  route = path.resolve(route)
}
// Retorna una lista de archivos en caso de ser un directorio,
// de lo contrario, retorna una lista con los links encontrados
// dentro de un archivo.
if (fs.lstatSync(route).isDirectory()) {
  mdLinks.readPath(route)
    .then(res => {
      console.log(res)
    })
  }

// verifica que el archivo esté en formato Markdown
if (fs.lstatSync(route).isFile() && extname === 'md') { 
  mdLinks.mdLinks(route)
    .then(res => {
      console.log(res); 
    })
} else {
  console.log('Este archivo no está en formato Markdown')
}

// Imprime links, con o sin estado de esos links y con o sin un conteo de links unicos o repetidos,
// todo esto según la opción que ingrese el usuario.
if(process.argv[3] === '--validate' || process.argv[3] === '--v' || process.argv[4] === '--validate' || process.argv[4] === '--v'){
  mdLinks.mdLinks(route, validate)
  .then(validate = true)
  .then(res => {
    console.log(res)
  })
  .catch(err => { console.log('ha habido un error')})
} else if (process.argv[3] === 'status' || process.argv[3] === 's' || process.argv[4] === '--status' || process.argv[4] === '--s'){
  mdLinks.mdLinks(route, validate)
  .then(  status = true)
.then(res => {
  console.log('estamos trabajando para ud.', res)
})
}
