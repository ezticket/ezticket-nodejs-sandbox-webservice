# ezTicket InZone Web Service

#### ezticket-nodejs-sandbox-webservice

<table border="0" width="90%" ID="table">
    <tr width="30%">
        <td>Descripción...</td>
        <td> <img align="right" height="100%" src="https://raw.githubusercontent.com/ezticket/ezticket-nodejs-sandbox-webservice/2b3c595a674b84b22754aafc0636dc8611e8e58e/assets/ezyicket-logo-t-bg.png"> </td>
    </tr>
</table>

## Paquetes NPM Utilizados

### Documentación de Código

Para documentar el código fuente hemos optado por utilizar
[JSDoc](https://jsdoc.app/), es un lenguaje de marcado utilizado para anotar
archivos de código fuente JavaScript. Usando comentarios que en formato JSDoc,
los programadores pueden agregar documentación al tiempo que desarrollan,
“decorando” las piezas de código con este formato nos permite acceder
rápidamente a un documento actualizado con la documentación de nuestro producto
de software. Es de código libre, ampliamente utilizado en la industria y
considerado como el estándar deflactó de la documentación en código.

A continuación, comparto dos links muy interesantes donde nos basamos para la
configuración inicial de la herramienta:

|                                |                                                                                                                           |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
| **Introducción e instalación** | [Document your Javascript code with  JSDoc](https://dev.to/paulasantamaria/document-your-javascript-code-with-jsdoc-2fbf) |
| **Personalización**            | [docdash](https://github.com/clenemt/docdash)                                                                             |

```
jsdoc -c .jsdoc.json
```

### Variables de Entorno ###

[Las variables de entorno sirven para definir parámetros sencillos de configuración de los programas, de modo que éstos puedan ejecutarse en diferentes ambientes sin necesidad de modificar el código fuente de un script.][1]

[1]: https://desarrolloweb.com/articulos/variables-entorno-nodejs.html

[Trabajar con variables de entorno es una excelente manera de configurar diferentes aspectos de su aplicación Node.js. Muchos hosts en la nube (Heroku, Azure, AWS, now.sh, etc.) y módulos Node.js usan variables de entorno. Los hosts, por ejemplo, establecerán una variable PORT que especifica en qué puerto debe escuchar el servidor para que funcione correctamente. Los módulos pueden tener diferentes comportamientos (como el registro) según el valor de la variable NODE_ENV.
][2]

[2]: https://www.twilio.com/blog/working-with-environment-variables-in-node-js-html

### Manejar variables de entorno con dotenv ##

Utilizamos para manejar las variables de entorno la extension: 'DotENV'

[![DotENV Extension](https://mikestead.gallerycdn.vsassets.io/extensions/mikestead/dotenv/1.0.1/1519894859412/Microsoft.VisualStudio.Services.Icons.Default "VSCode .env syntax highlighting")][3]

[3]: https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv

+ [Manejar variables de entorno con dotenv en Nodejs - Tutorial](https://www.youtube.com/watch?v=SFNfvLb1pQQ)
+ [Variables de Entorno en Node.js | dotenv & crossenv](https://www.youtube.com/watch?v=U6st9-lNUyY)
+ [Link DotENV Extension](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv)




### Módulo de log. ###

Las opciones más populares a tener en cuenta fueron:

| Nombre  | Sitio Web                               | Dependents |
| ------- | --------------------------------------- | ---------: |
| bunyan  | <https://www.npmjs.com/package/bunyan>  |      3.999 |
| debug   | <https://www.npmjs.com/package/debug>   |     35.396 |
| winston | <https://www.npmjs.com/package/winston> |     12.381 |
| log4js  | <https://www.npmjs.com/package/log4js>  |      2.674 |

<br/><br/>

----

**@ezTicket** :+1: