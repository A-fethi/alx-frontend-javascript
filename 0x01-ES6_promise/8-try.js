export default function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    throw Error('cannot divide by 0');
  }
  try {
    return numerator / denominator;
  } catch (e) {
    console.error(e);
  }
  // adding a return statement here is to satisfy an ESLint rule
  return undefined;
}
