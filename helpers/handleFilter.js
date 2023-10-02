const filterHandler = (obj) => {
    // const reqObj = JSON.parse(obj);
    let resultObj = {
        make: "",
        rentalPrice: "",
        mileage: "",
    };
    // console.log(obj);
    for (const key in obj) {
        // console.log('length', obj[`${key}`]);
        if (key !== "mileageFrom" || key !== "mileageTo");
            resultObj[`${key}`] = obj[`${key}`];
        // if (key === "mileageFrom") resultObj[`mileage`].$gte = +obj[`${key}`];
        // if (key === "mileageTo") resultObj[`mileage`].$lte = +obj[`${key}`];
        // if(key === 'mileageFrom') resultObj.mileage.$and.push({})

        // console.log("OBJECT", key, obj[`${key}`]);
    }
    // console.log("reqObj", JSON.parse(obj));
    console.log("resultObj", resultObj);
    console.log("resultObj MAKE", resultObj.make);
    return resultObj;
};

module.exports = filterHandler;