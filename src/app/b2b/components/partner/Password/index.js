import { useState } from "react";
import { CustomPasswordField, CustomTextField } from "../../InputFields";

const Password = ({ setPasswordChangedPopup }) => {

    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword,setConfirmPassword]=useState('');

    const [currentPasswordErrorMessage, setCurrentPasswordErrorMessage] = useState('');
    const [newPasswordErrorMessage, setNewPasswordErrorMessage] = useState('');
    const [confirmPasswordErrorMessage , setConfirmPasswordErrorMessage ]= useState('');

    const handlePasswordErrorCheck = (value, setPasswordErrorMessage) =>{
        
        if (value === "") {
            setPasswordErrorMessage("Password cannot be empty");
            return false;
          } else if (value.length < 8) {
            setPasswordErrorMessage("Password must be at least 8 characters long");
            return false;
          } else {
            setPasswordErrorMessage("");
            return true;
        }

    }

    const handleCurrentPasswordChange = (event) => {
        const value = event.target.value;
        setCurrentPassword(value);
        handlePasswordErrorCheck(value, setCurrentPasswordErrorMessage);        
    }

    const handleNewPasswordChange = (event) => {
        const value = event.target.value;
        setNewPassword(value);
        handlePasswordErrorCheck(value, setNewPasswordErrorMessage);
        if (value === currentPassword ){
            setNewPasswordErrorMessage("Current & New Password cannot be same!");
        }
    }

    const handleConfirmPasswordChange = (event) => {
        const value = event.target.value;
        setConfirmPassword(value);
        handlePasswordErrorCheck(value, setConfirmPasswordErrorMessage);
        if (value !== newPassword ){
            setConfirmPasswordErrorMessage("New password & Confirm password doesn't match");
        }
    }

    const handleSubmit = () => {

        const cuPass = handlePasswordErrorCheck(currentPassword, setCurrentPasswordErrorMessage);
        const nePass = handlePasswordErrorCheck(newPassword, setNewPasswordErrorMessage);
        const coPass = handlePasswordErrorCheck(confirmPassword, setConfirmPasswordErrorMessage);

        if ( cuPass && nePass && coPass ){
            if (newPassword !== confirmPassword){
                setConfirmPasswordErrorMessage("New password & Confirm password doesn't match");
            }
            else{
                setPasswordChangedPopup(true);
            }
        }
    }

    return (
        <div className="text-[14px] p-[20px]">
            <div className="bg-[white] w-full rounded-[25px] p-[20px] flex flex-col gap-[30px]">
                <p className="text-[20px] font-semibold">Change Password</p>
                <div className="text-[16px]">
                    <span className="font-medium">User Id:</span>
                    <span className="ml-[5px] font-bold">testadmin@gmail.com</span>
                </div>

                <CustomTextField label="Current Password" value={currentPassword} handleChange={handleCurrentPasswordChange} errorMessage={currentPasswordErrorMessage} />
                <CustomPasswordField label="New Password (Minimum 8 Characters)" value={newPassword} handleChange={handleNewPasswordChange} errorMessage={newPasswordErrorMessage} />
                <CustomPasswordField label="Confirm Password" value={confirmPassword} handleChange={handleConfirmPasswordChange} errorMessage={confirmPasswordErrorMessage} />

                <button className="w-[108px] h-[40px] bg-[#0071E7] rounded-[25px] text-white font-semibold flex justify-center items-center" onClick={handleSubmit}>Save</button>

            </div>
        </div>
    )
}

export default Password;