/**
 * Created by dean on 2015/12/18.
 */
var fs = require("fs");
var dir = "test"; //主目录
var dirs = [dir];
var task = [];//任务队列
/**
 * 获取主目录下的所有目录
 */
var getAllDir = function () {
    while(dirs.length > 0){
        var path = dirs.pop();
        task.push(path);
        var files =  fs.readdirSync(path);
        files.forEach(function (file) {
            var states =  fs.statSync(path+ "/"+file);
            if(states.isDirectory()){
                dirs.push(path + "/" + file);
            }
        })
    }
};
/**
 * 将指定目录下的文件进行转换
 * @param dirName 目录名
 */
var processXmlToTxt = function (dirName) {
    var files =  fs.readdirSync(dirName);
        for(var i = 0;i < files.length; ++i){
            (function(i){
                var states =  fs.statSync(dirName+"/"+files[i]);
                if(states.isFile()){
                    var data = fs.readFileSync(dirName+"/"+files[i],"utf8");
                    var text = data.replace(/<[^><]*>/g,"");
                    fs.writeFileSync(dirName+"/"+files[i],text);
                    fs.renameSync(dirName+"/"+files[i],dirName+"/"+files[i].split(".")[0]+".txt");
                    console.log(files[i] +" success");
                }
            })(i);
        }
};
var process = function () {
    getAllDir();
    console.log(task);
    task.forEach(processXmlToTxt);
};
process();

