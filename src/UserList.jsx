import axios from "axios"
import { useEffect } from "react";
import { useState } from "react"


const UserList = () => {

    const [userList, setUserList] = useState([]);

    useEffect(()=>{
        const fetchData = async () => {
            try{
                const res = await axios.get('https://jsonplaceholder.typicode.com/users');
                setUserList(res.data);
            } catch (err) {
                console.log(err)
            }
        };
        fetchData();
    },[userList]) //not neccessary to put in the dependency if you want it to run once on the first render.

    return (
        <div className="flex justify-center ">

            <div> 
            <h1 className="text-center text-[30px] font-bold mb-4 mt-4">USER LIST</h1>
                {userList.map(user => (<div key={user.id} className="flex flex-col bg-purple-300 mb-6 ml-3 w-[320px] h-[220px]  justify-center border rounded-2xl gap-2 pl-2"><h1>{`NAME: ${user.name}`}</h1>
                <h3>{`USERNAME: ${user.username}`}</h3>
                <h3>{`EMAIL: ${user.email}`}</h3>
                <h3>{`WEBSITE: ${user.website}`}</h3>
                <h3>{`PHONE NUMBER: ${user.phone}`}</h3>
                <h3>{`ADDY: ${user.address.street}`}</h3>
                </div> ))}

            </div>

        </div>
    )
    }

export default UserList
