// Módulos que se están usando en este proyecto.
const marked = require('marked')
const fs = require('fs');
const fileHound = require('filehound');
const path = require('path');
const file = process.argv[2];
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


// Función que comprueba que las rutas sean absolutas, de lo contrario las convierte en absolutas.

    // if(path.isAbsolute(files) !== true){
    //     console.log('es una ruta relativa');
    //     } else {
    //         console.log('es una ruta absoluta')
    //     }
        

// Función que lee archivo, lo muestra en terminal y arroja los links encontrados en el, con 
// su descripción y ruta.
    
// const read = (path) =>{
  fs.readFile(file, 'utf8', ( err, data ) => {
    console.log(data); 

    if(err) {
      console.log(err);
    }

      let arr = [];
      const renderer = new marked.Renderer();
      renderer.link = function (href, text, file) {
          arr.push({    
            // Url encontrada.
              href: href,
            // Texto que aparecería dentro del link.
              text: file,
            // Ruta del archivo donde se encontró el link.
              file: process.argv[1],
              });
              console.log(arr) 
            };

      marked(data, {renderer:renderer})
  
  });
  // };