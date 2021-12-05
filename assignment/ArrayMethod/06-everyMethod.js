const familys = ["kanyapat","tanawat","nantapon","kanchart"]
console.log(familys.every((name)=>name == "kanyapat")) //false

const num = [10,15,600,2000,19]
console.log(num.every((check) => check > 0)) //true
console.log(num.every((check) => check > 100)) //false