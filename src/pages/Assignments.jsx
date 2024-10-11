import { useEffect, useState } from "react";
import AssignmentCard from "../components/AssignmentCard/AssignmentCard";


const Assignments = () => {

    // const [search, setSearch] = useState('')
    const [assignments, setAssignments] = useState([])



    useEffect(() => {
        fetch('http://localhost:5000/assignments')
            .then(res => res.json())
            .then(data => {
                setAssignments(data)
                // console.log(search);
            })
    }, [])

    // const handleSearch = e =>{
    //     e.preventDefault();
    //     const form = e.target;
    //     const level = form.level.value;
    //     setSearch(level)
    //     console.log(search);
    //     fetch(`http://localhost:5000/assignments?level=${search}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setAssignments(data)
    //             // console.log(search);
    //         })
    // }

    return (
        <div className="my-12">
            <div className="mb-8 space-y-5">
                <h1 className="text-2xl font-medium text-center ">Ready for the challenge?</h1>
                <div className="p-5 bg-slate-200 rounded-lg">
                    <form className="flex flex-col lg:flex-row items-center justify-center gap-3">

                        <input type="text" name="search" placeholder="search..." className="input input-bordered w-full max-w-md" id="" />

                        <select defaultValue={'DEFAULT'} name="level" className="select select-bordered ">
                            <option value='DEFAULT' disabled>Select Any</option>
                            <option value='Hard'>Hard</option>
                            <option value='Medium'>Medium</option>
                            <option value='Easy' >Easy</option>
                        </select>

                        <input type="submit" value="Search" className="btn " />
                    </form>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {
                    assignments?.map(assignment => <AssignmentCard key={assignment._id} assignment={assignment} ></AssignmentCard>)
                }
            </div>
        </div>
    );
};

export default Assignments;