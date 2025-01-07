const radius = [2,4,6,8];

const calculatediameter = (item)=>{
    const output = [];
    for (let i = 0; i < item.length; i++) {
        const calculate =  item[i]*item[i];
        output.push(calculate);
    }
    return output;
}

const calculatearea = (item)=>{
    const output = [];
    for (let i = 0; i < item.length; i++) {
        const calculate =  Math.PI * item[i] * item[i];
        output.push(calculate);
    }
    return output;
}


const calculatecircumference = (item)=>{
    const output = [];
    for (let i = 0; i < item.length; i++) {
        const calculate =  2 * Math.PI * item[i];
        output.push(calculate);
    }
    return output;
}


console.log(calculatediameter(radius));
console.log(calculatearea(radius));
console.log(calculatecircumference(radius));

