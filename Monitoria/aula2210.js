
// console.log(arr.filter(el=>el<5))
// console.log(arr.filter(el=>{ return el<5 }))

// var soma = (vet) => {
//   let resultado = vet.reduce((total, el) => total + el, 0) 
//    console.log(`A soma dos valores é ${resultado}`)
// }
// soma(arr)


// var buscaMarca = (vet) => {
//     let marca = 5
//     console.log(vet.filter((el) => marca == el))
// }
// buscaMarca(arr)

// let arr = [{aro:3},{aro:4},{aro:5},{aro:6}];

// var soma3 = (vet) => {
  
//   console.log(vet.map((el)=> {
//       el.aro = el.aro + 3 
//       return el
//       }))
// }
// soma3(arr)

var soma = (vet) => {
  let resultado = vet.reduce((total,objeto) => total + objeto.valor, 0)
                         //parametro da função => o que acontece na funcao, valor inicial do total
  console.log( `A soma dos valores é ${resultado}`)            
}
soma([{valor:10},{valor:20},{valor:30}])