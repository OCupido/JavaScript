// Método getElementById
let titulo = document.getElementById('titulo');
//Alterando o conteudo do elemento
titulo.innerHTML = 'Oinhê, bãõ!?';
//configurando o estilo css do elemento
titulo.style.textAlign = 'center';
titulo.style.backgroundColor = '#FFFAF0';
titulo.style.borderBottom = 'solid 3px #FF69B4';
titulo.style.margin = '20px';

//metodo getElementByClassName
let items = document.getElementsByClassName('item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'Inhaê!!';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = '#B0E0E6'

for (let i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = '#E6E6FA'
}

//Método getElementByTagName
let li = document.getElementsByTagName('li');
console.log(li);

for (let i = 0; i < li.length; i++) {
    if (i % 2) li[i].style.backgroundColor = '#E6E6FA';
    else li[i].style.backgroundColor = '#E0FFFF';
}

//Método getElementByName
let nome = document.getElementsByName('fitem');
console.clear();
console.log(nome);
nome[0].textContent = 'Xauuôô!!';
nome[0].style.backgroundColor = '#F08080'
nome[1].styleContent = 'Bãõõ??';
nome[1].style.backgroundColor = '#4B0082'

//remove elemento do DOM
let item2 = document.getElementById('item2');
item2.remove();

//retornando o elemento
let list = document.getElementById('items');
let item1 = document.getElementById('item1');
lista.insertBefore(item2, item1,nextSibling);

//alterando o estilo da lista
let ul = document.getElementById('items');
ul.style.listStyle = 'none';

//marcadores nunericos
ul.style.listStyle = 'decimal inside';