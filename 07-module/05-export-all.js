#!/usr/bin/node


//导入02-export-*的三个模块
module.exports = {
  pi: require('./02-export-var.js'),
  circle:require('./02-export-function.js'),
  Circle:require('./02-export-object.js')
}
