import { useState } from "react";
import Image from "next/image";
import Arrow from "public/partner/Group 508900.svg";
import {CustomSelectField, CustomTextField, CustomDatePicker} from "../../../../InputFields";
import CustomTable from "../../../PartnerHome/CustomTable";

function STPReport( {setActive} ) {
  const StpReport =[
    ["100000000202000","Shantha Narayanan","17995610/72","HDFC Corporate Bond Fund- Growth","HDFC Mid-Cap Opportunities Fund- Growth","Activated","25,000","0","5","03 Oct 2023","3","3","03 Oct 2023","09 Oct 2023"],
    ["100000001283080","Muralidharan Rangarajan","17995610/72","UTI Liquid Cash Plan - Regular Plan - Growth","UTI Flexi Cap Fund -Regular Plan -Growth","Activated","50,000","0","5","03 Oct 2023","3","3","03 Oct 2023","09 Oct 2023"],
    ["100000001283080","Jeyaseelan","17995610/72","Aditya Birla Sun Life Savings Fund -Regular Plan - Growth","Aditya Birla Sun Life Digital India Fund - Growth","Activated","1,00,000","0","7","03 Oct 2023","4","4","03 Oct 2023","09 Oct 2023"],
    ["100000001283080","Rohini Raghavan","17995610/72","HDFC Liquid Fund - Growth","HDFC Mid-Cap Opportunities Fund- Growth","Activated","1,00,000","0","7","03 Oct 2023","4","4","03 Oct 2023","09 Oct 2023"],
    ["100000001283080","Rohini Raghavan","17995610/72","Franklin India Liquid Fund - SuperInstitutional - Growth","Franklin India Prima Fund - Growth","Activated","1,50,000","0","26","03 Oct 2023","4","4","03 Oct 2023","09 Oct 2023"],
    ["100000001283080","Nirmala Devi Patchava","17995610/72","ICICI Prudential Savings Fund - Growth","ICICI Prudential Bluechip Fund - Growth","Activated","25,000","0","4","03 Oct 2023","4","4","03 Oct 2023","09 Oct 2023"],
    ["100000001283080","Lakshminarayanan Chidambaran","17995610/72","Axis Ultra Short Term Fund - Regular Plan -Growth","Axis Midcap Fund - Regular Plan - Growth","Activated","2,00,000","0","25","03 Oct 2023","4","4","03 Oct 2023","09 Oct 2023"],
    ["100000001283080","Sampath Kumar Ramaswamy","17995610/72","ICICI Prudential Savings Fund - Growth","Franklin India Prima Fund - Growth","Activated","25,000","0","3","03 Oct 2023","4","4","03 Oct 2023","09 Oct 2023"],
    ["100000001283080","S Mani Shankar","17995610/72","HDFC Liquid Fund - Growth","ICICI Prudential Bluechip Fund - Growth","Activated","15,000","0","3","03 Oct 2023","4","4","03 Oct 2023","09 Oct 2023"],
    ["100000001283080","Lakshmipriva Sampath Kumar","17995610/72","ICICI Prudential Savings Fund - Growth","Axis Midcap Fund - Regular Plan - Growth","Activated","15,000","0","6","03 Oct 2023","4","4","03 Oct 2023","09 Oct 2023"]
  ]
  const [value, setvalue] = useState('')
  const [tableData, setTableData] = useState(StpReport);
  function filterData() {
    const valueReg = new RegExp(value.trim(), 'i'); // Case-insensitive regex for name
    const filteredData = StpReport.filter((item) => {
      // Check if the name, email, and number match the provided regex patterns
        return (
            (value === '' || valueReg.test(item[1])) 
        );
    });
    // Now, 'filteredData' contains the filtered data based on the provided criteria.
    setTableData(filteredData);
  }

  const [Status, setStatus] = useState('Active');
  const [StatusErrorMessage, setStatusErrorMessage] = useState('');
  const handleStatusChange = (event) => {
    const value = event.target.value;
    setStatus(value);
  };
  const StatusOptions = ['Active','Hold', 'Stopped','Expire In 2 Months'];


  const[fromDate,setFromDate] = useState();
  const[toDate,setToDate] = useState();
  const [fromDateErrorMessage, setFromDateErrorMessage] = useState('');
  const [toDateErrorMessage, setToDateErrorMessage] = useState('');
  const handleFromDateChange = (newDate) => {
    setFromDate(newDate);
  };
  const handleToDateChange = (newDate) => {
    setToDate(newDate);
  }

  return (
    <div className="flex flex-col p-[20px] gap-y-[20px]" >
      <div className="flex flex-col w-full bg-white p-[20px] rounded-[20px] gap-y-[20px]">
        <div className="flex items-center gap-x-[10px]">
          <Image className="cursor-pointer" src={Arrow} onClick={()=>setActive('TransactionReports')}/>
          <h1 className="text-[20px] font-semibold leading-[20px]">STP Reports</h1>
        </div>
        <div className="flex gap-x-[50px]">
          <CustomTextField label='Email/Mobile' value={value} handleChange={(event)=>{setvalue(event.target.value)}}/>
          <CustomSelectField label="Status" value={Status} valueOptions={StatusOptions} errorMessage={StatusErrorMessage} handleChange={handleStatusChange} />
        </div>
        <div className='flex gap-x-[50px]'>
          <CustomDatePicker label="From Date" value={fromDate} handleChange={handleFromDateChange} disableFuture={true} errorMessage={fromDateErrorMessage} />
          <CustomDatePicker label="To Date" value={toDate} handleChange={handleToDateChange} disableFuture={true} minDate={fromDate} errorMessage={toDateErrorMessage} />
        </div>
        <button className="w-[108px] h-[40px] bg-[#0071E7] text-white text-[14px] font-bold rounded-[25px]" onClick={filterData}>Submit</button>
      </div>
      <CustomTable headers={['Reference Id','Account names','Folio Number','From Scheme Name','To Scheme Name','Status','Amount(Rs.)','Units','STP Date','STP Date','Total Installments','Paid / Pending Installments','Start Date','End Date']} data={tableData} download={true} dataType="Invoice" />
    </div>
  );
}

export default STPReport;