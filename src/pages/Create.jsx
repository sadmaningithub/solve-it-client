import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast, { Toaster } from "react-hot-toast";
import { IoDocumentsSharp } from "react-icons/io5";
import { MdEditDocument } from "react-icons/md";
import { authContext } from "../providers/AuthProvider";

const Create = () => {

    const { user } = useContext(authContext)

    const [startDate, setStartDate] = useState(new Date());

    const handleAddTask = e => {
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
        const assignmentDoc = { title, marks, thumbnail, level, dueDate, email, name, description };
        console.log(assignmentDoc);
        fetch('https://solve-it-server.vercel.app/assignments', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(assignmentDoc)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.insertedId);
                if (data.insertedId) {
                    toast.success('Assignment Created Successfully!')
                }
                else {
                    toast.error('Something went wrong. Please try again')
                }
            })
    }

    return (
        <div className=" my-12">

            <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:justify-evenly ">

                <div className="bg-base-100 shrink-0 w-full lg:max-w-xl p-5 lg:p-8 rounded-xl shadow-2xl">

                    <h1 className="flex flex-row justify-center items-center gap-1 text-2xl font-medium " >Create Assignment <MdEditDocument /> </h1>

                    <form onSubmit={handleAddTask} className="">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input type="text" placeholder="title" name="title" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Marks</span>
                            </label>
                            <input type="text" placeholder="marks" name="marks" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Thumbnail</span>
                            </label>
                            <input type="url" placeholder="thumbnail url" name="thumbnail" className="input input-bordered" required />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Difficulty Level</span>
                            </label>
                            <select defaultValue={'DEFAULT'} name="level" className="select select-bordered w-full">
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
                            <DatePicker className="input input-bordered w-full" name="dueDate" selected={startDate} onChange={(date) => setStartDate(date)} />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Email</span>
                            </label>
                            <input type="email" defaultValue={user?.email} placeholder="" name="email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input type="text" defaultValue={user?.displayName} placeholder="" name="name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea className="textarea textarea-bordered" name="description" placeholder="description"></textarea>

                        </div>

                        <input className="btn mt-5 w-full" type="submit" value="Submit" />
                        <Toaster
                            position="top-right"
                            reverseOrder={false} />
                    </form>
                </div>

                <div className="bg-base-100 shrink-0 lg:max-w-xl p-5 lg:p-8 rounded-xl shadow-2xl space-y-5">
                    <h1 className="text-2xl font-medium flex flex-row justify-center items-center gap-1">Create Multiple Assignments <IoDocumentsSharp /></h1>
                    <p>To create multiple assignments just drag and drop your excel file below.</p>
                    <form >
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Upload .xlsx file here</span>
                            </label>
                            <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Create;