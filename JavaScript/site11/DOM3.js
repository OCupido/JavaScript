//método queryLector
let paragrafo = document.querySelector('p');
paragrafo.style.background = '#ADD8E6';

//busca a tag e a classe
let parClasse = (document.querySelector('p.exemplo').innerHTML = 'mudei o texto aqui');

//busca somente a classe
let elemento = (documento.querySelector('.myclass').style.fontSize = 'x-large');

//função chamada pelo evento onclick
const Clique = () => {
    document.querySelector('#my-span').style.backgroundColor = '#FF4500';
};

listaElementos = document.querySelectorAll(seletores);

//método querySelectorAll
let listali = document.querySelectorAll('li');
for (i = 0; i < listali.length; i++) {
    listaLi[i].style.border = '1px solid #DC143C';
    listaLi[i].style.padding = '3px';
}
console.log(listaLi);

// Busca por id
let myLi = document.querySelectorAll('#my-li');
myLi.forEach((li) => (li.innerHTML = 'Mudou aqui!'));

//busca por classe
let myItem = document.querySelectorAll('.item');
myItem.forEach((item) => (item.style.backgroundColor = '#FFFFE0'));

//busca por elemento e classe
let myTeste = document.querySelectorAll('li.teste');
myTeste.forEach((element) => (element.style.color = '#FFF'));
