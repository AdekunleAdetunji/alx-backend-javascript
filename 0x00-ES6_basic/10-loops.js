export default function appendToEachArrayValue(array, appendString) {
  let idx = 0;
  for (const val of array) {
    /* eslint-disable no-param-reassign */
    array[idx] = appendString + val;
    idx += 1;
  }

  return array;
}
