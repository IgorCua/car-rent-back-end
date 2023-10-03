const filterHandler = (obj) => {
    // const reqObj = JSON.parse(obj);
    let resultObj = {
        
    };
    // console.log(obj);
    for (const key in obj) {
        // console.log('length', obj[`${key}`].length);
        // resultObj.$and = obj[`${key}`];
        // console.log('KEY', key)
        if (key !== "mileageFrom" && key !== "mileageTo") {
            console.log(key, obj[`${key}`]);
            if(obj[`${key}`].length !== 0) resultObj[`${key}`] = obj[`${key}`];
            // resultObj[`${key}`] = obj[`${key}`];
        };
        if (key === "mileageFrom" && obj[`${key}`].length > 0){
            if(!resultObj.$and){
                console.log("$and", resultObj)
            } 
        }; 
        // resultObj.$and.push({mileage: obj[`${key}`]});
        if (key === "mileageto" && obj[`${key}`].length > 0){
            if(!resultObj.$and){
                console.log("$and", resultObj)
            }
        };
        // resultObj.$and.push({mileage: obj[`${key}`]});
        
        // if (key === "mileageFrom") resultObj[`mileage`].$gte = +obj[`${key}`];
        // if (key === "mileageTo") resultObj[`mileage`].$lte = +obj[`${key}`];
        // if(key === 'mileageFrom') resultObj.mileage.$and.push({})
    } // console.log("OBJECT", key, obj[`${key}`]);
    // console.log("reqObj", JSON.parse(obj));
    // console.log("resultObj", resultObj);
    // console.log("resultObj MAKE", resultObj.make);
    return resultObj;
};

module.exports = filterHandler;