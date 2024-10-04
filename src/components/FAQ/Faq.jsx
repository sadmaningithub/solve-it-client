import FaqSvg from '../../assets/FAQ.svg';

const Faq = () => {
    return (
        <div className='mb-12'>
            <div className=''>
                <h1 className='text-3xl font-bold text-center'>FAQ</h1>
            </div>
            <div className='flex flex-col lg:flex-row items-center gap-5'>
                <div className='w-full'>
                    <img src={FaqSvg} alt="" />
                </div>
                <div className='w-full space-y-7'>
                    <h1 className='text-xl font-medium text-center'>Frequently Asked Questions</h1>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title text-xl font-medium">Can I post my own assignments?</div>
                        <div className="collapse-content">
                            <p>Yes! Users can easily post assignments for others to view and take. Just navigate to the Create Assignment section, fill in the necessary details, and publish it for your peers.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">How can I find assignments to take?</div>
                        <div className="collapse-content">
                            <p>You can browse through our Assignments section, where all posted assignments are listed. You can filter them by categories, due dates, or difficulty levels to find what suits you best.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">How can I contact customer support?</div>
                        <div className="collapse-content">
                            <p>If you have any questions or need assistance, feel free to reach out to our customer support team via the Contact Us page or email us directly at support@solveit.com.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;