const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const alunosEMedias = [alunos, medias];

function buscandoAlunoEMedia(aluno){
    if (alunosEMedias[0].includes(aluno)){
        const indice = alunosEMedias[0].indexOf(aluno);
        const mediaAluno = alunosEMedias[1][indice];
        console.log(`${aluno} está matriculado(a) e sua média é ${mediaAluno}`);
    }else{
        console.log("Aluno não matriculado");
    }
}

buscandoAlunoEMedia("Ana");