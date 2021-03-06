function boss(){
  let matriz = [], nomes = [];
  cadastra(matriz, nomes)
  consultaMedia(matriz, nomes)
  mediaProva(matriz)
  maiorNota(matriz, nomes)
  console.log(matriz)
}

const cadastra = (matriz, nomes) =>{
  for(let i=0;i<3;i++){
    nomes.push({nome:prompt('Digite o nome do aluno:'), //adicionando nome e RG para cada aluno
    rg:prompt('Digite o numero do RG:'),
    media:0
    })
    matriz.push([])
    for(let j=0; j<4;j++){ //itera apenas os valores das provas
      matriz[i][j] = Number(prompt(`Digite a nota da prova ${j+1}`))
    }
  }
  console.log(`Alunos cadastrado com sucesso`)
}

const consultaMedia = (matriz, nomes) =>{
  let mediaTotal = 0
  for(let i=0;i<3;i++){
    for(let j=0; j<4;j++){ 
      nomes[i].media+=matriz[i][j]
    }
    nomes[i].media/=4
    mediaTotal += nomes[i].media/4
    console.log(`Média do Aluno ${nomes[i].nome}: ${nomes[i].media}`)
  }
  console.log(`Média total da turma: ${mediaTotal/3}`)
}

const mediaProva = matriz =>{ // busca pelas colunas e não pelas linhas
  for(let j=0; j<4;j++){
    let media=0;
    for(let i=0;i<3;i++){
      media+=matriz[i][j] 
    }
    console.log(`Média da Prova ${j+1}: ${media/3}`)
  }
}

const maiorNota = (matriz, nomes) => { // busca pelas colunas
  for(let j=0; j<4;j++){
    let maior=0, nome;
    for(let i=0;i<3;i++){
      if(matriz[i][j]>maior){
        maior=matriz[i][j]
        nome = nomes[i].nome
      }
    }
    console.log(`${nome} teve a maior nota da Prova ${j+1}: ${maior}`)
  }
}

boss()