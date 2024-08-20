import React from 'react';

const FooterTop = () => {
    return (
        <div className='main-container w-full max-w-[1920px]'>
            <div className='flex md:flex-row items-center justify-between text-left'>
                <div className="footer-left md:max-w-[604px] w-full">
                    <h2 className="footer-top-title font-poppins text-[48px] font-bold text-white">Easy Way to manage your finances</h2>
                    <p className='text-gray mt-5 mb-8 font-regular text-[18px]'>Easy to use mobile app that support on android and ios.</p>
                    <div className='flex flex-row gap-10'>
                        <img className='p-4 rounded-2xl bg-[#3D544D]' src="/src/assets/img/apple-app.svg" alt="" />
                        <img className='p-4 rounded-2xl bg-[#3D544D]' src="/src/assets/img/anroid-app.svg" alt="" />
                    </div>
                </div>
                <div className="Footer-right">
                    <img src="/src/assets/img/app.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default FooterTop;