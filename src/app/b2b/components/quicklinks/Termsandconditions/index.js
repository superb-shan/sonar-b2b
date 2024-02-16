import React from 'react'
import Image from 'next/image'
import ITerm from 'public/home/Group 545628/Group 545628@2x.png'

function Termsandconditions() {
  return (
    <div className="flex min-h-screen flex-row items-center justify-center gap-[150px] font-poppins">
      <div className="w-[50%]">
        {/* Here heading text size is reduced to give it in single line */}
          <div className="w-[492px] text-[40px] font-extrabold leading-[46px] text-[#0071E7]">
          Terms and Conditions
          </div>
          <br/>
          <div className="text-[16px]">
          I herebv allow Wealth India Financial Services (WIFS) to utilize my KYC information such as identitv. address and sianature of sending it to Asset Management Companies (AMC for the purpose of validation and to comply with the legal and regulatory requirements. I hereby accept that for any requests submitted offline I.e, with wet signature, the signature available in my KYC records would be used for signature verification
          </div>
      </div>
      <div className="w-[50%]">
          <Image src={ITerm}/>
      </div>
    </div>
  )
}

export default Termsandconditions