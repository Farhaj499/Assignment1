let num:number[]=[45,23,5,54,65,43,24,65,24,65,44,34]
console.log("Original Array : "+num);

console.log("\n");
num.push(41);
console.log("After Push : "+num);

console.log("\n");
num.pop();
console.log("After Pop : "+num);

console.log("\n");
num.shift();
console.log("After Shift : "+num);

console.log("\n");
num.unshift(65);
console.log("After Unshift : "+num);

console.log("\n");
let newArr:number[]=num.slice(2,7)
console.log("Original Array : "+num);
console.log("New Slice Array : "+newArr);

console.log("\n");
newArr=num.splice(2,2,7);
console.log("Original Array : "+num);
console.log("Deleted Numbers in Array : "+newArr);

export{}