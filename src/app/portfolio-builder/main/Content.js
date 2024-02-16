"use client"

import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Link from 'next/link';
import Image from 'next/image';
import { ThemeProvider } from '@mui/material';
import theme from '../theme';
import ClientRequirement from '../components/ClientRequirement';
import ThreeAndHalf from '../components/ThreeAndHalf';
import WealthEquation from '../components/WealthEquation';
import Discussion from '../components/Discussion';
import SuggestedPortfolio from '../components/SuggestedPortfolio';
import { CheckCircleRounded } from '@mui/icons-material';


export default function Content() {

    const [active, setActive] = useState('Client Requirement');
    const [notificationMessage, setNotificationMessage] = useState('');
    const [isLoadClientClicked, setIsLoadClientClicked] = useState(false);
    const [isEditTriggered, setIsEditTriggered] = useState(false);
    
    function handleRoute(route) {
        setActive(route)
    }

    const handleNotificationMessage = (message) => {
        setNotificationMessage(message);
        setTimeout(()=> setNotificationMessage(''), 4000);
    }

    const navigationArray = ['Client Requirement', 'Three & Half Box Money', 'Wealth Equation', 'Discussion', 'Suggested Portfolio'];

    return (
        <ThemeProvider theme={theme} >
            <div className=' overflow-auto relative text-[14px]'>
                <div>
                    <Box sx={{ flexGrow: 1, zIndex: 1 }}>
                        <AppBar position={(isEditTriggered || isLoadClientClicked)?"static":"absolute"} sx={{height: '60px', backgroundColor: "white", px: '40px', boxShadow: '0px 3px 6px #0000001A', top:0, left:0, '& .MuiToolbar-regular': {padding: '0px'}}}>
                            <Toolbar sx={{display: "flex", justifyContent: "start", alignItems: 'center'}}>
                            <div className='flex gap-x-[10px] items-center'>
                                <Link href={'/portfolio-builder'}><Image src='/logo.svg' width={125} height={36} /></Link>
                            </div>
                            
                            {
                                active === 'Client Requirement' &&
                                <button className='ml-auto w-[116px] h-[34px] bg-white border-[1px] border-primary rounded-[25px] text-primary font-semibold' onClick={() => setIsLoadClientClicked(true)}>
                                    Load Client
                                </button>
                            }
                            </Toolbar>
                        </AppBar>
                    </Box>

                    <div className={`flex flex-col bg-[#F5F7FE] h-[calc(100vh-60px)] relative ${(!(isEditTriggered || isLoadClientClicked)) && ' mt-[60px]'} `}> {/* */}
                        
                        {
                            (notificationMessage) &&
                            <div className=' animate-bounce absolute z-[1] top-[20px] right-[45px] bg-[#E2FFEE] rounded-[6px] border-[2px] border-[#04A345] p-[10px] flex gap-x-[10px] items-center'>
                                <CheckCircleRounded className='text-[#04A345]' />
                                <p className=' text-[#04A345] text-[14px] font-bold'>{notificationMessage}  </p>
                            </div>
                        }
                        {/* navigation segment */}
                        <div className='flex justify-between items-center h-[80px] shrink-0 text-[14px] font-semibold px-[50px]'>
                            <button onClick={() => handleRoute('Client Requirement') } className={` h-[40px] px-[20px] py-[10px] flex justify-center items-center rounded-[25px]  ${active === navigationArray[0] ? ' bg-primary text-white ' : ' bg-[#f8f9fa] border-[1px] border-[#e4e5e5] ' } `} >Client Requirement</button>
                            <div className=' w-[60px] h-0 border-[#e4e5e5] border-[1px] ' />
                            <button onClick={() => handleRoute('Three & Half Box Money') } className={` h-[40px] px-[20px] py-[10px] flex justify-center items-center rounded-[25px]  ${active === navigationArray[1] ? ' bg-primary text-white ' : ' bg-[#f8f9fa] border-[1px] border-[#e4e5e5] ' } `} >Three & Half Box Money</button>
                            <div className=' w-[60px] h-0 border-[#e4e5e5] border-[1px] ' />
                            <button onClick={() => handleRoute('Wealth Equation') } className={` h-[40px] px-[20px] py-[10px] flex justify-center items-center rounded-[25px]  ${active === navigationArray[2] ? ' bg-primary text-white ' : ' bg-[#f8f9fa] border-[1px] border-[#e4e5e5] ' } `} >Wealth Equation</button>
                            <div className=' w-[60px] h-0 border-[#e4e5e5] border-[1px] ' />
                            <button onClick={() => handleRoute('Discussion') } className={` h-[40px] px-[20px] py-[10px] flex justify-center items-center rounded-[25px]  ${active === navigationArray[3] ? ' bg-primary text-white ' : ' bg-[#f8f9fa] border-[1px] border-[#e4e5e5] ' } `} >Discussion</button>
                            <div className=' w-[60px] h-0 border-[#e4e5e5] border-[1px] ' />
                            <button onClick={() => handleRoute('Suggested Portfolio') } className={` h-[40px] px-[20px] py-[10px] flex justify-center items-center rounded-[25px]  ${active === navigationArray[4] ? ' bg-primary text-white ' : ' bg-[#f8f9fa] border-[1px] border-[#e4e5e5] ' } `} >Suggested Portfolio</button>
                        </div>

                        {/* page segment */}
                        <div className={` h-full w-full duration-[0.6s] transition-all overflow-auto z-0`}>
                            {
                                ((active === navigationArray[0]) && <ClientRequirement isLoadClientClicked={isLoadClientClicked} setIsLoadClientClicked={setIsLoadClientClicked} handleNotificationMessage={handleNotificationMessage} />)||
                                ((active === navigationArray[1]) && <ThreeAndHalf />)||
                                ((active === navigationArray[2]) && <WealthEquation />)||
                                ((active === navigationArray[3]) && <Discussion />)||
                                ((active === navigationArray[4]) && <SuggestedPortfolio isEditTriggered={isEditTriggered} setIsEditTriggered={setIsEditTriggered} handleNotificationMessage={handleNotificationMessage} />)
                            }

                            {/* Navigation Buttons */}
                            <div className='flex justify-between px-[50px] my-[20px]'>
                                <button className='w-[100px] h-[50px] rounded-[25px] text-[18px] text-primary font-semibold bg-white border-[1px] border-primary flex justify-center items-center' onClick={() => navigationArray.indexOf(active) === 0 ? null : setActive(navigationArray[navigationArray.indexOf(active)-1])}>Back</button>
                                <div className='flex gap-[30px]'>
                                    <button className='text-[18px] text-primary font-semibold flex justify-center items-center' onClick={() => handleNotificationMessage('Progress Saved')}>Save</button>
                                    <button className='px-[30px] py-[16px] leading-[0] rounded-[25px] text-[18px] text-white font-semibold bg-primary border-[1px] border-primary flex justify-center items-center' onClick={() => navigationArray.indexOf(active) === (navigationArray.length - 1) ? null : setActive(navigationArray[navigationArray.indexOf(active)+1])}>{ navigationArray.indexOf(active) === (navigationArray.length - 1) ? "Send Mail" : "Next"}</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>   
            </div>
        </ThemeProvider>
    );
}