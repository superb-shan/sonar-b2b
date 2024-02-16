"use client";
import { useState , useRef ,useEffect} from "react";
import back from 'public/back.svg';
import close from '/public/close.svg'
import Image from 'next/image';
import { useDataContext } from "../../context/DataContext";

export default function MonthlyDetails(props){

    const {setShowMonthlyDetails} = useDataContext()
    
    const [selectedOption,setSelectedOption]=useState("AUM & Flow");

    const AumAndFlowDetails = useRef();
    const AssetAllocationRef = useRef();
    const performanceRef = useRef();
    const PortfolioQualityRef = useRef();
    const ConcentrationRef = useRef();
    const PortfoliounderlockinRef =useRef();
    const EquityQualityCheckStyleSplitRef = useRef();
    const DebtQualityCheckStyleSplitRef = useRef();
    const SIPDetailsRef = useRef();
    const scrollingContainerRef =useRef();

    const data =[
        ["AUM" ,"₹4,229,638" , "₹4,381,463" ,"₹4,514,336" ,"₹4,701,042" , "₹4,725,488"],
        ["SIP" ,"₹10,000" , "₹10,000" , "₹0" , "₹10,000" ,"₹0"],
        ["Lumpsum","₹0" ,"₹0" ,"₹0","₹0","₹0"],
        ["Redemption","₹0","₹0","₹0","₹0","₹0"],
        ["Net Inflow" ,"₹10,000" , "₹10,000" ,"₹0" ,"₹10,000" ,"₹0"]
    ]
    const data2 = [
        ["Equity","₹100" ,"₹100","₹100","₹100","₹100"],
        ["Debt","₹0" ,"₹0" ,"₹0" ,"₹0","₹0"],
        ["Gold & Others","₹0" ,"₹0","₹0","₹0","₹0"],
        ["Cash(Overnight & Liquid)","₹0" ,"₹0","₹0","₹0","₹0"]
    ]
    const per = ["Lifetime Returns","₹100" ,"₹100","₹100","₹100","₹100"]
    const data3 =[
        ["5 Star Rated Fund Exposure",26,26,26,26,26],
        ["4 Star Rated Fund Exposure",0,0,0,0,0],
        ["Low Rated Fund" ,45,46,46,46,46],
        ["Not Rated Fund Exposure",29,28,28,28,28],
    ]
    const data4 =[
        ["Highest Fund House Exposure","54-ICIC Prudential AMC Ltd" , "54-ICIC Prudential AMC Ltd", "54-ICIC Prudential AMC Ltd","54-ICIC Prudential AMC Ltd","54-ICIC Prudential AMC Ltd"],
        ["Highest Fund Exposure","27-ICIC PruLT Equity Fund(Tax Saving)(G)","27-ICIC PruLT Equity Fund(Tax Saving)(G)","27-ICIC PruLT Equity Fund(Tax Saving)(G)","27-ICIC PruLT Equity Fund(Tax Saving)(G)","27-ICIC PruLT Equity Fund(Tax Saving)(G)"],
        ["2nd Highest Fund Exposure","27-ICIC Pru Multi Asset Fund(G)" , "27-ICIC Pru Multi Asset Fund(G)" ,"27-ICIC Pru Multi Asset Fund(G)","27-ICIC Pru Multi Asset Fund(G)","27-ICIC Pru Multi Asset Fund(G)"],
        ["Non Debt Funds",5,5,5,5,5],
        ["Total Number of Funds",10,10,10,10,10]
    ]
    const data5 = [
        ["ELSS Exposure",32,33,33,33,33],
    ]
    const data6 = [
        ["1 Star Rated Fund",2,2,2,2,2],
        ["2 Star Rated Fund",16,16,16,16,16],
        ["3 Star Rated Fund",28,28,28,28,28],
        ["4 Star Rated Fund",0,0,0,0,0],
        ["5 Star Rated Fund",26,26,26,26,26],
        ["Not Rated Funds",29,28,28,28,28]
    ]
    const data7 =[
        ["Blend",73,73,74,74,74],
        ["Quality" ,0,0,0,0,0],
        ["Value",0,0,0,0,0],
        ["Mid & Small cap",0,0,0,0,0],
        ["Global",0,0,0,0,0],
        ["others",27,27,26,27,27],
        ["Largecap Active",26,26,26,26,26]
    ]
    const data8 =[
        ["Sector Thematic",0,0,0,0,0],
        ["Smallcap",0,0,0,0,0],
    ]
    const data9 =[
        ["1 Star Rated Fund",2,2,2,2,2],
        ["2 Star Rated Fund",16,16,16,16,16],
        ["3 Star Rated Fund",28,28,28,28,28],
        ["4 Star Rated Fund",0,0,0,0,0],
        ["5 Star Rated Fund",26,26,26,26,26],
        ["Not Rated Funds",29,28,28,28,28]
    ]
    const data10=[
        ["Liquid/Overnight",0,0,0,0,0],
        ["UST",0,0,0,0,0],
        ["Value",0,0,0,0,0],
        ["Money Market/Low Duartion",0,0,0,0,0],
        ["Short Term/Corporate Bonds/Banking & PSU",0,0,0,0,0],
        ["Credit Risk Funds",0,0,0,0,0],
        ["Medium Duration",0,0,0,0,0],
        ["Long Duration",0,0,0,0,0]
    ]
    const data11 =[
        ["Equity","₹10,000","₹10,000","0","₹10,000","0"],
        ["Debt",0,0,0,0,0],
        ["Others",0,0,0,0,0]
    ]
    const data12 =[
        ["Liquid/Overnight","₹10,000","₹10,000","0","₹10,000","0"],
        ["UST",0,0,0,0,0],
        ["Value",0,0,0,0,0],
        ["Money Market/Low Duration",0,0,0,0,0]
    ]
    const [Nav,setNav] = useState(true); 
    const ref = [AumAndFlowDetails,AssetAllocationRef,performanceRef,PortfolioQualityRef,ConcentrationRef,PortfoliounderlockinRef,EquityQualityCheckStyleSplitRef,DebtQualityCheckStyleSplitRef,SIPDetailsRef];
    const selectedTable = ['AUM & Flow','Asset Allocation','Performance','Portfolio Quality','Concentration','% of Portfolio under lock-in','Equity - Quality Check & StyleSplit','Debt - Quality Check & StyleSplit','SIP Details'];
    let selectedSection = -1;
    useEffect(() => {
        const handleScroll = () => {
            const container = scrollingContainerRef.current;
            const scrollTop = container.scrollTop + 20;
            for (let i = 0; i < ref.length - 1; i++) {
                const sectionRef = ref[i].current;
                const nextRef =  ref[i+1].current;
                if (sectionRef &&  nextRef) {
                    const sectionTop = sectionRef.offsetTop;
                    const sectionBottom = nextRef.offsetTop;
                    if (scrollTop >= sectionTop  && scrollTop < sectionBottom ) {
                        selectedSection = i;
                        break;
                    }
                }
            }
            const last = SIPDetailsRef.current.offsetTop;
            if(Math.abs(last - scrollTop) <= 65)selectedSection = 8;
            setSelectedOption(selectedTable[selectedSection]);
        };
        
        if (scrollingContainerRef.current) {
            scrollingContainerRef.current.addEventListener("scroll", handleScroll);
        }
        
        return () => {
            if (scrollingContainerRef.current) {
                scrollingContainerRef.current.removeEventListener("scroll", handleScroll);
            }
        };
        
    }, []);
    
    
    const scrollToHeading = (sectionRef) => {
        if (sectionRef.current) {
            sectionRef.current.scrollIntoView({
                behavior: "auto"
            });
        }
    };
    return(
        <div className="w-screen h-full">
            <div className="flex justify-between items-center text-[14px] pt-[20px] pb-[15.5px] bg-white">
                    <div className="ml-[30px] text-[20px] font-semibold">{props.name}</div>
                    <div className="flex ml-[275px]">
                        <div className="flex bg-[#F1F7FD] rounded-md p-[8px]">
                            <div className="mr-[15px] font-medium">Last Contacted Date</div>
                            <div className="font-semibold">05-Nov-2022</div>
                        </div>
                        <div className="ml-[35px] mr-[15px] mt-[7px]">
                            <Image src={close} alt="wrong" onClick={()=>{setShowMonthlyDetails(false)}} className="cursor-pointer"></Image>
                        </div>
                    </div>
                </div>
            <div className=" h-[calc(100vh*0.80-72.5px)] overflow-auto flex  border-t">
                <div className={`px-[15px] pt-[5px] flex flex-col gap-y-[7px] ${(Nav) ? 'w-[270px]' : 'w-[40px] '} transition-all duration-[0.5s] `}>
                    <Image src={back} alt="back" className={`absolute ${(Nav) ? 'left-[262px]' : 'left-[30px]  rotate-180'} z-[2] cursor-pointer  transition-all duration-[0.5s]`} onClick={()=>{setNav(!Nav)}} />
                    <button className={`${Nav ? 'opacity-100' : 'opacity-0'} text-left text-[16px] rounded-[5px] w-[240px] min-h-[40px] p-[10px] transition-[opacity] duration-[0.5s] ${selectedOption==='AUM & Flow'?'bg-[#F1F7FD] text-[#0071E7] font-bold':'bg-[#00000000] text-[#000000] font-medium '} `} onClick={()=>{scrollToHeading(AumAndFlowDetails),setSelectedOption('AUM & Flow')}}>AUM & Flow Details</button>
                    <button className={`${Nav ? 'opacity-100' : 'opacity-0'} text-left text-[16px] rounded-[5px] w-[240px] min-h-[40px] p-[10px] transition-[opacity] duration-[0.5s] ${selectedOption==='Asset Allocation'?'bg-[#F1F7FD] text-[#0071E7] font-bold':'bg-[#00000000] text-[#000000] font-medium '} `} onClick={()=>{scrollToHeading(AssetAllocationRef),setSelectedOption('Asset Allocation')}}>Asset Allocation</button>
                    <button className={`${Nav ? 'opacity-100' : 'opacity-0'} text-left text-[16px] rounded-[5px] w-[240px] min-h-[40px] p-[10px] transition-[opacity] duration-[0.5s] ${selectedOption==='Performance'?'bg-[#F1F7FD] text-[#0071E7] font-bold':'bg-[#00000000] text-[#000000] font-medium '} `} onClick={()=>{scrollToHeading(performanceRef),setSelectedOption('Performance')} }>Performance</button>
                    <button className={`${Nav ? 'opacity-100' : 'opacity-0'} text-left text-[16px] rounded-[5px] w-[240px] min-h-[40px] p-[10px] transition-[opacity] duration-[0.5s] ${selectedOption==='Portfolio Quality'?'bg-[#F1F7FD] text-[#0071E7] font-bold':'bg-[#00000000] text-[#000000] font-medium '} `} onClick={()=>{scrollToHeading(PortfolioQualityRef),setSelectedOption('Portfolio Quality')} }>Portfolio Quality</button>
                    <button className={`${Nav ? 'opacity-100' : 'opacity-0'} text-left text-[16px] rounded-[5px] w-[240px] min-h-[40px] p-[10px] transition-[opacity] duration-[0.5s] ${selectedOption==='Concentration'?'bg-[#F1F7FD] text-[#0071E7] font-bold':'bg-[#00000000] text-[#000000] font-medium '} `} onClick={()=>{scrollToHeading(ConcentrationRef),setSelectedOption('Concentration')} }>Concentration</button>
                    <button className={`${Nav ? 'opacity-100' : 'opacity-0'} text-left text-[16px] rounded-[5px] w-[240px] min-h-[40px] p-[10px] transition-[opacity] duration-[0.5s] ${selectedOption==='% of Portfolio under lock-in'?'bg-[#F1F7FD] text-[#0071E7] font-bold':'bg-[#00000000] text-[#000000] font-medium '} `} onClick={()=>{scrollToHeading(PortfoliounderlockinRef),setSelectedOption('% of Portfolio under lock-in')} }>% of Portfolio under lock‑in</button>
                    <button className={`${Nav ? 'opacity-100' : 'opacity-0'} text-left text-[16px] rounded-[5px] w-[240px] min-h-[40px] p-[10px] transition-[opacity] duration-[0.5s] ${selectedOption==='Equity - Quality Check & StyleSplit'?'bg-[#F1F7FD] text-[#0071E7] font-bold':'bg-[#00000000] text-[#000000] font-medium '} `} onClick={()=>{scrollToHeading(EquityQualityCheckStyleSplitRef),setSelectedOption('Equity - Quality Check & StyleSplit')} }>Equity - Quality Check & StyleSplit</button>
                    <button className={`${Nav ? 'opacity-100' : 'opacity-0'} text-left text-[16px] rounded-[5px] w-[240px] min-h-[40px] p-[10px] transition-[opacity] duration-[0.5s] ${selectedOption==='Debt - Quality Check & StyleSplit'?'bg-[#F1F7FD] text-[#0071E7] font-bold':'bg-[#00000000] text-[#000000] font-medium '} `} onClick={()=>{scrollToHeading(DebtQualityCheckStyleSplitRef),setSelectedOption('Debt - Quality Check & StyleSplit')} }>Debt - Quality Check & StyleSplit</button>
                    <button className={`${Nav ? 'opacity-100' : 'opacity-0'} text-left text-[16px] rounded-[5px] w-[240px] min-h-[40px] p-[10px] transition-[opacity] duration-[0.5s] ${selectedOption==='SIP Details'?'bg-[#F1F7FD] text-[#0071E7] font-bold':'bg-[#00000000] text-[#000000] font-medium '} `} onClick={()=>{scrollToHeading(SIPDetailsRef),setSelectedOption('SIP Details')}}>SIP Details</button><br></br>
                </div>
                <div  className=" w-[180vw] overflow-hidden">
                    <div ref={scrollingContainerRef} className="h-[100%]  overflow-scroll">
                    <table className={` duration-[0.6s] transition-all border-l border-t`}> {/*${Nav ? 'w-[100vw]' : 'absolute left-[25px] w-[100vw]'}*/}
                        <thead>
                            <tr className="sticky top-[-5px] border-b bg-white shadow-[0px_3px_6px_#0000001A]">
                                <td className="p-[20px]  text-[16px] text-[#0071E7] font-bold">{selectedOption}</td>
                                <td className="p-[20px] ">April</td>
                                <td className="p-[20px] ">May</td>
                                <td className="p-[20px] ">June</td>
                                <td className="p-[20px] ">July</td>
                                <td className="p-[20px] ">August</td>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((row, rowIndex) => (
                                <tr ref={rowIndex === 0 ? AumAndFlowDetails : null} className={`p-[20px] even:bg-white odd:bg-[#F9FBFF]  text-[14px] font-medium`} key={rowIndex}>
                                {row.map((value, cellIndex) => (
                                    <td className={`p-[20px] ${row[0] == 'Net Inflow' && cellIndex != 0 ? parseFloat(value.replace(/[₹,]/g, '')) > 0 ? 'text-[#00A345]':'text-[#F56902]':''}`} key={cellIndex}>{value}</td>
                                ))}
                                </tr>
                            ))}
                            <tr>
                                <td className="p-[20px] text-[16px] font-bold text-[#0071E7]" ref={AssetAllocationRef}>Asset Allocation</td>
                            </tr>
                            {data2.map((row, rowIndex) => (
                                <tr className="p-[20px] even:bg-white odd:bg-[#F9FBFF]  text-[14px] font-medium" key={rowIndex}>
                                {row.map((value, cellIndex) => (
                                    <td className={`p-[20px]`} key={cellIndex}>{value}</td>
                                ))}
                                </tr>
                            ))}
                            <tr>
                                <td className="p-[20px] text-[16px] font-bold text-[#0071E7]" ref={performanceRef}>Performance</td>
                            </tr>
                            <tr>
                            {
                                per.map((row,rowIndex) => (
                                    <td className={`p-[20px]`}>{row}</td>
                                ))
                            }
                            </tr>
                            <tr>
                                <td className="p-[20px] text-[16px] font-bold text-[#0071E7]" ref={PortfolioQualityRef}>Portfolio Quality</td>
                            </tr>
                            {data3.map((row, rowIndex) => (
                                <tr className="p-[20px] even:bg-[#F9FBFF] odd:bg-white  text-[14px] font-medium" key={rowIndex}>
                                {row.map((value, cellIndex) => (
                                    <td className={`p-[20px] ${row[0] == '5 Star Rated Fund Exposure' && cellIndex != 0 ? 'text-[#00A345]':'' || (row[0] == 'Low Rated Fund' ||  row[0] == 'Not Rated Fund Exposure' ) && cellIndex != 0 ? 'text-[#F56902]':''}`} key={cellIndex}>{value}</td>
                                ))}
                                </tr>
                            ))}
                            <tr>
                            <td className="p-[20px] text-[16px] font-bold text-[#0071E7]" ref={ConcentrationRef}>Concentration</td>
                            </tr>
                            {data4.map((row, rowIndex) => (
                                <tr className="p-[20px] even:bg-white odd:bg-[#F9FBFF]  text-[14px] font-medium" key={rowIndex}>
                                {row.map((value, cellIndex) => (
                                    <td className={`p-[20px] ${(row[0] == 'Highest Fund House Exposure') && cellIndex != 0 ? 'text-[#F56902]':'' || (row[0] == 'Total Number of Funds' || row[0] == 'Non Debt Funds' || row[0] == '2nd Highest Fund Exposure' || row[0] == 'Highest Fund Exposure' ) && cellIndex != 0 ? 'text-[#EBC135]':''}`} key={cellIndex}>{value}</td>
                                ))}
                                </tr>
                            ))}
                            <tr>
                            <td className="p-[20px] text-[16px] font-bold text-[#0071E7]" ref={PortfoliounderlockinRef}>% of Portfolio under lock-in</td>
                            </tr>
                            {data5.map((row, rowIndex) => (
                                <tr className="p-[20px] even:bg-white odd:bg-[#F9FBFF]  text-[14px] font-medium" key={rowIndex}>
                                {row.map((value, cellIndex) => (
                                    <td className={`p-[20px]`} key={cellIndex}>{value}</td>
                                ))}
                                </tr>
                            ))}
                            <tr>
                                <td className="p-[20px] text-[16px] font-bold text-[#0071E7]" ref={EquityQualityCheckStyleSplitRef}>Equity - Quality Check & StyleSplit</td>
                            </tr>
                            <tr className="bg-[#F9FBFF]">
                                <td className="p-[20px] text-[16px] font-semibold">QUALITY CHECK</td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            {data6.map((row, rowIndex) => (
                                <tr className="p-[20px] even:bg-white odd:bg-[#F9FBFF]  text-[14px] font-medium" key={rowIndex}>
                                {row.map((value, cellIndex) => (
                                    <td className={`p-[20px] ${(row[0] == '1 Star Rated Fund' || row[0] == '2 Star Rated Fund' || row[0] == '3 Star Rated Fund') && cellIndex != 0 ? 'text-[#F56902]':'' || (row[0] == 'Not Rated Funds' || row[0] == '5 Star Rated Fund') && cellIndex != 0 ? 'text-[#00A345]':''}`} key={cellIndex}>{value}</td>
                                ))}
                                </tr>
                            ))}
                            <tr>
                            <td className="p-[20px] text-[16px] font-semibold">STYLE SPLIT</td>
                            </tr>
                            {data7.map((row, rowIndex) => (
                                <tr className="p-[20px] even:bg-white odd:bg-[#F9FBFF]  text-[14px] font-medium" key={rowIndex}>
                                {row.map((value, cellIndex) => (
                                    <td className={`p-[20px] ${(row[0] == 'Blend' || row[0] == 'Quality' || row[0] == 'Value' || row[0] == 'Largecap Active') && cellIndex != 0 ? 'text-[#F56902]':'' || row[0] == 'others' && cellIndex !=0 ? 'text-[#EBC135]' :'' }`} key={cellIndex}>{value}</td>
                                ))}
                                </tr>
                            ))}
                            <tr>
                            <td className="p-[20px] text-[16px] font-semibold">HIGH RISK EXPOSURE</td>
                            </tr>
                            {data8.map((row, rowIndex) => (
                                <tr className="p-[20px] even:bg-white odd:bg-[#F9FBFF]  text-[14px] font-medium" key={rowIndex}>
                                {row.map((value, cellIndex) => (
                                    <td className={`p-[20px]`} key={cellIndex}>{value}</td>
                                ))}
                                </tr>
                            ))}
                            <tr>
                                <td className="p-[20px] text-[16px] font-bold text-[#0071E7]" ref={DebtQualityCheckStyleSplitRef}>Debt - Quality Check & StyleSplit</td>
                            </tr>
                            <tr className="bg-[#F9FBFF]">
                                <td className=" p-[20px] text-[16px] font-semibold">QUALITY CHECK</td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            {data9.map((row, rowIndex) => (
                                <tr className="p-[20px] even:bg-[#F9FBFF] odd:bg-white  text-[14px] font-medium" key={rowIndex}>
                                {row.map((value, cellIndex) => (
                                    <td className={`p-[20px]`} key={cellIndex}>{value}</td>
                                ))}
                                </tr>
                            ))}
                            <tr>
                            <td className="p-[20px] text-[16px] font-semibold">STYLE SPLIT</td>
                            </tr>
                            {data10.map((row, rowIndex) => (
                                <tr className="p-[20px] even:bg-[#F9FBFF]  odd:bg-white text-[14px] font-medium" key={rowIndex}>
                                {row.map((value, cellIndex) => (
                                    <td className={`p-[20px]`} key={cellIndex}>{value}</td>
                                ))}
                                </tr>
                            ))}
                            <tr>
                            <td  className="p-[20px] text-[16px] font-bold text-[#0071E7]" ref={SIPDetailsRef}>SIP Details</td>
                            </tr>
                            {data11.map((row, rowIndex) => (
                                <tr className="p-[20px] even:bg-white odd:bg-[#F9FBFF]  text-[14px] font-medium" key={rowIndex}>
                                {row.map((value, cellIndex) => (
                                    <td className={`p-[20px]`} key={cellIndex}>{value}</td>
                                ))}
                                </tr>
                            ))}
                            <tr>
                            <td className="p-[20px] text-[16px] font-semibold">QUALITY CHECK</td>
                            </tr>
                            {data12.map((row, rowIndex) => (
                                <tr className="p-[20px] even:bg-white odd:bg-[#F9FBFF]  text-[14px] font-medium" key={rowIndex}>
                                {row.map((value, cellIndex) => (
                                    <td className={`p-[20px] ${row[0] == 'Liquid/Overnight' && cellIndex != 0 ? parseFloat(value.replace(/[₹,]/g, '')) > 0 ? 'text-[#00A345]':'text-[#F56902]':''}`} key={cellIndex}>{value}</td>
                                ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </div>
    );
}