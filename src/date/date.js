//时间戳转换为年月日格式的时间   10位时间戳 转换到分钟
function getShortTime(nS) {     
   return new Date(parseInt(nS) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ');     
}
//时间戳转换为年月日格式的时间   13位时间戳 转换到秒
function getLocalTime(nS){
	return new Date(parseInt(nS)).toLocaleString().substr(0, 19)
}

// 5-7Date日期时间部分///////////////////////////
//到某一个时间的倒计时
//getEndTime('2017/7/22 16:0:0')
//"剩余时间6天 2小时 28 分钟20 秒"
// 支持格式  2017/7/22 16:0:0   或者时间戳  1517465832000  不支持'2018年2月1日...'这种格式
function getEndTime(endTime){
    var startDate=new Date();  //开始时间，当前时间
    var endDate=new Date(endTime); //结束时间，需传入时间参数
    var t=endDate.getTime()-startDate.getTime();  //时间差的毫秒数
    var d=0,h=0,m=0,s=0;
    if(t>=0){
      d=Math.floor(t/1000/3600/24);
      h=Math.floor(t/1000/60/60%24);
      m=Math.floor(t/1000/60%60);
      s=Math.floor(t/1000%60);
    } 
    return "剩余时间"+d+"天 "+h+"小时 "+m+" 分钟"+s+" 秒";
}

//获取时间的年月日格式  
function getCurrentTime(time,type){ // 都可不传 time为时间 支持  '2017/7/22 16:0:0'   或者时间戳  1517465832000  不支持'2018年2月1日...'这种格式 
//type为转换结果类型
//1 :毫秒
//2 :秒
//3 :分
//4 :日 
	var date = time?  new Date(time) : new Date();
	var year = date.getFullYear(), //年
		month = date.getMonth() + 1,//月
		day = date.getDate(), //日
		week = date.getDay(),  //周几
		hour = date.getHours(), //小时
		Minutes = date.getMinutes(), //分钟
		seconds = date.getSeconds(),  //秒
		Milliseconds =date.getMilliseconds(); //毫秒 
		var time;
   switch(type){
   		case 0:
   		      return time = year + '年' + month + '月' + day +'日' + hour + '小时' + Minutes + '分' + seconds +'秒' + Milliseconds + '毫秒';
   		      break;
   		case 1:
   			  return time = year + '年' + month + '月' + day +'日' + hour + '小时' + Minutes + '分' + seconds +'秒';
   			  break;
   		case 2:
   			  return time = year + '年' + month + '月' + day +'日' + hour + '小时' + Minutes + '分';
   			  break;
        case 3:
   			  return time = year + '年' + month + '月' + day +'日';	
   			  break;
        default:
              return dates.getYMD(arguments[0]) + arguments[1] + dates.getHMS(arguments[2]);
              break;   	

   }

	// var time = 	year + '年' + month + '月' + day +'日' + hour + '小时' + Minutes + '分' + seconds +'秒' + Milliseconds + '毫秒';
	// var time = 	year + '年' + month + '月' + day +'日' + hour + '小时' + Minutes + '分' ;
		// day = date.getDay()

}

function longestWord(str, splitType) {
    var _splitType = splitType || /\s+/g,
        _max = 0, _item = '';
    var strArr = str.split(_splitType);
    strArr.forEach(function (item) {
        if (_max < item.length) {
            _max = item.length;
            _item = item;
        }
    });
    return {el: _item, max: _max};
}