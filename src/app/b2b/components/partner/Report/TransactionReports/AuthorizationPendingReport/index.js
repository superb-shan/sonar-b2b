import Image from "next/image";
import Arrow from "public/partner/Group 508900.svg";
import {CustomSelectField, CustomTextField, CustomDatePicker} from "../../../../InputFields";
import { useState } from "react";
import CustomTable from "../../../PartnerHome/CustomTable";

function AuthorizationPendingReport( {setActive} ) {
  const Authorizationpendingreports =[
    ["S Nagarajan/ GPadmini","Nagaraj@gmail.com","984637678","Axis Flexi Cap Fund- Reg(G)","Purchase","40000","0","09 Oct 2023"],
    ["Dattatraya Kulkarni","Nagaraj@gmail.com","984637678","Aditva Birla SL Frontline EquityFund(G)","Purchase","35000","0","09 Oct 2023"],
    ["Santosh Venkatachalam","Nagaraj@gmail.com","984637678","Parag Parikh Liquid Fund-Reg(G)","SIP","150000","0","08 Oct 2023"],
    ["Santosh Venkatachalam","Nagaraj@gmail.com","984637678","Parag Parikh Liquid Fund-Reg(G)","SIP","150000","0","07 Oct 2023"],
    ["Shantha Narayanan","Nagaraj@gmail.com","984637678","HDFC Mid-Cap Opportunities Fund(G)","Redemption","10000","0","07 Oct 2023"],
    ["Shantha Narayanan","Nagaraj@gmail.com","984637678","Axis Midcan Fund- Reg(G)","Redemption","10000","0","07 Oct 2023"],
    ["Shantha Narayanan","Nagaraj@gmail.com","984637678","Kotak Bluechip Fund(G)","Switch","10000","0","07 Oct 2023"],
    ["Shantha Narayanan","Nagaraj@gmail.com","984637678","SBI BlueChip Fund- Reg(G)","STP","10000","0","07 Oct 2023"],
    ["Dattatraya Kulkarni","Nagaraj@gmail.com","984637678","Parag Parikh Flexi Cap Fund-Reg(G)","STP","30000","0","07 Oct 2023"],
    ["Venkatachalam Sankarasubramanian","Nagaraj@gmail.com","984637678","Nippon India Growth Fund(G)","SWP","15000","0","06 Oct 2023"]
]

  const [TransactionType, setTransactionType] = useState('');
  const [TransactionTypeErrorMessage, setTransactionTypeErrorMessage] = useState('');
  const handleTransactionTypeChange = (event) => {
    const value = event.target.value;
    setTransactionType(value);
  };
  const TransactionTypeOptions = ['Purchase','SIP','Redemption','Switch','STP','SWP'];

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


  const [value, setvalue] = useState('')
  const [tableData, setTableData] = useState(Authorizationpendingreports);
  function filterData() {
    const valueReg = new RegExp(value.trim(), 'i'); // Case-insensitive regex for name
    const filteredData = Authorizationpendingreports.filter((item) => {
      // Check if the name, email, and number match the provided regex patterns
        return (
          item[4] === TransactionType && (value === '' || valueReg.test(item[1]) || valueReg.test(item[2]) ) 
        );
    });
    // Now, 'filteredData' contains the filtered data based on the provided criteria.
    setTableData(filteredData);
  }

  return (
    <div className="flex flex-col p-[20px] gap-y-[20px]" >
      <div className="flex flex-col w-full bg-white p-[20px] rounded-[20px] gap-y-[20px]">
        <div className="flex items-center gap-x-[10px]">
          <Image className="cursor-pointer" src={Arrow} onClick={()=>setActive('TransactionReports')}/>
          <h1 className="text-[20px] font-semibold leading-[20px]">Authorization Pending Report</h1>
        </div>
        <div className='flex gap-x-[50px]'>
          <CustomTextField label='Email/Mobile' value={value} handleChange={(event)=>{setvalue(event.target.value)}}/>
          <CustomSelectField label="Transaction Type" value={TransactionType} valueOptions={TransactionTypeOptions} errorMessage={TransactionTypeErrorMessage} handleChange={handleTransactionTypeChange} />
        </div>
        <div className='flex gap-x-[50px]'>
          <CustomDatePicker label="From Date" value={fromDate} handleChange={handleFromDateChange} disableFuture={true} errorMessage={fromDateErrorMessage} />
          <CustomDatePicker label="To Date" value={toDate} handleChange={handleToDateChange} disableFuture={true} minDate={fromDate} errorMessage={toDateErrorMessage} />
        </div>
        <button className="w-[108px] h-[40px] bg-[#0071E7] text-white text-[14px] font-bold rounded-[25px]" onClick={filterData}>Submit</button>
      </div>
      <CustomTable className={'justify-start'}headers={['Account name(s)','Email','Mobile','Scheme Name','Transaction','Amount(Rs.)','Units',' Created Date']} data={tableData} download={true} dataType="Invoice" />
    </div>
  );
}

export default AuthorizationPendingReport
