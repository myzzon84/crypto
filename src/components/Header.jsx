import EN_Icon_1 from '../assets/images/Header/EN_ICON.svg';
import arrow from '../assets/images/Header/Arrow.svg';
import { useEffect, useRef, useState } from 'react';
import appStore from './store';
import { useOnClickOutside } from './useOnClickOutside';

const Header = () => {

    const burger = appStore(store => store.burger);
    const showBurger = appStore(store => store.showBurger);
    const menuItems = ['About', 'AI', 'Security', 'Team', 'Blog', 'White Paper'];

    const mobileMenuBlockRef = useRef(null);
    const langListRef = useRef(null);

    const menuList = menuItems.map((item, i) => {
        return (
            <li
                key={i}
                className={`${burger ? 'menuItem' : ''} text-[18px]/[25px] text-white cursor-pointer duration-700`}
                onClick={() => showBurger(!burger)}
            >
                {item}
            </li>
        );
    });

    const langIcons = [EN_Icon_1, EN_Icon_1, EN_Icon_1];
    const langList = langIcons.map((item, i) => {
        return (
            <li className={``} key={i}>
                <img src={item} alt="img" className={`inline-block py-2`} />
            </li>
        );
    });

    const [selectedLang, setSelectedLang] = useState(langIcons[0]);
    const [showLangList, setShowLangList] = useState(false);
    

    let _width = window.innerWidth;
    let _height = window.innerHeight;

    useOnClickOutside(mobileMenuBlockRef, () => {
        if(burger){
            showBurger(!burger);
        }
    })

    useOnClickOutside(langListRef, () => {
        if(showLangList){
            setShowLangList(!showLangList);
        }
    })

    return (
        <header
            className={`headerWrapper max-w-[1420px] ${_width > 1500 ? 'w-full' : ''} h-[70px] absolute left-1/2 -translate-x-1/2 top-[50px] rounded-[15px] border-[1px] border-[rgba(46,48,52,0.50)] bg-[rgba(16,17,19,0.80)] backdrop-blur-[50px] flex justify-between items-center pl-[23px] pr-[11px] font-manrope z-50`}
        >
            <div className={`logo w-[149px] h-[50px] bg-[#202427] rounded-[15px] flex justify-center items-center text-white text-[20px]/[24px]`}>
                Logo
            </div>
            <div 
                className={`mobileMenu ${burger ? 'openMobileMenu' : ''} w-[50px] h-[40px] hidden absolute top-[15px] left-[20px] cursor-pointer duration-300`}
                onClick={() => showBurger(!burger)}
                ref={mobileMenuBlockRef}
            >
                <div className={`one h-[9px] rounded-[3px] bg-[#262E33] duration-300`}>

                </div>
                <div className={`two h-[9px] rounded-[3px] bg-[#262E33]`}>

                </div>
                <div className={`three h-[9px] rounded-[3px] bg-[#262E33] duration-300`}>

                </div>
            </div>
            <ul className={`menuList ${burger ? 'menuListOpen' : 'max-w-[470px]'}  grow flex justify-between duration-700`}>
                {menuList}
            </ul>
            <div className={`max-w-[268px] h-[51px] flex justify-between relative`}>
                <div
                    className={`w-[84px] h-[51px] rounded-[15px] border-[1px] border-[rgba(46,48,52,0.50)] bg-[#0F1112] flex items-center pl-[11px] relative z-[2] cursor-pointer`}
                    onClick={() => setShowLangList(!showLangList)}
                    ref={langListRef}
                >
                    <img src={selectedLang} alt="img" />
                    <img src={arrow} alt="img" className={`${showLangList ? ' rotate-180' : ' rotate-0'} duration-300`} />
                </div>
                <ul className={` absolute top-[25px] left-0 ${showLangList ? ' opacity-100 visible' : 'opacity-0 invisible'} duration-300 w-[84px] bg-[#0F1112] rounded-[15px] pt-[30px] z-[1] pl-[11px] cursor-pointer`}>
                    {langList}
                </ul>
                <a
                    href=""
                    className={` signInButton flex justify-center items-center bg-[#0052B4] w-[166px] h-[51px] rounded-[15px] text-[18px]/[25px] text-white ml-[10px]`}
                >
                    Sign in
                </a>
            </div>
        </header>
    );
}

export default Header;