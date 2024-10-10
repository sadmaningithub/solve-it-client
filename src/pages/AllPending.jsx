import { Link, useLoaderData } from "react-router-dom";

const AllPending = () => {

    const data = useLoaderData();
    console.log(data);

    return (
        <div className="my-12">
            <div className="mb-5">
                <h1 className="text-xl font-medium">Total Submitted {data.length}</h1>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Title</th>
                            <th>PDF/Doc Link</th>
                            <th>Submitted by</th>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            data.map(singleData =>
                                <tr className="hover" key={singleData._id}>

                                    <td>{singleData.title}</td>
                                    <td>{singleData.url}</td>
                                    <td>{singleData.email}</td>
                                    <td>{singleData.name}</td>
                                    <td>{singleData.marks? singleData.marks : 'pending'}</td>
                                    <td> <Link to={`/assignment/pending/${singleData._id}`} className="btn"> View</Link> </td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllPending;