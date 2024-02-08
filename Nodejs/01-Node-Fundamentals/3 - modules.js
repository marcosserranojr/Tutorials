//NODE uses the CommonJS Library, every file is a module (by default)
//MODULES - Encapsulate Code (only share minimum)
//When modules is imported its invoked

const names = require('./4 - names'); //Object

const sayHi = require('./5 - utils'); //function

const data = require('./6 - Alternative.js') // several 

require('./7 - mind-grenade.js'); //runs the invoked function on the imported file and used primarly with thid party modules

sayHi("Marcos");
sayHi(names.John);
sayHi(names.Peter);

console.log(data);