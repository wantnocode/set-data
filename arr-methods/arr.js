//1数组去重/////////////////////////// （写俩种精简的）

// 方法一
// var arr = [1,2,1,2,3,4,324,2,4,23,432];
var map={};
var result = arr.filter(o=>map[o]?false:map[o]=true);
//ES6新增的Set数据结构，类似于数组，但是里面的元素都是唯一的 ，其构造函数可以接受一个数组作为参数
//ES6中Array新增了一个静态方法from，可以把类似数组的对象转换为数组
//方法二  new 
function removeRepeatArray(arr){
    return Array.from(new Set(arr))
}


// 2 数组顺序打乱////////////////////////////
function upsetArr(arr){
    return arr.sort(function(){ return Math.random() - 0.5});
}
//3数组最大值最小值//////////////////////////////
//这一块的封装，主要是针对数字类型的数组
function maxArr(arr){
    return Math.max.apply(null,arr);
}
function minArr(arr){
    return Math.min.apply(null,arr);
}

//4 数组求和，平均值//////////////////////////
//这一块的封装，主要是针对数字类型的数组
//求和
function sumArr(arr){
    var sumText=0;
    for(var i=0,len=arr.length;i<len;i++){
        sumText+=arr[i];
    }
    return sumText
}
//平均值,小数点可能会有很多位，这里不做处理，处理了使用就不灵活了！
function covArr(arr){
    var sumText=sumArr(arr);
    var covText=sumText/arr.length;
    return covText
}

//5从数组中随机获取元素/////////////////////////////////////
//randomOne([1,2,3,6,8,5,4,2,6])
//2
//randomOne([1,2,3,6,8,5,4,2,6])
//1
function randomOne(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

//6返回数组（字符串）一个元素出现的次数///////////////////////////////
//getEleCount('asd56+asdasdwqe','a')
//3
//getEleCount([1,2,3,4,5,66,77,22,55,22],22)
//2
function getEleCount (obj, ele) {
    var num = 0;
    for (var i = 0, len = obj.length; i < len; i++) {
        if (ele == obj[i]) {
            num++;
        }
    }
    return num;
}
//7返回数组（字符串）出现最多的几次元素和出现次数////////////////////////////////////
//arr, rank->长度，默认为数组长度，ranktype，排序方式，默认降序
function getCount(arr, rank,ranktype){ 
    var obj = {}, k, arr1 = []
    //记录每一元素出现的次数
    for (var i = 0, len = arr.length; i < len; i++) {
        k = arr[i];
        if (obj[k]) {
            obj[k]++;
        }
        else {
            obj[k] = 1;
        }
    }
    //保存结果{el-'元素'，count-出现次数}
    for (var o in obj) {
        arr1.push({el: o, count: obj[o]});
    }
    //排序（降序）
    arr1.sort(function (n1, n2) {
        return n2.count - n1.count
    });
    //如果ranktype为1，则为升序，反转数组
    if(ranktype===1){
        arr1=arr1.reverse();
    }
    var rank1 = rank || arr1.length;
    return arr1.slice(0,rank1);
}
//8得到n1-n2下标的数组////////////////////////////////////////
//getArrayNum([0,1,2,3,4,5,6,7,8,9],5,9)
//[5, 6, 7, 8, 9]

//getArrayNum([0,1,2,3,4,5,6,7,8,9],2) 不传第二个参数,默认返回从n1到数组结束的元素
//[2, 3, 4, 5, 6, 7, 8, 9]
function getArrayNum(arr,n1,n2){
    var arr1=[],len=n2||arr.length-1;
    for(var i=n1;i<=len;i++){
        arr1.push(arr[i])
    }
    return arr1;
}
//9筛选数组////////////////////////////////////////
// /删除值为'val'的数组元素
//removeArrayForValue(['test','test1','test2','test','aaa'],'test','%')
//["aaa"]   带有'test'的都删除
    
//removeArrayForValue(['test','test1','test2','test','aaa'],'test')
//["test1", "test2", "aaa"]  //数组元素的值全等于'test'才被删除
function removeArrayForValue(arr,val,type){
    return arr.filter(function (item) {
        return type? item.indexOf(val) === -1 : item !== val
    })
}

