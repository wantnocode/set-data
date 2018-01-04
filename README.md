#  XL-DO
  对javascript中Array 以及string 还有date等常用对象操作的方法进行封装的js,减轻你的压力,值得拥有！
  
#   目录结构

src == 原始文件
    arr    //数组方法
    string  // 字符串方法
    date    //日期方法
dist ==合并文件
     xl-do.js  //支持老版本的方法 基本没有涉及到es6的js
     xl-do.min.js  //压缩版
     xl-do-es6.js  //大部分都是es6的语法,可能涉及到某些浏览器不支持,如遇到兼容 可以通过webpack / babel-loader编译
     xl-do-es6.min.js//压缩版
     
 
#   使用方法 
选择你对应的支持的浏览器版本去下载引用  看上文注释  == es6版和普通版

1 removeRepeatArray// 数组去重 
var arr = [1,2,3,4,1,2,3]
var arr1  = removeRepeatArray(arr)   // 输出 [1,2,3,4]

2 upsetArr    // 数组顺序的随机打乱
var arr = [1,2,34]
var arr1 = upsetArr(arr)  // 输出[2,1,34]  结果不确定 此处为举例

3 maxArr    //取数组中最大的元素  仅限于全是数的数组
var arr =  [1,2,35]
var arr1 = maxArr(arr)  //输出35 

4 minArr    //取数组中最小的元素  仅限于全是数的数组
var arr =  [1,2,35]
var arr1 = minArr(arr)  //输出1 

5 sumArr   //取数组中所有元素之和  仅限于全是数的数组
var arr = [1,2,35]
var arr1 = sumArr(arr)  //输出38 

6


    
  
