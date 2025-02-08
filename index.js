function getstock(item,qty) {
    return "getstock" +";"+ item+";" + qty;
  }
       function hellon(item) {
        return "Hellonn" + item;
    }
    function getcustomerinfo(customernumber){
        return "getcustomerino" + customernumber;
    }
    function getstockandprice(pjs,customernumber,shiptonumber,item,qty) {
        const moment = require('moment');
        const params = {
          "Cmp": 1,
          "Cust": customernumber,
          "Item": item,
          "Loc": shiptonumber,
          "Bpcd": "",
          "Qty": qty,
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
          "Shipto": shiptonumber,
          "Cucst": ""
        }
        params.Cmp = params.Cmp.toString().padStart(3, "0");
        params.Cust = params.Cust.toString().padStart(7, "0");
        params.Loc = params.Loc.toString().padEnd(4, " ");
        params.Qty = (params.Qty * 100).toString().padStart(11, "0");
        
        if(params.Date == null){
          params.Date = moment().format('YYYYMMDD');
        }
        var outPrice;
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

        pjs.call("COGTPRB", pjs.refParm("parm1"), pjs.refParm("parm2"), pjs.refParm("parm3"), pjs.refParm("parm4"), pjs.refParm("parm5"), pjs.refParm("parm6"), pjs.refParm("parm7"), pjs.refParm("parm8"));
        //pjs.call("COGTPRB", params["Cmp"], params["Cust"], params["Item"], params["Loc"], params["Bpcd"],params["Qty"],params["Date"], params["Pric"]);

        outPrice =pjs.get("parm8");
        return "getstock" +";"+ customernumber + "," + shiptonumber + "," +  item+";" + qty + "," + outPrice;
      }
 
exports.getstock = getstock;
exports.hellon = hellon;
exports.getcustomerinfo = getcustomerinfo;
exports.getstockandprice = getstockandprice;