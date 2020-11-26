// 'new' is a keyword in JS
var today = new Date() + 7;
// console.log(today);

var mouse = {
  weight: 0.1,
  getWeight: function () {
    return this.weight;
  },
};

// constructor function
function Mouse(color, weight) {
  this.type = "mouse";
  this.color = color;
  this.weight = weight;
}

var mouse1 = new Mouse("white", 0.4);
var mouse2 = new Mouse("black", 0.6);
console.log(mouse1);
console.log(mouse2);

var tom = {
  name: "Tom",
  stomach: [],
  eat: function (mouse) {
    this.stomach.push(mouse);
    return this;
  },
};
