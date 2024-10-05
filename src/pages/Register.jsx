import { Link } from 'react-router-dom';
import regSvg from '../assets/register.svg'

const Register = () => {
    return (
        <div className='mb-12'>

            <div className="p-5 lg:p-10 max-w-6xl mx-auto">

                <div className='flex flex-col lg:flex-row-reverse items-center gap-5 '>
                    <div className='w-full lg:w-1/2'>
                        <h1 className="text-5xl font-bold text-center lg:text-left mb-5">Register Now!</h1>
                        <form className="">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo url</span>
                                </label>
                                <input type="url" placeholder="photo url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <p>Already Have an account? <Link to='/login' className='text-blue-500'>Login</Link> </p>
                                </label>
                            </div>
                            <input className='btn w-full mt-5' type="submit" value="Register" />
                        </form>
                    </div>
                    <div className='w-full lg:w-1/2'>
                        <img src={regSvg} alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;