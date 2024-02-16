import { ThemeProvider } from "@mui/material";
import theme from '../../theme'
import Image from "next/image";

import email from '/public/Contact/Group 512412.svg'
import phone from '/public/Contact/Group 512413.svg'
import office from '/public/Contact/Group 512414.svg'
import map from '/public/map/map@2x.png'

export default function Contact() {
    return(
        <ThemeProvider theme={theme}>
            <div className="h-screen text-center mt-[-40px] flex flex-col items-center justify-center">
                <h1 className="text-[45px] font-extrabold leading-[60px]">Contact <span className="text-primary">Us</span></h1>
                <p className='text-[16px] font-medium mt-[40px] leading-[20px]' >partner.fundsindia.com is a product of Wealth India Financial Services Private Limited, a company with a proven track record of innovation in the financial services industry and is known and respected in the financial markets for its expert knowledge levels, industry best practice, customer management skills, old fashioned true honesty and the goodwill of the customers.</p>
                <div>
                    <h3 className="text-[24px] font-extrabold mt-[70px] ">Escalation <span className="text-primary">Matrix</span></h3>
                    <div className="flex gap-x-[24px] mt-[30px] items-center justify-center " >
                        <div className="w-[275px] h-[235px] shadow-lg py-[15px] px-[10px] rounded-[15px] bg-white">
                            <h6 className="font-semibold text-[16px]">Level</h6>
                            <h2 className="font-extrabold text-[35px] text-primary ">01</h2>
                            <p className="text-[14px] font-semibold">Any queries related to FIP should be raised as a ticket to <span className="text-primary">contactpartner@fundsindia.com</span> Based on the queries solution & responses will be given within 24hrs.</p>
                        </div>
                        <div className="w-[275px] h-[235px] shadow-lg py-[15px] px-[10px] rounded-[15px] bg-white">
                            <h6 className="font-semibold text-[16px]">Level</h6>
                            <h2 className="font-extrabold text-[35px] text-primary ">02</h2>
                            <p className="text-[14px] font-semibold">Give us a call on <span className="text-primary">044 - 61104100</span> with your issue. We will get back to you within 24 business hours.</p>
                        </div>
                        <div className="w-[275px] h-[235px] shadow-lg py-[15px] px-[10px] rounded-[15px] bg-white">
                            <h6 className="font-semibold text-[16px]">Level</h6>
                            <h2 className="font-extrabold text-[35px] text-primary ">03</h2>
                            <p className="text-[14px] font-semibold">If you are not getting any response as per the TAT you can reach out to <span className="text-primary">partnerescalation@fundsindia.com</span></p>
                        </div>
                        <div className="w-[275px] h-[235px] shadow-lg py-[15px] px-[10px] rounded-[15px] bg-white">
                            <h6 className="font-semibold text-[16px]">Level</h6>
                            <h2 className="font-extrabold text-[35px] text-primary ">04</h2>
                            <p className="text-[14px] font-semibold">Escalation to top management, if all these steps have failed to address your problem.You can lodge a complaint with top management at <span className="text-primary">partnergrievance@fundsindia.com</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-screen flex items-center justify-center">
                <div className="flex gap-x-[10px]">
                    <Image src={map} className=" w-[410px] h-[438px]" />
                    <div className="self-end flex flex-col gap-y-[15px]">
                        <div className="bg-[#F3F8FC] p-[30px] text-[16px] rounded-r-[34px] flex flex-col gap-y-[30px]">
                            <div>
                                <div className="flex items-center gap-x-[15px] text-primary font-bold ">
                                    <Image src={office} className="w-[16px] h-[20px]" />
                                    <h5>Head Office</h5>
                                </div>
                                <p className="ml-[30px] mt-[10px]"><span className="font-semibold">Wealth India Financial Services Pvt. Ltd.,</span> <br/> 3rd Floor, Uttam Building, No. 38 and 39, Whites Road, Royapettah.<br/> Chennai - 600014.</p>
                            </div>
                            <div>
                                <div className="flex items-center gap-x-[15px] text-primary font-bold ">
                                    <Image src={phone} className="w-[20px] h-[20px]" />
                                    <h5>Phone</h5>
                                </div>
                                <p className="ml-[30px] mt-[10px]">044 - 61104100</p>
                            </div>
                            <div>
                                <div className="flex items-center gap-x-[15px] text-primary font-bold ">
                                    <Image src={email} className="w-[18px] h-[14px]" />
                                    <h5>Email</h5>
                                </div>
                                <p className="ml-[30px] mt-[10px]">contactpartner@fundsindia.com</p>
                            </div>
                        </div>
                        <p className="font-semibold text-[14px] ml-[30px]">Call Center Timings: 10.00 AM tO 6.00 PM (IST) <br/> (Monday through Saturday: Closed on Sundays, public holidays and second Saturdays)</p>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
}