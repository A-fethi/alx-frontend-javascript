function getResponseFormatAPI() {
  return new Promise((resolve, reject) => {
    const connect = true;
    if (connect) {
      resolve('Connection Established');
    } else {
      reject(Error('Connection Failed'));
    }
  });
}

export default getResponseFormatAPI;
