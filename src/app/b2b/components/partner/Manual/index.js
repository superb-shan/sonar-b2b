import { useState } from 'react'
import Tick from '/public/callback/successmark.png';
import Image from 'next/image';

function manual() {
  const[success, setSuccess] = useState(false);
  return (
    <div className='p-[20px]'>
    
      <div className='w-full max-h-min rounded-[15px] bg-white p-[20px]'>
        <div className='text-[20px] leading-[20px] font-semibold'>
        Partner Manual
        </div>
        <div className='text-[14px] pt-[20px] pb-[20px]'>
        Let’s help you get started. Download the partner’s user manual here.
        </div>
        {
        (!success)?
        <>
        <button className='w-[128px] h-[40px] text-[14px] text-white font-bold bg-[#0071E7] rounded-[25px]' onClick={()=>setSuccess(true)}>
        Download
        </button>
        </>
        :
        <div className='flex flex-col items-center'>
          <Image className='w-[113px] h-[133px]' src={Tick}/>
          <div className='text-[#00A345] text-[20px] font-semibold'>
          Downloaded Successfully.
          </div>
        </div>
        }
        </div>
    </div>
  )
}

export default manual