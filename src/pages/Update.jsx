import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaEdit } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";


const Update = () => {

    const [assignment, setAssignment] = useState([])
    const [startDate, setStartDate] = useState(new Date());

    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/assignments/${id}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setAssignment(data)
            })
    }, [])

    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const marks = form.marks.value;
        const thumbnail = form.thumbnail.value;
        const level = form.level.value;
        const dueDate = form.dueDate.value;
        const email = form.email.value;
        const name = form.name.value;
        const description = form.description.value;
        const updatedDoc = { title, marks, thumbnail, level, dueDate, email, name, description }
        fetch(`http://localhost:5000/assignments/update/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedDoc)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Updated",
                        text: "The assignment has been updated.",
                        icon: "success"
                    });
                }
                else {
                    Swal.fire({
                        title: "Couldn't update",
                        text: "The assignment was not updated. Please try again after making one or more changes",
                        icon: "error",
                    });
                }
            })
    }

    return (
        <div className="my-12">
            
            <div className="bg-base-100 shrink-0 w-full lg:max-w-xl p-5 lg:p-8 rounded-xl shadow-2xl">
                <div className="mb-5">
                    <h1 className="flex flex-row items-center gap-1 justify-center text-xl font-medium "><FaEdit /> Edit Assignment</h1>
                </div>
                <form onSubmit={handleUpdate} className="">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input type="text" defaultValue={assignment.title} name="title" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Marks</span>
                        </label>
                        <input type="text" defaultValue={assignment.marks} name="marks" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Thumbnail</span>
                        </label>
                        <input type="url" defaultValue={assignment.thumbnail} name="thumbnail" className="input input-bordered" required />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Difficulty Level</span>
                        </label>
                        <select defaultValue={assignment.level} name="level" className="select select-bordered w-full">
                            <option value="DEFAULT" disabled >Select Any</option>
                            <option value='Hard'>Hard</option>
                            <option value='Medium'>Medium</option>
                            <option value='Easy' >Easy</option>
                        </select>
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Due Date</span>
                        </label>
                        <DatePicker defaultValue={assignment.dueDate} className="input input-bordered w-full" name="dueDate" selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">User Email</span>
                        </label>
                        <input type="email" defaultValue={assignment.email} name="email" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">User Name</span>
                        </label>
                        <input type="text" defaultValue={assignment.name} name="name" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea className="textarea textarea-bordered" name="description" defaultValue={assignment.description}></textarea>

                    </div>

                    <input className="btn mt-5 w-full" type="submit" value="Submit" />

                </form>
            </div>
        </div>
    );
};

export default Update;