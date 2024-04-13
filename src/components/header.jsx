import PP from '../assets/fiqsss.png';

export default function Header() {
    return (
        <div className="header-wrap my-10 flex justify-center items-center flex-col text-white z-50">
            <img className='w-[177px]' src={PP} alt="Profile Picture" />
            <p className="text-[16px] md:text-[40px] fw-bold mt-4 font-robo ">Nur Muhammad Arofiq</p>
            <p className="text-[11px] md:text-[20px] fw-bold">Welcome to My Page</p>
        </div>
    );
}
