///**
// * Created by dean on 2015/12/18.
// */
//var fs = require("fs");
//var dirs = ["BNC"];
//var task = [];
//var getAllDir = function () {
//  while(dirs.length > 0){
//      var path = dirs.pop();
//      task.push(path);
//      var files =  fs.readdirSync(path);
//      files.forEach(function (file) {
//          var states =  fs.statSync(path+ "/"+file);
//          if(states.isDirectory()){
//              dirs.push(path + "/" + file);
//          }
//          })
//      }
//};
//getAllDir();
//console.log(task);

console.log("<a>hello</a>".replace(/<[^><]*>/g,""));