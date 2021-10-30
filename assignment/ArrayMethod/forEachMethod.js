let animal = ['ant','bird','cat']
animal.forEach(x=> console.log(x))
animal.forEach((x,index) => {
    if(index==0)
    console.log(x,index)
})
