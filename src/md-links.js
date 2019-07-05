const mdLinks = require('./index.js')
// Modulos exportados en este proyecto
const path = require('path');
const fs = require('fs');
// Variable global
let route = process.argv[2];

// Si la ruta es relativa la normaliza y convierte en absoluta.
if (!path.isAbsolute(route)) {
  route = path.normalize(route)
  route = path.resolve(route)
}
// Retorna una lista de archivos en caso de ser un directorio,
// de lo contrario, retorna una lista con los links encontrados
// dentro de un archivo.
if(fs.lstatSync(route).isDirectory()) {
  mdLinks.readPath(route)
    .then(res => {
      console.log(res);
    })
} else {
  mdLinks.searchingLinks(route)
    .then(res => {
      console.log(res);
    })
}
// me retorna igual los archivos(por ende recorre el directorio(?) necesito el forEach)

// 
// if(){

// }
