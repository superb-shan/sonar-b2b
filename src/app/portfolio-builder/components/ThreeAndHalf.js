import { useState } from "react";

export default function ThreeAndHalf() {
    const [isGreaterThan30, setIsGreaterThan30] = useState(true);

    const longTermOptions = [
        {
            name: "Option 1", description: "100% Equity "
        },
        {
            name: "Option 2", description: "80% Equity: 20% Debt"
        },
        {
            name: "Option 3", description: "60% Equity : 40% Debt"
        },
        {
            name: "Equity", description: "5 Finger Strategy"
        },
        {
            name: "Debt", description: "Equity Savings Fund"
        },
    ];

    return(
        <div className="flex flex-col gap-[20px] text-[14px] px-[50px]">
            <h3 className="text-[20px] font-semibold leading-[38px]">Three and a Half Box Money System</h3>

            <section className="w-full bg-white py-[20px] px-[50px] flex flex-col gap-[20px] items-center rounded-[15px]">
                <div className="flex gap-[30px]">
                    <button className={`w-[240px] h-[33px] rounded-t-[10px] ${isGreaterThan30 ? 'bg-[#DCEBFE] text-primary font-semibold' : 'bg-[#F7F8FF] text-[#BEBEBE] font-medium'}`} onClick={() => setIsGreaterThan30(true)}>Greater Than 30% Of Income</button>
                    <button className={`w-[240px] h-[33px] rounded-t-[10px] ${!isGreaterThan30 ? 'bg-[#DCEBFE] text-primary font-semibold' : 'bg-[#F7F8FF] text-[#BEBEBE] font-medium'}`} onClick={() => setIsGreaterThan30(false)}>Greater Than 20% Of Income</button>
                </div>

                <div className="w-[510px] h-[72px] rounded-b-[10px] border-t-[5px] border-t-primary shadow-[0px_5px_10px_#00000014] flex flex-col items-center justify-evenly pt-[5px] pb-[15px]">
                    <p className="text-[18px] text-primary font-semibold">Monthly Savings</p>
                    <p className="text-[13px] font-medium">{`Target: Greater than ${isGreaterThan30 ? 3 : 2}0% of Income (Automate Savings via 5-5-R Rule)`}</p>
                </div>

                <div className="w-full flex justify-center">
                    <div className="flex flex-col gap-[20px] mr-[73px]">
                        <div className="w-[230px] h-[71px] rounded-b-[10px] border-t-[5px] border-t-[#6E6E72] shadow-[0px_5px_10px_#00000014] flex flex-col items-center justify-evenly pt-[10px] pb-[15px] gap-[5px]">
                            <p className="text-[16px] text-[#6E6E72] font-semibold">Safety Box</p>
                            <p className="text-[13px] font-medium">(5% of Income)</p>
                        </div>
                        <div className="w-[230px] h-[180px] bg-[#FBFBFF] rounded-[9px] py-[15px] px-[10px] flex flex-col gap-[10px] font-medium">
                            <div className="flex gap-[10px] items-start">
                                <div className="w-[7px] h-[7px] bg-primary rounded-full mt-[7px]"></div>
                                <div>
                                    <p>Emergency Fund</p>
                                    <p className="text-[11px]">{"(Target: >6 times monthly spend)"}</p>
                                </div>
                            </div>
                            <div className="flex gap-[10px] items-center">
                                <div className="w-[7px] h-[7px] bg-primary rounded-full"></div>
                                <p>Life Insurance</p>
                            </div>
                            <div className="flex gap-[10px] items-center">
                                <div className="w-[7px] h-[7px] bg-primary rounded-full"></div>
                                <p>Health Insurance</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-[20px] mr-[37px]">
                        <div className="w-[230px] h-[71px] rounded-b-[10px] border-t-[5px] border-t-[#F1C231] shadow-[0px_5px_10px_#00000014] flex flex-col items-center justify-evenly pt-[10px] pb-[15px] gap-[5px]">
                            <p className="text-[16px] text-[#F1C231] font-semibold">{isGreaterThan30 ? "Short Term Box" : "Short Term Spending Box"}</p>
                            <p className="text-[13px] font-medium">(5% of Income)</p>
                        </div>
                        <div className="w-[230px] h-[180px] bg-[#FBFBFF] rounded-[9px] py-[15px] px-[10px] flex flex-col gap-[10px] font-medium">
                        <div className="flex gap-[10px] items-center">
                                <div className="w-[7px] h-[7px] bg-primary rounded-full"></div>
                                <p>Short Duration Debt Funds</p>
                            </div>
                            <div className="flex gap-[10px] items-center">
                                <div className="w-[7px] h-[7px] bg-primary rounded-full"></div>
                                <p>Life Insurance</p>
                            </div>
                            <div className="flex gap-[10px] items-center">
                                <div className="w-[7px] h-[7px] bg-primary rounded-full"></div>
                                <p>Health Insurance</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-[20px] mr-[37px] items-center">
                        <div className="w-[230px] h-[71px] rounded-b-[10px] border-t-[5px] border-t-[#00B050] shadow-[0px_5px_10px_#00000014] flex flex-col items-center justify-evenly pt-[10px] pb-[15px] gap-[5px]">
                            <p className="text-[16px] text-[#00B050] font-semibold">Long Term Wealth Box</p>
                            <p className="text-[13px] font-medium">{isGreaterThan30 ? "(20% Remaining Income)" : "(Remaining Income)"}</p>
                        </div>
                        <div className="flex items-center">
                            <div className="bg-primary w-[38px] h-[38px] rounded-l-[6px] text-white flex justify-center items-center font-semibold">
                                20%
                            </div>
                            <div className="w-[230px] h-[180px] bg-[#FBFBFF] rounded-[9px] px-[10px] flex flex-col justify-center gap-[10px] font-medium border-[1px] border-primary">
                                {
                                    longTermOptions.map(list => (
                                        <div className="flex gap-[10px]">
                                            <p className="text-[#00B050] text-[12px] w-[50px] font-bold whitespace-nowrap">{list.name}</p>
                                            <p className="text-[13px]">{list.description}</p>
                                        </div>
                                        )
                                    )
                                }
                            </div>
                            <div className="bg-primary w-[38px] h-[38px] rounded-r-[6px] text-white flex justify-center items-center font-semibold">
                                80%
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-[20px]">
                        <div className="w-[230px] h-[71px] rounded-b-[10px] border-t-[5px] border-t-[#990001] shadow-[0px_5px_10px_#00000014] flex flex-col items-center justify-evenly pt-[10px] pb-[15px] gap-[5px]">
                            <p className="text-[16px] text-[#990001] font-semibold">High Risk Box</p>
                            <p className="text-[13px] font-medium">(upto 5% of Income)</p>
                        </div>
                    </div>

                </div>

                <div className="w-[510px] h-[72px] rounded-b-[10px] border-t-[5px] border-t-primary shadow-[0px_5px_10px_#00000014] flex flex-col items-center justify-evenly pt-[5px] pb-[15px]">
                    <p className="text-[18px] text-primary font-semibold">One Time Investments</p>
                    <p className="text-[13px] font-medium">(Eg Bonus, ESOP Sale, Land Sale, Inheritance etc)</p>
                </div>
            </section>
        </div>
    );
}