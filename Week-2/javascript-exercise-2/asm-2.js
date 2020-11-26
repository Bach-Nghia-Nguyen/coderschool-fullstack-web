//========= Assignment 2 - Nested For Loop ======//

function drawSquare() {
  for (var i = 0; i < 10; i++) {
    var s = "";
    for (var j = 0; j < 10; j++) {
      s = s + i + j + " ";
    }
    console.log(s);
  }
}
// drawSquare();

function drawTriangle(n) {
  // Draw the triangle
  for (var i = 1; i <= n; i++) {
    var s = "";
    for (let j = 1; j <= i; j++) {
      s += `${i} `;
    }
    console.log(s);
  }
}
// drawTriangle(7);

function drawGridnxn(n) {
  for (let i = 1; i <= n; i++) {
    var s = "";
    for (let j = 1; j <= n; j++) {
      if (i % 2 !== 0) {
        s += " #";
      } else if (i % 2 === 0) {
        s += "# ";
      }
    }
    console.log(s);
  }
}
// drawGridnxn(4);

function drawGridnxn2(n) {
  for (let i = 1; i <= n; i++) {
    var s = "";
    for (let j = 1; j <= n; j++) {
      if ((i + j) % 2 === 0) {
        s += " ";
      } else {
        s += "#";
      }
    }
    console.log(s);
  }
}
// drawGridnxn2(8);
