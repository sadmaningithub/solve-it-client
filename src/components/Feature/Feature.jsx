import { FaRegClipboard, FaRegClock } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";
import { GrGroup } from "react-icons/gr";
import { TiPencil } from "react-icons/ti";


const Feature = () => {
    return (
        <div className="mb-12">
            <div className="text-center mb-10">
                <h1 className="text-3xl font-bold">Master Your Assignments with SolveIt</h1>
            </div>
            <div>
                <div className="grid grid-cols-1 lg:grid-cols-3 ">

                    <div className=" p-5 space-y-7">
                        <h1 className="flex flex-row justify-center text-5xl">
                            <TiPencil />
                        </h1>
                        <div className="flex flex-col items-center space-y-4">
                            <h2 className="text-xl font-medium">Post Assignments Easily</h2>
                            <p className="text-center text-base font-normal max-w-xs">Create and post assignments in just a few clicks. Organize tasks for your group or the entire class.</p>

                        </div>
                    </div>

                    <div className=" p-5 space-y-7">
                        <h1 className="flex flex-row justify-center text-5xl">
                            <GiProgression />
                        </h1>
                        <div className="flex flex-col items-center space-y-4">
                            <h2 className="text-xl font-medium">Browse & Take Assignments</h2>
                            <p className="text-center text-base font-normal max-w-xs">Easily browse through posted assignments and take on challenges that fit your learning style.</p>

                        </div>
                    </div>

                    <div className=" p-5 space-y-7">
                        <h1 className="flex flex-row justify-center text-5xl">
                            <FaRegClock />
                        </h1>
                        <div className="flex flex-col items-center space-y-4">
                            <h2 className="text-xl font-medium">Track Progress & Deadlines</h2>
                            <p className="text-center text-base font-normal max-w-xs">Keep track of all your ongoing assignments and their deadlines with our progress tracker.</p>

                        </div>
                    </div>

                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 px-0 lg:px-10">

                    <div className=" p-5 space-y-7">
                        <h1 className="flex flex-row justify-center text-5xl">
                            <FaRegClipboard />
                        </h1>
                        <div className="flex flex-col items-center space-y-4">
                            <h2 className="text-xl font-medium">Submit & Review Solutions</h2>
                            <p className="text-center text-base font-normal max-w-xs">Submit your completed assignments, review feedback, and learn from your peer solutions</p>

                        </div>
                    </div>

                    <div className=" p-5 space-y-7">
                        <h1 className="flex flex-row justify-center text-5xl">
                            <GrGroup />
                        </h1>
                        <div className="flex flex-col items-center space-y-4">
                            <h2 className="text-xl font-medium">Collaborate with Peers</h2>
                            <p className="text-center text-base font-normal max-w-xs">Work together with your study group on assignments in real-time. Share ideas, resources, and feedback to enhance your understanding and performance.</p>

                        </div>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default Feature;