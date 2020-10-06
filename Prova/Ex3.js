//Lucas Bolela Silveira
//22596
function boss(){
  let opcao = Number(prompt(`Digite [1] Cadastrar Pessoa \n [2] Cadastrar Imóvel \n [3] Total de uma pessoa \n [4] Imovel Mais Caro \n [5] Sair`)),
  pessoa = [], imovel=[];
  do{
    switch (opcao) {
      case 1:
        cadastroPessoa(pessoa)
        break;
      case 2:
        cadastroImovel(imovel, pessoa)
        break;
      case 3:
        valorImovel(imovel,pessoa)
        break;        
      case 4:
        imovelMaisCaro(pessoa,imovel)
        break;  
      case 5:
        console.log('Sistema Finalizado!')      
        break;
      default:
        alert("Opção Inválida!");
        break;
    }

    opcao = Number(prompt(`Digite [1] Cadastrar Pessoa \n [2] Cadastrar Imóvel \n [3] Total de uma pessoa \n [4] Imovel Mais Caro \n [5] Sair`)) 
  }while(opcao!= 5)
  console.log(`Obrigado por utilizar nosso software!`)
  console.log(pessoa)
  console.log(imovel)
}

const cadastroPessoa = pessoa => {
  pessoa.push({
    nome:prompt(`Digite o nome:`),
    rg:prompt(`Digite o RG:`),
    cpf:prompt(`Digite o CPF:`)
  })
}

const cadastroImovel = (imovel,pessoa) => {
  let rg = prompt('Digite o RG do dono:');
  while(verifica(pessoa,rg)){
    alert("Número de RG não cadastrado!")
    cadastroPessoa(pessoa)
    rg = prompt('Digite o RG do dono novamente:');
  }
  imovel.push({
    codigo:Number(prompt(`Digite o código:`)),
    endereco:prompt(`Digite o endereço:`),
    tamanho:Number(prompt(`Digite o tamanho do imóvel em metros quadrados:`)),
    rg,
    valor:Number(prompt(`Digite o valor:`))
  })
}

const imovelMaisCaro = (pessoa,imovel) => {
  let maisCaro=0,cpf;
  for(let x of imovel){
    if(maisCaro<x.valor){
      maisCaro=x.valor
      for(let y of pessoa){
        if(x.rg==y.rg){
          cpf=y.cpf
          break
        }
      }
    }
  }
  console.log(`O CPF do dono do imóvel mais caro é ${cpf}`)
}

const valorImovel = (imovel,pessoa) =>{
  let rg = prompt('Digite o RG');
  while(verifica(pessoa,rg)){
    alert("Número de RG não cadastrado!")
    rg = prompt('Digite um RG válido:');
  }
  let nome;
  for(let y of pessoa){
    if(rg==y.rg){
      nome = y.nome
      break
    }
  }
  let total=imovel.reduce((total,el)=>el.rg==rg?total+el.valor:total, 0)
  console.log(`Valor total em imóvel do ${nome} é ${total}`)
}
const verifica = (pessoa,rg)=>{
  for(pes of pessoa){
    if(pes.rg == rg){
      return false
    }
  }
  return true
}

boss()