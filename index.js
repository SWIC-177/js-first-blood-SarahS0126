function welcome(name) {
  return `Welcome, ${name}!!`;
}
function processPerson(name, func) {
  return func(name);
}
console.log(processPerson(`Sarah`,welcome));
