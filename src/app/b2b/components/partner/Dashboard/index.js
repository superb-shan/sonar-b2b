'use client'

import { useState } from "react";
import DoughnutChart from "./DoughnutChart";
import { ChevronLeftRounded, ChevronRightRounded } from "@mui/icons-material";
import Image from "next/image";
import fire from '/public/rrklogo/newrrk/rrklogo (1)@2x.png';

function Dashboard() {

    const [currentPage, setCurrentPage] = useState('0');

    const handlePageChange = (e) => {
        const newValue = e.currentTarget.getAttribute('data-value'); 
        setCurrentPage(newValue);
    }
    
    return (
        <div className="p-[20px] text-[14px]">
            <Image src={fire} width={166} height={44} alt="I Aspire" className="mb-[20px] mix-blend-multiply -ml-5"/>
            <div className="flex gap-[20px] mb-[20px] text-[16px]">
                <div className="bg-white w-[calc((100%-20px)*2/3)] h-[300px] rounded-[15px] p-[20px] flex font-bold">
                    <div className="flex flex-col w-[50%] gap-[10px] items-center border-r-[1px] border-r-[rgba(112, 112, 112, 0.1)]">
                        <p>AUM</p>
                        <DoughnutChart 
                            totalName="Total AUM"
                            data = {
                                [
                                    { name: "Debt", value: 20000 },
                                    { name: "Equity", value: 40000 },
                                    { name: "Hybrid", value: 30000 },
                                    { name: "Commodity", value: 5000 },
                                ]
                            }
                        />
                    </div>
                    <div className="flex flex-col w-[50%] gap-[10px] items-center">
                        <p>Inflow</p>
                        <DoughnutChart 
                            totalName="Total Inflow"
                            data = {
                                [
                                    { name: "Debt", value: 20000 },
                                    { name: "Equity", value: 40000 },
                                ]
                            }
                        />
                    </div>
                </div>
                <div className="bg-white w-[calc((100%-40px)/3)] h-[300px] rounded-[15px] p-[20px] flex flex-col font-bold">
                    
                    <div className="flex items-center">
                        <div
                            className={`rounded-full z-[2] h-[20px] w-[20px] flex justify-center items-center border-none outline-none  ${
                                currentPage === '0'
                                    ? 'opacity-50 bg-[#B1B2B8] text-[#6E6E72]'
                                    : 'bg-primary text-white cursor-pointer'
                            }`}
                            onClick={() => {
                                if (currentPage !== '0') {
                                    setCurrentPage((+currentPage - 1).toString());
                                }
                            }}
                        >
                            <ChevronLeftRounded style={{ width: '18px' }} />
                        </div>

                        <div className="w-[90%]">
                            {currentPage === '0' ? 
                                <div className="flex flex-col gap-[10px] items-center ">
                                    <p>SIP Book</p>
                                    <DoughnutChart 
                                        totalName="Total SIP Inflow"
                                        data = {
                                            [
                                                { name: "Equity", value: 80000 },
                                                { name: "Debt", value: 60000 },
                                                { name: "Hybrid", value: 30000 },
                                            ]
                                        }
                                    />
                                </div>
                            :
                            currentPage === '1' ? 
                                <div className="flex flex-col gap-[10px] items-center">
                                    <p>STP Book</p>
                                    <DoughnutChart 
                                        totalName="Total STP Inflow"
                                        data = {
                                            [
                                                { name: "Equity", value: 50000 },
                                                { name: "Debt", value: 40000 },
                                                { name: "Hybrid", value: 30000 },
                                            ]
                                        }
                                    />
                                </div>
                            : 
                                <div className="flex flex-col gap-[10px] items-center">
                                    <p>SWP Book</p>
                                    <DoughnutChart 
                                        totalName="Total SWP Inflow"
                                        data = {
                                            []
                                        }
                                    />
                                </div>
                            }
                        </div>

                        <div
                            className={`rounded-full z-[2] h-[20px] w-[20px] flex justify-center items-center border-none outline-none  ${
                                currentPage === '2'
                                    ? 'opacity-50 bg-[#B1B2B8] text-[#6E6E72]'
                                    : 'bg-primary text-white cursor-pointer'
                            }`}
                            onClick={() => {
                                if (currentPage !== '2') {
                                    setCurrentPage((+currentPage + 1).toString());
                                }
                            }}
                        >
                            <ChevronRightRounded style={{ width: '18px' }} />
                        </div>
                    </div>
                    <div className="flex gap-[5px] px-auto justify-center">
                        <div className={`cursor-pointer w-[8px] h-[8px] rounded-lg ${currentPage === '0' ?'bg-primary': 'border-[1px] border-primary'} p-0 m-0`} data-value={'0'} onClick={handlePageChange}></div>
                        <div className={`cursor-pointer w-[8px] h-[8px] rounded-lg ${currentPage === '1' ?'bg-primary': 'border-[1px] border-primary'} p-0 m-0`} data-value={'1'} onClick={handlePageChange}></div>
                        <div className={`cursor-pointer w-[8px] h-[8px] rounded-lg ${currentPage === '2' ?'bg-primary': 'border-[1px] border-primary'} p-0 m-0`} data-value={'2'} onClick={handlePageChange}></div>
                    </div>
                </div>
            </div>
            <div className="flex gap-[20px]">
                <div className="bg-white w-[calc((100%-10px)*2/3)] h-[101px] leading-none rounded-[15px] p-[25px] flex items-start font-medium">
                    <div className="flex flex-col w-[calc((100%-10px)/3)] gap-[10px] border-r-[1px] border-gray-200">
                        <p>New Clients</p>
                        <p className="text-[26px] font-bold">8</p>
                    </div>
                    <div className="flex flex-col w-[calc((100%-10px)/3)] gap-[10px] pl-[30px] border-r-[1px] border-gray-200">
                        <p>Account Activated</p>
                        <p className="text-[26px] font-bold">4</p>
                    </div>
                    <div className="flex flex-col w-[calc((100%-10px)/3)] gap-[10px] pl-[30px] ">
                        <p>Pending Account</p>
                        <p className="text-[26px] font-bold">4</p>
                    </div>
                </div>
                <div className="bg-white w-[calc((100%-10px)*1/3)] h-[101px] leading-none rounded-[15px] p-[25px] flex items-start font-medium">
                    {currentPage === '0' ?  
                    <>
                        <div className="flex flex-col w-[calc((100%-10px)/2)] gap-[10px] border-r-[1px] border-gray-200">
                            <p className="w-[150px]">SIP's setup this month</p>
                            <p className="text-[26px] font-bold">1</p>
                        </div>
                        <div className="flex flex-col w-[calc((100%-10px)/2)] gap-[10px] pl-[30px] ">
                            <p>SIP expiring in Next 30 days</p>
                            <p className="text-[26px] font-bold">0</p>
                        </div>
                    </>
                    : currentPage === '1' ? 
                    <>
                        <div className="flex flex-col w-[calc((100%-10px)/2)] gap-[10px] border-r-[1px] border-gray-200">
                            <p className="w-[150px]">STP's setup this month</p>
                            <p className="text-[26px] font-bold">0</p>
                        </div>
                        <div className="flex flex-col w-[calc((100%-10px)/2)] gap-[10px] pl-[30px] ">
                            <p>STP expiring in Next 30 days</p>
                            <p className="text-[26px] font-bold">0</p>
                        </div>
                    </> 
                    : 
                    <>
                        <div className="flex flex-col w-[calc((100%-10px)/2)] gap-[10px] border-r-[1px] border-gray-200">
                            <p className="w-[150px]">SWP's setup this month</p>
                            <p className="text-[26px] font-bold">2</p>
                        </div>
                        <div className="flex flex-col w-[calc((100%-10px)/2)] gap-[10px] pl-[30px] ">
                            <p>SWP expiring in Next 30 days</p>
                            <p className="text-[26px] font-bold">1</p>
                        </div>
                    </>
                    }
                </div>
            </div>
            <p className="mt-[150px] font-medium"><strong>Disclaimer:</strong> The AUM inflow data is as of the previous day. The redemption data does not account for STP or Switch transaction. <br/> Transfer-in Partner's data may vary.</p>
        </div>
    );
}

export default Dashboard;