class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    #leckEier = "leck eier ";

    getEier() {
        return this.#leckEier + this.name;
    }

    publicEierLecken = "leckt alle eier";
}

const human1 = new Human("John", 16);
console.log(human1.getEier());
console.log(human1.publicEierLecken)