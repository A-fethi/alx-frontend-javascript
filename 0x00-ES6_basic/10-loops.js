export default function appendToEachArrayValue(array, appendString) {
  let Arr = array;
  for (let value of array) {
    let index = array.indexOf(value);
    Arr[index] = appendString + value;
  }

  return array;
}
