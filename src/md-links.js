#!/usr/bin/env node
// const Cucumber = require('../lib/cucumber');
// Módulos utilizados en proyecto.
const file = process.argv[2];
const FileHound = require('filehound');
const path = require('path');
const marked = require('marked')
const fs = require('fs');
const fetch = require('node-fetch');
const linkCheck = require('link-check');


// Imprime en terminal los archivos que concuerden con la extención del formato markdown ".md".
const readPath = (path) => {
const files = FileHound.create()
  .paths(file)
  .ext('.md')
  .find();
 
files.then(res => {console.log('Files: ', res)
    res.forEach( Element => {
             searchingLinks(Element);
         })
        })
        .catch((err) => {
            console.log('Error: ', err)
        });
    };

    console.log(readPath());


    // Debe comprobar que la ruta sea absoluta (los metodos están arrojando error)
    // const absoluteConvert = (path) =>{
        route = file;
    //     if (route.isAbsolute == true){
    //         readPath();
    //     } else {
            route = path.resolve(route)
            route = path.normalize(route)
          //  absoluteConvert();
    //     }
    //     }

    //     console.log(absoluteConvert())

// Lee los archivos y extrae links con su información adicional, titulo que lo acompaña y su hubicación.
const searchingLinks = (path) => {

        fs.readFile(path, 'utf8', (err, data) => {
          if (err) {
            console.log('otro error: ', err);
          } 

          let links = [];

          const renderer = new marked.Renderer();
          renderer.link = function (href, title, text) {
            links.push({
              // Url encontrada.
              href: href,
              // Texto que aparecería dentro del link.
              text: text,
              // Ruta del archivo donde se encontró el link.
              file: path
            })
          }

          marked(data, {
            renderer: renderer
          })
   
          console.log("links:", links);
          urlStats(links);
        });
      };



    const urlStats = (links) => {
   
      let arrayLinks = [];
      links.forEach(el => { 
   
      fetch(el.href)        
      .then(res => {
        el.href = el.href;
        el.text = el.text;
        el.file = el.file;
        el.statusCode = res.status;
        el.statusText = res.statusText;
      arrayLinks.push(el)
      console.log("validate: ", arrayLinks); 
    })
    .catch(err => {
      console.log(err.message, err.code);
    })
  })
};

// let validate = false;
// let stats = false;
// if(option == '--validate' || option == '--v' && option == '--stats' || option == '--s'){
//     return validate = true, stats = true;
// } else if (option == '--validate' || option == '--v'){
//     return validate = true;
// } else if (option == '--status' || option == '--s'){
//     return stats = true;
// }

// const mdLinks = (path, option)

module.exports = {
  readPath,
  searchingLinks,
  urlStats
}