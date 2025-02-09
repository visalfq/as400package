function getstock(item,qty) {
    return "getstock" +";"+ item+";" + qty;
  }
       function hellon(item) {
        return "Hellonn" + item;
    }
    function getcustomerinfo(customernumber){
        return "getcustomerino" + customernumber;
    }
    async function getstockandprice(customernumber,shiptonumber,item,qty) {
      var outPrice="";
      var customernumber1=customernumber;
      var shiptonumber1=shiptonumber;
      var item1=item;
      var qty1=qty;
      const moment = require('moment');
      const pjs = require('profoundjs');
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
      pjs.define("parm1", { type: "char", length: 3 });
      pjs.define("parm2", { type: "char", length: 7 });
      pjs.define("parm3", { type: "char", length: 20 });
      pjs.define("parm4", { type: "char", length: 4 });
      pjs.define("parm5", { type: "char", length: 2 });
      pjs.define("parm6", { type: "char", length: 9 });
      pjs.define("parm7", { type: "char", length: 8 });
      pjs.define("parm8", { type: "char", length: 11 });
      
      pjs.define("parm9", { type: "char", length: 11 });
      pjs.define("parm10", { type: "char", length: 11 });
      pjs.define("parm11", { type: "char", length: 3 });
      pjs.define("parm12", { type: "char", length: 3 });
      pjs.define("parm13", { type: "char", length: 1 });
      pjs.define("parm14", { type: "char", length: 15 });
      pjs.define("parm15", { type: "char", length: 1 });
      pjs.define("parm16", { type: "char", length: 1 });
      pjs.define("parm17", { type: "packed decimal", length: 9, decimals: 0 });
      pjs.define("parm18", { type: "packed decimal", length: 3, decimals: 0 });
      pjs.define("parm19", { type: "packed decimal", length: 4, decimals: 0 });
      pjs.define("parm20", { type: "char", length: 3 });
      pjs.define("parm21", { type: "char", length: 1 });
      pjs.define("parm22", { type: "char", length: 1 });
      pjs.define("parm23", { type: "char", length: 20 });
      pjs.define("parm24", { type: "char", length: 3 });
      pjs.define("parm25", { type: "char", length: 7 });
      pjs.define("parm26", { type: "char", length: 11 });
      
    
      pjs.set("parm1", params["Cmp"]);
      pjs.set("parm2", params["Cust"]);
      pjs.set("parm3", params["Item"]);
      pjs.set("parm4", params["Loc"]);
      pjs.set("parm5", params["Bpcd"]);
      pjs.set("parm6", params["Qty"]);
      pjs.set("parm7", params["Date"]);
      pjs.set("parm8", outPrice);
      
      pjs.set("parm9", params["Cost"]);
      pjs.set("parm10", params["Rebt"]);
      pjs.set("parm11", params["Dsc"]);
      pjs.set("parm12", params["Uom"]);
      pjs.set("parm13", params["Cont"]);
      pjs.set("parm14", params["Psrc"]);
      pjs.set("parm15", params["Apric"]);
      pjs.set("parm16", params["In01"]);
      pjs.set("parm17", params["Ord"]);
      pjs.set("parm18", params["Bocd"]);
      pjs.set("parm19", params["Line"]);
      pjs.set("parm20", params["Crcd"]);
      pjs.set("parm21", params["Source"]);
      pjs.set("parm22", params["Pprc"]);
      pjs.set("parm23", params["Kitm"]);
      pjs.set("parm24", params["Kuom"]);
      pjs.set("parm25", params["Shipto"]);
      pjs.set("parm26", params["Cucst"]);
    
      pjs.call("COGTPRB", pjs.refParm("parm1"), pjs.refParm("parm2"), pjs.refParm("parm3"), pjs.refParm("parm4"), pjs.refParm("parm5"), pjs.refParm("parm6"), pjs.refParm("parm7"), pjs.refParm("parm8"), pjs.refParm("parm9"), pjs.refParm("parm10"), pjs.refParm("parm11"), pjs.refParm("parm12"), pjs.refParm("parm13"), pjs.refParm("parm14"), pjs.refParm("parm15"), pjs.refParm("parm16"), pjs.refParm("parm17"), pjs.refParm("parm18"), pjs.refParm("parm19"), pjs.refParm("parm20"), pjs.refParm("parm21"), pjs.refParm("parm22"), pjs.refParm("parm23"), pjs.refParm("parm24"), pjs.refParm("parm25"), pjs.refParm("parm26"));
      //pjs.call("COGTPRB", pjs.refParm("parm1"), pjs.refParm("parm2"), pjs.refParm("parm3"), pjs.refParm("parm4"), pjs.refParm("parm5"), pjs.refParm("parm6"), pjs.refParm("parm7"), pjs.refParm("parm8"));
    //return "1";
      outPrice = pjs.get("parm8");
      return outPrice;
    }

    async function getstockandprice1(pjs1,customernumber,shiptonumber,item,qty) {
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
      pjs1.define("parm1", { type: "char", length: 3 });
      pjs1.define("parm2", { type: "char", length: 7 });
      pjs1.define("parm3", { type: "char", length: 20 });
      pjs1.define("parm4", { type: "char", length: 4 });
      pjs1.define("parm5", { type: "char", length: 2 });
      pjs1.define("parm6", { type: "char", length: 9 });
      pjs1.define("parm7", { type: "char", length: 8 });
      pjs1.define("parm8", { type: "char", length: 11 });
      
      pjs1.define("parm9", { type: "char", length: 11 });
      pjs1.define("parm10", { type: "char", length: 11 });
      pjs1.define("parm11", { type: "char", length: 3 });
      pjs1.define("parm12", { type: "char", length: 3 });
      pjs1.define("parm13", { type: "char", length: 1 });
      pjs1.define("parm14", { type: "char", length: 15 });
      pjs1.define("parm15", { type: "char", length: 1 });
      pjs1.define("parm16", { type: "char", length: 1 });
      pjs1.define("parm17", { type: "packed decimal", length: 9, decimals: 0 });
      pjs1.define("parm18", { type: "packed decimal", length: 3, decimals: 0 });
      pjs1.define("parm19", { type: "packed decimal", length: 4, decimals: 0 });
      pjs1.define("parm20", { type: "char", length: 3 });
      pjs1.define("parm21", { type: "char", length: 1 });
      pjs1.define("parm22", { type: "char", length: 1 });
      pjs1.define("parm23", { type: "char", length: 20 });
      pjs1.define("parm24", { type: "char", length: 3 });
      pjs1.define("parm25", { type: "char", length: 7 });
      pjs1.define("parm26", { type: "char", length: 11 });
      
    
      pjs1.set("parm1", params["Cmp"]);
      pjs1.set("parm2", params["Cust"]);
      pjs1.set("parm3", params["Item"]);
      pjs1.set("parm4", params["Loc"]);
      pjs1.set("parm5", params["Bpcd"]);
      pjs1.set("parm6", params["Qty"]);
      pjs1.set("parm7", params["Date"]);
      pjs1.set("parm8", outPrice);
      
      pjs1.set("parm9", params["Cost"]);
      pjs1.set("parm10", params["Rebt"]);
      pjs1.set("parm11", params["Dsc"]);
      pjs1.set("parm12", params["Uom"]);
      pjs1.set("parm13", params["Cont"]);
      pjs1.set("parm14", params["Psrc"]);
      pjs1.set("parm15", params["Apric"]);
      pjs1.set("parm16", params["In01"]);
      pjs1.set("parm17", params["Ord"]);
      pjs1.set("parm18", params["Bocd"]);
      pjs1.set("parm19", params["Line"]);
      pjs1.set("parm20", params["Crcd"]);
      pjs1.set("parm21", params["Source"]);
      pjs1.set("parm22", params["Pprc"]);
      pjs1.set("parm23", params["Kitm"]);
      pjs1.set("parm24", params["Kuom"]);
      pjs1.set("parm25", params["Shipto"]);
      pjs1.set("parm26", params["Cucst"]);
    
      pjs1.call("COGTPRB", pjs1.refParm("parm1"), pjs1.refParm("parm2"), pjs1.refParm("parm3"), pjs1.refParm("parm4"), pjs1.refParm("parm5"), pjs1.refParm("parm6"), pjs1.refParm("parm7"), pjs1.refParm("parm8"), pjs1.refParm("parm9"), pjs1.refParm("parm10"), pjs1.refParm("parm11"), pjs1.refParm("parm12"), pjs1.refParm("parm13"), pjs1.refParm("parm14"), pjs1.refParm("parm15"), pjs1.refParm("parm16"), pjs1.refParm("parm17"), pjs1.refParm("parm18"), pjs1.refParm("parm19"), pjs1.refParm("parm20"), pjs1.refParm("parm21"), pjs1.refParm("parm22"), pjs1.refParm("parm23"), pjs1.refParm("parm24"), pjs1.refParm("parm25"), pjs1.refParm("parm26"));
      //pjs1.call("COGTPRB", pjs1.refParm("parm1"), pjs1.refParm("parm2"), pjs1.refParm("parm3"), pjs1.refParm("parm4"), pjs1.refParm("parm5"), pjs1.refParm("parm6"), pjs1.refParm("parm7"), pjs1.refParm("parm8"));
    //return "1";
      outPrice = pjs1.get("parm8");
      return outPrice;
    }

    
 
exports.getstock = getstock;
exports.hellon = hellon;
exports.getcustomerinfo = getcustomerinfo;
exports.getstockandprice = getstockandprice;
exports.getstockandprice1 = getstockandprice1;