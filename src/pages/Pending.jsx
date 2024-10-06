import { useContext, useEffect, useState } from "react";
import { authContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";


const Pending = () => {

    const { user } = useContext(authContext)
    const [mySubmitted, setMySubmitted] = useState([]);

    console.log(user?.email);

    const url = `http://localhost:5000/submitted?email=${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMySubmitted(data)
            })
    }, [user?.email, url])

    return (
        <div className="my-12">
            <h1 className="mb-5 text-xl font-medium">Pending Assignments {mySubmitted.length} </h1>
            <div>
                <div className="overflow-x-auto bg-base-200 rounded-xl p-5 lg:p-10">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>

                                <th>Title</th>
                                <th>Url</th>
                                <th>Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                mySubmitted.map(submitted =>
                                    <tr className="hover" key={submitted._id} >

                                        <td>{submitted.title}</td>
                                        <td className="">{submitted.url}  </td>
                                        <td>{submitted.name}</td>
                                        <td><Link> <button className="btn">Action</button> </Link></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Pending;