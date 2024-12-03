import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";


const MarkAssignment = () => {

    const { id } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://solve-it-server.vercel.app/submitted/${id}`)
            .then(res => res.json())
            .then(data => {
                setData(data)
                console.log(data);
            })
    }, [])

    const handleMarking = e => {
        e.preventDefault();
        const form = e.target;
        console.log(form);
        const title = form.title.value;
        const assignmentId = form.id.value;
        const url = form.url.value;
        const email = form.email.value;
        const name = form.name.value;
        const note = form.note.value;
        const marks = form.marks.value;
        const examinerNote = form.examinerNote.value;
        const submitDetails = { title, assignmentId, url, email, name, note, marks, examinerNote }
        console.log(submitDetails);
        fetch(`https://solve-it-server.vercel.app/submitted/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(submitDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Marked!",
                        text: "The assignment has been marked",
                        icon: "success"
                    });
                }
                else if(data.modifiedCount == 0){
                    Swal.fire({
                        title: "Couldn't Mark",
                        text: "Try again after making one or more changes in the form.",
                        icon: "error"
                    });
                }
            })

    }

    return (
        <div className="my-12">

            <div className="flex flex-row justify-center">


                <form onSubmit={handleMarking} className="card-body max-w-lg rounded-xl shadow-2xl">
                    <div className="text-center">
                        <h1 className="text-xl font-medium">Submit Assignment </h1>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Assignment Title</span>
                        </label>
                        <input type="text" defaultValue={data?.title} placeholder="" name="title" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Assignment Id</span>
                        </label>
                        <input type="text" defaultValue={data?._id} className="input input-bordered" name="id"></input>

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">PDF/Doc Link</span>
                        </label>
                        <input type="url" defaultValue={data?.url} placeholder="PDF/Doc Link" name="url" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">User email</span>
                        </label>
                        <input type="email" defaultValue={data?.email} name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">User Name</span>
                        </label>
                        <input type="text" defaultValue={data?.displayName} placeholder="name" name="name" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Quick Note</span>
                        </label>
                        <textarea className="textarea textarea-bordered" defaultValue={data?.note} name="note" placeholder="Quick Note"></textarea>

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Give Marks</span>
                        </label>
                        <input type="text" placeholder="give marks" name="marks" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Examiner Note</span>
                        </label>
                        <textarea className="textarea textarea-bordered" name="examinerNote" placeholder="Note"></textarea>

                    </div>
                    <input className="btn mt-5" type="submit" value="Submit" />
                </form>
            </div>

        </div>
    );
};

export default MarkAssignment;