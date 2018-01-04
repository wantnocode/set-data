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

 ### 1 removeRepeatArray(arr) // 数组去重    (必传)

var arr = [1,2,3,4,1,2,3]

var arr1  = removeRepeatArray(arr)   // 输出 [1,2,3,4]

 ### 2 upsetArr(arr)    // 数组顺序的随机打乱    arr(必传)

var arr = [1,2,34]

var arr1 = upsetArr(arr)  // 输出[2,1,34]  结果不确定 此处为举例

 ### 3 maxArr(arr)    //取数组中最大的元素  仅限于全是数的数组     arr(必传)

var arr =  [1,2,35]

var arr1 = maxArr(arr)  //输出35 

 ### 4 minArr(arr)    //取数组中最小的元素  仅限于全是数的数组    arr(必传)

var arr =  [1,2,35]

var arr1 = minArr(arr)  //输出1 

### 5 sumArr(arr)   //取数组中所有元素之和  仅限于全是数的数组   arr(必传)

var arr = [1,2,35]

var arr1 = sumArr(arr)  //输出38 

### 6 covArr(arr)  //取数组中所有元素总和的平均值  仅限于全是数的数组   arr(必传)

var arr = [1,2,33]

var arr1 = covArr(arr)  //输出12

### 6 randomArr(arr)  //随机获取数组中某个元素  arr(必传)

var arr = [1,2,33]

var arr1 = randomArr(arr)  //输出2   随机值 不确定/

### 7 getEleCount(arr,ele)  //获取数组中某个元素出现的次数  arr数组(必传)  ele某个元素(必传)

var arr = [1,2,2,33,33]

var arr1 = randomArr(arr,2)  //输出2  

### 8 getCount(arr, rank,ranktype)  //获取数组中元素出现的次数  arr数组(必传)  rank 返回几个值(返回数组的个数) ranktype 返回升序降序 

var arr = [1,2,2,33,33]

var arr1 = randomArr(arr,2)  //输出[{el: "2", count: 2},{el: "33", count: 2}]   //el 元素名称  //count 出现次数

var arr2 = randomArr(arr,2,1)  //输出[{el: "1", count: 1},{el: "33", count: 2}]   //el 元素名称  //count 出现次数

### 9 getArrayNum(arr,n1,n2)  //获取数组中从下标为 n1开始到n2结束的数组   返回一个数组  arr数组(必传)  n1开始下标(必传)  n2结束下标(不传默认为结尾)

var arr = [1,2,2,33,33]

var arr1 = getArrayNum(arr,1,4)  //输出[2,2,33,33]  从下标为1开始到下标为4结束的新数组


### 10  removeArrayForValue(arr,val,type)  //arr数组(必传)  val要匹配的元素(必传)    type匹配模式  

console.log(removeArrayForValue(['test','test1','test2','test','aaa'],'test','%')) //输出为['aaa']

console.log(removeArrayForValue(['test','test1','test2','test','aaa'],'test','%')) //输出为['test1','test2','test','aaa']



## 日期Methods

### 1 getShortTime(nS)  //10位时间戳转换为年月日格式   秒单位    nS(必传)

console.log(getShortTime(1515055356))    //输出2018/1/4 16:42:36  如需要转为年/月/日格式 请看下文

### 2 getLocalTime(nS)  //13位时间戳转换为年月日格式   毫秒单位    nS(必传)

console.log(getShortTime(1515055356000))    //输出2018/1/4 16:42:36  如需要转为年/月/日格式 请看下文

### 3 getEndTime(endTime)  //获取某一天与当前时间的一个倒计时  endTime(必传)

console.log(getEndTime('2017/8/22 16:0:0'))   //输出  剩余时间198天 23小时 12 分钟24 秒

console.log(getEndTime(1517465832000))   //输出   剩余时间27天 21小时 28 分钟28 秒

### 4 getCurrentTime(time,type)      //获取当前某个日期的/年/月/日格式    time(必传)时间    type 类型 

type类型 ===================
//1 :精确到毫秒      /年/月/日/时/分/秒/毫秒
//2 :精确到秒        /年/月/日/时/分/秒
//3 :精确到分        /年/月/日/时/分
//4 :精确到日        /年/月/日

console.log(getCurrentTime(1517465832000,1))    //输出 2018年2月1日14小时17分12秒

console.log(getCurrentTime('2018/2/1 14:17:12',0))    //输出 2018年2月1日14小时17分12秒0毫秒



## 字符串Methods








    
  
