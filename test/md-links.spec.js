const mdLinks = require('../src/md-links.js');
const index = require('../src/index.js');

[ 'C:\\Users\\Asus\\Desktop\\SCL009-md-links\\src\\test_files\\prueba1.md',
  'C:\\Users\\Asus\\Desktop\\SCL009-md-links\\src\\test_files\\prueba2.md',
  'C:\\Users\\Asus\\Desktop\\SCL009-md-links\\src\\test_files\\prueba3.md',
  'C:\\Users\\Asus\\Desktop\\SCL009-md-links\\src\\test_files\\prueba.txt']


describe('mdLinks', () => {

  it('debería imprimir en terminal las carpetas encontradas en la ruta dada por el usuario', () => {
    expect('node src/md-links.js src/test_files')
    .toEqual(['src\\test_files\\prueba1.md', 'src\\test_files\\prueba2.md',
    'C:\\Users\\Asus\\Desktop\\SCL009-md-links\\src\\test_files\\prueba3.md']);
  });

  // it('debería imprimir en terminal Los links encontrados en las carpetas de la ruta dada por el usuario', () => {
  //   expect('node src/md-links.js src/test_files')
  //   .toEqual([{ href: 'https://trello.com/b/A9HUzmeI/red-social',
  //   text: 'Trello',
  //   file: 'src\\test_files\\prueba1.md' }]);
  // });


  // it('debería imprimir en terminal los estados de los links encontrados en los archivos', () => {
  //   expect('node src/md-links.js src/test_files')
  //   .toEqual([ { href: 'https://trello.com/b/A9HUzmeI/red-social',
  //   text: 'Trello',
  //   file: 'src\\test_files\\prueba1.md',
  //   statusCode: 200,
  //   statusText: 'OK' }]);
  // });

});

// describe('mdLinks errores', () => {

//   it('debería imprimir un error en terminal cuando la ruta dada por el usuario sea erronea', () => {
//     expect('node src/md-links.js src/test_files').toEqual({ errno: -4058,
//     syscall: 'stat',
//     code: 'ENOENT',
//     path: 'test_files' });
//   });

//   it('debería imprimir un error en terminal cuando el link encontrado no sea absoluto', () => {
//     expect('node src/md-links.js src/test_files').toEqual('Only absolute URLs are supported undefined');
//   });

//   it('debería imprimir un error en terminal cuando el link encontrado no exista', () => {
//     expect('node src/md-links.js src/test_files').toEqual('request to http://hdhsjhf.ajshgdy.com/ failed, reason: getaddrinfo ENOTFOUND hdhsjhf.ajshgdy.com hdhsjhf.ajshgdy.com:80 ENOTFOUND');
//   });
// });
