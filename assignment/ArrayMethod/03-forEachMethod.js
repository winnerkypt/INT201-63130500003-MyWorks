let animal = ['ant','bird','cat']
animal.forEach(x=> console.log(x)) 
// ant
// bird
// cat


animal.forEach((x,index) => {
    if(index==0)
    console.log(x,index) //ant 0
})
