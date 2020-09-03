function boss(){
  let vendedores = [], vendas=[];
  for(let i =0; i<4; i++){
    cadastroVendedor(vendedores)
  }
  let opcao = Number(prompt(`Digite \n [1] Cadastrar Vendedor\n [2] Cadastrar Venda\n [3] Consultar Vendas \n [4] Total de vendas \n [5] Vendedor do mês \n [6] Melhor mês \n [7] Sair`));
  do{
    switch (opcao) {
      case 1:
        cadastroVendedor(vendedores)
        break;
      case 2:
        cadastroVenda(vendas, vendedores)
        break;
      case 3:
        consultarVendas(vendas,vendedores)
        break;    
      case 4:
        totalVendas(vendas, vendedores)
        break;
      case 5:
        vendedorMes(vendedores,vendas)
        break;    
      case 6:
        melhorMes(vendas)
        break;    
      default:
        alert("Opção Inválida!");
        break;
    }

    opcao = Number(prompt(`Digite \n [1] Cadastrar Vendedor\n [2] Cadastrar Venda\n [3] Consultar Vendas \n [4] Total de vendas \n [5] Vendedor do mês \n [6] Melhor mês \n [7] Sair`))
  }while(opcao!= 7)
  console.log(`Obrigado por utilizar nosso software!`)
  console.log(vendedores)
  console.log(vendas)
}

const cadastroVendedor = vendedores => {
  vendedores.push({
    nome:prompt("Digite o nome do Vendedor:"),
    cod:exists(Number(prompt('Digite um código:')), vendedores)
  })
  console.log(`Vendedor cadastrado com sucesso!`)
}

const cadastroVenda = (vendas, vendedores) => {
  let venda = new Object()
  venda.codVendedor= verificaVendedor(Number(prompt("Digite o código do vendedor:")),vendedores)
  venda.data = newDate(prompt("Digite a data da venda (dd/mm/aaaa):"))
  if(verificaData(venda, vendas)){
    alert("Vendedor já cadastrado nesse mês!")
    return
  }
  vendas.push({
    ...venda,
    valor:Number(prompt('Digite o valor:'))
  })
  console.log(`Venda cadastrada com sucesso!`)
}

const consultarVendas = (vendas,vendedores) => {
  let data = prompt("Digite o mês desejado (1 a 12):"),
  codigo = verificaVendedor(Number(prompt("Digite o código do vendedor:")),vendedores)
  vendas.filter((venda)=>venda.codVendedor==codigo && venda.data.getMonth()==data-1?console.log(venda):venda)
}

const totalVendas = (vendas, vendedores) => {
  let codigo = verificaVendedor(Number(prompt("Digite o código do vendedor:")),vendedores),
  total =vendas.reduce((total,venda)=>venda.codVendedor==codigo?total+1:0, 0);
  console.log(`Total de vendas do vendedor ${codigo}: ${total}`);
}

const vendedorMes = (vendedores,vendas) => {
  let data = prompt("Digite o mês desejado (1 a 12):"),
  melhorVendedor = vendedores[0].nome, maisVendas=0;
  for(vendedor of vendedores){
    let cont = 0
    for(venda of vendas){
      if(venda.codVendedor==vendedor.cod && venda.data.getMonth()==data-1)
        cont=venda.valor
    }
    console.log(cont)
    if(cont>maisVendas){
      maisVendas = cont;
      melhorVendedor = vendedor.nome;
    }
  }
  if(maisVendas==0){
    console.log(`Nenhuma venda no mês `)
  } else{
    console.log(`Vendedor ${melhorVendedor} foi o melhor do mês ${data}`)
  }
}

const melhorMes = vendas => {
  let qtd=0, mes=0;
  for(let i=1; i<=12;i++){
    let cont = vendas.reduce((total,val)=>val.data.getMonth()==i?total+val.valor:0, 0)
    if(cont>qtd){
      mes = i;
      qtd = cont;
    }
  }
  if(qtd==0)
    console.log(`Não houve vendas!`)
  else
    console.log(`O melhor mês de vendas foi ${mes+1}`)
}

const newDate = data =>{ 
  while(data.length!=10){
    data = prompt('Digite uma data válida dd/mm/aaaa:')
  }
  data = data.split('/');
  return new Date(data[2],data[1]-1,data[0]) 
}

const verificaVendedor = (cod, vendedores)  => {
  let codVendedor = cod;
  console.log(vendedores.filter(el=>el.cod==codVendedor))
  while(vendedores.reduce((total,el)=>el.cod==codVendedor?total+1:total, 0)==0){
    console.log(vendedores.filter(el=>el.cod==codVendedor))
    codVendedor = Number(prompt('Digite um código válido:'))
  }
  return codVendedor
}

const exists= (cod, vendedores)=>{
  let codVendedor = cod;
  while(vendedores.reduce((total,el)=>el.cod==codVendedor?total+1:total, 0)!=0){
    console.log(vendedores.filter(el=>el.cod==codVendedor))
    codVendedor = Number(prompt('Código já existente! Digite outro código:'))
  }
  return codVendedor
}

const verificaData = (obj, vendas)=> vendas.reduce((total,valor)=>valor.codVendedor==obj.codVendedor && valor.data.getMonth()== obj.data.getMonth()?total+1:0, 0)!=0

boss()