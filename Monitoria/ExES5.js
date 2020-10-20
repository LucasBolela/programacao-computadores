function boss(){
  let bicicletas = [];

  let opcao = Number(prompt(' [1] Adicionar \n [2] Buscar \n [3] Somar \n [4] Marca \n [5] Soma aro \n [6] Mais Velha '))
  do {
    
    switch (opcao) {
      case 1:
        adicionar(bicicletas)
        break;
      case 2:
        buscar(bicicletas)
        break;
      case 3:
        soma(bicicletas)
        break;
      case 4:
        marca(bicicletas)
        break;
      case 5:
        aroMais3(bicicletas)
        break;
      case 6:
        maisVelha(bicicletas)
        break;
    
      default:
        alert('Opção Inválida')
        break;
    }
    opcao = Number(prompt(' [1] Adicionar \n [2] Buscar \n [3] Somar \n [4] Marca \n [5] Soma aro \n [6] Mais Velha '))

  } while (opcao!=7);
  console.log('Fim do programa!')
  console.log(bicicletas)
  
}

function adicionar(bicicletas){
  let codigo = Number(prompt('Digite o código:'));
  while(bicicletas.some(function (el){return el.codigo==codigo})){
    alert(`Código ${codigo} já cadastrado!`)
    codigo = Number(prompt('Digite outro código:'));
  }
  
  bicicletas.push({
  codigo,
	aro:Number(prompt('aro:')),
	modelo:prompt('Modelo:'),
	marca:prompt('Marca:'),
	valor:Number(prompt('Valor:')),
	ano:Number(prompt('Ano:'))
  })
}

function buscar(bicicletas){
  let codigo = Number(prompt('Digite o código:'));
  while(!bicicletas.some(function (el){return el.codigo==codigo})){
    alert(`Código não ${codigo} já cadastrado!`)
    codigo = Number(prompt('Digite outro código:'));
  };
  console.log(bicicletas.filter(function (el){
    if(el.codigo==codigo){
      return el
    }
  }))
}

function soma(bicicletas){
  let valorTotal = bicicletas.reduce(function (total,el){
    return total+el.valor
  },0)
  console.log(`Valor total das bicicletas é ${valorTotal}`)
}

function marca(bicicletas){
  let marca = prompt('Digite a marca:');
  bicicletas.forEach(function (el){
    if(marca == el.marca){
      console.log(el)
    }
  })
}

function aroMais3(bicicletas){
  console.log(bicicletas.forEach(function (el,i){
    bicicletas[i].aro += 3
  }))
}

function maisVelha(bicicletas){
  let velha = bicicletas[0], anoVelho = bicicletas[0].ano;
  bicicletas.forEach(function (el){
    if(anoVelho>el.ano){
      velha = el;
      anoVelho = el.ano
    }
  })
  console.log(velha)
}