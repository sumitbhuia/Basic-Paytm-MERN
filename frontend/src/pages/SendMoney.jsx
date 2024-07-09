import{useSearchParams , useNavigate ,  useLocation} from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react';


export const SendMoney = () => {
    const[amount,setAmount] = useState(0);
    const[searchParams] = useSearchParams();
    // These are the parameters defined in the url response from dashboard
    const id =searchParams.get('id');
    const name = searchParams.get('name');
    const navigate = useNavigate();

    const location = useLocation();
    const data = location.state;





    return <div className="flex justify-center items-center h-screen bg-gradient-to-r from-gray-50 to-green-100">
        <div className="bg-white shadow-2xl rounded-lg p-8 max-w-md w-full m-10">
             <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Send Money</h2>
              


            <div className="flex justify-center items-center space-x-4">
            <div className=" flex justify-center  items-center w-14 h-14 rounded-full bg-green-500">
                    <span className="text-2xl text-white">{name[0].toUpperCase()}</span>
            </div>
            </div>

            <div className="flex justify-center items-center space-x-4 mb-6">
                <h3 className="text-2xl font-semibold text-gray-700">{name}</h3>
            </div>


                <div className="space-y-4">
                    <div>
                        <label
                            className="block text-sm font-medium text-gray-600 mb-2"
                            htmlFor="amount">
                            Amount ($)
                        </label>

                        <input

                            onChange={(e)=>{ setAmount(e.target.value) }}
                                type="number"
                                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500"
                                id="amount"
                                placeholder="Enter amount"
                        />
                    </div>

                    <button onClick={()=>{
                           try{  axios.post("http://localhost:3000/api/v1/account/transfer",{
                                to : id,
                                amount
                            },{
                                headers : {
                                    Authorization : "Bearer "+localStorage.getItem("token")
                                }
                            });
                        
                            navigate("/dashboard" , { state: { name: data.name, password : data.password}});
                        }
                            
                            catch(error){
                                console.error("There was an error during the transfer process:", error);
                                if (error.response && error.response.data) {
                                    alert(`Transfer error: ${error.response.data.message}`);
                                }

                            }

                    }} className="w-full py-3 mt-4 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300 transition duration-300">
                        Initiate Transfer
                    </button>
                </div>
                </div>
        </div>
      
    
}