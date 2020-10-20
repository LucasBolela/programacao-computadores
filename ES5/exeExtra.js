function boss(){
  let bikes = [];
  

  add(bikes);
  findBike(bikes)

  showBike(bikes)
  sumThree(bikes)
  oldest(bikes)
  console.log(bikes)
}

const add = (bikes) => {
  let codigo = Number(prompt('Digite o código:'));
  while(bikes.some(el=>el.codigo==codigo)){
    alert(`Código ${codigo} já cadastrado!`);
    codigo = Number(prompt('Digite outro código:'));
  };
  bikes.push({
    codigo,
    aro:Number(prompt('Digite o tamanho do aro:')),
    modelo:prompt('Digite o modelo da bicicleta:'),
    marca:prompt('Digite a marca:'),
    valor:Number(prompt('Digite o preço da Bicicleta:')),
    ano:prompt('Digite o ano (dd/mm/aaaa):')
  });
  console.log('Biciceta cadastrada!')
}
  
const findBike = (bikes) => {
  let codigo = Number(prompt('Digite o código:'));
  while(!bikes.some(el=>el.codigo==codigo)){
    alert(`Código ${codigo} não cadastrado!`);
    codigo = Number(prompt('Digite outro código:'));
  }
  bikes.find(el=>el.codigo==codigo?console.log(el):el);
  
};

const showBike = bikes =>{
  let marca = prompt('Digite a marca:')
  bikes.forEach(el =>el.marca==marca);
};

const sumThree = bikes => bikes.map(el=>el.aro+3);

const oldest = bikes => {
  let older = bikes[0], ano = bikes[0].ano;
  bikes.forEach(el=>{if(el.ano<ano){ano=el.ano;older=el}})
  console.log(older)
}