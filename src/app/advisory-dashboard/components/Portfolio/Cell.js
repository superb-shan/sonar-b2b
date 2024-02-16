import Image from "next/image";
import { useRef } from "react";

import TradeUp from '/public/TradeUp.svg';
import TradeDown from '/public/TradeDown.svg';
import drillDownIcon from '/public/drillDown.svg'

export default function Cell({header, tableData, setShowDrillDown, currentRefTableBody, currentTableNameIndex , tableName }) {

        const drillRef = useRef(null)

        let colorStyle;
        if (header == "Equity Exposure Deviation" ){
            let num = Number(tableData.slice(0,-1))
            colorStyle = (num < -5 || num > 5) ? ' text-[#F56902] ' : ' text-[#00A345] ';
        }
        else if( tableData != '-' && ( header == "Gold & Others Exposure" || header == 'Overnight/Liquid Exposure' || header == '5 star rated funds' || header == '5 Star Funds' || header == '5 Star' ||  header == '4 star rated funds' || header == '4 Star Funds' || header == '4 Star' || header == 'Low Rated Fund' || header == 'Not Rated Fund Exposure' || header == 'Highest AMC Exposure' || header == 'Highest Fund Exposure' || header == 'Total Number of Non Debt Funds with <3% Exposure' || header == '% of Portfolio under lock-in' || header == 'Active Large Cap Fund Exposure' || header == 'Sector/Thematic Exposure' || header == 'Small Cap Exposure' || header == '<3 Star Funds' || header == '1 Star Funds' || header == '2 Star Funds' || header == '3 Star Funds' || header == 'Credit Risk' || header == 'Not Rated' || header == '<3 Star' || header == '4 star rated funds' || header == '4 Star Funds' || header == '4 Star' || header == 'Blend' || header == 'Quality' || header == 'Value' || header == 'Mid & Small' || header == 'Global' || header == 'Others' || header == '% of AAA Equivalent' || header == 'Long Duration' || header == 'Dynamic Funds' || header == 'Medium Duration' || header == 'Conservative Hybrid' )){
            if(
                (header == "Gold & Others Exposure" && parseInt(tableData)>30) || 
                (header == 'Overnight/Liquid Exposure' && parseInt(tableData)>15) || 
                ((header == 'Low Rated Fund' || header == 'Not Rated Fund Exposure') && parseInt(tableData)>20) ||
                (header == 'Highest AMC Exposure' && parseInt(tableData)>50) || 
                (header == 'Highest Fund Exposure' && parseInt(tableData)>30) ||
                (header == 'Total Number of Non Debt Funds with <3% Exposure' && parseInt(tableData)>10) || 
                ((header == '% of Portfolio under lock-in' || header == 'Active Large Cap Fund Exposure' || header == 'Sector/Thematic Exposure' || header == 'Small Cap Exposure') && parseInt(tableData)>20) ||
                ((header == '<3 Star Funds' || header == '1 Star Funds' || header == '2 Star Funds' || header == '3 Star Funds' || header == 'Credit Risk' || header == 'Not Rated' || header == '<3 Star') && parseInt(tableData)>0) ||
                ((header == 'Blend' || header == 'Quality' || header == 'Value' || header == 'Mid & Small' || header == 'Global') && parseInt(tableData)>40) || 
                (header == 'Others' && parseInt(tableData)>40) || 
                (header == '% of AAA Equivalent' && parseInt(tableData)<80) ||
                ((header == 'Long Duration' || header == 'Dynamic Funds') && parseInt(tableData)>10)
            ){
                colorStyle = ' text-[#F56902] '; // Red
            }
            else if(
                (header == "Gold & Others Exposure" && parseInt(tableData)>=20 && parseInt(tableData)<=30) || 
                (header == 'Overnight/Liquid Exposure' && parseInt(tableData)>=5 && parseInt(tableData)<=15) || 
                (header == '4 star rated funds' || header == '4 Star Funds' || header == '4 Star') || 
                (header == 'Low Rated Fund' && parseInt(tableData)>=0 && parseInt(tableData)<=20) || 
                (header == 'Not Rated Fund Exposure' && parseInt(tableData)>=0 && parseInt(tableData)<=20) ||
                (header == 'Highest AMC Exposure' && parseInt(tableData)>=30 && parseInt(tableData)<=50)|| 
                (header == 'Highest Fund Exposure' && parseInt(tableData)>=20 && parseInt(tableData)<=30) ||
                (header == 'Total Number of Non Debt Funds with <3% Exposure' && parseInt(tableData)>=5 && parseInt(tableData)<=10) ||
                ((header == '% of Portfolio under lock-in' || header == 'Active Large Cap Fund Exposure' || header == 'Sector/Thematic Exposure' || header == 'Small Cap Exposure') && parseInt(tableData)>=10 && parseInt(tableData)<=20) ||
                ((header == 'Blend' || header == 'Quality' || header == 'Value' || header == 'Mid & Small' || header == 'Global') && parseInt(tableData)>=20 && parseInt(tableData)<=40) || 
                (header == 'Others' && parseInt(tableData)>=10 && parseInt(tableData)<=40) ||
                ((header == 'Medium Duration' || header == 'Conservative Hybrid') && parseInt(tableData)>0)
            ){
                colorStyle = ' text-[#EBC135] ' // Yellow
            }
            else {
                colorStyle = ' text-[#00A345] ' // Green
            }
        }  
        
        return(
            <td className="w-[150px] justify-center flex items-center gap-x-[5px] relative">
                { (header == "Net Inflow YTD (without MTM)" || header == "Net Inflow Growth (without MTM)") && tableData != '-' && ((tableData[1] == '-' || tableData[0] == '-' ) ? <Image height={10} width={15} src={TradeDown} alt="TradeUP"/> : <Image height={10} width={15} src={TradeUp} alt="TradeUP"/>)}
                <div className="relative min-w-[15px]"> 
                    <p className={` ${colorStyle} `}> {tableData} </p>
                    {
                        (tableData!= '-' && (header == "AUM" || header == "Equity Exposure" || header == "Debt Exposure" || header == "Gold & Others Exposure" || header == "Overnight/Liquid Exposure" || header == "5 star rated funds" || header == "4 star rated funds" || header == "Low Rated Fund" || header == "Not Rated Fund Exposure" || header == "FundsIndia Select Fund Exposure" ||
                        header == "Highest AMC Exposure" || header == "Highest Fund Exposure" || header == "Total Number of Non Debt Funds with <3% Exposure" ||
                        header == "ELSS Exposure" || header == "Portfolio Expense Ratio" || header == '% of Portfolio under lock-in' ||
                        header == "Equity Exposure" || header == "Active Large Cap Fund Exposure" || header == "Sector/Thematic Exposure" || header == "Small Cap Exposure" || header == "5 Star Funds" || header == "4 Star Funds" || header == "<3 Star Funds" || header == "1 Star Funds" || header == "2 Star Funds" || header == "3 Star Funds" || header == "Not Rated" || header == "Blend" || header == "Quality" || header == "Value" || header == "Mid & Small" || header == "Global" || header == "Others" || 
                        header == "Debt Exposure" || header == "Net YTM" || header == "% of AAA Equivalent" || header == "5 Star Funds" || header == "4 Star Funds" || header == "<3 Star Funds" || header == "1 Star Funds" || header == "2 Star Funds" || header == "3 Star Funds" || header == "Not Rated" || 
                        header == "Liquid & Overnight" || header == "UST" || header == "Low Duration" || header == "Short Duration" || header == "Medium Duration" || header == "Long Duration" || header == "Credit Risk" || header == "Dynamic Funds" || header == "Conservative Hybrid" || header == "Others" || 
                        header == "Total SIP Value" || header == "Equity" || header == "Debt" || header == "Others" || header == "5 Star" || header == "4 Star" || header == "<3 Star" || header == "Not Rated")) && 
                        <button 
                            ref={drillRef} 
                            className="absolute bottom-[-5px] right-0 h-[6px] flex items-center " 
                            onClick={() => {
                                setShowDrillDown(
                                    {  
                                        top: drillRef.current.offsetParent.offsetParent.offsetTop + drillRef.current.offsetParent.offsetTop + drillRef.current.offsetTop +7 - currentRefTableBody[currentTableNameIndex].current.scrollTop,
                                        tableName,
                                        header
                                    }); 
                                }} 
                            onBlur={()=>setShowDrillDown(null)} 
                        >
                            <Image className="shrink-0 h-[3px] w-[15px]" src={drillDownIcon}/>
                        </button> 
                    }
                </div> 
            </td>
        )
}