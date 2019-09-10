#!/usr/bin/node

global.pi = Math.PI;

global.circle=(radius)=>{
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

global.objCircle = {
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

module.exports = global.circle;
