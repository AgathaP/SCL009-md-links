// process.argv
const marked = require("marked");

const fs = require('fs');

// fs.readFile("./prueba.md", "utf8",(err, data) => {
//   if(err){
//     throw err
//   }
  
//     console.log(data);
  
// })


const links = (path) =>{
  fs.readFile(path,"utf8", (err,data) =>{
    if(err){
   console.log(err)
    }
    let links =[];

    const renderer = new marked.Renderer();

    renderer.link = function(href, title, text){

      links.push({
        
        href:href,
        text:text,
        file:path
      
      })

    }
    marked(data, {renderer:renderer})
      console.log(links)
  })

}

console.log(links("./pruebas.md"));