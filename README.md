#  XL-DO
  对javascript中Array 以及string 还有date等常用对象操作的方法进行封装的js,减轻你的压力,值得拥有！
  
#   目录结构

#### src == 原始文件

  arr//数组方法
    
   string// 字符串方法
    
   date  //日期方法
#### dist ==合并文件

   xl-do.js  //支持老版本的方法 基本没有涉及到es6的js
     
   xl-do.min.js  //压缩版
     
    xl-do-es6.js  //大部分都是es6的语法,可能涉及到某些浏览器不支持,如遇到兼容 可以通过webpack / babel-loader编译
     
   xl-do-es6.min.js//压缩版
     
 
#   使用方法 
把xd-do克隆到本地,然后引用js文件  如果需要全部方法那就引入xl-do.min.js 如果时局部的话可以引用 arr string 对应的文件夹下的js
版本分为es6 和普通版  看你项目需求 支持什么版本  你就引入哪个版本  非常的简单  接下来具体介绍下方法

### 彼此达成一个小协议 ！ 一  arr代表的就是要操作的数组对象  二  (必传) 代表的是该参数必须传值  不能不传   三 每个方法后面都会有解释告诉你这个干什么   四  有哪些地方有疑问欢迎留言  五  觉得对你有帮助 麻烦star！

# API
## 数组Methods

 #### 1 removeRepeatArray(arr) // 数组去重   arr (必传)

var arr = [1,2,3,4,1,2,3]

var arr1  = removeRepeatArray(arr)   // 输出 [1,2,3,4]

 #### 2 upsetArr(arr)    // 数组顺序的随机打乱    arr(必传)

var arr = [1,2,34]

var arr1 = upsetArr(arr)  // 输出[2,1,34]  结果不确定 此处为举例

 #### 3 maxArr(arr)    //取数组中最大的元素  仅限于全是数的数组     arr(必传)

var arr =  [1,2,35]

var arr1 = maxArr(arr)  //输出35 

 #### 4 minArr(arr)    //取数组中最小的元素  仅限于全是数的数组    arr(必传)

var arr =  [1,2,35]

var arr1 = minArr(arr)  //输出1 

#### 5 sumArr(arr)   //取数组中所有元素之和  仅限于全是数的数组   arr(必传)

var arr = [1,2,35]

var arr1 = sumArr(arr)  //输出38 

#### 6 covArr(arr)  //取数组中所有元素总和的平均值  仅限于全是数的数组   arr(必传)

var arr = [1,2,33]

var arr1 = covArr(arr)  //输出12

#### 6 randomArr(arr)  //随机获取数组中某个元素  arr(必传)

var arr = [1,2,33]

var arr1 = randomArr(arr)  //输出2   随机值 不确定/

#### 7 getEleCount(arr,ele)  //获取数组中某个元素出现的次数  arr数组(必传)  ele某个元素(必传)

var arr = [1,2,2,33,33]

var arr1 = randomArr(arr,2)  //输出2  

#### 8 getCount(arr, rank,ranktype)  //获取数组中元素出现的次数  arr数组(必传)  rank 返回几个值(返回数组的个数) ranktype 返回升序降序 

var arr = [1,2,2,33,33]

var arr1 = randomArr(arr,2)  //输出[{el: "2", count: 2},{el: "33", count: 2}]   //el 元素名称  //count 出现次数

var arr2 = randomArr(arr,2,1)  //输出[{el: "1", count: 1},{el: "33", count: 2}]   //el 元素名称  //count 出现次数

#### 9 getArrayNum(arr,n1,n2)  //获取数组中从下标为 n1开始到n2结束的数组   返回一个数组  arr数组(必传)  n1开始下标(必传)  n2结束下标(不传默认为结尾)

var arr = [1,2,2,33,33]

var arr1 = getArrayNum(arr,1,4)  //输出[2,2,33,33]  从下标为1开始到下标为4结束的新数组


#### 10  removeArrayForValue(arr,val,type)  //arr数组(必传)  val要匹配的元素(必传)    type匹配模式  

console.log(removeArrayForValue(['test','test1','test2','test','aaa'],'test','%')) //输出为['aaa']

console.log(removeArrayForValue(['test','test1','test2','test','aaa'],'test','%')) //输出为['test1','test2','test','aaa']



## 日期Methods

#### 1 getShortTime(nS)  //10位时间戳转换为年月日格式   秒单位    nS(必传)

console.log(getShortTime(1515055356))    //输出2018/1/4 16:42:36  如需要转为年/月/日格式 请看下文

#### 2 getLocalTime(nS)  //13位时间戳转换为年月日格式   毫秒单位    nS(必传)

console.log(getShortTime(1515055356000))    //输出2018/1/4 16:42:36  如需要转为年/月/日格式 请看下文

#### 3 getEndTime(endTime)  //获取某一天与当前时间的一个倒计时  endTime(必传)

console.log(getEndTime('2017/8/22 16:0:0'))   //输出  剩余时间198天 23小时 12 分钟24 秒

console.log(getEndTime(1517465832000))   //输出   剩余时间27天 21小时 28 分钟28 秒

#### 4 getCurrentTime(time,type)      //获取当前某个日期的/年/月/日格式    time时间(必传)    type 类型 

type类型 ===================
//1 :精确到毫秒      /年/月/日/时/分/秒/毫秒
//2 :精确到秒        /年/月/日/时/分/秒
//3 :精确到分        /年/月/日/时/分
//4 :精确到日        /年/月/日

console.log(getCurrentTime(1517465832000,1))    //输出 2018年2月1日14小时17分12秒

console.log(getCurrentTime('2018/2/1 14:17:12',0))    //输出 2018年2月1日14小时17分12秒0毫秒



## 字符串Methods

#### 1 trim(str,type)   //去除字符串中的空格   str字符串(必传)  type去除空格的类型

// 去除字符串空格  四种情况
//去除空格  type 
//1 :所有空格 
//2 :前后空格  
//3 :前空格 
//4 :后空格

var str = ' aaaa   nnnnn   bbbb'

console.log(trim(str,1))  //输出'aaaannnnnbbbb'

console.log(trim(str,3))  //输出'aaaa   nnnnn   bbbb'  

#### 2 changeCase(str,type)  //切换字符串中字母的大小写   str字符串(必传)  type切换大小写类型

//字母大小写切换  
/*type类型包括:
1:首字母大写  
2：首页母小写  
3：大小写转换   
4：全部大写   
5：全部小写
 * */

var str = 'aaaannnnnbbbb'

console.log(changeCase(str,1))   //输出Aaaannnnnbbbb  
 
console.log(changeCase(str,4))   //输出AAAANNNNNBBBB


#### 3 repeatStr(str,count)  //循环赋值字符串N次    str字符串(必传)   count 赋值的次数

var str = '123'

console.log(repeatStr(str,4))  // 输出123123123123 

#### 4 countStr(str,strSplit)  //查找字符串中某字段出现的次数  str字符串(必传)   strSplit某字段(必传)

var str = 'abcdeafga'

console.log(countStr(str,'a'))  //输出3  a的次数为3

#### 5 replaceAll(str,AFindText,ARepText)  //替换字符串中某个字段   str字符串(必传)  AFindText要替换的字段(必传)  ARepText替换成什么(必传)

var str = 'abcdeafga'

console.log(replaceAll(str,'ab','gggg'))  //输出ggggcdeafga  

#### 6 checkType(str, type) //正则匹配字段符合某个规则   str字符串(必传)    type匹配类型

1 'email':

2 'phone':

3 'tel':

4 'english':
           
5 'chinese'
            
6 'lower':
          
7 'upper'

8 'number':

console.log(//checkType('165226226326','phone')   //输出  false  不符合规则


#### 7 random(length)  //随机生成一个规定长度的字符串  

console.log(random(8))     //输出 vf85qmay



        


 

 







    
  
