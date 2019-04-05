let AJV = require('ajv');
let ajv = AJV({allErrors:true});

exports.ValidateJsonSchema = function(userSchema, userData){
    let complileSchema = ajv.compile(userSchema);
    let result = complileSchema(userData);
    if(result){
        console.log("Schema Validation is Successfull");
    }
    else{
        throw new Error("Issue in Validation of Schema.\Schema is : "+JSON.stringify(userSchema)+"\n Response is : "+JSON.stringify(userData));
    }
};