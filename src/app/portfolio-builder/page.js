"use client"
import dynamic from 'next/dynamic'
import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Link from 'next/link';
import Image from 'next/image';
import { ThemeProvider } from '@mui/material';
import theme from './theme';
import statsimag from '../../../public/statsimg.png'
import personalized from '../../../public/personalized.svg'
import Ellipse from '/public/Ellipse.svg'
import presentation from '/public/presentation.svg'
import unbaised from '/public/unbaised.svg'
import MF from '/public/MF.svg'
import stocks from '/public/stocks.svg'
import FD from '/public/FD.svg'
import insurance from '/public/insurance.svg'
import nfs from '/public/nfs.svg'
import loanMF from '/public/loanMF.svg'
import icon1 from '/public/icon1.svg'
import icon2 from '/public/icon2.svg'
import icon3 from '/public/icon3.svg'
import icon4 from '/public/icon4.svg'
import icon5 from '/public/icon5.svg'
import touchicon from '/public/touchicon.png'
import service from '/public/service.svg'
import fi from '/public/fi.svg'
import research from '/public/research.svg'
// import SwiperCustom from './SwiperCustom';
export default function Home() {
    const data = [["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", "James Bond", "Business"], ["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", "James Bond", "Business"], ["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", "James Bond", "Business"]]

    return (
        <ThemeProvider theme={theme} >
            <div className=' overflow-auto relative'>
                <Box sx={{ flexGrow: 1, zIndex: 1 }}>
                    <AppBar position={(true) ? "static" : "absolute"} sx={{ height: '60px', backgroundColor: "white", px: '40px', boxShadow: '0px 3px 6px #0000001A', top: 0, left: 0, '& .MuiToolbar-regular': { padding: '0px' } }}>
                        <Toolbar sx={{ display: "flex", justifyContent: "start", alignItems: 'center' }}>
                            <div className='flex gap-x-[10px] items-center'>
                                <Link href={'/portfolio-builder'}><Image src='/logo.svg' width={125} height={36} /></Link>
                            </div>
                        </Toolbar>
                    </AppBar>
                </Box>


                <div className={`flex flex-col relative  ${(!(true)) && ' mt-[60px]'} `}>
                    <div className={`  bg-gradient-to-b from-[#f6fafe] to-white flex flex-row gap-[70px]  h-[calc(100vh-60px)] w-full duration-[0.6s] transition-all overflow-auto z-0 pr-0 mr-0`}>
                        <div className='ml-[80px]  flex justify-center items-left flex-col w-[40%] pl-[60px] '>
                            <p className='text-[45px] mb-[45px] font-semibold '>Why <span className='text-[#0066CD]'>FundsIndia</span>?</p>

                            <div className='flex flex-row  w-full'>
                                <div className='w-1/4 border-r-gray-100 border-r-[3px] '>
                                    <p className='pb-[14px] text-[#0066CD] text-[30px] font-bold'>14</p>
                                    <p className='text-[#6E6E72] text-[14px] font-semibold'>Year Track Record</p>
                                </div>
                                <div className='w-1/2 text-center border-r-gray-100 border-r-[3px] '>
                                    <p className='pb-[14px] text-[#0066CD] text-[30px] font-bold'>11,000 <span className='text-[14px] text-black '>crs</span> </p>
                                    <p className='text-[#6E6E72] text-[14px] font-semibold'>Assets Under Management</p>
                                </div>
                                <div className='w-1/4 text-center border-r-gray-100 border-r-[3px] '>
                                    <p className='pb-[14px] text-[#0066CD] text-[30px] font-bold'>25 <span className='text-[14px] text-black '>lakh</span></p>
                                    <p className='text-[#6E6E72] text-[14px] font-semibold'>Trusted clients</p>
                                </div>
                            </div>

                        </div>
                        <div className='flex flex-row justify-between items-center  ml-[20px]  '>
                            <Image src={statsimag} width={"200px"} height={"200px"} />

                        </div>

                    </div>
                    <div className={`bg-white flex items-center  h-screen w-full duration-[0.6s] transition-all overflow-auto z-0`}>

                        <div className=' w-1/2 pl-[80px] flex'>
                            <div className="flex flex-col relative shrink-0" >
                                <Image className='w-[507px] h-[507px] relative' src={Ellipse} />
                                <div className='absolute shadow-[0px_10px_20px_#00000014] gap-[20px] rounded-[10px] bg-white top-[36px] text-center left-[58px] w-[200px] h-[200px] flex flex-col justify-center items-center'>
                                    <Image src={personalized} />
                                    <p className='text-black text-[18px] font-semibold'>Personalized</p>
                                </div>
                                <div className='absolute gap-[20px]  rounded-[10px] shadow-[0px_10px_20px_#00000014] bg-white top-[296px] text-center left-[58px] w-[200px] h-[200px] flex flex-col justify-center items-center'>
                                    <Image src={presentation} />
                                    <p className='text-black text-[18px] font-semibold'>Lifelong Money Guidance</p>
                                </div>
                                <div className='absolute gap-[20px] rounded-[10px] bg-white top-[116px] text-center shadow-[0px_10px_20px_#00000014] left-[318px] w-[200px] h-[200px] flex flex-col justify-center items-center'>
                                    <Image src={unbaised} />
                                    <p className='text-black text-[18px] font-semibold'>Unbiased</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-1/2 flex flex-col justify-center items-start  left-[711px] mr-[97px]'>
                            <p className='font-medium text-[30px]'>What You Get by</p>
                            <p className='font-bold text-[30px] text-[#0066CD] pb-[27px]'>Human Experts</p>
                            <p className='font-medium text-[18px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,</p>
                        </div>
                    </div>
                    <div className={`bg-white h-screen w-full duration-[0.6s] transition-all overflow-auto z-0`}>
                        <div className='my-[90px] opacity-80 rounded-[17px] bg-[#F9FBFE] flex flex-col justify-center items-center gap-[60px]'>
                            <p className='text-[30px] font-medium'>One Platform For <span className="text-[#0066CD] font-bold">All Your Financial Needs</span></p>
                            <div className='grid grid-cols-3 gap-[40px]'>
                                <div className='w-[300px] h-[89px] flex gap-[10px] items-center justify-start hover:shadow-[0px_10px_20px_#00000014]'>          <Image src={MF} />
                                    <p className='font-semibold text-[18px] '>Mutual Funds</p>
                                </div>
                                <div className='w-[300px] h-[89px] flex gap-[10px] items-center justify-start hover:shadow-[0px_10px_20px_#00000014]' >
                                    <Image src={stocks} />
                                    <p className='font-semibold text-[18px]'>Stocks</p>
                                </div>

                                <div className='w-[300px] h-[89px] flex gap-[10px] items-center justify-start hover:shadow-[0px_10px_20px_#00000014] '>
                                    <Image src={FD} />
                                    <p className='font-semibold text-[18px]'>Fixed Deposit</p>
                                </div>
                                <div className='w-[300px] h-[89px] flex gap-[10px] items-center justify-start hover:shadow-[0px_10px_20px_#00000014]'>
                                    <Image src={nfs} />
                                    <p className='font-semibold text-[18px]'>NPS</p>
                                </div>
                                <div className='w-[300px] h-[89px] flex gap-[10px] items-center justify-start hover:shadow-[0px_10px_20px_#00000014]'>
                                    <Image src={insurance} />
                                    <p className='font-semibold text-[18px]'>Insurance</p>
                                </div>
                                <div className='w-[300px] h-[89px] flex gap-[10px] items-center justify-start hover:shadow-[0px_10px_20px_#00000014]'>
                                    <Image src={loanMF} />
                                    <p className='font-semibold text-[18px]'>Loan Against MF’s</p>
                                </div>
                            </div>


                        </div>

                    </div>
                    <div className={`flex flex-col justify-center items-center bg-white h-screen w-full duration-[0.6s] transition-all overflow-auto z-0`}>
                        <p className='font-medium text-[30px]'>Our <span className='font-bold text-[#0066CD] '>Testimonials</span></p>
                        {/* <SwiperCustom content={data} /> */}
                    </div>
                    <div className={`bg-white h-screen  duration-[0.6s] transition-all overflow-auto z-0`}>
                        <div className='mx-[85px] rounded-[17px] bg-[#F2F8FE] bg-opacity-50 pt-[40px] px-[35px] pb-[77px] flex flex-col'>

                            <p className='text-[30px] font-medium  text-black opacity-1'>Why do you need an </p>
                            <p className='text-[#0066CD] text-[30px] font-bold'>Expert Guided Investing?</p>
                            <div className="flex w-full pt-[30px]">
                                <div className='flex flex-col w-1/2 gap-[29px]'>
                                    <div className='flex gap-[28px] text-left align-center'>
                                        <Image src={icon1} />
                                        <p className='text-[16px]  font-medium '>Peace of Mind</p>
                                    </div>
                                    <div className='flex gap-[28px] text-left'>
                                        <Image src={icon2} />
                                        <p className='text-[16px] font-medium '>Avoid Big Mistakes - Cost of going wrong is very high and will be known only after several years</p>
                                    </div>
                                    <div className='flex gap-[28px] text-left'>
                                        <Image src={icon3} />
                                        <p className='text-[16px] font-medium '>Superior Performance via Intelligent Investment Portfolios and Improved Behavior - guided by Behavioral Science</p>
                                    </div>
                                    <div className='flex gap-[28px] text-left'>
                                        <Image src={icon4} />
                                        <p className='text-[16px] font-medium '>Evidence Based, Framework driven Investment Approach - Guided by Best In Class Research Insights</p>
                                    </div>
                                    <div className='flex gap-[28px] text-left'>
                                        <Image src={icon5} />
                                        <p className='text-[16px] font-medium '>Simplify your Investing Experience and Save Time & Effort - Outsource it to the experts to monitor and navigate the constantly evolving complex regulations, tax changes, new strategies, changing market environment, news flow etc</p>
                                    </div>


                                </div>
                                <div className='w-1/2 flex justify-center items-start'>
                                    <Image src={touchicon} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`px-[150px]  bg-gradient-to-t from-[#f6fafe] to-white h-screen w-full duration-[0.6s] transition-all overflow-auto z-0`}>
                        <div className='flex flex-col justify-center items-center gap-[40px]'>
                            <p className='font-medium text-[30px]'>Explain the <span className='text-[#0066CD] font-bold'>Offering</span> </p>
                            <div className='flex gap-[40px] w-full'>
                                <div className='w-[300px] h-[322px] text-center flex flex-col gap-[20px] justify-evenly mx-[16px] p-[20px] items-center hover:shadow-[0px_10px_20px_#00000014] '>
                                    <Image src={service} />
                                    <p className='text-[18px] font-semibold'>Service Offerings</p>
                                    <p className='text-[14px] text-[#6E6E72]'>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown</p>
                                </div>
                                <div className='w-[300px] h-[322px] text-center flex flex-col gap-[20px] justify-evenly mx-[16px] p-[20px] items-center hover:shadow-[0px_10px_20px_#00000014] '>
                                    <Image src={fi} />
                                    <p className='text-[18px] font-semibold'>FI Bluebook - Investment Approach</p>
                                    <p className='text-[14px] text-[#6E6E72]'>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown</p>
                                </div>
                                <div className='w-[300px] h-[322px] text-center flex flex-col gap-[20px] justify-evenly mx-[16px] p-[20px] items-center hover:shadow-[0px_10px_20px_#00000014] '>
                                    <Image src={research} />
                                    <p className='text-[18px] font-semibold'>Research Track Record</p>
                                    <p className='text-[14px] text-[#6E6E72]'>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ThemeProvider>

    );
}