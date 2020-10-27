
class Veiculo{
  constructor(marca,modelo,ano, motor, velocidade){
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.motor = motor;
    this.velocidade = velocidade;
  }
  ligar = ()=> this.motor = true;
  desligar = ()=> this.motor = false;
  mostra(){
    let status = () => this.motor?'Ligado':'Desligado';
    console.log(this,status())
  }
  aumentar = (x=10) => this.velocidade += x 
  diminuir = (x=10) => this.velocidade -= x 
}

let objeto1 = new Veiculo('Fiat', 'Uno',1999, false,60)
objeto1.mostra()
objeto1.ligar()
objeto1.mostra()
objeto1.desligar()
objeto1.diminuir()
objeto1.mostra()
objeto1.aumentar(30)
objeto1.mostra()

// let objeto2 = new Veiculo('Porche', 'Carreira 911',2020, false)
// objeto2.mostra()