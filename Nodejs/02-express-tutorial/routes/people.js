/*========================================================
    exported file that will handle all routes for the 
    people portion of our API example
===========================================================*/

const express = require("express");
const router = express.Router();
const {getPeople, createPerson, createPersonPostman, updatePerson,deletePerson} = require("../contollers/people.js"); //destructuring each function from the import


//Get method list of peopel
router.get('/', getPeople);
//This post uses the javescript page
router.post('/',createPerson);
//New POST path to test postman tool 
router.post('/postman',createPersonPostman);
//Put method requires ID in path and name in body and used postman to test
router.put('/:id',updatePerson);
//Delete method and used postman to test
router.delete('/:id',deletePerson);


/*========================================================================
    Bellow is another way to call your router methods using the router.route.
    Each call is per path and you can chain the different http methods that correspond to that path.
    Within each http method you then will call the controller functions you imported
=============================================================================

router.route('/').get(getPoeple).post(createPerson);
router.route('/postman').post(createPersonPostman);
router.route('/:id').put(updatePerson).delete(delterPerson);

*/

module.exports = router;