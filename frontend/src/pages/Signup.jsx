import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { Inputbox } from "../components/Inputbox";
import { Subheading } from "../components/Subheading";
import { Warning } from "../components/Warning";
import { useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom"




export const Signup = ()=>{

    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();



    return(
    <div className = "flex h-screen bg-gradient-to-r from-blue-400 to-purple-500 items-center justify-center">

            <div className = "rounded-lg shadow-2xl bg-white w-96 text-center p-6 h-max">
                
                <Heading label={"Sign up"}/>
                <Subheading label={"Please fill in the details to sign up"}/>

                <Inputbox onChange={(e)=>{setFirstName(e.target.value);}} 
                label={"First Name"} placeholder={"John"}/>

                <Inputbox onChange={(e)=>{setLastName(e.target.value)}} 
                label={"Last Name"} placeholder={"Doe"}/>

                <Inputbox onChange={(e)=>{setUsername(e.target.value)}} 
                label={"Email"} placeholder={"user@example.com"}/>

                <Inputbox onChange={(e)=>{setPassword(e.target.value)}} 
                label={"Password"} placeholder={"•••••••••"}/>

                <div className = "pt-4">
                    <Button   
                        onClick={async () => {
                        try
                        { const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
                                username,
                                firstname,
                                lastname,
                                password
                                }
                            );
                            // Token and message are 2 json response received fo successful data tranfer
                            // Store the token data in local storage
                                localStorage.setItem("token", response.data.token)
                                navigate("/dashboard"  , { state: { name: username, password : password }})
                        }

                            catch (error) {
                                console.error("There was an error during the signup process:", error);
                                if (error.response && error.response.data) {
                                    alert(`Signup error: ${error.response.data.message}`);
                                }
                            }

                        }} label={"Sign up"} 
                    />
                </div>   
                <Warning label={"Alread have an account?"} buttonText={"Sign in"} to={"/signin"}/>
            </div> 
        
    </div>
    );
};
