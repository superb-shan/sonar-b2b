import {CustomSelectField} from "../../../../InputFields";
import {useState} from 'react';
import CustomTable from "../../../PartnerHome/CustomTable";
import Image from "next/image";
import Arrow from "public/partner/Group 508900.svg";

function InvestorDetails( {setActive} ) {
  const [Investor, setInvestor] = useState('');
  const handleChange = (event) => {
    const value = event.target.value;
    setInvestor(value);
  };
  const InvestorValue = ['Kishior@gmail.com'];
  const [Status, setstatus] = useState('Active');
  const handleStatusChange = (event) => {
    const value = event.target.value;
    setstatus(value);
  };
  const InvestorDetails = [
    ["suraj natrajan","Vijava Bhaskar G","BQZPS71932","07 Aug 1989","Bangalore","505847","9878564423","Y","No","Active","Active","07 Oct 2023","Yes"],
    ["rajiv sambanth","Vijava Bhaskar G","BQZPS71932","02 Oct 1992","Chennai","609001","9878564423","Y","No","Active","Active","07 Oct 2023","Yes"],
    ["Ganapathy","V Bharathram","BQZPS71932","12 Jul 1992","Chennai","609001","9878564423","Y","No","Active","Active","07 Oct 2023","Yes"],
    ["knsrinivas","Ashwini Hiren Doshi","BQZPS71932","03 Sep 1998","Hvderabad","505847","9878564423","Y","No","Active","Active","07 Oct 2023","Yes"],
    ["rameshsamy","Madhumitha Vakkadala","BQZPS71932","08 Oct 1996","Pune","505847","9878564423","Y","No","Active","Active","07 Oct 2023","Yes"],
    ["sskumar20","Jayant Vithal Deodhar","BQZPS71932","07 Jun 1989","Coimbatore","609001","9878564423","Y","No","Active","Active","07 Oct 2023","Yes"],
    ["srinath_13","V Bharathram","BQZPS71932","21 Dec 1998","Trichy","609001","9878564423","Y","Yes","Active","Active","07 Oct 2023","Yes"],
    ["muralirang","Ashwini Hiren Doshi","BQZPS71932","08 Jan 1993","Bangalore","505847","9878564423","Y","No","Active","Active","07 Oct 2023","Yes"],
    ["sai.tallap","Madhumitha Vakkadala","BQZPS71932","07 Jun 1989","Trichy","609001","9878564423","Y","Yes","Active","Active","07 Oct 2023","Yes"],
    ["knsrinivas","Ashwini Hiren Doshi","BQZPS71932","03 Sep 1998","Hvderabad","505847","9878564423","Y","No","Active","Active","07 Oct 2023","Yes"]
]
  const StatusValue = ['Active'];
  return (
    <div className="p-[20px]">
      <div className="pb-[20px]">
          <div className="rounded-[20px] bg-[#ffffff]">
            <div className="flex items-center gap-x-[10px] p-[20px]">
              <Image className="cursor-pointer" src={Arrow} onClick={()=>setActive('UserManagementReports')}/>
              <h1 className="font-semibold text-[20px]">Investors Details</h1>
            </div>
            <div className="flex gap-x-[50px] pl-[20px] pb-[20px]">
              <CustomSelectField label="User Email" value={Investor} valueOptions={InvestorValue} handleChange={handleChange}/>
              <CustomSelectField label="Status" value={Status} valueOptions={StatusValue} handleChange={handleStatusChange}/>
            </div>
            <div className="pl-[20px] pb-[20px]">
              <button className="rounded-[25px] bg-[#0071E7] px-[30px] py-[10px] text-[#FFFFFF]">Submit</button>
            </div>
          </div>
      </div>
      {(() => {
          return (
            <CustomTable className={'p-0'} headers={['Email','Investor Name','PAN','DOB','City','Pincode','Contact Number','Activated','NRI','KYC Status','IrType','Activation Date','Tripartite Agreement']} data={InvestorDetails} rightNav={true} dataType="Invoice" />
          )
      })()}
    </div>
  );
}

export default InvestorDetails;