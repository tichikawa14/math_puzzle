String.prototype.reverse = function() {
  return this.split("").reverse().join("")
}

let num: number = 11
while (true) {
  if (num.toString() === num.toString().reverse() &&
    num.toString(2) === num.toString(2).reverse() &&
    num.toString(8) === num.toString(8).reverse()) {
    console.log(num)
    break;
  }
  num += 2
}
