import Image from "next/image";
import Img1 from '/public/partner/Group 570439.svg'
import Img2 from '/public/partner/Group 570437.svg'
import Img3 from '/public/partner/Group 570435.svg'
import Img4 from '/public/partner/Group 570438.svg'
import Img5 from '/public/partner/Group 570436.svg'
import Img6 from '/public/partner/Group 570434.svg'
function TransactioReports( {setActive} ) {
  return (
    <div className="p-[20px]" >
      <div className="w-full bg-white p-[20px] rounded-[20px]">
        <h1 className="text-[20px] font-semibold leading-[20px] mb-[30px]">Transaction reports</h1>
        <div className="grid grid-cols-3 justify-between gap-x-[86px] gap-y-[30px]">
          <button className="flex items-center justify-start gap-x-[15px] p-[20px] bg-[#F5F7FE] rounded-[25px]" onClick={()=>setActive('TransactionReport')}>
            <Image height={50} width={52} src={Img1} alt="icon" />
            <h2 className="text-[14px] font-semibold">Transaction Report</h2>
          </button>
          <button className="flex items-center justify-start gap-x-[15px] p-[20px] bg-[#F5F7FE] rounded-[25px]" onClick={()=>setActive('InvestorSchemeDetails')}>
            <Image height={50} width={52} src={Img2} alt="icon"/>
            <h2 className="text-[14px] font-semibold">Investor Scheme Details</h2>
          </button>
          <button className="flex items-center justify-start gap-x-[15px] p-[20px] bg-[#F5F7FE] rounded-[25px]" onClick={()=>setActive('AuthorizationPendingReport')}>
            <Image height={50} width={52} src={Img6} alt="icon"/>
            <h2 className="text-[14px] font-semibold">Authorization Pending Report</h2>
          </button>
          <button className="flex items-center justify-start gap-x-[15px] p-[20px] bg-[#F5F7FE] rounded-[25px]" onClick={()=>setActive('SIPReport')}>
            <Image height={50} width={52} src={Img3} alt="icon"/>
            <h2 className="text-[14px] font-semibold">SIP Report</h2>
          </button>
          <button className="flex items-center justify-start gap-x-[15px] p-[20px] bg-[#F5F7FE] rounded-[25px]" onClick={()=>setActive('STPReport')}>
            <Image height={50} width={52} src={Img4} alt="icon" />
            <h2 className="text-[14px] font-semibold">STP Report</h2>
          </button>
          <button className="flex items-center justify-start gap-x-[15px] p-[20px] bg-[#F5F7FE] rounded-[25px]" onClick={()=>setActive('SWPReport')}>
            <Image height={50} width={52} src={Img5} alt="icon"/>
            <h2 className="text-[14px] font-semibold">SWP Report</h2>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TransactioReports;
