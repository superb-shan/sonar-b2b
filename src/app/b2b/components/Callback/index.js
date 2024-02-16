import Image from "next/image";
import captcha from "/public/callback/captcha.png"
import page3Img from '/public/callback/page3img.png';
import page4Img from '/public/callback/page4img.png';
import page5Img from '/public/callback/page5img.png';
import page6Img from '/public/callback/page6img.png';
import page2Img1 from '/public/callback/2ndpageassets/1.png'
import page2Img2 from '/public/callback/2ndpageassets/2.png'
import page2Img3 from '/public/callback/2ndpageassets/3.png'
import page2Img4 from '/public/callback/2ndpageassets/4.png'
import tick from '/public/callback/successmark.png';

import { ThemeProvider } from '@mui/material/styles';
import {CustomTextField} from "../InputFields";
import theme from "../../theme";
import { useState } from "react";

function callback() {

    const[success, setSuccess] = useState(false);
    const[name, setName] = useState('');
    const[mobileNumber, setMobileNumber] = useState('');
    const[phoneNumber,setPhoneNumber] = useState('');
    const[email, setEmail] = useState('');
    const[comments, setComments] = useState('');
    const[verficationCode,setVerficationCode] = useState('');

    const handleNameChange = (event)=>{
        setName(event.target.value);
    }
    const handleMobileNumberChange = (event)=>{
        setMobileNumber(event.target.value);
    }
    const handlePhoneNumberChange = (event)=>{
        setPhoneNumber(event.target.value);
    }
    const handleEmailChange = (event)=>{
        setEmail(event.target.value);
    }
    const handleCommentsChange = (event)=>{
        setComments(event.target.value);
    }
    const handleVerificationChange = (event)=>{
        setVerficationCode(event.target.value);
    }
    return ( 
        <ThemeProvider theme={theme}>
            <div className="flex h-screen flex-row items-center justify-center font-poppins mt-[-60px] ">
                <div className="w-[50%] flex flex-col gap-y-[26px]">
                    <h1 className="text-[45px] font-bold text-primary">Connect <span className="text-black">And</span> Grow</h1>
                    <p className="text-[16px]">
                        <span className="font-medium">Are you looking to enhance your mutual fund business in today’s challenging times?<br/> Are your clients asking for online access to their investments?<br/> Are your service costs sky-rocketing?<br/> Do you wish to attract more and more affluent customers?</span><br/><br/> Presenting www.partner.fundsindia.com a premium destination that has been strategically tailored to give you all the advantages of an integrated online transaction platform, to complement your financial planning and Value added services to your clients.<br/><br/> With FundsindiaPartner have an effective way to attract, retain and service ideal clients in the digital age. A service that requires differentiation, strategy, and innovative content distribution
                    </p>
                </div>
                <div className="w-[50%] ml-[63px]">

                    <div className="w-[513px] h-[555px] bg-white p-[30px] px-[40px]  items-center rounded-[15px] shadow-lg ">
                        {
                        (!success) ?
                        <>
                            <div className="text-[26px] font-semibold mb-[20px] text-center leading-[20px]">Please tell us how to <span className="text-[#0071E7]">REACH YOU</span></div>
                            <div className="flex flex-col gap-y-[20px]">
                                <CustomTextField type="text" label="Name" width="433px" height='40px' value={name} handleChange={handleNameChange}/>
                                <CustomTextField type="tel" label="Mobile Number" width="433px" height='40px' value={mobileNumber}  handleChange={handleMobileNumberChange}  />
                                <CustomTextField type="tel" label="Phone Number" width="433px" height='40px' value={phoneNumber} handleChange={handlePhoneNumberChange}  />
                                <CustomTextField type="email" label="Email" width="433px" height='40px' value={email} handleChange={handleEmailChange}  />
                                <CustomTextField type="text" label="Comments" width="433px" height="80px" value={comments} handleChange={handleCommentsChange} multiline 
                                    sx={{
                                        '& .MuiInputBase-root': {
                                            width:"433px",
                                            height:"80px",
                                        },
                                        '& .MuiInputBase-input': {
                                            overflow: 'scroll !important',
                                            width:"433px",
                                            marginTop: '6px',
                                            marginBottom: '4px',
                                            height:"70px !important",
                                        },
                                    }} 
                                />
                                
                                <div className="flex flex-row">
                                    <CustomTextField type="text" label="Verification Code" width="271px" setValue={setVerficationCode} value={verficationCode} handleChange={handleVerificationChange}/>        
                                    <Image className="w-[144px] h-[36px] ml-[18px]" src={captcha}/>
                                </div>
                                <div className="flex items-center justify-center text-[14px]">
                                    <button onClick={()=>{setSuccess(true)}} className="w-[166px] h-[40px] bg-primary text-white font-bold  rounded-[25px]  hover:bg-[#000000] duration-300">Submit</button>
                                </div>
                            </div>
                        </>
                        :
                        <div className="flex flex-col h-full items-center justify-center">
                            <div className='flex justify-center'>
                                <Image className="w-[113px] h-[133px]" src={tick}/>
                            </div>
                            <div  className='flex justify-center'>
                                <div className='text-[16px] text-center font-semibold'>
                                        Thank You for showing interest in PartnerFundsindia. Our customer care people will contact to you soon.
                                </div>
                            </div>    
                        </div>
                        }
                    </div>
                </div>
            </div>

            {/* Second page will be here */}
            <div className="flex mt-[200px] flex-col items-center justify-center font-poppins">
                <div className="items-center text-[35px] font-bold">
                    How it <span className="text-[#0071E7]">Works?</span>
                </div>
                <div className="flex gap-x-[44px] mt-[53px]">

                    <div className="flex flex-col w-[237px] h-[239px] shadow-lg  rounded-[15px] items-center justify-center p-[20px] bg-white">
                        <div className="h-[50%] flex items-center">
                            <Image className="w-[74px] h-[63px]" src={page2Img1} />
                        </div>
                        <div className="h-[50%] text-[16px] leading-[20px] text-center">
                        Partner signs up with FundsindiaPartner
                        </div>
                    </div>

                    <div className="flex flex-col w-[237px] h-[239px] shadow-lg  rounded-[15px] items-center justify-center p-[20px] bg-white">
                        <div className="h-[50%] flex items-center">
                            <Image className="w-[64px] h-[66px]" src={page2Img2}/>
                        </div>
                        <div className="h-[50%] text-[16px] leading-[20px] text-center ">
                        Partner uploads or creates client information in Funds IndiaPartner
                        </div>
                    </div>

                    <div className="flex flex-col w-[237px] h-[239px] shadow-lg  rounded-[15px] items-center justify-center p-[20px] bg-white">
                        <div className="h-[50%] flex items-center">
                            <Image className="w-[73px] h-[51px]" src={page2Img3}/>
                        </div>
                        <div className="h-[50%] text-[16px] leading-[20px] text-center ">
                        FundsindiaPartner generates user ids, documents for client signature
                        </div>
                    </div>
                    <div className="flex flex-col w-[237px] h-[239px] shadow-lg  rounded-[15px] items-center justify-center p-[20px] bg-white">
                        <div className="h-[50%] flex items-center">
                            <Image className="w-[57px] h-[73px]" src={page2Img4}/>
                        </div>
                        <div className="h-[50%] text-[16px] leading-[20px] text-center ">
                        Once client account opened, investments can start
                        </div>
                    </div>
                </div>

                <div className="p-[30px] w-[1080px] shadow-lg mt-[60px] rounded-[15px] bg-white flex flex-col gap-y-[25px]">
                    <div className="text-center font-bold text-[30px] text-[#0071E7]">
                    Connect <span className="text-[#000000]">and</span> Grow!
                    </div>
                    <div className="text-[16px] text-center">
                    FundsindiaPartner lets you connect with your clients across geographical regions, offering them products across the investment spectrum, giving them the best of both worlds - your planning & advice along with access to cutting-edge technology and services.Direct your browser to www.partner.fundsindia.com and get the online advantage to grow your business exponentially
                    </div>
                </div>
            </div>

            {/* 3rd page */}

            <div className="flex mt-[118px] flex-row items-center justify-center font-poppins">
                <div className="w-[50%]">
                    <div className="text-[20px] font-bold text-[#0071E7]">
                        With Fundsindiapartner<br/> Get Low Cost High Value Solutions
                    </div>
                    <br/>
                    <div className="text-[16px]">
                        <ul className="marker:text-[#0071E7] list-outside list-disc ml-4">
                            <li>
                                A single contact point for all your clients and dedicated services
                            </li>
                            <li>
                                Immediate access to information and source documents
                            </li>
                            <li>
                                All transactions will be done online in a convenient, secure, user-friendly, 24x7-available service platform
                            </li>
                            <li>
                                Increased data accuracy, productivity and efficiency
                            </li>
                            <li>
                                Paperless organization with permanent online databases
                            </li>
                            <li>
                                Call center- Supported by knowledgeable service personnel
                            </li>
                            <li>
                                Portfolio on your mobile-A missed call will get your portfolio on your mobile
                            </li>
                            <li>
                                Chat on the website - Live chat with customer service personnel
                            </li>
                            <li>
                                Query Tracker - ‘Ask us’ and it will be answered and tracked for your reference
                            </li>
                        </ul>
                            
                    </div>
                </div>
                <div className="w-[50%] p-[63px]">
                    <Image src={page3Img}/>
                </div>
            </div>

            {/* 4th page */}
            <div className="flex mt-[170px] flex-row items-center justify-center font-poppins ">
                <div className="w-[50%] p-[63px]">
                    <Image src={page4Img}/>
                </div>
                <div className="w-[50%]">
                    <div className="text-[20px] font-bold text-[#0071E7]">
                        Value added services
                    </div>
                    <br/>
                    <div className="text-[16px]">
                        <ul className="marker:text-[#0071E7] list-outside list-disc ml-4">
                            <li>
                            Customize Your web panels with Your logo / name / service provider. create accounts based on investment strategy. keep track of your Clients/prospects and customize templates for investment proposals
                            </li>
                            <li>
                            Get trigger facility on ALL mutual funds
                            </li>
                            <li>
                            Value cost averaging investment plan (VIP) & value cost averaging transfer plan (VTP) 
                            </li>
                            <li>
                            Prepackaged portfolios on Mutual Funds & Equities
                            </li>
                            <li>
                            Different modes of SIP including Alert SIP, Portfolio SIP, Flexi-SIP, SIP on ETFs
                            </li>
                            <li>
                            Comprehensive, integrated financial planning tool, consolidation family’s investments. auto calculation of capital gains
                            </li>
                        </ul>   
                    </div>
                </div> 
            </div>

            {/* 5th page */}

            <div className="flex mt-[122px] flex-row items-center justify-center font-poppins ">
                <div className="w-[50%]">
                    <div className="text-[20px] font-bold text-[#0071E7]">
                        With Fundsindiapartner<br/> Get Low Cost High Value Solutions
                    </div>
                    <br/>
                    <div className="text-[16px]">
                    With Fundsindia Partner can reach out to NRIs without the cumbersome procedures Iike mailing forms abroad After the initial sign-up. the entire process is online with 24x7 access.
                    </div>
                </div>
                <div className="w-[50%] p-[63px]">
                    <Image src={page5Img}/>
                </div>
            </div>

            {/* 6th page */}

            <div className="flex mt-[128px] flex-row items-center justify-center font-poppins ">
                <div className="w-[50%] p-[63px]">
                    <Image src={page6Img}/>
                </div>
                <div className="w-[50%]">
                    <div className="text-[20px] font-bold text-[#0071E7]">
                    Non…Competitive Services
                    </div>
                    <br/>
                    <div className="text-[16px]">
                    FundsIndiaPartner is here to sUpport you in your business and not compete with you. You have secured access and we only work to facilitate your connection<br/>At FundsIndiaPartner we adhere to the highest standards of client confidentiality. If for any reason the Partner should decide to cancel the account. FundsIndiaPartner will transfer back all registered clients and AUM, as per the agreement.
                    </div>
                </div>
                
            </div>
        </ThemeProvider>
    );
}

export default callback;