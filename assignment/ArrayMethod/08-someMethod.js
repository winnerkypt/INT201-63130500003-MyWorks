const familys = ["kanyapat","tanawat","nantapon","kanchart"]
console.log(familys.some((name)=>name == "kanyapat")) //true

const num = [10,15,600,2000,19]
console.log(num.some((check) => check > 0)) //true
console.log(num.some((check) => check > 100)) //true
console.log(num.some((check) => check == 100)) //false