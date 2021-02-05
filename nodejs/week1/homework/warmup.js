console.log("inside warmup file");

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  getDiameter() {
    return 2 * this.radius;
  }
  getCircumference() {
    return 2 * Math.PI * this.radius;
  }
  getArea() {
    return Math.PI * this.radius * this.radius;
  }
}
const circle = new Circle(10);
const diameter = circle.getDiameter();
const circumference = circle.getCircumference();
const area = circle.getArea();
console.log(diameter, circumference, area);
