// Archivos importados.
const links = require ('./readFiles.js')
// Módulos que se están usando en este archivo.
const fileHound = require('filehound');
const path = require('path');
const file = process.argv[2];


// Función que determina si la ruta es o no absoluta, de no serlo, la convierte. path.isAbsolute()
const relativeToAbsolute = new Promise((resolve, reject) => {
  let rute = file;
  if(path.isAbsolute == false){
    rute = path.resolve(rute);
    rute = path.normalize(rute);
  }
})
// console.log(ruta)

// necesito función que compuebe que sea un archivo
// Función que recorre una ruta e imprime en terminal, dentro de un array, los resultados de la busqueda.
// Hacer función que pregunte si la ruta entregada es un archivo o una carpeta

const files = (path) => {
  return new Promise ((resolve, reject) => {
  
    fileHound.create()
    .paths(path)
    .ext('.md')
    .find()
    .then(res => {console.log("res:", res)
        res.forEach( Element => {
          links(Element)
          // .catch()
          // traigo a link mediante una promesa
        })
})
  reject ((err) => {
    console.log('Error: ', err)});
  });

  resolve ()
};
  // files(ruta)



module.exports = function(files){
      this.files = files;
};