let num = prompt("กรอกเลขที่ต้องการซื้อ :")
// document.getElementById("get").innerHTML = num
let randomNum  = Math.floor(Math.random()*100)
document.getElementById("random").innerHTML = randomNum
if(num==randomNum){
    document.getElementById("result").innerHTML = "ยินดีด้วย!! คุณถูกรางวัล"
}else{
    document.getElementById("result").innerHTML = "เสียใจด้วย คุณไม่ถูกรางวัล"
}
console.log(1=="1")