import {CustomTextField} from "../../../../InputFields";
import CustomTable from "../../../PartnerHome/CustomTable";
import Image from "next/image";
import Arrow from "public/partner/Group 508900.svg";
import { useState } from "react";
function InvestorSchemeDetails( {setActive}) {
  const InvestorScheme = [
    ["talk2sams@qmail.com","Krishna Kumar Srinivasan","DSP Liquidity Fund - RegularPlan - Growth (Merged)","0","03 Oct 2023"],
    ["talk2sams@gmail.com","Swaminathan Sankaranarayanan","DSP Strategic Bond Fund - Regular Plan -Growth (Merged)","0","03 Oct 2023"],
    ["yeskrish@yahoo.co.uk","Krishna Kumar Srinivasan","DSP Top 100 Equity Fund - Regular Plan - Growth","1084592","03 Oct 2023"],
    ["yeskrish@yahoo.co.uk","Swaminathan Sankaranarayanan","HDFC Money Market Fund - Regular Plan -Growth","0","03 Oct 2023"],
    ["yeskrish@yahoo.co.uk","Krishna Kumar Srinivasan","HDFC Flexi Cap Fund - Growth","800788","03 Oct 2023"],
    ["veskrish@yahoo.co.uk","Swaminathan Sankaranarayanan","HDFC Mid-Cap Opportunities Fund - Growth","0","03 Oct 2023"],
    ["talk2sams@qmail.com","Krishna Kumar Srinivasan","DSP Liquidity Fund - RegularPlan - Growth (Merged)","0","03 Oct 2023"],
    ["talk2sams@gmail.com","Swaminathan Sankaranarayanan","DSP Strategic Bond Fund - Regular Plan -Growth (Merged)","0","03 Oct 2023"],
    ["yeskrish@yahoo.co.uk","Krishna Kumar Srinivasan","DSP Top 100 Equity Fund - Regular Plan - Growth","1084592","03 Oct 2023"],
    ["yeskrish@yahoo.co.uk","Swaminathan Sankaranarayanan","HDFC Money Market Fund - Regular Plan -Growth","0","03 Oct 2023"]
  ]

  function filterData() {
      const valueReg = new RegExp(value.trim(), 'i'); // Case-insensitive regex for name
  
      const filteredData = InvestorScheme.filter((item) => {
        // Check if the name, email, and number match the provided regex patterns
          return (
              (value === '' || valueReg.test(item[0]) || valueReg.test(item[1]) || valueReg.test(item[2])) 
          );
      });
  
      // Now, 'filteredData' contains the filtered data based on the provided criteria.
      setTableData(filteredData);
  }

  const [value, setvalue] = useState('')
  const [tableData, setTableData] = useState(InvestorScheme);

  return (
    <div className="flex flex-col p-[20px] gap-y-[20px]" >
      <div className="flex flex-col w-full bg-white p-[20px] rounded-[20px] gap-y-[20px]">
        <div className="flex items-center gap-x-[10px]">
          <Image className="cursor-pointer" src={Arrow} onClick={()=>setActive('TransactionReports')}/>
          <h1 className="text-[20px] font-semibold leading-[20px]">Investor Scheme Details</h1>
        </div>
        <div className="flex gap-x-[30px]">
          <CustomTextField label='Email/Mobile/Scheme Name' value={value} handleChange={(event)=>{setvalue(event.target.value)}}/>
          <button className="h-[40px] w-[108px] bg-[#0071E7] text-[14px] font-bold rounded-[25px] text-white" onClick={filterData}>Search</button>
        </div>
      </div>
      <CustomTable headers={['User ID','Account Names','Scheme Name','Invested amount','Last Transaction Date']} data={tableData} rightNav={true} dataType="Invoice" />
    </div>
  );
}

export default InvestorSchemeDetails;