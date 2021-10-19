function findIndex(arr = []) {
    function newItem(item) {
        return arr.indexOf(item)
    }
    return newItem;
}

let fruit = findIndex(['Apple', 'Banana', 'Mango', 'Grape', 'Durian', 'Cherry', 'Gooseberry'])
// console.log(fruit('Mango'));

let animal = findIndex(['Cat', 'Dog', 'Bird', 'Tiger', 'Lion', 'Shrimp', 'Crab', 'Snake'])
// console.log(animal('Crab'));

let country = findIndex(['Thailand', 'Vietnam', 'USA', 'England', 'Sweden', 'Russia', 'Singapore', 'Indonesia', 'Japan', 'Philippines'])
// console.log(country('USA'));
export {fruit,animal,country}