"use client"

import Image from 'next/image'
import slider1 from '/public/home/Group 544804/Group 544804@2x.png'
import img1 from '/public/home/Group 483641/Group 483641@2x.png'
import img2 from '/public/home/Group 498762/Group 498762@2x.png'
import img3 from '/public/home/Group 498555/Group 498555@2x.png'
import success from '/public/home/Group 405761/Group 405761@2x.png'
import captchaImg from 'public/callback/captcha.png'
import { useState } from 'react'

import { ThemeProvider } from '@mui/material/styles';
import theme from "../../theme";
import { CustomTextField } from '../InputFields'

export default function Home() {

    const [empannelSuccess, setEmpannelSuccess] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [mobile, setMobile] = useState('');
    const [captcha, setCaptcha] = useState('');

    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [nameErrorMessage, setNameErrorMessage] = useState('');
    const [phoneErrorMessage, setPhoneErrorMessage] = useState('');
    const [mobileErrorMessage, setMobileErrorMessage] = useState('');
    const [captchaErrorMessage, setCaptchaErrorMessage] = useState('');
    
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
      
    
      const handleNameChange = (event) => {
        const value = event.target.value;
        setName(value);
        if (!(value.length >= 2 && value.length <= 50)) {
          setNameErrorMessage("Name should be of min. 2 and max. 50 length");
        } else if (!/^[A-Za-z]+$/.test(value)) {
          setNameErrorMessage("Name can contain only alphabets");
        } else {
          setNameErrorMessage("");
        }
      };;
    
    const handleMobileChange = (event) => {
        const value = event.target.value;
        setMobile(value);

        if (value === "") {
            setMobileErrorMessage("Mobile Number cannot be empty");
        } else if (!/^\d{10}$/.test(value)) {
            setMobileErrorMessage("Invalid mobile number format (10 digits required)");
        } else {
            setMobileErrorMessage("");
        }
    };
    
    const handlePhoneChange = (event) => {
        const value = event.target.value;
        setPhone(value);

        if (value === "") {
            setPhoneErrorMessage("Phone Number cannot be empty");
        } else if (!/^\d{10}$/.test(value)) {
            setPhoneErrorMessage("Invalid phone number format (10 digits required)");
        } else {
            setPhoneErrorMessage("");
        }
    };
    
    const handleCaptchaChange = (event) => {
        const value = event.target.value;
        setCaptcha(value);

        if (value != 'd4d58') setCaptchaErrorMessage('Captcha is wrong');
        else setCaptchaErrorMessage('')
    };

    function handleSubmit () {
        if(name == '') setNameErrorMessage("Name cannot be empty")
        if (email == '') setEmailErrorMessage ("Email cannot be empty")
        if (phone == '') setPhoneErrorMessage("Phone number cannot be empty")
        if (mobile == '') setMobileErrorMessage("Mobile number cannot be empty")
        if (captcha == '') setCaptchaErrorMessage("Captcha cannot be empty")
        if (emailErrorMessage == '' && nameErrorMessage == '' && phoneErrorMessage == '' && mobileErrorMessage == '' && captchaErrorMessage == '' && name!='' && email != '' && phone != '' && mobile != '' && captcha != '')
        setEmpannelSuccess(true)
    }


    return (
        <ThemeProvider theme={theme}>
            <div className="flex h-screen gap-x-[40px] px-[10px] items-center mt-[-60px]">
                <div className=' flex flex-col gap-y-[10px]'>
                <p className="text-primary text-[26px] font-bold">Easy to use online platform</p>
                <h1 className=" text-[45px] font-extrabold">That lets you <span className="text-primary">service clients</span> from anywhere in the world</h1>
                </div>
                <Image src={slider1} className='w-[525px] h-[555px]' />
            </div>

            <div className="h-[800px] flex flex-col items-center justify-center px-[70px]">

                <h2 className="text-primary text-[35px] mb-[60px] font-bold">Connect <span className="text-black">and</span> Grow!</h2>
                <div className="flex gap-x-[30px]">

                <div className="text-center gap-y-[20px] flex-col flex border-[1px] border-[#F0F1F4] bg-white rounded-[20px] h-[365px] w-[340px] items-center justify-center px-[35px]">
                    <Image src={img1} className='w-[105px] h-[78px]' />
                    <h5 className="text-[16px] font-semibold ">Shift your Business to higher levels of Success and Value</h5>
                    <p className="text-[14px] ">Innovative interface that guides you step-by-step and makes Partner services easy! Provide access to a wide range of value-added services to your clients and give them the investment edge they deserve.</p>
                </div>
                <div className="text-center gap-y-[20px] flex-col flex border-[1px] border-[#F0F1F4] bg-white rounded-[20px] h-[365px] w-[340px] items-center justify-center px-[35px]">
                    <Image src={img2} className='w-[143px] h-[84px]' />
                    <h5 className="text-[16px] font-semibold ">Give your clients the online advantage</h5>
                    <p className="text-[14px] ">Provide a host of benefits when your clients access their investments on our easy to use online platform. All you need is an internet connection and a FundsIndiaPartner account.</p>
                </div>
                <div className="text-center gap-y-[20px] flex-col flex border-[1px] border-[#F0F1F4] bg-white rounded-[20px] h-[365px] w-[340px] items-center justify-center px-[35px]">
                    <Image src={img3} className='w-[187px] h-[87px]' />
                    <h5 className="text-[16px] font-semibold ">Connect, Communicate & Collaborate</h5>
                    <p className="text-[14px] ">Connect with clients across geographical barriers, grow business, access cutting-edge advice delivery tools & services to increase the levels of success and value in your practice.</p>
                </div>

                </div>
                
            </div>

            <div className="h-[800px] flex items-center justify-center  px-[40px]">
            {
                (!empannelSuccess) ?
                <div className=" flex flex-col p-[60px] pt-[50px] gap-y-[30px] rounded-[15px] shadow-lg items-center bg-white">
                    <h3 className=" text-[26px] font-semibold text-center">Empanel with us for <span className="text-primary">FREE!</span></h3>
                    <div className="flex gap-x-[50px]">

                    <div className="flex flex-col gap-y-[30px] text-[14px]">
                        <CustomTextField
                            id='name' 
                            label="Name"
                            value={name}
                            handleChange={handleNameChange}
                            type='text'
                            errorMessage={nameErrorMessage}
                        />
                        <CustomTextField 
                            id='email'
                            label="Email"
                            value={email}
                            handleChange={handleEmailChange}
                            type='text'
                            errorMessage={emailErrorMessage}
                        />
                        <div className='flex gap-x-[20px]'>
                            <CustomTextField 
                                id='captcha'
                                label="Captcha"
                                value={captcha}
                                handleChange={handleCaptchaChange}
                                type='text'
                                errorMessage={captchaErrorMessage}
                                width='185px'
                            />
                            <Image src={captchaImg} className='w-[144px] h-[36px]' />
                        </div>

                    </div>
                    <div className="flex flex-col gap-y-[30px] text-[14px]">
                        <CustomTextField 
                            id='mobile'
                            label="Mobile Number"
                            value={mobile}
                            handleChange={handleMobileChange}
                            type='number'
                            errorMessage={mobileErrorMessage} 
                        />
                        <CustomTextField
                            id='phone' 
                            label="Phone Number"
                            value={phone}
                            handleChange={handlePhoneChange}
                            type='number'
                            errorMessage={phoneErrorMessage}
                        />
                        <button onClick={handleSubmit} className="bg-primary h-[40px] w-[165px] rounded-[25px] text-white font-bold self-end">Submit</button>

                    </div>

                    </div>
                </div>
                :
                <div className="w-[870px] h-[351px] flex flex-col bg-white py-[68px] px-[46px] gap-y-[15px] rounded-[15px] shadow-lg items-center">
                    <Image src={success} className='w-[113px] h-[132px]' />
                    <h3 className='text-[24px] text-[#00A345] font-semibold leading-[30px]'>Success</h3>
                    <p className='text-[16px] font-semibold text-center leading-[24px]'>Thanks for empanelling with us, we shall get in touch with you to complete the empanelment process.</p>
                </div>
            }
                
            </div>
        </ThemeProvider>
    )
}
