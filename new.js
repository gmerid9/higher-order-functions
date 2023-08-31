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
console.log(update(stringfy))