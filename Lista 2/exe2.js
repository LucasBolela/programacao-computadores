function boss(){
  let habitantes =[];
  cadastro(habitantes)
  console.log(`Média dos salarios = ${mediaSalario(habitantes)}`)
  console.log(`Média do número de filhos = ${parseInt(mediaFilhos(habitantes))}`)
  console.log(`Maior salário = ${maiorSalario(habitantes)}`)
  console.log(`Percentual de mulheres com salário superior a R$1000 = ${mulheres(habitantes)}%`)
  console.log(habitantes)
}

const cadastro = habitantes=>{
  for(let i=0;i<20;i++){
    habitantes.push({
      sexo:prompt("Digite o sexo:").toUpperCase(),
      salario:Number(prompt("Digite o salario:")),
      idade: Number(prompt("Digite a idade:")),
      filhos: Number(prompt("Digite o numero de filhos:"))
    })
  }
}
const mediaSalario = habitantes => habitantes.reduce((total, el)=>total+el.salario,0)/habitantes.length;

const mediaFilhos = habitantes => habitantes.reduce((total, el)=>total+el.filhos,0)/habitantes.length;

const maiorSalario = habitantes => habitantes.reduce((maior, el)=>maior<el.salario?el.salario:maior,habitantes[0].salario);

const mulheres = habitantes => habitantes.reduce((total, el)=>el.sexo=="F"&&1000<el.salario?total+1:total,0)/habitantes.length*100;