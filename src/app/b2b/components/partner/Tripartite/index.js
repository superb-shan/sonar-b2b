import { ExpandMore } from "@mui/icons-material";
import { MenuItem, TextField } from "@mui/material";
import { useState } from "react";
import {CustomSelectField} from "../../InputFields";
import Link from "next/link";
import Image from "next/image";

function Tripartite() {

    const [investor, setInvestor] = useState('');

    const [investorErrorMessage, setInvestorErrorMessage] = useState('');

    const [showTripartite, setShowTripartite] = useState(false);
    const [isIAgreed, setIsIAgreed] = useState(false);

    const handleShowTripartite = () => {
        if (investor === "") {
            setInvestorErrorMessage("Select an investor");
            return;
        }
        else {
            setInvestorErrorMessage("");
        }
        setShowTripartite(true);
    }
    const handleIAgree = () => {
        setIsIAgreed(true);
    }

    const handleInvestorChange = (event) => {
        const value = event.target.value;
        setInvestor(value);
        if (value === "") {
            setInvestorErrorMessage("Select an investor");
        }
        else {
            setInvestorErrorMessage("");
        }
      };

    const investorOptions = ['Ramesh', 'Suresh', 'Babu'];

    return (
        <div className="text-[14px] p-[20px]">
            <div className="w-full bg-[#FFFFFF] mb-[20px] rounded-[15px] p-[20px] flex flex-col gap-[20px]">
                <p className="text-[20px] font-semibold">Tripartite Agreement</p>
                <div className="flex gap-[30px]">
                    <CustomSelectField label="Investor" value={investor} valueOptions={investorOptions} errorMessage={investorErrorMessage} handleChange={handleInvestorChange} />
                    <button className="w-[166px] h-[40px] rounded-[25px] bg-primary text-white font-semibold" onClick={handleShowTripartite}>Show Tripartite</button>
                </div>
            </div>

            {showTripartite && (
                <div className="w-full h-[489px] bg-white rounded-[15px] p-[30px] font-medium leading-[20px]">
                    {!isIAgreed ?
                        <>
                            <div className="flex flex-col gap-[15px] h-[380px] overflow-y-scroll">
                                <p className="text-[16px] mb-[5px] leading-[22px]">TRIPARTITE AGREEMENT BETWEEN WEALTH INDIA FINANCIAL SERVICES PRIVATE LIMITED, Partner and Investor</p>
                                <p>This Agreement (hereinafter referred to as “Agreement”) is entered into on this <span className="font-bold">30</span> day of <span className="font-bold">Aug , 2023</span> by and between Wealth India Financial Services Private Limited (hereinafter referred to as “WIFS”) and having its office/registered office at 3rd Floor, Uttam Building, No 38 & 39, Whites Road, Royapettah, Chennai 600014, which expression shall, unless repugnant to the context or meaning thereof, be deemed to mean and include his/her heirs, executors, administrators and legal representatives/the partners for the time being of the said entity, the survivor or survivors of them and their respective heirs, executors, administrators and legal representatives /its successors, as the case may be, of the One Part;</p>
                                <p>AND</p>
                                <p><span className="font-bold">Iaspire Wealth Services</span> (hereinafter referred to as “the Partner”), and having his/its office/ registered office at <span className="font-bold">laspire Wealth, Asdfasdf, Asfasd, Asdf, Tamil andu, India,</span> which expression shall, unless repugnant to the context or meaning thereof, be deemed to mean and include his/her heirs, executors, administrators and legal representatives/the partners for the time being of the said entity, the survivor or survivors of them and their respective heirs, executors, administrators and legal representatives/its successors, as the case may be, of the Second Part;</p>
                                <p>AND</p>
                                <p><span className="font-bold">{investor}</span> (Name of the Investor of Partner) an individual. and having his/its residence/office/ at <span className="font-bold">New Str. Ssada, Agartala, Andaman & Nicobar, India</span> which expression shall, unless repugnant to the context or meaning thereof, be deemed to mean and include his/her heirs, executors, administrators and legal representatives/the partners for the time being of the said entity, the survivor or survivors of them and their respective heirs, executors, administrators and legal representatives/its successors, as the case may be, of the Third Part;</p>
                            </div>
                            <Link href="#"><button className="w-[166px] h-[40px] rounded-[25px] bg-primary text-white font-semibold mt-[20px]" onClick={handleIAgree}>I Agree</button></Link>
                        </>
                      :
                        <>
                            <div className="flex flex-col justify-center items-center h-[489px]">
                                <Image src='/home/Group 405761/Group 405761@2x.png' width={113} height={133} />
                                <p className="text-[#00A345] text-[20px] font-semibold mt-[5px]">Successfully Updated</p>
                            </div>
                        </>
                    }
                    
                </div>
                
            )}

            <div className={`py-[10px] w-[827px] ${showTripartite ? "mt-[6px]" : "mt-[525px]"} text-[#777777] text-[12px]`}>
                <div> &#8505; Mutual Fund investments are subject to market risks, read all scheme related documents carefully.</div>
                <div>© Wealth India Financial Services Pvt. Ltd. 2023</div>
            </div>
        </div>
    );
}

export default Tripartite;