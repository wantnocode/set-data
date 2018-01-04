/**
   * 功能描述：针对JS自身的Date对象做了一些更符合使用习惯的扩充和改进
   * 
   */
  /*
   * 继承Date
   */
  var dates = new Date();  //Object.create(Date);
  /*
  * 改进Date对象提供的getMonth方法
  */
 dates.getMonth = function(){
     let a = new Date();
      return a.getMonth() + 1;
 }
 /*
  * 返回年月日
  * @tag:设置分隔符，如果不设置，默认使用"-"
19  */
 dates.getYMD = function(tag){
     var tag = (tag === null || tag === undefined || tag === ""?"-":tag);
     tag = new String(tag);
     var ymd = 
             dates.getFullYear() + tag +
             dates.getMonth() + tag +
             dates.getDate();
     return ymd;
 }
 /*
  * 返回时分秒
  * @tag:设置分隔符，如果不设置，默认使用":"
  */
 dates.getHMS = function(tag){
     var tag = (tag === null || tag === undefined || tag === ""?":":tag);
     tag = new String(tag);
     var hms = 
             dates.getHours() + tag +
             dates.getMinutes() + tag +
             dates.getSeconds();
     return hms;
 }
 /*
  * 返回年月日时分秒
  */
 dates.getFullTime = function(){
     switch (arguments.length){ //完整的包括三个参数，年月日直接的分隔符，时分秒直接的分隔符，年月日和时分秒之间的分隔符
         case 0:
             //使用默认形式
             return dates.getYMD() + " " + dates.getHMS();
             break;
         case 1:
             //一个参数是全部使用该分隔符
             return dates.getYMD(arguments[0]) +  arguments[0] + dates.getHMS(arguments[0]);
            break;
         case 2:
             //两个参数是仅设置年月日和时分秒的分隔符
             return dates.getYMD(arguments[0]) + " " + dates.getHMS(arguments[1]);
             break;
         case 3:
             //三个参数是设置完整参数
             return dates.getYMD(arguments[0]) + arguments[1] + dates.getHMS(arguments[2]);
             break;
         default:
            return dates.getYMD(arguments[0]) + arguments[1] + dates.getHMS(arguments[2]);
            break;
     }
 }
 /*
 * 返回12小时制的时间  */
 dates.get12Hour = function(){
     return (dates.getHours() < 12?dates.getHours():dates.getHours()-12);
 }
 /*
  * 返回以当前日期为准，明天的日期
  */
 dates.getTomorrow = function(tag){
     var tag = (tag === null || tag === undefined || tag === ""?"-":tag);
     tag = new String(tag);
     tomo = dates.getDate() + 1;
     var ymd = 
             dates.getFullYear() + tag +
             dates.getMonth() + tag +
             tomo;
     return ymd;
 }