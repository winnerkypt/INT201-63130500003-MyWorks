function display(elementId,value){
    document.getElementById(elementId).innerHTML=value
}
function toCelsius(fahrenheit){
  
    let value=(fahrenheit-32)*5/9
    return value.toFixed(2)+" celsius"
}
function toFahrenheit(celsius){
   
    let value=9/5*celsius+32
    return value.toFixed(2)+" fahrenheit"
}
function toCelsiusProgram(value){
    alert(toCelsius(value))
}
function toFahrenheitProgram(value){
    alert(toFahrenheit(value))
}