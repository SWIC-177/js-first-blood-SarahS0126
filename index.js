const addCats = (cat1, cat2) => cat1 +cat2;

const cat = {
name: "Pickles",
age: 2,
isAdult: true
};

function createGreeting(individual) {
  return (salutation) => `${salutation}, ${individual.name}!!`;
}

const greetPickles = createGreeting(cat)
console.log(greetPickles("Howdy"));
console.log(greetPickles("Good Morning"));

const greetFluffy = createGreeting({
  name: "Fluffy",
  age: 4,
  isAdult: true
  });
console.log(greetFluffy("Hello"));
console.log(greetFluffy("Good Afternoon"));

// this is more!

function createMultiplier(factor) {
  return (number) => number * factor;
}
const double = createMultiplier(2);
console.log(double(5));
console.log(double(10));
