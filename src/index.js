// Módulos que se están usando en este proyecto.
const marked = require('marked')
const fs = require('fs');
const fileHound = require('filehound');
const path = require('path');
// const fetch = require('node-fetch');

// import { fstat } from "fs";

// module.exports = () => {
//   files();
//   read();
// };


// Función que recorre una ruta e imprime en terminal, dentro de un array, los resultados de la busqueda.
    const files = fileHound.create()
        // .paths(path) // es la ruta (cómo sacarla es el punto, hasta el momento la he escrito manual)
        .paths('\\Users\\Asus\\Desktop\\SCL009-md-links')
        .ext('.md')
        .find()
        files.then(console.log);
        files.catch ((err) => {
            console.log('Por favor ingrese una ruta valida');
    })  

    // if(path.isAbsolute(files) !== true){
    //     console.log('es una ruta relativa');
    //     } else {
    //         console.log('es una ruta absoluta')
    //     }
        
    // intento de entrada a los archivos
// const enterArchive = (files) => {
//     new Promise()
//     .then(){

//     }
// }