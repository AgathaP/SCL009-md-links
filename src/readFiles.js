// Archivos importados.
const files = require ('./checkRoute.js');
// Módulos que se están usando en este archivo.
const marked = require('marked')
const fs = require('fs');
const path = require('path');
const file = process.argv[2];

// Función que lee archivo, lo muestra en terminal y arroja los links encontrados en el, con 
// su descripción y ruta. 
// const links = (path) => {
//   return new Promise ((resolve, reject) => {
//   fs.readFile(file, 'utf8', (err, data) => {
//     if (err) {
//       reject(err);
//     } 
//     // Pasar renderer a promesa
//     let links = [];
//     const renderer = new marked.Renderer();
//     renderer.link = function (href, title, text) {
//       links.push({
//         // Url encontrada.
//         href: href,
//         // Texto que aparecería dentro del link.
//         text: text,
//         // Ruta del archivo donde se encontró el link.
//         // file: path
//       });
//       console.log("links:", links)
//     };

//     resolve(marked(data, {
//       renderer: renderer 
//     }));
//   })
// });
// };
// console.log(links())

const readingFileAndStractingData = new Promise((resolve, reject) => {
  fs.readFile(file, 'utf8', (err, data) => {
    
    let links = [];
    const renderer = new marked.Renderer();
    renderer.link = function (href, title, text) {
      links.push({
        // Url encontrada.
        href: href,
        // Texto que aparecería dentro del link.
        text: text,
        // Ruta del archivo donde se encontró el link.
        // file: path
      });
      console.log("links:", links)
    };

    marked(data, {
      renderer: renderer 
    });

    if (err) {
      reject(err);
    } 

    resolve(console.log("links:", readingFileAndStractingData.links));
  });
})

module.exports = function(readingFileAndStractingData){
  this.readingFileAndStractingData = readingFileAndStractingData;
}
