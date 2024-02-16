import { useState } from "react";
import Image from "next/image";
import Arrow from "public/partner/Group 508900.svg";
import {CustomTextField} from "../../../../InputFields";
import CustomTable from "../../../PartnerHome/CustomTable";

function MandatesReport( {setActive} ) {
  const ManDatesReport =[
    ["100000001800811","Aditi","adarsh.dattani@gmail.com","25,000","04 Oct 2030","NACH","-"],
    ["100000001800812","Aditi","aditya.kittur@wipro.com","25,000","04 Oct 2030","NACH","-"],
    ["100000001800811","Aditi","akshay.dx93@gmail.com","50,000","04 Oct 2030","NACH","-"],
    ["100000001085975","Aditi Hiren Doshi","alak223@yahoo.com","25,000","04 Oct 2030","ECS","APPROVED"],
    ["100000000227051","Aditya Kittur","anande99@ yahoo.com","1,00,000","04 Oct 2030","NACH","APPROVED"],
    ["100000001359788","Akash Ram","anantvembar@vahoo.com","25,000","04 Oct 2030","NACH","APPROVED"],
    ["100000001 195183","Adkasthala","anil.san@gmail.com","50,000","04 Oct 2030","NACH","APPROVED"],
    ["100000000202000","Akshay K","anil.san@gmail.com","25,000","","ECS","APPROVED"],
    ["100000001796799","Anand","anooo2000@ gmail.com","50,000","04 Oct 2030","NACH","APPROVED"],
    ["100000001800811","Akshay K","ap.arvind@gmail.com","25,000","04 Oct 2030","NACH","APPROVED"]
  ]
  const [value, setvalue] = useState('')
  const [tableData, setTableData] = useState(ManDatesReport);
  function filterData() {
    const valueReg = new RegExp(value.trim(), 'i'); // Case-insensitive regex for name
    const filteredData = ManDatesReport.filter((item) => {
      // Check if the name, email, and number match the provided regex patterns
        return (
            (value === '' || valueReg.test(item[1]) || valueReg.test(item[2])) 
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
          <h1 className="text-[20px] font-semibold leading-[20px]">Mandates Report</h1>
        </div>
        <div className="flex gap-x-[20px]">
          <CustomTextField label='Email/Mobile/PAN Number' value={value} handleChange={(event)=>{setvalue(event.target.value)}}/>
          <button className="w-[108px] h-[40px] bg-[#0071E7] text-white text-[14px] font-bold rounded-[25px]" onClick={filterData}>Submit</button>
        </div>
      </div>
      <CustomTable headers={['Consumer Code','Client Name','Email','Upper Limit (in Rs.)','End Date','Form Type','Status']} data={tableData} download={true} dataType="Invoice" />
    </div>
  );
}

export default MandatesReport;