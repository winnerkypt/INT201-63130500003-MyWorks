let q1 = {
  question: "What is q1?",
  choice: ["a", "b"],
  answer: "a",
};
let q2 = {
  question: "What is q2?",
  choice: ["a", "b"],
  answer: "b",
};
let player = {
  name: "",
  question: [],
  answer: [],
  point: 0,
};

function setPlayer(pName){
    return player.name = pName;
}
function chooseQuestion(pQuestion){
    return player.question = pQuestion;
}
function chooseAnswer(pAnswer){
    return player.answer=pAnswer;
}
function checkAnswer(){
    if(player.question[0].answer==player.answer[0]){
        return player.point++;
    }
}

setPlayer('Kanyapat')
chooseQuestion(['q1']);
chooseAnswer(['a','a'])
checkAnswer()

console.log(player)

console.log(player.question[0].answer==player.answer[0])