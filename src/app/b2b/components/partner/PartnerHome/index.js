"use client"

import { ThemeProvider } from "@mui/material";
import theme from '../../../theme.js'

import { useState } from "react";


import { CustomTextField } from "../../InputFields/index.js";
import { useDataContext } from "../../../context/DataContext.js";
import CustomTable from "./CustomTable.js";

import Image from "next/image";
import Arrow from "public/partner/Group 508900.svg";

export default function PartnerHome ({setActive}) {

    const {data, sip, setSip} = useDataContext();
    
    if (!data) return(<></>);
    
    // search function 
    const [tableData, setTableData] = useState(data);
    
    function filterData() {
        const nameReg = new RegExp(name, 'i'); // Case-insensitive regex for name
        const emailReg = new RegExp(email, 'i'); // Case-insensitive regex for email
        const numberReg = new RegExp(number, 'i'); // Case-insensitive regex for number

        const filteredData = data.filter((item) => {
          // Check if the name, email, and number match the provided regex patterns
            return (
                (name === '' || nameReg.test(item[0])) &&
                (email === '' || emailReg.test(item[1])) &&
                (number === '' || numberReg.test(item[2]))
            );
        });
    
        // Now, 'filteredData' contains the filtered data based on the provided criteria.
        console.log(filteredData)
        setTableData(filteredData);
        // setPageArray([2,3,4]);
    }
    
    // input variables

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');

    const [nameErrorMessage, setNameErrorMessage] = useState('');
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [numberErrorMessage, setNumberErrorMessage] = useState('');

    
    // Handle error change
    const handleEmailChange = (event) => {
        const value = event.target.value;
        setEmail(value);
      
        if (value === "") {
          setEmailErrorMessage("Email cannot be empty");
        } else if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(value)) {
          setEmailErrorMessage("Invalid email format");
        } else if (value.indexOf('@') === -1 || value.indexOf('@') !== value.lastIndexOf('@')) {
          setEmailErrorMessage("Email must contain exactly one '@'");
        } else if (value.endsWith('.') || value.endsWith('@')) {
          setEmailErrorMessage("Email cannot end with a dot or '@'");
        } else if (value.includes('notprovided') || value.includes('Noemail') || value.includes('xyz')) {
          setEmailErrorMessage("Email cannot contain 'notprovided', 'Noemail', or 'xyz'");
        } else {
          // Check for a dot before the top-level domain
          const parts = value.split('.');
          if (parts.length < 2 || parts[parts.length - 2].indexOf('@') === -1) {
            setEmailErrorMessage("Email must have a '.' before the top-level domain");
          } else {
            setEmailErrorMessage("");
          }
        }
      };
      

      const handleNameChange = (event) => {
        const value = event.target.value;
        setName(value);
        if (!(value.length >= 2 && value.length <= 50)) {
          setNameErrorMessage("Name should be of min. 2 and max. 50 length");
        } else if (!/^[A-Za-z]+$/.test(value)) {
          setNameErrorMessage("Name can contain only alphabets");
        } else {
          setNameErrorMessage("");
        }
      };

    const handleNumberChange = (event) => {
        const value = event.target.value;
        setNumber(value);
        
        //validations
        if (!/^\d{10}$/.test(value) && value !== '') {  //! accepts only indian standard number
            setNumberErrorMessage("Invalid phone number");
        } else {
            setNumberErrorMessage("");
        }
    };
    
    
    const sipData =[
        ["", '123451', 'Kotak Balance Advantage Fund-Reg(lDCW)', '0 / 999', '', '1,000.00'],
        ["", '-', 'ICIC Pru Nifty 50 Index Fund(G)', '0 / 205', '', '2,500.00'],
        ["", '-', 'ICIC pru Nifty Next 50 Index Fund(G)', '0 / 205', '', '2,500.00'],
        ["", '-', 'ICIC Pru Money Market Fund(G)', '0 / 205', '', '0.00'],
        ["", '-', 'ICIC Pru Nifty 50 Index Fund(G)', '0 / 204', '', '2,500.00'],
    ]
    const advisorSipData =[
        ["", '123451', 'Kotak Balance Advantage Fund-Reg(lDCW)', '204', 'POWERSIP PASSIVE', '1,000.00'],
        ["", '-', 'ICIC Pru Nifty 50 Index Fund(G)', '204', 'POWERSIP PASSIVE', '2,500.00'],
        ["", '-', 'ICIC pru Nifty Next 50 Index Fund(G)', '204', 'POWERSIP PASSIVE', '2,500.00'],
        ["", '-', 'ICIC Pru Money Market Fund(G)', '204', 'POWERSIP PASSIVE', '0.00'],
        ["", '-', 'ICIC Pru Nifty 50 Index Fund(G)', '204', 'POWERSIP PASSIVE', '2,500.00'],
    ]
    
    const stpData = [
      ["3887829389/ Ramesh Nri","ICIC Pru Nifty 50 Index Fund(G)","ICIC Pru Nifty Next 50 Index Fund(G)","Daily","-","0/9","-","1 / 1,000.00"],
      ["8981829389/ Lokesh","ICIC Pru Nifty Next 50 Index Fund(G)","Kotak Balance Advantage Fund-Reg(IDCW)","Daily","-","0/12","-","2 / 2,500.00"],
      ["3887829389/ Ramesh Nri","ICIC Pru Nifty 50 Index Fund(G)","ICIC Pru Nifty Next 50 Index Fund(G)","Daily","-","0/12","-","1 / 500.00"],
    ]


    return(
        <ThemeProvider theme={theme} >
            <div className='flex flex-col h-full gap-y-[20px] overflow-scroll p-[20px]'>
                {   
                    (!sip)?
                    <>
                        <div className="text-[14px] font-medium flex justify-between bg-white px-[30px] py-[15px] rounded-[10px]">
                            <p><span className="font-bold">ARN Number:</span> Am-3333 & <span className="font-bold">Expiry Date:</span> 30/Oct/2020</p>
                            <p><span className="font-bold">Euin Number:</span> N/A & <span className="font-bold">Expiry Date:</span> N/A</p>
                        </div>

                        {/* Search Box */}
                        <div className=" flex flex-col gap-y-[20px] bg-white p-[20px] rounded-[15px]">
                            <h4 className="text-[20px] font-semibold">Investor Search</h4>
                            <div className="flex gap-x-[50px]">
                                <div className="flex flex-col gap-y-[30px]">
                                    <CustomTextField id="userName" label='User Name' type="text" errorMessage={nameErrorMessage} value={name} handleChange={handleNameChange} />
                                    <CustomTextField id="mobileNumber" label='Mobile Number' type="number" errorMessage={numberErrorMessage} value={number} handleChange={ handleNumberChange } />
                                </div>
                                <CustomTextField id="userEmail" label='User Email' type="text" errorMessage={emailErrorMessage} value={email} handleChange={handleEmailChange}/>
                            </div>
                            <div className="flex gap-x-[20px] text-[14px] mt-[10px] font-bold">
                                <button onClick={()=>{filterData()}} className='w-[108px] h-[40px] bg-primary text-white rounded-[25px]'>Search</button>
                                <button onClick={()=>{}} className='w-[128px] h-[40px] border-[1px] border-primary text-[#0066CD] rounded-[25px] flex items-center justify-center gap-x-[5px] '>Download</button>
                            </div>
                        </div>

                        <CustomTable headers={['User Name', 'Email', 'Phone Number', 'Systematic Plans', 'Action']} data={tableData} setActive={setActive} download={true} />
                    </>
                    :
                    <>
                      <div className="flex gap-[10px] justify-start items-center">
                        <Image src={Arrow} alt={"Back"} className="cursor-pointer" onClick={ () => setSip(false)}/>
                        <h1 className="text-[20px] font-semibold">User Systematic Plan Details</h1>
                      </div>
                      <div className="bg-white flex flex-col p-[20px] gap-y-[20px] rounded-[15px]">
                        <h4 className="text-[18px]  font-semibold">SIP Details</h4>
                        <h6 className="text-[14px]  font-semibold">Regular SIP</h6>
                        <CustomTable headers={['SIP Reference ID', 'Folio', 'Scheme Name', 'Paid/ Tot. Months', 'Next ECS Date', 'Monthly Amount (Rs.)']} data={sipData} pagination={false} />
                        <h6 className="text-[14px]  font-semibold">ADVISORS SIP TRANSACTION</h6>
                        <CustomTable headers={['SIP Reference ID', 'Folio', 'Scheme Name', 'No of Months', 'SIP Type', 'Monthly Amount (Rs.)']} data={advisorSipData} pagination={false} />
                      </div>
                      <div className="bg-white flex flex-col p-[20px] gap-y-[20px] rounded-[15px]">
                          <h1 className="text-[18px] font-semibold">VIP Details</h1>
                          <h6 className="text-[14px]  font-semibold">REGULAR VIP DETAILS</h6>
                          <CustomTable 
                              headers={['VIP Reference ID', 'Folio', 'Scheme Name', 'Expected Return (%)', 'Paid/ Tot. Months', 'Next EGS/DD Date', 'Monthly Amount (Rs.)']}
                              data={[['104476', '123/123451', 'Kotak Balance Advantage Fund-Reg(IDCW)', '12', '0/12', '-', '1,000.00']]}
                              pagination={false} />
                      </div>
                      <div className="bg-white flex flex-col p-[20px] gap-y-[20px] rounded-[15px]">
                          <h1 className="text-[18px] font-semibold">STP Details</h1>
                          <CustomTable 
                              headers={['Folio/Holding Profile','From Scheme','To Scheme','Frequency','STP Date','Paid/No. Of Months','Initial Investment Units/Amount','Installment Units/ Amount']}
                              data={stpData}
                              pagination={false} />
                      </div>
                    </>

                }
            </div>
        </ThemeProvider>
    );
}