const fruits = ['mango','orange','grape','banana','orange']

console.log(fruits.slice(1)) //[ 'orange', 'grape', 'banana', 'orange' ]
console.log(fruits.slice(0,3))//[ 'mango', 'orange', 'grape' ]

console.log(fruits.slice(-3))//[ 'grape', 'banana', 'orange' ]
console.log(fruits.slice(-3,-1))//[ 'grape', 'banana' ]

console.log(fruits.slice(0,-3))//[ 'mango', 'orange' ]
console.log(fruits.slice(-5,2))//[ 'mango', 'orange' ]
