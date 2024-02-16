import { useLayoutEffect, useRef, useState } from 'react'
import Tick from 'public/callback/successmark.png';
import upload from 'public/partner/upload.svg'
import avathar from 'public/partner/avathar/Ellipse 2700@2x.png'
import loremLogo from 'public/partner/loremLogo/Mask Group 405756@2x.png'
import close from 'public/partner/close.svg'
import Image from 'next/image';
import { CustomTextField } from '../../InputFields';

function About() {
  const [success, setSuccess] = useState(false);
  const [about, setAbout] = useState('')
  const [experience, setExperience] = useState('')
  const [uploadAvathar, setUploadAvathar] = useState(true);
  const [uploadLogo, setUploadLogo] = useState(true);

  const [avatharErrorMessage, setAvatharErrorMessage] = useState(false);
  const [logoErrorMessage, setLogoErrorMessage] = useState(false);
  const [experienceErrorMessage, setExperienceErrorMessage] = useState('');
  const [aboutErrorMessage, setAboutErrorMessage] = useState('');
  
  const handleAboutChange = (event)=>{
    setAbout(event.target.value);

    if (event.target.value != '') setAboutErrorMessage('');
    else setAboutErrorMessage('This field can not be empty');
  }

  const handleExperienceChange = (event) => {
    setExperience(event.target.value)

    if (event.target.value < 0 || event.target.value > 100) setExperienceErrorMessage('Invalid Years of Experience');
    else if (event.target.value != '') setExperienceErrorMessage('');
    else setExperienceErrorMessage('This field can not be empty');
  }

  const handleSubmit = () => {
    if (uploadAvathar == true) setAvatharErrorMessage(true);
    if (uploadLogo == true) setLogoErrorMessage(true);

    if (experience.trim() == '') setExperienceErrorMessage('This field can not be empty');
    if (about.trim() == '') setAboutErrorMessage('This field can not be empty');

    if (uploadAvathar == false && uploadLogo == false && experience.trim() != '' && about.trim() != '')
    setSuccess(true);
  }
  const ref = useRef(0);

  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
      setWidth(ref.current.offsetWidth);
  }, []);

  
  return (
    <div className='p-[20px]'>
    
      <div className=' flex flex-col w-full h-full rounded-[15px] bg-white p-[20px] gap-y-[20px]' >
        <div className='text-[20px] leading-[20px] font-semibold '>About Partner</div>
        {
        (!success)?
        <div className='flex flex-col gap-[20px] w-full'>
          <div className='flex gap-x-[20px] w-full'>
            {(uploadAvathar)?
              <div className='flex-col flex gap-y-[10px] items-center' >
                <button onClick={()=>{setUploadAvathar(false); setAvatharErrorMessage(false);}} className=' bg-[#D8EBFF] h-[158px] w-[158px] rounded-full shrink-0 flex items-center justify-center flex-col gap-y-[10px] ' >
                  <Image src={upload} className='w-[41px] h-[41px]' />
                  <p className='text-[#0066CD] font-medium text-[14px]'>Upload Photo</p>
                </button>
                {avatharErrorMessage && <p className='text-[#FF7922] font-medium text-[12px]'> Please upload Your Photo</p>}
              </div>
              :
              <div className=' h-[158px] w-[158px] shrink-0 relative'>
                <Image src={avathar} className='w-[158px] h-[158px] ' />
                <button onClick={()=>setUploadAvathar(true)}><Image src={upload} className='w-[41px] h-[41px] absolute bottom-2 right-2' /></button>
              </div>
            }
            <div className='border-[#70707010] border-[1px] w-0 h-[275px]' />
            <div className='w-full flex flex-col gap-y-[20px] ' ref={ref}>
              <h3 className='font-medium text-[14px] mb-[-10px]'>Upload Logo</h3>
              {
                (uploadLogo) ?
                  <div className='flex flex-col gap-y-[5px] items-center'>
                    <div className='border-[1px] border-[#D2D2D2] w-full rounded-[14px] p-[18px]'>
                      <h6 className='text-[#6E6E72] font-medium text-[14px] text-center'>Drag and Drop your File here or <button className='text-[#0066CD]' onClick={()=>setUploadLogo(false)}>Browse File</button></h6>
                      <p className='text-[#6E6E72] text-[12px] text-center'>File formate : JPG, PNG</p>
                    </div>
                    {logoErrorMessage && <p className='text-[#FF7922] font-medium text-[12px] mb-[-17px]'>Please upload your Logo</p>}
                  </div>
                :
                  <div className='border-[1px] border-[#D2D2D2] rounded-[14px] p-[18px] flex gap-x-[20px] items-center relative'>
                    <Image src={loremLogo} className='w-[75px] h-[75px]'/>
                    <div>
                      <h4 className='font-medium text-[14px]'>loremipsum.jpg</h4>
                      <p className='text-[12px] text-[#6E6E72] font-medium'>500 KB</p>
                    </div>
                    <Image src={close} className='w-[15px] h-[15px] absolute top-2 right-3 cursor-pointer' onClick={()=>{setUploadLogo(true); setLogoErrorMessage(false);}}/>
                  </div>
              }
              <CustomTextField type='number' label="Experience" value={experience} handleChange={handleExperienceChange} errorMessage={experienceErrorMessage}/>  <div className='mt-[-16px]' hidden={experienceErrorMessage == ''} />
              <CustomTextField type="text" label="About" value={about} handleChange={handleAboutChange} multiline errorMessage={aboutErrorMessage}
                  sx={{
                      '& .MuiInputBase-root': {
                          width:{width},
                          height:"214px",
                      },
                      '& .MuiInputBase-input': {
                          overflow: 'scroll !important',
                          width:{width},
                          marginTop: '10px',
                          marginBottom: '10px',
                          height:"196px !important",
                      },
                  }} 
              />
            </div>
          </div>

          <button className='w-[128px] h-[40px] text-[14px] text-white font-bold bg-[#0071E7] rounded-[25px] self-end' onClick={handleSubmit}>Submit</button>
        </div>
        :
        <div className='flex flex-col self-center h-full  items-center justify-center'>
          <Image className='w-[113px] h-[133px]' src={Tick}/>
          <h6 className='text-[#00A345] text-[20px] font-semibold'>About Partner Message Updated Successfully. </h6>
        </div>
        }
        </div>
    </div>
  )
}

export default About