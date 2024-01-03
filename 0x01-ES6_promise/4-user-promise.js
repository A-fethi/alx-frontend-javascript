function signUpUser(firstName, lastName) {
  return new Promise((resolve) => {
    const object = {
      firstName,
      lastName,
    };
    resolve(object);
  });
}

export default signUpUser;
