import { useState } from "react";
import CustomSelectField, { CustomTextField } from "./InputFields";
import { InputAdornment } from "@mui/material";
import data from '../data/clientRequirement.json';
import { ClearRounded } from "@mui/icons-material";

export default function ClientRequirement({ isLoadClientClicked, setIsLoadClientClicked, handleNotificationMessage }) {

    const [name, setName] = useState('');
    const [nameErrorMessage, setNameErrorMessage] = useState('');

    const handleNameChange = (event) => {
        const value = event.target.value;
        setName(value);
        
        if (value === "") {
            setNameErrorMessage("Name cannot be empty");
        } else {
            setNameErrorMessage("");
        }
    };

    const [age, setAge] = useState('');
    const [ageErrorMessage, setAgeErrorMessage] = useState('');
    
    const handleAgeChange = (event) => {
        const value = event.target.value;
        setAge(value);
        
        if (value === "") {
            setAgeErrorMessage("Age cannot be empty");
        } else {
            setAgeErrorMessage("");
        }
    };

    const [emailId, setEmailId] = useState('');
    const [emailIdErrorMessage, setEmailIdErrorMessage] = useState('');

    const isValidEmail = (email) => {
        // Regular expression for basic email validation
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailRegex.test(email);
      };

    const handleEmailIdChange = (event) => {
        const value = event.target.value;
        setEmailId(value);
    
        if (value === "") {
          setEmailIdErrorMessage("Email ID cannot be empty");
        } else if (!isValidEmail(value)) {
          setEmailIdErrorMessage("Please enter a valid email address");
        } else {
          setEmailIdErrorMessage("");
        }
      };

    const [mobileNo, setMobileNo] = useState('');
    const [mobileNoErrorMessage, setMobileNoErrorMessage] = useState('');

    const isValidMobileNo = (mobile) => {
        // Regular expression for basic mobile number validation
        const mobileRegex = /^[0-9]{10}$/;
        return mobileRegex.test(mobile);
    };

    const handleMobileNoChange = (event) => {
    const value = event.target.value;
    setMobileNo(value);

    if (value === "") {
        setMobileNoErrorMessage("Mobile Number cannot be empty");
    } else if (!isValidMobileNo(value)) {
        setMobileNoErrorMessage("Please enter a valid mobile number");
    } else {
        setMobileNoErrorMessage("");
    }
    };

    const [location, setLocation] = useState('');
    const [locationErrorMessage, setLocationErrorMessage] = useState('');

    const handleLocationChange = (event) => {
        const value = event.target.value;
        setLocation(value);
        
        if (value === "") {
            setLocationErrorMessage("Location cannot be empty");
        } else {
            setLocationErrorMessage("");
        }
    };

    const [family, setFamily] = useState('');
    const [familyErrorMessage, setFamilyErrorMessage] = useState('');
    const familyOptions = ['Married' , 'Unmarried'];
    
    const handleFamilyChange = (event) => {
        const value = event.target.value;
        setFamily(value);
        
        if (value === "") {
            setFamilyErrorMessage("Family cannot be empty");
        } else {
            setFamilyErrorMessage("");
        }
    };

    const [spouse, setSpouse] = useState('');
    const [spouseErrorMessage, setSpouseErrorMessage] = useState('');
    const spouseOptions = ['Working Spouse', 'Non Working Spouse', 'Not Applicable'];
    
    const handleSpouseChange = (event) => {
        const value = event.target.value;
        setSpouse(value);
        
        if (value === "") {
            setSpouseErrorMessage("Spouse cannot be empty");
        } else {
            setSpouseErrorMessage("");
        }
    };

    const [noofKids, setNoofKids] = useState('');
    const [noofKidsErrorMessage, setNoofKidsErrorMessage] = useState('');
    const noofKidsOptions = ['No Kids', '1 Kids', '2 Kids', '3 Kids', '3+ Kids'];
    
    const handleNoofKidsChange = (event) => {
        const value = event.target.value;
        setNoofKids(value);
        
        if (value === "") {
            setNoofKidsErrorMessage("No of Kids cannot be empty");
        } else {
            setNoofKidsErrorMessage("");
        }
    };

    const [parents, setParents] = useState('');
    const [parentsErrorMessage, setParentsErrorMessage] = useState('');
    const parentsOptions = ['Dependent Parents', 'Non Dependent Parents'];
    
    const handleParentsChange = (event) => {
        const value = event.target.value;
        setParents(value);
        
        if (value === "") {
            setParentsErrorMessage("Parents cannot be empty");
        } else {
            setParentsErrorMessage("");
        }
    };

    const [occupation, setOccupation] = useState('');
    const [occupationErrorMessage, setOccupationErrorMessage] = useState('');

    const handleOccupationChange = (event) => {
        const value = event.target.value;
        setOccupation(value);
        
        if (value === "") {
            setOccupationErrorMessage("Occupation cannot be empty");
        } else {
            setOccupationErrorMessage("");
        }
      };

    const [requirement, setRequirement] = useState('');
    const [requirementErrorMessage, setRequirementErrorMessage] = useState('');

    const handleRequirementChange = (event) => {
        const value = event.target.value;
        setRequirement(value);
    
        if (value === "") {
          setRequirementErrorMessage("Requirement cannot be empty");
        } else {
          setRequirementErrorMessage("");
        }
      };

    const [lumpsum, setLumpsum] = useState('0');
    const [lumpsumErrorMessage, setLumpsumErrorMessage] = useState('');

    const handleLumpsumChange = (event) => {
        const value = event.target.value.replace(/^0+/, ''); // Remove leading zeros
        const formattedValue = Number(value.replace(/\D/g,'')).toLocaleString("en-In")
        setLumpsum(formattedValue);

        const max = 1500000;

        if (value === ''){
            setLumpsum('0');
        }
        else if (Number(value.replace(/\D/g,'')) > max){
            setLumpsumErrorMessage(`The max amount is ₹ ${max.toLocaleString("en-IN")}`)
        }
        else{
            setLumpsumErrorMessage('');
        }
    };

    const [sip, setSip] = useState('0');
    const [sipErrorMessage, setSipErrorMessage] = useState('');

    const handleSipChange = (event) => {
        const value = event.target.value.replace(/^0+/, ''); // Remove leading zeros
        const formattedValue = Number(value.replace(/\D/g,'')).toLocaleString("en-In")
        setSip(formattedValue);

        const max = 200000;

        if (value === ''){
            setSip('0');
        }
        else if (Number(value.replace(/\D/g,'')) > max){
            setSipErrorMessage(`The max amount is ₹ ${max.toLocaleString("en-IN")}`)
        }
        else{
            setSipErrorMessage('');
        } 
    };

    const [timeFrame, setTimeFrame] = useState('');
    const [timeFrameErrorMessage, setTimeFrameErrorMessage] = useState('');
    const timeFrameOptions = ['>3Y', '3Y to 5Y', '5Y to 10Y', '>10Y', '3+ Kids'];

    const handleTimeFrameChange = (event) => {
        const value = event.target.value;
        setTimeFrame(value);
        
        if (value === "") {
        setTimeFrameErrorMessage("Time Frame cannot be empty");
        } else {
        setTimeFrameErrorMessage("");
        }
    };

    const [investmentHistory, setInvestmentHistory] = useState('');
    const [investmentErrorMessage, setInvestmentErrorMessage] = useState('');
    const investmentHistoryOptions = ['New to investment', '< 1 Year', '2 - 5 Years', '> 5 Years'];

    const handleInvestmentHistoryChange = (event) => {
        const value = event.target.value;
        setInvestmentHistory(value);

        if (value === "") {
        setInvestmentErrorMessage("Investment history cannot be empty");
        } else {
        setInvestmentErrorMessage("");
        }
    };

    const [assetClasses, setAssetClasses] = useState('');
    const [assetClassesErrorMessage, setAssetClassesErrorMessage] = useState('');
    const assetClassesOptions = ['Gold', 'Liquid', 'Stocks', 'Mutual Funds'];

    const handleAssetClassesChange = (event) => {
        const value = event.target.value;
        setAssetClasses(value);

        if (value === "") {
        setAssetClassesErrorMessage("Asset classes cannot be empty");
        } else {
        setAssetClassesErrorMessage("");
        }
    };

    const [concerns, setConcerns] = useState('');
    const [concernsErrorMessage, setConcernsErrorMessage] = useState('');

    const handleConcernsChange = (event) => {
        const value = event.target.value;
        setConcerns(value);

        if (value === "") {
            setConcernsErrorMessage("Concerns cannot be empty");
        } else {
            setConcernsErrorMessage("");
        }
    };

    const [existingAmount, setExistingAmount] = useState('0');
    const [existingAmountErrorMessage, setExistingAmountErrorMessage] = useState('');

    const handleExistingAmountChange = (event) => {
        const value = event.target.value.replace(/^0+/, '');
        const formattedValue = Number(value.replace(/\D/g,'')).toLocaleString("en-In")
        setExistingAmount(formattedValue);

        const max = 10000000;

        if (value === ''){
            setExistingAmount('0');
        }
        else if (Number(value.replace(/\D/g,'')) > max){
            setExistingAmountErrorMessage(`The max amount is ₹ ${max.toLocaleString("en-IN")}`)
        }
        else{
            setExistingAmountErrorMessage('');
        } 
    };

    const [equityPercentage, setEquityPercentage] = useState('');
    const [equityPercentageErrorMessage, setEquityPercentageErrorMessage] = useState('');

    const handleEquityPercentageChange = (event) => {
        const value = event.target.value;
        setEquityPercentage(value);

        if (parseFloat(value) < 0 || parseFloat(value) > 100) {
            setEquityPercentageErrorMessage("Invalid Equity Percentage");
        } else {
            setEquityPercentageErrorMessage("");
        }
    };

    const [debtPercentage, setDebtPercentage] = useState('');
    const [debtPercentageErrorMessage, setDebtPercentageErrorMessage] = useState('');

    const handleDebtPercentageChange = (event) => {
        const value = event.target.value;
        setDebtPercentage(value);

        if (parseFloat(value) < 0 || parseFloat(value) > 100) {
            setDebtPercentageErrorMessage("Invalid Debt Percentage");
        } else {
            setDebtPercentageErrorMessage("");
        }
    };

    const [emiPercentage, setEmiPercentage] = useState('');
    const [emiPercentageErrorMessage, setEmiPercentageErrorMessage] = useState('');
    const emiPercentageOptions = ['< 10%', '10% - 30%', '30% - 50%', '50% - 80%'];

    const handleEmiPercentageChange = (event) => {
        const value = event.target.value;
        setEmiPercentage(value);

        if (value === "") {
            setEmiPercentageErrorMessage("Investment history cannot be empty");
        } else {
            setEmiPercentageErrorMessage("");
        }
    };

    const [risk, setRisk] = useState('');
    const [riskErrorMessage, setRiskErrorMessage] = useState('');
    const riskOptions = ['Low', 'Medium', 'High'];

    const handleRiskChange = (event) => {
        const value = event.target.value;
        setRisk(value);

        if (value === "") {
        setRiskErrorMessage("Risk level cannot be empty");
        } else {
        setRiskErrorMessage("");
        }
    };

    const [temporaryDrop, setTemporaryDrop] = useState('');
    const [temporaryDropErrorMessage, setTemporaryDropErrorMessage] = useState('');
    const temporaryDropOptions = ['Option 1', 'Option 2', 'Option 3'];

    const handleTemporaryDropChange = (event) => {
        const value = event.target.value;
        setTemporaryDrop(value);

        if (value === "") {
        setTemporaryDropErrorMessage("Temporary Drop cannot be empty");
        } else {
        setTemporaryDropErrorMessage("");
        }
    };

    const [covidFall, setCovidFall] = useState('');
    const [covidFallErrorMessage, setCovidFallErrorMessage] = useState('');

    const handleCovidFallChange = (event) => {
        const value = event.target.value;
        setCovidFall(value);

        if (value === "") {
        setCovidFallErrorMessage("COVID Fall cannot be empty");
        } else {
        setCovidFallErrorMessage("");
        }
    };

    const [otherComments, setOtherComments] = useState('');
    const [otherCommentsErrorMessage, setOtherCommentsErrorMessage] = useState('');

    const handleOtherCommentsChange = (event) => {
        const value = event.target.value;
        setOtherComments(value);

        if (value === "") {
        setOtherCommentsErrorMessage("Comments cannot be empty");
        } else {
        setOtherCommentsErrorMessage("");
        }
    };

    const [loadMobileNo, setLoadMobileNo] = useState('');
    const [loadMobileNoErrorMessage, setLoadMobileNoErrorMessage] = useState('');

    const handleLoadMobileNoChange = (event) => {
    const value = event.target.value;
    setLoadMobileNo(value);

    if (value === "") {
        setLoadMobileNoErrorMessage("Mobile Number cannot be empty");
    } else if (!isValidMobileNo(value)) {
        setLoadMobileNoErrorMessage("Please enter a valid mobile number");
    } else {
        setLoadMobileNoErrorMessage("");
    }
    };

    const inputData = [
        { name, setState: setName, errorMessage: nameErrorMessage, setErrorMessage: setNameErrorMessage },
        { age, setState: setAge, errorMessage: ageErrorMessage, setErrorMessage: setAgeErrorMessage },
        { emailId, setState: setEmailId, errorMessage: emailIdErrorMessage, setErrorMessage: setEmailIdErrorMessage },
        { mobileNo, setState: setMobileNo, errorMessage: mobileNoErrorMessage, setErrorMessage: setMobileNoErrorMessage },
        { location, setState: setLocation, errorMessage: locationErrorMessage, setErrorMessage: setLocationErrorMessage },
        { family, setState: setFamily, errorMessage: familyErrorMessage, setErrorMessage: setFamilyErrorMessage },
        { occupation, setState: setOccupation, errorMessage: occupationErrorMessage, setErrorMessage: setOccupationErrorMessage },
        { requirement, setState: setRequirement, errorMessage: requirementErrorMessage, setErrorMessage: setRequirementErrorMessage },
        { lumpsum, setState: setLumpsum, errorMessage: lumpsumErrorMessage, setErrorMessage: setLumpsumErrorMessage },
        { sip, setState: setSip, errorMessage: sipErrorMessage, setErrorMessage: setSipErrorMessage },
        { timeFrame, setState: setTimeFrame, errorMessage: timeFrameErrorMessage, setErrorMessage: setTimeFrameErrorMessage },
        { investmentHistory, setState: setInvestmentHistory, errorMessage: investmentErrorMessage, setErrorMessage: setInvestmentErrorMessage },
        { assetClasses, setState: setAssetClasses, errorMessage: assetClassesErrorMessage, setErrorMessage: setAssetClassesErrorMessage },
        { concerns, setState: setConcerns, errorMessage: concernsErrorMessage, setErrorMessage: setConcernsErrorMessage },
        { existingAmount, setState: setExistingAmount, errorMessage: existingAmountErrorMessage, setErrorMessage: setExistingAmountErrorMessage },
        { equityPercentage, setState: setEquityPercentage, errorMessage: equityPercentageErrorMessage, setErrorMessage: setEquityPercentageErrorMessage },
        { debtPercentage, setState: setDebtPercentage, errorMessage: debtPercentageErrorMessage, setErrorMessage: setDebtPercentageErrorMessage },
        { emiPercentage, setState: setEmiPercentage, errorMessage: emiPercentageErrorMessage, setErrorMessage: setEmiPercentageErrorMessage },
        { risk, setState: setRisk, errorMessage: riskErrorMessage, setErrorMessage: setRiskErrorMessage },
        { temporaryDrop, setState: setTemporaryDrop, errorMessage: temporaryDropErrorMessage, setErrorMessage: setTemporaryDropErrorMessage },
        { covidFall, setState: setCovidFall, errorMessage: covidFallErrorMessage, setErrorMessage: setCovidFallErrorMessage },
        { otherComments, setState: setOtherComments, errorMessage: otherCommentsErrorMessage, setErrorMessage: setOtherCommentsErrorMessage },
      ];

    const handleLoadClient = () => {
        const foundClient = data.savedClients.find(client => client.mobileNo === loadMobileNo);
        console.log(foundClient);
        if (foundClient){
            handleNotificationMessage('Client Loaded Successfully');
            setLoadMobileNoErrorMessage('');
            inputData.forEach(field => 
                {
                    field.setState(foundClient[Object.keys(field)[0]]);
                    field.setErrorMessage('');
                }
            )
            
            setTimeout(() => setIsLoadClientClicked(false), 500);
        }
        else{
            setLoadMobileNoErrorMessage('Client not found');
        }
    }

    return(
        <div className="flex flex-col gap-[20px] text-[14px] px-[50px]">
            <h3 className="text-[20px] font-semibold leading-[38px]">Client Requirement</h3>

            {/* Backdrop */}
            <div className="h-fit w-full bg-white rounded-[15px] p-[20px] flex flex-col gap-[20px]">
                <h3 className="text-[18px] font-semibold leading-[10px]">Backdrop</h3>
                <div className="flex flex-wrap gap-x-[50px] gap-y-[30px] pr-[200px]">
                    <CustomTextField label="Name" value={name} errorMessage={nameErrorMessage} handleChange={handleNameChange} />
                    <CustomTextField label="Age" value={age} type="number" errorMessage={ageErrorMessage} handleChange={handleAgeChange} />
                    <CustomTextField label="Email ID" value={emailId} errorMessage={emailIdErrorMessage} handleChange={handleEmailIdChange}/>
                    <CustomTextField label="Mobile Number" type="number" value={mobileNo} errorMessage={mobileNoErrorMessage} handleChange={handleMobileNoChange} />
                    <CustomTextField label="Location" value={location} errorMessage={locationErrorMessage} handleChange={handleLocationChange} />
                    <CustomSelectField label="Family" value={family} valueOptions={familyOptions} handleChange={handleFamilyChange} errorMessage={familyErrorMessage} />
                    {
                        (family == 'Married') &&
                        <>
                        <CustomSelectField label="Spouse" value={spouse} valueOptions={spouseOptions} handleChange={handleSpouseChange} errorMessage={spouseErrorMessage}/>
                        <CustomSelectField label="No of Kids" value={noofKids} valueOptions={noofKidsOptions} handleChange={handleNoofKidsChange} errorMessage={noofKidsErrorMessage}/>
                        <CustomSelectField label="Parents" value={parents} valueOptions={parentsOptions} handleChange={handleParentsChange} errorMessage={parentsErrorMessage}/>
                        </>
                    }
                    <CustomTextField label="Occupation (Role/Company)" value={occupation} errorMessage={occupationErrorMessage} handleChange={handleOccupationChange} />
                </div>
            </div>

            {/* Requirement */}
            <div className="h-[128px] w-full bg-white rounded-[15px] p-[20px] flex flex-col gap-[20px]">
                <h3 className="text-[18px] font-semibold leading-[10px]">Requirement</h3>
                <CustomTextField label="Type Requirement" width="810px" value={requirement} errorMessage={requirementErrorMessage} handleChange={handleRequirementChange} />
            </div>

            {/* One time & SIP Amount */}
            <div className="h-[147px] w-full bg-white rounded-[15px] p-[20px] flex flex-col gap-[15px]">
                <h3 className="text-[18px] font-semibold leading-[10px]">One time & SIP Amount</h3>
                <div className="flex gap-[50px]">
                    <div className="flex flex-col gap-[15px]">
                        <p className="text-[#6E6E72] font-medium">LumpSum</p>
                        <CustomTextField value={lumpsum} errorMessage={lumpsumErrorMessage} handleChange={handleLumpsumChange}
                            InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start" >
                                    <p className="font-medium text-black">₹</p>
                                  </InputAdornment>
                                ),
                              }}
                        />
                    </div>
                    <div className="flex flex-col gap-[15px]">
                        <p className="text-[#6E6E72] font-medium">SIP</p>
                        <CustomTextField type="number" value={sip} errorMessage={sipErrorMessage} handleChange={handleSipChange}
                            InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <p className="font-medium text-black">₹</p>
                                  </InputAdornment>
                                ),
                              }}
                        />
                    </div>
                </div>
            </div>

            {/* Time Frame (Investment) */}
            <div className="h-[128px] w-full bg-white rounded-[15px] p-[20px] flex flex-col gap-[20px]">
                <h3 className="text-[18px] font-semibold leading-[10px]">Time Frame (Investment)</h3>
                <CustomSelectField label="Time Frame" value={timeFrame} valueOptions={timeFrameOptions} handleChange={handleTimeFrameChange} errorMessage={timeFrameErrorMessage} />
            </div>

            {/* History */}
            <div className="h-[190px] w-full bg-white rounded-[15px] p-[20px] flex flex-col gap-[20px]">
                <h3 className="text-[18px] font-semibold leading-[10px]">History</h3>
                <div className="flex flex-wrap gap-x-[50px] gap-y-[30px] pr-[200px]">
                    <CustomSelectField label="How long have you been investing ?" value={investmentHistory} valueOptions={investmentHistoryOptions} handleChange={handleInvestmentHistoryChange} errorMessage={investmentErrorMessage} />
                    <CustomSelectField label="What type of asset classes do you invest?" value={assetClasses} valueOptions={assetClassesOptions} handleChange={handleAssetClassesChange} errorMessage={assetClassesErrorMessage} />
                    <CustomTextField width="810px" label="How has been your investment experience so far? Any concerns?" value={concerns} errorMessage={concernsErrorMessage} handleChange={handleConcernsChange}/>
                </div> 
            </div>

            {/* Existing Portfolio */}
            <div className="h-[320px] w-full bg-white rounded-[15px] p-[20px] flex flex-col gap-[20px]">
                <h3 className="text-[18px] font-semibold leading-[10px]">Existing portfolio</h3>
                <div className="flex flex-col gap-[15px]">
                    <p className="text-[#6E6E72] font-medium">Amount</p>
                    <CustomTextField value={existingAmount} errorMessage={existingAmountErrorMessage} handleChange={handleExistingAmountChange}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start" >
                                <p className="font-medium text-black">₹</p>
                                </InputAdornment>
                            ),
                            }}
                    />
                </div>
                <p className="font-semibold">Asset Allocation</p>
                <div className="flex flex-wrap gap-x-[50px] gap-y-[30px] pr-[200px]">
                    <CustomTextField label="Equity %" type='number' value={equityPercentage} errorMessage={equityPercentageErrorMessage} handleChange={handleEquityPercentageChange} />
                    <CustomTextField label="Debt %" type='number' value={debtPercentage} errorMessage={debtPercentageErrorMessage} handleChange={handleDebtPercentageChange} />
                    <CustomSelectField width='810px' label="What % of your income goes towards monthly EMIs?" value={emiPercentage} valueOptions={emiPercentageOptions} handleChange={handleEmiPercentageChange} errorMessage={emiPercentageErrorMessage} />
                </div> 
            </div>

            {/* Risk */}
            <div className="h-[330px] w-full bg-white rounded-[15px] p-[20px] flex flex-col gap-[20px]">
                <h3 className="text-[18px] font-semibold leading-[10px]">Backdrop</h3>
                <div className="flex flex-wrap gap-x-[50px] gap-y-[30px] pr-[200px]">
                    <CustomSelectField label="Risk" value={risk} valueOptions={riskOptions} handleChange={handleRiskChange} errorMessage={riskErrorMessage} />
                    <CustomSelectField width="810px" label="What can you handle as a temporary drop in your portfolio?" value={temporaryDrop} valueOptions={temporaryDropOptions} handleChange={handleTemporaryDropChange} errorMessage={temporaryDropErrorMessage} />
                    <CustomTextField width="810px" label="What did you do during the Covid fall?" value={covidFall} errorMessage={covidFallErrorMessage} handleChange={handleCovidFallChange} />
                    <CustomTextField width="810px" label="Any other Comments" value={otherComments} errorMessage={otherCommentsErrorMessage} handleChange={handleOtherCommentsChange} />
                </div>
            </div>

            {
                (isLoadClientClicked) &&
                <div className='absolute w-screen h-screen top-[-60px] left-0 bg-[rgba(10,22,8,0.3)] flex items-end justify-center z-[100]' >
                    <div className={`relative w-full h-[284px] rounded-t-[25px] bg-white px-[30px] pt-[40px] flex flex-col gap-y-[20px] overflow-auto`}>
                        <ClearRounded className='absolute top-[15px] right-[15px] border-[1px] border-gray-300 rounded-[30px] p-[1px] cursor-pointer text-primary text-[18px]' onClick={() => setIsLoadClientClicked(false)} />
                        

                        <h1 className="text-[20px] font-semibold">Load Client</h1>
                        <p>Lorem ipsum is placeholder text commonly used in the graphic, print,</p>
                        <CustomTextField label="Mobile Number" type="number" value={loadMobileNo} errorMessage={loadMobileNoErrorMessage} handleChange={handleLoadMobileNoChange} />

                        <button className="w-[230px] h-[50px] bg-primary rounded-[25px] text-white font-semibold text-[18px] mt-[20px]" onClick={handleLoadClient}>Proceed</button>
                    </div>
                </div>
            }
        </div>
    );
}