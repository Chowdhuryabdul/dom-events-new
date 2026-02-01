// To get the elemetn with the index of element?
// console.log(numbers[1]);

// numbers.push(20000)
// numbers.pop()
// numbers[2] = 40000

/* function findDuplicate(number){
    const vacantArray = [];
    for(let i = 0; i < number.length; i++){
        const element = number[i];
        if(vacantArray.includes(element) === false){
            vacantArray.push(element)
        }
    }return vacantArray
    
}
const numbers = [11, 12, 13, 14, 15, 16, 11, 12, 13, 14, 15,]; */
// const numbers1 = [2000, 3000, 4000];
// const merge = numbers.concat(numbers1);
// console.log(merge);

function findTheConsonenet(sentence){
    let vowel = 0;
    let consonent = 0;
    let space = 0;
    let vacantArray = []

    for(let item of sentence){
        if/* (item !== 'a'&& item !== 'e'&& item !== 'i' && item !== 'o'&& item !== 'u' && item !== ' ') */(!'aeiou'.includes(item) && item !== ' ß'){
            vacantArray.push(item)
            consonent ++
        }else if( item !== ' '){
            vowel ++
        }else{
            space ++
        }
    }return{
        vowel, consonent, space, vacantArray
    }
}
// console.log(findTheConsonenet('i live in Bnagladesh it is so beautiful land'));

const names = ['sebul', 'Abul', 'kabul', 'AAbul', 'sabul'];
const rearrangeName = names.sort();
// console.log(rearrangeName);

// const rearrange = numbers.sort();
// const rearrangeUptoBottom = [...numbers].sort(function(a, b){return a - b})
// const rearrangeBottomtoUP = [...numbers].sort(function(a, b){return b - a})
// console.log(rearrangeBottomtoUP, rearrangeUptoBottom);

/* function sumOfEvenNumber(number){
    let sum = 0;
    const vacantArray = [];
    for(let item of number){
        if(item % 2 === 0){
            vacantArray.push(item);
            sum = sum + item;
        }
    }return {sum, vacantArray};
}
const numbers = [20, 13, 222, 1, 4, 6, 21];
console.log(sumOfEvenNumber(numbers)); */

/* function findSumOfOddNumber(number){
    let sum = 0;
    const vacantArray = [];
    for(let item of number){
        if(item % 2 !== 0){
            vacantArray.push(item);
            sum += item;
        }
    }return {sum, vacantArray}
}

const numbers = [20, 13, 222, 1, 4, 6, 21];
console.log(findSumOfOddNumber(numbers)); */

/* function findTheLargestNumber(number){
    let largest = number[0];
    for(let item of number){
        if(item > largest ){
            largest = item
        }
    }return largest;
}
const numbers = [20, 13, 222, 1, 4, 6, 21];
console.log(findTheLargestNumber(numbers)); */

function findTheAverageOfEvenNumber(number){
    let vacantArray = [];
    for(let item of number){
       /*  if(item % 2 === 0){
            vacantArray.push(item);
        } */
       if(item % 2 !== 0){
        vacantArray.push(item)
       }
    }
    let sum = 0;
    for(let item of vacantArray){
        sum += item;
    }
    const findlength = vacantArray.length;
    const average = sum / findlength;
    return {average, vacantArray}
}

const numbers = [20, 13, 222, 1, 4, 6, 21];
// console.log(findTheAverageOfEvenNumber(numbers));

function isEven(nmbr){
    if (nmbr % 2 === 0){
        return true
    }else{
        return false
    }
}
// console.log(isEven(4));

/* function defalutParameter(a, b = 3){
    return a + b;
}console.log(defalutParameter(4)); */

/* function collectingThings(a, ...b){
    console.log(a);
    console.log(b);
};
console.log(collectingThings(1,2,3,4,5,6,7,8,9)); */

const greet = () => {
    console.log('hello world');
}
greet();

const square = nmbr => nmbr * nmbr;
console.log(square(2));

const add = (a, b) => a + b;
console.log(add(2, 3));