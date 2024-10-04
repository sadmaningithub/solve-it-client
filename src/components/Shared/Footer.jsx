

const Footer = () => {
    return (
        <div className="bg-base-200 pb-10">
            <footer className="footer max-w-screen-2xl mx-auto text-base-content p-10">
                <aside className="flex flex-col items-center">
                    <h1 className="text-2xl font-bold">SolveIt</h1>
                    <p className="text-base font-normal">
                        Your all in one group study platform
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Navigation</h6>
                    <a className="link link-hover">Assignments</a>
                    <a className="link link-hover">Create Assignment</a>
                    <a className="link link-hover">Resources</a>
                    <a className="link link-hover">FAQ</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Get in Touch</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>

                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Social Links</h6>

                </nav>

            </footer>
                
            <div className="flex flex-row justify-center">
                <p>Copyright © {new Date().getFullYear()} - All right reserved by <span className="font-medium">SolveIt</span></p>

            </div>
        </div>
    );
};

export default Footer;