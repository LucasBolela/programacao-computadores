class Student{
  constructor(number,name, age, t1,t2){
    this.number=number;
    this.name=name;
    this.age=age;
    this.test1=t1;
    this.test2=t2;
  }
  show() {
    console.log(`Student number: ${this.number} \nName: ${this.name} \nAge: ${this.age}`);
  }
  finalTest = ()=>this.test1+this.test2/2
  pass = () => this.finalTest()>=7?console.log('Approved'):console.log('Reproved')
}

const signUp = () => {
  let name = prompt('Type the student name:'),
  number = Number(prompt('Type the student number:')),
  test1 = Number(prompt('Type the first test grade:')),
  test2 = Number(prompt('Type the second test grade:'));
  return new Student(number,name,test1,test2)
}

let Mario = new Student(1,'Mário',16,7,9)

Mario.show()
Mario.pass()
let example = signUp();
example.show();
example.pass();