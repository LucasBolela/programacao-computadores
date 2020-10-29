// Implemente em JS uma classe chamada Rio contendo as variáveis nome, nível e poluído. Essa classe deve possuir o método construtor, e ainda os métodos:
// •	chover(float): que aumenta o nível atual do rio;
// •	ensolarar(float): que diminui o nível atual do rio;
// •	limpar(): que limpa o rio;
// •	sujar(): que polui o rio;
// •	mostra(): que mostra todas as informações do rio.



class Rio{
  constructor(nome, nivel, poluido){
    this.nome = nome;
    this.nivel = nivel;
    this.poluido = poluido;
  }
  chover = (x=1) => this.nivel+=x; 
  ensolarar = (x=1) => this.nivel-=x;
  limpar = () => this.poluido = false; 
  sujar = () => this.poluido = true;
  mostrar = () => console.log(this) 
}

let parnaiba = new Rio('Parnaiba', 25.33, true);

parnaiba.mostrar()
parnaiba.chover()
parnaiba.limpar()
parnaiba.mostrar()