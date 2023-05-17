class Shape {
  // creates shape class

  constructor() {
    this.color = "";
  }
  setColor(color) {
    this.color = color;
  }
}
// creates circle class that extends shape
class Circle extends Shape {
  render() {
    return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}"></circle>`;
  }
}
// creates square class that extends shape
class Square extends Shape {
  render() {
    return `<rect x="50" height="200" width="200" fill="${this.color}"></rect>`;
  }
}

// creates triangle class that extends shape
class Triangle extends Shape {
  render() {
    return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}"></polygon>`;
  }
}

module.exports = { Circle, Square, Triangle };
