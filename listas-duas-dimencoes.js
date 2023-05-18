const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const alunosEMedias = [alunos, medias];

console.log(alunosEMedias);

console.log(
    `A aluna da posição 1 da lista de alunos é: ${alunosEMedias[0][1]}.
    A nota dessa aluna é ${alunosEMedias[1][1]}.
    `
);