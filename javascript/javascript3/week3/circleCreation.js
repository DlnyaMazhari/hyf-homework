//Paint a circle to a canvas element

let c = document.getElementById("canvas");
let ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(200, 100, 55, 0, 2 * Math.PI);
ctx.fillStyle = "lightblue";
ctx.fill();

//Class creation time!
class Circle {
  constructor(x, y, r, startAngle, endAngle, fillColor) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.fillColor = fillColor;
  }
  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, this.startAngle, this.endAngle);
    ctx.fillStyle = this.fillColor;
    ctx.fill();
  }
}
const c1 = new Circle(50, 50, 20, 0, 2 * Math.PI, "#000000");
const c2 = new Circle(350, 150, 65, 1.5 * Math.PI, 0, "#019101");
const c3 = new Circle(70, 300, 10, 0, 0.9 * Math.PI, "red");
const c4 = new Circle(50, 150, 35, 0.9 * Math.PI, 0, "blue");
const c5 = new Circle(150, 400, 27, 0, 2 * Math.PI, "#919901");
c1.draw(ctx);
c2.draw(ctx);
c3.draw(ctx);
c4.draw(ctx);
c5.draw(ctx);
