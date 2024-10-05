import { BsBarChart } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { IoCheckmarkCircleOutline, IoEyeOutline } from "react-icons/io5";
import { MdOutlineDelete } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const AssignmentCard = ({ assignment }) => {

    // console.log(assignment);

    const { _id, title, marks, thumbnail, level, dueDate } = assignment

    const handleDelete = _id => {
        // console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to undo this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/assignments/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "The Assignment has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

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
                            <Link to={`/assignments/${_id}`} className="btn "> <IoEyeOutline />View</Link>
                            <Link className="btn "> <FaEdit />Edit</Link>
                            <Link onClick={() => handleDelete(_id)} className="btn "> <MdOutlineDelete />Remove</Link>
                        </div>
                        <span className="flex flex-row items-center gap-1"> <SlCalender /> {dueDate}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssignmentCard;