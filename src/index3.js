const fileHound = require('filehound');

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

// const path = require('path');

// me dice las funciones    |
//  que están disponibles   v
                // console.log(path)