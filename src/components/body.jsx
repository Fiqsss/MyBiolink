import git from '../assets/svg/github.svg'
import Yt from '../assets/svg/youtube.svg'
import Porto from '../assets/svg/portfolio.svg'
import Instagram from '../assets/svg/instagram.svg'


export default function Body() {
    return (
        <div className="md:w-[653px] w-[390px] md:px-0 px-4 h-[561] mb-10 z-20 ">
            <p className="text-center">Web Develoment</p>
            <div className='relative z-50'>
                <a href="https://arofiqs.my.id">
                    <button className="btn px-5 text-xl bg-[#8BD3DD] text-white w-full h-[51px] md:h-[67px] shadow-custom border-4 border-[#001858] rounded-xl my-5 hover:shadow-none transition-all duration-300 ease-in-out flex justify-between items-center">
                        <img className='w-7' src={Porto} alt="" />
                        <span className="text-[15px] md:text-[20px]">Portofolio</span>
                        <img className='w-7' src={Porto} alt="" />
                    </button>
                </a>
            </div>
            <div className='relative z-50'>
                <p className="text-center">Social Media</p>
                <a href="https://www.instagram.com/aro_fiqs/">
                    <button className="btn px-5 text-xl bg-[#8BD3DD] text-white w-full h-[51px] md:h-[67px] shadow-custom border-4 border-[#001858] rounded-xl my-5 hover:shadow-none transition-all duration-300 ease-in-out flex justify-between items-center">
                        <img className='w-7' src={Instagram} alt="" />
                        <span className="text-[15px] md:text-[20px]">Instagram</span>
                        <img className='w-7' src={Instagram} alt="" />
                    </button>
                </a>
                <a href="https://www.youtube.com/channel/UCxDVXoNzjiEfFDF9yWqwC3Q">
                    <button className="btn px-5 text-xl bg-[#8BD3DD] text-white w-full h-[51px] md:h-[67px] shadow-custom border-4 border-[#001858] rounded-xl my-5 hover:shadow-none transition-all duration-300 ease-in-out flex justify-between items-center">
                        <img className='w-7' src={Yt} alt="" />
                        <span className="text-[15px] md:text-[20px]">Youtube</span>
                        <img className='w-7' src={Yt} alt="" />
                    </button>
                </a>
                <a href="https://github.com/Fiqsss">
                    <button className="btn px-5 text-xl bg-[#8BD3DD] text-white w-full h-[51px] md:h-[67px] shadow-custom border-4 border-[#001858] rounded-xl my-5 hover:shadow-none transition-all duration-300 ease-in-out flex justify-between items-center">
                        <img className='w-7' src={git} alt="" />
                        <span className="text-[15px] md:text-[20px]">Github</span>
                        <img className='w-7' src={git} alt="" />
                    </button>
                </a>
            </div>
        </div>

    )
}