export default {
  UrlSearch: function (paraName) {
    // 获取地址栏地址
    var url = document.location.toString()
    var arrObj = url.split('?')
    if (arrObj.length > 1) {
      var arrPara = arrObj[arrObj.length - 1].split('&')
      var arr
      for (var i = 0; i < arrPara.length; i++) {
        arr = arrPara[i].split('=')
        if (arr != null && arr[0] === paraName) {
          return arr[1]
        }
      }
      return ''
    } else {
      return ''
    }
  },
  /**
   * 时间公用方法
   * @param {*时间戳或者时间格式} timestamp 
   * @param {*} option     1、'':默认年月日 2、week:周  3、notime：时分  4、months：月日 5、second：年月日时分秒 6、time：时分秒   7、year：年月}
   */
  timeConversion(timestamp, option) {
    var date
    let timestamps = '' + timestamp
    if (timestamps.length > 13) {
      date = new Date(timestamp)
    } else {

      if (timestamps.length != 13) {
        timestamp = Number(timestamp) * 1000
      } else if (timestamps.length == 13) {
        timestamp = Number(timestamp)
      }
      date = new Date(timestamp)
    }
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()
    var week = date.getDay()
    if (month < 10) {
      month = '0' + month
    }
    if (day < 10) {
      day = '0' + day
    }
    var hour = function () {
      if (date.getHours() < 10) {
        return '0' + date.getHours()
      }
      return date.getHours()
    }
    var minute = function () {
      if (date.getMinutes() < 10) {
        return '0' + date.getMinutes()
      }
      return date.getMinutes()
    }
    var second = function () {
      if (date.getSeconds() < 10) {
        return '0' + date.getSeconds()
      }
      return date.getSeconds()
    }

    var str = ''
    if (week == 0) {
      str = '周日'
    } else if (week == 1) {
      str = '周一'
    } else if (week == 2) {
      str = '周二'
    } else if (week == 3) {
      str = '周三'
    } else if (week == 4) {
      str = '周四'
    } else if (week == 5) {
      str = '周五'
    } else if (week == 6) {
      str = '周六'
    }
    if (option == 'notime') {
      //不需要时间
      return hour() + ' : ' + minute()
    }
    if (option == 'months') {
      // 月/日
      return month + '-' + day
    }
    if (option == 'week') {
      // 周
      return str
    }
    if (option == 'second') {
      //年月日时分秒
      return year + '-' + month + '-' + day + '  ' + hour() + ':' + minute() + ':' + second()
    }
    if (option == 'time') {
      //时分秒
      return hour() + ':' + minute() + ':' + second()
    }
    if (option == 'year') {
      //年月
      return year + '-' + month
    }
    return year + '-' + month + '-' + day
  },
  /**
   * 
   * @param {倒计时时间戳} time 
   * @param {*} option  {0:输出arr[天，时，分，秒]，1：输出'*天*时*分*秒'，2：输出'*时*分*秒'，3：输出'*时*分'，4：输出'*秒'}
   */
  countDown(time, option) {
    var shengyuD = parseInt(time / (60 * 60 * 24 * 1000)); //转换为天
    var D = parseInt(time) - parseInt(shengyuD * 60 * 60 * 24 * 1000); //除去天的毫秒数
    var shengyuH = parseInt(D / (60 * 60 * 1000)); //除去天的毫秒数转换成小时
    var H = D - shengyuH * 60 * 60 * 1000; //除去天、小时的毫秒数
    var shengyuM = parseInt(H / (60 * 1000)); //除去天的毫秒数转换成分钟
    var M = H - shengyuM * 60 * 1000; //除去天、小时、分的毫秒数
    var shengyuS = parseInt(M / 1000) //除去天、小时、分的毫秒数转化为秒
    if (option == 0) {
      return [shengyuD, shengyuH, shengyuM, shengyuS];
    } else if (option == 1) {
      return shengyuD + '天' + shengyuH + '时' + shengyuM + '分' + shengyuS + '秒'
    } else if (option == 2) {
      return (shengyuH + shengyuD * 24) + '时' + shengyuM + '分' + shengyuS + '秒'
    } else if (option == 3) {
      return (shengyuH + shengyuD * 24) + '时' + shengyuM + '分'
    } else if (option == 4) {
      return (shengyuD * 24 * 60 * 60 + shengyuH * 60 * 60 + shengyuM * 60 + shengyuS) + '秒'
    }
  },
  /**
   *  判断浏览器(微信，支付宝，京东，云闪付)
   */
  explorerJudge() {
    var payWay
    var ua = navigator.userAgent.toLowerCase() // 获是什么取浏览器
    // eslint-disable-next-line eqeqeq
    if (ua.match(/micromessenger/i) == 'micromessenger') {
      // 微信
      payWay = '00'
      // eslint-disable-next-line eqeqeq
    } else if (ua.match(/alipayclient/i) == 'alipayclient') {
      // 支付宝
      payWay = '01'
      // eslint-disable-next-line eqeqeq
    } else if (ua.match(/jdpay/i) == 'jdpay') {
      // 京东
      payWay = '02'
      // eslint-disable-next-line eqeqeq
    } else if (ua.match(/unionpay/i) == 'unionpay') {
      // 云闪付
      payWay = '09'
    }
    return payWay
  },
  /**
   * 小数点保留  val值 number 保留位数
   */
  decimalPoint(val,number){
      return num = val.toFixed(number);
  },
  /**
   * 分享到 朋友圈，朋友，（新旧版本，线上测试有效）
   */
  sharea(){
     // 分享
     this.$axios
     .get("sharing/weixin/getShareSign", {
       params: {
         url: window.location.href
       }
     })
     .then(res => {
       console.log(res);
       if (res.data.code == 0) {
         let url = localStorage.getItem('url')
         let _url = url+'/sharing/weixin/authorize';
         wx.config({
           debug: false,
           appId: res.data.data.appId,
           timestamp: res.data.data.timestamp,
           nonceStr: res.data.data.noncestr,
           signature: res.data.data.signature,
           jsApiList: ["updateAppMessageShareData", "updateTimelineShareData","onMenuShareAppMessage","onMenuShareTimeline"]
         });
         wx.ready(function() {
           //新旧接口分享朋友圈和朋友
           wx.updateAppMessageShareData({
             title: "反调雪山跨年电音节", // 分享标题
             desc: "12月31日最后的狂欢，你从未体验过的雪山电音狂欢派对，与2020位“反调”青年一起在跨年之夜做另一个自己。",
             link: _url, // 分享链接
             imgUrl: "https://72cm.oss-cn-beijing.aliyuncs.com/index/integral/newYearActive/shareImg.png" // 分享图标
           });
           wx.updateTimelineShareData({
             title: "反调雪山跨年电音节", // 分享标题
             desc: "12月31日最后的狂欢，你从未体验过的雪山电音狂欢派对，与2020位“反调”青年一起在跨年之夜做另一个自己。",
             link: _url, // 分享链接
             imgUrl: "https://72cm.oss-cn-beijing.aliyuncs.com/index/integral/newYearActive/shareImg.png" // 分享图标
           });
           wx.onMenuShareAppMessage({
               title: "反调雪山跨年电音节", // 分享标题
               desc: "12月31日最后的狂欢，你从未体验过的雪山电音狂欢派对，与2020位“反调”青年一起在跨年之夜做另一个自己。",
               link: _url, // 分享链接
               imgUrl: "https://72cm.oss-cn-beijing.aliyuncs.com/index/integral/newYearActive/shareImg.png" // 分享图标
           });
             // 分享到朋友圈
           wx.onMenuShareTimeline({
               title: "反调雪山跨年电音节", // 分享标题
               desc: "12月31日最后的狂欢，你从未体验过的雪山电音狂欢派对，与2020位“反调”青年一起在跨年之夜做另一个自己。",
               link: _url, // 分享链接
               imgUrl: "https://72cm.oss-cn-beijing.aliyuncs.com/index/integral/newYearActive/shareImg.png" // 分享图标
           })
         });
       }
     });

  }
}
