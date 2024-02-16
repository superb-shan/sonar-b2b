
import edit from '/public/edit.svg'
import closeSmall from '/public/closeSmall.svg'
import { useState } from 'react'
import Image from 'next/image'

export default function SaveFilter({filter, filterIndex, setCurrentFilterDataOptions, handleSavedFilterNameChange, removeSavedFilter}) {

    const [filterName, setFilterName] = useState(filter.name)
    const [onEdit,setOnEdit]=useState(false)

    return(
        <div className={` h-[28px] pl-[7px] pr-[1px] flex items-center justify-center gap-x-[5px] rounded-[20px] border-[1px] border-[#0171E7] `}>
            { onEdit ? <input className='text-[14px] h-[18px] w-[80px] text-[#0171E7] bg-transparent px-[4px] ' type="text" value={filterName} onChange={(event) => setFilterName(event.target.value)} /> : <button className='text-[14px] h-[26px] w-[80px] text-[#0171E7] flex items-center px-[4px]  ' title={filterName} onClick={() =>{ setCurrentFilterDataOptions([...filter.data])}}  ><div className='w-[79px] text-ellipsis whitespace-nowrap overflow-clip'>{filterName}</div></button>}
            { !onEdit && <Image src={edit} className=' cursor-pointer' onClick={() => setOnEdit(true)} />}
            { onEdit && <Image src={closeSmall} className={` cursor-pointer`} onClick={() => {setFilterName(filter.name); setOnEdit(false)}} />}
            { onEdit && <div className=' mr-[2px]  h-[calc(100%-4px)] w-[44px] flex items-center justify-center rounded-[10px] bg-[#01A245] text-white text-[10px] cursor-pointer ' onClick={() => {handleSavedFilterNameChange(filterName, filterIndex); setOnEdit(false)}}> save</div>}
            { !onEdit && <Image src={closeSmall} className={` mr-[7px] cursor-pointer`} onClick={() => {removeSavedFilter(filterIndex)}} />}
        </div>
    )
}