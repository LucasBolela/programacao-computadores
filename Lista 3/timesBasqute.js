//nome, cidade, media
//matriz pontos por rodada
function boss(){
  let rodadas = [], times = [];
  cadastra(rodadas, times)
  mediaTime(rodadas, times)
  mediaRodada(rodadas)
  primeiroRodada(rodadas, times)
  console.log(rodadas)
}

const cadastra = (rodadas, times) =>{
  for(let i=0;i<4;i++){
    times.push({nome:prompt('Digite o nome do time:'),
    cidade:prompt('Digite a cidade:'),
    media:0
    })
    rodadas.push([])
    for(let j=0; j<3;j++){ 
      rodadas[i][j] = Number(prompt(`Digite os pontos na rodada ${j+1}`))
    }
  }
  console.log(`Times cadastrado com sucesso`)
}

const mediaTime = (rodadas, times) =>{
  let mediaTotal = 0
  for(let i=0;i<4;i++){
    for(let j=0; j<3;j++){ 
      times[i].media+=rodadas[i][j]
    }
    times[i].media/=3
    mediaTotal += times[i].media/3
    console.log(`Média do Time ${times[i].nome}: ${times[i].media}`)
  }
  console.log(`Média total de pontos no campeonato: ${mediaTotal/4}`)
}

const mediaRodada = rodadas =>{
  for(let j=0; j<3;j++){
    let media=0;
    for(let i=0;i<4;i++){
      media+=rodadas[i][j] 
    }
    console.log(`Média de pontos na rodada ${j+1}: ${media/4}`)
  }
}

const primeiroRodada = (rodadas, times) => {
  for(let j=0; j<3;j++){
    let maior=0, nome;
    for(let i=0;i<4;i++){
      if(rodadas[i][j]>maior){
        maior=rodadas[i][j]
        nome = times[i].nome
      }
    }
    console.log(`${nome} ficou em primeiro lugar na rodada ${j+1}: ${maior}`)
  }
}