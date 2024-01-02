export default function appendToEachArrayValue(array, appendString) {
  const Arr = array;
  for (const value of array) {
    const index = array.indexOf(value);
    Arr[index] = appendString + value;
  }

  return array;
}
