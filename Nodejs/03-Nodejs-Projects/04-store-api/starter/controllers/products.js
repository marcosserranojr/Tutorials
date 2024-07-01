//// CONTROLLER METHODS FOR ROUTES //////
// --------------------------------------------------------

////// Required Imports //////////

//===== Import Models
const Product = require('../models/product');

//========================================================


///====== Controller Methods =======   

//TESTING logic as added - Get all products static route 
const getAllProductsStatic= async (req, res)=>{
       
    
    const products = await Product.find({}).sort('-name -price').select( 'name price');
    res.status(200).json({PrductCount: products.length,products, });    
  
};

///////// Get ALL PRODUCTS CONTROLLER ///////////////////////////////////////////////////////////////////
const getAllProducts= async (req, res)=>{   

    const{featured, company, name, sort, fields, numericFilters} = req.query //destructure the keys passed from query string

    const queryObject ={} // Instead of passing req.query directly a new object is created to handle any logic that is created.

    // BELOW : If it exists then do some logic and return queryObject
    if (featured){ 

        queryObject.featured = featured === 'true'? true : false; // set up a new property (.featured) for the query object 
                                                                 // and if the variable featured comes in as true, then set the propery to true, else false.
    }
    if (company){
        queryObject.company = company;
    }
    // Reference - https://www.mongodb.com/docs/manual/reference/operator/query/regex/#mongodb-query-op.-regex
    if (name){
        queryObject.name = {$regex:name, $options: 'i' } // query operator used - regular expression with case insensitivity option 'i'
    }

    /*BELOW: a mongo friendly map is created along with regular expression operators.
      Then the numericFilters passed in the url matching a corresponding regular expression operator
      is replaced by the mongo friendly corresponding operator within the map and 
      then a assigned to the parameter named "filters".
    */
    if(numericFilters){
        const operatorMap={
            '>': '$gt',
            '>=': '$gte',
            '=': '$eq',
            '<': '$lt',
            '<=': '$lte'
        }
        const regEx = /\b(<|>|>=|=|<|<=)\b/g
        let filters = numericFilters.replace(
            regEx,
            (match)=>`-${operatorMap[match]}-`
        )
        const options = ['price','rating'];        
        filters = filters.split(',').forEach((item)=>{//Split the parameters passed in query string by a comma and assigned to the filters variable into individual items consisting of three parts
            const[field,operator,value] = item.split('-') // Split each Item (individual query) part via the hyphen into a destructured array of three variables
            console.log(field, operator, value); // Shows the individual variables in the destructured array
            if (options.includes(field)){
                queryObject[field] = {[operator]:Number(value)} //Assign the individual variables to the query object except converting the value into a number
            }
        })         
    }

    console.log(queryObject);

    let result = Product.find(queryObject); 

    //Sort reference: https://mongoosejs.com/docs/queries.html  under executing section    
    if(sort){
        console.log("Passed from Query: ",sort); //display the sort key passed via the query
        const sortList1 = sort.split(','); //Split the key sory into an array
        console.log("Split Keys into Array: ",sortList1);
        const sortList = sort.split(',').join(' ');// They join them with a space so that the sort works on passed entries
        console.log("Sort List Joined no comma: ",sortList);
        result = result.sort(sortList);
    }
    else{  //default sort
        result = result.sort('createdAt')
    }
    if(fields){
        console.log("Fields passed: ", fields);
        fieldsList = fields.split(',').join(' ');
        console.log("Fields List joined no comma: ", fieldsList)
        result = result.select(fieldsList);
    }
    //console.log("The Query Object Set: " , result); //Shows what is found via the queryObject 
    const products = await result;
    res.status(200).json({Product_Count: products.length, products,});
};

///EXPORT Methods TO BE ACCSSIBLE

module.exports={ getAllProductsStatic, getAllProducts};