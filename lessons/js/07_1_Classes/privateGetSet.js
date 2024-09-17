class Human {
  #leck = "leck eier";

  get leck() {
    return this.#leck;
  };

  set leck(value) {
    this.#leck = value;
  }
}

const human = new Human();
console.log(human.leck);
human.leck = "leck meine eier";
console.log(human.leck);

// This is way easier with factory functions

function NiceHuman() {
  return { leck: "leck die netten eier" };
}

const niceHuman = new NiceHuman();
console.log(niceHuman.leck);
niceHuman.leck = "leck meine netten eier";
console.log(niceHuman.leck);
