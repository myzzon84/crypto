import EN_Icon_1 from '../assets/images/Header/EN_ICON.svg';
import arrow from '../assets/images/Header/Arrow.svg';
import { useState } from 'react';

const Header = () => {

    
    const menuItems = ['About', 'AI', 'Security', 'Team', 'Blog', 'White Paper'];

    const menuList = menuItems.map((item, i) => {
        return (
            <li
                key={i}
                className={`text-[18px]/[25px] text-white cursor-pointer`}
            >
                {item}
            </li>
        );
    });

    const langIcons = [EN_Icon_1, EN_Icon_1, EN_Icon_1];
    const langList = langIcons.map((item, i) => {
        return (
            <li className={``} key={i}>
                <img src={item} alt="img" className={`inline-block py-2`}/>
            </li>
        );
    });

    const [selectedLang, setSelectedLang] = useState(langIcons[0]);
    const [showLangList, setShowLangList] = useState(false);

    return (
        <header
            className={`max-w-[1420px] w-full h-[70px] absolute left-1/2 -translate-x-1/2 top-[50px] rounded-[15px] border-[1px] border-[rgba(46,48,52,0.50)] bg-[rgba(16,17,19,0.80)] backdrop-blur-[50px] flex justify-between items-center pl-[23px] pr-[11px] font-manrope z-50`}
        >
            <div className={`w-[149px] h-[50px] bg-[#202427] rounded-[15px]`}>

            </div>
            <ul className={`max-w-[470px] grow flex justify-between`}>
                {menuList}
            </ul>
            <div className={`w-[268px] h-[51px] flex justify-between relative`}>
                <div 
                    className={`w-[84px] h-[51px] rounded-[15px] border-[1px] border-[rgba(46,48,52,0.50)] bg-[#0F1112] flex items-center pl-[11px] relative z-[2]`}
                    onClick={() => setShowLangList(!showLangList)}
                >
                    <img src={selectedLang} alt="img" />
                    <img src={arrow} alt="img" className={`${showLangList ? ' rotate-180' : ' rotate-0'} duration-300`}/>
                </div>
                <ul className={` absolute top-[25px] left-0 ${showLangList ? ' opacity-100 visible' : 'opacity-0 invisible'} duration-300 w-[84px] bg-[#0F1112] rounded-[15px] pt-[30px] z-[1] pl-[11px]`}>
                    {langList}
                </ul>
                <a
                    href=""
                    className={`flex justify-center items-center bg-[#0052B4] w-[166px] h-[51] rounded-[15px] text-[18px]/[25px] text-white`}
                >
                    Sign in
                </a>
            </div>
        </header>
    );
}

export default Header;