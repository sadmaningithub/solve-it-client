import { Link } from 'react-router-dom';
import bannerSvg from '../../assets/banner.svg';

const Banner = () => {
    return (
        <div>
            <div className="">
                <div className="flex flex-col items-center gap-5 lg:flex-row-reverse p-10">
                    <img
                        src={bannerSvg}
                        className="w-full lg:w-1/2 rounded-lg " />
                    <div className='w-full lg:w-1/2 '>
                        <h1 className="text-5xl font-bold mb-4">Your All in One</h1>
                        <h1 className="text-5xl font-bold"> <span>Study</span> Platform</h1>
                        <p className="py-6 text-base">
                            Connect with fellow students, share resources, and ace your assignments! 
                        </p>
                        <Link className='btn'> Get Started </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;