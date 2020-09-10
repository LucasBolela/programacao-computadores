function boss(){
  let matriz = [];
  for (let i = 0; i < 3; i++) {
    matriz.push([])
  }
  cadastra(matriz)
  consultaMedia(matriz)
}

const cadastra = matriz =>{
  for(let i=0;i<3;i++){
    alert(`Aluno ${i+1}`)
    for(let j=0; j<4;j++){
      matriz[i][j] = Number(prompt(`Digite a nota da prova ${j+1}`))
    }
  }
  console.log(`Alunos cadastrado com sucesso`)
}

const consultaMedia = matriz =>{
  let mediaTotal = 0
  for(let i=0;i<3;i++){
    let media=0;
    for(let j=0; j<4;j++){
      media+=matriz[i][j] 
    }
    mediaTotal += media/4
    console.log(`Média do Aluno ${i+1}: ${media/4}`)
  }
  console.log(`Média total da turma: ${mediaTotal/3}`)
}
boss()