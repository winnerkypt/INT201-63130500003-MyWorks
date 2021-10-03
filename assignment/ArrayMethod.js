let fruits = ['Apple', 'Banana']
console.log(fruits.length) // 2 (ขนาดของอาเร)

let first = fruits[0] // Apple (เอาตัวแรก)
let last = fruits[fruits.length - 1] // Banana (ตัวสุดท้ายในอาเร)

fruits.forEach(function(item, index) {
    console.log(item, index)    
  }) 
fruits.forEach((item ,i) => console.log(item ,i))   // Apple 0  // Banana 1

fruits.push("Orange") //เพิ่มลงท้ายสุดของอาเร

fruits.pop(); //เอาค่าสุดท้ายออกจากอาเร

fruits.shift(); //เอาค่าแรกออกจากอาเร

fruits.unshift("Apple"); //เพิ่มลงไปที่ช่องแรกของอาเร

console.log(fruits.indexOf("Apple")) //ดูว่าค่านั้นอยู่ช่องที่เท่าไหร่

fruits.splice(0,1,'grape') //ตำแหน่งที่จะลบ //จำนวนที่จะลบ(ไปทางขวา) //ที่เพิ่มเข้ามาแทนที่

let copyFruit = fruits.slice(); //copy array
console.log(copyFruit)

console.log('---------------------------------------------')

let num = [1,2,3,4,5];
let plusTwo = num.map((a)=>a+2)
console.log(num)
console.log(plusTwo)

console.log(fruits.concat(num))
console.log(num.every((a) => a<6))

console.log(num.fill(6,4,5)) //น่าจะเหมือนเปลี่ยนค่า อันแรกคือเลี่จะปลี่ยน สองคือตำแหน่งเริ่ม อีกอันก็ตำแหน่งจบ
console.log(num.includes(10))
console.log(num.find((a)=>a>1)) //เจอค่าไหนรีเทินออกมาเลย
console.log(num.reverse())
console.log(num.filter(a=>a>1)) //คัดค่าเอามากกว่า 1
console.log(num.join('')) //หาอะไรมาคั่น
console.log(num.reduce(a=>a<0))

let num2 = [1,2,3,4,5]
console.log(num2s.reduce((a,b)=>a+b))
