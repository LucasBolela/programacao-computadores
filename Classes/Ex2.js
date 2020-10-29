class Produto{
  constructor(id,descricao,qtd,preco){
    this.id=id;
    this.descricao=descricao;
    this.qtd=qtd;
    this.preco=preco;
  }
  comprar = (x=1) => this.qtd+=x
  vender = (x=1) => this.qtd>=x?this.qtd-=x:console.log('Estoque abaixo da quantidade total!');
  aumentar = (x) => this.preco+=x; 
  diminuir = (x) => this.preco-=x; 
  mostra = () => console.log(this)
}

let p1 = new Produto(1,'Vaso', 3, 25.50)
p1.mostra()
p1.comprar(7)
p1.vender(11)
p1.comprar(5)
p1.vender(11)
p1.aumentar(5)
p1.diminuir(1)
p1.mostra()