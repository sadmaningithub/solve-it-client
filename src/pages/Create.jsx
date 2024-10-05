import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MdEditDocument } from "react-icons/md";
import { SlDocs } from "react-icons/sl";

const Create = () => {

    const [startDate, setStartDate] = useState(new Date());

    return (
        <div className=" my-12">
            
                <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:justify-evenly ">

                    <div className="bg-base-100 shrink-0 w-full lg:max-w-xl p-5 lg:p-8 rounded-xl shadow-2xl">

                        <h1 className="flex flex-row justify-center items-center gap-1 text-2xl font-medium " >Create Assignment <MdEditDocument /> </h1>

                        <form className="">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Title</span>
                                </label>
                                <input type="text" placeholder="title" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Marks</span>
                                </label>
                                <input type="text" placeholder="marks" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Thumbnail</span>
                                </label>
                                <input type="url" placeholder="thumbnail url" className="input input-bordered" required />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">Difficulty Level</span>
                                </label>
                                <select className="select select-bordered w-full">
                                    <option disabled selected>Select Any</option>
                                    <option>Hard</option>
                                    <option>Medium</option>
                                    <option>Easy</option>
                                </select>
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">Due Date</span>
                                </label>
                                <DatePicker className="input input-bordered w-full" selected={startDate} onChange={(date) => setStartDate(date)} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <textarea className="textarea textarea-bordered" placeholder="description"></textarea>

                            </div>

                            <input className="btn mt-5 w-full" type="submit" value="Submit" />
                        </form>
                    </div>

                    <div className="bg-base-100 shrink-0 lg:max-w-xl p-5 lg:p-8 rounded-xl shadow-2xl space-y-5">
                        <h1 className="text-2xl font-medium flex flex-row justify-center items-center gap-1">Create Multiple Assignments <SlDocs /></h1>
                        <p>To create multiple assignments just drag and drop your excel file below.</p>
                        <form>
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