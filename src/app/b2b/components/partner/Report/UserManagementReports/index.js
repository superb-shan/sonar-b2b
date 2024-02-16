import Image from "next/image";
import Img1 from '/public/partner/Group 570440.svg'
import Img2 from '/public/partner/Group 570443.svg'
import Img3 from '/public/partner/Group 570444.svg'
import Img4 from '/public/partner/Group 570441.svg'
import Img5 from '/public/partner/Group 570442.svg'
import Img6 from '/public/partner/Group 570445.svg'
function UserManagementReports( {setActive}) {
  return (
    <div className="p-[20px]" >
      <div className="w-full bg-white p-[20px] rounded-[20px]">
        <h1 className="text-[20px] font-semibold leading-[20px] mb-[30px]">User management reports</h1>
        <div className="grid grid-cols-3 justify-between gap-x-[86px] gap-y-[30px]">
          <button className="flex items-center justify-start gap-x-[15px] p-[20px] bg-[#F5F7FE] rounded-[25px]" onClick={()=>{setActive('InvestorDetails')}}>
            <Image height={50} width={52} src={Img1} alt="icon" />
            <h2 className="text-[14px] font-semibold">Investor Details</h2>
          </button>
          <button className="flex items-center justify-start gap-x-[15px] p-[20px] bg-[#F5F7FE] rounded-[25px]" onClick={()=>{setActive('ValuationReport')}}>
            <Image height={50} width={52} src={Img2} alt="icon"/>
            <h2 className="text-[14px] font-semibold">Client Valuation Report</h2>
          </button>
          <button className="flex items-center justify-start gap-x-[15px] p-[20px] bg-[#F5F7FE] rounded-[25px]" onClick={()=>{setActive('ClientRTAEmailAndMobile')}}>
            <Image height={50} width={52} src={Img3} alt="icon"/>
            <h2 className="text-[14px] font-semibold">Client RTA Email and Mobile</h2>
          </button>
          <button className="flex items-center justify-start gap-x-[15px] p-[20px] bg-[#F5F7FE] rounded-[25px]" onClick={()=>{setActive('MandatesReport')}}>
            <Image height={50} width={52} src={Img4} alt="icon" />
            <h2 className="text-[14px] font-semibold">Mandates Report</h2>
          </button>
          <button className="flex items-center justify-start gap-x-[15px] p-[20px] bg-[#F5F7FE] rounded-[25px]" onClick={()=>{setActive('LastLoginReport')}}>
            <Image height={50} width={52} src={Img5} alt="icon"/>
            <h2 className="text-[14px] font-semibold">Last Login Report</h2>
          </button>
          <button className="flex items-center justify-start gap-x-[15px] p-[20px] bg-[#F5F7FE] rounded-[25px]" onClick={()=>{setActive('BirthdayDetails')}}>
            <Image height={50} width={52} src={Img6} alt="icon"/>
            <h2 className="text-[14px] font-semibold">Birthday details</h2> 
          </button>
        </div>
      </div>
    </div>
  );
}
export default UserManagementReports;
