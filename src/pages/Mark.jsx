import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Mark = () => {

    const { id } = useParams();
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/submitted/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setData(data)
            })
    }, [])

    //https://online.fliphtml5.com/vnxua/hgul/#p=1

    return (
        <div className="my-12">
            <div className="flex flex-col ">

                <div>
                    <h1>title: {data?.title}</h1>
                    <p>Submitted by {data?.name}</p>
                    <p>Quick Note: <br /> {data?.note} </p>
                    <p>Link: <br /> {data?.url} </p>
                    <Link to={`/assignment/mark/${id}`} className="btn"> Give Marks </Link>
                </div>

                <div className="w-full">
                    <iframe src={data?.url} className="h-screen w-full" frameBorder="0"></iframe>
                </div>

            </div>
        </div>
    );
};

export default Mark;