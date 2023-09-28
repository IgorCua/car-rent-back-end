const filterHandler = (obj) => {
    let resultObj = {};
    console.log(obj);
    for (const key in obj){
        console.log("OBJECT", key, obj[`${key}`]);
    }
 return resultObj;
}

module.exports = filterHandler;