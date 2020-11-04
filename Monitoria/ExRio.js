// Class para um CONTROLE REMOTO PARA TV

class Controle{
  constructor(canal, volume,ligar=false){
    this.ligar = ligar;
    this.canal = canal;
    this.volume = volume;
  }
  ligaDesliga = () => this.ligar = !this.ligar;
  diminui = () => {
    if (this.ligar){
      if (this.volume>0)
        this.volume -= 1
      console.log(this.volume)
    }
    else
      console.log('Tv Desligada!')
  };
  aumenta = () => {
    if (this.ligar){
      this.volume += 1
      console.log(this.volume)
    }
    else
      console.log('Tv Desligada!')
  };
  aumentaCanal = () => this.canal += 1;
  diminuiCanal = () => {
    if (this.ligar){
      if (this.canal>0)
        this.canal -= 1
      console.log(this.canal)
    }
    else
      console.log('Tv Desligada!')
  };
  numeroCanal = (x) => this.canal = x;
  mostra = () => console.log(this)
}

let Philipe = new Controle(16, 15)

Philipe.mostra()
Philipe.aumenta()
Philipe.ligaDesliga()
Philipe.aumenta()
Philipe.numeroCanal(12)
Philipe.mostra()