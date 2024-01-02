export default function appendToEachArrayValue(array, appendString) {
    let idx = 0;
    for (let val of array) {
      array[idx] = appendString + val;
      idx += 1;
    }
  
    return array;
}
