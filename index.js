
const body = document.querySelector("body");

//CRIANDO ELEMENTOS
const main = document.createElement("main");
const section = document.createElement("section");
const description = document.createElement("ul");
const itens = document.createElement("ul");
const soma = document.createElement("ul");
const button = document.createElement("button");
const description_li1 = document.createElement("li");
const description_li2 = document.createElement("li");
const itens_li1 = document.createElement("li");
const itens_li2 = document.createElement("li");
const soma_li1 = document.createElement("li");
const soma_li2 = document.createElement("li");

//CLASSES
description.id = ("description");
itens.classList = ("itens");
soma.id = ("soma");
soma_li2.id = ("li_2")

//DEFININDO PARETESCO
body.appendChild(main);
main.appendChild(section)
section.appendChild(description)
section.appendChild(itens)
itens.appendChild(itens_li1)
itens.appendChild(itens_li2)
main.appendChild(soma)
soma.appendChild(soma_li1)
soma.appendChild(soma_li2)
main.appendChild(button)

//ADICIONANDOTEXTO
button.innerText = "Finalizar compra"
itens_li1.innerText = "Item"
itens_li2.innerText = "Valor"
soma_li1.innerText = "Total"
soma_li2.innerText = ""

//VARIÁVEIS
const products = [
    {
        id: "laranja",
        name: "Laranja",
        price: 4.00
    },
    {
        id: "banana",
        name: "Banana",
        price: 5.00
    },
    {
        id: "maçã",
        name: "Maçã",
        price: 6.00
    },
    {
        id: "limão",
        name: "Limão",
        price: 7.00
    },
    {
        id: "coco",
        name: "Coco",
        price: 8.00
    }
]
//FUNÇÃO
for(let i = 0; i < products.length; i++){
    const figureCard = createCard(products[i])
    section.appendChild(figureCard)
}
function createCard(card){
    const itens = document.createElement("ul");
    itens.classList = "itens"
    const itens_li1 = document.createElement("li");
    const itens_li2 = document.createElement("li");
    itens_li1.innerText = card.name
    itens_li2.innerText = card.price
 itens.appendChild(itens_li1)
 itens.appendChild(itens_li2)
    return itens
}
function shopingCar (item) {
    const li_2 = document.getElementById("li_2")
    let result = 0;
    for(let i = 0; i < item.length; i++){
       result += products[i].price

    }
    soma_li2.innerText = result
    return result = soma
}
shopingCar(products)


