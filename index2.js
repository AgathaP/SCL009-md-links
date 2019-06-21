// Modulo de node que instalé con "npm install --save marked"
const marked = require('marked')

// Importar el módulo fs
const fs = require('fs');

/* Este método accede a un fichero para su lectura y nos entrega el 
contenido en forma de buffer o en forma de cadena.*/

// primer parametro nombre del archivo que deseamos leer. 
// // Segundo parametro (opcional) contendrá el juego de caracteres en el que el archivo está codificado, por ejemplo 'utf-8'.
// // Tercer parámetro es la función callback. Esta función recibirá dos parámetros, el archivo ya leído o bien, si ocurre algún error
// // fs.readFile(archivo [, options], callback)

// const read = (path) =>{
// // debe ir dentro de una función que llamo abajo con sus argumentos
// fs.readFile(path, 'utf-8', (err, data) => {
//   // Si hay un error te devuelve mensaje de error, de lo contrario lo guarda en un array
//   // arr = ['href', 'file', 'text'];
//   if(err) {
//     console.log('error: ', err);
//   } else {
//     console.log(data); 
//   }
// });

// }
// //console.log(fs);
// read(pruebas.md)
// Al final de esta función se genera la promesa que va ha ejecutar la wea según los parametros que reciva.


// filtrar el tipo de archivo '.md'
// const path = require('path');


// Desglosando. debo hacer una función donde el usuario ingrese la ruta del archivo a leer,
// por lo que haré una función que espere un valor (callback(?)) que denominaremos path.
// 'Error' en caso de no hayar la ruta, envía un mensaje de error.

const FileHound = require('filehound');

const userPath = (path) => {
    const files = FileHound.create()
            .paths(path)
            .ext('.md')
            .find()
            files.then(files => {
            files.forEach(file => console.log('pruebas', files));
        })  
        .catch ((err) => {
            console.log('Por favor ingrese una ruta valida');
        })
        files.then(console.log);
}

// let path = '\\Users\\Asus\\Desktop\\SCL009-md-links';


 

