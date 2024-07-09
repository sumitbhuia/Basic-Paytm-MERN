import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { Inputbox } from "../components/Inputbox";
import { Subheading } from "../components/Subheading";
import { Warning } from "../components/Warning";
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';




export const Signin = ()=>{

    const [username, setUsername] = useState(""); // Use 'username' to maintain consistency
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    return(
    <div className = "flex justify-center items-center h-screen bg-gradient-to-r from-green-400 to-blue-500">

            <div className = "rounded-lg shadow-lg bg-white w-96 text-center p-6 h-max">
                <Heading label={"Sign in"}/>
                <Subheading label={"Please enter your credentials to sign in"}/>
                <Inputbox 
                label={"Email"} 
                placeholder={"user@example.com"}
                onChange={(e) => setUsername(e.target.value)}
                />
                <Inputbox 
                label={"Password"} 
                placeholder={"•••••••••"}
                onChange={(e) => setPassword(e.target.value)}
                />
                <div className = "pt-4">
                    <Button label={"Sign in"}
                              onClick={async () => {
                                try {
                                    const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
                                        username,
                                        password
                                    });
                                    // Store token and navigate to dashboard on success
                                    localStorage.setItem("token", response.data.token);
                                    navigate("/dashboard" , { state: { name: username, password : password }});
                                } catch (error) {
                                    console.error("There was an error during the sign-in process:", error);
                                    if (error.response && error.response.data) {
                                        alert(`Sign-in error: ${error.response.data.message}`);
                                    }
                                }
                            }}
                    />
                </div>   
                <Warning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"}/>
            </div> 
       
    </div>
    );
};
