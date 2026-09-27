function add(a, b) {
  return a + b;
}

function getMessage() {
  return "CI/CD pipeline is working!";
}

console.log(getMessage());

module.exports = {
  add,
  getMessage
};