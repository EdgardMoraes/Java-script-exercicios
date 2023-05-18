const alunos = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

console.log(alunos)

// Ao dividir o Array acima com o slice, ele pega do indice 0 até o indice 10, porém não acrescenta o indice 10 para no indice 9.
const sala1 = alunos.slice(0, 10);

// Ao criar o grupo com os elementos restantes, não precisamo inserir o indice final, pois, com o valor em branco o JS entende que é pra ir até o final.
const sala2 = alunos.slice(10);

console.log(sala1)
console.log(sala2)
