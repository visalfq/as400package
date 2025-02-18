import moment from 'moment';

async function hellon(item) {
return "Hellonn" + item;
}
  async function getstockandpricemultipleitems(customernumber,shiptonumber,itemlist,qtylist) {
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

    set("parm1", params["Cmp"]);
    set("parm2", params["Cust"]);
    set("parm4", params["Loc"]);
    set("parm5", params["Bpcd"]);
    set("parm7", params["Date"]);
    set("parm9", params["Cost"]);
    set("parm10", params["Rebt"]);
    set("parm11", params["Dsc"]);
    set("parm12", params["Uom"]);
    set("parm13", params["Cont"]);
    set("parm14", params["Psrc"]);
    set("parm15", params["Apric"]);
    set("parm16", params["In01"]);
    set("parm17", params["Ord"]);
    set("parm18", params["Bocd"]);
    set("parm19", params["Line"]);
    set("parm20", params["Crcd"]);
    set("parm21", params["Source"]);
    set("parm22", params["Pprc"]);
    set("parm23", params["Kitm"]);
    set("parm24", params["Kuom"]);
    set("parm25", params["Shipto"]);
    set("parm26", params["Cucst"]);
    var pricesval = new Object();
    for (let i = 0; i < items.length; i++) {
      set("parm3", items[i]);
      set("parm6", qtys[i]);
      set("parm8", outprice);
      call("COGTPRB", refParm("parm1"), refParm("parm2"), refParm("parm3"), refParm("parm4"), refParm("parm5"), refParm("parm6"), refParm("parm7"), refParm("parm8"), refParm("parm9"), refParm("parm10"), refParm("parm11"), refParm("parm12"), refParm("parm13"), refParm("parm14"), refParm("parm15"), refParm("parm16"), refParm("parm17"), refParm("parm18"), refParm("parm19"), refParm("parm20"), refParm("parm21"), refParm("parm22"), refParm("parm23"), refParm("parm24"), refParm("parm25"), refParm("parm26"));
      outprice = get("parm8");
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

  async function getstockandprice(customernumber,shiptonumber,item,qty) {
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
    
  
    set("parm1", params["Cmp"]);
    set("parm2", params["Cust"]);
    set("parm3", params["Item"]);
    set("parm4", params["Loc"]);
    set("parm5", params["Bpcd"]);
    set("parm6", params["Qty"]);
    set("parm7", params["Date"]);
    set("parm8", outPrice);
    
    set("parm9", params["Cost"]);
    set("parm10", params["Rebt"]);
    set("parm11", params["Dsc"]);
    set("parm12", params["Uom"]);
    set("parm13", params["Cont"]);
    set("parm14", params["Psrc"]);
    set("parm15", params["Apric"]);
    set("parm16", params["In01"]);
    set("parm17", params["Ord"]);
    set("parm18", params["Bocd"]);
    set("parm19", params["Line"]);
    set("parm20", params["Crcd"]);
    set("parm21", params["Source"]);
    set("parm22", params["Pprc"]);
    set("parm23", params["Kitm"]);
    set("parm24", params["Kuom"]);
    set("parm25", params["Shipto"]);
    set("parm26", params["Cucst"]);
    call("COGTPRB", refParm("parm1"), refParm("parm2"), refParm("parm3"), refParm("parm4"), refParm("parm5"), refParm("parm6"), refParm("parm7"), refParm("parm8"), refParm("parm9"), refParm("parm10"), refParm("parm11"), refParm("parm12"), refParm("parm13"), refParm("parm14"), refParm("parm15"), refParm("parm16"), refParm("parm17"), refParm("parm18"), refParm("parm19"), refParm("parm20"), refParm("parm21"), refParm("parm22"), refParm("parm23"), refParm("parm24"), refParm("parm25"), refParm("parm26"));
    outPrice = get("parm8");
    outprice = (Math.round(outprice * 100) / 1000000).toFixed(2);
    return outPrice;
  }

  async function getcustomer(companynumber,customernumber)
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
      _record = await data.get(_from, _filter, 1, 0, null, _select);
      lno=2;
      _success = true;
      // If no record found
      if (!_record) {
        lno=9;
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
    customerinfo.push({customer_number:"0",customer_name:error,ship_to_number:lno,shipping_addresses:shipinfo});
  }
    return customerinfo;
  }

  async function getallitems(code,name,pagenumber,numberofrecords)
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
    products = query(getDB("DB2"),sql,
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
      "item_number": "",
      "item_name": "",
      "vendor_name": "",
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
const _hellon = hellon;
export { _hellon as hellon };
const _getstockandprice = getstockandprice;
export { _getstockandprice as getstockandprice };
const _getstockandpricemultipleitems = getstockandpricemultipleitems;
export { _getstockandpricemultipleitems as getstockandpricemultipleitems };
const _getallitems = getallitems;
export { _getallitems as getallitems };
const _getcustomer = getcustomer;
export { _getcustomer as getcustomer };