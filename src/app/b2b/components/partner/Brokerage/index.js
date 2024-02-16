import CustomSelectField from "../../InputFields";
import { useState } from "react";
import CustomTable from "../PartnerHome/CustomTable";
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import DownloadInvoice from "./DownloadInvoice";

function Brokerage() {

    const [amc, setAMC] = useState("");
    const [schemeCategory,setSchemeCategory]=useState("");
    const [amcErrorMessage, setAmcErrorMessage] = useState("");
    const [schemeCategoryErrorMessage,setSchemeCategoryErrorMessage]=useState("");
    const [showTable,setShowTable]=useState(false);
    const [showInvoice,setShowInvoice]=useState(false);

    let data = [
        ['HDFC Arbitrage-WP(G)', '01/07/2023', '30/09/2023', '0.29' ],
        ['HDFC Credit Risk Debt Fund-(G)','01/07/2023', '30/09/2023', '0.29' ],
        ['HDFC Develoned World Indexes FoF-ReaG','01/07/2023', '30/09/2023', '0.29' ],
        ['HDFC Arbitrage-WP(G)','01/07/2023', '30/09/2023', '0.29' ],
        ['HDFC Credit Risk Debt Fund-(G)','01/07/2023', '30/09/2023', '0.29' ],
        ['HDFC Develoned World Indexes FoF-ReaG','01/07/2023', '30/09/2023', '0.29' ],
        ['HDFC Arbitrage-WP(G)','01/07/2023', '30/09/2023', '0.29' ],
        ['HDFC Credit Risk Debt Fund-(G)','01/07/2023', '30/09/2023', '0.29' ],
        ['HDFC Develoned World Indexes FoF-ReaG','01/07/2023', '30/09/2023', '0.29' ],
        ['HDFC Arbitrage-WP(G)','01/07/2023', '30/09/2023', '0.29' ],
        ['HDFC Credit Risk Debt Fund-(G)','01/07/2023', '30/09/2023', '0.29' ],
        ['HDFC Credit Risk Debt Fund-(G)','01/07/2023', '30/09/2023', '0.29'],
        ['HDFC Credit Risk Debt Fund-(G)','01/07/2023', '30/09/2023', '0.29'],
        ['HDFC Credit Risk Debt Fund-(G)','01/07/2023', '30/09/2023', '0.29'],
        ['HDFC Credit Risk Debt Fund-(G)','01/07/2023', '30/09/2023', '0.29']

    ]


    const handleAmcChange = (event) => {
        const value = event.target.value;
        setAMC(value);
        if (value === "") {
            setAmcErrorMessage("Select an AMC");
        }
        else {
            setAmcErrorMessage("");
        }
      };

      const handleSChemeCategoryChange=(event)=>{
         const val=event.target.value;
         setSchemeCategory(val);
         if(val===""){
            setSchemeCategoryErrorMessage("Select an Scheme Category");
         }
         else{
            setSchemeCategoryErrorMessage("");
         }
      }
      const openTable=()=>{
        if (amc == '') setAmcErrorMessage("Select an AMC")
        if (schemeCategory == '') setSchemeCategoryErrorMessage("Select an Scheme Category")
        if (amcErrorMessage=='' && schemeCategoryErrorMessage == '' && amc != '' && schemeCategory != '')
           setShowTable(true);
      }
    const amcOptions = ['HDFC Mutual Funds', 'Axis Bank Mutual Fund', 'SBI Mutual Fund','IDBI Bank','IDBI First Bank Limited','Canara Bank','Nippon Life India Assets'];
    const schemeCategoryOptions=['All','Debit','Equity','Gold','Hybrid','Liquid','Others'];
    return (
        <>
            {(showInvoice)?
            <DownloadInvoice setShowInvoice={setShowInvoice} />
            :
            <div className="p-[20px] overflow-scroll">
                <div className=" w-full flex-col justify-center items-center rounded-[15px] bg-[#FFFFFF]">
                    <div className="p-[20px]">
                            <div className="text-[20px] text-[#000000] font-semibold mb-[20px]">Revenue Share Percentage</div>
                            <div className="flex  space-x-[50px] items-center">
                                <CustomSelectField label="AMC" value={amc} valueOptions={amcOptions} errorMessage={amcErrorMessage} handleChange={handleAmcChange} />
                                <CustomSelectField label="Scheme Category" value={schemeCategory} valueOptions={schemeCategoryOptions} errorMessage={schemeCategoryErrorMessage} handleChange={handleSChemeCategoryChange} />
                            </div>
                            <div className="flex justify-between items-center mt-[20px]">
                                <button className="w-[144px] h-[40px] rounded-[25px] bg-[#0071E7] text-[#FFFFFF] text-[14px] flex  items-center justify-center font-bold" onClick={openTable}><p>Show Brokerage</p></button>
                                <button className="h-[40px] text-[#0066CD] text-[16px] font-bold flex gap-x-[5px] items-center " onClick={()=>{setShowInvoice(true)}}><DownloadRoundedIcon />Download Invoice</button>
                            </div>
                    </div>
                </div>
                {showTable &&
                    <div className="mt-[20px]">
                        <CustomTable headers={['Scheme Name', 'From', 'To', 'Trail']} data={data} />
                    </div>
                }
            </div>
            }
        </>
    );
}

export default Brokerage;