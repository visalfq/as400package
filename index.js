
function getstock(item,qty) {
    return "getstock" +";"+ item+";" + qty;
  }
       function hellon(item) {
        return "Hellonn" + item;
    }
    function getcustomerinfo(customernumber){
        return "getcustomerino" + customernumber;
    }
    function getstockandprice(pj1,customernumber,shiptonumber,item,qty) {
      var outPrice="";
      var customernumber1=customernumber;
      var shiptonumber1=shiptonumber;
      var item1=item;
      var qty1=qty;
      const moment = require('moment');
              const params = {
                "Cmp": 1,
                "Cust": customernumber1,
                "Item": item1,
                "Loc": shiptonumber1,
                "Bpcd": "",
                "Qty": qty1,
                "Date": null,
                "Pric": "",
                "Cost": "",
                "Rebt": "",
                "Dsc": "",
                "Uom": null,
                "Cont": "",
                "Psrc": "",
                "Apric": "",
                "In01": "",
                "Ord": 0,
                "Bocd": 0,
                "Line": 0,
                "Crcd": "",
                "Source": "",
                "Pprc": "",
                "Kitm": "",
                "Kuom": "",
                "Shipto": shiptonumber1,
                "Cucst": ""
              }
              params.Cmp = params.Cmp.toString().padStart(3, "0");
              params.Cust = params.Cust.toString().padStart(7, "0");
              params.Loc = params.Loc.toString().padEnd(4, " ");
              params.Qty = (params.Qty * 100).toString().padStart(11, "0");
              
              if(params.Date == null){
                params.Date = moment().format('YYYYMMDD');
              }
        pj1.define("parm1", { type: "char", length: 3 });
        pj1.define("parm2", { type: "char", length: 7 });
        pj1.define("parm3", { type: "char", length: 20 });
        pj1.define("parm4", { type: "char", length: 4 });
        pj1.define("parm5", { type: "char", length: 2 });
        pj1.define("parm6", { type: "char", length: 9 });
        pj1.define("parm7", { type: "char", length: 8 });
        pj1.define("parm8", { type: "char", length: 11 });
        
        pj1.define("parm9", { type: "char", length: 11 });
        pj1.define("parm10", { type: "char", length: 11 });
        pj1.define("parm11", { type: "char", length: 3 });
        pj1.define("parm12", { type: "char", length: 3 });
        pj1.define("parm13", { type: "char", length: 1 });
        pj1.define("parm14", { type: "char", length: 15 });
        pj1.define("parm15", { type: "char", length: 1 });
        pj1.define("parm16", { type: "char", length: 1 });
        pj1.define("parm17", { type: "packed decimal", length: 9, decimals: 0 });
        pj1.define("parm18", { type: "packed decimal", length: 3, decimals: 0 });
        pj1.define("parm19", { type: "packed decimal", length: 4, decimals: 0 });
        pj1.define("parm20", { type: "char", length: 3 });
        pj1.define("parm21", { type: "char", length: 1 });
        pj1.define("parm22", { type: "char", length: 1 });
        pj1.define("parm23", { type: "char", length: 20 });
        pj1.define("parm24", { type: "char", length: 3 });
        pj1.define("parm25", { type: "char", length: 7 });
        pj1.define("parm26", { type: "char", length: 11 });
        
      
        pj1.set("parm1", params["Cmp"]);
        pj1.set("parm2", params["Cust"]);
        pj1.set("parm3", params["Item"]);
        pj1.set("parm4", params["Loc"]);
        pj1.set("parm5", params["Bpcd"]);
        pj1.set("parm6", params["Qty"]);
        pj1.set("parm7", params["Date"]);
        pj1.set("parm8", outPrice);
        
        pj1.set("parm9", params["Cost"]);
        pj1.set("parm10", params["Rebt"]);
        pj1.set("parm11", params["Dsc"]);
        pj1.set("parm12", params["Uom"]);
        pj1.set("parm13", params["Cont"]);
        pj1.set("parm14", params["Psrc"]);
        pj1.set("parm15", params["Apric"]);
        pj1.set("parm16", params["In01"]);
        pj1.set("parm17", params["Ord"]);
        pj1.set("parm18", params["Bocd"]);
        pj1.set("parm19", params["Line"]);
        pj1.set("parm20", params["Crcd"]);
        pj1.set("parm21", params["Source"]);
        pj1.set("parm22", params["Pprc"]);
        pj1.set("parm23", params["Kitm"]);
        pj1.set("parm24", params["Kuom"]);
        pj1.set("parm25", params["Shipto"]);
        pj1.set("parm26", params["Cucst"]);
      
        pj1.call("COGTPRB", pj1.refParm("parm1"), pj1.refParm("parm2"), pj1.refParm("parm3"), pj1.refParm("parm4"), pj1.refParm("parm5"), pj1.refParm("parm6"), pj1.refParm("parm7"), pj1.refParm("parm8"), pj1.refParm("parm9"), pj1.refParm("parm10"), pj1.refParm("parm11"), pj1.refParm("parm12"), pj1.refParm("parm13"), pj1.refParm("parm14"), pj1.refParm("parm15"), pj1.refParm("parm16"), pj1.refParm("parm17"), pj1.refParm("parm18"), pj1.refParm("parm19"), pj1.refParm("parm20"), pj1.refParm("parm21"), pj1.refParm("parm22"), pj1.refParm("parm23"), pj1.refParm("parm24"), pj1.refParm("parm25"), pj1.refParm("parm26"));
        //pj1.call("COGTPRB", pj1.refParm("parm1"), pj1.refParm("parm2"), pj1.refParm("parm3"), pj1.refParm("parm4"), pj1.refParm("parm5"), pj1.refParm("parm6"), pj1.refParm("parm7"), pj1.refParm("parm8"));
      //return "1";
        outPrice = pj1.get("parm8");
        return outPrice;
      }
 
exports.getstock = getstock;
exports.hellon = hellon;
exports.getcustomerinfo = getcustomerinfo;
exports.getstockandprice = getstockandprice;