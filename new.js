// function imAboutToExplodeWithExcitement(n){
//     // ADD CODE HERE
//      while (n > 0) {
//        n -= 1
//   }
//   return n

//   }
//   console.log(imAboutToExplodeWithExcitement(10))


const array = [1,2,3];

function update(callBack) {
    const outPut = [];
    for (let i=0; i< array.length; i++) {
       const updated = callBack(array[i])
       outPut.push(updated)
    }
  return outPut
}

function addTwo(num) {
   return num += 2
}

function mutiply2(num) {
    return num *= 2
}

function stringfy(num){
    return num.toString()
}

console.log(update(addTwo))
console.log(update(mutiply2))



const newArray = [];
// loop over the array and for each array add s to the sstring and push that into the new array
function pluralize (array) {
  for(let i =0; i < array.length; i++) {
    const updatedWord = array[i] + "s"
    newArray.push(updatedWord)
}
  return newArray
}
// Uncomment these to check your work!
const animals = ["dog", "cat", "tree frog"];
const empty = []
console.log(pluralize(animals)); // should log: ["dogs", "cats", "tree frogs"]
console.log(pluralize(empty))


// ADD CODE HERE

// create a  function foreach that has two parmeters an aray and a 
function forEach(array, callback) {
    for(let i=0; i < array.length; i++) {
        callback(array[i])
    }
}


function map(arr,call) {

  let newArray = [];
  forEach(arr, function(elem){
    
    newArray.push(call(elem) )
  })
 return newArray
}
// Uncomment these to check your work!
console.log(typeof forEach); // should log: 'function'
forEach(['a','b','c'], i => console.log(i)); // should log: 'a', 'b', 'c'
console.log(typeof map); // should log: 'function'
console.log(map([3,4,5], n => n - 2)); // should log: [1, 2, 3]


function eitherFilter(array, callback1, callback2) {
    // ADD CODE HERE
    const result = []
    for(let i=0; i< array.length; i++) {
      if(callback1(array[i]) === 'true' || callback2(array[i]) === 'true') {
        result.push(array[i])
      }
        
  }
    return result
  }
 )
  // Uncomment these to check your work!
  const arrOfNums = [10, 35, 105, 9];
  const integerSquareRoot = n => Math.sqrt(n) % 1 === 0;
  const over100 = n => n > 100;
  console.log(eitherFilter(arrOfNums, integerSquareRoot, over100)); // should log: [105, 9]
 