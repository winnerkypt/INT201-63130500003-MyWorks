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
alert(toCelsius(150))
display("toCelsius",toCelsius(150))
alert(toFahrenheit(65))
display("toFahrenheit",toFahrenheit(65))