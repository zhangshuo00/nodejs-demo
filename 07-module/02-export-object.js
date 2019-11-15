#!/usr/bin/node

module.exports = {
  'area' : function(radius){
    return Math.PI * radius * radius;
  },

  'circumference': function(radius){
    return 2*Math.PI*radius;
  },
  'diameter':function(radius){
    return 2*radius;
  }
};

// function Circle(radius){
//   var _r = radius;
//   this.diameter = ()=> 2*_r;
//   this.circumference = ()=>Math.PI * 2 * _r;
//   this.area = ()=> Math.PI * _r * _r;
// }
// module.exports = Circle