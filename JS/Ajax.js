/**
 * XMLHttpRequest 对象用于在后台与服务器交换数据。
 *
 * 所有现代浏览器 (IE7+、Firefox、Chrome、Safari 以及 Opera) 都内建了 XMLHttpRequest 对象。
 * xmlhttp=new XMLHttpRequest();
 *
 * 老版本的 Internet Explorer （IE5 和 IE6）使用 ActiveX 对象：
 * xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
 *
 */

/**
 * 一个简单的 http 请求
 */
 let xhr = new XMLHttpRequest();
 xhr.open('GET', '/url', true);
 xhr.send();



/**
 * 一个稍微完整的 http 请求
 */
let xhr = new XMLHttpRequest();

// 请求成功的回调
xhr.onload = e => {
  console.log('request success');
}

// 请求结束
xhr.onloadend = e => {
  console.log('request loadend');
}

// 请求错误
xhr.onerror = e => {
  console.log('request error');
}

//请求超时
xhr.ontimeout = e => {
  console.log('request timeout');
}

// 请求回调函数.XMLHttpRequest标准又分为Level 1和Level 2,这是Level 1和的回调处理方式
// xhr.onreadystatechange = () => {
//   if (xhr.readyState !== 4) {
//     return;
//   }
//   const status = xhr.status;
//   if ((status >= 200 && status < 300) || status === 304) {
//     console.log('request success');
//   } else {
//     console.log('request error');
//   }
// }

xhr.timeout = 0; // 设置超时时间，0 表示永不超时
// 初始化请求
xhr.open('GET/POST/DELETE/...', '/url', true || false);
// 设置期望的返回数据类型 'json' 'text' 'document' ...
xhr.responseType = '';
// 设置请求头
xhr.setRequestHeader('', '');
// 发送请求
xhr.send(null || new FormData || 'a=1&b=2' || 'json字符串');
