const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

// para remover um item expecifico da lista usamos o splice(a,b) a = indice que inicia a exclusão b= quantidade de indices que serão excluidos a partir do indici incial
nomes.splice(1, 2, "Rodrigo");

console.log(nomes);