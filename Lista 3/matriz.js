function boss(){
  let matriz = [];
  for (let i = 0; i < 3; i++) {
    matriz.push([])
  }
  cadastra(matriz)
  consultaMedia(matriz)
  mediaProva(matriz)
  maiorNota(matriz)
  console.log(matriz)
}

const cadastra = matriz =>{
  for(let i=0;i<3;i++){
    matriz[i][0] = prompt('Digite o nome do aluno:') //adicionando nome e RG para cada aluno
    matriz[i][1] = prompt('Digite o numero do RG:')
    for(let j=2; j<6;j++){ //itera apenas os valores das provas
      matriz[i][j] = Number(prompt(`Digite a nota da prova ${j-1}`))
    }
  }
  console.log(`Alunos cadastrado com sucesso`)
}

const consultaMedia = matriz =>{
  let mediaTotal = 0
  for(let i=0;i<3;i++){
    let media=0;
    for(let j=2; j<6;j++){
      media+=matriz[i][j] 
    }
    mediaTotal += media/4
    console.log(`Média do Aluno ${matriz[i][0]}: ${media/4}`)
  }
  console.log(`Média total da turma: ${mediaTotal/3}`)
}

const mediaProva = matriz =>{ // busca pelas colunas e não pelas linhas
  for(let j=2; j<6;j++){
    let media=0;
    for(let i=0;i<3;i++){
      media+=matriz[i][j] 
    }
    console.log(`Média da Prova ${j-1}: ${media/3}`)
  }
}

const maiorNota = matriz => { // busca pelas colunas
  for(let j=2; j<6;j++){
    let maior=0;
    for(let i=0;i<3;i++){
      if(matriz[i][j]>maior)
        maior=matriz[i][j] 
    }
    console.log(`Maior nota da Prova ${j-1}: ${maior}`)
  }
}

boss()