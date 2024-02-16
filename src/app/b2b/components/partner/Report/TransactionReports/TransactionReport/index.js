import {CustomSelectField, CustomTextField} from "../../../../InputFields";
import Image from "next/image";
import Arrow from "public/partner/Group 508900.svg";
import { useState } from "react";
import CustomTable from "../../../PartnerHome/CustomTable";
import Reset from "/public/partner/reset.svg"
import TransactioReports from "..";

function TransactionReport( {setActive} ) {
  const [TransactionType, setTransactionType] = useState('');
  const [TransactionTypeErrorMessage, setTransactionTypeErrorMessage] = useState('');
  const handleTransactionTypeChange = (event) => {
    const value = event.target.value;
    setTransactionType(value);
  };
  const TransactionTypeOptions = ['Purchase','Additional purchase','Redemption','Switch'];

  const [Success, setSuccess] = useState('');
  const [SuccessErrorMessage, setSuccessErrorMessage] = useState('');
  const handleSuccessChange = (event) => {
    const value = event.target.value;
    setSuccess(value);
  };
  const SuccessOptions = ['Success','Processing','Failed'];

  const [FilterAmount, setFilterAmount] = useState('');
  const [FilterAmountErrorMessage, setFilterAmountErrorMessage] = useState('');
  const handleFilterAmountChange = (event) => {
    const value = event.target.value;
    setFilterAmount(value);
  };
  const FilterAmountOptions = ['Greater Than', 'Less Than', 'Equal to'];

  const [Amount, setAmount] = useState('');
  const handleAmountChange = (event) => {
    const value = event.target.value;
    setAmount(value);
  };



  // 
  // 
  // Data
  const TransactionReport = [
    ["S Nagarajan/ GPadmini","Axis Flexi Cap Fund- Reg(G)","91086859796","Success","0","40000","09 Oct 2023","PUR","ENACH","41469960"],
    ["Dattatraya Kulkarni","Aditva Birla SL Frontline EquityFund(G)","1037144947","Success","0","35000","09 Oct 2023","PUR","NACH","41467512"],
    ["Santosh Venkatachalam","Parag Parikh Liquid Fund-Reg(G)","12420705","Success","0","150000","08 Oct 2023","PUR","rz_netbanking","41499105"],
    ["Santosh Venkatachalam","Parag Parikh Liquid Fund-Reg(G)","12420705","Processing","0","150000","07 Oct 2023","PUR","rz_netbanking","41499102"],
    ["Shantha Narayanan","HDFC Mid-Cap Opportunities Fund(G)","17995610/72","Processing","0","10000","07 Oct 2023","PUR","ENACH","41450595"],
    ["Shantha Narayanan","Axis Midcan Fund- Reg(G)","910122163446","Processing","0","10000","07 Oct 2023","PUR","ENACH","41450594"],
    ["Shantha Narayanan","Kotak Bluechip Fund(G)","8844995/44","Failed","0","10000","07 Oct 2023","PUR","ENACH","41450596"],
    ["Shantha Narayanan","SBI BlueChip Fund- Reg(G)","26655956","Failed","0","10000","07 Oct 2023","PUR","ENACH","41450597"],
    ["Dattatraya Kulkarni","Parag Parikh Flexi Cap Fund-Reg(G)","12373805","Failed","0","30000","07 Oct 2023","PUR","NACH","41448502"],
    ["Venkatachalam Sankarasubramanian","Nippon India Growth Fund(G)","499266662595","Processing","0","15000","06 Oct 2023","PUR","rz_netbanking","41457490"]
  ]
  // 
  // 
  const [TableData, setTableData] = useState(TransactionReport)

    function filterData() {
      const transactionTypeMapping = {
        'Purchase': 'PUR',
        'Additional purchase': 'A PUR',
        'Redemption': 'RED',
        'Switch': 'SWI',
      };
    
      const filteredData = TransactionReport.filter((item) => {
        const [accountName, schemeName, mob, status, _, amount, txDate, txType, paidThrough, userRefID] = item;
    
        const mappedTransactionType = transactionTypeMapping[TransactionType];
    
        const matchesTransactionType = !TransactionType || txType === mappedTransactionType;
        console.log(txType, TransactionType, mappedTransactionType);
        const matchesSuccess = !Success || status === Success;
    
        let matchesAmount = true;
        if (Amount) {
          const filterValue = parseFloat(Amount);
          if (FilterAmount === 'Greater Than') {
            matchesAmount = parseFloat(amount) > filterValue;
          } else if (FilterAmount === 'Less Than') {
            matchesAmount = parseFloat(amount) < filterValue;
          } else if (FilterAmount === 'Equal to') {
            matchesAmount = parseFloat(amount) === filterValue;
          }
        }
    
        return matchesTransactionType && matchesSuccess && matchesAmount;
      });
    
      setTableData(filteredData);
    }
  
  return (
    <div className="flex flex-col p-[20px] gap-y-[20px]" >
      <div className="flex flex-col w-full bg-white p-[20px] rounded-[20px] gap-y-[20px]">
        <div className="flex items-center gap-x-[10px]">
          <Image className="cursor-pointer" src={Arrow} onClick={()=>setActive('TransactionReports')}/>
          <h1 className="text-[20px] font-semibold leading-[20px]">Transaction Report</h1>
        </div>
        <div className='flex gap-x-[50px]'>
          <CustomSelectField label="Transaction Type" value={TransactionType} valueOptions={TransactionTypeOptions} errorMessage={TransactionTypeErrorMessage} handleChange={handleTransactionTypeChange} />
          <CustomSelectField label="Status" value={Success} valueOptions={SuccessOptions} errorMessage={SuccessErrorMessage} handleChange={handleSuccessChange} />
        </div>
        <div className="flex">
          <div className='flex gap-x-[50px]'>
            <CustomSelectField label="Filter Amount" value={FilterAmount} valueOptions={FilterAmountOptions} errorMessage={FilterAmountErrorMessage} handleChange={handleFilterAmountChange} />
            <CustomTextField label='Amount' value={Amount} handleChange={handleAmountChange}/>
          </div>
          <button className="flex justify-center items-center pl-[18px] gap-x-[5px]" onClick={()=>{setAmount(''); setTransactionType(''); setSuccess(''); setFilterAmount('');}}>
            <Image src={Reset}/>
            <p className="text-[14px] font-medium text-[#0066CD]">Clear</p>
          </button>
        </div>
        <button className="w-[108px] h-[40px] bg-[#0071E7] text-white text-[14px] font-bold rounded-[25px]" onClick={filterData}>Submit</button>
      </div>
      <CustomTable headers={['Account names','Scheme Name','Folio Number','Status','Units','Amount(Rs.)','Tx. Date','Tx. Type','Paid Through','User Ref ID']} data={TableData} download={true} dataType="Invoice" />
    </div>
  );
}

export default TransactionReport
