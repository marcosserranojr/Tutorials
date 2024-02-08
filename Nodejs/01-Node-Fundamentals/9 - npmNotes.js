/* When node is installed npm is installed by default
   Global command for node package manager (npm) */
// npm 
// npm --v

/* There are two flavores of npm
    1. Local dependency
    2. Global dependency
*/

//Local Dependency - used in a particular project
// npm i <packageName>


//Global Dependency - used in any project
// npm install -g <packageName>


/* ******************************************************************************
    Package.json - manifest file containing the information about the package
************************************************************************************ */

//Three Ways to create the package.json file.

//Manual Approach - (create the package.json file in the root)

//npm init (step by step auto creation)

//npm init -y (auto creation accepting all defaults)

//NOTE: lodash package added as a test and bootstrap to show a package may 
//have thier own dependencies but these packages are really not used

/* *****************************************************************************************************
    Example below uses a package imported via npm is code (lodash package)
*/

const _ = require('lodash');

const items = [1,[2,[3,[4]]]]; 

const newItems = _.flattenDeep(items); // will take the array of arrays and return just the object of the values

console.log(newItems);
console.log("Hello change")

//Example ouput below
//PS C:\CODE\Javascript\NodeJS\NodeJsExpress-tutorial> node app.js    
// [ 1, 2, 3, 4 ]

/* ####################################################################################################################

    Development Dependencies - Packages  - examples : nodemon, testing, formating, linting tool (code analyzer) etc..

######################################################################################################################## */

// npm i <packageName> -D - install a package as a devDependency only


/* ####################################################################################################################

    Scripts - Package.json

######################################################################################################################## */

// Under Scripts object you could add a scripts example:

// "start": "node app.js" - This enables you to type "npm start" to get you application running

// or the script to run the dev package installed above
//"dev": "nodemon app.js" - to run this you need to type "npm run dev"

/* ####################################################################################################################

    Unintalling Package

######################################################################################################################## */

//npm uninstall <packageName>



/* ####################################################################################################################

    npx - Package runner - enables you to run packaged frameworks with out installing those libraries globally 

######################################################################################################################## */
//npx 