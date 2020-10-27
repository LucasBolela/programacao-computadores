class Student{
  constructor(number,name, age, t1,t2){
    this.number=number;
    this.name=name;
    this.age=age;
    this.test1=t1;
    this.test2=t2;
  }
  mostra() {
    console.log(`Student number: ${this.number} \nName: ${this.name} \nAge: ${this.age}`);
  }
  finalTest(){
    console.log(`Student final grade: ${(this.test1+this.test2)/2}`)
  }
}

let Mario = new Student(1,'Mário',16,7,9)

Mario.mostra()
Mario.finalTest()