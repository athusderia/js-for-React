function hello(name) {
  return "Hola mundo " + name;
}

console.log(hello("Athus"));

function add(x, y) {
  if (y === undefined) {
    y = 0;
  }

  return x + y;
}

console.log(add(9));
