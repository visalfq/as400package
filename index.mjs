import pjs from 'profoundjs';

export async function testfunction(item) {
return "working" + item;
}
export  async function getcustomer(companynumber,customernumber) {
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
    customerinfo.push({customer_number:"-1",customer_name:error.message,ship_to_number:error.stack,shipping_addresses:shipinfo});
  }
  return customerinfo;
}
export async function getallitems(code,name,pagenumber,numberofrecords) {
  var _success = false;
  var _error = null;
  let products ={};
  let lineno=0;
  var  sql ="";
  var  params = [];
  var _record = null;
  var where_clause = "";
  var codes_commaseparated = "";
  try
  {
    const page = (pagenumber??1) -1;
    const limit = numberofrecords??100;
    const namesLike = [];
    var _from = "vinitem it  left join vardicl cat  on (cat.rncmp, cat.rndiv, cat.rnclas) = (it.iccmp, it.icdiv, it.iccls) left join viniext iex on (iex.iccmp, iex.icitem) = (it.iccmp, it.icitem) left join vinpmat pm on (pm.j6cmp, pm.j6item) = (it.iccmp, it.icitem) left join vinupn upn on (upn.@fcomp, upn.@fitem, upn.@fum) = (it.iccmp, it.icitem, it.icsum) ";

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

    where_clause = "it.ICDEL = ?";//"it.ICDEL = 'A'";

    if(codes.length>0)
    {
      // generate a comma separated string for codes with single quotes
      codes_commaseparated = codes.map(item => `'${item}'`).join(',');
      where_clause = where_clause + ' and ' + '(it.ICITEM in (' +  codes_commaseparated +  '))';
    }


    if(names.length>0)
      {
        namesLike.push(" ( 1 = 2 ");
        const search = names
          .map(n=>`%${n.trim().toLowerCase()}%`);
        search.forEach((n=>{
          namesLike.push(` or lower(it.ICDSC1 || it.ICDSC2 || it.ICDSC3) like ` + "'" +   n + "'")
        }));
        namesLike.push(")");
        where_clause = where_clause + ' and ' + namesLike.join("");
      }

    var _filter = { 
    whereClause: where_clause,
    values: ["A"]
    };

    lineno=1;
    var _select = `DISTINCT it.ICCMP,  it.ICITEM, it.ICDEL,  it.ICDSC1, it.ICDSC2, it.ICDSC3, it.ICDSC1 || it.ICDSC2 || it.ICDSC3 as name, it.ICDIV,  it.ICCLS,  it.ICSPCE,
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
        ifnull(pm.j6pl01, 0) as J6PL01`;
        //ifnull(@fupn, ' ') as FUPN`;
    lineno =2;
    _record = await pjs.data.get(_from, _filter, limit, page, null, _select);

    products = await _record.map(r => {return { 
    "item_number": r.icitem,
    "item_name": r.name,
    "vendor_name": "",
    "vendor_part_number": "",
    "msds_code": "",
    "dea_controlled_substance_code": "",
    "item_price": r["J6PL01"],
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

    lineno =3;
    return products;
  }
  catch (error)
  {
    products = {
      "item_number": "-1",
      "item_name": error.name,
      "vendor_name": error.message,
      "vendor_part_number": "",
      "msds_code": "",
      "dea_controlled_substance_code": lineno,
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
      "error_message": "Error",
      "is_agency": false,
      "is_drop_ship": false,
      "is_discontinued": false
    }
  }
  return products;
}