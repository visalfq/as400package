module.exports = hello
module.exports.getstock = getstock
module.exports.getcustomerinfo = getcustomerinfo

function hello(item)
{
    return "Hello" + item;
}
function getstock(item,qty)
{
    return "getstock" +";"+ item+";" + qty;
}
function getcustomerinfo(customernumber)
{
    return "getcustomerino" + customernumber;
}



