const animal = ['ant','bird','elephant','mango']
animal.fill('cat',3) 
console.log(animal) // [ 'ant', 'bird', 'elephant', 'cat' ]

animal.fill('fan',1,3)
console.log(animal) // [ 'ant', 'fan', 'fan', 'cat' ]

const num2 = animal.fill(2)
console.log(animal) // [ 2, 2, 2, 2 ]
console.log(num2) // [ 2, 2, 2, 2 ]