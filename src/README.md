# md-links _Beta_
**version 0.1.0**

<br>
Es un modulo de node, que te permite extraer links de archivos en formato markdown, además de comprobar el estado en el que se encuentran, (ok o break).

## instalación  ⚙️🔧

Para instalar el modulo de md-link en tu proyecto, usa en tu terminal el siguiente comando.

```
npm install AgathaP/md-links
```
<br>
Y exporta el modulo a tu proyecto de la siguiente manera:

```
const mdLinks = require("md-links");
```

## Modo de uso 📌

Su uso es simple. Para hacer uso de esta herramienta, debes escribir en la terminal:

<br>

```
md-links <path-to-file>
```
_Donde "path" es la ruta donde se encuentra el archivo a analizar._

Se imprimirá en la terminal, las carpetas encontradas en la ruta, los links contenidos dentro del o los archivos .md y el estado de los links.
<br>
### imprimiendo carpetas
![imprimiendo-carpetas](src\img\imprimiendo-carpetas.png)
<br>
### imprimiendo links contenidos en archivos
![links-encontrados](img\links-encontrados.png)
<br>
### imprimiendo estado de los links encontrados
![links-validados](img\links-validados.png)

## Dependencias 📋
* eslint-plugin-jest": "^22.7.1
* filehound": "^1.17.0
* link-check": "^4.4.5
* marked": "^0.6.2
* node-bin": "^8.10.0
* node-fetch": "^2.6.0

## Autora ✒️
* **Agatha Sáez**