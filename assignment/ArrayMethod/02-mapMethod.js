let arr1 = [1, 2, 3]

// แบบใช้ map
let result1 = arr1.map(x => x * 2)
console.log(result1); //[ 2, 4, 6 ]

// แบบไม่ใช้ map
let arr = []
for (let index = 0; index < arr1.length; index++) {
    arr[index] = arr1[index]*2
}console.log(arr) //[ 2, 4, 6 ]


let number1 = [4, 16, 64]
let result2 = number1.map(Math.sqrt)
console.log(result2); //[ 2, 4, 8 ]

let myName = ['winner','kanyapat']
let upperName = myName.map(x => x.toUpperCase())
console.log(upperName); //[ 'WINNER', 'KANYAPAT' ]
