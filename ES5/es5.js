
//For Each
function fEach(){

  let vet = Array(5).fill(0), soma;

  vet.forEach((el,i)=> i%2==0?console.log(`Elemento ${el} position par`):console.log(`Elemento ${el} position impar`))
  
  vet.forEach(el=>soma= soma+'-'+el)
  console.log(soma)
}

const show = (el,i)=> i%2==0?console.log(`Elemento ${el} position par`):console.log(`Elemento ${el} position impar`);
fEach()

//Map

let age = [10,11,12,13,14,15]

console.log(age.map(el=>{if(el%2==0){return el}}))
console.log(age.map(el=>el*2))

//Filter

let eleitos = [2,3,4,5,6,7,8];

console.log(eleitos.filter(el=>{if(el<5){return el}}))

//Reduce

let idades = [12,23,24,35,36,47,68,10];
console.log(idades.reduce((total,el)=>total+el,0))
console.log(idades.reduce((total,el)=>total-el,0))

let notas = [5,6,7,8,10]
console.log(notas.reduce((maior,el)=>maior>el?maior:el))

//Some

let pessoas = ['Carlos', 'Lucas', 'Daniel'];

console.log(pessoas.some((el)=>el=='Lucas'))

// parse()
// stringify()
// classes
