import { Link } from 'react-router-dom';
import loginSvg from '../assets/login.svg'

const LogIn = () => {
    return (
        <div className='mb-12'>

            <div className="p-5 lg:p-10 max-w-6xl mx-auto">

                <div className='flex flex-col lg:flex-row items-center gap-5 '>
                    <div className='w-full lg:w-1/2'>
                        <h1 className="text-5xl font-bold text-center lg:text-left mb-5">Login now!</h1>
                        <form className="">
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
                                    <p>Need an account? <Link to='/register' className='text-blue-500'>Register</Link> </p>
                                </label>
                            </div>
                            <input className='btn w-full' type="submit" value="Login" />
                        </form>
                    </div>
                    <div className='w-full lg:w-1/2'>
                        <img src={loginSvg} alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default LogIn;