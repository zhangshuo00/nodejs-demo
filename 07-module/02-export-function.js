#!/usr/bin/node

function circle(radius){
  function area(){
    return Math.PI * radius * radius;
  }

  function circumference(){
    return 2 * radius * Math.PI;
  }

  return {
    area: area,
    circumference: circumference
  }
}

console.dir(module);
module.exports = circle;
