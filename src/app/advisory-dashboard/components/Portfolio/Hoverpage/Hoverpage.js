import data from './drillDownData.json'
import { Star } from '@mui/icons-material';

export default function AUMHoverPage({height}) {
  return (
    
    <div className='flex flex-col gap-y-[10px] p-[20px]' >
        <div className='text-[#6E6E72] font-medium text-[12px] flex px-[10px]'>
            <p className='w-[50%]'>Asset Class/Category/Scheme Name</p>
            <p className='w-[19%] text-right'>Amount</p>
            <p className='w-[16%] text-right'>% Exposure</p>
            <p className='w-[15%] text-right'>No of funds</p>
        </div>

        {/* Darkest */}
        <div className=' overflow-auto' style={{maxHeight: height}} >
            <div className='bg-[#CFE5F8] p-[10px] font-extrabold rounded-[10px] flex mb-[10px]'> 
                <p className='w-[50%]'>Total AUM</p>
                <p className='w-[19.5%] text-right'>{ Object.values(data.AUM).flatMap((category) => Object.values(category).flat()).reduce((sum, fund) => sum + fund.amount, 0).toLocaleString("en-IN") }</p>
                <p className='w-[16%] text-right'>{ Object.values(data.AUM).flatMap((category) => Object.values(category).flat()).reduce((sum, fund) => sum + fund.exp, 0.0).toFixed(1) + "%" }</p>
                <p className='w-[14%] text-right'>{ Object.values(data.AUM).flatMap((category) => Object.values(category).flat()).length }</p>
            </div>
            <div className='flex flex-col gap-[20px]'>
                {
                    Object.keys(data.AUM).map((split) => {
                        return (
                            <div className='flex flex-col gap-[10px]'>
                                <div className='bg-[#E2F0FD] p-[10px] font-bold rounded-[10px] flex'> 
                                    <p className='w-[50%]'>{split}</p>
                                    <p className='w-[19.5%] text-right'>{ Object.values(data.AUM[split]).flat().reduce((sum, fund) => sum + fund.amount, 0).toLocaleString("en-IN") }</p>
                                    <p className='w-[16%] text-right'>{ Object.values(data.AUM[split]).flat().reduce((sum, fund) => sum + fund.exp, 0.0).toFixed(1) + "%" }</p>
                                    <p className='w-[14%] text-right'>{ Object.values(data.AUM[split]).flat().length }</p>
                                </div>
                                {
                                    Object.keys(data.AUM[split]).map((category) => {
                                        return (
                                            <div>
                                                <div className='bg-[#F1F7FD] p-[10px] font-semibold rounded-[10px] mb-[10px] flex pr-[20px]'> 
                                                    <p className='w-[50%]'>{category}</p>
                                                    <p className='w-[20%] text-right'>{data.AUM[split][category].reduce((accum, curr) => accum + curr.amount, 0).toLocaleString("en-IN")}</p>
                                                    <p className='w-[16%] text-right'>{data.AUM[split][category].reduce((accum, curr) => accum + curr.exp, 0.0).toFixed(1) + "%" }</p>
                                                    <p className='w-[14%] text-right'>{data.AUM[split][category].length}</p>
                                                </div>
                                                <div className='flex flex-col gap-[15px] pl-[10px]'>
                                                    {
                                                        data.AUM[split][category].map(row => 
                                                            <div className='flex'> 
                                                                <p className='w-[50%] flex items-center'>{row.name} <span className={`ml-[5px] whitespace-nowrap flex items-center ${row.rating === 0 ? "hidden" : [4,5].includes(row.rating) ? "text-[#00A345]" : [3,2].includes(row.rating) ? "text-[#F56902]" : "text-[#E30005]"}`}><Star className='text-[15px] mr-[3px]' />{row.rating}</span></p>
                                                                <p className='w-[19%] text-right'>{row.amount.toLocaleString("en-IN")}</p>
                                                                <p className='w-[16%] text-right'>{row.exp.toFixed(1) + "%"}</p>
                                                                <p className='w-[15%] text-right'></p>
                                                            </div>    
                                                        )
                                                    }
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
};

export function SIPHoverPage({ fundType = ["Equity", "Debt", "Gold"], height }) {
    return (
      
        <div className='flex flex-col gap-y-[10px] p-[20px]'>
            <div className='text-[#6E6E72] font-medium text-[12px] flex px-[10px]'>
                <p className='w-[50%]'>Asset Class/Category/Scheme Name</p>
                <p className='w-[19%] text-right'>SIP Amount</p>
                <p className='w-[16%] text-right'>% Exposure</p>
                <p className='w-[15%] text-right'>No of funds</p>
            </div>
    
            {/* Darkest */}
            <div className=' overflow-auto' style={{maxHeight: height}} >
                {
                    fundType.length === 3 &&
                    <div className='bg-[#CFE5F8] p-[10px] font-extrabold rounded-[10px] flex mb-[10px]'> 
                        <p className='w-[50%]'>Total SIP</p>
                        <p className='w-[19.5%] text-right'>{ Object.values(data.SIP).flatMap((category) => Object.values(category).flat()).reduce((sum, fund) => sum + fund.amount, 0).toLocaleString("en-IN") }</p>
                        <p className='w-[16%] text-right'>{ Object.values(data.SIP).flatMap((category) => Object.values(category).flat()).reduce((sum, fund) => sum + fund.exp, 0.0).toFixed(1) + "%" }</p>
                        <p className='w-[14%] text-right'>{ Object.values(data.SIP).flatMap((category) => Object.values(category).flat()).length }</p>
                    </div>
                }
                <div className='flex flex-col gap-[20px]'>
                    {
                        Object.keys(data.SIP).filter(option => fundType.length === 1 ? fundType[0] === "Others" ? option === "Gold" : option === fundType[0] : true).map((split) => {
                            return (
                                <div className='flex flex-col gap-[10px]'>
                                    <div className='bg-[#E2F0FD] p-[10px] font-bold rounded-[10px] flex'> 
                                        <p className='w-[50%]'>{fundType.length === 1 ? "Total SIP - " + fundType[0] : split}</p>
                                        <p className='w-[19.5%] text-right'>{ Object.values(data.SIP[split]).flat().reduce((sum, fund) => sum + fund.amount, 0).toLocaleString("en-IN") }</p>
                                        <p className='w-[16%] text-right'>{ Object.values(data.SIP[split]).flat().reduce((sum, fund) => sum + fund.exp, 0.0).toFixed(1) + "%" }</p>
                                        <p className='w-[14%] text-right'>{ Object.values(data.SIP[split]).flat().length }</p>
                                    </div>
                                    {
                                        Object.keys(data.SIP[split]).map((category) => {
                                            return (
                                                <div>
                                                    <div className='bg-[#F1F7FD] p-[10px] font-semibold rounded-[10px] mb-[10px] flex pr-[20px]'> 
                                                        <p className='w-[50%]'>{category}</p>
                                                        <p className='w-[20%] text-right'>{data.SIP[split][category].reduce((accum, curr) => accum + curr.amount, 0).toLocaleString("en-IN")}</p>
                                                        <p className='w-[16%] text-right'>{data.SIP[split][category].reduce((accum, curr) => accum + curr.exp, 0.0).toFixed(1) + "%" }</p>
                                                        <p className='w-[14%] text-right'>{data.SIP[split][category].length}</p>
                                                    </div>
                                                    <div className='flex flex-col gap-[15px] pl-[10px]'>
                                                        {
                                                            data.SIP[split][category].map(row => 
                                                                <div className='flex'> 
                                                                    <p className='w-[50%] flex items-center'>{row.name} <span className={`ml-[5px] whitespace-nowrap flex items-center ${row.rating === 0 ? "hidden" : [4,5].includes(row.rating) ? "text-[#00A345]" : [3,2].includes(row.rating) ? "text-[#F56902]" : "text-[#E30005]"}`}><Star className='text-[15px] mr-[3px]' />{row.rating}</span></p>
                                                                    <p className='w-[19%] text-right'>{row.amount.toLocaleString("en-IN")}</p>
                                                                    <p className='w-[16%] text-right'>{row.exp.toFixed(1) + "%"}</p>
                                                                    <p className='w-[15%] text-right'></p>
                                                                </div>    
                                                            )
                                                        }
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
};

export function EquityExposureHoverPage({height}) {
    return (
        <div className='flex flex-col gap-y-[10px] p-[20px]'>
            <div className='text-[#6E6E72] font-medium text-[12px] flex px-[10px]'>
                <p className='w-[50%]'>Asset Class/Category/Scheme Name</p>
                <p className='w-[19%] text-right'>Amount</p>
                <p className='w-[16%] text-right'>% Exposure</p>
                <p className='w-[15%] text-right'>No of funds</p>
            </div>
            <div className=' overflow-auto' style={{maxHeight: height}} >
                <div className='flex flex-col gap-[20px]'>
                    {
                        Object.keys(data.AUM).filter(option => option === "Equity").map((split) => {
                            return (
                                <div className='flex flex-col gap-[10px]'>
                                    <div className='bg-[#E2F0FD] p-[10px] font-bold rounded-[10px] flex'> 
                                        <p className='w-[50%]'>{"Total " + split}</p>
                                        <p className='w-[19.5%] text-right'>{ Object.values(data.AUM[split]).flat().reduce((sum, fund) => sum + fund.amount, 0).toLocaleString("en-IN") }</p>
                                        <p className='w-[16%] text-right'>{ Object.values(data.AUM[split]).flat().reduce((sum, fund) => sum + fund.exp, 0.0).toFixed(1) + "%" }</p>
                                        <p className='w-[14%] text-right'>{ Object.values(data.AUM[split]).flat().length }</p>
                                    </div>
                                    {
                                        Object.keys(data.AUM[split]).map((category) => {
                                            return (
                                                <div>
                                                    <div className='bg-[#F1F7FD] p-[10px] font-semibold rounded-[10px] mb-[10px] flex pr-[20px]'> 
                                                        <p className='w-[50%]'>{category}</p>
                                                        <p className='w-[20%] text-right'>{data.AUM[split][category].reduce((accum, curr) => accum + curr.amount, 0).toLocaleString("en-IN")}</p>
                                                        <p className='w-[16%] text-right'>{data.AUM[split][category].reduce((accum, curr) => accum + curr.exp, 0.0).toFixed(1) + "%" }</p>
                                                        <p className='w-[14%] text-right'>{data.AUM[split][category].length}</p>
                                                    </div>
                                                    <div className='flex flex-col gap-[15px] pl-[10px]'>
                                                        {
                                                            data.AUM[split][category].map(row => 
                                                                <div className='flex'> 
                                                                    <p className='w-[50%] flex items-center'>{row.name} <span className={`ml-[5px] whitespace-nowrap flex items-center ${row.rating === 0 ? "hidden" : [4,5].includes(row.rating) ? "text-[#00A345]" : [3,2].includes(row.rating) ? "text-[#F56902]" : "text-[#E30005]"}`}><Star className='text-[15px] mr-[3px]' />{row.rating}</span></p>
                                                                    <p className='w-[19%] text-right'>{row.amount.toLocaleString("en-IN")}</p>
                                                                    <p className='w-[16%] text-right'>{row.exp.toFixed(1) + "%"}</p>
                                                                    <p className='w-[15%] text-right'></p>
                                                                </div>    
                                                            )
                                                        }
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
};

export function DebtExposureHoverPage({height}) {
    return (
        <div className='flex flex-col gap-y-[10px] p-[20px]'>
            <div className='text-[#6E6E72] font-medium text-[12px] flex px-[10px]'>
                <p className='w-[50%]'>Asset Class/Category/Scheme Name</p>
                <p className='w-[19%] text-right'>Amount</p>
                <p className='w-[16%] text-right'>% Exposure</p>
                <p className='w-[15%] text-right'>No of funds</p>
            </div>
            <div className=' overflow-auto' style={{maxHeight: height}} >
                <div className='flex flex-col gap-[20px]'>
                    {
                        Object.keys(data.AUM).filter(option => option === "Debt").map((split) => {
                            return (
                                <div className='flex flex-col gap-[10px]'>
                                    <div className='bg-[#E2F0FD] p-[10px] font-bold rounded-[10px] flex'> 
                                        <p className='w-[50%]'>{split}</p>
                                        <p className='w-[19.5%] text-right'>{ Object.values(data.AUM[split]).flat().reduce((sum, fund) => sum + fund.amount, 0).toLocaleString("en-IN") }</p>
                                        <p className='w-[16%] text-right'>{ Object.values(data.AUM[split]).flat().reduce((sum, fund) => sum + fund.exp, 0.0).toFixed(1) + "%" }</p>
                                        <p className='w-[14%] text-right'>{ Object.values(data.AUM[split]).flat().length }</p>
                                    </div>
                                    {
                                        Object.keys(data.AUM[split]).map((category) => {
                                            return (
                                                <div>
                                                    <div className='bg-[#F1F7FD] p-[10px] font-semibold rounded-[10px] mb-[10px] flex pr-[20px]'> 
                                                        <p className='w-[50%]'>{category}</p>
                                                        <p className='w-[20%] text-right'>{data.AUM[split][category].reduce((accum, curr) => accum + curr.amount, 0).toLocaleString("en-IN")}</p>
                                                        <p className='w-[16%] text-right'>{data.AUM[split][category].reduce((accum, curr) => accum + curr.exp, 0.0).toFixed(1) + "%" }</p>
                                                        <p className='w-[14%] text-right'>{data.AUM[split][category].length}</p>
                                                    </div>
                                                    <div className='flex flex-col gap-[15px] pl-[10px]'>
                                                        {
                                                            data.AUM[split][category].map(row => 
                                                                <div className='flex'> 
                                                                    <p className='w-[50%] flex items-center'>{row.name} <span className={`ml-[5px] whitespace-nowrap flex items-center ${row.rating === 0 ? "hidden" : [4,5].includes(row.rating) ? "text-[#00A345]" : [3,2].includes(row.rating) ? "text-[#F56902]" : "text-[#E30005]"}`}><Star className='text-[15px] mr-[3px]' />{row.rating}</span></p>
                                                                    <p className='w-[19%] text-right'>{row.amount.toLocaleString("en-IN")}</p>
                                                                    <p className='w-[16%] text-right'>{row.exp.toFixed(1) + "%"}</p>
                                                                    <p className='w-[15%] text-right'></p>
                                                                </div>    
                                                            )
                                                        }
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                
                            )
                        })
                    }
                </div>
            </div>
    </div>
    )
};

export function GoldOthersExposureHoverPage({height}) {
    return (
        <div className='flex flex-col gap-y-[10px] p-[20px]'>
            <div className='text-[#6E6E72] font-medium text-[12px] flex px-[10px]'>
                <p className='w-[50%]'>Asset Class/Category/Scheme Name</p>
                <p className='w-[19%] text-right'>Amount</p>
                <p className='w-[16%] text-right'>% Exposure</p>
                <p className='w-[15%] text-right'>No of funds</p>
            </div>
            <div className=' overflow-auto' style={{maxHeight: height}} >
                <div className='flex flex-col gap-[20px]'>
                    {
                        Object.keys(data.AUM).filter(option => option === "Gold").map((split) => {
                            return (
                                <div className='flex flex-col gap-[10px]'>
                                    <div className='bg-[#E2F0FD] p-[10px] font-bold rounded-[10px] flex'> 
                                        <p className='w-[50%]'>Total Gold & Others</p>
                                        <p className='w-[19.5%] text-right'>{ Object.values(data.AUM[split]).flat().reduce((sum, fund) => sum + fund.amount, 0).toLocaleString("en-IN") }</p>
                                        <p className='w-[16%] text-right'>{ Object.values(data.AUM[split]).flat().reduce((sum, fund) => sum + fund.exp, 0.0).toFixed(1) + "%" }</p>
                                        <p className='w-[14%] text-right'>{ Object.values(data.AUM[split]).flat().length }</p>
                                    </div>
                                    {
                                        Object.keys(data.AUM[split]).map((category) => {
                                            return (
                                                <div>
                                                    <div className='bg-[#F1F7FD] p-[10px] font-semibold rounded-[10px] mb-[10px] flex pr-[20px]'> 
                                                        <p className='w-[50%]'>{category}</p>
                                                        <p className='w-[20%] text-right'>{data.AUM[split][category].reduce((accum, curr) => accum + curr.amount, 0).toLocaleString("en-IN")}</p>
                                                        <p className='w-[16%] text-right'>{data.AUM[split][category].reduce((accum, curr) => accum + curr.exp, 0.0).toFixed(1) + "%" }</p>
                                                        <p className='w-[14%] text-right'>{data.AUM[split][category].length}</p>
                                                    </div>
                                                    <div className='flex flex-col gap-[15px] pl-[10px]'>
                                                        {
                                                            data.AUM[split][category].map(row => 
                                                                <div className='flex'> 
                                                                    <p className='w-[50%] flex items-center'>{row.name} <span className={`ml-[5px] whitespace-nowrap flex items-center ${row.rating === 0 ? "hidden" : [4,5].includes(row.rating) ? "text-[#00A345]" : [3,2].includes(row.rating) ? "text-[#F56902]" : "text-[#E30005]"}`}><Star className='text-[15px] mr-[3px]' />{row.rating}</span></p>
                                                                    <p className='w-[19%] text-right'>{row.amount.toLocaleString("en-IN")}</p>
                                                                    <p className='w-[16%] text-right'>{row.exp.toFixed(1) + "%"}</p>
                                                                    <p className='w-[15%] text-right'></p>
                                                                </div>    
                                                            )
                                                        }
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                
                            )
                        })
                    }
                </div>
            </div>
    </div>
    )
};

export function OvernightLiquidExposureHoverPage({height}) {
    return (
        <div className='flex flex-col gap-y-[10px] p-[20px]'>
            <div className='text-[#6E6E72] font-medium text-[12px] flex px-[10px]'>
                <p className='w-[50%]'>Asset Class/Category/Scheme Name</p>
                <p className='w-[19%] text-right'>Amount</p>
                <p className='w-[16%] text-right'>% Exposure</p>
                <p className='w-[15%] text-right'>No of funds</p>
            </div>
            <div className=' overflow-auto' style={{maxHeight: height}} >
            <div className='flex flex-col gap-[20px]'>
                {
                    Object.keys(data.AUM.Debt).filter(option => option === "Debt - Liquid & Overnight Funds").map((category) => {
                        return (
                            <div>
                                <div className='bg-[#F1F7FD] p-[10px] font-semibold rounded-[10px] mb-[10px] flex pr-[20px]'> 
                                    <p className='w-[50%]'>{category}</p>
                                    <p className='w-[20%] text-right'>{data.AUM.Debt[category].reduce((accum, curr) => accum + curr.amount, 0).toLocaleString("en-IN")}</p>
                                    <p className='w-[16%] text-right'>{data.AUM.Debt[category].reduce((accum, curr) => accum + curr.exp, 0.0).toFixed(1) + "%" }</p>
                                    <p className='w-[14%] text-right'>{data.AUM.Debt[category].length}</p>
                                </div>
                                <div className='flex flex-col gap-[15px] pl-[10px]'>
                                    {
                                        data.AUM.Debt[category].map(row => 
                                            <div className='flex'> 
                                                <p className='w-[50%] flex items-center'>{row.name} <span className={`ml-[5px] whitespace-nowrap flex items-center ${row.rating === 0 ? "hidden" : [4,5].includes(row.rating) ? "text-[#00A345]" : [3,2].includes(row.rating) ? "text-[#F56902]" : "text-[#E30005]"}`}><Star className='text-[15px] mr-[3px]' />{row.rating}</span></p>
                                                <p className='w-[19%] text-right'>{row.amount.toLocaleString("en-IN")}</p>
                                                <p className='w-[16%] text-right'>{row.exp.toFixed(1) + "%"}</p>
                                                <p className='w-[15%] text-right'></p>
                                            </div>    
                                        )
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
    )
};

export function StarRatedHoverPage({ toplevel = "AUM", rate = [0,1,2,3,4,5], fundType = ["Equity", "Debt", "Gold"], height }) {
    return (
      
        <div className='flex flex-col gap-y-[10px] p-[20px]'>
            <div className='text-[#6E6E72] font-medium text-[12px] flex px-[10px]'>
                <p className='w-[50%]'>Asset Class/Category/Scheme Name</p>
                <p className='w-[19%] text-right'>{toplevel === "SIP" ? toplevel + " " : ""}Amount</p>
                <p className='w-[16%] text-right'>% Exposure</p>
                <p className='w-[15%] text-right'>No of funds</p>
            </div>
    
            {/* Darkest */}
            <div className=' overflow-auto' style={{maxHeight: height}} >
                {
                    fundType.length === 3 &&
                    <div className='bg-[#CFE5F8] p-[10px] font-extrabold rounded-[10px] flex mb-[10px]'> 
                        <p className='w-[50%]'>Total {toplevel === "SIP" ? toplevel : ""} {rate[0] === 0 ? " - Not Rated" : rate.length === 1 ? rate[0] + " Star" : "<" + Math.max(...rate) + " Star"} Funds</p>
                        <p className='w-[19.5%] text-right'>{ Object.values(data[toplevel]).flatMap((category) => Object.values(category).flat()).filter(fund => rate.includes(fund.rating)).reduce((sum, fund) => sum + fund.amount, 0).toLocaleString("en-IN") }</p>
                        <p className='w-[16%] text-right'>{ Object.values(data[toplevel]).flatMap((category) => Object.values(category).flat()).filter(fund => rate.includes(fund.rating)).reduce((sum, fund) => sum + fund.exp, 0.0).toFixed(1) + "%" }</p>
                        <p className='w-[14%] text-right'>{ Object.values(data[toplevel]).flatMap((category) => Object.values(category).flat()).filter(fund => rate.includes(fund.rating)).length }</p>
                    </div>
                }
                <div className='flex flex-col gap-[20px]'>
                    {
                        Object.keys(data[toplevel]).filter(option => fundType.includes(option)).map((split) => {
                            return (
                                Object.values(data[toplevel][split]).flat().filter(fund => rate.includes(fund.rating)).length > 0 ?
                                    <div className='flex flex-col gap-[10px]'>
                                        <div className='bg-[#E2F0FD] p-[10px] font-bold rounded-[10px] flex'> 
                                            <p className='w-[50%]'>{fundType.length === 3 ? split : "Total " + split + (rate[0] === 0 ? "Not Rated" : rate.length === 1 ? " - " + rate[0] : " <" + Math.max(...rate)) + " Star Funds"}</p>
                                            <p className='w-[19.5%] text-right'>{ Object.values(data[toplevel][split]).flat().filter(fund => rate.includes(fund.rating)).reduce((sum, fund) => sum + fund.amount, 0).toLocaleString("en-IN") }</p>
                                            <p className='w-[16%] text-right'>{ Object.values(data[toplevel][split]).flat().filter(fund => rate.includes(fund.rating)).reduce((sum, fund) => sum + fund.exp, 0.0).toFixed(1) + "%" }</p>
                                            <p className='w-[14%] text-right'>{ Object.values(data[toplevel][split]).flat().filter(fund => rate.includes(fund.rating)).length }</p>
                                        </div>
                                        {
                                            Object.keys(data[toplevel][split]).map((category) => {
                                                return (
                                                    data[toplevel][split][category].filter(fund => rate.includes(fund.rating)).length > 0 ?
                                                    <div>
                                                            <div className='bg-[#F1F7FD] p-[10px] font-semibold rounded-[10px] mb-[10px] flex pr-[20px]'> 
                                                                <p className='w-[50%]'>{category}</p>
                                                                <p className='w-[20%] text-right'>{data[toplevel][split][category].filter(fund => rate.includes(fund.rating)).reduce((accum, curr) => accum + curr.amount, 0).toLocaleString("en-IN")}</p>
                                                                <p className='w-[16%] text-right'>{data[toplevel][split][category].filter(fund => rate.includes(fund.rating)).reduce((accum, curr) => accum + curr.exp, 0.0).toFixed(1) + "%" }</p>
                                                                <p className='w-[14%] text-right'>{data[toplevel][split][category].filter(fund => rate.includes(fund.rating)).length}</p>
                                                            </div>
                                                            <div className='flex flex-col gap-[15px] pl-[10px]'>
                                                                {
                                                                    data[toplevel][split][category].filter(fund => rate.includes(fund.rating)).map(row => 
                                                                        <div className='flex'> 
                                                                            <p className='w-[50%] flex items-center'>{row.name} <span className={`ml-[5px] whitespace-nowrap flex items-center ${row.rating === 0 ? "text-[#6E6E72]" : [4,5].includes(row.rating) ? "text-[#00A345]" : [3,2].includes(row.rating) ? "text-[#F56902]" : "text-[#E30005]"}`}><Star className='text-[15px] mr-[3px]' />{row.rating === 0 ? "Not Rated" : row.rating}</span></p>
                                                                            <p className='w-[19%] text-right'>{row.amount.toLocaleString("en-IN")}</p>
                                                                            <p className='w-[16%] text-right'>{row.exp.toFixed(1) + "%"}</p>
                                                                            <p className='w-[15%] text-right'></p>
                                                                        </div>    
                                                                    )
                                                                }
                                                            </div>
                                                    </div>
                                                    :
                                                    <></>
                                                )
                                            })
                                        }
                                    </div>
                                :
                                <></>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
};

export function FISelectHoverPage({height}) {
    return (
      
      <div className='flex flex-col gap-y-[10px] p-[20px]'>
          <div className='text-[#6E6E72] font-medium text-[12px] flex px-[10px]'>
              <p className='w-[50%]'>Asset Class/Category/Scheme Name</p>
              <p className='w-[19%] text-right'>Amount</p>
              <p className='w-[16%] text-right'>% Exposure</p>
              <p className='w-[15%] text-right'>No of funds</p>
          </div>
  
          {/* Darkest */}
          <div className=' overflow-auto' style={{maxHeight: height}} >
              <div className='bg-[#CFE5F8] p-[10px] font-extrabold rounded-[10px] flex mb-[10px]'> 
                  <p className='w-[50%]'>Total - FI Select Funds</p>
                  <p className='w-[19.5%] text-right'>{ Object.values(data.FISelect).flatMap((category) => Object.values(category).flat()).reduce((sum, fund) => sum + fund.amount, 0).toLocaleString("en-IN") }</p>
                  <p className='w-[16%] text-right'>{ Object.values(data.FISelect).flatMap((category) => Object.values(category).flat()).reduce((sum, fund) => sum + fund.exp, 0.0).toFixed(1) + "%" }</p>
                  <p className='w-[14%] text-right'>{ Object.values(data.FISelect).flatMap((category) => Object.values(category).flat()).length }</p>
              </div>
              <div className='flex flex-col gap-[20px]'>
                  {
                      Object.keys(data.FISelect).map((split) => {
                          return (
                              <div className='flex flex-col gap-[10px]'>
                                  <div className='bg-[#E2F0FD] p-[10px] font-bold rounded-[10px] flex'> 
                                      <p className='w-[50%]'>{split}</p>
                                      <p className='w-[19.5%] text-right'>{ Object.values(data.FISelect[split]).flat().reduce((sum, fund) => sum + fund.amount, 0).toLocaleString("en-IN") }</p>
                                      <p className='w-[16%] text-right'>{ Object.values(data.FISelect[split]).flat().reduce((sum, fund) => sum + fund.exp, 0.0).toFixed(1) + "%" }</p>
                                      <p className='w-[14%] text-right'>{ Object.values(data.FISelect[split]).flat().length }</p>
                                  </div>
                                  {
                                      Object.keys(data.FISelect[split]).map((category) => {
                                          return (
                                              <div>
                                                  <div className='bg-[#F1F7FD] p-[10px] font-semibold rounded-[10px] mb-[10px] flex pr-[20px]'> 
                                                      <p className='w-[50%]'>{category}</p>
                                                      <p className='w-[20%] text-right'>{data.FISelect[split][category].reduce((accum, curr) => accum + curr.amount, 0).toLocaleString("en-IN")}</p>
                                                      <p className='w-[16%] text-right'>{data.FISelect[split][category].reduce((accum, curr) => accum + curr.exp, 0.0).toFixed(1) + "%" }</p>
                                                      <p className='w-[14%] text-right'>{data.FISelect[split][category].length}</p>
                                                  </div>
                                                  <div className='flex flex-col gap-[15px] pl-[10px]'>
                                                      {
                                                          data.FISelect[split][category].map(row => 
                                                              <div className='flex'> 
                                                                  <p className='w-[50%] flex items-center'>{row.name} <span className={`ml-[5px] whitespace-nowrap flex items-center ${row.rating === 0 ? "hidden" : [4,5].includes(row.rating) ? "text-[#00A345]" : [3,2].includes(row.rating) ? "text-[#F56902]" : "text-[#E30005]"}`}><Star className='text-[15px] mr-[3px]' />{row.rating}</span></p>
                                                                  <p className='w-[19%] text-right'>{row.amount.toLocaleString("en-IN")}</p>
                                                                  <p className='w-[16%] text-right'>{row.exp.toFixed(1) + "%"}</p>
                                                                  <p className='w-[15%] text-right'></p>
                                                              </div>    
                                                          )
                                                      }
                                                  </div>
                                              </div>
                                          )
                                      })
                                  }
                              </div>
                              
                          )
                      })
                  }
              </div>
          </div>
      </div>
    )
};

export function HighestAUMHoverPage({height}) {

    const filteredData = {
        AUM: {
          Equity: {
            "Equity - Blend": [data.AUM.Equity["Equity - Blend"].reduce((a, b) => (a.amount > b.amount ? a : b))],
          },
        },
      };

    return (
      
      <div className='flex flex-col gap-y-[10px] p-[20px]'>
          <div className='text-[#6E6E72] font-medium text-[12px] flex px-[10px]'>
              <p className='w-[50%]'>Asset Class/Category/Scheme Name</p>
              <p className='w-[19%] text-right'>Amount</p>
              <p className='w-[16%] text-right'>% Exposure</p>
              <p className='w-[15%] text-right'>No of funds</p>
          </div>
  
          {/* Darkest */}
          <div className=' overflow-auto' style={{maxHeight: height}} >
              <div className='bg-[#CFE5F8] p-[10px] font-extrabold rounded-[10px] flex mb-[10px]'> 
                  <p className='w-[50%]'>Mirae Asset Investment Managers (India) Private Limited</p>
                  <p className='w-[19.5%] text-right'>{ Object.values(filteredData.AUM).flatMap((category) => Object.values(category).flat()).reduce((sum, fund) => sum + fund.amount, 0).toLocaleString("en-IN") }</p>
                  <p className='w-[16%] text-right'>{ Object.values(filteredData.AUM).flatMap((category) => Object.values(category).flat()).reduce((sum, fund) => sum + fund.exp, 0.0).toFixed(1) + "%" }</p>
                  <p className='w-[14%] text-right'>{ Object.values(filteredData.AUM).flatMap((category) => Object.values(category).flat()).length }</p>
              </div>
              <div className='flex flex-col gap-[20px]'>
                  {
                      Object.keys(filteredData.AUM).map((split) => {
                          return (
                              <div className='flex flex-col gap-[10px]'>
                                  <div className='bg-[#E2F0FD] p-[10px] font-bold rounded-[10px] flex'> 
                                      <p className='w-[50%]'>{split}</p>
                                      <p className='w-[19.5%] text-right'>{ Object.values(filteredData.AUM[split]).flat().reduce((sum, fund) => sum + fund.amount, 0).toLocaleString("en-IN") }</p>
                                      <p className='w-[16%] text-right'>{ Object.values(filteredData.AUM[split]).flat().reduce((sum, fund) => sum + fund.exp, 0.0).toFixed(1) + "%" }</p>
                                      <p className='w-[14%] text-right'>{ Object.values(filteredData.AUM[split]).flat().length }</p>
                                  </div>
                                  {
                                      Object.keys(filteredData.AUM[split]).map((category) => {
                                          return (
                                              <div>
                                                  <div className='bg-[#F1F7FD] p-[10px] font-semibold rounded-[10px] mb-[10px] flex pr-[20px]'> 
                                                      <p className='w-[50%]'>{category}</p>
                                                      <p className='w-[20%] text-right'>{filteredData.AUM[split][category].reduce((accum, curr) => accum + curr.amount, 0).toLocaleString("en-IN")}</p>
                                                      <p className='w-[16%] text-right'>{filteredData.AUM[split][category].reduce((accum, curr) => accum + curr.exp, 0.0).toFixed(1) + "%" }</p>
                                                      <p className='w-[14%] text-right'>{filteredData.AUM[split][category].length}</p>
                                                  </div>
                                                  <div className='flex flex-col gap-[15px] pl-[10px]'>
                                                      {
                                                          filteredData.AUM[split][category].map(row => 
                                                              <div className='flex'> 
                                                                  <p className='w-[50%] flex items-center'>{row.name} <span className={`ml-[5px] whitespace-nowrap flex items-center ${row.rating === 0 ? "hidden" : [4,5].includes(row.rating) ? "text-[#00A345]" : [3,2].includes(row.rating) ? "text-[#F56902]" : "text-[#E30005]"}`}><Star className='text-[15px] mr-[3px]' />{row.rating}</span></p>
                                                                  <p className='w-[19%] text-right'>{row.amount.toLocaleString("en-IN")}</p>
                                                                  <p className='w-[16%] text-right'>{row.exp.toFixed(1) + "%"}</p>
                                                                  <p className='w-[15%] text-right'></p>
                                                              </div>    
                                                          )
                                                      }
                                                  </div>
                                              </div>
                                          )
                                      })
                                  }
                              </div>
                              
                          )
                      })
                  }
              </div>
          </div>
      </div>
    )
};

export function HighestFundHoverPage({height}) {

    const filteredData = {
        AUM: {
          Equity: {
            "Equity - Blend": [data.AUM.Equity["Equity - Blend"].reduce((a, b) => (a.amount > b.amount ? a : b))],
          },
        },
      };

    return (
      
      <div className='flex flex-col gap-y-[10px] p-[20px]'>
          <div className='text-[#6E6E72] font-medium text-[12px] flex px-[10px]'>
              <p className='w-[50%]'>Asset Class/Category/Scheme Name</p>
              <p className='w-[19%] text-right'>Amount</p>
              <p className='w-[16%] text-right'>% Exposure</p>
              {/* <p className='w-[15%] text-right'>No of funds</p> */}
          </div>
  
          {/* Darkest */}
          <div className=' overflow-auto' style={{maxHeight: height}} >
              <div className='flex flex-col gap-[20px]'>
                  {
                      Object.keys(filteredData.AUM).map((split) => {
                          return (
                              <div className='flex flex-col gap-[10px]'>
                                  {
                                      Object.keys(filteredData.AUM[split]).map((category) => {
                                          return (
                                              <div>
                                                  <div className='flex flex-col gap-[15px] pl-[10px]'>
                                                      {
                                                          filteredData.AUM[split][category].map(row => 
                                                              <div className='flex'> 
                                                                  <p className='w-[50%] flex items-center'>{row.name} <span className={`ml-[5px] whitespace-nowrap flex items-center ${row.rating === 0 ? "hidden" : [4,5].includes(row.rating) ? "text-[#00A345]" : [3,2].includes(row.rating) ? "text-[#F56902]" : "text-[#E30005]"}`}><Star className='text-[15px] mr-[3px]' />{row.rating}</span></p>
                                                                  <p className='w-[19%] text-right'>{row.amount.toLocaleString("en-IN")}</p>
                                                                  <p className='w-[16%] text-right'>{row.exp.toFixed(1) + "%"}</p>
                                                                  {/* <p className='w-[15%] text-right'></p> */}
                                                              </div>    
                                                          )
                                                      }
                                                  </div>
                                              </div>
                                          )
                                      })
                                  }
                              </div>
                              
                          )
                      })
                  }
              </div>
          </div>
      </div>
    )
};

export function NonDebtWithG3ExposureHoverPage({height}) {

    const categoriesToFilter = ["Equity", "Gold"];

    const filteredData = {
    AUM: Object.fromEntries(
        categoriesToFilter.map((category) => {
        const filteredCategory = Object.entries(data.AUM[category]).map(
            ([subCategory, funds]) => [
            subCategory,
            funds.filter((fund) => fund.exp < 3),
            ]
        );
        return [category, Object.fromEntries(filteredCategory)];
        })
    ),
    };


    return (
      
      <div className='flex flex-col gap-y-[10px] p-[20px]'>
          <div className='text-[#6E6E72] font-medium text-[12px] flex px-[10px]'>
              <p className='w-[50%]'>Asset Class/Category/Scheme Name</p>
              <p className='w-[19%] text-right'>Amount</p>
              <p className='w-[16%] text-right'>% Exposure</p>
              <p className='w-[15%] text-right'>No of funds</p>
          </div>
  
          {/* Darkest */}
          <div className=' overflow-auto' style={{maxHeight: height}} >
              <div className='bg-[#CFE5F8] p-[10px] font-extrabold rounded-[10px] flex mb-[10px]'> 
                  <p className='w-[50%]'>{"Total - Non Debt Funds with <3% Exposure"}</p>
                  <p className='w-[19.5%] text-right'>{ Object.values(filteredData.AUM).flatMap((category) => Object.values(category).flat()).reduce((sum, fund) => sum + fund.amount, 0).toLocaleString("en-IN") }</p>
                  <p className='w-[16%] text-right'>{ Object.values(filteredData.AUM).flatMap((category) => Object.values(category).flat()).reduce((sum, fund) => sum + fund.exp, 0.0).toFixed(1) + "%" }</p>
                  <p className='w-[14%] text-right'>{ Object.values(filteredData.AUM).flatMap((category) => Object.values(category).flat()).length }</p>
              </div>
              <div className='flex flex-col gap-[20px]'>
                  {
                      Object.keys(filteredData.AUM).map((split) => {
                          return (
                              <div className='flex flex-col gap-[10px]'>
                                  <div className='bg-[#E2F0FD] p-[10px] font-bold rounded-[10px] flex'> 
                                      <p className='w-[50%]'>{split}</p>
                                      <p className='w-[19.5%] text-right'>{ Object.values(filteredData.AUM[split]).flat().reduce((sum, fund) => sum + fund.amount, 0).toLocaleString("en-IN") }</p>
                                      <p className='w-[16%] text-right'>{ Object.values(filteredData.AUM[split]).flat().reduce((sum, fund) => sum + fund.exp, 0.0).toFixed(1) + "%" }</p>
                                      <p className='w-[14%] text-right'>{ Object.values(filteredData.AUM[split]).flat().length }</p>
                                  </div>
                                  {
                                    
                                      Object.keys(filteredData.AUM[split]).map((category) => {
                                          return (
                                            filteredData.AUM[split][category].length > 0 &&
                                              <div>
                                                  <div className='bg-[#F1F7FD] p-[10px] font-semibold rounded-[10px] mb-[10px] flex pr-[20px]'> 
                                                      <p className='w-[50%]'>{category}</p>
                                                      <p className='w-[20%] text-right'>{filteredData.AUM[split][category].reduce((accum, curr) => accum + curr.amount, 0).toLocaleString("en-IN")}</p>
                                                      <p className='w-[16%] text-right'>{filteredData.AUM[split][category].reduce((accum, curr) => accum + curr.exp, 0.0).toFixed(1) + "%" }</p>
                                                      <p className='w-[14%] text-right'>{filteredData.AUM[split][category].length}</p>
                                                  </div>
                                                  <div className='flex flex-col gap-[15px] pl-[10px]'>
                                                      {
                                                          filteredData.AUM[split][category].map(row => 
                                                              <div className='flex'> 
                                                                  <p className='w-[50%] flex items-center'>{row.name} <span className={`ml-[5px] whitespace-nowrap flex items-center ${row.rating === 0 ? "hidden" : [4,5].includes(row.rating) ? "text-[#00A345]" : [3,2].includes(row.rating) ? "text-[#F56902]" : "text-[#E30005]"}`}><Star className='text-[15px] mr-[3px]' />{row.rating}</span></p>
                                                                  <p className='w-[19%] text-right'>{row.amount.toLocaleString("en-IN")}</p>
                                                                  <p className='w-[16%] text-right'>{row.exp.toFixed(1) + "%"}</p>
                                                                  <p className='w-[15%] text-right'></p>
                                                              </div>    
                                                          )
                                                      }
                                                  </div>
                                              </div>
                                          )
                                      })
                                  }
                              </div>
                              
                          )
                      })
                  }
              </div>
          </div>
      </div>
    )
};

export function ELSSExposureHoverPage({height}) {

    const filteredData = {
        AUM: {
          Equity: {
            "Equity - Blend": data.AUM.Equity["Equity - Blend"].filter(fund => fund.name.includes("Mirae") || fund.name.includes("Invesco"))
          },
        },
    };

    filteredData.AUM.Equity["Equity - Blend"][1].rating = 5;

    return (
      
      <div className='flex flex-col gap-y-[10px] p-[20px]'>
          <div className='text-[#6E6E72] font-medium text-[12px] flex px-[10px]'>
              <p className='w-[50%]'>Asset Class/Category/Scheme Name</p>
              <p className='w-[19%] text-right'>Amount</p>
              <p className='w-[16%] text-right'>% Exposure</p>
              <p className='w-[15%] text-right'>No of funds</p>
          </div>
  
          {/* Darkest */}
          <div className=' overflow-auto' style={{maxHeight: height}} >
              <div className='flex flex-col'>
                    <div className='bg-[#F1F7FD] p-[10px] font-semibold rounded-[10px] mb-[10px] flex pr-[20px]'> 
                        <p className='w-[50%]'>ELSS Exposure</p>
                        <p className='w-[20%] text-right'>{ Object.values(filteredData.AUM).flatMap((category) => Object.values(category).flat()).reduce((sum, fund) => sum + fund.amount, 0).toLocaleString("en-IN") }</p>
                        <p className='w-[16%] text-right'>{ Object.values(filteredData.AUM).flatMap((category) => Object.values(category).flat()).reduce((sum, fund) => sum + fund.exp, 0.0).toFixed(1) + "%" }</p>
                        <p className='w-[14%] text-right'>{ Object.values(filteredData.AUM).flatMap((category) => Object.values(category).flat()).length }</p>
                    </div>
                  {
                      Object.keys(filteredData.AUM).map((split) => {
                          return (
                              <div className='flex flex-col gap-[10px]'>
                                  {
                                      Object.keys(filteredData.AUM[split]).map((category) => {
                                          return (
                                              <div>
                                                  <div className='flex flex-col gap-[15px] pl-[10px]'>
                                                        {
                                                            filteredData.AUM[split][category].map(row => 
                                                                <div className='flex'> 
                                                                    <p className='w-[50%] flex items-center'>{row.name} <span className={`ml-[5px] whitespace-nowrap flex items-center ${row.rating === 0 ? "hidden" : [4,5].includes(row.rating) ? "text-[#00A345]" : [3,2].includes(row.rating) ? "text-[#F56902]" : "text-[#E30005]"}`}><Star className='text-[15px] mr-[3px]' />{row.rating}</span></p>
                                                                    <p className='w-[19%] text-right'>{row.amount.toLocaleString("en-IN")}</p>
                                                                    <p className='w-[16%] text-right'>{row.exp.toFixed(1) + "%"}</p>
                                                                    <p className='w-[15%] text-right'></p>
                                                                </div>  
                                                            )
                                                        }
                                                  </div>
                                              </div>
                                          )
                                      })
                                  }
                              </div>
                              
                          )
                      })
                  }
              </div>
          </div>
      </div>
    )
};

export function PortfolioExpenseRatioHoverPage({height}) {
    return (
        <div className='flex flex-col gap-y-[10px] p-[20px]'>
            <div className='text-[#6E6E72] font-medium text-[12px] flex px-[10px]'>
                <p className='w-[50%]'>Asset Class/Category/Scheme Name</p>
                <p className='w-[16%] text-right'>Exp Ratio</p>
                <p className='w-[18%] text-right'>Amount</p>
                <p className='w-[15.5%] text-right'>% Exposure</p>
            </div>
            <div className=' overflow-auto' style={{maxHeight: height}} >
                <div className='bg-[#CFE5F8] p-[10px] font-extrabold rounded-[10px] flex mb-[10px]'> 
                    <p className='w-[50%]'>Total Portfolio Expense Ratio</p>
                    <p className='w-[16%] text-right'>{ Object.values(data.PortfolioExpense).flatMap((category) => Object.values(category).flat()).reduce((sum, fund) => sum + fund.ratio, 0.0).toFixed(1) + "%" }</p>
                    <p className='w-[18%] text-right'>{ Object.values(data.PortfolioExpense).flatMap((category) => Object.values(category).flat()).reduce((sum, fund) => sum + fund.amount, 0).toLocaleString("en-IN") }</p>
                    <p className='w-[16%] text-right'>{ Object.values(data.PortfolioExpense).flatMap((category) => Object.values(category).flat()).reduce((sum, fund) => sum + fund.exp, 0.0).toFixed(1) + "%" }</p>
                </div>
                <div className='flex flex-col gap-[20px]'>
                    {
                        Object.keys(data.PortfolioExpense).map((split) => {
                            return (
                                <div className='flex flex-col gap-[10px]'>
                                    <div className='bg-[#E2F0FD] p-[10px] font-bold rounded-[10px] flex'> 
                                        <p className='w-[50%]'>{split}</p>
                                        <p className='w-[16%] text-right'>{ Object.values(data.PortfolioExpense[split]).flat().reduce((sum, fund) => sum + fund.ratio, 0.0).toFixed(1) + "%" }</p>
                                        <p className='w-[18%] text-right'>{ Object.values(data.PortfolioExpense[split]).flat().reduce((sum, fund) => sum + fund.amount, 0).toLocaleString("en-IN") }</p>
                                        <p className='w-[16%] text-right'>{ Object.values(data.PortfolioExpense[split]).flat().reduce((sum, fund) => sum + fund.exp, 0.0).toFixed(1) + "%" }</p>
                                    </div>
                                    {
                                        Object.keys(data.PortfolioExpense[split]).map((category) => {
                                            return (
                                                <div>
                                                    <div className='bg-[#F1F7FD] p-[10px] font-semibold rounded-[10px] mb-[10px] flex pr-[20px]'> 
                                                        <p className='w-[50%]'>{category}</p>
                                                        <p className='w-[20%] text-right'>{data.PortfolioExpense[split][category].reduce((sum, fund) => sum + fund.ratio, 0.0).toFixed(1) + "%"}</p>
                                                        <p className='w-[20%] text-right'>{data.PortfolioExpense[split][category].reduce((accum, curr) => accum + curr.amount, 0).toLocaleString("en-IN")}</p>
                                                        <p className='w-[16%] text-right'>{data.PortfolioExpense[split][category].reduce((accum, curr) => accum + curr.exp, 0.0).toFixed(1) + "%" }</p>
                                                    </div>
                                                    <div className='flex flex-col gap-[15px] pl-[10px]'>
                                                        {
                                                            data.PortfolioExpense[split][category].map(row => 
                                                                <div className='flex'> 
                                                                    <p className='w-[50%] flex items-center'>{row.name} <span className={`ml-[5px] whitespace-nowrap flex items-center ${row.rating === 0 ? "hidden" : [4,5].includes(row.rating) ? "text-[#00A345]" : [3,2].includes(row.rating) ? "text-[#F56902]" : "text-[#E30005]"}`}><Star className='text-[15px] mr-[3px]' />{row.rating}</span></p>
                                                                    <p className='w-[15%] text-right'>{row.ratio.toFixed(1) + "%"}</p>
                                                                    <p className='w-[18.7%] text-right'>{row.amount.toLocaleString("en-IN")}</p>
                                                                    <p className='w-[15%] text-right'>{row.exp.toFixed(1) + "%"}</p>
                                                                </div>    
                                                            )
                                                        }
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
};

export function ActiveLargeCapHoverPage({height}) {

    const filteredData = {
        AUM: {
          Equity: {
            "Hybrid - Aggressive Hybrid Fund": data.AUM.Equity["Hybrid - Aggressive Hybrid Fund"]
          },
        },
    };

    return (
      
      <div className='flex flex-col gap-y-[10px] p-[20px]'>
          <div className='text-[#6E6E72] font-medium text-[12px] flex px-[10px]'>
              <p className='w-[50%]'>Asset Class/Category/Scheme Name</p>
              <p className='w-[19%] text-right'>Amount</p>
              <p className='w-[16%] text-right'>% Exposure</p>
              <p className='w-[15%] text-right'>No of funds</p>
          </div>
  
          {/* Darkest */}
          <div className=' overflow-auto' style={{maxHeight: height}} >
              <div className='flex flex-col'>
                    <div className='bg-[#F1F7FD] p-[10px] font-semibold rounded-[10px] mb-[10px] flex pr-[20px]'> 
                        <p className='w-[50%]'>Equity - Active Large Cap Fund</p>
                        <p className='w-[20%] text-right'>{ Object.values(filteredData.AUM).flatMap((category) => Object.values(category).flat()).reduce((sum, fund) => sum + fund.amount, 0).toLocaleString("en-IN") }</p>
                        <p className='w-[16%] text-right'>{ Object.values(filteredData.AUM).flatMap((category) => Object.values(category).flat()).reduce((sum, fund) => sum + fund.exp, 0.0).toFixed(1) + "%" }</p>
                        <p className='w-[14%] text-right'>{ Object.values(filteredData.AUM).flatMap((category) => Object.values(category).flat()).length }</p>
                    </div>
                  {
                      Object.keys(filteredData.AUM).map((split) => {
                          return (
                              <div className='flex flex-col gap-[10px]'>
                                  {
                                      Object.keys(filteredData.AUM[split]).map((category) => {
                                          return (
                                              <div>
                                                  <div className='flex flex-col gap-[15px] pl-[10px]'>
                                                        {
                                                            filteredData.AUM[split][category].map(row => 
                                                                <div className='flex'> 
                                                                    <p className='w-[50%] flex items-center'>{row.name} <span className={`ml-[5px] whitespace-nowrap flex items-center ${row.rating === 0 ? "hidden" : [4,5].includes(row.rating) ? "text-[#00A345]" : [3,2].includes(row.rating) ? "text-[#F56902]" : "text-[#E30005]"}`}><Star className='text-[15px] mr-[3px]' />{row.rating}</span></p>
                                                                    <p className='w-[19%] text-right'>{row.amount.toLocaleString("en-IN")}</p>
                                                                    <p className='w-[16%] text-right'>{row.exp.toFixed(1) + "%"}</p>
                                                                    <p className='w-[15%] text-right'></p>
                                                                </div>  
                                                            )
                                                        }
                                                  </div>
                                              </div>
                                          )
                                      })
                                  }
                              </div>
                              
                          )
                      })
                  }
              </div>
          </div>
      </div>
    )
};

export function SectorThematicHoverPage({height}) {

    const filteredData = {
        AUM: {
          Equity: {
            "Equity - Sector/Thematic": data.AUM.Equity["Equity - Sector/Thematic"]
          },
        },
    };

    filteredData.AUM.Equity['Equity - Sector/Thematic'][0].rating = 4
    filteredData.AUM.Equity['Equity - Sector/Thematic'][1].rating = 4

    return (
      
      <div className='flex flex-col gap-y-[10px] p-[20px]'>
          <div className='text-[#6E6E72] font-medium text-[12px] flex px-[10px]'>
              <p className='w-[50%]'>Asset Class/Category/Scheme Name</p>
              <p className='w-[19%] text-right'>Amount</p>
              <p className='w-[16%] text-right'>% Exposure</p>
              <p className='w-[15%] text-right'>No of funds</p>
          </div>
  
          {/* Darkest */}
          <div className=' overflow-auto' style={{maxHeight: height}} >
              <div className='flex flex-col'>
                    <div className='bg-[#F1F7FD] p-[10px] font-semibold rounded-[10px] mb-[10px] flex pr-[20px]'> 
                        <p className='w-[50%]'>Equity - Sector/Thematic</p>
                        <p className='w-[20%] text-right'>{ Object.values(filteredData.AUM).flatMap((category) => Object.values(category).flat()).reduce((sum, fund) => sum + fund.amount, 0).toLocaleString("en-IN") }</p>
                        <p className='w-[16%] text-right'>{ Object.values(filteredData.AUM).flatMap((category) => Object.values(category).flat()).reduce((sum, fund) => sum + fund.exp, 0.0).toFixed(1) + "%" }</p>
                        <p className='w-[14%] text-right'>{ Object.values(filteredData.AUM).flatMap((category) => Object.values(category).flat()).length }</p>
                    </div>
                  {
                      Object.keys(filteredData.AUM).map((split) => {
                          return (
                              <div className='flex flex-col gap-[10px]'>
                                  {
                                      Object.keys(filteredData.AUM[split]).map((category) => {
                                          return (
                                              <div>
                                                  <div className='flex flex-col gap-[15px] pl-[10px]'>
                                                        {
                                                            filteredData.AUM[split][category].map(row => 
                                                                <div className='flex'> 
                                                                    <p className='w-[50%] flex items-center'>{row.name} <span className={`ml-[5px] whitespace-nowrap flex items-center ${row.rating === 0 ? "hidden" : [4,5].includes(row.rating) ? "text-[#00A345]" : [3,2].includes(row.rating) ? "text-[#F56902]" : "text-[#E30005]"}`}><Star className='text-[15px] mr-[3px]' />{row.rating}</span></p>
                                                                    <p className='w-[19%] text-right'>{row.amount.toLocaleString("en-IN")}</p>
                                                                    <p className='w-[16%] text-right'>{row.exp.toFixed(1) + "%"}</p>
                                                                    <p className='w-[15%] text-right'></p>
                                                                </div>  
                                                            )
                                                        }
                                                  </div>
                                              </div>
                                          )
                                      })
                                  }
                              </div>
                              
                          )
                      })
                  }
              </div>
          </div>
      </div>
    )
};

export function SmallCapHoverPage({height}) {

    const filteredData = {
        AUM: {
          Equity: {
            "Equity - Mid/Small": data.AUM.Equity["Equity - Mid/Small"]
          },
        },
    };

    filteredData.AUM.Equity['Equity - Mid/Small'][0].rating = 5;
    filteredData.AUM.Equity['Equity - Mid/Small'][0].exp = 8.96;


    return (
      <div className='flex flex-col gap-y-[10px] p-[20px]'>
            <div className='text-[#6E6E72] font-medium text-[12px] flex px-[10px]'>
                <p className='w-[50%]'>Asset Class/Category/Scheme Name</p>
                <p className='w-[19%] text-right'>Amount</p>
                <p className='w-[16%] text-right'>% Exposure</p>
                <p className='w-[15%] text-right'>No of funds</p>
            </div>
    
            {/* Darkest */}
            <div className=' overflow-auto' style={{maxHeight: height}} >
                <div className='flex flex-col'>
                        <div className='bg-[#F1F7FD] p-[10px] font-semibold rounded-[10px] mb-[10px] flex pr-[20px]'> 
                            <p className='w-[50%]'>Equity - Small Cap</p>
                            <p className='w-[20%] text-right'>{ Object.values(filteredData.AUM).flatMap((category) => Object.values(category).flat()).reduce((sum, fund) => sum + fund.amount, 0).toLocaleString("en-IN") }</p>
                            <p className='w-[16%] text-right'>{ Object.values(filteredData.AUM).flatMap((category) => Object.values(category).flat()).reduce((sum, fund) => sum + fund.exp, 0.0).toFixed(1) + "%" }</p>
                            <p className='w-[14%] text-right'>{ Object.values(filteredData.AUM).flatMap((category) => Object.values(category).flat()).length }</p>
                        </div>
                    {
                        Object.keys(filteredData.AUM).map((split) => {
                            return (
                                <div className='flex flex-col gap-[10px]'>
                                    {
                                        Object.keys(filteredData.AUM[split]).map((category) => {
                                            return (
                                                <div>
                                                    <div className='flex flex-col gap-[15px] pl-[10px]'>
                                                            {
                                                                filteredData.AUM[split][category].map(row => 
                                                                    <div className='flex'> 
                                                                        <p className='w-[50%] flex items-center'>{row.name} <span className={`ml-[5px] whitespace-nowrap flex items-center ${row.rating === 0 ? "hidden" : [4,5].includes(row.rating) ? "text-[#00A345]" : [3,2].includes(row.rating) ? "text-[#F56902]" : "text-[#E30005]"}`}><Star className='text-[15px] mr-[3px]' />{row.rating}</span></p>
                                                                        <p className='w-[19%] text-right'>{row.amount.toLocaleString("en-IN")}</p>
                                                                        <p className='w-[16%] text-right'>{row.exp.toFixed(1) + "%"}</p>
                                                                        <p className='w-[15%] text-right'></p>
                                                                    </div>  
                                                                )
                                                            }
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                
                            )
                        })
                    }
                </div>
            </div>
      </div>
    )
};

export function SpecificEquityHoverPage({ specific = "Equity - Blend", height}) {

    const filteredData = {
        AUM: {
          Equity: {
            specific: data.AUM.Equity[ (specific === "Equity - Value" || specific === "Equity - Global") ? "Equity - Mid/Small" : specific]
          },
        },
    };

    return (
      <div className='flex flex-col gap-y-[10px] p-[20px]'>
            <div className='text-[#6E6E72] font-medium text-[12px] flex px-[10px]'>
                <p className='w-[50%]'>Asset Class/Category/Scheme Name</p>
                <p className='w-[19%] text-right'>Amount</p>
                <p className='w-[16%] text-right'>% Exposure</p>
                <p className='w-[15%] text-right'>No of funds</p>
            </div>
    
            {/* Darkest */}
            <div className=' overflow-auto' style={{maxHeight: height}} >
                <div className='flex flex-col'>
                        <div className='bg-[#F1F7FD] p-[10px] font-semibold rounded-[10px] mb-[10px] flex pr-[20px]'> 
                            <p className='w-[50%]'>{specific}</p>
                            <p className='w-[20%] text-right'>{ Object.values(filteredData.AUM).flatMap((category) => Object.values(category).flat()).reduce((sum, fund) => sum + fund.amount, 0).toLocaleString("en-IN") }</p>
                            <p className='w-[16%] text-right'>{ Object.values(filteredData.AUM).flatMap((category) => Object.values(category).flat()).reduce((sum, fund) => sum + fund.exp, 0.0).toFixed(1) + "%" }</p>
                            <p className='w-[14%] text-right'>{ Object.values(filteredData.AUM).flatMap((category) => Object.values(category).flat()).length }</p>
                        </div>
                    {
                        Object.keys(filteredData.AUM).map((split) => {
                            return (
                                <div className='flex flex-col gap-[10px]'>
                                    {
                                        Object.keys(filteredData.AUM[split]).map((category) => {
                                            return (
                                                <div>
                                                    <div className='flex flex-col gap-[15px] pl-[10px]'>
                                                            {
                                                                filteredData.AUM[split][category].map(row => 
                                                                    <div className='flex'> 
                                                                        <p className='w-[50%] flex items-center'>{row.name} <span className={`ml-[5px] whitespace-nowrap flex items-center ${row.rating === 0 ? "hidden" : [4,5].includes(row.rating) ? "text-[#00A345]" : [3,2].includes(row.rating) ? "text-[#F56902]" : "text-[#E30005]"}`}><Star className='text-[15px] mr-[3px]' />{row.rating}</span></p>
                                                                        <p className='w-[19%] text-right'>{row.amount.toLocaleString("en-IN")}</p>
                                                                        <p className='w-[16%] text-right'>{row.exp.toFixed(1) + "%"}</p>
                                                                        <p className='w-[15%] text-right'></p>
                                                                    </div>  
                                                                )
                                                            }
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                
                            )
                        })
                    }
                </div>
            </div>
      </div>
    )
};

export function MonitorOthersHoverPage({ fund = "Equity", height }) {

    const filteredData = {
        AUM: {
          Equity: {
            "Gold ETF": [
                {
                    "name": "Kotak Gold Fund",
                    "rating": 4,
                    "amount": 304927,
                    "exp": 8.9
                }
            ],
            "Gold": [
                {
                    "name": "SBI Gold Fund",
                    "rating": 4,
                    "amount": 154927,
                    "exp": 8.9
                }
            ]
          },
        },
    };

    return (
      <div className='flex flex-col gap-y-[10px] p-[20px]'>
            <div className='text-[#6E6E72] font-medium text-[12px] flex px-[10px]'>
                <p className='w-[50%]'>Asset Class/Category/Scheme Name</p>
                <p className='w-[19%] text-right'>Amount</p>
                <p className='w-[16%] text-right'>% Exposure</p>
                <p className='w-[15%] text-right'>No of funds</p>
            </div>
    
            {/* Darkest */}
            <div className=' overflow-auto' style={{maxHeight: height}} >
                <div className='flex flex-col'>
                        <div className='bg-[#F1F7FD] p-[10px] font-semibold rounded-[10px] mb-[10px] flex pr-[20px]'> 
                            <p className='w-[50%]'>Total {fund} - Others</p>
                            <p className='w-[20%] text-right'>{ Object.values(filteredData.AUM).flatMap((category) => Object.values(category).flat()).reduce((sum, fund) => sum + fund.amount, 0).toLocaleString("en-IN") }</p>
                            <p className='w-[16%] text-right'>{ Object.values(filteredData.AUM).flatMap((category) => Object.values(category).flat()).reduce((sum, fund) => sum + fund.exp, 0.0).toFixed(1) + "%" }</p>
                            <p className='w-[14%] text-right'>{ Object.values(filteredData.AUM).flatMap((category) => Object.values(category).flat()).length }</p>
                        </div>
                    {
                        Object.keys(filteredData.AUM).map((split) => {
                            return (
                                <div className='flex flex-col gap-[10px]'>
                                    {
                                        Object.keys(filteredData.AUM[split]).map((category) => {
                                            return (
                                                <div>
                                                    <div className='bg-[#F1F7FD] p-[10px] font-semibold rounded-[10px] mb-[10px] flex pr-[20px]'> 
                                                        <p className='w-[50%]'>{category}</p>
                                                        <p className='w-[20%] text-right'>{filteredData.AUM[split][category].reduce((sum, fund) => sum + fund.amount, 0).toLocaleString("en-IN")}</p>
                                                        <p className='w-[15%] text-right'>{filteredData.AUM[split][category].reduce((accum, curr) => accum + curr.exp, 0.0).toFixed(1) + "%"}</p>
                                                        <p className='w-[15%] text-right'>{filteredData.AUM[split][category].length }</p>
                                                    </div>
                                                    <div className='flex flex-col gap-[15px] pl-[10px]'>
                                                            {
                                                                filteredData.AUM[split][category].map(row => 
                                                                    <div className='flex'> 
                                                                        <p className='w-[50%] flex items-center'>{row.name} <span className={`ml-[5px] whitespace-nowrap flex items-center ${row.rating === 0 ? "hidden" : [4,5].includes(row.rating) ? "text-[#00A345]" : [3,2].includes(row.rating) ? "text-[#F56902]" : "text-[#E30005]"}`}><Star className='text-[15px] mr-[3px]' />{row.rating}</span></p>
                                                                        <p className='w-[19%] text-right'>{row.amount.toLocaleString("en-IN")}</p>
                                                                        <p className='w-[16%] text-right'>{row.exp.toFixed(1) + "%"}</p>
                                                                        <p className='w-[15%] text-right'></p>
                                                                    </div>  
                                                                )
                                                            }
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                
                            )
                        })
                    }
                </div>
            </div>
      </div>
    )
};

export function YTMHoverPage({height}) {
    return (
        <div className='flex flex-col gap-y-[10px] p-[20px]'>
            <div className='text-[#6E6E72] font-medium text-[12px] flex px-[10px]'>
                <p className='w-[50%]'>Asset Class/Category/Scheme Name</p>
                <p className='w-[16%] text-right'>YTM</p>
                <p className='w-[18%] text-right'>Amount</p>
                <p className='w-[15.5%] text-right'>% Exposure</p>
            </div>
            <div className=' overflow-auto' style={{maxHeight: height}} >
                <div className='flex flex-col gap-[20px]'>
                    {
                        Object.keys(data.PortfolioExpense).filter(option => option === "Debt").map((split) => {
                            return (
                                <div className='flex flex-col gap-[10px]'>
                                    <div className='bg-[#E2F0FD] p-[10px] font-bold rounded-[10px] flex'> 
                                        <p className='w-[50%]'>Total Debt - Net YTM</p>
                                        <p className='w-[16%] text-right'>{ Object.values(data.PortfolioExpense[split]).flat().reduce((sum, fund) => sum + fund.ytm, 0.0).toFixed(1) + "%" }</p>
                                        <p className='w-[18%] text-right'>{ Object.values(data.PortfolioExpense[split]).flat().reduce((sum, fund) => sum + fund.amount, 0).toLocaleString("en-IN") }</p>
                                        <p className='w-[16%] text-right'>{ Object.values(data.PortfolioExpense[split]).flat().reduce((sum, fund) => sum + fund.exp, 0.0).toFixed(1) + "%" }</p>
                                    </div>
                                    {
                                        Object.keys(data.PortfolioExpense[split]).map((category) => {
                                            return (
                                                <div>
                                                    <div className='bg-[#F1F7FD] p-[10px] font-semibold rounded-[10px] mb-[10px] flex pr-[20px]'> 
                                                        <p className='w-[50%]'>{category}</p>
                                                        <p className='w-[20%] text-right'>{data.PortfolioExpense[split][category].reduce((sum, fund) => sum + fund.ytm, 0.0).toFixed(1) + "%"}</p>
                                                        <p className='w-[20%] text-right'>{data.PortfolioExpense[split][category].reduce((accum, curr) => accum + curr.amount, 0).toLocaleString("en-IN")}</p>
                                                        <p className='w-[16%] text-right'>{data.PortfolioExpense[split][category].reduce((accum, curr) => accum + curr.exp, 0.0).toFixed(1) + "%" }</p>
                                                    </div>
                                                    <div className='flex flex-col gap-[15px] pl-[10px]'>
                                                        {
                                                            data.PortfolioExpense[split][category].map(row => 
                                                                <div className='flex'> 
                                                                    <p className='w-[50%] flex items-center'>{row.name} <span className={`ml-[5px] whitespace-nowrap flex items-center ${row.rating === 0 ? "hidden" : [4,5].includes(row.rating) ? "text-[#00A345]" : [3,2].includes(row.rating) ? "text-[#F56902]" : "text-[#E30005]"}`}><Star className='text-[15px] mr-[3px]' />{row.rating}</span></p>
                                                                    <p className='w-[15%] text-right'>{row.ytm.toFixed(1) + "%"}</p>
                                                                    <p className='w-[18.7%] text-right'>{row.amount.toLocaleString("en-IN")}</p>
                                                                    <p className='w-[15%] text-right'>{row.exp.toFixed(1) + "%"}</p>
                                                                </div>    
                                                            )
                                                        }
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
};

export function AAAHoverPage({height}) {

    const filteredData = {
        AUM: {
            Debt: {
                "Debt - Liquid & Overnight Funds" : [
                    {
                      "name": "HDFC Liquid Fund(G)",
                      "rating": 5,
                      "amount": 54544,
                      "exp": 1.60,
                      "aaa": 98,
                    },
                    {
                      "name": "Bandhan Liquid Fund-Reg(G)",
                      "rating": 5,
                      "amount": 54558,
                      "exp": 1.60,
                      "aaa": 90,
                    }
                ],
                "Debt - Short Duration/Banking & PSU/Corporate Bond" : [
                    {
                      "name": "HDFC Liquid Fund(G)",
                      "rating": 5,
                      "amount": 54544,
                      "exp": 1.60,
                      "aaa": 81,
                    },
                    {
                      "name": "Bandhan Liquid Fund-Reg(G)",
                      "rating": 5,
                      "amount": 54558,
                      "exp": 1.60,
                      "aaa": 97,
                    }
                ],
            },
        },
    };

    return (
      <div className='flex flex-col gap-y-[10px] p-[20px]'>
            <div className='text-[#6E6E72] font-medium text-[12px] flex px-[10px]'>
                <p className='w-[50%]'>Asset Class/Category/Scheme Name</p>
                <p className='w-[15%] text-right'>% of AAA Equivalent</p>              
                <p className='w-[19%] text-right'>Amount</p>
                <p className='w-[16%] text-right'>% Exposure</p>
            </div>
    
            {/* Darkest */}
            <div className=' overflow-auto' style={{maxHeight: height}} >
                <div className='flex flex-col'>
                        <div className='bg-[#F1F7FD] p-[10px] font-semibold rounded-[10px] mb-[10px] flex pr-[20px]'> 
                            <p className='w-[50%]'>Total Debt - % of AAA Equivalent</p>
                            <p className='w-[18%] text-right'>{ Object.values(filteredData.AUM).flatMap((category) => Object.values(category).flat()).reduce((sum, fund) => sum + fund.aaa, 0.0).toFixed(1) + "%" }</p>
                            <p className='w-[20%] text-right'>{ Object.values(filteredData.AUM).flatMap((category) => Object.values(category).flat()).reduce((sum, fund) => sum + fund.amount, 0).toLocaleString("en-IN") }</p>
                            <p className='w-[15%] text-right'>{ Object.values(filteredData.AUM).flatMap((category) => Object.values(category).flat()).reduce((sum, fund) => sum + fund.exp, 0.0).toFixed(1) + "%" }</p>
                        </div>
                    {
                        Object.keys(filteredData.AUM).map((split) => {
                            return (
                                <div className='flex flex-col gap-[10px]'>
                                    {
                                        Object.keys(filteredData.AUM[split]).map((category) => {
                                            return (
                                                <div>
                                                    <div className='bg-[#F1F7FD] p-[10px] font-semibold rounded-[10px] mb-[10px] flex pr-[20px]'> 
                                                        <p className='w-[50%]'>{category}</p>
                                                        <p className='w-[18%] text-right'>{filteredData.AUM[split][category].reduce((accum, curr) => accum + curr.aaa, 0.0).toFixed(1) + "%" }</p>
                                                        <p className='w-[20%] text-right'>{filteredData.AUM[split][category].reduce((sum, fund) => sum + fund.amount, 0).toLocaleString("en-IN")}</p>
                                                        <p className='w-[15%] text-right'>{filteredData.AUM[split][category].reduce((accum, curr) => accum + curr.exp, 0.0).toFixed(1) + "%"}</p>
                                                    </div>
                                                    <div className='flex flex-col gap-[15px] pl-[10px]'>
                                                            {
                                                                filteredData.AUM[split][category].map(row => 
                                                                    <div className='flex'> 
                                                                        <p className='w-[50%] flex items-center'>{row.name} <span className={`ml-[5px] whitespace-nowrap flex items-center ${row.rating === 0 ? "hidden" : [4,5].includes(row.rating) ? "text-[#00A345]" : [3,2].includes(row.rating) ? "text-[#F56902]" : "text-[#E30005]"}`}><Star className='text-[15px] mr-[3px]' />{row.rating}</span></p>
                                                                        <p className='w-[15%] text-right'>{row.aaa.toFixed(1) + "%"}</p>
                                                                        <p className='w-[19%] text-right'>{row.amount.toLocaleString("en-IN")}</p>
                                                                        <p className='w-[14.5%] text-right'>{row.exp.toFixed(1) + "%"}</p>
                                                                    </div>  
                                                                )
                                                            }
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                
                            )
                        })
                    }
                </div>
            </div>
      </div>
    )
};

export function SpecificDebtHoverPage({ specific = "Debt - Liquid & Overnight Funds", height}) {

    const filteredData = specific === "Debt - Low Duration" ? 
        {
            AUM: {
                Debt: {
                    "Debt - Short Duration/Banking & PSU/Corporate Bond" : [
                        {
                        "name": "Aditya Birla SL Corp Bond Fund(G)",
                        "rating": 5,
                        "amount": 50258,
                        "exp": 1.48
                        }
                    ]
                }
            }
        }
        :
        {
            AUM: {
            Debt: {
                specific: data.AUM.Debt[(specific === "Debt - UST" || specific === "Debt - Medium Duration" || specific === "Debt - Long Duration" || specific === "Debt - Credit Risk" || specific === "Debt - Dynamic Funds" || specific === "Debt - Conservative Hybrid" ) ? "Debt - Liquid & Overnight Funds" : specific === "Debt - Short Duration" ? "Debt - Short Duration/Banking & PSU/Corporate Bond" : specific]
            },
            },
        };

    return (
      <div className='flex flex-col gap-y-[10px] p-[20px]'>
            <div className='text-[#6E6E72] font-medium text-[12px] flex px-[10px]'>
                <p className='w-[50%]'>Asset Class/Category/Scheme Name</p>
                <p className='w-[19%] text-right'>Amount</p>
                <p className='w-[16%] text-right'>% Exposure</p>
                <p className='w-[15%] text-right'>No of funds</p>
            </div>
    
            {/* Darkest */}
            <div className=' overflow-auto' style={{maxHeight: height}} >
                <div className='flex flex-col'>
                        <div className='bg-[#F1F7FD] p-[10px] font-semibold rounded-[10px] mb-[10px] flex pr-[20px]'> 
                            <p className='w-[50%]'>{specific}</p>
                            <p className='w-[20%] text-right'>{ Object.values(filteredData.AUM).flatMap((category) => Object.values(category).flat()).reduce((sum, fund) => sum + fund.amount, 0).toLocaleString("en-IN") }</p>
                            <p className='w-[16%] text-right'>{ Object.values(filteredData.AUM).flatMap((category) => Object.values(category).flat()).reduce((sum, fund) => sum + fund.exp, 0.0).toFixed(1) + "%" }</p>
                            <p className='w-[14%] text-right'>{ Object.values(filteredData.AUM).flatMap((category) => Object.values(category).flat()).length }</p>
                        </div>
                    {
                        Object.keys(filteredData.AUM).map((split) => {
                            return (
                                <div className='flex flex-col gap-[10px]'>
                                    {
                                        Object.keys(filteredData.AUM[split]).map((category) => {
                                            return (
                                                <div>
                                                    <div className='flex flex-col gap-[15px] pl-[10px]'>
                                                            {
                                                                filteredData.AUM[split][category].map(row => 
                                                                    <div className='flex'> 
                                                                        <p className='w-[50%] flex items-center'>{row.name} <span className={`ml-[5px] whitespace-nowrap flex items-center ${row.rating === 0 ? "hidden" : [4,5].includes(row.rating) ? "text-[#00A345]" : [3,2].includes(row.rating) ? "text-[#F56902]" : "text-[#E30005]"}`}><Star className='text-[15px] mr-[3px]' />{row.rating}</span></p>
                                                                        <p className='w-[19%] text-right'>{row.amount.toLocaleString("en-IN")}</p>
                                                                        <p className='w-[16%] text-right'>{row.exp.toFixed(1) + "%"}</p>
                                                                        <p className='w-[15%] text-right'></p>
                                                                    </div>  
                                                                )
                                                            }
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                
                            )
                        })
                    }
                </div>
            </div>
      </div>
    )
};

export function PercentPortfolioHoverPage({height}) {

    const filteredData =
        {
            AUM: {
                "Equity" : {
                    "Equity - Low Volatility" : [
                        {
                            "name": "Motilal Oswal S&P BSE Low Volatility Index Fund-Reg(G)",
                            "rating" : 5,
                            "amount" : 147628,
                            "exp": 4.34
                        }
                    ],
                    "Hybrid - Aggressive Hybrid Fund" : [
                        {
                            "name": "Canara Rob Equity Hybrid Fund-Reg(G)",
                            "rating": 5,
                            "amount": 109721,
                            "exp": 3.22
                        }
                    ],
                },
                "Debt" : {
                    "Debt - Liquid & Overnight Funds" : [
                        {
                          "name": "HDFC Liquid Fund(G)",
                          "rating": 5,
                          "amount": 54544,
                          "exp": 1.60
                        },
                        {
                          "name": "Bandhan Liquid Fund-Reg(G)",
                          "rating": 5,
                          "amount": 54558,
                          "exp": 1.60
                        },
                    ],
                    "Debt - Short Duration/Banking & PSU/Corporate Bond" : [
                        {
                          "name": "HDFC Short Term Debt Fund(G)",
                          "rating": 5,
                          "amount": 32082,
                          "exp": 0.94
                        },
                        {
                          "name": "Aditya Birla SL Corp Bond Fund(G)",
                          "rating": 5,
                          "amount": 50258,
                          "exp": 1.48
                        },
                    ]
                }

            }
        }

    return (
      
      <div className='flex flex-col gap-y-[10px] p-[20px]'>
          <div className='text-[#6E6E72] font-medium text-[12px] flex px-[10px]'>
              <p className='w-[50%]'>Asset Class/Category/Scheme Name</p>
              <p className='w-[19%] text-right'>Lock in Amount</p>
              <p className='w-[16%] text-right'>Lock in % Exposure</p>
              <p className='w-[15%] text-right'>No of funds</p>
          </div>
  
          {/* Darkest */}
          <div className=' overflow-auto' style={{maxHeight: height}} >
              <div className='bg-[#CFE5F8] p-[10px] font-extrabold rounded-[10px] flex mb-[10px]'> 
                  <p className='w-[50%]'>Total</p>
                  <p className='w-[19.5%] text-right'>{ Object.values(filteredData.AUM).flatMap((category) => Object.values(category).flat()).reduce((sum, fund) => sum + fund.amount, 0).toLocaleString("en-IN") }</p>
                  <p className='w-[16%] text-right'>{ Object.values(filteredData.AUM).flatMap((category) => Object.values(category).flat()).reduce((sum, fund) => sum + fund.exp, 0.0).toFixed(1) + "%" }</p>
                  <p className='w-[14%] text-right'>{ Object.values(filteredData.AUM).flatMap((category) => Object.values(category).flat()).length }</p>
              </div>
              <div className='flex flex-col gap-[20px]'>
                  {
                      Object.keys(filteredData.AUM).map((split) => {
                          return (
                              <div className='flex flex-col gap-[10px]'>
                                  <div className='bg-[#E2F0FD] p-[10px] font-bold rounded-[10px] flex'> 
                                      <p className='w-[50%]'>{split}</p>
                                      <p className='w-[19.5%] text-right'>{ Object.values(filteredData.AUM[split]).flat().reduce((sum, fund) => sum + fund.amount, 0).toLocaleString("en-IN") }</p>
                                      <p className='w-[16%] text-right'>{ Object.values(filteredData.AUM[split]).flat().reduce((sum, fund) => sum + fund.exp, 0.0).toFixed(1) + "%" }</p>
                                      <p className='w-[14%] text-right'>{ Object.values(filteredData.AUM[split]).flat().length }</p>
                                  </div>
                                  {
                                      Object.keys(filteredData.AUM[split]).map((category) => {
                                          return (
                                              <div>
                                                  <div className='bg-[#F1F7FD] p-[10px] font-semibold rounded-[10px] mb-[10px] flex pr-[20px]'> 
                                                      <p className='w-[50%]'>{category}</p>
                                                      <p className='w-[20%] text-right'>{filteredData.AUM[split][category].reduce((accum, curr) => accum + curr.amount, 0).toLocaleString("en-IN")}</p>
                                                      <p className='w-[16%] text-right'>{filteredData.AUM[split][category].reduce((accum, curr) => accum + curr.exp, 0.0).toFixed(1) + "%" }</p>
                                                      <p className='w-[14%] text-right'>{filteredData.AUM[split][category].length}</p>
                                                  </div>
                                                  <div className='flex flex-col gap-[15px] pl-[10px]'>
                                                      {
                                                          filteredData.AUM[split][category].map(row => 
                                                              <div className='flex'> 
                                                                  <p className='w-[50%] flex items-center'>{row.name} <span className={`ml-5 whitespace-nowrap flex items-center ${row.rating === 0 ? "hidden" : [4, 5].includes(row.rating) ? "text-[#00A345]" : [3, 2].includes(row.rating) ? "text-[#F56902]" : "text-[#E30005]"}`}><Star className='text-[15px] mr-3' />{row.rating}</span></p>
                                                                  <p className='w-[19%] text-right'>{row.amount.toLocaleString("en-IN")}</p>
                                                                  <p className='w-[16%] text-right'>{row.exp.toFixed(1) + "%"}</p>
                                                                  <p className='w-[15%] text-right'></p>
                                                              </div>
                                                          )
                                                      }
                                                  </div>
                                              </div>
                                          )
                                      })
                                  }
                              </div>
                              
                          )
                      })
                  }
              </div>
          </div>
      </div>
    )
};