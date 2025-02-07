 function getstock(item,qty) {
    return "getstock" +";"+ item+";" + qty;
  }
 function hello(item) {
    return "Hello" + item;
  }
  function getcustomerinfo(customernumber) {
    return "getcustomerino" + customernumber;
  }

  module.exports = {
    getstock,
    hello,
    getcustomerinfo
  }