
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

console.log(age.map(el=>el%2==0?0:1))
console.log(age.map(el=>el*2))
