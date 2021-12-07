import { products } from "./product.js";

function showProduct(product) {
    const detail = document.querySelector('#product')

    const divEle = document.createElement('div')
    divEle.id = product.productId
    detail.appendChild(divEle)

    const title = document.createElement('h2')
    title.textContent = product.productName
    divEle.appendChild(title)

    const priceProd = document.createElement('p')
    priceProd.textContent = product.price
    divEle.appendChild(priceProd)

    const bottonEle = document.createElement('button')
    bottonEle.setAttribute('type','botton')
    bottonEle.addEventListener('click',addcart)
    bottonEle.textContent = 'add to cart'
    divEle.appendChild(bottonEle)
}

products.forEach((product) => {
    showProduct(product);
  });

function addcart() {
    console.log('add แล้ว')
}
