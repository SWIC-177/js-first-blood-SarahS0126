const person = {
};

function updatePersonName(p, newName) {
    const p2Update = { ...p };
    
    p2Update.name = newName;
    return p2Update;
}

const updatedPerson = updatePersonName(person, "Jane Doe");
console.log(updatedPerson);
