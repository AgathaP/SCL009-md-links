// Modulos importados para este proyecto
const path = require('path');
const fileHound = require('filehound');
const fs = require('fs');
const marked = require('marked');
const fetch = require('node-fetch');


// Imprime en terminal los archivos que concuerden con la extención del formato markdown ".md".
const readPath = (path) => {
  return fileHound.create()
    .paths(path)
    .ext('.md')
    .find();
};

// Lee los archivos y extrae links con su información adicional, texto que lo acompaña y hubicación.
const searchingLinks = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(err); 
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
      resolve(links)
    });
  })
};

// Imprime en terminal links validos y erroneos
const urlValidate = (links) => {
  return new Promise((resolve, reject) => {

    let arrayLinks = [];
    let linkObject = {};
    links.forEach(el => {
      fetch(el.href)
        .then(res => {
          linkObject.href = el.href;
          linkObject.text = el.text;
          linkObject.file = el.file;
          linkObject.statusCode = res.status;
          linkObject.status = res.statusText;
          console.log("validate: ", arrayLinks);
        })
    })
    resolve(arrayLinks.push(linkObject))
  })
};

// Función que entrega el total de links encontrados
const counterLinks = (links) => {
  return new Promise ((resolve, reject) => {
    let longitud = links.length;
resolve(longitud)
  })
}

// Acción según opción del usuario, validate, status o nada.
const mdLinks = (path, option) => {
  return new Promise((resolve, reject) => {
    if (option === '--status' || option === '--s') {
      searchingLinks(path)
      .then(links => {
        counterLinks(links)
        .then(counterLinks => {
          resolve(counterLinks)
        })
    })
    } else if (option === '--validate' || option === '--v') {
      searchingLinks(path)
        .then(links => {
          urlValidate(links)
            .then(urlValidate => {
              resolve(urlValidate)
            })
        })
    } else {
          searchingLinks(path)
            .then(searchingLinks => {
              resolve(searchingLinks)
            })
    }
  })
}


module.exports = {
  readPath,
  searchingLinks,
  urlValidate,
  counterLinks,
  mdLinks
}