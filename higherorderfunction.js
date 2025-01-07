const radius = [2,4,6,8];

const diameter = (item)=>{
    return item * item;
}

const area = (item)=>{
    return Math.PI * item * item;
}

const circumference = (item)=>{
    return 2 * Math.PI * item;
}

// const calculate = (item, logic)=>{
//     const output = [];
//     for (let i = 0; i < item.length; i++) {
//         output.push(logic(item[i]));
//     }
//     return output;
// }


// when we use this keyword we can not work with array function
Array.prototype.calculate = function(logic){
    const output = [];
    for (let i = 0; i < this.length; i++) {
        output.push(logic(this[i]));
    }
    return output;
}

// console.log(calculate(radius, diameter));
// console.log(calculate(radius, circumference));
// console.log(calculate(radius, area));

//now real world senario
console.log(radius.map(area));
console.log(radius.calculate(area));
