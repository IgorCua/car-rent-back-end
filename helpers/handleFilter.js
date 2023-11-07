const filterHandler = (obj) => {
    let resultObj = {};
    
    for (const key in obj) {
        if (key !== "mileageFrom" && key !== "mileageTo") {
            if(obj[`${key}`].length !== 0) resultObj[`${key}`] = obj[`${key}`];
        };
        
        if (key === "mileageFrom" && obj[`${key}`].length > 0){
            if(resultObj.$and) resultObj.$and.push({mileage: {$gte: +obj[`${key}`]}});
            
            if(!resultObj.$and){
                resultObj.$and = [];
                resultObj.$and.push({mileage: {$gte: +obj[`${key}`]}});
            }
        }; 
        
        if (key === "mileageTo" && obj[`${key}`].length > 0){
            if(resultObj.$and) resultObj.$and.push({mileage: {$lte: +obj[`${key}`]}});
            
            if(!resultObj.$and){
                resultObj.$and = [];
                resultObj.$and.push({mileage: {$lte: +obj[`${key}`]}});
            }
        };
    }
    
    return resultObj; 
};

module.exports = filterHandler;