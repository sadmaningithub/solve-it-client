import { Link } from 'react-router-dom';
import regSvg from '../assets/register.svg'
import { useContext } from 'react';
import { authContext } from '../providers/AuthProvider';

const Register = () => {

    const {createUser } = useContext(authContext);

    const handleRegister = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;

        const user = {name, photoUrl, email, password}

        console.log(user);

        createUser(email, password)
        .then(userCredential => {
            const user = userCredential.user;
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
          });
    }

    return (
        <div className='mb-12'>

            <div className="p-5 lg:p-10 max-w-6xl mx-auto">

                <div className='flex flex-col lg:flex-row-reverse items-center gap-5 '>
                    <div className='w-full lg:w-1/2'>
                        <h1 className="text-5xl font-bold text-center lg:text-left mb-5">Register Now!</h1>
                        <form onSubmit={handleRegister} className="">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name='name' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo url</span>
                                </label>
                                <input type="url" placeholder="photo url" name='photoUrl' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
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