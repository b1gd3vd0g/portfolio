/** A class representing a two dimensional vector. Could be used for position, size, etc. */
class Vector2 {
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

export default Vector2;
