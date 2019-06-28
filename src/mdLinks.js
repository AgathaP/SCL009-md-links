const links = require ('./readFiles.js')
const files = require ('./checkRoute.js');

// la función mdlink lee el resto de funciones alojadas en los otros archivos.

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

const mdLinks = (links, files) => {
    links()
    .then(path.resolve(ruta))
    .then(path.normalize(ruta));
    // files()
    //     .then(function files() {console.log(files())});
};