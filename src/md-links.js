// Modulos exportados en este proyecto
const mdLinks = require('./index.js')
const path = require('path');
const fs = require('fs');
// Variable global
let route = process.argv[2];
let pathExtname = route.split('.');
let extname = pathExtname.pop();


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
  }
  
// verifica que el archivo esté en formato Markdown
if (fs.lstatSync(route).isFile() && extname === 'md') { 
  mdLinks.searchingLinks(route)
    .then(res => {
      console.log(res);
    })
} else {
  console.log('Este archivo no está en formato Markdown')
}
