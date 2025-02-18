import pjs from 'profoundjs';
import moment from 'moment';
export async function hellomjs(item) {
return "Hellonn" + item;
}
   export async function getstockandpricemultipleitems(customernumber,shiptonumber,itemlist,qtylist) {
    var outprice="";
    const items = itemlist.split(","); 
    const qtys = qtylist.split(","); 
    let prices = [];
    const params = {
      "Cmp": 1,
      "Cust": customernumber,
      "Item": "",
      "Loc": shiptonumber,
      "Bpcd": "",
      "Qty": "",
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
    if(params.Date == null){
      params.Date = moment().format('YYYYMMDD');
    }

    try
    {
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
      pjs.set("parm4", params["Loc"]);
      pjs.set("parm5", params["Bpcd"]);
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
      var pricesval = new Object();
      for (let i = 0; i < items.length; i++) {
        pjs.set("parm3", items[i]);
        pjs.set("parm6", qtys[i]);
        pjs.set("parm8", outprice);
        call("COGTPRB", refParm("parm1"), refParm("parm2"), refParm("parm3"), refParm("parm4"), refParm("parm5"), refParm("parm6"), refParm("parm7"), refParm("parm8"), refParm("parm9"), refParm("parm10"), refParm("parm11"), refParm("parm12"), refParm("parm13"), refParm("parm14"), refParm("parm15"), refParm("parm16"), refParm("parm17"), refParm("parm18"), refParm("parm19"), refParm("parm20"), refParm("parm21"), refParm("parm22"), refParm("parm23"), refParm("parm24"), refParm("parm25"), refParm("parm26"));
        outprice = pjs.get("parm8");
        outprice = (Math.round(outprice * 100) / 1000000).toFixed(2);
        pricesval = new Object();
        pricesval.item_number = items[i];
        pricesval.item_name = "";
        pricesval.vendor_name = "";
        pricesval.vendor_part_number = "";
        pricesval.msds_code = "";
        pricesval.dea_controlled_substance_code = "";
        pricesval.item_price = outprice;
        pricesval.unit_of_measure = "";
        pricesval.is_available = false;
        pricesval.has_purchase_history = false;
        pricesval.is_active = false;
        pricesval.balance_available = 0;
        pricesval.error_message = "";
        pricesval.next_qty_break = 0;
        pricesval.next_qty_break_type = "";
        pricesval.next_qty_break_price_or_discount = "";
        pricesval.image_ur_ls = "";
        pricesval.special_code = "";
        pricesval.item_type = "";
        pricesval.is_agency = false;
        pricesval.is_drop_ship = false;
        pricesval.is_discontinued = false;
        prices.push(pricesval);
      }
      return prices;
    }
    catch(error)
    {
        return error.message + ":" + error.name;
    }
  }

  export  async function getstockandprice(customernumber,shiptonumber,item,qty) {
    var outPrice="";
    var customernumber1=customernumber;
    var shiptonumber1=shiptonumber;
    var item1=item;
    var qty1=qty;
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
    define("parm1", { type: "char", length: 3 });
    define("parm2", { type: "char", length: 7 });
    define("parm3", { type: "char", length: 20 });
    define("parm4", { type: "char", length: 4 });
    define("parm5", { type: "char", length: 2 });
    define("parm6", { type: "char", length: 9 });
    define("parm7", { type: "char", length: 8 });
    define("parm8", { type: "char", length: 11 });
    
    define("parm9", { type: "char", length: 11 });
    define("parm10", { type: "char", length: 11 });
    define("parm11", { type: "char", length: 3 });
    define("parm12", { type: "char", length: 3 });
    define("parm13", { type: "char", length: 1 });
    define("parm14", { type: "char", length: 15 });
    define("parm15", { type: "char", length: 1 });
    define("parm16", { type: "char", length: 1 });
    define("parm17", { type: "packed decimal", length: 9, decimals: 0 });
    define("parm18", { type: "packed decimal", length: 3, decimals: 0 });
    define("parm19", { type: "packed decimal", length: 4, decimals: 0 });
    define("parm20", { type: "char", length: 3 });
    define("parm21", { type: "char", length: 1 });
    define("parm22", { type: "char", length: 1 });
    define("parm23", { type: "char", length: 20 });
    define("parm24", { type: "char", length: 3 });
    define("parm25", { type: "char", length: 7 });
    define("parm26", { type: "char", length: 11 });
    
  
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
    call("COGTPRB", refParm("parm1"), refParm("parm2"), refParm("parm3"), refParm("parm4"), refParm("parm5"), refParm("parm6"), refParm("parm7"), refParm("parm8"), refParm("parm9"), refParm("parm10"), refParm("parm11"), refParm("parm12"), refParm("parm13"), refParm("parm14"), refParm("parm15"), refParm("parm16"), refParm("parm17"), refParm("parm18"), refParm("parm19"), refParm("parm20"), refParm("parm21"), refParm("parm22"), refParm("parm23"), refParm("parm24"), refParm("parm25"), refParm("parm26"));
    outPrice = get("parm8");
    outprice = (Math.round(outprice * 100) / 1000000).toFixed(2);
    return outPrice;
  }

  export  async function getcustomer(companynumber,customernumber)
  {
    //returns customer and array of shipto objects
    var lno = 0;
    var _success = false;
    var _error = null;
    let customerinfo = [];
    let shipinfo = [];
    var _record = null;
    var _from = "varcust";
    var _filter = { 
      whereClause: `rmcust = ? and rmcmp = ?`,
      values: [customernumber, companynumber]
    };
    var _select = `rmcust,rmcmp,rmdel,rmloc,rmname,rmship`;
    lno=1;
    try
    {
      _record = await pjs.data.get(_from, _filter, 1, 0, null, _select);
      lno=2;
      _success = true;
      // If no record found
      if (!_record) {
        lno=9;
        customerinfo.push({customer_number:"-2",customer_name:"no data",ship_to_number:lno,shipping_addresses:shipinfo});
        _error = new Error("Record not found.")
        _success = false;
      }
      else
      {
        shipinfo.push({ship_to_no:_record["rmship"],ship_to_name:_record["rmship"],address1:_record["rmship"],address2:_record["rmship"],city:_record["rmship"],
          state:_record["rmship"],zip_code:_record["rmship"],is_default:_record["rmship"]});
        customerinfo.push({customer_number:_record["rmcust"],customer_name:_record["rmname"],ship_to_number:_record["rmship"],shipping_addresses:shipinfo});
        _error="";
        _success=true;
      }
    }
  catch(error)
  {
    customerinfo.push({customer_number:error.name,customer_name:error.message,ship_to_number:error.stack,shipping_addresses:shipinfo});
  }
    return customerinfo;
  }

  export  async function getallitems(code,name,pagenumber,numberofrecords)
    {
      let products ={};
      try
      {
        const codes = (code??[])
        .reduce((a,c)=>{
          a.push(... c.split(",").map(c=>c.trim()));
          return a;
        }, []);
      const names = (name??[])
        .reduce((a, n)=>{
          a.push(... n.split(",").map(n=>n.trim()));
          return a;
        }, []);
      const page = (pagenumber??1) -1;
      const limit = numberofrecords??100;
      
      const params = [];
      const namesLike = [];
      const codesIn = [];
      if(names.length){
        namesLike.push("and ( 1 = 2 ");
        const search = names
          .map(n=>`%${n.trim().toLowerCase()}%`);
        search.forEach((n=>{
          namesLike.push(` or lower(it.ICDSC1 || it.ICDSC2 || it.ICDSC3) like ?`)
        }));
        namesLike.push(")")
        params.push(...search);
      }
      if(codes.length){
        codesIn.push("and it.ICITEM in (")
        codes.forEach(c=>{
          codesIn.push(" ?,");
          params.push(c);
        });
        codesIn.pop();
        codesIn.push(" ?)");
      }
      params.push(page * limit);
      params.push(limit);
      const sql = `
      select
      it.ICCMP,  it.ICITEM, it.ICDEL,
      -- it.ICDSC1, it.ICDSC2, it.ICDSC3,
      it.ICDSC1 || it.ICDSC2 || it.ICDSC3 as name,
      it.ICDIV,  it.ICCLS,  it.ICSPCE,
      it.ICIUM, it.ICSUM,
      case 
        when it.ICDEL = 'A' then 'true'
        else 'false'
      end as active,
      ifnull(cat.rndcnm,' ') as category,
      case
        when ifnull(iex.expre,' ') = ' ' then 'Standard'
        else 'Medication'
      end as type,
      ifnull(pm.j6pl01, 0) as J6PL01,
      ifnull(@fupn, ' ') as FUPN
      from   vinitem it                                        
      left join vardicl cat 
              on (cat.rncmp, cat.rndiv, cat.rnclas) = (it.iccmp, it.icdiv, it.iccls)
      left join viniext iex
              on (iex.iccmp, iex.icitem) = (it.iccmp, it.icitem)
      left join vinpmat pm 
              on (pm.j6cmp, pm.j6item) = (it.iccmp, it.icitem)
      left join vinupn upn
              on (upn.@fcomp, upn.@fitem, upn.@fum) = (it.iccmp, it.icitem, it.icsum)
      
      where  it.ICDEL =  'A'
      ${namesLike.join("")}
      ${codesIn.join("")}
      offset ? rows 
      fetch first ? rows only
      `

      products = await pjs.query(await pjs.getDB("DB2"),sql,
      params)
      .map(r => {return { 
      "item_number": r.icitem,
      "item_name": r.name,
      "vendor_name": "",
      "vendor_part_number": "",
      "msds_code": "",
      "dea_controlled_substance_code": "",
      "item_price": r["j6pl01"],
      "unit_of_measure": r.icium,
      "is_available": r.active,
      "has_purchase_history": false,
      "is_active": r.active,
      "vendor_name": "",
      "balance_available":0,
      "error_message": "",
      "next_qty_break": 0,
      "vendor_name": "",
      "next_qty_break_price_or_discount": "",
      "image_ur_ls": "",
      "special_code": "",
      "item_type": "",
      "error_message": "",
      "is_agency": false,
      "is_drop_ship": false,
      "is_discontinued": false
      }});
    }
    catch(error)
    {
      products = {
        "item_number": error.message,
        "item_name": error.name,
        "vendor_name": error.stack,
        "vendor_part_number": "",
        "msds_code": "",
        "dea_controlled_substance_code": "",
        "item_price": "",
        "unit_of_measure": "",
        "is_available": false,
        "has_purchase_history": false,
        "is_active": false,
        "vendor_name": "",
        "balance_available":0,
        "error_message": "",
        "next_qty_break": 0,
        "vendor_name": "",
        "next_qty_break_price_or_discount": "",
        "image_ur_ls": "",
        "special_code": "",
        "item_type": "",
        "error_message": error,
        "is_agency": false,
        "is_drop_ship": false,
        "is_discontinued": false
      }
    }
    return products;
  }
