function boss(){
  let notas = [], carros = [];
  for (let i =0; i<4;i++){
    cadastra(notas, carros)
  }
  let opcao = Number(prompt(`Digite \n [1] Cadastrar Carro\n [2] Média das Avaliações\n [3] Pior Nota por Avaliação  \n [4] Sair`));
  do{
    switch (opcao) {
      case 1:
        cadastra(notas, carros)
        break;
      case 2:
        mediaNotas(notas, carros)
        break;
      case 3:
        menorNota(notas, carros)
        break;       
      case 4:
        console.log('Sistema Finalizado!')
        break;       
      default:
        alert("Opção Inválida!");
        break;
    }

    opcao = Number(prompt(`Digite \n [1] Cadastrar Carro\n [2] Média das Avaliações\n [3] Pior Nota por Avaliação  \n [4] Sair`));
  }while(opcao!= 4)
  console.log(`Obrigado por utilizar nosso software!`)

  console.log(notas)
  console.log(carros)
}

const cadastra = (notas, carros) =>{
    carros.push({marca:prompt('Digite o nome da marca:'),
    modelo:prompt('Digite o modelo do carro:'),
    ano:Number(prompt('Digite o ano de fabricação do carro:')),
    valor:Number(prompt('Digite o valor do carro:')),
    media:0
    })
    notas.push([])
    for(let j=0; j<5;j++){ 
      notas[carros.length-1][j] = Number(prompt(`Digite a nota da ${j+1}° avaliação:`))
    }
  console.log(`Carro cadastrado com sucesso`)
}

const mediaNotas = (notas, carros) =>{
  for(i in carros){
    for(let j=0; j<5;j++){ 
      carros[i].media+=notas[i][j]
    }
    carros[i].media/=5
    console.log(`Média do carro ${carros[i].marca} modelo ${carros[i].modelo}: ${carros[i].media}`)
  }
}

const menorNota = (notas, carros) => {
  for(let j=0; j<5;j++){
    let menor=notas[0][j], nome=carros[0].modelo;
    for(i in carros){
      if(notas[i][j]<menor){
        menor=notas[i][j]
        nome = carros[i].modelo
      }
    }
    console.log(`O carro ${nome} ficou com menor avaliação na ${j+1}°: ${menor}`)
  }
}
boss()