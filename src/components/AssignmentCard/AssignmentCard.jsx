import { BsBarChart } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { IoCheckmarkCircleOutline, IoEyeOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { Link } from "react-router-dom";


const AssignmentCard = ({ assignment }) => {

    console.log(assignment);

    const { title, marks, thumbnail, level, dueDate } = assignment

    return (
        <div>
            <div className="card bg-base-100 border shadow-xl">
                <figure>
                    <img
                        src={thumbnail}
                        alt="Assignment thumbnail" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <h2 className="flex flex-row items-center gap-1"><BsBarChart />{level}</h2>
                    <p className="flex flex-row items-center gap-1"> <IoCheckmarkCircleOutline /> {marks}</p>
                    <div className="card-actions justify-between items-center">
                        <div className="flex flex-row gap-2">
                            <Link className="btn "> <IoEyeOutline />View</Link>
                            <Link className="btn "> <FaEdit />Edit</Link>
                        </div>
                        <span className="flex flex-row items-center gap-1"> <SlCalender /> {dueDate}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssignmentCard;