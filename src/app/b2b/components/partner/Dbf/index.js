import { useState } from 'react'
import Tick from 'public/callback/successmark.png';
import Image from 'next/image';
import { CustomDatePicker } from '../../InputFields';
import dayjs from 'dayjs';

function dbf() {
  const[success, setSuccess] = useState(false);
  const[fromDate,setFromDate] = useState();
  const[toDate,setToDate] = useState();

  const [fromDateErrorMessage, setFromDateErrorMessage] = useState('');
  const [toDateErrorMessage, setToDateErrorMessage] = useState('');

  // Calculate the minimum allowed date as 60 days ago using dayjs
  const today = dayjs();
  const minDate = today.subtract(60, 'day').toDate();

  const handleFromDateChange = (newDate) => {
    // Check if the selected date is before the minimum allowed date
    if (newDate && dayjs(newDate).isBefore(minDate, 'day')) {
      setFromDateErrorMessage('Cannot select before 60 days from today.');
    } else {
      setFromDateErrorMessage('');
    }

    setFromDate(newDate);
  };

  const handleToDateChange = (newDate) => {
    // Check if the selected date is before the minimum allowed date
    if (newDate && fromDate && dayjs(newDate).isBefore(fromDate, 'day')) {
      setToDateErrorMessage('To date should be after From Date');
    } else {
      setToDateErrorMessage('');
    }

    setToDate(newDate);
  };

  function handleDownload () {
    if (fromDate == null) setFromDateErrorMessage('From date can not be empty');
    if (toDate == null) setToDateErrorMessage('To date can not be empty');
    else if (fromDateErrorMessage == '' && toDateErrorMessage == '' && fromDate != null && toDate != null )
      setSuccess(true)
  }

  return (
    <div className='p-[20px]'>
    
      <div className='w-full max-h-min rounded-[15px] bg-white p-[20px]'>
        <div className='text-[20px] leading-[20px] font-semibold'>
        DBF File Download
        </div>
        <div className='text-[14px] pt-[20px] pb-[20px]'>
        <span className='font-semibold'>Note:</span> Only last 60 days (maximum) data will be available for DBF file download.
        </div>
        {
        (!success)?
        <>
        <div className='flex gap-[50px] pb-[30px]'>
          <CustomDatePicker label="From Date" value={fromDate} handleChange={handleFromDateChange} disableFuture={true} errorMessage={fromDateErrorMessage} />
          <CustomDatePicker label="To Date" value={toDate} handleChange={handleToDateChange} disableFuture={true} minDate={fromDate} errorMessage={toDateErrorMessage} />
        </div>

        <button className='w-[108px] h-[40px] text-[14px] text-white font-bold bg-[#0071E7] rounded-[25px]' onClick={handleDownload}>
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

export default dbf