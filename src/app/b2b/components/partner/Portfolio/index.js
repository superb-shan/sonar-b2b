import { FormControlLabel, Radio, ThemeProvider, Typography } from "@mui/material";
import theme from '../../../theme.js'
import CustomSelectField, { CustomTextField } from "../../InputFields/index.js";
import { useState } from "react";
import CustomTable from "../PartnerHome/CustomTable.js";
import { useDataContext } from "../../../context/DataContext.js";
import { RadioButtonUnchecked } from "@mui/icons-material";
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';

function Portfolio() {

    const{addScheme, setAddScheme, portfolioData, savePortfolioData, addSchemeList, setAddSchemeList} = useDataContext();

    if (!portfolioData) return(<></>)
    
    const [searchOpen, setSearchOpen] = useState(false);

    const [showRatedSchemes, setShowRatedSchemes] = useState(false)
    const [showOnlyNFO, setShowOnlyNFO] = useState(false)

    const [investorDomicileType, setInvestorDomicileType] = useState('')
    const [portfolioName, setPortfolioName] = useState('')

    const [investorErrorMessage, setInvestorErrorMessage] = useState('')
    const [portfolioErrorMessage, setPortfolioErrorMessage] = useState('')

    const investorOptions = ['Domestic Investor']


    const handleInvestorChange = (event) => {
        const value = event.target.value;
        setInvestorDomicileType(value);
        
        //validations
        if (value === "") {
            setInvestorErrorMessage("Investor Domicile Type cannot be empty");
        }else {
            setInvestorErrorMessage("");
        }
    };

    const handlePortfolioChange = (event) => {
        const value = event.target.value;
        setPortfolioName(value);
        
        //validations
        if (value === "") {
            setPortfolioErrorMessage("Portfolio Name cannot be empty");
        }else {
            setPortfolioErrorMessage("");
        }
    };

    const [selectAMC, setSelectAMC] = useState('')
    const [schemeClassification, setSchemeClassification] = useState('')
    const [schemeName, setSchemeName] = useState('')

    const [selectAMCErrorMessage, setSelectAMCErrorMessage] = useState('')
    const [schemeClassificationErrorMessage, setSchemeClassificationErrorMessage] = useState('')
    const [schemeNameErrorMessage, setSchemeNameErrorMessage] = useState('')

    const selectAMCOptions = ['Aditya Birla','HDFC Mutual Funds', 'Axis Bank Mutual Fund', 'SBI Mutual Fund','IDBI Bank','IDBI First Bank Limited','Canara Bank','Nippon Life India Assets']
    const schemeClassificationOptions = ['All','Debit','Equity','Gold','Hybrid','Liquid','Others']

    const handleAMCChange = (event) => {
        const value = event.target.value;
        setSelectAMC(value);
        
        //validations
        if (value === "") {
            setSelectAMCErrorMessage("AMC cannot be empty");
        }else {
            setSelectAMCErrorMessage("");
        }
    };

    const handleSchemeClassificationChange = (event) => {
        const value = event.target.value;
        setSchemeClassification(value);
        
        //validations
        if (value === "") {
            setSchemeClassificationErrorMessage("Investor Domicile Type cannot be empty");
        }else {
            setSchemeClassificationErrorMessage("");
        }
    };

    const handleSchemeNameChange = (event) => {
        const value = event.target.value;
        setSchemeName(value);
        
        //validations
        if (value === "") {
            setSchemeNameErrorMessage("Portfolio Name cannot be empty");
        }else {
            setSchemeNameErrorMessage("");
        }
    };

    let schemeData = [
        ['Aditya Birla Sun Life Corporate Bond Fund - Growth', '97.5097', '5', '11 Feb 1997', '100.00', '0.47'],
        ['Aditya Birla Sun Life Corporate Bond Fund - Monthly IDCW', '12.3388', '5', '11 Feb 1997', '100.00', '0.47'],
        ['Aditya Birla Sun Life Floating Rate Fund - Daily IDCW Reinvestment', '100.4179', '5', '03 Jun 2003', '1,000.00', '0.45'],
        ['Aditya Birla Sun Life Floating Rate Fund - Growth', '302.9092', '5', '03 Jun 2003', '1,000.00', '0.45'],
        ['Aditya Birla Sun Life Floating Rate Fund - Weekly IDCW', '100.4173', '5', '03 Jun 2003', '1,000.00', '0.45'],
        ['Aditya Birla Sun Life Liquid Fund - Daily IDCW', '100.1950', '5', '09 Jun 1997', '1,000.00', '0.34'],
    ]

    function handleSave() {
        if (portfolioErrorMessage == '' && investorErrorMessage == '' && (portfolioName.trim().length + investorDomicileType.trim().length != 0)){
            let name = portfolioName.toLowerCase().trim();
            portfolioData.forEach(ele=>{
                if (ele[0].toLowerCase().trim() == name) {
                    setPortfolioErrorMessage('Portfolio of this name is already present');
                    name = '';
                    return;
                }
            })
            if (name == '') return;
            savePortfolioData([ [portfolioName, investorDomicileType, []], ...portfolioData])
            setPortfolioName('')
            setInvestorDomicileType('')
            setPortfolioErrorMessage('')
            setInvestorErrorMessage('')
        }
    }

    function handleAddSchemeList() {
        let index = portfolioData.findIndex(e=>e[0]==addScheme);
        // addSchemeList.forEach(e => e.pop())
        portfolioData[index][2].push(...addSchemeList)
        console.log(portfolioData)
        savePortfolioData(portfolioData);
        setAddScheme(false)
        setAddSchemeList([])
    }

    return (
        <ThemeProvider theme={theme} >
            <div className='flex flex-col h-full gap-y-[20px] p-[20px] overflow-auto'>

                {
                    (!addScheme) ?
                    <>
                        {/* Search Box */}
                        <div className={` flex ${searchOpen ? ' flex-col ' : ' justify-between items-center'} gap-y-[20px] bg-white p-[20px] rounded-[15px]`}>
                            <h4 className="text-[20px] font-semibold">Create Partner Portfolio</h4>

                            {(!searchOpen) ?
                                <button onClick={()=>setSearchOpen(true)}><p className=" font-medium text-[14px] text-[#0066CD] flex items-center gap-x-[5px] "><AddCircleRoundedIcon className="text-[10px]" />Add Portfolio</p></button>
                            :
                            <>
                                <div className="flex flex-col gap-y-[20px]">
                                    <div className="flex gap-x-[50px]">
                                        <CustomSelectField id="investorDomicileType" label='Investor Domicile Type' errorMessage={investorErrorMessage} value={investorDomicileType} handleChange={ handleInvestorChange } valueOptions={investorOptions} />
                                        <CustomTextField id="portfolioName" label='Portfolio Name' errorMessage={portfolioErrorMessage} value={portfolioName} handleChange={handlePortfolioChange}/>
                                    </div>
                                </div>
                                <div className="flex gap-x-[20px] mt-[10px] text-[14px] font-bold">
                                    <button onClick={()=>{handleSave()}} className='w-[108px] h-[40px] bg-primary text-white rounded-[25px]'>Save</button>
                                    <button onClick={()=>{setSearchOpen(false)}} className='w-[128px] h-[40px] border-[1px] border-primary text-[#0066CD] rounded-[25px] flex items-center justify-center gap-x-[5px] '>Cancel</button>
                                </div>
                            </>}
                        </div>
                        
                        <div className=" bg-white rounded-[15px]">
                            <CustomTable headers={['Portfolio Name', 'Investor Domicile Type', 'Action']} data={portfolioData} pagination={false} /> 
                        </div>
                    </>
                    : 
                    <>

                        {/* Search Box */}
                        <div className=" flex flex-col gap-y-[20px] bg-white p-[20px] rounded-[15px]">
                            <h4 className="text-[20px] font-semibold">Domestic Investor : Nri - Small cap Funds</h4>
                            <div className="flex flex-col gap-y-[20px]">
                                <div className="flex gap-x-[50px]">
                                    <CustomSelectField id="amc" label='Select AMC' errorMessage={selectAMCErrorMessage} value={selectAMC} handleChange={handleAMCChange} valueOptions={selectAMCOptions} />
                                    <CustomSelectField id="classification" label='Scheme Classification' errorMessage={schemeClassificationErrorMessage} value={schemeClassification} handleChange={ handleSchemeClassificationChange } valueOptions={schemeClassificationOptions} />
                                </div>
                                <CustomTextField id="schemeName" label='Enter scheme Full/Partial Name' errorMessage={schemeNameErrorMessage} value={schemeName} handleChange={handleSchemeNameChange}/>
                            </div>
                            <div className="flex gap-x-[20px] mt-[10px] text-[14px] font-bold">
                                <button onClick={()=>{}} className='w-[108px] h-[40px] bg-primary text-white rounded-[25px]'>Search</button>
                            </div>
                        </div>

                        <div className="self-end flex gap-x-[20px] my-[-5px]">
                            <div>
                            <FormControlLabel
                                sx={{height: '20px'}}
                                control={
                                    <Radio
                                    checked={showRatedSchemes}
                                    icon={<RadioButtonUnchecked sx={{ color: 'primary.main' }} />}
                                    onClick={()=>{setShowRatedSchemes(!showRatedSchemes); setShowOnlyNFO(false)}}
                                    value={true}
                                    />
                                }
                                label={
                                    <Typography variant="body1" sx={{ fontSize: '12px' }}>
                                    Show only rated schemes
                                    </Typography>
                                }
                            />
                            <FormControlLabel
                                sx={{height: '20px'}}
                                control={
                                    <Radio
                                    checked={showOnlyNFO}
                                    icon={<RadioButtonUnchecked sx={{ color: 'primary.main' }} />}
                                    onClick={()=>{setShowOnlyNFO(!showOnlyNFO); setShowRatedSchemes(false)}}
                                    value={true}
                                    />
                                }
                                label={
                                    <Typography variant="body1" sx={{ fontSize: '12px' }}>
                                    Show only NFO/FMP Schemes
                                    </Typography>
                                }
                            />
                            </div>
                        </div>

                        <CustomTable headers={['Scheme Name', 'Current NAV (Rs.)', 'Rating', 'Launch Date', 'Minimum Invest (Rs.)', 'Expense Ratio(%)', 'Action']} data={schemeData} dataType="schemes" />
                    </>
                }
            </div>
            {
                (addSchemeList  != 0) &&
                <div className="absolute bottom-0 w-[calc(100vw-250px)] h-[130px] bg-gradient-to-t from-white to-transparent flex items-center justify-center pb-[20px] pointer-events-none ">
                    <button onClick={handleAddSchemeList} className="bg-primary rounded-[25px] text-white h-[50px] w-[264px] text-[20px] font-semibold self-end pointer-events-auto">Add Scheme</button>
                </div>
            }
        </ThemeProvider>
    );
}

export default Portfolio;