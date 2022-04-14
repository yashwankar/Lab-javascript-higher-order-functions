console.log("Yash Wankar - Prograd ID : 8779")
// Array
const foods = ["pizza", "burger", "fingerShips", "donuts", "springRoll"];

//#1 Array Slice
console.log("Funtion #1 : Array Slice");
function slice_food(foods,x,y)
{
    var modfiedFood = foods.slice(x,y);
    console.log(modfiedFood);
}
slice_food(foods,1,4);


//#2: Array Splice
console.log("Funtion #2 : Array Splice")
function splice_food(foods,x,y)
{
    let modifiedFoods = foods.splice(x,y,"noodles","icecream");
    console.log(modifiedFoods);
}
splice_food(foods,2,0);


//#3: Filter
console.log("Funtion #3 : Filter")
const numberArray= [12,324,213,4,2,3,45,4234];
console.log(...numberArray)
console.log("Even numbers in this array are:")
let isEven = (numberArray) => {
    var even=numberArray.filter(item => {
        return item % 2== 0;
    });
   console.log(even);
}; 
isEven(numberArray);
console.log("Prime numbers in this array are:")
let prime = (numberArray) =>{
    let p =numberArray.filter(data => {
    for(var i=2;i<=Math.sqrt(data);i++){
        if(data % i == 0)
            return false;
    }
    return true;
    });
   console.log(p);
};
prime(numberArray);

//#4: Reject
console.log("Funtion #4 : Reject")
function reject(numberArray) {
    let nonprime = numberArray.filter((number) => {

        for (var i = 2; i <= Math.sqrt(number); i++){
            if (number % i == 0) 
                return true;
        }
        return false;
    });
    console.log(nonprime);
}
reject(numberArray);


//#5: Lambda
console.log("Funtion #5 : Lambda")
let e = numberArray.filter(data=> data % 2==0);
console.log(e);


//#6: Map
console.log("Funtion #6 : Map")
const myArr = [11, 34, 20, 5, 53, 16];
console.log(...myArr)
var newArray = myArr.map(data => data*data);
console.log(newArray);
  
//#7: Reduce
console.log("Funtion #7 : Reduce")
var myArray = [2, 3, 5, 10];
console.log(myArray)
var mul=myArray.reduce((a,b) => a*b);
console.log(mul);