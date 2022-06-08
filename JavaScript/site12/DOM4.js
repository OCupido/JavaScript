//método querySelector
const btn = document.querySelector('.btn');
btn.style.background = 'cian';

//busca pelos elementos do formulário
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('name');
const emailInput = document.querySelector('#email');
const horario = document.querySelector('#horario');
const msg = document.querySelector('.msg');
const msg_email = document.querySelector('.msg_email');
const userList = document.querySelector('#users');

//Método addEventListener
myForm.addEventListener('submit', inSubmit);

// Função onSubmit
function onSubmit(e) {
e.preventDefault();

// console.log(nameInput.value);
if (nameInput.value === '' || emailInput.value === '') { // alert('Por favor, preencha os dados.');
msg.classList.add('error');
msg.innerHTML = 'Por favor, preencha os dados.';
setTimeout(() => msg.remove(), 3000);
} else {

// console.log('sucess');
const li = document.createElement('li');
li.appendChild(
document.createTextNode(
`${nameInput.value} : ${emailInput.value} : ${horario.value}`
)
);
userList.appendChild(li);

// Limpa o formulário
nameInput.value = '';
emailInput.value = '';
horario.getElementsByTagName('option')[0].selected = 'selected';
nameInput.focus(); //Coloca o foco no elmento
}
}