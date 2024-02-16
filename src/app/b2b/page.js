"use client"

import { useEffect, useRef, useState } from 'react';
import Home from './components/Home'
import Callback from './components/Callback';
import Contact from './components/Contact';
import WhyFundsIndiaPartner from './components/WhyFundsIndiaPartner'
import Termsandconditions from './components/quicklinks/Termsandconditions';
import PrivacyPolicy from './components/quicklinks/privacypolicy';

import ClearRoundedIcon from '@mui/icons-material/ClearRounded';

import phoneIcon from '/public/home/Group 511824/Group 511824@2x.png'
import partner from '/public/home/Mask Group 29511/Mask Group 29511@2x.png'
import investor from '/public/home/Mask Group 29512/Mask Group 29512@2x.png'

import emailIcon from '/public/Contact/Group 512412.svg'
import phone from '/public/Contact/Group 512413.svg'
import office from '/public/Contact/Group 512414.svg'
import bulletin from '/public/bulletin sm.svg'
import fb from '/public/home/Path 238656.svg'
import x from '/public/home/Path 238654.svg'

import logo from '/public/logo.svg'
import Image from 'next/image';
import Link from 'next/link';
import { ThemeProvider } from '@mui/material';
import theme from './theme';
import { useSearchParams, useRouter } from 'next/navigation';
import { CustomTextField } from './components/InputFields';


import bgimg from '/public/app-background.png'

export default function HomePage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const tab = searchParams.get('tab')
  const modal = searchParams.get('modal');
  const [route, setRoute] = useState(tab || 'Home');
  const [login, setLogin] = useState(false);
  const [subscribed, setSubscribed] = useState(false)

  // Email input
  const [email, setEmail] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  
    if (value === "") {
      setEmailErrorMessage("Email cannot be empty");
    } else if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(value)) {
      setEmailErrorMessage("Invalid email format");
    } else if (value.indexOf('@') === -1 || value.indexOf('@') !== value.lastIndexOf('@')) {
      setEmailErrorMessage("Email must contain exactly one '@'");
    } else if (value.endsWith('.') || value.endsWith('@')) {
      setEmailErrorMessage("Email cannot end with a dot or '@'");
    } else if (value.includes('notprovided') || value.includes('Noemail') || value.includes('xyz')) {
      setEmailErrorMessage("Email cannot contain 'notprovided', 'Noemail', or 'xyz'");
    } else {
      // Check for a dot before the top-level domain
      const parts = value.split('.');
      if (parts.length < 2 || parts[parts.length - 2].indexOf('@') === -1) {
        setEmailErrorMessage("Email must have a '.' before the top-level domain");
      } else {
        setEmailErrorMessage("");
      }
    }
  };
  

  const handleSubmit = () => {
    if (email === "") {
      setEmailErrorMessage("Email cannot be empty");
    }
    else if (emailErrorMessage === '') {
      setSubscribed(true);
    }
  }


  //handle route tab clicks
  function handleRoute(tab) {
    setRoute(tab);
    if (tab == 'Home') router.push('/', undefined, { shallow: true });
    else router.push(`?tab=${tab}`, undefined, { shallow: true });
  }

  const top = useRef(null);

  useEffect(() => {
    if (top.current) {
      top.current.scrollTop = 0;
    }
  }, [route]);


  return (
    <ThemeProvider theme={theme}>
      <main className={`flex h-screen overflow-scroll flex-col items-center px-[80px] font-poppins bg-funds-india bg-cover bg-fixed ${(login)?' overflow-hidden':''}`} ref={top}> 
        <div className={` w-full ${(login)?' opacity-20 pointer-events-none select-none ':''}`} >
          <div className='w-full flex justify-between items-center h-[100px] px-[20px] pt-[6px] z-[1]'>
            <button onClick={()=>{router.push("/b2b/"); setRoute('Home')}}><Image src={logo} className='w-[165px] h-[47px]' /></button>
            <div className='flex gap-x-[30px] font-semibold text-[14px] text-[#6E6E72] items-center'>
              <h6 className={` cursor-pointer ${(route=='Home')?'text-[#0066CD]':''}`} onClick={() => handleRoute('Home')}>Home</h6>
              <h6 className={` cursor-pointer ${(route=='whyFIP')?'text-[#0066CD]':''}`} onClick={() => handleRoute('whyFIP')}>Why FundsIndiaPartner?</h6>
              <h6 className={'cursor-pointer '} ><Link href="/b2b/login?register=true">Register With Us</Link></h6>
              <h6 className={` cursor-pointer ${(route=='contact')?'text-[#0066CD]':''}`} onClick={() => handleRoute('contact')}>Contact us</h6>
              <button onClick={()=>{setLogin(true)}} className='w-[96px] h-[35px] bg-primary text-white rounded-[25px]'>Login</button>
              <button onClick={() => handleRoute('callback')} className='w-[119px] h-[35px] border-[1px] border-primary text-[#0066CD] rounded-[25px] flex items-center justify-center gap-x-[5px] '><Image src={phoneIcon} className='w-[12px] h-[12px]'/>Callback</button>
            </div>
          </div>
          {
            (route==='Home' && <Home/>) || 
            (route==='whyFIP' &&<WhyFundsIndiaPartner setRoute={setRoute}/>) || 
            (route==='contact' && <Contact />) || 
            (route==='callback' && <Callback />) ||
            (route==='terms' && <Termsandconditions />) ||
            (route==='policy' && <PrivacyPolicy />)
          }
          <div className='flex flex-col gap-y-[60px] items-center pt-[80px]'>

            <Image src={logo} className='w-[165px] h-[47px]' />

            <div className='flex w-full justify-around'>

              <div className='flex gap-x-[50px]'>
                <div className='text-[14px] flex flex-col gap-y-[20px] text-[#6E6E72]'>
                  <h6 className='font-bold text-black mb-[10px]'>Wealth India Financial Services Pvt. Ltd.,</h6>
                  <div className='flex gap-x-[13px] items-center'>
                    <Image src={phone} className="w-[16px] h-[16px]" />
                    <p>044 - 61104100</p>
                  </div>
                  <div className='flex gap-x-[13px] items-center'>
                    <Image src={emailIcon} className="w-[16px] h-[14px]" />
                    <p>contactpartner@fundsindia.com</p>
                  </div>
                  <div className='flex gap-x-[13px]'>
                    <Image src={office} className="w-[16px] h-[20px]" />
                    <p>3rd Floor, Uttam Building,<br/> No. 38 and 39, Whites Road, Royapettah.<br/> Chennai - 600014.</p>
                  </div>
                </div>
                <div className='text-[14px] flex flex-col gap-y-[18px]'>
                  <h6 className='font-bold text-[16px] mb-[10px]'>Quick Links</h6>
                  <div div className='flex gap-x-[10px] font-medium text-primary items-center pl-[5px] cursor-pointer'>
                    <Image src={bulletin} className='h-[6px] w-[6px]'/>
                    <p onClick={() => handleRoute('terms')}>Terms and Conditions</p>
                  </div>
                  <div div className='flex gap-x-[10px] font-medium text-primary items-center pl-[5px] cursor-pointer'>
                    <Image src={bulletin} className='h-[6px] w-[6px]'/>
                    <p onClick={() => handleRoute('policy')}>Privacy Policy</p>
                  </div>
                </div>
              </div>

              <div className='flex flex-col gap-y-[30px]'>
                <h6 className='font-semibold text-[16px] '>Subscribe to our Newsletter</h6>
                <div className='flex gap-x-[20px]'>
                  {
                    (subscribed) ?
                    <>
                      <p className='font-medium text-[14px] text-[#42B092] w-[442px]'>Your mail has been subscribed !</p>
                    </>
                    :
                    <>
                      <CustomTextField id='email' label='Email' type="text" value={email} errorMessage={emailErrorMessage} handleChange={handleEmailChange} width='304px' />
                      <button onClick={handleSubmit} className='bg-primary w-[118px] h-[40px] rounded-[25px] text-white text-[14px] font-bold' >Subscribe</button>
                    </>
                  }
                </div>
                <div className='flex flex-col gap-y-[10px]'>
                  <h6 className='text-[16px] font-semibold'>Follow us on</h6>
                  <div className='flex gap-x-[12px]'>
                    <Image src={fb} className='w-[27px] h-[27px]' />
                    <Image src={x} className='w-[27px] h-[27px]' />
                  </div>
                </div>
              </div>

            </div>

            <div className='mt-[30px] border-t-[1px] border-[#E3E3E3] flex justify-between w-full font-medium text-[14px] h-[65px] items-center'>
              <h6>Wealth India Financial Services Pvt. Ltd., 2023. All Rights Reserved</h6>
              <h6>SEBI Reg. No. INZ000241638 | ARN - 69583</h6>
            </div>

          </div>
        </div>
        {(login || modal === "password-updated") &&
          <div className='absolute w-screen h-screen bg-[rgba(10,22,8,0.3)] flex items-center justify-center' >
            <div className='relative w-[840px] h-[450px] rounded-[20px] bg-white py-[70px] px-[80px] text-center flex flex-col gap-y-[50px]  items-center '>
            <ClearRoundedIcon className='absolute top-[15px] right-[15px] cursor-pointer text-primary' onClick={()=>{ modal === "password-updated" && router.push('/'); setLogin(false)}} />
            <h2 className='text-[24px] font-semibold'>A revolutionary platform for all your investment needs</h2>
            <div className='flex gap-x-[120px]'>
              <div className='w-[260px] h-[210px] flex flex-col items-center justify-center p-[10px] gap-y-[30px] shadow-lg rounded-[20px]'>
                <Image src={partner} className='w-[85px] h-[113px]' />
                <Link href={'/b2b/login'}  className='w-[116px] h-[35px] text-white text-[14px] font-semibold bg-primary rounded-[25px] flex items-center justify-center'>Partner</Link>
              </div>
              <div className='w-[260px] h-[210px] flex flex-col items-center justify-center p-[10px] gap-y-[30px] shadow-lg rounded-[20px]'>
                <Image src={investor} className='w-[97px] h-[115px]' />
                <button className='w-[116px] h-[35px] text-white text-[14px] font-semibold bg-primary rounded-[25px]'>Investor</button>
              </div>
            </div>
            </div>
          </div>
        }
      </main>
    </ThemeProvider>
  )
}
