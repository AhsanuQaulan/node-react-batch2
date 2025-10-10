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

var sheep = new Animal("shaun");

console.log(sheep.name);
console.log(sheep.legs);
console.log(sheep.cold_blooded);

sheep.legs = 3;
console.log(sheep.legs);
