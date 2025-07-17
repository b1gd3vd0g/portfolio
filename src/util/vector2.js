/** A class representing a two dimensional vector. Could be used for position, size, etc. */
export default class Vector2 {
  _pt;

  constructor(x, y) {
    this._pt = [x, y];
  }

  get x() {
    return this._pt[0];
  }

  get y() {
    return this._pt[1];
  }
}
