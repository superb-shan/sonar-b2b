"use client";
import React, { useEffect, useState } from "react";
import NavBar from "../components/register-with-us/NavBar";
import { ThemeProvider } from '@mui/material/styles';
import theme from "../theme";
import { FormControlLabel, Radio, TextareaAutosize, Typography, } from "@mui/material";
import { RadioButtonUnchecked } from '@mui/icons-material';
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { CustomSelectField, CustomTextField, CustomDatePicker, CustomPasswordField} from "../components/InputFields";
import Link from "next/link";
import { useRouter } from "next/navigation";
import dayjs from "dayjs";

import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import resetPassword from 'public/resetPassword/resetPassword@2x.png'
import closeRed from 'public/login/closeRed.svg'
import image from 'public/login/image.svg'

// Create a reusable AddressFields component
function AddressFields({ stateOptions, setValueObject, isCorrespondenceAddress }) {
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [addressLine3, setAddressLine3] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pincode, setPincode] = useState("");
  const [email, setEmail] = useState("");
  const [contactNoOffice, setContactNoOffice] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  useEffect(() => {
    setValueObject({
      addressLine1, addressLine2, addressLine3, city, state, pincode, email, contactNoOffice, mobileNumber
    })
  }, [addressLine1, addressLine2, addressLine3, city, state, pincode, email, contactNoOffice, mobileNumber]
  );

  // Error message states
  const [addressLine1ErrorMessage, setAddressLine1ErrorMessage] = useState('');
  const [addressLine2ErrorMessage, setAddressLine2ErrorMessage] = useState('');
  const [addressLine3ErrorMessage, setAddressLine3ErrorMessage] = useState('');
  const [cityErrorMessage, setCityErrorMessage] = useState('');
  const [stateErrorMessage, setStateErrorMessage] = useState('');
  const [pincodeErrorMessage, setPincodeErrorMessage] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [contactNoOfficeErrorMessage, setContactNoOfficeErrorMessage] = useState('');
  const [mobileNumberErrorMessage, setMobileNumberErrorMessage] = useState('');

  // handleChange functions
  const handleAddressLine1Change = (event) => {
    const value = event.target.value;
    setAddressLine1(value);
    
    if (value === "") {
      setAddressLine1ErrorMessage("Address Line 1 cannot be empty");
    } else {
      setAddressLine1ErrorMessage("");
    }
  };

  const handleAddressLine2Change = (event) => {
    const value = event.target.value;
    setAddressLine2(value);
  
    if (value === "") {
      setAddressLine2ErrorMessage("Address Line 2 cannot be empty");
    } else {
      setAddressLine2ErrorMessage("");
    }
  };
  
  const handleAddressLine3Change = (event) => {
    const value = event.target.value;
    setAddressLine3(value);
  
    if (value === "") {
      setAddressLine3ErrorMessage("Address Line 3 cannot be empty");
    } else {
      setAddressLine3ErrorMessage("");
    }
  };

  const handleCityChange = (event) => {
    const value = event.target.value;
    setCity(value);
  
    if (value === "") {
      setCityErrorMessage("City cannot be empty");
    } else {
      setCityErrorMessage("");
    }
  };

  const handleStateChange = (event) => {
    const value = event.target.value;
    setState(value);
  
    if (value === "") {
      setStateErrorMessage(""); //!Should be changed
    } else {
      setStateErrorMessage("");
    }
  }
  
  const handlePincodeChange = (event) => {
    const value = event.target.value;
    setPincode(value);
  
    if (value === "") {
      setPincodeErrorMessage("Pincode cannot be empty");
    } else if (!/^\d{6}$/.test(value)) {
      setPincodeErrorMessage("Pincode must be a 6-digit number");
    } else {
      setPincodeErrorMessage("");
    }
  };
  
  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  
    if (value === "") {
      setEmailErrorMessage("Email cannot be empty");
    } else if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(value)) {
      setEmailErrorMessage("Invalid email format");
    } else if (value.indexOf('@') === -1 || value.indexOf('@') !== value.lastIndexOf('@')) {
      setEmailErrorMessage("Email must contain exactly one '@'");
    } else if (value.endsWith('.') || value.endsWith('@')) {
      setEmailErrorMessage("Email cannot end with a dot or '@'");
    } else if (value.includes('notprovided') || value.includes('Noemail') || value.includes('xyz')) {
      setEmailErrorMessage("Email cannot contain 'notprovided', 'Noemail', or 'xyz'");
    } else {
      // Check for a dot before the top-level domain
      const parts = value.split('.');
      if (parts.length < 2 || parts[parts.length - 2].indexOf('@') === -1) {
        setEmailErrorMessage("Email must have a '.' before the top-level domain");
      } else {
        setEmailErrorMessage("");
      }
    }
  };
  
  
  const handleContactNoOfficeChange = (event) => {
    const value = event.target.value;
    setContactNoOffice(value);
  
    if (value === "") {
      setContactNoOfficeErrorMessage("Contact No. (Office) cannot be empty");
    } else if (!/^\d{10}$/.test(value)) {
      setContactNoOfficeErrorMessage("Invalid contact number format (10 digits required)");
    } else {
      setContactNoOfficeErrorMessage("");
    }
  };
  
  const handleMobileNumberChange = (event) => {
    const value = event.target.value;
    setMobileNumber(value);
  
    if (value === "") {
      setMobileNumberErrorMessage("Mobile Number cannot be empty");
    } else if (!/^\d{10}$/.test(value)) {
      setMobileNumberErrorMessage("Invalid mobile number format (10 digits required)");
    } else {
      setMobileNumberErrorMessage("");
    }
  };

  return (
    <div className="flex flex-wrap gap-x-[50px] gap-y-[30px]">
      <CustomTextField label="Address Line 1" width="810px" value={addressLine1} errorMessage={addressLine1ErrorMessage} handleChange={handleAddressLine1Change} />
      <CustomTextField label="Address Line 2" width="810px" value={addressLine2} errorMessage={addressLine2ErrorMessage} handleChange={handleAddressLine2Change} />
      <CustomTextField label="Address Line 3" width="810px" value={addressLine3} errorMessage={addressLine3ErrorMessage} handleChange={handleAddressLine3Change} />
      <CustomTextField label="City" value={city} handleChange={handleCityChange} errorMessage={cityErrorMessage} />
      <CustomSelectField label="State" value={state} valueOptions={stateOptions} handleChange={handleStateChange} errorMessage={stateErrorMessage} />
      <CustomTextField label="Pincode" value={pincode} errorMessage={pincodeErrorMessage} handleChange={handlePincodeChange} />
      
      {isCorrespondenceAddress &&
        <>
          <CustomTextField label="Email" value={email} errorMessage={emailErrorMessage} handleChange={handleEmailChange} />
          <CustomTextField label="Mobile Number" value={mobileNumber} errorMessage={mobileNumberErrorMessage} handleChange={handleMobileNumberChange} />
          <CustomTextField label="Contact No. Office" value={contactNoOffice} errorMessage={contactNoOfficeErrorMessage} handleChange={handleContactNoOfficeChange} />
        </>
      }

    </div>
  );
}

function Login() {
  const searchParams = useSearchParams()
  const register = searchParams.get('register')
  const router = useRouter();
  
  const [isLogin, setIsLogin] = useState((register)?'register':'login');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isIndividual, setIsIndividual] = useState('individual');
  const [name, setName] = useState('');
  const [dob, setDob] = useState(null);
  const [panNumber, setPanNumber] = useState('');
  const [contactNoOffice, setContactNoOffice] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  const [isCorrespondence, setIsCorrespondence] = useState(false);
  const [permanentAddressObject, setPermanentAddressObject] = useState({});
  const [correspondenceAddressObject, setCorrespondenceAddressObject] = useState({});

  const [arnNumber, setArnNumber] = useState('');
  const [issueDate, setIssueDate] = useState(null);
  const [expiryDate, setExpiryDate] = useState(null);
  const [status, setStatus] = useState('');

  const [isSubmitted, setIsSubmitted] = useState(false);  
  const [isError, setIsError] = useState(false);

  //Field Specific Error Message
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [contactNoOfficeErrorMessage, setContactNoOfficeErrorMessage] = useState('');
  const [mobileNumberErrorMessage, setMobileNumberErrorMessage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [nameErrorMessage, setNameErrorMessage] = useState('');
  const [dobErrorMessage, setDobErrorMessage] = useState('');
  const [panNumberErrorMessage, setPanNumberErrorMessage] = useState('');
  const [arnNumberErrorMessage, setArnNumberErrorMessage] = useState('');
  const [issueDateErrorMessage, setIssueDateErrorMessage] = useState('');
  const [expiryDateErrorMessage, setExpiryDateErrorMessage] = useState('');
  const [statusErrorMessage, setStatusErrorMessage] = useState('');
  const [forgotPassword, setForgotPassword] = useState(false);
  const [submitResetPassword, setSubmitResetPassword] = useState(false)

  const minDob = dayjs().subtract(110, 'year');
  const maxDob = dayjs().subtract(18, 'year');

  const [uploadFiles, setUploadFiles] = useState({
      pan: false,
      aadhar: false,
      arn: false,
      cancelledCheque: false,
      signature: false,
      moaAndAoa: false,
      authorizedSignatoryList: false
  })

  // Event handlers
  const handleIsLoginChange = (event) => {
    setIsLogin(event.target.value);
    if (event.target.value === "register") {
      router.push('/b2b/login?register=true', undefined, { shallow: true });
    }
    else {
      router.push('/b2b/login', undefined, { shallow: true });
    }
  };

  const handleIsIndividualChange = (event) => {
    setIsIndividual(event.target.value);
    if (isIndividual !== "individual" && (dob && dayjs(dob).isBefore(minDob) || dayjs(dob).isAfter(maxDob))) {
      setDobErrorMessage('DOB must be between 18 and 110 years ago.');
    } 
    else {
      setDobErrorMessage('');
    }
  };

  const handleIsCorrespondenceChange = () => {
    setIsCorrespondence(!isCorrespondence);
  };

  const handleSubmit = () => {
    if((email === "b2btest1@fundsindia.com" || email === "b2btest2@fundsindia.com" || email === "b2btest3@fundsindia.com") && password === "12345678"){
      setPasswordErrorMessage("");
      if (isLogin === 'login') {router.push('/b2b/partner'); return;}
    }
    else
      setPasswordErrorMessage("Email ID or Password doesn't match!");

    if (isLogin==='register') {
      let uploadFilesAsArray = Object.entries(uploadFiles);
      for (let i=0; i<5; i++) {
        if (!uploadFilesAsArray[i][1]) return;
      }
      if (isIndividual !== "individual" && (!uploadFilesAsArray[5][1] || !uploadFilesAsArray[6][1])) return;

      setIsSubmitted( isLogin==='register'? true : null);
      console.log('Submit clicked');
    }
  
    if (isLogin === 'login') {
      console.log('Email:', email);
      console.log('Password:', password);
    } else {
      console.log('Is Individual:', isIndividual);
      console.log('Name:', name);
      console.log('Date of Birth:', dob);
      console.log('PAN Number:', panNumber);
      console.log('Is Correspondence Same as Permanent:', isCorrespondence);
      console.log('Permanent Address State:', permanentAddressObject);
      console.log('Correspondence Address State:', correspondenceAddressObject);
      console.log('ARN Number:', arnNumber);
      console.log('Issue Date:', issueDate);
      console.log('Expiry Date:', expiryDate);
      console.log('Status:', status);
    }
  };

  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
    if (!(value.length >= 2 && value.length <= 50)) {
      setNameErrorMessage("Name should be of min. 2 and max. 50 length");
    } else if (!/^[A-Za-z]+$/.test(value)) {
      setNameErrorMessage("Name can contain only alphabets");
    } else {
      setNameErrorMessage("");
    }
  };
  
  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  
    if (value === "") {
      setEmailErrorMessage("Email cannot be empty");
    } else if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(value)) {
      setEmailErrorMessage("Invalid email format");
    } else if (value.indexOf('@') === -1 || value.indexOf('@') !== value.lastIndexOf('@')) {
      setEmailErrorMessage("Email must contain exactly one '@'");
    } else if (value.endsWith('.') || value.endsWith('@')) {
      setEmailErrorMessage("Email cannot end with a dot or '@'");
    } else if (value.includes('notprovided') || value.includes('Noemail') || value.includes('xyz')) {
      setEmailErrorMessage("Email cannot contain 'notprovided', 'Noemail', or 'xyz'");
    } else {
      // Check for a dot before the top-level domain
      const parts = value.split('.');
      if (parts.length < 2 || parts[parts.length - 2].indexOf('@') === -1) {
        setEmailErrorMessage("Email must have a '.' before the top-level domain");
      } else {
        setEmailErrorMessage("");
      }
    }
  };
  
  const handleDobChange = (newDate) => {

    if (isIndividual === "individual" && (newDate && dayjs(newDate).isBefore(minDob) || dayjs(newDate).isAfter(maxDob))) {
      setDobErrorMessage('DOB must be between 18 and 110 years ago.');
    } 
    else {
      setDobErrorMessage('');
    }

    setDob(newDate);
  };
  
  const handleContactNoOfficeChange = (event) => {
    const value = event.target.value;
    setContactNoOffice(value);
  
    if (value === "") {
      setContactNoOfficeErrorMessage("Contact No. (Office) cannot be empty");
    } else if (!/^\d{10}$/.test(value)) {
      setContactNoOfficeErrorMessage("Invalid contact number format (10 digits required)");
    } else {
      setContactNoOfficeErrorMessage("");
    }
  };
  
  const handleMobileNumberChange = (event) => {
    const value = event.target.value;
    setMobileNumber(value);
  
    if (value === "") {
      setMobileNumberErrorMessage("Mobile Number cannot be empty");
    } else if (!/^\d{10}$/.test(value)) {
      setMobileNumberErrorMessage("Invalid mobile number format (10 digits required)");
    } else {
      setMobileNumberErrorMessage("");
    }
  };
  
  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  
    if (value === "") {
      setPasswordErrorMessage("Password cannot be empty");
    } else if (value.length < 8) {
      setPasswordErrorMessage("Password must be at least 8 characters long");
    } else {
      setPasswordErrorMessage("");
    }
  };
  
  const handlePanNumberChange = (event) => {
    const value = event.target.value;
    setPanNumber(value);
  
    if (value === "") {
      setPanNumberErrorMessage("PAN Number cannot be empty");
    } else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(value)) {
      setPanNumberErrorMessage("Invalid PAN Number format");
    } else {
      setPanNumberErrorMessage("");
    }
  };
  
  const handleArnNumberChange = (event) => {
    const value = event.target.value;
    setArnNumber(value);
  
    if (value === "") {
      setArnNumberErrorMessage("ARN Number cannot be empty");
    } else if (!/^[A-Za-z0-9]+$/.test(value)) {
      setArnNumberErrorMessage("ARN Number can only contain alphanumeric characters");
    } else {
      setArnNumberErrorMessage("");
    }
  }

  const handleIssueDateChange = (date) => {
    setIssueDate(date);
    // Add issue date validation logic here if needed
  };

  const handleExpiryDateChange = (date) => {
    setExpiryDate(date);
    // Add expiry date validation logic here if needed
  };

  const handleStatusChange = (event) => {
    const value = event.target.value;
    setStatus(value);
    // Add status validation logic here if needed
  };
  

  const states = ['Kerala', 'Tamil Nadu'];

  return (
    <ThemeProvider theme={theme}>
      <div className={`relative ${submitResetPassword ? 'overflow-hidden' :'overflow-auto'} h-screen`} >
      <NavBar />
      <div className="pt-[30px] px-[80px] font-poppins text-[14px]">

        {
          !isSubmitted?
        <>
        {/* Login selector */}
        { forgotPassword != 'forgot' &&
            <div className="bg-[#F8F9FA] border-[#E4E5E5] border-[1px] rounded-[25px] w-[222px] h-[45px] p-[5px] flex">
              <button
                className={`w-[96px] h-[35px] ${isLogin === 'login' ? 'bg-primary text-white font-semibold' : 'font-medium'
                  } rounded-[25px]  flex justify-center items-center`}
                value="login"
                onClick={handleIsLoginChange}
              >
                Login
              </button>
              <button
                className={`w-[116px] h-[35px] ${isLogin === 'register' ? 'bg-primary text-white font-semibold' : 'font-medium'
                  } rounded-[25px]  flex justify-center items-center`}
                value="register"
                onClick={handleIsLoginChange}
              >
                Register
              </button>
            </div>
        }

        {isLogin === 'login' ?
        
        (
          <div className="w-[481px] font-medium text-[14px] mt-[82px]">
            {
              (forgotPassword === 'forgot') ?
                <>
                  <h1 className="mb-[30px] font-semibold text-[24px]">Forgot Password</h1>
                  <p className="mb-[27px]">Enter the email address you used when you joined and we’ll send you instructions to reset your password.</p>
                </>
              :
                <div>
                This login is restricted to <span className="font-bold">Partners</span> only
                If you are an investor and wish to access your account, please <a href="#" className="text-primary">click here</a>
                </div>
            }

            <div className="py-[20px] flex flex-col gap-x-[20px]">
              <div className="flex gap-[30px] flex-col">
                <CustomTextField label="Email" type="text" value={email} errorMessage={emailErrorMessage} handleChange={handleEmailChange} />
                {
                  (!forgotPassword) &&
                  <CustomPasswordField label="Password" value={password} errorMessage={passwordErrorMessage} handleChange={handlePasswordChange} />
                }
              </div>
              {
                (!forgotPassword) &&
                  <a href="#" onClick={()=> setForgotPassword('forgot')} className="font-medium text-right mr-[101px] text-primary mt-[25px]">Forgot password?</a>
              }
            </div>
          </div>
        ) :
        
        (
          <div className="w-[859px]">

            <p className='text-[18px] font-semibold my-[20px]'>Partner information</p>

            {/* Individuality provider */}
                <div className="mt-[10px] flex justify-start items-center gap-[20px] p-[1px]">
                  <div className="text-textLight font-medium">PAN Status</div>
                    <button className={`w-[141px] h-[40px] bg-[#F8F9FA] ${isIndividual === 'individual' ? 'border-primary text-primary font-semibold' : 'border-[#E4E5E5] font-medium'} border-[1px] flex justify-center items-center rounded-[25px]`} value={'individual'} onClick={handleIsIndividualChange}> Individuals </button>
                    <button className={`w-[178px] h-[40px] bg-[#F8F9FA] ${isIndividual === 'non-individuals' ? 'border-primary text-primary font-semibold' : 'border-[#E4E5E5] font-medium'} border-[1px] flex justify-center items-center rounded-[25px]`} value={'non-individuals'} onClick={handleIsIndividualChange}> Non-Individuals </button>
                </div>

              <div className="pt-[20px] pb-[25px] flex flex-wrap gap-y-[30px] gap-x-[50px]">
                <CustomTextField label="Name" type="text" value={name} errorMessage={nameErrorMessage} handleChange={handleNameChange} />
                <CustomDatePicker label="Date Of Birth / incorporation" value={dob} handleChange={handleDobChange} disableFuture={true} errorMessage={dobErrorMessage} />
                <CustomTextField label="PAN Number" type="text" value={panNumber} errorMessage={panNumberErrorMessage} handleChange={handlePanNumberChange} />
                <CustomTextField label="Email" value={email} errorMessage={emailErrorMessage} handleChange={handleEmailChange} />
                <CustomTextField label="Mobile Number" value={mobileNumber} type={"number"} errorMessage={mobileNumberErrorMessage} handleChange={handleMobileNumberChange} />
                <CustomTextField label="Contact No. Office" value={contactNoOffice} type={"number"} errorMessage={contactNoOfficeErrorMessage} handleChange={handleContactNoOfficeChange} />
            </div>

            <div className="flex flex-col gap-y-[20px] gap-x-[50px]">
              {/* Registered Address */}
              <div className="-ml-[1px] font-semibold text-[18px]">
                Permanent / Registered Office Address
              </div>
              <AddressFields
                stateOptions={states}
                setValueObject={setPermanentAddressObject}
              />

              {/* Corresponding Address */}
              <div>
                <FormControlLabel
                  sx={{height: '20px'}}
                  control={
                    <Radio
                      checked={isCorrespondence}
                      icon={<RadioButtonUnchecked sx={{ color: 'primary.main' }} />}
                      onClick={handleIsCorrespondenceChange}
                      value={true}
                    />
                  }
                  label={
                    <Typography variant="body1" sx={{ fontSize: '14px', fontWeight: 'medium' }}>
                      Correspondence Address (For all Communication) Same as Permanent/Registered Office Address
                    </Typography>
                  }
                />
              </div>
              { !isCorrespondence && (
                <>
                    <div className="-ml-[1px] font-semibold text-[18px]">
                    Correspondence Address (For all Communication)
                    </div>
                    <AddressFields
                      stateOptions={states}
                      setValueObject={setCorrespondenceAddressObject}
                      isCorrespondenceAddress
                    />
                </>
              )}

              {/* Registration Details */}

                <div className="-ml-[1px] font-semibold text-[18px]">
                    Registration Details
                </div>
                <div className="flex flex-wrap gap-x-[50px] gap-y-[30px]">
                  <CustomTextField label="ARN Number" type="text" value={arnNumber} errorMessage={arnNumberErrorMessage} handleChange={handleArnNumberChange} />
                  <CustomDatePicker label="Issue Date" value={issueDate} handleChange={handleIssueDateChange} />
                  <CustomDatePicker label="Expiry Date" value={expiryDate} handleChange={handleExpiryDateChange} />
                  <CustomTextField label="Status" type="text" value={status} errorMessage={statusErrorMessage} handleChange={handleStatusChange} />
                </div>


                {/* Upload Documents */}

                <div className="-ml-[1px] mb-[5px] font-semibold text-[18px]">
                    Upload Documents
                </div>

                <div className="flex flex-wrap gap-x-[50px] gap-y-[30px]">
                  
                  <div className=" w-[380px] h-[50px] border-[#c4c4c4] border-[1px] rounded-[10px] relative px-[20px] py-[6px]">
                    <h1 className="text-[12px] text-[#6E6E72] font-medium bg-white px-[2px] absolute top-[-10px] left-[13px]">PAN Card (front and back)</h1>
                    {
                      (!uploadFiles.pan) ?
                      <>
                        <p className="text-[14px] text-[#6E6E72] font-medium ">
                          Upload your File here or 
                          <span 
                            className="text-[#0066CD] cursor-pointer" 
                            onClick={() => setUploadFiles( files => ({
                              ...files,
                              pan: true
                            }))}
                          > Browse File</span>
                        </p>
                        <p className="text-[12px] text-[#6E6E72]">File format : JPG, PNG</p>
                      </>
                      :
                      <div className=" w-full h-full flex justify-between items-center">
                        <div className="flex gap-x-[10px] justify-center items-center">
                          <Image src={image} />
                          <p className="text-[#6E6E72] text-[12px]">PAN.jpg</p>
                        </div>
                        <Image src={closeRed} className="cursor-pointer"
                          onClick={() => setUploadFiles( files => ({
                            ...files,
                            pan: false
                          }))}
                        />
                      </div>
                    }
                  </div>

                  <div className=" w-[380px] h-[50px] border-[#c4c4c4] border-[1px] rounded-[10px] relative px-[20px] py-[6px]">
                    <h1 className="text-[12px] text-[#6E6E72] font-medium bg-white px-[2px] absolute top-[-10px] left-[13px]">Aadhaar Card (front and back)</h1>
                    {
                      (!uploadFiles.aadhar) ?
                      <>
                        <p className="text-[14px] text-[#6E6E72] font-medium ">
                          Upload your File here or 
                          <span 
                            className="text-[#0066CD] cursor-pointer" 
                            onClick={() => setUploadFiles( files => ({
                              ...files,
                              aadhar: true
                            }))}
                          > Browse File</span>
                        </p>
                        <p className="text-[12px] text-[#6E6E72]">File format : JPG, PNG</p>
                      </>
                      :
                      <div className=" w-full h-full flex justify-between items-center">
                        <div className="flex gap-x-[10px] justify-center items-center">
                          <Image src={image} />
                          <p className="text-[#6E6E72] text-[12px]">Aadhaar.jpg</p>
                        </div>
                        <Image src={closeRed} className="cursor-pointer"
                          onClick={() => setUploadFiles( files => ({
                            ...files,
                            aadhar: false
                          }))}
                        />
                      </div>
                    }
                  </div>

                  <div className=" w-[380px] h-[50px] border-[#c4c4c4] border-[1px] rounded-[10px] relative px-[20px] py-[6px]">
                    <h1 className="text-[12px] text-[#6E6E72] font-medium bg-white px-[2px] absolute top-[-10px] left-[13px]">ARN Card</h1>
                    {
                      (!uploadFiles.arn) ?
                      <>
                        <p className="text-[14px] text-[#6E6E72] font-medium ">
                          Upload your File here or 
                          <span 
                            className="text-[#0066CD] cursor-pointer" 
                            onClick={() => setUploadFiles( files => ({
                              ...files,
                              arn: true
                            }))}
                          > Browse File</span>
                        </p>
                        <p className="text-[12px] text-[#6E6E72]">File format : JPG, PNG</p>
                      </>
                      :
                      <div className=" w-full h-full flex justify-between items-center">
                        <div className="flex gap-x-[10px] justify-center items-center">
                          <Image src={image} />
                          <p className="text-[#6E6E72] text-[12px]">ARN.jpg</p>
                        </div>
                        <Image src={closeRed} className="cursor-pointer"
                          onClick={() => setUploadFiles( files => ({
                            ...files,
                            arn: false
                          }))}
                        />
                      </div>
                    }
                  </div>

                  <div className=" w-[380px] h-[50px] border-[#c4c4c4] border-[1px] rounded-[10px] relative px-[20px] py-[6px]">
                    <h1 className="text-[12px] text-[#6E6E72] font-medium bg-white px-[2px] absolute top-[-10px] left-[13px]">Cancelled cheque of bank account</h1>
                    {
                      (!uploadFiles.cancelledCheque) ?
                      <>
                        <p className="text-[14px] text-[#6E6E72] font-medium ">
                          Upload your File here or 
                          <span 
                            className="text-[#0066CD] cursor-pointer" 
                            onClick={() => setUploadFiles( files => ({
                              ...files,
                              cancelledCheque: true
                            }))}
                          > Browse File</span>
                        </p>
                        <p className="text-[12px] text-[#6E6E72]">File format : JPG, PNG</p>
                      </>
                      :
                      <div className=" w-full h-full flex justify-between items-center">
                        <div className="flex gap-x-[10px] justify-center items-center">
                          <Image src={image} />
                          <p className="text-[#6E6E72] text-[12px]">Cancelled cheque.jpg</p>
                        </div>
                        <Image src={closeRed} className="cursor-pointer"
                          onClick={() => setUploadFiles( files => ({
                            ...files,
                            cancelledCheque: false
                          }))}
                        />
                      </div>
                    }
                  </div>

                  <div className=" w-[380px] h-[50px] border-[#c4c4c4] border-[1px] rounded-[10px] relative px-[20px] py-[6px]">
                    <h1 className="text-[12px] text-[#6E6E72] font-medium bg-white px-[2px] absolute top-[-10px] left-[13px]">Signature</h1>
                    {
                      (!uploadFiles.signature) ?
                      <>
                        <p className="text-[14px] text-[#6E6E72] font-medium ">
                          Upload your File here or 
                          <span 
                            className="text-[#0066CD] cursor-pointer" 
                            onClick={() => setUploadFiles( files => ({
                              ...files,
                              signature: true
                            }))}
                          > Browse File</span>
                        </p>
                        <p className="text-[12px] text-[#6E6E72]">File format : JPG, PNG</p>
                      </>
                      :
                      <div className=" w-full h-full flex justify-between items-center">
                        <div className="flex gap-x-[10px] justify-center items-center">
                          <Image src={image} />
                          <p className="text-[#6E6E72] text-[12px]">Signature.jpg</p>
                        </div>
                        <Image src={closeRed} className="cursor-pointer"
                          onClick={() => setUploadFiles( files => ({
                            ...files,
                            signature: false
                          }))}
                        />
                      </div>
                    }
                  </div>

                  { isIndividual !== "individual" &&
                    <>
                    <div className=" w-[380px] h-[50px] border-[#c4c4c4] border-[1px] rounded-[10px] relative px-[20px] py-[6px]">
                      <h1 className="text-[12px] text-[#6E6E72] font-medium bg-white px-[2px] absolute top-[-10px] left-[13px]">MOA and AOA</h1>
                      {
                        (!uploadFiles.moaAndAoa) ?
                        <>
                          <p className="text-[14px] text-[#6E6E72] font-medium ">
                            Upload your File here or 
                            <span 
                              className="text-[#0066CD] cursor-pointer" 
                              onClick={() => setUploadFiles( files => ({
                                ...files,
                                moaAndAoa: true
                              }))}
                            > Browse File</span>
                          </p>
                          <p className="text-[12px] text-[#6E6E72]">File format : JPG, PNG</p>
                        </>
                        :
                        <div className=" w-full h-full flex justify-between items-center">
                          <div className="flex gap-x-[10px] justify-center items-center">
                            <Image src={image} />
                            <p className="text-[#6E6E72] text-[12px]">MOA and AOA.jpg</p>
                          </div>
                          <Image src={closeRed} className="cursor-pointer"
                            onClick={() => setUploadFiles( files => ({
                              ...files,
                              moaAndAoa: false
                            }))}
                          />
                        </div>
                      }
                    </div>

                    <div className=" w-[380px] h-[50px] border-[#c4c4c4] border-[1px] rounded-[10px] relative px-[20px] py-[6px]">
                      <h1 className="text-[12px] text-[#6E6E72] font-medium bg-white px-[2px] absolute top-[-10px] left-[13px]">Authorised Signatory List</h1>
                      {
                        (!uploadFiles.authorizedSignatoryList) ?
                        <>
                          <p className="text-[14px] text-[#6E6E72] font-medium ">
                            Upload your File here or 
                            <span 
                              className="text-[#0066CD] cursor-pointer" 
                              onClick={() => setUploadFiles( files => ({
                                ...files,
                                authorizedSignatoryList: true
                              }))}
                            > Browse File</span>
                          </p>
                          <p className="text-[12px] text-[#6E6E72]">File format : JPG, PNG</p>
                        </>
                        :
                        <div className=" w-full h-full flex justify-between items-center">
                          <div className="flex gap-x-[10px] justify-center items-center">
                            <Image src={image} />
                            <p className="text-[#6E6E72] text-[12px]">Authorised Signatory List.jpg</p>
                          </div>
                          <Image src={closeRed} className="cursor-pointer"
                            onClick={() => setUploadFiles( files => ({
                              ...files,
                              authorizedSignatoryList: false
                            }))}
                          />
                        </div>
                      }
                    </div>
                    </>
                  }
                </div>

                {/* Products and Services */}
                <div className="-ml-[1px] font-semibold text-[18px]">
                    Products and Services
                </div>

                <div className="-mt-[7px] flex">

                    <div>
                        <div className="flex gap-[10px] items-center">
                            <div className="w-[8px] h-[8px] rounded-full bg-[#0071E7]"
                            ></div>
                            <span className="font-medium">Mutual Funds</span>
                        </div>
                    </div>
                    <div className="mx-[30px] px-[30px] border-x-[1px] border-x-[#E4E5E5]">
                    <div className="flex gap-[10px] items-center">
                            <div className="w-[8px] h-[8px] rounded-full bg-[#0071E7]"
                            ></div>
                            <span className="font-medium">Fixed Deposits & Bonds</span>
                        </div>
                    </div>
                    <div>
                    <div className="flex gap-[10px] items-center">
                            <div className="w-[8px] h-[8px] rounded-full bg-[#0071E7]"
                            ></div>
                            <span className="font-medium">NPS</span>
                        </div>
                    </div>
                </div>
              </div>
          </div>
        )}

        {/* Submit */}
        <div className=" flex gap-x-[20px]">
          {
            (forgotPassword == 'forgot') &&
            <button onClick={()=>setForgotPassword(false)} className="mt-[190px] w-[130px] h-[50px] border-[1px] border-[#0071E7] rounded-[25px] font-bold flex items-center justify-center text-primary">Go Back</button>
          }
          {
            (forgotPassword == 'forgot') ?
              <button className='bg-primary w-[230px] h-[50px] mt-[190px] mb-[15px] text-white font-semibold flex justify-center items-center rounded-[25px] text-[18px] ' 
                onClick={()=>{ 
                  if (email.trim()!='' && emailErrorMessage=='') {
                    setSubmitResetPassword(true); setForgotPassword('')
                  }
                  if (email==''){
                    setEmailErrorMessage('Email cannot be empty')
                  }
                }
              }>Submit</button>
            :
              <button className= {`bg-primary w-[230px] h-[50px] ${isLogin === "login" ? "mt-[190px] mb-[15px]" : "my-[47px]"} text-white font-semibold flex justify-center items-center rounded-[25px] text-[18px] `} onClick={handleSubmit} >
                {isLogin === "login" ? "Login" : "Submit"}
              </button>
          }
        </div>

      </>
      
      : 

      // Success Component
      <>
        <div className="w-[1120px] h-[189px] flex flex-col py-[68px] px-[46px] gap-y-[15px] rounded-[15px] shadow-lg items-center mt-[275px] mx-auto">
          <Image src="/home/Group 405761/Group 405761@2x.png" width={113} height={133} className='w-[113px] h-[132px] absolute -mt-[150px]' />
          <h3 className='text-[24px] text-[#00A345] font-semibold leading-[30px]'>Success</h3>
          <p className='text-[16px] font-semibold text-center leading-[24px]'>Thanks for empanelling with us, we shall get in touch with you to complete the empanelment process.</p>
        </div>
      </>

      }

      <div className={`${isSubmitted ? "mt-[170px]" : "border-t-[1px] border-t-[#E4E5E5]"} py-[10px] w-[827px] text-[#777777] text-[12px]`}>
            <div> &#8505; Mutual Fund investments are subject to market risks, read all scheme related documents carefully.</div>
            <div>© Wealth India Financial Services Pvt. Ltd. 2023</div>
            { isLogin === "login" && (
              <>
                <div className="font-bold">Wealth India Financial Services Pvt. Ltd.,</div>
                <div>No. 38 and 39, 3rd Floor, Uttam Building, Whites Road, Royapettah, Chennai, Tamil andu 600014</div>
                <div>Tel : 61104100 Email : contactpartner@fundsindia.com</div>
              </>
            ) }
        </div>
      </div>

      {
        isError && 
        <div className="w-[1320px] h-[93px] bg-[#FFF4ED] border-[1px] border-[#FF7922] rounded-t-[20px] mx-auto flex justify-center items-center">
          <Image 
            src="/login/error@2x.png"
            width={50}
            height={50}
            alt="Error"
            className="mr-[10px]"
          />
          <>Internal Server Error : Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</>
        </div>
      }
      {
        submitResetPassword &&
        <div className='absolute w-screen h-screen bg-[rgba(10,22,8,0.3)] top-0 flex items-center justify-center z-[3] pointer-events-auto' >
          <div className='relative w-[840px] h-[450px] rounded-[20px] bg-white py-[70px] px-[80px] text-center flex flex-col gap-y-[50px]  items-center '>
            <ClearRoundedIcon className='absolute top-[15px] right-[15px] cursor-pointer text-primary' onClick={()=>{setEmail(''); setPassword(''); setSubmitResetPassword(false)}} />
            <Image src={resetPassword} className="w-[154px] h-[154px]" />
            <div className='flex flex-col gap-y-[10px] text-[18px] text-center'>
              <p>An Email has been sent to the Address</p>
              <p className="font-bold">{email}</p>
              <p>Password Assist will be provided in the mail.</p>
            </div>
          </div>
        </div>
      }
      </div>
    </ThemeProvider>
  );
}

export default Login;