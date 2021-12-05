const day = ['monday','tuesday','friday','sunday','sunday']
console.log(day) // [ 'monday', 'tuesday', 'friday', 'sunday', 'sunday' ]

day.splice(2,0,'wednesday','thursday')
console.log(day)
// [
//     'monday',
//     'tuesday',
//     'wednesday',
//     'thursday',
//     'friday',
//     'sunday',
//     'sunday'
//   ]

day.splice(5,1,'saturday')
console.log(day) 
// [
//     'monday',
//     'tuesday',
//     'wednesday',
//     'thursday',
//     'friday',
//     'saturday',
//     'sunday'
//   ]

day.splice(6)
console.log(day) //[ 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday' ]