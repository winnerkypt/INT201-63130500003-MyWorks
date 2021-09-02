let score = prompt("กรุณากรอกคะแนนของคุณ")

let grade
if(score>=85){
    grade = "A"
}else if(score>=70){
    grade="B"
}else if(score>=60){
    grade="C"
}else if(score>=50){
    grade="D"
}else{
    grade="F"
}
document.getElementById("score").innerHTML = score
document.getElementById("grade").innerHTML = grade
