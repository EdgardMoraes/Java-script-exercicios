const alunos = ["João", "Juliana", "Ana", "Caio"];

function buscarAluno(aluno){
    if(alunos.includes(aluno)){
        const indice = alunos.indexOf(aluno);
        console.log(`O aluno ${aluno} está presente e seu indice é ${indice}`);
    }else{
        console.log(" Aluno não encontrado")
    }
}

buscarAluno("Juliana")