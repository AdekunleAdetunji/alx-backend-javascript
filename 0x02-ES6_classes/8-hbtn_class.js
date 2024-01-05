export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  set size(size) {
    this._size = size;
  }

  get size() {
    return this._size;
  }

  set location(location) {
    this._location = location;
  }

  get location() {
    return this._location;
  }

  [Symbol.toPrimitive](hint) {
    if (typeof hint === 'string') return this.size;
    if (typeof hint === 'number') return this.location;
    return this;
  }
}
