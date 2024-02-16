import Image from "next/image";
import Arrow from "public/partner/Group 508900.svg";
import {CustomSelectField} from "../../../../InputFields";
import { useState } from "react";
import { CustomDatePicker } from '../../../../InputFields';
import CustomTable from "../../../PartnerHome/CustomTable";

function AUMClientReport( {setActive} ) {
  const [Aum, setAum] = useState('Scheme');
  const [aumErrorMessage, setaumErrorMessage] = useState('');
  const handleAumChange = (event) => {
    const value = event.target.value;
    setAum(value);
  };
  const aumOptions = ['Scheme','Investor','AMC','Asset category'];

  const[fromDate,setFromDate] = useState();
  const[toDate,setToDate] = useState();

  const [fromDateErrorMessage, setFromDateErrorMessage] = useState('');
  const [toDateErrorMessage, setToDateErrorMessage] = useState('');

  const handleFromDateChange = (newDate) => {
    setFromDate(newDate);
  };
  const handleToDateChange = (newDate) => {
    setToDate(newDate);
  };
  // 
  // 
  // Data
  const Scheme = [
    ["Aditya Birla SL Corp Bond Fund(G)","188,076"],
    ["Aditya Birla SL Equity Advantage Fund(G)","416,882"],
    ["Aditya Birla SL Flexi Cap Fund(G)","6,531"],
    ["Aditya Birla SL Flexi Cap Fund(IDCW)","4,200"],
    ["Aditya Birla SL Floating Rate Fund(DD-IDCW)","2,010"],
    ["Aditya Birla SL Liquid Fund(G)","4,374"],
    ["Aditya Birla SL Small Cap Fund(G)","24,493"],
    ["Aditya Birla SL Tax Plan(G)","28,721"],
    ["Axis Credit Risk Fund-Reg(M-IDCW)","7,052"],
    ["Axis Liquid Fund-Reg(DD-IDCW)","5,946,573"]
  ]
  const Investor = [
    ["Akshay K","IAMPM652456","188,076"],
    ["Santosh Venkatachalam","IAMPM623432","416,882"],
    ["Shantha Narayanan","IAMPM634323","6,531"],
    ["Santosh Venkatachalam","IAMPM343465","4,200"],
    ["Akshay K","IAMPM126786","2,010"],
    ["Santosh Venkatachalam","IAMPM456521","4,374"],
    ["Dattatraya Kulkarni","IAMPM875456","24,493"],
    ["Santosh Venkatachalam","IAMPM156543","28,721"],
    ["Venkatachalam Sankarasubramanian","IAMPM345432","7,052"],
    ["Santosh Venkatachalam","IAMPM876547","5,946,573"]
  ]
  const AMC = [
      ["Aditya Birla Sun Life","188,076"],
      ["ICICI Prudential","416,882"],
      ["SBI","6,531"],
      ["HSBC","4,200"],
      ["Mirae Asset","2,010"],
      ["DSP","4,374"],
      ["HSBC","24,493"],
      ["ICICI Prudential","28,721"],
      ["Aditya Birla Sun Life","7,052"],
      ["Mirae Asset","5,946,573"]
  ]
  const AssetCategory = [
      ["Equity","188,076"],
      ["Debt","416,882"],
      ["Hybrid","6,531"],
      ["Equity","4,200"],
      ["Debt","2,010"],
      ["Hybrid","4,374"],
      ["Debt","24,493"],
      ["Equity","28,721"],
      ["Hybrid","7,052"],
      ["Equity","5,946,573"]
  ]
  // 
  // 
  return (
    <div className="flex flex-col p-[20px] gap-y-[20px]" >
      <div className="flex flex-col w-full bg-white p-[20px] rounded-[20px] gap-y-[20px]">
        <div className="flex items-center gap-x-[10px]">
          <Image className="cursor-pointer" src={Arrow} onClick={()=>setActive('BussinessReports')}/>
          <h1 className="text-[20px] font-semibold leading-[20px]">AUM Client Report</h1>
        </div>
        <CustomSelectField label="AUM by" value={Aum} valueOptions={aumOptions} errorMessage={aumErrorMessage} handleChange={handleAumChange} />
        <div className='flex gap-x-[50px]'>
          <CustomDatePicker label="From Date" value={fromDate} handleChange={handleFromDateChange} disableFuture={true} errorMessage={fromDateErrorMessage} />
          <CustomDatePicker label="To Date" value={toDate} handleChange={handleToDateChange} disableFuture={true} minDate={fromDate} errorMessage={toDateErrorMessage} />
        </div>
        <button className="h-[40px] w-[108px] bg-[#0071E7] text-[14px] font-bold rounded-[25px] text-white" >Search</button>
      </div>
      {(() => {
        if (Aum=='Scheme') {
          return (
            <CustomTable headers={['Scheme Name','Amount (Rs.)']} data={Scheme} download={true}/>
          )
        } else if (Aum=='Investor') {
          return (
            <CustomTable headers={['Investor Name','PAN','Amount (Rs.)']} data={Investor} download={true}/>
          )
        } else if (Aum=='AMC') {
          return (
            <CustomTable headers={['AMC','Amount (Rs.)']} data={AMC} download={true}/>
          )
        }
        else if (Aum=='Asset category') {
          return (
            <CustomTable headers={['Asset category','Amount (Rs.)']} data={AssetCategory} download={true}/>
          )
        }
      })()}
      
    </div>
  );
}

export default AUMClientReport

