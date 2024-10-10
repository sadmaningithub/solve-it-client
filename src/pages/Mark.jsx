import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Mark = () => {

    const { id } = useParams();
    const [data, setData] = useState([])
   

    useEffect(() => {
        fetch(`http://localhost:5000/submitted/${id}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setData(data)
            })
    }, [])
    //https://online.fliphtml5.com/vnxua/hgul/#p=1
    return (
        <div>
            <h1>Mark</h1>
            <div>

               

                <div>
                    <h1>title: {data?.title}</h1>
                    <p>Submitted by {data?.name}</p>
                    <p>Quick Note: <br /> {data?.note} </p>
                    <p>Link: <br /> {data?.url} </p>
                </div>
                <div>
                    <Link to={`/assignment/mark/${id}`} className="btn"> Give Marks </Link>
                </div>
            </div>
        </div>
    );
};

export default Mark;