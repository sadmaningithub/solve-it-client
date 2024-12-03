import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { authContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";


const SubmitPage = () => {

    const { id } = useParams();
    const [assignment, setAssignment] = useState();
    const { user } = useContext(authContext);

    useEffect(() => {
        fetch(`https://solve-it-server.vercel.app/assignments/submit/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAssignment(data)
            })
    }, [])

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const assignmentId = form.id.value;
        const url = form.url.value;
        const email = form.email.value;
        const name = form.name.value;
        const note = form.note.value;
        const submitDetails = { title, assignmentId, url, email, name, note }
        console.log(submitDetails);
        fetch('https://solve-it-server.vercel.app/submitted', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(submitDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Great!",
                        text: "You've submitted the assignment.",
                        icon: "success"
                    });
                }
            })
    }

    return (
        <div className="my-12">

            <div className="flex flex-row justify-center">


                <form onSubmit={handleSubmit} className="card-body max-w-lg rounded-xl shadow-2xl">
                    <div className="text-center">
                        <h1 className="text-xl font-medium">Submit Assignment </h1>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Assignment Title</span>
                        </label>
                        <input type="text" defaultValue={assignment?.title} placeholder="" name="title" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Assignment Id</span>
                        </label>
                        <input type="text" defaultValue={assignment?._id} className="input input-bordered" name="id"></input>

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">PDF/Doc Link</span>
                        </label>
                        <input type="url" placeholder="PDF/Doc Link" name="url" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">User email</span>
                        </label>
                        <input type="email" defaultValue={user?.email} name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">User Name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} placeholder="name" name="name" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Quick Note</span>
                        </label>
                        <textarea className="textarea textarea-bordered" name="note" placeholder="Quick Note"></textarea>

                    </div>
                    <div>
                        <label className="label">
                            <span className="font-medium">Note:</span>Please check all the input data again before submitting.
                        </label>
                    </div>
                    <input className="btn mt-5" type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default SubmitPage;