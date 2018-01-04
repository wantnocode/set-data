// 数组去重
function removeRepeatArray(arr){  
 var res = []; 
 var json = {};
 for(var i = 0; i < arr.length; i++){
	  if(!json[arr[i]]){
		   res.push(arr[i]);
		   json[arr[i]] = 1;
	  }
 }
 return res;
}
//随机打乱数组
function upsetArr(arr){ 
	//random() 方法可返回介于 0 ~ 1 之间的一个随机数。 sort 对数组进行排序
	 return arr.sort(function(){ return Math.random() - 0.5});
}
 //获取数组的最大值  针对数组元素都为number
function maxArr(arr){ 
    var max =arr[0];  //初始值为数组第一个元素 
    for(var i =1;i<arr.length;i++){  //循环数组 依次进行元素大小对比 取最大值
    	if(arr[i]>max){
    		max = arr[i];
    	}
    }
    return max;
}
 //获取数组的最小值  针对数组元素都为number
function minArr(arr){ 
    var max =arr[0];
    for(var i =1;i<arr.length;i++){  //初始值为数组的第一个元素 循环数组进行大小比较 取最小值
    	if(arr[i] < max){
    		max = arr[i];
    	}
    }
    return max;
}
//获取数组元素的和 针对数组元素都为number
function sumArr(arr){
    var sum=0;   //初始值sum为0
    for(var i=0,len=arr.length;i<len;i++){ //循环数组 依次相加元素  取元素的和  
        sum+=arr[i];
    }
    return sum
}
//获取数组元素的平均值  针对数组元素都为number
function covArr(arr){
    var sum=sumArr(arr);   //求和  原理同上 
    var cov=sum/arr.length;  // 和/数组的length 长度 求平均值  
    return cov
}
//随机获取数组中一个元素
function randomArr(arr) {
    return arr[Math.floor(Math.random() * arr.length)];   // Math.random()产生0-1一个随机数 然后与个数相乘 然后Math.floor
    														// 四舍五入取整 得到索引 然后返回该索引的元素
}

//获取数组出现次数最多的某个元素
function getEleCount (obj, ele) { // obj为数组/对象  ele是该对象中求取次数的某个元素 
    var num = 0;                  //初始值为0
    for (var i = 0, len = obj.length; i < len; i++) { // 循环该对象/数组  如果循环中此元素与所求次数元素相同 那么给num+1
        if (ele == obj[i]) {
            num++;
        }
    }
    return num;  //返回num  次数
}
//获取数组中各个元素出现的次数  返回值为数组[{el:'元素',count:出现次数},{...},{...}]
// arr数组   rank 指定出现数组的个数 可以不传 默认全部  ranktype为升序排列 从少的次数到多的次数
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
    //保存结果{el:'元素'，count:出现次数}
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
//数组的截取,根据下标截取 返回一个新数组
//arr数组  n1 开始下标  n2 结束下标
function getArrayNum(arr,n1,n2){
    var arr1=[],len=n2||arr.length-1;   //设置初始值arr1为[]  len为结束下标 如果传值为所传的值 不传就是到数组结尾
    for(var i=n1;i<=len;i++){  //设置数组初始索引 以及结束索引 向arr1追加
        arr1.push(arr[i])
    }
    return arr1;  //返回arr1
}

//数组元素的删除 返回值为一个数组
// arr为数组 val为删除的元素  type为匹配模式为模糊还是完全匹配
function removeArrayForValue(arr,val,type){
    return arr.filter(function (item) {
        return type? item.indexOf(val) === -1 : item !== val
    })
}
