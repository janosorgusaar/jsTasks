const persons = [
    {
        name: 'Julia',
        age: 27
    },
    {
        name: 'Martin',
        age: 45
    },
    {
        name: 'Taavi',
        age: 17
    },
    {
        name: 'Emma',
        age: 2
    },
    {
        name: 'Ricky',
        age: 62
    }
]

const personsUpper = persons.map(
    person => Object.entries(person).map(
        ([key, value]) => ([key.toUpperCase(), value])
    )
);


console.log(personsUpper)