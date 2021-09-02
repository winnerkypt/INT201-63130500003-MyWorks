let qrt = prompt("จำนวนของสินค้า")
let sum = 0
for(var i=1;i<=qrt;i++){
    var itemPrice = prompt("ราคาสินค้าชิ้นที่ "+i)
    document.getElementById("price-list").innerHTML += "รายการสินค้าชิ้นที่ "+i+" : "+itemPrice+"บาท"+"<br>"
    sum = sum+parseFloat(itemPrice)
}
document.getElementById("result").innerHTML = "ราคารวม "+sum+" บาท"