class Animal {
  constructor(name) {
    this._name = name;
    this._legs = 4;
    this._cold_blooded = false;
  }

  get name() {
    return this._name;
  }

  get legs() {
    return this._legs;
  }

  set legs(amount) {
    this._legs = amount;
  }

  get cold_blooded() {
    return this._cold_blooded;
  }
}

class Ape extends Animal {
  constructor(name) {
    super(name);
    this.legs = 2;
  }

  yell() {
    console.log("Auooo");
  }
}

class Frog extends Animal {
  jump() {
    console.log("hop hop");
  }
}

var sungokong = new Ape("Kera");
sungokong.yell();
console.log(sungokong.name);
console.log(sungokong.legs);
console.log(sungokong.cold_blooded);

console.log("\n------------------\n");

var kodok = new Frog("Kodok");
kodok.jump();
console.log(kodok.name);
console.log(kodok.legs);
console.log(kodok.cold_blooded);
