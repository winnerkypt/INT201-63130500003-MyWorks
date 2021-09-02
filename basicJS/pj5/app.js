let round = prompt("คุณจะเล่นกี่รอบ ??")
for (var i = 1; i <= round; i++) {
    var answer = prompt("หัวหรือก้อย พิมพ์มาเยย")
    var random_answer = " "
    if (Math.floor(Math.random()*10) <= 4) {
        random_answer = "หัว"
    } else {
        random_answer = "ก้อย"
    }
console.log(random_answer)
    if(answer==random_answer){
        alert("ตอบถูกจ้า")
    }else{
        alert("ตอบผิดน้าา")
}
} 