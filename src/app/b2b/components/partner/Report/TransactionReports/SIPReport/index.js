import { useState } from "react";
import Image from "next/image";
import Arrow from "public/partner/Group 508900.svg";
import {CustomSelectField, CustomTextField, CustomDatePicker} from "../../../../InputFields";
import CustomTable from "../../../PartnerHome/CustomTable";

function SIPReport( {setActive} ) {
  const SipReportData = [
    ["100000000202000","Anand Ekambaram","18557516","Franklin India Bluechip Fund- Growth","PUR","APPROVED","10,000","03 Oct 2023","3","3","03 Oct 2023","09 Oct 2023","10,000"],
    ["100000001283080","Arruthra Venugopaal/ Hemachandran Babu","16936931/38","ICICI Prudential Nifty Next 50 Index Fund - Growth","PUR","APPROVED","20,000","03 Oct 2023","3","3","03 Oct 2023","09 Oct 2023","10,000"],
    ["100000001283080","Arruthra Venugopaal/ Hemachandran Babu","16936931/38","ICICI Prudential Technology Fund - Growth","PUR","APPROVED","10,000","03 Oct 2023","4","4","03 Oct 2023","09 Oct 2023","10,000"],
    ["100000001703260","Deepti Bhaskaran","14076836/91","HDFC Hybrid Equity Fund-Growth","PUR","APPROVED","10,000","03 Oct 2023","1","1","03 Oct 2023","09 Oct 2023","10,000"],
    ["100000001049074","Harsh Dittakavi","13921347/85","ICICI Prudential Banking & Financial Services Fund - Growth","PUR","APPROVED","15,000","03 Oct 2023","5","5","03 Oct 2023","09 Oct 2023","10,000"],
    ["100000001779359","Dattatraya Kulkarni","14190562/62","HDFC Mid-Cap Opportunities Fund -Growth","PUR","APPROVED","20,000","03 Oct 2023","5","5","03 Oct 2023","09 Oct 2023","10,000"],
    ["100000000941973","Kooram Veeravalli Sampath Kannan","1037144947","Aditya Birla Sun Life Frontline Equity Fund - Growth","PUR","APPROVED","20,000","03 Oct 2023","6","6","03 Oct 2023","09 Oct 2023","10,000"],
    ["100000000650942","Karthik K Thitte/ Rekha Karthik","1037144947","Parag Parikh Flexi Cap Fund - Regular Plan - Growth","PUR","APPROVED","30,000","03 Oct 2023","3","3","03 Oct 2023","09 Oct 2023","10,000"],
    ["100000000617965","N Remadevi/ KN Srinivasan","18866043/47","ICICI Prudential NASDAQ 100 Index Fund - Growth","PUR","APPROVED","35,000","03 Oct 2023","7","7","03 Oct 2023","09 Oct 2023","10,000"],
    ["100000000700310","Arruthra Venugopaal","79925795704","Mirae Asset Large Cap Fund - Regular Plan - Growth","PUR","APPROVED","25,000","03 Oct 2023","4","4","03 Oct 2023","09 Oct 2023","10,000"]
  ]
  const [value, setvalue] = useState('')
  const [tableData, setTableData] = useState(SipReportData);
  function filterData() {
    const valueReg = new RegExp(value.trim(), 'i'); // Case-insensitive regex for name
    const filteredData = SipReportData.filter((item) => {
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
          <h1 className="text-[20px] font-semibold leading-[20px]">SIP Reports</h1>
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
      <CustomTable headers={['Reference Id','Account names','Folio Number','Scheme Name','Type','Status','Amount(Rs.)','SIP Data','Total Installment','Paid / Pending Installments','Start Date','End Date','ECS (Max) Amount']} data={tableData} rightNav={true}  dataType="Invoice" />
    </div>
  );
}

export default SIPReport;