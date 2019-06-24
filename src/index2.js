// 'use strict';
// Modulo de node que instalé con "npm install --save marked"
const marked = require('marked')
// Importar el módulo fs
const fs = require('fs');
const path = require('path');
// const resolve = require('path').resolve;
const FileHound = require('filehound');
const file = process.argv[2];

// const mdLinks =(path, options)=>{
//     return new Promise((resolve, reject)=>{
//       if(options.validate ===true){
//         resolve(getStatusOfLInk(markdownLinkExtractor(path)))
//       }else{
//         resolve( markdownLinkExtractor(path));
//       }
//       })
//     } 


// read(pruebas.md)
// Al final de esta función se genera la promesa que va ha ejecutarse según los parametros que reciva.


// Desglosando. debo hacer una función donde el usuario ingrese la ruta del archivo a leer,
// por lo que haré una función que espere un valor (callback(?)) que denominaremos path.
// 'Error' en caso de no hayar la ruta, envía un mensaje de error.

    const files = FileHound.create()
            .paths('\\Users\\Asus\\Desktop\\SCL009-md-links')
            .ext('.md')
            .find()
            files.then(console.log);
            files.catch ((err) => {
                console.log('Por favor ingrese una ruta valida');
                })  

        /* Este método accede a un fichero para su lectura y nos entrega el 
contenido en forma de buffer o en forma de cadena.*/
// resolve(files) 
// primer parametro nombre del archivo que deseamos leer. 
// Segundo parametro (opcional) contendrá el juego de caracteres en el que el archivo está codificado, por ejemplo 'utf-8'.
// Tercer parámetro es la función callback. Esta función recibirá dos parámetros, el archivo ya leído o bien, si ocurre algún error
// fs.readFile(archivo [, options], callback)

// const read = (path) =>{
  console.log('holiss')
// debe ir dentro de una función que llamo abajo con sus argumentos
fs.readFile(file, 'utf8', ( err, data ) => {
  // Si hay un error te devuelve mensaje de error, de lo contrario lo guarda en un array
  // arr = ['href', 'file', 'text'];
  console.log('holi')
  if(err) {
    console.log(err);
  }// else {
    console.log(data); 
    let arr = [];
console.log('holo')
// let linkss = data.includes('http');
// console.log(linkss)
    const renderer = new marked.Renderer();
console.log('yayaya')
    renderer.link = function (href, text, file) {
        arr.push({    
          // Url encontrada
            href: href,
          // Texto que aparecería dentro del link (<a>)
            text: file,
          // Ruta del archivo donde se encontró el link
            file: process.argv[1],
            }); 
            console.log(arr)
            console.log('holu')
          };
          // }
        // if(path.isAbsolute(files) !== true){
        //     console.log('es una ruta relativa');
        //     } else {
        //         console.log('es una ruta absoluta')
        //     }
    marked(data, {renderer:renderer})
    // resolve(arr);
    // console.log(read);
   

});
// };


// console.log(read('./pruebas.md'));
// let path = '\\Users\\Asus\\Desktop\\SCL009-md-links';

// Por medio de un callback

// const userFile = (request, response) => {
//     FileHound.create(path, ext)
    // }

