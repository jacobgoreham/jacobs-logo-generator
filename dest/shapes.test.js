const { Circle, Square, Triangle } = require("./shapes");
// import shapes from shapes
// tests if shapes render

// circle shape
describe("Circle", () => {
  test("renders correctly", () => {
    const shape = new Circle();
    var color = this.color;
    shape.setColor(color);
    expect(shape.render()).toEqual(
      `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}"></circle>`
    );
  });
});
// square shape
describe("Square", () => {
  test("renders correctly", () => {
    const shape = new Square();
    var color = this.color;
    shape.setColor(color);
    expect(shape.render()).toEqual(
      `<rect x="50" height="200" width="200" fill="${this.color}"></rect>`
    );
  });
});
// triangle shape
describe("Triangle", () => {
  test("renders correctly", () => {
    const shape = new Triangle();
    var color = this.color;
    shape.setColor(color);
    expect(shape.render()).toEqual(
      `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}"></polygon>`
    );
  });
});
