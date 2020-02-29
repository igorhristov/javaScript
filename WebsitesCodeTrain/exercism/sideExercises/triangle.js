class Triangle {
  constructor(a, b, c) {
    (this.a = a), (this.b = b), (this.c = c);
  }

  isTriangle() {
    if (this.a === 0 || this.b === 0 || this.c === 0) {
      return false;
    } else {
      return this.a + this.b >= this.c && this.a + this.c >= this.b && this.b + this.c >= this.a;
    }
  }

  isEquilateral() {
    if (this.isTriangle()) {
      return this.a === this.b && this.a === this.c && this.b === this.c;
    } else {
      return false;
    }
  }

  isIsosceles() {
    if (this.isTriangle()) {
      return this.a === this.b || this.a === this.c || this.b === this.c;
    } else {
      return false;
    }
  }

  isScalene() {
    if (this.isTriangle()) {
      return this.a !== this.b && this.a !== this.c && this.b !== this.c;
    } else {
      return false;
    }
  }
}
