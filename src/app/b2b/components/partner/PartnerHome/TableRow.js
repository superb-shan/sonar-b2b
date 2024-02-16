import { Popper } from '@mui/material';
import threeDots from '/public/partner/threeDots.svg'
import Image from "next/image.js";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDataContext } from '../../../context/DataContext';
import Arrow from '/public/partner/Arrow';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import star from '/public/star.svg';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';

export default function TableRow ({data , setActive, type}) {

    const [anchorEl, setAnchorEl] = useState(null);
    const [selected, setSelected] = useState(false);
    const router = useRouter()
    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    let {setInvestorList, setInvestor, setSip, setAddScheme, setViewPortfolioScheme, addSchemeList, setAddSchemeList, setDeletePopup, setNotificationMessage} = useDataContext();

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    function handleSelect() {
        if (selected == false) {
            let newData = [data[0], 5, (Math.random()*10).toFixed(2), (Math.random()*100 % 20).toFixed(2), (Math.random()*100 % 20).toFixed(2)]
            setAddSchemeList([...addSchemeList, newData])
            // console.log(addSchemeList.length)
            setSelected(true)
        }
        else {
            setAddSchemeList(addSchemeList.filter(item => item[0] != data[0]))
            setSelected(false)
        }
    }

    function handleDownload() {
        setNotificationMessage('Successfully Downloaded')
        setTimeout(()=>{
            setNotificationMessage(false);
        }, 2500)
    }

    return(
        <tr class="even:bg-white odd:bg-[#F9FBFF]  text-[14px] font-medium">
            {data?.map((ele, index)=>{
                if(type == 'AUM' && index == 1 )
                    return <td><p className='text-right'>{ele}</p></td>
                if (type == 'rating' && index == 2) 
                    return <td ><p className='text-[#42B093] flex gap-x-[3px] items-center'>{ele}<Image src={star} className='w-[13px] h-[13px] pb-[2px]' /></p></td>
                if (type == 'schemes' && index==5)
                    return (<><td>{ele}</td><td ><button onClick={()=>{setDeletePopup(data)}} className='text-[#F56902] flex items-center gap-x-[6px] '><DeleteRoundedIcon className='text-[14px]' />Delete</button></td></>)
                if (type == 'schemes' && index==2)
                    return <td ><p className='text-[#42B093] flex gap-x-[3px] items-center'>{ele}<Image src={star} className='w-[13px] h-[13px] pb-[2px]' /></p></td>
                if (type == 'portfolio' && index==0) 
                    return <td className='text-[#0066CD] cursor-pointer' onClick={()=>{setViewPortfolioScheme(ele)}}>{ele}</td>
                if (type == 'portfolio' && index == 2) 
                    return
                if (type == 'sip' && index == 0)
                    return <td className='text-[#0066CD] cursor-pointer' onClick={()=>setSip(true)}>{ele}</td>
                if (type == 'sip' && index == 2)
                    return (<><td>{ele}</td><td className='text-[#0171E7] cursor-pointer font-medium flex items-center gap-x-[5px] pl-[25px]' onClick={()=>setSip(true)} >View <Arrow active={true} left={false} w={5} h={8.5} /> </td></>)
                return <td className='whitespace-nowrap'>{ele}</td>
            })}
            {
                setActive &&
                <td className="pl-[20px]">
                <button  className='w-[25px] h-[10px]'  onClick={handleClick} onBlur={handleClick}>
                    <Image src={threeDots} />
                </button>
                <Popper id={id} open={open} anchorEl={anchorEl} >
                    <div className='w-[160px] text-[14px] flex flex-col bg-white rounded-[10px] shadow-lg justify-around items-center mt-[5px] mr-[100px] p-[5px] '>
                        <p onMouseDown={()=>{router.push('/b2b/partner?tab=registration&create=1');setTimeout(()=>setActive('registration'),500);}} className='cursor-pointer hover:font-semibold hover:bg-[#F9FBFF] h-[37px] w-[150px] flex items-center justify-center ' >Add Investor</p>
                        <p onMouseDown={()=>{ setInvestor(data[0]); setInvestorList(data[0]);}} className='cursor-pointer hover:font-semibold hover:bg-[#F9FBFF] h-[37px] w-[150px] flex items-center justify-center '>Investor List</p>
                    </div>
                </Popper>
                </td>
            }
            {
                (type == 'portfolio') && 
                <td className="pl-[20px]">
                <button  className='w-[25px] h-[10px]'  onClick={handleClick} onBlur={handleClick}>
                    <Image src={threeDots} />
                </button>
                <Popper id={id} open={open} anchorEl={anchorEl} >
                    <div className='w-[160px] text-[14px] flex flex-col bg-white rounded-[10px] shadow-lg justify-around items-center mt-[5px] mr-[100px] p-[5px] '>
                        <p onMouseDown={()=>{ setAddScheme(data[0]); setAddSchemeList([]) }} className='cursor-pointer hover:font-semibold hover:bg-[#F9FBFF] h-[37px] w-[150px] flex items-center justify-center ' >Add Scheme</p>
                        <p onMouseDown={()=>{ setDeletePopup(data) }} className='cursor-pointer hover:font-semibold hover:bg-[#F9FBFF] h-[37px] w-[150px] flex items-center justify-center '>Delete</p>
                    </div>
                </Popper>
                </td>
            }
            {
                (type == 'rating') && 
                <td className={` pl-[25px] h-full ${(!selected)?'text-primary':'text-[#42B092]'} font-extrabold text-[22px] `} >
                    <button onClick={handleSelect}>{(!selected)?<AddCircleRoundedIcon />:<CheckCircleRoundedIcon />}</button>
                </td>
            }
            {
                type == 'downloadInvoice' &&
                <td>
                    <button onClick={handleDownload} ><DownloadRoundedIcon className='text-[#0071E7] text-[16px]'/></button>
                </td>
            }
        </tr>
    );
}