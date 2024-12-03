import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";


const AssignmentDetails = () => {

    const [assignment, setAssignment] = useState([])
    // const [isModalActive, setIsModalActive] = useState(false)

    const { id } = useParams();

    // console.log(id);

    useEffect(() => {
        fetch(`https://solve-it-server.vercel.app/assignments/${id}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setAssignment(data)
            })
    }, [])

    return (
        <div className="my-12">
            <div className="text-center space-y-3">
                <h1 className="text-3xl font-bold">{assignment.title}</h1>
                <p>Created by <span className="font-medium">{assignment.name} </span></p>
                <p className="font-medium">Assignment id: {assignment._id}</p>
            </div>
            <div className="flex flex-col lg:flex-row-reverse items-center gap-10 p-5 lg:p-10">
                <div className=" space-y-4 w-full">
                    <div className="space-y-1">
                        <h1 className="text-2xl font-medium">Title: {assignment.title}</h1>
                        
                    </div>

                    <p className=""><span className="font-medium">Difficulty Level:</span> {assignment.level}</p>
                    <p><span className="font-medium">Marks:</span>  {assignment.marks}</p>
                    <p><span className="font-medium">Due Date:</span>  {assignment.dueDate}</p>
                    <p className="max-w-lg  text-justify text-"><span className="font-medium">Description:</span> <br /> <br /> {assignment.description}</p>

                    <div className="card-actions ">
                        <Link to={`/assignments/update/${assignment._id}`} className="btn "> <FaEdit />Edit</Link>
                        <Link to={`/assignments/submit/${assignment._id}`} className="btn">Take Assignment </Link>
                    </div>

                </div>
                <div className="w-full">
                    <img src={assignment.thumbnail} alt="" />
                    <div className="text-center mt-5">
                        <span className=" font-medium">Assignment figure</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssignmentDetails;