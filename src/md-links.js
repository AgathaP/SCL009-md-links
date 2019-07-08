const mdLinks = require('./index.js')
// Modulos exportados en este proyecto
const path = require('path');
const fs = require('fs');
// Variable global
let route = process.argv[2];
let option1 = process.argv[3];
let option2 = process.argv[4];

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
if (fs.lstatSync(route).isFile()) {
  mdLinks.mdLinks(route)
    .then(res => {
      console.log(res);
    })
}

// Acciones según opción del usuario
if (option1 === '--validate' && option2 === '--status' || option1 === '--status' && option2 === 'validate') {
  mdLinks.mdLinks(route, status, validate)
    .catch(err => {
      console.log('ha habido un error')
    })
    .then(status = true)
    .then(res => {
      console.log('Links totales: ', res)
    })
    .then(validate = true)
    .then(res => {
      console.log('validate res: ', res)
    })
    .catch(err => {
      console.log('estamos trabajando para ud.', err)
    })
} else if (option1 === '--validate' || option1 === '--v' || option2 === '--v' ||
  option2 === '--validate') {
  mdLinks.mdLinks(route, option1, option2)
    .then(validate = true)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log('ha habido un error')
    })
} else if (option1 === '--status' || option1 === '--s' || option2 === '--status' ||
  option2 === '--s') {
  mdLinks.mdLinks(route, option1, option2)
    .then(status = true)
    .then(res => {
      console.log('links totales: ', res)
    })
} else if (option1 === '') {
  mdLinks.mdLinks(route)
    .then(res => {
      console.log(res)
    })
}
