
import { useRouter, useSearchParams } from 'next/navigation';
import {CustomTextField} from "../../../components/InputFields";
import { useState } from 'react'
import 'react-international-phone/style.css';
import { MuiPhone } from './MuiPhone';

function Registration() {

  const router = useRouter();
  const searchParams = useSearchParams();

  const create = searchParams.get('create');

  var[success, setSuccess] = useState(create || false);

  const[email,setEmail] = useState('');
  const[name,setName] = useState('');
  const[mobilenumber,setMobilenumber] = useState('');

  const [nameErrorMessage, setNameErrorMessage] = useState('');
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
      };

  return (
    <div className='p-[20px]'>
    {
      (!success) ?
      <div className='w-full p-[20px] bg-white rounded-[15px]'>
        <div className='text-[20px] font-semibold pb-[20px]'>
          Account Creation
        </div>
        <div className='flex flex-col gap-[30px] '>
          <CustomTextField type='email' label="Email" width="380px" height='40px' value={email}  handleChange={handleEmailChange} errorMessage={emailErrorMessage} />
          <CustomTextField type='text' label="Name" width="380px" height='40px' value={name} setValue={setName} handleChange={handleNameChange} errorMessage={nameErrorMessage} />
          {/* <TextField  type='tel' label='Mobile Number' id='mobilenumber'/> */}
          <MuiPhone 
            style={{
              borderRadius: '10px',
              width: '380px',
            }} 
            sx={
              {
                  '& .MuiInputBase-root': {
                      height: '40px',
                  }
              }
            }
            value={mobilenumber} 
            onChange={(mobilenumber) => setMobilenumber(mobilenumber)}
          />
        </div>
          
        <div className='text-[14px] font-medium text-[#6E6E72] pt-[15px] pb-[20px]'>
          For NRIs, Please enter the appropriate country code followed by their mobile number.
        </div>
        <button className='w-[166px] h-[40px] text-[14px] text-white font-bold bg-[#0071E7] rounded-[25px] ' onClick={()=>{setSuccess(true); router.push(`/b2b/partner?tab=registration&create=1`)}}>
        Create Account
        </button>
      </div>
      :
      <div>
        <div className='w-full h-[84px] bg-white p-[20px] rounded-[15px]'>
          <div className='text-[20px] font-semibold'>Account Type</div>
          <div className='text-[#6E6E72] text-[14px] font-medium'>To Create an Account please click on relevant Button below.</div>
        </div>
        <div className='grid gap-[20px] grid-cols-2 pt-[20px]'>

          <div className=' bg-white rounded-[15px] p-[20px]'>
            <div className='text-[18px] font-semibold leading-[18px]'>
            Resident Individual
            </div>
            <div className='text-[14px] pt-[15px] pb-[35px] leading-[20px]'> 
            If the investor is an adult resident of India, please create the account as a ‘Resident Individual’.
            </div>
            {/* Here the button is not placed exactly as given in the desgin due to default font */}
            <button className='w-[200px] h-[38px] bg-[#0071E7] text-white rounded-[25px] text-[14px]'>
            Resident Individual
            </button>
          </div>

          <div className=' bg-white rounded-[15px] p-[20px]'>
            <div className='text-[18px] font-semibold leading-[18px] '>
            Non Resident Individual
            </div>
            <div className='text-[14px] pt-[15px] pb-[15px] leading-[20px]'> 
            If the investor is either an Indian citizen or a person of Indian origin, and resides outside of India, please create the account as a Nonresident Individual
            </div>
            {/* Here the button is not placed exactly as given in the desgin due to default font */}
            <button className='w-[200px] h-[38px] bg-[#0071E7] text-white rounded-[25px] text-[14px]'>
            Non Resident Individual
            </button>
          </div>

          <div className=' bg-white rounded-[15px] p-[20px]'>
            <div className='text-[18px] font-semibold leading-[18px] '>
            Minor
            </div>
            <div className='text-[14px] pt-[15px] pb-[20px] leading-[20px]'> 
            If the investor is less than 18 years old, please create the account as a Minor account. Please note that you would need to provide information about an adult guardian (with proof of relationship) and a bank account in the name of the minor under the guardianship of the adult guardian.
            </div>
            {/* Here the button is not placed exactly as given in the desgin due to default font */}
            <button className='w-[200px] h-[38px] bg-[#0071E7] text-white rounded-[25px] text-[14px]'>
            Minor
            </button>
          </div>

          <div className=' bg-white rounded-[15px] p-[20px]'>
            <div className='text-[18px] font-semibold leading-[18px] '>
            Corporates / HUF
            </div>
            <div className='text-[14px] pt-[15px] pb-[63px] leading-[20px]'> 
            If the investments will be made in the name of a non-individual - a company or a Hindu Undivided Family (HUF), please use this type of account creation
            </div>
            {/* Here the button is not placed exactly as given in the desgin due to default font */}
            <button className='w-[200px] h-[38px] bg-[#0071E7] text-white rounded-[25px] text-[14px]'>
            Corporates / HUF
            </button>
          </div>

        </div>
      </div>

    }
    </div>
  )
}

export default Registration