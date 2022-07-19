
# Intrucciones de Instalacion

- npm install -g typescript
- tsc --version

## tsc --init : para crear el archivo tsconfig.json
- Activar "outDir": "./dist" allí sera a carpeta en la que saldra la compilacion de ts a js
- "sourceMap": true  =  Saber si hay un erro en js en que parte de ts realmente ocurre
- "moduleResolution": "node"   = Especifique cómo busca TypeScript un archivo de un especificador de módulo dado


## ejecutar "tsc" para iniciar el compilador con las especificaciones de tsconfig.json
- instalar "npm i tslint --save-dev"
- para configurar tslint es necesario tener typescript en el proyecto actual y no global
por ello ejecuto "npm i typescript --save-dev"
- para inicializar el archivo de configuracion ejecuto "./node_modules/.bin/tslint --init"
- en tslint.json "rules": {
        "no-console": false
    } para no arrojar errores cuando se imprima en consola

## uso de eslint en lugar de tslint
- npm i eslint --save-dev
- npm init @eslint/config
- opcionales @typescript-eslint/eslint-plugin@latest   @typescript-eslint/parser@latest


## ayudar de dependencias
- npm i --save-dev @types/express le ayuda a typescript a saber cuales son las firmas de los metodos y cosas no escritas en ts, es una dep de desarrollo, para este caso activa todo el tipado de express

## Hacer que el compilador este pendiente de cualquier cambio en los .ts y vuelva a compilar
-- "tsc --watch"

## ORM Sequelize https://sequelize.org/docs/v6/getting-started/
- npm install --save sequelize
- 