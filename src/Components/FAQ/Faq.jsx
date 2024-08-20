
import React from 'react';

const Faq = () => {
    return (
        <div className='main-container flex flex-col items-center py-[128px] relative'>
            <div className='max-w-[1020px] w-full'>
                <h1 className='text-[40px] font-bold'>FAQs</h1>
                <div className='text-left font-poppins'>
                    <div tabIndex={0} className="collapse collapse-plus border-[#ADB2B1] bg-transparent border-b-[1.5px] rounded-[0]">
                        <div className="collapse-title text-[24px] font-bold">What credit score do I need to apply for a credit card?</div>
                        <div className="collapse-content ">
                            <p>The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-plus border-[#ADB2B1] bg-transparent border-b-[1.5px] rounded-[0]">
                        <div className="collapse-title text-[24px] font-bold"> How can I apply for a credit card online?</div>
                        <div className="collapse-content">
                            <p> Applying for a credit card online is simple. Just visit our website, select the desired credit card, and click on the "Apply Now" button. Follow the instructions, provide your information, and submit your application securely..</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-plus border-[#ADB2B1] bg-transparent border-b-[1.5px] rounded-[0]">
                        <div className="collapse-title text-[24px] font-bold"> Are there any annual fees associated with the credit card?</div>
                        <div className="collapse-content">
                            <p>Annual fees may apply to some credit cards, but not all. Our credit card details page will specify if there are any annual fees associated with the card you're interested in.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-plus border-[#ADB2B1] bg-transparent border-b-[1.5px] rounded-[0]">
                        <div className="collapse-title text-[24px] font-bold"> How long does it take to receive the credit card once approved?</div>
                        <div className="collapse-content">
                            <p> Once your credit card application is approved, it typically takes 7 to 10 business days to receive your physical card by mail. You can start using your virtual card immediately after approval for online purchases.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-plus border-[#ADB2B1] bg-transparent border-b-[1.5px] rounded-[0]">
                        <div className="collapse-title text-[24px] font-bold"> How can I check my credit card balance and transactions?</div>
                        <div className="collapse-content">
                            <p>You can easily check your credit card balance and transactions through our secure online banking portal or mobile app. Simply log in to your account to access your credit card information.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-plus border-[#ADB2B1] bg-transparent border-b-[1.5px] rounded-[0]">
                        <div className="collapse-title text-[24px] font-bold"> What should I do if my credit card is lost or stolen?</div>
                        <div className="collapse-content">
                            <p>If your credit card is lost or stolen, please notify us immediately through our customer support line or online banking. We will assist you in securing your account and issuing a replacement card.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-plus border-[#ADB2B1] bg-transparent border-b-[1.5px] rounded-[0]">
                        <div className="collapse-title text-[24px] font-bold"> Is my credit card information secure?</div>
                        <div className="collapse-content">
                            <p>Yes, we prioritize the security of your information. Our credit card systems use encryption and industry-standard security measures to protect your data, ensuring a safe and seamless experience.</p>
                        </div>
                    </div>
                    
                    
                    
                    
                </div>
            </div>
            <img className='w-[56px] h-[56px] absolute bottom-5 left-20' src="/src/assets/img/Star.png" alt="" />
            <img className='w-[16px] h-[16px] absolute top-[60%] ' src="/src/assets/img/Star.png" alt="" />
            <img className='w-[24px] h-[24px] absolute top-60 left-[15%]' src="/src/assets/img/Star.png" alt="" />
        </div>     
    );
};

export default Faq;