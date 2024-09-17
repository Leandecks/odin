class Human {
  constructor (name, age) {
    this.name = name;
    this.age = age;
  }

  fuck() {
    return `${this.name} fucks around`;
  }

  static leck = "leck eier"; // To be called on Human
}

const human1 = new Human("John", 16);
console.log(human1.fuck());
console.log(Human.leck);

class Child extends Human {
  constructor(name, age, isPlaying) {
    super(name, age);
    this.isPlaying = isPlaying;
  }
}

const human2 = new Child("Johnny", 8, true);
console.log(human2.fuck());
