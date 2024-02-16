import { useState } from "react";
import Image from "next/image";
import Arrow from "public/partner/Group 508900.svg";
import {CustomTextField} from "../../../../InputFields";
import CustomTable from "../../../PartnerHome/CustomTable";

function LastLoginReport( {setActive} ) {
  const LastloginReport =[
    ["Abhijit Sinha Roy","nuthalapatip@vahoo.com","04 Oct 2023 20:17:29","Web"],
    ["Adarsh Dattani","gvbhas@gmail.com","06 Oct 2023 20:17:29","MWeb"],
    ["Aditya Kittur","nuthalapatip@vahoo.com","02 Oct 2023 20:17:29","MWeb"],
    ["Akila Mohan","nuthalapatip@vahoo.com","01 Oct 2023 20:17:29","MWeb"],
    ["Akshav K","nuthalapatip@vahoo.com","09 Oct 2023 20:17:29","Web"],
    ["Anand Ekambaram","gvbhas@gmail.com","01 Oct 2023 20:17:29","Web"],
    ["Anil Sanadhya","nuthalapatip@vahoo.com","07 Oct 2023 20:17:29","Web"],
    ["Anitha Chandramouli","nuthalapatip@vahoo.com","01 Oct 2023 20:17:29","Web"],
    ["Anu Krishnamoorthy","vakkadala@yahoo.com","02 Oct 2023 20:17:29","Web"],
    ["Apraiit Sharma","Jayantdeodhar@gmail.com","07 Oct 2023 20:17:29","Web"]
  ]
  const [value, setvalue] = useState('')
  const [tableData, setTableData] = useState(LastloginReport);
  function filterData() {
    const valueReg = new RegExp(value.trim(), 'i'); // Case-insensitive regex for name
    const filteredData = LastloginReport.filter((item) => {
      // Check if the name, email, and number match the provided regex patterns
        return (
            (value === '' || valueReg.test(item[0]) || valueReg.test(item[1])) 
        );
    });
    // Now, 'filteredData' contains the filtered data based on the provided criteria.
    setTableData(filteredData);
  }
  return (
    <div className="flex flex-col p-[20px] gap-y-[20px]" >
      <div className="flex flex-col w-full bg-white p-[20px] rounded-[20px] gap-y-[20px]">
        <div className="flex items-center gap-x-[10px]">
          <Image className="cursor-pointer" src={Arrow} onClick={()=>setActive('UserManagementReports')}/>
          <h1 className="text-[20px] font-semibold leading-[20px]">Last Login Report</h1>
        </div>
        <div className="flex gap-x-[20px]">
          <CustomTextField label='Email/Mobile' value={value} handleChange={(event)=>{setvalue(event.target.value)}}/>
          <button className="w-[108px] h-[40px] bg-[#0071E7] text-white text-[14px] font-bold rounded-[25px]" onClick={filterData}>Submit</button>
        </div>
      </div>
      <CustomTable headers={['User Name','Email','Last Login','Last Login Device']} data={tableData} download={true} dataType="Invoice" />
    </div>
  );
}

export default LastLoginReport;