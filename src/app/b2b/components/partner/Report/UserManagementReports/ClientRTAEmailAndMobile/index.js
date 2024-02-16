import {CustomSelectField} from "../../../../InputFields";
import {useState} from 'react';
import CustomTable from "../../../PartnerHome/CustomTable";
import {CustomTextField} from "../../../../InputFields";
import Image from "next/image";
import Arrow from "public/partner/Group 508900.svg";
import Search from "/public/partner/Group 545655 (3).svg";

function ClientRTAEmailAndMobile( {setActive} ) {
  const ClientRtaOptions = ['PAN','Mobile Number','Email','Folio Number'];
  const [ClientRtaEmailandMobile, setClientRtaEmailandMobile] = useState(ClientRtaOptions[0]); 
  const handleRtaChange = (event) => {
    const value = event.target.value;
    setClientRtaEmailandMobile(value);
  };
  const ClientRTAEmailandMobile = [
    ["Akshay k","BQ6653728","PPFAS Asset Management Pvt.Ltd","11281516","Parag Parikh Flexi Cap Fund-Reg(G)","akshay.dx93@gmail.com","986763678"],
    ["Akshay k","BQ6653728","PPFAS Asset Management Pvt.Ltd","11281516","Parag Parikh Flexi Cap Fund-Reg(G)","akshay.dx93@gmail.com","986763678"],
    ["Akshay k","BQ6653728","HDFC Asset Management Company Limited","18034942/28","HDFC Short Term Debt Fund(G)","akshay.dx93@gmail.com","986763678"],
    ["Akshay k","BQ6653728","ICICI Prudential Asset Management Company Limited","18497710/85","ICICI Pru Ultra Short Term Fund Fund(G)","akshay.dx93@gmail.com","986763678"],
    ["Akshay k","BQ6653728","ICICI Prudential Asset Management Company Limited","18497710/85","ICICI Pru Ultra Short Term Fund Fund(G)","akshay.dx93@gmail.com","986763678"],
    ["Akshay k","BQ6653728","ICICI Prudential Asset Management Company Limited","18497710/85","ICICI Pru Ultra Short Term Fund Fund(G)","akshay.dx93@gmail.com","986763678"],
    ["Akshay k","BQ6653728","Axis Asset Management Company Ltd.","910123220902","Axis TreasuryAdvantage Fund-Reg(G)","akshay.dx93@gmail.com","986763678"],
    ["Akshay k","BQ6653728","Axis Asset Management Company Ltd.","910123220902","Axis TreasuryAdvantage Fund-Reg(G)","akshay.dx93@gmail.com","986763678"],
    ["Akshay k","BQ6653728","Axis Asset Management Company Ltd.","910123220902","Axis Bluechip Fund- Reg(G)","akshay.dx93@gmail.com","986763678"],
    ["Akshay k","BQ6653728","ICICI Prudential Asset Management Company Limited","18497710/85","ICICI Pru NASDAQ 100 Index Fund(G)","akshay.dx93@gmail.com","986763678"]
]   
    const [data,setData] = useState(ClientRTAEmailandMobile);
    const [input,setInput] = useState('');
    function filter() {
      const value = new RegExp(input.trim(), 'i');
      const filteredData = ClientRTAEmailandMobile.filter((item) => {
        if(ClientRtaEmailandMobile == 'PAN'){
          return (
              (value === '' || value.test(item[1])) 
          );
        }
        if(ClientRtaEmailandMobile == 'Mobile Number'){
          return (
              (value === '' || value.test(item[6])) 
          );
        }
        if(ClientRtaEmailandMobile == 'Email'){
          return (
              (value === '' || value.test(item[5])) 
          );
        }
        if(ClientRtaEmailandMobile == 'Folio Number'){
          return (
              (value === '' || value.test(item[3])) 
          );
        }
      });
      setData(filteredData);
    }
    const [searchFilter,setSearchFilter] = useState('');
    const handleSearchChange = (e) =>{
      setSearchFilter(e.target.value);
    }
    function search(){
      const value = new RegExp(searchFilter.trim(),'i');
      const filtered = ClientRTAEmailandMobile.filter((item)=>{
        if(isNaN(searchFilter)){
          return(
            (value==='' || value.test(item[0]) || value.test(item[1])  || value.test(item[2])  || value.test(item[4]) || value.test(item[5]))
          );
        }else{
          return(
            (value==='' || value.test(item[6]) || value.test(item[3]))
          );
        }
      });
      setData(filtered);
    }
    return (
      <div className="p-[20px]">
        <div>
            <div className="rounded-[20px] bg-[#ffffff]">
              <div className="flex items-center gap-x-[10px] p-[20px]">
                <Image className="cursor-pointer" src={Arrow} onClick={()=>setActive('UserManagementReports')}/>
                <h1 className="text-[20px] font-semibold">Client RTA Email and Mobile</h1>
              </div>
              <div className="flex gap-x-[50px] pl-[20px] pb-[20px]">
                <CustomSelectField label="Search by" value={ClientRtaEmailandMobile} valueOptions={ClientRtaOptions} handleChange={handleRtaChange}/>
                <CustomTextField label={ClientRtaEmailandMobile} handleChange={(e)=>setInput(e.target.value)}/>
              </div>
              <div className="pl-[20px] pb-[20px]">
                <button className="rounded-[25px] bg-[#0071E7] px-[30px] py-[10px] text-[#FFFFFF]" onClick={filter}>Submit</button>
              </div>
            </div>
            <div className="flex justify-between mb-[15px]">
              <div className="text-[14px] mt-[30px]">As on 13 Oct 2023</div>
              <div className="flex items-center rounded-[10px] bg-white h-[40px] w-[309px] mt-[15px]">
                <div className="p-[11px]">
                  <Image src={Search} alt="Search Icon" width={15} height={15}/>
                </div>
                <input
                  type="text"
                  placeholder="Search"
                  onChange={handleSearchChange}
                  onMouseEnter={search}
                />
              </div>
            </div>
        </div>
        {(() => {
            return (
              <CustomTable className={''} headers={['Account(s) Name','PAN Number','Scheme Name','Folio Number','AMC Name','Email ID','Mobile Number']} data={data} rightNav={true} dataType="Invoice" />
            )
        })()}
      </div>
  );
}

export default ClientRTAEmailAndMobile;