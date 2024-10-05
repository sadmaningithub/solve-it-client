import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const AssignmentDetails = () => {

    const [assignment, setAssignment] = useState([])

    const {id} = useParams();

    // console.log(id);

    useEffect(()=>{
        fetch(`http://localhost:5000/assignments/${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setAssignment(data)
        })
    } ,[])

    return (
        <div>
            <div>
                <h1 className="text-2xl font-medium">{assignment.title}</h1>
                <p className="">Level: {assignment.level}</p>
                <p>Marks: {assignment.marks}</p>
                <p>Due Date: {assignment.dueDate}</p>
                <p>Description {assignment.description}</p>
                <button className="btn">Take Assignment </button>
            </div>
            <div className="max-w-7xl">
                <img src={assignment.thumbnail} alt="" />
            </div>
        </div>
    );
};

export default AssignmentDetails;