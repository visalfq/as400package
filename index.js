function getstock(item,qty) {
    return "getstock" +";"+ item+";" + qty;
  }
       function hellon(item) {
        return "Hellon" + item;
    }
    function getcustomerinfo(customernumber){
        return "getcustomerino" + customernumber;
    }
 
exports.getstock = getstock;
exports.hellon = hellon;
exports.getcustomerinfo = getcustomerinfo;