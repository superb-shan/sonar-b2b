import React, { useEffect, useRef, useState } from 'react'
import Image from "next/image"
import editIcon from '/public/editIcon.svg'
import deleteIcon from '/public/deleteIcon.svg'
import moment from 'moment/moment'
import { useDataContext } from '../../context/DataContext'
import { CustomTextField } from '../InputFields'

function AddNote() {

    const saveColRef = useRef(null)

    const {setDeletePopup} = useDataContext()

    const [Description, setDescription] = useState([
        {
            "Date": "01-10-2023",
            "Notes": "Customer call done. Shared details."
        }, {
            "Date": "25-07-2023",
            "Notes": "Email delivered to customer inbox"
        },
        {
            "Date": "07-06-2023",
            "Notes": "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator."
        },
    ])

    const [Index, setIndex] = useState(0)
    const [text, settext] = useState("")
    const [edit, setEdit] = useState(false)
    const [widthNumber, setWidthNumber] = useState(433)
    const [width, setWidth] = useState("433px")

    useEffect(() => {
        if (saveColRef){
            let currWidth = saveColRef.current.clientWidth
            console.log(currWidth+'px')
            setWidth(currWidth+'px')
            setWidthNumber((currWidth*63/100)+'px')
        }
    }, [saveColRef])

    const textchange = (event) => {
        settext(event.target.value)
    }

    const handleSave = () => {
        if (edit) {
            const data = Description
            data[Index].Notes = text
            data[Index].Date = moment().format("DD-MM-YYYY")
        }
        else {
            setDescription([{ "Date": moment().format("DD-MM-YYYY"), "Notes": text }, ...Description])
        }
        settext("")
        setEdit(false)
    }

    const DeleteNote = (Index)=>{
        const data = Description
        data.splice(Index,1)
        setDescription(data)
    }

    return (
        <div className={` w-[100%] h-[479px] pr-[15px] pl-[30px] `}>

            <p className='h-[20px] font-semibold text-[20px] w-[188px] mb-[20px]'>{edit ? "Edit Note" : "Add Note"}</p>
            <CustomTextField type="text" label="Notes" width={width} height="80px" value={text} handleChange={textchange} multiline 
                sx={{
                    '& .MuiInputBase-root': {
                        width: {width},
                        height:"80px",
                    },
                    '& .MuiInputBase-input': {
                        overflow: 'scroll !important',
                        width:{width},
                        marginTop: '6px',
                        marginBottom: '4px',
                        height:"70px !important",
                    },
                }} 
            />

            <p className='text-[#6E6E72] text-[12px] font-medium'>Max characters allowed 250</p>
            <div className='w-full flex justify-end gap-[20px]' ref={saveColRef}>

                <button className={`w-[114px] h-[40px] ${edit ? "opacity-100" : "opacity-0"}  rounded-[25px] text-[#0071E7] font-medium text-[14px]`} onClick={() => {
                    settext(""); setEdit(false); 
                }}>Cancel</button>
                <button disabled={text === "" } className={`w-[114px] h-[40px] ${text !== "" ? "bg-[#0071E7] opacity-1" : "bg-[#0071E7] opacity-[0.5]"}  rounded-[25px] text-white font-semibold text-[14px]`} onClick={handleSave}>Save</button>
            </div>
            <div className={` w-full ${edit ? "opacity-30" : "opacity-100"}`}>
                <p className='text-[16px] font-semibold h-[17px] mt-[20px]'>Previous Notes</p>
                <div className={` w-full  mt-[10px] font-medium text-[#000000] `}>
                    <table className="w-full border-collapse ml-[20px]">
                        <thead>
                            <tr>
                                <th className="p-4 text-left font-semibold text-[#6E6E72] pl-[50px] text-[14px]">Date</th>
                                <th className="p-4 text-left font-semibold text-[#6E6E72] text-[14px]">Notes</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                Description.map((ele, ind) => {
                                    return (
                                        <tr key={ind}>
                                            <td className="p-4 text-left text-[14px] w-[300px] pl-[50px]">{moment(ele.Date, "DD-MM-YYYY").format("D MMM YYYY")}</td>
                                            <td className={` p-4 text-left text-[14px] h-[32px] `} width={widthNumber}>{ele.Notes}</td>
                                            <div className='flex gap-[30px]'>
                                                <td className="p-4 text-left flex items-center text-[#0066CD] cursor-pointer font-medium h-[12px] w-[50px] gap-[3px]" onClick={() => { setIndex(ind); setEdit(true); settext(ele.Notes); }}> <Image src={editIcon} className='h-[12px]' /> Edit</td>
                                                <td className="p-4 text-left flex items-center text-[#F56902] cursor-pointer font-medium h-[12px] w-[50px] ml-[20px] pl-[20px] gap-[3px]" onClick={()=>{setIndex(ind); setDeletePopup({ date: moment(ele.Date, "DD-MM-YYYY").format("D MMM YYYY"), Index: ind, DeleteNote }); }}> <Image src={deleteIcon} className='h-[12px]' /> Delete</td>
                                            </div>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AddNote;
