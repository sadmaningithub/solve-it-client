import { useContext, useEffect, useState } from "react";
import { authContext } from "../providers/AuthProvider";


const Pending = () => {

    const {user} = useContext(authContext)
    const [mySubmitted, setMySubmitted] = useState([]);

    const url = `http://localhost:5000/submitted?email=${user?.email}`

    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setMySubmitted(data)
        })
    },[])

    return (
        <div>
            <h1>Pending {mySubmitted.length} </h1>
        </div>
    );
};

export default Pending;