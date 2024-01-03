function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    if (promise === true) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(Error({ }));
    }
  })
    .then(() => {
      console.log('Got a response from the API');
    })
    .catch(() => {
      console.log('Got a response from the API');
    });
}

export default handleResponseFromAPI;
