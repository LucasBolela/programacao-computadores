function boss(){
  let opcao = Number(prompt(`Digite \n [1] Cadastrar Vendedor\n [2] Cadastrar Venda\n [3] Consultar Vendas \n [4] Quantidade mulheres \n [5] Percentual \n [6] Sair`)),
  vendedores = [], vendas=[];
  cadastro()
  do{
    switch (opcao) {
      case 1:
        cadastroVendedor(vendedores)
        break;
      case 2:
        cadastroVenda(vendas)
        break;
      case 3:
        console.log(`Maior idade: ${maiorIdade(habitantes)}`)
        break;    
      case 4:
        console.log(`Quantidade de mulheres de 20 a 45 anos ou com altura 1,70 e olhos verdes: ${quantidade(habitantes)}`)
        break;
      case 5:
        console.log(`Percentual de homens: ${homens(habitantes)}%`)
        break;    
      default:
        alert("Opção Inválida!");
        break;
    }

    opcao = Number(prompt(`Digite [1] Cadastrar \n [2] Media Idade \n [3] Maior Idade \n [4] Quantidade mulheres \n [5] Percentual \n [6] Sair`))
  }while(opcao!= 6)
  console.log(`Obrigado por utilizar nosso software!`)
  console.log(habitantes)
}

const cadastroVendedor = vendedores => {
  vendedores.push({
    nome:prompt("Digite o nome do Vendedor:"),
    cod:vendedores.length+1
  })
  alert(`Código do vendedor: ${vendedores.length}`)
  console.log(`Vendedor cadastrado com sucesso!`)
}

const cadastroVenda = vendas => {
  vendas.push({
    codVendedor:Number(prompt("Digite o código do vendedor:")),
    data:prompt("Digite a data da venda (dd/mm/aaaa):").newDate()
  })
}

const consultar = vendas => {
  let data = prompt("Digite a data desejada (dd/mm/aaaa):").newDate(),
  codigo = verificaVendedor(Number(prompt("Digite o código do vendedor:")))
}

String.prototype.newDate = () => {
  let data = this;
  while(data.length!=10){
    data = prompt("Digite uma data válida (dd/mm/aaaa):")
  }
  let arr = data.split('/')
  return new Date(arr[2],arr[1]-1,arr[0])
}

const verificaVendedor = (cod, vendedores)  => {
  let codVendedor = codç
  while(!vendedores.filter(el=>el==cod)){
    codVendedor = Number(prompt('Digite um código válido:'))
  }
  return codVendedor
}