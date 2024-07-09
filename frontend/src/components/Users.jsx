import { useState , useEffect } from "react"
import axios from "axios";
import { Button } from "./Button"
import { useNavigate , useLocation } from "react-router-dom";


export const Users = () => {
    // Replace with backend call
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");
    const location = useLocation();
    const data = location.state;

    useEffect(()=>{
        axios.get("http://localhost:3000/api/v1/user/bulk?filter="+filter)
          .then((res)=>{
            setUsers(res.data.user);
          })
      
    },[filter]);



    console.log(data.name);
   const filterdList = users.filter(it=>it.username!=data.name);
   console.log(filterdList);
         
 


    return <div className="mt-8">
        <div className="text-xl font-semibold text-gray-800 mb-4">
            Users
        </div>
        <div className="my-2">
            <input  onChange={(e)=>{setFilter(e.target.value)}} type="text" placeholder="Search users..." 
            className="w-full p-2 mb-4 border border-gray-300 rounded-lg"></input>
        </div>
        <div className="grid grid-cols-1 gap-4">
            {filterdList.map(it => <User user={it} />)}
        </div>
    </div>
}

function User({user}) {

    const navigate = useNavigate();
    const location = useLocation();
    const data = location.state;

    return <div className="flex items-center justify-between p-4 bg-white shadow rounded-lg hover:bg-blue-50 transition">
        <div className="flex items-center">
            <div className="rounded-full h-10 w-10 bg-gray-300 flex items-center justify-center text-xl text-gray-700">
                    {user.firstname[0].toUpperCase()} 
            </div>
            <div className="ml-4 text-gray-800">
                <div>
                    {user.firstname} {user.lastname}
                </div>
            </div>
        </div>

        <div className="flex flex-col justify-center h-ful">
            <Button onClick={(e) => {
                navigate("/send?id=" + user._id + "&name=" + user.firstname , { state: { name: data.name, password : data.password}});
            }} label={"Send Money"} />
        </div>
    </div>
}