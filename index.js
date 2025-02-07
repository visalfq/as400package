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

module.exports = { hello, getstock, getcustomerinfo };