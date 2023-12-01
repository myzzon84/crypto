import instagramIcon from '../assets/images/Footer/instagramIcon.svg';
import telegrammIcon from '../assets/images/Footer/telegrammIcon.svg';
import VKIcon from '../assets/images/Footer/VKIcon.svg';

const Footer = () => {

    const quickLinksArr = [
        'Knowledge Base',
        'Knowledge Base',
        'Knowledge Base',
        'Knowledge Base',
        'Knowledge Base',
        'Knowledge Base',
        'Knowledge Base',
        'Knowledge Base',
        'Knowledge Base',
    ];

    let _width = window.innerWidth;
    let _height = window.innerHeight;

    return (
        <footer className={`footerWrapper bg-[rgba(16,17,19,0.80)] pt-[45px] font-manrope pb-[41px]`}>
            <div className={`flex justify-around max-w-[1420px] mx-auto ${_width < 1025 ? ' flex-wrap' : ''}`}>
                <div className={`${_width < 1600 ? _width < 1025 ? _width < 700 ? 'w-[90%] mb-10 flex flex-col items-center' : 'w-[45%] flex flex-col items-center' : 'mr-0' : 'mr-[140px]'} `}>
                    <div className={`w-[149px] h-[50px] rounded-[20px] bg-[#202427] mb-[30px] flex justify-center items-center text-white text-[20px]/[24px]`}>
                        Lgo
                    </div>
                    <p className={`text-[18px]/[29px] text-[#B0B4BA] ${_width < 1200 ? _width < 700 ? 'max-w-[500px] text-center' : 'max-w-[300px]' : 'max-w-[460px]'}  mb-[29px]`}>
                        a decentralized free cryptocurrency trading platform.
                        Make money with Smart Farming - a powerful union of human mind and artificial intelligence. <br /> <br />
                        human mind and artificial intelligence. human mind and artificial intelligence.
                    </p>
                    <div className={`text-[16px]/[26px] text-[#3B3E45]`}>
                        NEONEX © 2023
                    </div>
                </div>
                <div className={`${_width < 1600 ? _width < 1025 ? _width < 700 ? 'w-[90%] flex flex-col items-center' : 'w-[45%] flex flex-col items-center' : 'mr-0' : 'mr-[260px]'} `}>
                    <div className={`text-[18px]/[29px] text-white font-semibold mb-[21px]`}>
                        QUICK LINKS
                    </div>
                    <div className={`flex flex-wrap max-w-[315px] justify-between mb-[56px]`}>
                        {quickLinksArr.map((item, i) => {
                            return (
                                <a href="" className={` inline-block text-[18px]/[29px] text-[#B0B4BA] font-medium ${i === quickLinksArr.length - 1 ? '' : 'mb-2'}`} key={i}>
                                    {item}
                                </a>
                            );
                        })}
                    </div>
                    <div className={`w-[127px] ml-[46px] flex justify-between`}>
                        <a href="">
                            <img src={telegrammIcon} alt="img" />
                        </a>
                        <a href="">
                            <img src={VKIcon} alt="img" />
                        </a>
                        <a href="">
                            <img src={instagramIcon} alt="img" />
                        </a>
                    </div>
                </div>
                <div className={`flex items-end ${_width < 1025 ? 'mt-10' : ''}`}>
                    {['Privacy', 'Terms', 'Cockies'].map((item, i, arr) => {
                        return(
                            <a href="" key={i} className={`text-[18px]/[29px] text-[#B0B4BA] font-medium ${i === arr.length - 1 ? '' : ' mr-8'}`}>
                                {item}
                            </a>
                        );
                    })}
                </div>
            </div>
        </footer>
    );
}

export default Footer;