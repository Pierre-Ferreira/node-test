module.exports.add = (a, b) => a + b;

module.exports.asyncAdd = (a, b, callback) => {
  setTimeout(() => {
    callback(a + b)
  }, 1000)
}

module.exports.square = (x) => x * x;
module.exports.setName = (user, fullName) => {
  let names = fullName.split(' ');
  let newUser = Object.assign({}, user)
  newUser.firstName = names[0];
  newUser.lastName = names[1];
  return newUser;
}
