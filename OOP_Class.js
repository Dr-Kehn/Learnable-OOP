class Human{
  numberOfEyes = 2
  hairColor = 'black'

  static numberOfLegs = 2

  cry () {
    console.log('I am crying')
  }


  displaySelf(){
    console.log(this)
  }

  displayHairColor(){
    console.log(this.hairColor)
    this.displaySelf()
  }

  static accessStatic(){
  console.log(Human.numberOfLegs)
  }
}

const human = new Human()

human.hairColor = 'Red'

//Human.numberOfLegs = 13

Human.accessStatic()

human.displaySelf()
//human.displayHairColor()

class person{
    constructor(name, age){
        this.name = name
        this.age = age
    }

    getAge(){
        console.log(this.age)
    }

    setAge(age){
        this.age = age
}

}

const John = new person("John", 12)
console.log(John)
const Joy = new person("Joy", 120)
console.log(Joy)

John.getAge()
Joy.getAge()

John.setAge(150)
console.log(John)
//console.log(human, Human)