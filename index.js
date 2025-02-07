function getstock(item,qty) {
    return "getstock" +";"+ item+";" + qty;
  }
       function hello(item) {
        return "Hello" + item;
    }
    function getcustomerinfo(customernumber){
        return "getcustomerino" + customernumber;
    }
 
exports.getstock = getstock;
exports.hello = hello;
exports.getcustomerinfo = getcustomerinfo;