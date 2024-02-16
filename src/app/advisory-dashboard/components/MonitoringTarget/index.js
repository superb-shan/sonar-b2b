import Image from "next/image";
import img from '/public/partner/commingSoon/commingSoon.png'

export default function MonitoringTarget() {

    return (
        <div className="p-[20px]" >
            <div className="w-full bg-white p-[80px] rounded-[20px]  ">
                <div className="flex flex-col items-center justify-center h-full">
                    <div className="w-[169px]">
                        <Image src={img}/>
                    </div>
                    <div className="text-[18px] leading-[18px] mt-[30px] mb-[20px]">Coming Soon</div>
                    <div className="text-[14px]  leading-[14px] text-[#6E6E72] ">Stay tuned for updates.</div>
                </div>
            </div>
        </div>
    )
}