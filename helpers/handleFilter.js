const filterHandler = (obj) => {
    let resultObj = {};
    for (const key in obj) {
        if (key !== "mileageFrom" && key !== "mileageTo") {
            console.log("other", key, obj[`${key}`]);
            if(obj[`${key}`].length !== 0) resultObj[`${key}`] = obj[`${key}`];
        };
        
        if (key === "mileageFrom" && obj[`${key}`].length > 0){
            console.log('KEY', key)
            if(resultObj.$and) resultObj.$and.push({mileage: {$gte: +obj[`${key}`]}});
            
            if(!resultObj.$and){
                resultObj.$and = [];
                resultObj.$and.push({mileage: {$gte: +obj[`${key}`]}});
            }
        }; 
        if (key === "mileageTo" && obj[`${key}`].length > 0){
            console.log('KEY', key)
            if(resultObj.$and) resultObj.$and.push({mileage: {$lte: +obj[`${key}`]}});
            
            if(!resultObj.$and){
                resultObj.$and = [];
                resultObj.$and.push({mileage: {$lte: +obj[`${key}`]}});
            }
        };
    }
    
    console.log("resultObj", resultObj)
    return resultObj;
};

module.exports = filterHandler;