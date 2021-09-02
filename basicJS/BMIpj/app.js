var weight=prompt("น้ำหนักของคุณกี่กิโลกรัม")
var height=prompt("ส่วนสูงของคุณกี่เซนติเมตร")

function display(elementId,bmi){
    document.getElementById(elementId).innerHTML=bmi
}
function toBMI(){
    let bmi = weight/((height/100)*(height/100))
    return bmi.toFixed(1)
}
function program(){
    if(toBMI()>=30){
        display("result","ค่า BMI ของคุณ คือ "+toBMI()+" (โรคอ้วนอันตราย)")
    }else if(29.9>=toBMI()&&toBMI()>=25.0){
        display("result","ค่า BMI ของคุณ คือ "+toBMI()+" (โรคอ้วน)")
    }else if(24.9>=toBMI()&&toBMI()>=23.0){
        display("result","ค่า BMI ของคุณ คือ "+toBMI()+" (น้ำหนักเกิน)")
    }else if(22.9>=toBMI()&&toBMI()>=18.5){
        display("result","ค่า BMI ของคุณ คือ "+toBMI()+" (สมส่วน)")
    }else{
        display("result","ค่า BMI ของคุณ คือ "+toBMI()+" (น้ำหนักต่ำกว่าเกณฑ์)")
    }
}

display("weight","น้ำหนัก : "+weight+" กิโลกรัม")
display("height","ส่วนสูง : "+height+" เซนติเมตร")
