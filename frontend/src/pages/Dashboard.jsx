import axios from "axios"
import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"
import { useEffect ,useState } from "react"
import {PersonalData} from "../components/Personaldata"
import { useNavigate , useLocation} from "react-router-dom"

export const Dashboard = () => {



    const [balance, setBalance] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
   const location = useLocation();
   const data = location.state;
 
console.log(data);

   
    useEffect(() => {
        const fetchBalance = async () => {
            try {
                const token = localStorage.getItem("token");
                console.log(token);
                if (!token) {
                    navigate('/signin');
                    return;
                }

                const response = await axios.get("http://localhost:3000/api/v1/account/balance", {
                    headers: {
                        Authorization: 'Bearer '+token
                    }
                });
               

                setBalance(response.data.balance);
            } catch (error) {
                console.error("Error fetching balance:", error);
                navigate('/signin');
            } finally {
                setLoading(false);
            }
        };

        fetchBalance();
    }, [navigate]);

    if (loading) {
        return <div>Loading...</div>;
    }


    return <div className="bg-zinc-50 min-h-screen">

        <Appbar />
      
        <div className="m-8 ">
        <PersonalData user={data}/>
        <Balance value={balance} />
        </div>

        <div className="m-8 "><Users /></div>

    </div>



}


