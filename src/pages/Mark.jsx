import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Mark = () => {

    const { id } = useParams();
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`https://solve-it-server.vercel.app/submitted/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setData(data)
            })
    }, [])

    //https://online.fliphtml5.com/vnxua/hgul/#p=1

    return (
        <div className="my-12">

            <div className="text-center">
                <h1 className="text-2xl font-medium mb-5">Assignment Submission Details</h1>
            </div>

            <div className="flex flex-col ">

                <div className=" space-y-3 p-3">
                    <h1> <span className="font-medium">Title:</span> {data?.title}</h1>
                    <p> <span className="font-medium">Submitted by</span> {data?.name}</p>
                    <p> <span className="font-medium">Quick Note:</span> <br /> {data?.note} </p>
                </div>

                <div className="mx-auto mb-5">
                    <Link to={`/assignment/mark/${id}`} className="btn"> Give Marks </Link>
                </div>

                <div className="w-full border-2 ">
                    <iframe src={data?.url} className="h-screen w-full " frameBorder="0"></iframe>
                </div>

            </div>
        </div>
    );
};

export default Mark;