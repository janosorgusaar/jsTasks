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
const boyNames = ['Martin', 'Taavi', 'Ricky']
const girlNames = ['Julia', 'Emma']
const people = {
    boys: persons.filter(person => boyNames.includes(person.name)),
    girls: persons.filter(person => girlNames.includes(person.name)),
}
const youngpeople = {
    boys: persons.filter(person => boyNames.includes(person.name) && person.age < 30),
    girls: persons.filter(person => girlNames.includes(person.name) && person.age < 30),
}
console.log(people)
console.log(youngpeople)