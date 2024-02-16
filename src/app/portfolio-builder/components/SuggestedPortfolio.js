import React, { useState } from "react";
import { Edit } from "@mui/icons-material";
import SafetyBox from "./SuggestedPortfolio/SafetyBox";
import Image from "next/image";
import download from '/public/download.svg'
import ShortTermBox from "./SuggestedPortfolio/ShortTermBox";

export default function SuggestedPortfolio({isEditTriggered, setIsEditTriggered, handleNotificationMessage}) {

    const [plan, setPlan] = useState('Safety Box');

    
    return(
        <div className="flex flex-col text-[14px] px-[50px]">
            <h3 className="text-[20px] font-semibold leading-[38px]">Suggested Portfolio</h3>

            <div className="w-full bg-white rounded-t-[15px] p-[20px] pb-0 flex flex-col mt-[10px]">
                <div className="flex gap-[5px]">
                    <button className={`px-[30px] leading-[20px] py-[10px] rounded-t-[10px] ${plan === 'Safety Box' ? 'bg-[#DCEBFE] text-primary font-semibold' : 'bg-[#F7F8FF] text-[#BEBEBE] font-medium'}`} onClick={() => setPlan('Safety Box')}>Safety Box</button>
                    <button className={`px-[30px] leading-[20px] py-[10px] rounded-t-[10px] ${plan === 'Short Term Box' ? 'bg-[#DCEBFE] text-primary font-semibold' : 'bg-[#F7F8FF] text-[#BEBEBE] font-medium'}`} onClick={() => setPlan('Short Term Box')}>Short Term Box</button>
                    <button className={`px-[30px] leading-[20px] py-[10px] rounded-t-[10px] ${plan === 'Long Term Wealth Box' ? 'bg-[#DCEBFE] text-primary font-semibold' : 'bg-[#F7F8FF] text-[#BEBEBE] font-medium'}`} onClick={() => setPlan('Long Term Wealth Box')}>Long Term Wealth Box</button>
                    <button className={`px-[30px] leading-[20px] py-[10px] rounded-t-[10px] ${plan === 'High Risk Box' ? 'bg-[#DCEBFE] text-primary font-semibold' : 'bg-[#F7F8FF] text-[#BEBEBE] font-medium'}`} onClick={() => setPlan('High Risk Box')}>High Risk Box</button>
                    <button className="ml-auto mr-[20px]" onClick={() => setIsEditTriggered(true)}>
                        <Image src={download} className="text-primary inline" />
                        <span className="font-bold text-primary ml-[5px]">Download</span>
                    </button>
                </div>

            </div>
                {   
                    plan === 'Safety Box' && <SafetyBox isEditTriggered={isEditTriggered} setIsEditTriggered={setIsEditTriggered} handleNotificationMessage={handleNotificationMessage} /> ||
                    plan === 'Short Term Box' && <ShortTermBox isEditTriggered={isEditTriggered} setIsEditTriggered={setIsEditTriggered} handleNotificationMessage={handleNotificationMessage} />

                }

        </div>
    );
}
