//Objetos
let pessoa = {
    firstName: 'Seraphine',
    lastName: 'Harmony',
    idade: 17,
    corDosOlhos: 'Azul',
    hobbies: ['Cantar', 'Pintar', 'Compor'],
    endereco: {
        rua: 'Crystal street',
        numero: '4',
        cidade: 'Piltover',
        estado: 'Piltover e Zaun',
    },
};

console.log(pessoa);
console.log(pessoa.firstName);
console.log(pessoa.lastName, pessoa.idade);
console.log(pessoa.hobbies[1]);
console.log(pessoa.endereco.cidade);

//Atribuição via desestruturação
console.clear();

const {
    firstName,
    lastName,
    endereco: { cidade },
} = pessoa;
console.log(`${firstName} ${lastName} é da cidade ${cidade}`);

//Atribuição via desestruturação com arrays
console.clear();
const array = [6, 38, 98, 35, 87];
let [valor01, valor02, ...resto] = array;
console.log(valor01);
console.log(valor02);
console.log(resto);

let [valorA, valorB, valorC, ...restante] = array;
console.log(valorA);
console.log(valorB);
console.log(valorC)
console.log(restante);

//Array de objetos
console.clear();
const tarefas = [
    {
        id: 1,
        texto: 'dar banho no paixe',
        isCompleted: true,
    },
    {
        id: 2,
        texto: 'Levar o paixe pra passear',
        isCompleted: true,
    },
    {
        id: 3,
        texto: 'Consulta na verdureira',
        isCompleted: false,
    },
];

console.log(tarefas);
console.log(tarefas[1].texto);
console.log(tarefas[2].id, tarefas[2].texto, tarefas[2].isCompleted);

//transformar um array em JSON
console.log(JSON.stringify(tarefas));
//JSON
const tarefa_JSON = '[{"id":1,"texto":"Levar o lixo para
fora","isCompleted":true},{"id":2,"texto":"Encontrar com o
chefe","isCompleted":true},{"id":3,"texto":"Consulta no
dentista","isCompleted":false}]';
const objeto = JSON.parse(tarefa_JSON);
console.clear();
console.log(objeto);