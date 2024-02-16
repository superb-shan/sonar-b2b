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
import { useRouter, useSearchParams } from 'next/navigation';

import IDashboard from '/public/partner/Dashboard.js'
import IAbout from '/public/partner/About.js'
import IBrokerage from '/public/partner/Brokerage.js'
import IHome from '/public/partner/Home.js'
import IManual from '/public/partner/Manual.js'
import IPassword from '/public/partner/Password.js'
import IPortfolio from '/public/partner/Portfolio';
import IRegistration from '/public/partner/Registration';
import IReports from '/public/partner/Reports';
import ITripartite from '/public/partner/Tripartite';
import IPhase3 from '/public/partner/Phase3';
// import rrkLogo from '/public/rrklogo/rrklogo@2x.png';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import Collapsible from 'react-collapsible';


import ITransactioReports from '/public/partner/TransactionReports';
import IUserManagementReportsReports from '/public/partner/UserManagementReports.js';
import IBusinessReports from 'public/partner/BuisnessReports.js';




// import back from '/public/partner/back.svg'

//region - Component imports
import Dashboard from '../components/partner/Dashboard';
import Registration from '../components/partner/Registration';
import Report from '../components/partner/Report/BusinessReports/AUMClientReport';
import About from '../components/partner/About';
import Manual from '../components/partner/Manual';
import Tripartite from '../components/partner/Tripartite';
import PartnerHome from '../components/partner/PartnerHome';
import Brokerage from '../components/partner/Brokerage';
import Portfolio from '../components/partner/Portfolio';
import Password from '../components/partner/Password';
// Components for phase 3 Reports
import BusinessReports from '../components/partner/Report/BusinessReports';
import AUMClientReport from '../components/partner/Report/BusinessReports/AUMClientReport';
import PartnerInvoiceReportBrokerage from '../components/partner/Report/BusinessReports/PartnerInvoiceReportBrokerage';
import TransactioReports from '../components/partner/Report/TransactionReports';
import AuthorizationPendingReport from '../components/partner/Report/TransactionReports/AuthorizationPendingReport';
import InvestorSchemeDetails from '../components/partner/Report/TransactionReports/InvestorSchemeDetails';
import SIPReport from '../components/partner/Report/TransactionReports/SIPReport';
import STPReport from '../components/partner/Report/TransactionReports/STPReport';
import SWPReport from '../components/partner/Report/TransactionReports/SWPReport';
import TransactionReport from '../components/partner/Report/TransactionReports/TransactionReport';
import UserManagementReports from '../components/partner/Report/UserManagementReports';
import BirthdayDetails from '../components/partner/Report/UserManagementReports/BirthdayDetails';
import ClientRTAEmailAndMobile from '../components/partner/Report/UserManagementReports/ClientRTAEmailAndMobile';
import InvestorDetails from '../components/partner/Report/UserManagementReports/InvestorDetails';
import LastLoginReport from '../components/partner/Report/UserManagementReports/LastLoginReport';
import MandatesReport from '../components/partner/Report/UserManagementReports/MandatesReport';
import ValuationReport from '../components/partner/Report/UserManagementReports/ValuationReport';
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";

import { ArchiveTwoTone, ClearRounded, LinkRounded } from '@mui/icons-material';
import { useDataContext } from '../context/DataContext';
import CustomTable from '../components/partner/PartnerHome/CustomTable';
import { get5Data } from '../components/partner/PartnerHome/dummyData';
//endregion

import avathar from 'public/partner/avathar/Ellipse 2700.png'
import logout from 'public/partner/logout.svg'
import qrcode from 'public/partner/qrcode/qrcode@2x.png'
import { useEffect } from 'react';

export default function Content() {

    const router = useRouter();
    const searchParams = useSearchParams();

    const tab = searchParams.get('tab');

    const [shortUrl,setShortUrl] = useState('https://www.partner.fundsindia.com'); //Add tinyurl logic and fetch
    const [linkCopied,setLinkCopied] = useState(false);
    const [passwordChangedPopup, setPasswordChangedPopup] = useState(false);

    const [active, setActive] = useState(tab || 'dashboard');
    const [navOpen, setNavOpen] = useState(true);
    const [viewProfile, setViewProfile] = useState(false);

    const [isReportOpen, setIsReportOpen] = useState(false);
    const [isBReportOpen, setIsBReportOpen] = useState(false);
    const [istReportOpen, setIstReportOpen] = useState(false);
    const [isUReportOpen, setIsUReportOpen] = useState(false);

    function handleReportOpen( setFunc ) {
        setIsBReportOpen(false);
        setIstReportOpen(false);
        setIsUReportOpen(false);
        setFunc(true);
    }

    useEffect(() => {
        if (!(active === 'BussinessReports' || active === 'AUMClientReports' || active === 'PartnerInvoice' || active === 'TransactionReports' || active === 'TransactionReport' || active === 'InvestorSchemeDetails' || active === 'SIPReport' || active === 'STPReport' || active === 'SWPReport' || active === 'AuthorizationPendingReport' || active === 'UserManagementReports' || active === 'InvestorDetails' || active === 'ValuationReport' || active === 'ClientRTAEmailAndMobile' || active === 'MandatesReport' || active === 'LastLoginReport' || active === 'BirthdayDetails') && isReportOpen) {
            setIsReportOpen(false);
        }
    }, [active])

    // const portfolioData = [
    //     [ 'ICICI Prudential Nifty Next 50 Index Fund - Growth', 5, 3.58, 18.51, 18.51],
    //     [ 'Axis Focused 25 Fund - Regular Plan - IDCW', 5, 0.53, 12.64, 7.22],
    //     [ 'Edelweiss Emerging Markets opportunities Equity Offshore Fund - Regular Plan - Growth', 5, 6.17, -1.54, 2.51],
    // ]

    const {portfolioData, investorList, setInvestorList, deletePopup, setDeletePopup, viewPortfolioScheme, setViewPortfolioScheme, investor, setSip, setAddScheme, setAddSchemeList, savePortfolioData, notificationMessage, setNotificationMessage} = useDataContext();

    function handleRoute(tab) {
        setActive(tab);
        if (tab == 'dashboard') router.push('/b2b/partner', undefined, { shallow: true });
        else router.push(`/b2b/partner?tab=${tab}`, undefined, { shallow: true });
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(shortUrl);
        setLinkCopied(true);
        setTimeout(()=>setLinkCopied(false), 2000);
    }

    function handleDelete(data) {
        if (data.length >= 6) {
            let index = portfolioData.findIndex(e=>e[0]==viewPortfolioScheme);
            portfolioData[index][2] = (portfolioData[index][2]).filter(e => e[0] != data[0])
            savePortfolioData(portfolioData);
            setDeletePopup(false)
            setNotificationMessage('Scheme Deleted Successfully')
            setTimeout(()=>{
                setNotificationMessage(false);
            }, 2500)
        } 
        else if (data.length == 3) {
            savePortfolioData(portfolioData.filter(e => e[0] != data[0]))
            setDeletePopup(false)
            setNotificationMessage('Portfolio Deleted Successfully')
            setTimeout(()=>{
                setNotificationMessage(false);
            }, 2500)
        }
    }
    if (!portfolioData) return (<></>)

    console.log(active);
    return (
        <ThemeProvider theme={theme} >
            <div className=' overflow-auto relative'>
                <div>
                    <Box sx={{ flexGrow: 1, zIndex: 1 }}>
                    <AppBar position={(investorList||deletePopup||passwordChangedPopup||viewPortfolioScheme)?"static":"absolute"} sx={{height: '60px', backgroundColor: "white", px: '40px', boxShadow: '0px 3px 6px #0000001A', top:0, left:0, '& .MuiToolbar-regular': {padding: '0px'}}}>
                        <Toolbar sx={{display: "flex", justifyContent: "space-between"}}>
                        <div className='flex gap-x-[10px] items-center'>
                            <Link href={'/b2b/'}><Image src='/logo.svg' width={125} height={36} /></Link>   
                            {/* <Image src={rrkLogo} className='w-[152px] h-[40px] border-l-[1px] border-[#70707030]' alt='rrk logo' /> */}
                        </div>

                        <div className='flex gap-x-[30px] items-center relative'>
                            
                            {/* Handle link copied */}
                            <div>
                                <div className="flex w-[299px] h-[36px] border-[1px] border-[#E4E5E5] font-semibold rounded-[6px] items-center">
                                    <div className="w-[198px] text-[#6E6E72] text-[12px] pl-[20px] pr-[10px] overflow-clip text-ellipsis">{shortUrl}</div>
                                    <div className='w-[1px] h-3/4 bg-[#E4E5E5]'></div>
                                    <button type="button" className="relative w-[105px] text-[#0071E7] text-[12px] font-Semibold" onClick={handleCopy}><LinkRounded className='-rotate-45 w-[18px] h-[15px] mb-[2px]' />Copy Link
                                    {linkCopied && 
                                    <div className='absolute flex flex-col items-center'>
                                        <div className='w-0 h-0 ml-[30px] top-[4px] right-[20px] border-l-transparent border-b-[9px] border-[#2D7251] border-x-[6px] border-r-transparent'/>
                                        <p className='h-[28px] w-[105px] text-white text-[12px] font-semibold bg-[#2D7251] rounded-[6px] flex items-center justify-center' >Link Copied</p>
                                    </div>
                                    }
                                    </button>

                                </div>
                                
                            </div>
                            <button className='relative w-[38px] h-[38px] text-[#0084FF] rounded-full bg-[#D8ECFF] font-bold text-[18px] flex items-center justify-center' onClick={()=>setViewProfile(true)} onBlur={()=>setViewProfile(false)} >
                                T
                                {
                                    viewProfile && 
                                    <div className='pointer-events-auto cursor-default font-medium' >
                                        <div className='absolute right-[10px] bottom-[-14px] shadow-[0px_0px_10px_#00000026] bg-gradient-radial from-[#00000026] to-white rounded-t-[10px]'>
                                            <div className=' border-[#ffffff] opacity-100 border-x-[10px] border-b-[12px] border-x-transparent h-0 w-0' />
                                        </div>
                                        <div className='absolute bottom-[-384px] right-[-10px] bg-white w-[267px] h-[375px] rounded-[20px] shadow-[0px_3px_8px_#00000026] p-[20px] text-black text-[15px] flex flex-col gap-y-[15px] items-center '>
                                            <div className='flex gap-x-[10px] px-[10px] items-center '>
                                                <Image src={avathar} className='w-[30px] h-[30px]' />
                                                <div className='overflow-clip text-ellipsis font-semibold w-[168px] h-[20px] text-left whitespace-nowrap' title='Kishore Kumar Palaniswamy'>Kishore Kumar Palaniswamy</div>
                                            </div>

                                            <Image src={qrcode} className='h-[150px] w-[150px]' />

                                            <div className='border-b-[1px] h-0 w-full' />

                                            <div className='flex flex-col gap-y-[18px] w-full'>
                                                <div className='flex gap-x-[20px] items-center relative '>
                                                    <span className='cursor-pointer' onMouseDown={()=>{setViewProfile(false); handleRoute('about'); }}><IAbout active={'about'} /></span>
                                                    <h6 className={`cursor-pointer `} onMouseDown={()=>{setViewProfile(false); handleRoute('about'); }} >About Partner</h6>
                                                </div>
                                                <div className='flex gap-x-[24px] items-center relative '>
                                                    <span className='cursor-pointer' onMouseDown={()=>{ setViewProfile(false); handleRoute('password');}}><IPassword active={'password'} /></span>
                                                    <h6 className={`cursor-pointer`} onMouseDown={()=>{ setViewProfile(false); handleRoute('password');}} >Change Password</h6>
                                                </div>
                                                <div className='flex gap-x-[24px] items-center relative '>
                                                    <span className='cursor-pointer' onMouseDown={()=>{ setViewProfile(false); router.push('/')}}><Image src={logout} /></span>
                                                    <h6 className={`cursor-pointer`} onMouseDown={()=>{ setViewProfile(false); router.push('/')}} >Logout</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </button>
                        </div>
                        </Toolbar>
                    </AppBar>
                    </Box>

                    <div className={`flex h-[calc(100vh-60px)] relative ${(!(investorList||deletePopup||viewPortfolioScheme||passwordChangedPopup)) && ' mt-[60px]'} `}> {/* */}
                        
                        {
                            (notificationMessage == 'Portfolio Deleted Successfully' || notificationMessage == 'Successfully Downloaded' ) &&
                            <div className='absolute z-[1] top-[20px] right-[45px] bg-[#E2FFEE] rounded-[6px] border-[2px] border-[#04A345] p-[10px] flex gap-x-[10px] items-center'>
                                <CheckCircleRoundedIcon className='text-[#04A345]' />
                                <p className=' text-[#04A345] text-[14px] font-bold'>{notificationMessage}  </p>
                            </div>
                        }
                        {/* navigation segment */}
                        <div className={` h-full py-[35px] px-[20px] flex flex-col gap-y-[30px] overflow-y-scroll overflow-x-hide text-[14px] font-medium text-[#6E6E72] ${(navOpen)? 'w-[250px] ': 'w-[61px]'} `}>

                            {/* <Image src={back} className='absolute left-[240px] z-[2] cursor-pointer ' onClick={()=>{setNavOpen(!navOpen)}} /> */}

                            <div className='flex gap-x-[14px] items-center relative'>
                                {(active==='dashboard') && <div className='absolute w-[3px] h-[30px] rounded-r-[2px] bg-primary ml-[-19px]' />}
                                <span className='cursor-pointer' onClick={()=>{handleRoute('dashboard')}}><IDashboard active={active} /></span>
                                <h6 className={`cursor-pointer ${active==='dashboard' && 'font-semibold text-primary'}`} onClick={()=>{handleRoute('dashboard')}} >Dashboard</h6>
                            </div>

                            <div className='flex gap-x-[14px] items-center relative '>
                                {active === 'home' && <div className='absolute w-[4px] h-[30px] rounded-r-[2px] bg-primary ml-[-19px]' />}
                                <span className='cursor-pointer' onClick={()=>{setSip(false); handleRoute('home');}}><IHome active={active} /></span>
                                <h6 className={`cursor-pointer ${active==='home' && 'font-semibold text-primary'}`} onClick={()=>{setSip(false); handleRoute('home')}} >Partner Home</h6>
                            </div>

                            <div className='flex gap-x-[14px] items-center relative '>
                                {active === 'registration' && <div className='absolute w-[4px] h-[30px] rounded-r-[2px] bg-primary ml-[-19px]' />}
                                <span className='cursor-pointer' onClick={()=>{handleRoute('registration')}}><IRegistration active={active} /></span>
                                <h6 className={`cursor-pointer ${active==='registration' && 'font-semibold text-primary'}`} onClick={()=>{handleRoute('registration')}} >New Client</h6>
                            </div>

                            <div className='flex gap-x-[14px] items-center relative '>
                                {active === 'tripartite' && <div className='absolute w-[4px] h-[30px] rounded-r-[2px] bg-primary ml-[-19px]' />}
                                <span className='cursor-pointer' onClick={()=>{handleRoute('tripartite')}}><ITripartite active={active} /></span>
                                <h6 className={`cursor-pointer ${active==='tripartite' && 'font-semibold text-primary'}`} onClick={()=>{handleRoute('tripartite')}} >Tripartite Agreement</h6>
                            </div>

                            <div className='flex gap-x-[14px] items-center relative '>
                                {active === 'portfolio' && <div className='absolute w-[4px] h-[30px] rounded-r-[2px] bg-primary ml-[-19px]' />}
                                <span className='cursor-pointer' onClick={()=>{ setAddSchemeList([]); setAddScheme(false); handleRoute('portfolio')}}><IPortfolio active={active} /></span>
                                <h6 className={`cursor-pointer ${active==='portfolio' && 'font-semibold text-primary'}`} onClick={()=>{ setAddSchemeList([]); setAddScheme(false); handleRoute('portfolio')}} >Partner Portfolio</h6>
                            </div>


                            {/* report */}
                            {/* <div className='flex gap-x-[14px] items-center relative '>
                                {active === 'reports' && <div className='absolute w-[4px] h-[30px] rounded-r-[2px] bg-primary ml-[-19px]' />}
                                <span className='cursor-pointer' onClick={()=>{handleRoute('reports')}}><IReports active={active} /></span>
                                <h6 className={`cursor-pointer ${active==='reports' && 'font-semibold text-primary'}`} onClick={()=>{handleRoute('reports')}} >Reports</h6>
                            </div> */}
                            <div className='flex gap-x-[14px] relative '>
                                {/* Give all the active states */}
                                {(active === 'BussinessReports' || active === 'AUMClientReports' || active === 'PartnerInvoice' || active === 'TransactionReports' || active === 'TransactionReport' || active === 'InvestorSchemeDetails' || active === 'SIPReport' || active === 'STPReport' || active === 'SWPReport' || active === 'AuthorizationPendingReport' || active === 'UserManagementReports' || active === 'InvestorDetails' || active === 'ValuationReport' || active === 'ClientRTAEmailAndMobile' || active === 'MandatesReport' || active === 'LastLoginReport' || active === 'BirthdayDetails') && <div className='absolute w-[4px] h-[30px] rounded-r-[2px] bg-primary ml-[-19px]' />}
                                    <Collapsible trigger={[<IReports isOpened={isReportOpen} />, <span className='font-medium'>Reports</span>, <HiOutlineChevronDown key={'downIcon'} style={{ flexShrink: 0, color: '#6E6E72', width: '18px', height: '18px' }} />]}
                                        triggerWhenOpen={[<IReports isOpened={isReportOpen} />, <span className='font-semibold text-primary'>Reports</span>, <HiOutlineChevronUp key={'upIcon'} style={{ flexShrink: 0, color: '#005CFF', width: '18px', height: '18px' }} />] }
                                        triggerStyle={{cursor: 'pointer',display: 'flex', gap:'14px', margin: '0' }}
                                        open={isReportOpen}
                                        onOpening={() => {setIsReportOpen(true);setActive('BussinessReports')}}
                                        onClosing={() => setIsReportOpen(false)}
                                    >
                                        <div className='flex flex-col gap-y-[26px] pl-[16px] pt-[24px] text-[12px]'>
                                            <button className='flex gap-[8px]' onClick={()=>setActive('BussinessReports')}>
                                            <IBusinessReports active={active} className='h-[3px]'/><span className={`font-medium ${active === 'BussinessReports' || active === 'AUMClientReports' || active === 'PartnerInvoice'?"text-primary":""}`}>Business reports</span>
                                            </button>

                                            <button className='flex gap-[8px]' onClick={()=>setActive('TransactionReports')}>
                                            <ITransactioReports active={active} isOpened={istReportOpen} className='h-[3px]'/><span className={`font-medium ${active === 'TransactionReports' || active === 'TransactionReport' || active === 'InvestorSchemeDetails' || active === 'SIPReport' || active === 'STPReport' || active === 'SWPReport' || active === 'AuthorizationPendingReport'?"text-primary":""}`}>Transaction reports</span>
                                            </button>
                                            
                                            <button className='flex gap-[8px]' onClick={()=>setActive('UserManagementReports')}>
                                            <IUserManagementReportsReports active={active} isOpened={isUReportOpen} className='h-[3px]'/><span className={`font-medium ${active === 'UserManagementReports' || active === 'InvestorDetails' || active === 'ValuationReport' || active === 'ClientRTAEmailAndMobile' || active === 'MandatesReport' || active === 'LastLoginReport' || active === 'BirthdayDetails'?"text-primary":""}`}>User management reports</span>
                                            </button>
                                        </div>
                                    </Collapsible>
                                    </div>
                            <div className='flex gap-x-[14px] items-center relative '>
                                {active === 'brokerage' && <div className='absolute w-[4px] h-[30px] rounded-r-[2px] bg-primary ml-[-19px]' />}
                                <span className='cursor-pointer' onClick={()=>{handleRoute('brokerage')}}><IBrokerage active={active} /></span>
                                <h6 className={`cursor-pointer ${active==='brokerage' && 'font-semibold text-primary'}`} onClick={()=>{handleRoute('brokerage')}} >Brokerage Details</h6>
                            </div>

                            <div className='flex gap-x-[14px] items-center relative '>
                                {active === 'manual' && <div className='absolute w-[4px] h-[30px] rounded-r-[2px] bg-primary ml-[-19px]' />}
                                <span className='cursor-pointer' onClick={()=>{handleRoute('manual')}}><IManual active={active} /></span>
                                <h6 className={`cursor-pointer ${active==='manual' && 'font-semibold text-primary'}`} onClick={()=>{handleRoute('manual')}} >Partner Manual</h6>
                            </div>

                        </div>

                        {/* page segment */}
                        <div className='bg-[#F5F7FE] h-full w-[calc(100vw-250px)] overflow-auto z-0'>

                            {
                                (active==='about' && <About /> )||
                                (active==='brokerage' && <Brokerage /> )||
                                (active==='dashboard' && <Dashboard /> )||
                                (active==='home' && <PartnerHome setActive={setActive}/> )||
                                (active==='manual' && <Manual /> )||
                                (active==='password' && <Password setPasswordChangedPopup={setPasswordChangedPopup} /> )||
                                (active==='portfolio' && <Portfolio /> )||
                                (active==='registration' && <Registration /> )||
                                (active==='reports' && <Report /> )||
                                (active==='tripartite' && <Tripartite /> )||
                                (active==='BussinessReports' && <BusinessReports setActive={setActive}/>)||
                                (active==='AUMClientReports' &&<AUMClientReport setActive={setActive}/>)||
                                (active==='PartnerInvoice' && <PartnerInvoiceReportBrokerage setActive={setActive}/>)||
                                (active==='TransactionReports' && <TransactioReports setActive={setActive}/>)||
                                (active==='TransactionReport' && <TransactionReport setActive={setActive}/>) ||
                                (active==='InvestorSchemeDetails' && <InvestorSchemeDetails setActive={setActive}/>)||
                                (active==='SIPReport' && <SIPReport setActive={setActive}/>)||
                                (active==='STPReport' && <STPReport setActive={setActive}/>)||
                                (active==='SWPReport' && <SWPReport setActive={setActive}/>)||
                                (active==='AuthorizationPendingReport' &&<AuthorizationPendingReport setActive={setActive}/>)||
                                (active==='UserManagementReports' &&<UserManagementReports setActive={setActive}/>)||
                                (active==='InvestorDetails' && <InvestorDetails setActive={setActive}/>)||
                                (active==='ValuationReport' && <ValuationReport setActive={setActive}/>)||
                                (active==='ClientRTAEmailAndMobile' && <ClientRTAEmailAndMobile setActive={setActive}/>)||
                                (active==='MandatesReport' && <MandatesReport setActive={setActive}/>)||
                                (active==='LastLoginReport' && <LastLoginReport setActive={setActive}/>)||
                                (active==='BirthdayDetails' && <BirthdayDetails setActive={setActive}/>)
                            }

                        </div>

                    </div>
                </div>   
            </div> 
            {(passwordChangedPopup) &&
                <div className='absolute w-screen h-screen z-20 top-0 bg-[rgba(10,22,8,0.3)] flex items-center justify-center' >
                    <div className='relative w-[736px] h-[393px] rounded-[20px] bg-white py-[70px] px-[80px] text-center flex flex-col gap-y-[50px]  items-center '>
                        <Link href={"/b2b/login"}>
                            <ClearRounded className='absolute top-[15px] right-[15px] cursor-pointer text-primary' onClick={()=>{setPasswordChangedPopup(false)}} />
                        </Link>
                        <div className='flex justify-center items-center h-full flex-col'>
                            <Image src="/home/Group 405761/Group 405761@2x.png" width={113} height={133} alt='Success' />
                            <Link href={"/b2b/login"}>
                                <p className='text-[20px] text-[#00A345] font-semibold mt-[6px]'>Your Password Updated Successfully. Please <span className='text-primary'>Re-Login</span></p>
                            </Link>
                        </div>
                    </div>
                </div>
            }
            {
                (investorList || viewPortfolioScheme) &&
                <div className='absolute w-screen h-screen top-0 bg-[rgba(10,22,8,0.3)] flex items-end justify-center' >

                    {
                        (notificationMessage == 'Scheme Deleted Successfully') &&
                        <div className='absolute top-[80px] right-[45px] bg-[#E2FFEE] rounded-[6px] border-[2px] border-[#04A345] p-[10px] flex gap-x-[10px] items-center'>
                            <CheckCircleRoundedIcon className='text-[#04A345]' />
                            <p className=' text-[#04A345] text-[14px] font-bold'>{notificationMessage}</p>
                        </div>
                    }

                    <div className='relative w-full rounded-t-[25px] bg-white p-[40px] flex flex-col gap-y-[50px]  items-center '>
                        <ClearRounded className='absolute top-[15px] right-[15px] cursor-pointer text-primary' onClick={()=>{setInvestorList(false); setViewPortfolioScheme(false)}} />
                        {
                            (
                                (investorList) &&
                                <div className='flex flex-col w-full'>
                                    <h2 className='text-[20px] font-semibold '>Investor's of {investorList}</h2>
                                    <CustomTable headers={['S.No','Investor Name','Date of Birth','PAN Number','Complete Application','Received Application','KYC','Status']} data={get5Data()} />
                                </div>
                            )||
                            (
                                (viewPortfolioScheme) && 
                                <div className='flex flex-col w-full'>
                                    <h2 className='text-[20px] font-semibold '>Portfolio - {viewPortfolioScheme}</h2>
                                    <CustomTable headers={['S.No','Scheme Name','FundsIndia Rating','1Yr Returns(Rs)','3Yr Returns(Rs)','5Yr Returns(Rs)']} data={portfolioData[portfolioData.findIndex(e=>e[0]==viewPortfolioScheme)][2]} pagination={false} />
                                </div>
                            )
                        }
                    </div>
                </div>
            }
            {(deletePopup) &&
                <div className='absolute w-screen h-screen top-0 bg-[rgba(10,22,8,0.3)] flex items-end justify-center' >
                    <div className='relative w-full h-[230px] border-t-[1px] border-[#FF7922] bg-[#FDE4D5] p-[45px] text-center flex flex-col gap-y-[22px]  items-center '>
                        <h4 className='font-bold text-[18px]'>Delete Confirmation</h4>
                        <p className='text-[14px]'>Are you sure, you want to delete the {(deletePopup.length == 6) ? deletePopup[1] : deletePopup[0] + ' Portfolio'}?</p>
                        <div className='flex gap-x-[40px] mt-[10px]'>
                            <button onClick={()=>setDeletePopup(false)} className='bg-[#FF7922] h-[50px] w-[150px] text-white font-bold rounded-[25px]'>CANCEL</button>
                            <button onClick={()=>handleDelete(deletePopup)} className='bg-[#FFECE0] h-[50px] w-[150px] text-[#FF7922] font-bold rounded-[25px] border-[#FF7922] border-[1px]'>DELETE</button>
                        </div>
                    </div>
                </div>
            }
        </ThemeProvider>
    );
}