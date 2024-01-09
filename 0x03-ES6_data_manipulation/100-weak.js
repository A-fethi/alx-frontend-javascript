const weakMap = new WeakMap();

function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  const counter = weakMap.get(endpoint) + 1;
  weakMap.set(endpoint, counter);

  if (counter >= 5) {
    throw new Error('Endpoint load is high');
  }
}

export { queryAPI, weakMap };
