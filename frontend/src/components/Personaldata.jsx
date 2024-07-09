import { useState } from "react";

export function PersonalData({user}){
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
      setIsPasswordVisible(!isPasswordVisible);
    };

    return(
        <div className="flex items-center w-full bg-sky-100 mt-3">
        <div className="bg-white p-8 shadow-lg rounded-lg text-lg w-full ">
            <div className="text-center mb-6">
                <h2 className="text-3xl font-semibold text-gray-800 flex justify-start pb-10">Personal Information</h2>
            </div>
            <div className="space-y-4">
                <div className="grid grid-cols-3">

                    <div className="font-medium text-gray-700">Username</div>
                        <div className="col-span-2 flex items-center space-x-2">
                            <span className="text-gray-900">: {user.name}</span>
                    
                        </div>
                    

                    <div className="font-medium text-gray-700">Password</div>
                    <div className="col-span-2 flex items-center space-x-2">
                        <span className="text-gray-900">: {isPasswordVisible ? user.password : '********'}</span>

                        {/*  Logic for button click and change of the button text */}
                        <button
                            onClick={togglePasswordVisibility}
                            className="text-xs bg-blue-200 text-blue-800 px-3 py-1 rounded-full"
                        >
                            {isPasswordVisible ? 'Hide' : 'Show'}
                        </button>
                   
                    </div>

                </div>
            </div>
        </div>
    </div>
    )
}