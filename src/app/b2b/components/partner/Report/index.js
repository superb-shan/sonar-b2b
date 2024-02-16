import Image from "next/image"

function Report() {
  return (
    <div className="p-[20px]" >
      <div className="w-full bg-white p-[20px] rounded-[20px]">
        <h1 className="text-[20px] font-semibold leading-[20px] mb-[30px]">User management reports</h1>
        <div className="flex gap-x-[40px]">
          <button className="flex items-center justify-center gap-x-[15px] p-[20px] bg-[#F5F7FE] rounded-[25px]">
            <Image height={50} width={52} alt="icon" />
            <h2 className="text-[14px] font-semibold">AUM Client Report</h2>
          </button>
          <button className="flex items-center justify-center gap-x-[15px] p-[20px] bg-[#F5F7FE] rounded-[25px]">
            <Image height={50} width={52} alt="icon"/>
            <h2 className="text-[14px] font-semibold">Partner Invoice Report<br/>(Brokerage)</h2>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Report
