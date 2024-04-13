
export default function Body() {
    return (
        <div className="md:w-[653px] w-[390px] md:px-0 px-4 h-[561] mb-10 z-20">
            <p className="text-center">Web Develoment</p>
            <div className='relative z-50'>
                <a href="https://arofiqs.my.id">
                    <button className="btn px-5 text-xl bg-[#8BD3DD] text-white w-full h-[51px] md:h-[67px] shadow-custom border-4 border-[#001858] rounded-xl my-5 hover:shadow-none transition-all duration-300 ease-in-out flex justify-between items-center">
                        <i className="fa-solid fa-globe"></i>
                        <span className="text-[15px] md:text-[20px]">Portofolio</span>
                        <i className="fa-solid fa-globe"></i>
                    </button>
                </a>
            </div>
            <div className='relative z-50'>
                <p className="text-center">Social Media</p>
                <a href="https://www.instagram.com/aro_fiqs/">
                    <button className="btn px-5 text-xl bg-[#8BD3DD] text-white w-full h-[51px] md:h-[67px] shadow-custom border-4 border-[#001858] rounded-xl my-5 hover:shadow-none transition-all duration-300 ease-in-out flex justify-between items-center">
                        <i className="fa-brands fa-instagram"></i>
                        <span className="text-[15px] md:text-[20px]">Instagram</span>
                        <i className="fa-brands fa-instagram"></i>
                    </button>
                </a>
                <a href="https://www.youtube.com/channel/UCxDVXoNzjiEfFDF9yWqwC3Q">
                    <button className="btn px-5 text-xl bg-[#8BD3DD] text-white w-full h-[51px] md:h-[67px] shadow-custom border-4 border-[#001858] rounded-xl my-5 hover:shadow-none transition-all duration-300 ease-in-out flex justify-between items-center">
                        <i className="fa-brands fa-youtube"></i>
                        <span className="text-[15px] md:text-[20px]">Youtube</span>
                        <i className="fa-brands fa-youtube"></i>
                    </button>
                </a>
                <a href="https://github.com/Fiqsss">
                    <button className="btn px-5 text-xl bg-[#8BD3DD] text-white w-full h-[51px] md:h-[67px] shadow-custom border-4 border-[#001858] rounded-xl my-5 hover:shadow-none transition-all duration-300 ease-in-out flex justify-between items-center">
                        <i className="fa-brands fa-github"></i>
                        <span className="text-[15px] md:text-[20px]">Github</span>
                        <i className="fa-brands fa-github"></i>
                    </button>
                </a>
            </div>
        </div>

    )
}