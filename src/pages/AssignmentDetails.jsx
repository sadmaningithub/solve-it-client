import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const AssignmentDetails = () => {

    const [assignment, setAssignment] = useState([])

    const { id } = useParams();

    // console.log(id);

    useEffect(() => {
        fetch(`http://localhost:5000/assignments/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAssignment(data)
            })
    }, [])

    return (
        <div className="my-12">
            <div className="text-center space-y-3">
                <h1 className="text-3xl font-bold">Details of {assignment.title}</h1>
                <p className="font-medium">Assignment id: {assignment._id}</p>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-10 p-5 lg:p-10">
                <div className=" space-y-5 w-full">
                    <h1 className="text-2xl font-medium"> <span className="font-medium">Title:</span> {assignment.title}</h1>
                    <p><span className="font-medium">Posted by </span></p>
                    <p className=""><span className="font-medium">Difficulty Level:</span> {assignment.level}</p>
                    <p><span className="font-medium">Marks:</span>  {assignment.marks}</p>
                    <p><span className="font-medium">Due Date:</span>  {assignment.dueDate}</p>
                    <p><span className="font-medium">Description:</span> <br /> {assignment.description}</p>
                    <button className="btn">Take Assignment </button>
                </div>
                <div className="w-full">
                    <img src={assignment.thumbnail} alt="" />
                    <div className="text-center">
                        <span className=" font-medium">Assignment figure</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssignmentDetails;