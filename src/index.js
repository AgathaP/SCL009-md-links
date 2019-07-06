// Modulos importados para este proyecto
const path = require('path');
const fileHound = require('filehound');
const fs = require('fs');
const marked = require('marked');
const fetch = require('node-fetch');
// const linkCheck = require('link-check');

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
const validateOption = (links) => {
  return new Promise((resolve, reject) => {
    if(err){
      reject(err => {
        console.log(err.message, err.code);
      })
    }
    let arrayLinks = [];
    let linkObject = {};
   links.forEach(el => {
      fetch(el.href)
        .then(res => {
          linkObject.href = el.href;
          linkObject.text = el.text;
          linkObject.file = el.file;
          linkObject.statusCode = res.status;
          linkObject.statusText = res.statusText;
          console.log("validate: ", arrayLinks);
        })
    })
    resolve(arrayLinks.push(linkObject))
  })
};

const mdLinks = (path, option) => {
  return new Promise((resolve, reject) => {
    if(err){
      reject(err)
    }else if (option === '--validate' || option === '--v') {
      searchingLinks(path)
        .then(links => {
         validateOption(links)
            .then(validateOption => {
              resolve(validateOption)
            })
        })
    } else if(option === '') {
      readPath(path)
      .then(path => {
          searchingLinks(path)
            .then(searchingLinks => resolve(searchingLinks))
        })
    }
  })
}


module.exports = {
  readPath,
  searchingLinks,
  validateOption,
  mdLinks
}
