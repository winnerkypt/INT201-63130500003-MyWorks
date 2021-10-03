let randomNumber = Math.floor(Math.random()*10)+1;
function guess(yourNum){
    if (yourNum>randomNumber) {
        return `Too high. The Number is ${randomNumber}`;
    }else if(yourNum<randomNumber){
        return `Too low. The Number is ${randomNumber}`;
    }else{
        return `You WIN!`
    }
}
console.log(guess(2));

