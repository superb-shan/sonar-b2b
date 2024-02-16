import React, { useState } from 'react'
import Image from 'next/image'
import IPolicy from 'public/home/Group 545629/Group 545629@2x.png'

function PrivacyPolicy() {

  var [active,setActive] = useState(1);

  const handleClickScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
    <div className="flex min-h-screen flex-row items-center justify-center font-poppins">
      <div className="w-[50%]">
          <div className="text-[45px] font-extrabold text-[#0071E7]">
          Privacy Policy
          </div>
          <br/><br/>
          <div className="text-[16px] font-medium leading-[20px]">
          This privacy policy sets out how Funds IndiaPartner and Wealth India Financial Services Pvt. Ltd. (WIFS) uses and protects an information that vou share<br/><br/> when vou use tais doolcaron.<br/>virS Is committed to ensuring that your privacy is protected at all times. Should we ask you to provide certain information by which you can be identitied<br/><br/> when using this application, you can be assured that it will only be used in accordance with this privacy statement WIES mav change this policy from time to time ov updating this page. This policy is effective from March 1. 2022
          </div>
      </div>
      <div className="w-[50%] p-[63px]">
          <Image src={IPolicy}/>
      </div>
    </div>

    <div className="flex min-h-screen flex-row items-center justify-center font-poppins">
      <div className="w-[30%] leading-[18px]">
          <ul className='w-[100%] min-h-screen text-[18px] font-medium space-y-[50px]'>
            {
              (active==1)?
              <li className='border-[#0071E7] border-b-[2px] pb-[15px] cursor-pointer'>What We Collect</li>
              :
              <li className='cursor-pointer' onClick={()=>{setActive(1);handleClickScroll(1)}}>What We Collect</li>
            }
            {
              (active==2)?
              <li  className='border-[#0071E7] border-b-[2px] pb-[15px] cursor-pointer'>Aadhar User Consent Policy</li>
              :
              <li className='cursor-pointer' onClick={()=>{setActive(2);handleClickScroll(2)}}>Aadhar User Consent Policy</li>
            }
            {
              (active==3)?
              <li  className='border-[#0071E7] border-b-[2px] pb-[15px] cursor-pointer'>Security</li>
              :
              <li className='cursor-pointer' onClick={()=>{setActive(3);handleClickScroll(3)}}>Security</li>
            }
            {
              (active==4)?
              <li  className='border-[#0071E7] border-b-[2px] pb-[15px] cursor-pointer'>How We Use Cookies</li>
              :
              <li className='cursor-pointer' onClick={()=>{setActive(4);handleClickScroll(4)}}>How We Use Cookies</li>
            }
            {
              (active==5)?
              <li  className='border-[#0071E7] border-b-[2px] pb-[15px] cursor-pointer'>Links to Other Websites</li>
              :
              <li className='cursor-pointer' onClick={()=>{setActive(5);handleClickScroll(5)}}>Links to Other Websites</li>
            }
            {
              (active==6)?
              <li  className='border-[#0071E7] border-b-[2px] pb-[15px] cursor-pointer'>Controlling Your Personal Information</li>
              :
              <li className='cursor-pointer' onClick={()=>{setActive(6);handleClickScroll(6)}}>Controlling Your Personal Information</li>
            }
            {
              (active==7)?
              <li  className='border-[#0071E7] border-b-[2px] pb-[15px] cursor-pointer'>Security Certificates</li>
              :
              <li className='cursor-pointer' onClick={()=>{setActive(7);handleClickScroll(7)}}>Security Certificates</li>
            }
            {
              (active==8)?
              <li  className='border-[#0071E7] border-b-[2px] pb-[15px] cursor-pointer'>When it Comes To Data Security, Our Goal is to Ensure that</li>
              :
              <li className='cursor-pointer' onClick={()=>{setActive(8);handleClickScroll(8)}}>When it Comes To Data Security, Our Goal is to Ensure that</li>
            }
            {
              (active==9)?
              <li  className='border-[#0071E7] border-b-[2px] pb-[15px] cursor-pointer'>Each of the Seals Below are Verified Daily, and they Hold a Specific Meaning</li>
              :
              <li className='cursor-pointer' onClick={()=>{setActive(9);handleClickScroll(9)}}>Each of the Seals Below are Verified Daily, and they Hold a Specific Meaning</li>
            }
          </ul>
      </div>
      <div className="w-[72%] max-h-screen pl-[63px] overflow-auto">

          {/* 1 */}

          <div id='1' className='text-[22px] font-bold text-[#0071E7]'>What We Collect</div><br/>
          <div className='text-[14px] '>We may collect the following information</div><br/>
          <ul className='marker:text-[#0071E7] list-outside list-disc ml-4 text-[14px]'><li>Name. residential / correspondence address. telephone number. date of birth, marital status.email address. mobile number and other contact Information</li><li>Other personal information. includina bank account number. Aadhaar Number (redacted). and</li><li>Permanent Account Number (PAN</li><li>Demoaraphic information such as gender. income. occupation information. father’s and mother’s name.</li><li>ominee details</li><li>KYC related information through videos. selfies. etc.</li><li>Uploaded images of cheque leaf, signature, identity proof, address proof, income proof, photo etc</li> Recorded interactions via emall, chatoot, online chat, vnatsApp, surveys, social medla plattorms, eic<br/> Other non-personal Information that can help us improve our services<br/><ol className='list-[lower-roman] ml-4 marker:text-black'><li>The device. the browser. me operating system being used to access weste or moore aoo</li><li>location, IP address, device manufacturer, and other unique identifiers of the device</li><li>InTormaTion collected via cookles. oxenags or simlar electronic Tools on our weosites and emails</li></ol></ul><br/>
          <div className='text-[14px]'>We may also retrieve information from other third-party sources such as (but not limited to) the CDSL KRA, Central KYC Registry (CKYC), NDML,DigiLocker. Credit Bureau, etc.</div><br/><br/>

          {/* 2 */}

          <div id='2' className='text-[22px] font-bold text-[#0071E7]'>Aadhar User Consent Policy</div><br/>
          <div className='text-[14px] '>We use the personal information and non-personal information Tor the Tollowing purposes</div><br/>
          <ul className='marker:text-[#0071E7] list-outside list-disc ml-4 text-[14px]'><li>Conduct Know-Your-Customer (KYC) registration as required by SEBI and/or other regulatory bodies</li><li>Facilitate the various investment services provided by us</li><li>Share the information as reguired by SEBI and/or other reaulatorv bodies with SEBI/ NSE / BSE / Depositories / Asset Management Companies of Mutual Funds (AMCs) / Registrar and Transfer Agents (RTAs) / Banks / Pavment Aggregators / KYC Registration Agencies (KRAs). etc. solelv for the purpose</li><li>of processing vour financial and non-financial transactions</li><li> Share the information to our NBC partners (as the case may be) while investing in fixed deposit products</li><li>Perform periodic compliance checks and keep/maintain internal records</li><li>Customise me content on our olatorm</li><li>Improve our products and service offerinas to our customers </li><li>Provide customers with relevant product and service offers via email, SMS. push notifications. WhatsApp, etc.</li><li>Intimate, deliver transactional alerts and other communication relevant to our customers</li><li> Send emails to the registered email address about customer’s investments, or other information which we think our customers may find interesting You will be tree to unsubscribe trom our mailing list at anv time it vou do not wish to receive such emais trom us.</li><ul></ul> Deal wit customer encures ancor comolaints. anc to troublesnoor an oroblems Contact vou via phone or email for market research purposes. seek feedback on new products or services. etc.</ul><br/>
          <div className='text-[14px]'>We will not sell, distribute or lease your personal information to third parties unless we are required to shore such information under the terms and conditions or the producis and services you avall, or we are required to do so by law or regulation</div><br/><br/>
          
          {/* 3 */}

          <div id='3' className='text-[22px] font-bold text-[#0071E7]'>Security</div><br/>
          <div className='text-[14px] '>we are committed to ensuring that your information is secure. In order to prevent unauthorised access or disclosure, we have put in place suitable physical electronic and managerial procedures to safeguard and secure the information we collect online. <span className='text-[#0071E7]'>More</span></div><br/><br/>
          
          {/* 4 */}

          <div id='4' className='text-[22px] font-bold text-[#0071E7]'>How We Use Cookies</div><br/>
          <div className='text-[14px] '>A cookie is a small file which asks permission to be placed on your device's hard drive. Once you agree, the file is added and the cookie helps analyse web traffic, or lets you know when you visit a particular site. Cookies allow web applications to respond to you as an individual. The wab application can tailor its operations to your needs, likes and dislikes by gathering and remembering information about your preferences<br/><br/>We use traffic log cookies to identity which pages are being used. This helps us analyse data about web page traffic and improve our application in order to tailor it to our customers' needs. We only use this information for statistical analysis purposes and then the data is removed from the system<br/><br/>Overall, cookies help us provide you with a better application by enabling us to monitor which pages you find useful and which you do not. A cookie in no way gives us access to your device or any information about you, other than the data you choose to share with us<br/><br/>You can choose to accept or decline cookies. Most web browsers/applications automatically accept cookies, but you can usually modify your browser's settings to decline cookies. This may prevent you from taking full advantage of the websites/applications<br/></div><br/><br/>

          {/* 5 */}

          <div id='5' className='text-[22px] font-bold text-[#0071E7]'>Links to Other Websites</div><br/>
          <div className='text-[14px] '>Our application may contain links to other applications/ websites of interest. However, once you have used these links to leave our application, you should note that we do not have any control over such third-party applications/websites. Therefore, we cannot be responsible for the protection and privacy of any information which you provide whilst visiting them. You should exercise caution and look at the privacy statement applicable to the application/ website in question<br/></div><br/><br/>

          {/* 6 */}

          <div id='6' className='text-[22px] font-bold text-[#0071E7]'>Controlling Your Personal Information</div><br/>
          <div className='text-[14px] '>If you believe that any of your information with us is incorrect or incomplete, please email us as soon as possible at contactpartner@fundsindia.com. We will promptly correct any information found to be incorrect.<br/></div><br/><br/>
       
          {/* 7 */}

          <div id='7' className='text-[22px] font-bold text-[#0071E7]'>Security Certificates</div><br/>
          <div className='text-[14px] '>Fundsindia is an online financial services company. We fully recognise and understand the security implications of being a service provider with whom people trust their money. There are many safeguards we adopt in this regard-some of these are technical, and some are structural<br/></div><br/><br/>
          
          {/* 8 */}

          <div id='8' className='text-[22px] font-bold text-[#0071E7]'>When it Comes To Data Security, Our Goal is to Ensure that</div><br/>
          <ul className='list-inside list-[number] text-[14px]'><li>Your data is stored safely and securely-passwords are one-way encrypted before being stored in the database for high security.</li><li>All communication with you, or with mutual fund companies and other service providers - are encrypted using the highest standards.</li><li>Your data is not shared with anyone, unless you have explicitly requested us to do so to fulfil a transaction request.</li></ul><br/>
          <div className='text-[14px]'>To ensure that we achieve these goals, we have a variety of certifications/trust verifications in place for our firm, both from technical and legal/operational perspectives. All our communications are encrypted by 256-bit encryption, and our data is hosted with top-tier hosting service providers. Also, our data is continuously backed up to ensure continuity of operations<br/><br/>Here are some of our security certifications. These certifications are continuously updated by regularly auditing our technical infrastructure for full security compliance.</div><br/><br/>
          
          {/* 9 */}

          <div id='9' className='text-[22px] font-bold text-[#0071E7]'>Each of the Seals Below are Verified Daily, and they Hold a Specific Meaning</div><br/>
          <div className='text-[14px]'>
            <div className='text-[18px] font-bold pb-[10px]'>Security-Verified</div>
            <div>Implies that our site is using the highest grade of security when it comes to communications</div><br/>
          
            <div className='text-[18px] font-bold pb-[10px]'>Business-Verified</div>
            <div>Implies that we have cleared a business verification test to certify that we are a legitimate service provide</div><br/>
          
            <div className='text-[18px] font-bold pb-[10px]'>Privacy-Verified</div>
            <div>Implies that our privacy policy has been reviewed and found compliant with international standards of privacy</div><br/>
          
            <div className='text-[18px] font-bold pb-[10px]'>Thawte-Certificate</div>
            <div>Provides third-party confirmation of the authenticity and validity of our Security Certificate that is used to secure communication between our servers and our customers' browsers</div><br/>

            <div className='text-[18px] font-bold pb-[10px]'>Grievance Redressal</div>
            <div>For an aueries with respect to this Privac Polic. or an discrepancies and arievances pertaining to processing of your information. vou may reach out to our Grievance Officer. Mr. Giriraian Murugan at airiraian@fundsindia.com</div><br/>

            <div className='text-[18px] font-bold pb-[10px]'>Changes to This Policy</div>
            <div>From time to time, we may update or revise this Privacy Policy without a prior notification to the users. The effective date of this policy. as indicated at the top of this page, shows the last time this policy was revised or materially changed. While we will make reasonable efforts to keep you updated on changes to the privacy policy, we advise you to review this page periodically to keep yourself abreast of any changes to the policy</div> <br/>
          </div><br/><br/>
      </div>
    </div>
    </>
  )
}

export default PrivacyPolicy