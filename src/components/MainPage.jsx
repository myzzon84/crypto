import mainBGTop from '../assets/images/mainPage/mainPageBGTop.png';
import iconAI from '../assets/images/mainPage/iconAI.svg';
import '../assets/scss/style.scss';

import statisticIcon1 from '../assets/images/mainPage/statisticIcon1.svg';
import statisticIcon2 from '../assets/images/mainPage/statisticIcon2.svg';
import statisticIcon3 from '../assets/images/mainPage/statisticIcon3.svg';
import Iphone from '../assets/images/mainPage/Iphone.png';
import farming2 from '../assets/images/mainPage/farming2.png';
import farming3 from '../assets/images/mainPage/farming3.png';
import farming4 from '../assets/images/mainPage/farming4.png';
import farming5 from '../assets/images/mainPage/farming5.png';
import farming6 from '../assets/images/mainPage/farming6.png';
import farming7 from '../assets/images/mainPage/farming7.png';
import farming8 from '../assets/images/mainPage/farming8.png';
import farming9 from '../assets/images/mainPage/farming9.png';
import farming10 from '../assets/images/mainPage/farming10.png';
import leftArrow from '../assets/images/mainPage/leftArrow.svg';
import rightArrow from '../assets/images/mainPage/rightArrow.svg';
import technology1 from '../assets/images/mainPage/technology1.png';
import technology2 from '../assets/images/mainPage/technology2.png';
import technology3 from '../assets/images/mainPage/technology3.png';
import technology4 from '../assets/images/mainPage/technology4.png';
import technologies from '../assets/images/mainPage/technologies.png';
import communityBG from '../assets/images/mainPage/communityBG.png';
import futureBG from '../assets/images/mainPage/futureBG.png';
import farming01 from '../assets/images/mainPage/farming01.png';
import farming02 from '../assets/images/mainPage/farming02.png';
import farming03 from '../assets/images/mainPage/farming03.png';
import farming04 from '../assets/images/mainPage/farming04.png';
import farming05 from '../assets/images/mainPage/farming05.png';
import farming06 from '../assets/images/mainPage/farming06.png';
import farming07 from '../assets/images/mainPage/farming07.png';
import smallArrow from '../assets/images/mainPage/smallArrow.svg';
import exmo from '../assets/images/mainPage/exmo.png';
import stage_1 from '../assets/images/mainPage/stage_1.png';
import stage_2 from '../assets/images/mainPage/stage_2.png';


import '../assets/scss/slick.scss';
import '../assets/scss/slick-theme.scss';

import Slider from 'react-slick';

import { createRef, useEffect, useRef, useState } from 'react';

import appStore from './store';


const MainPage = () => {

    let _width = window.innerWidth;
    let _height = window.innerHeight;
    const burger = appStore(store => store.burger);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        swipe: false,
    }

    const secondSettings = {
        className: "slider variable-width",
        dots: false,
        infinite: true,
        slidesToScroll: 1,
        variableWidth: true,
        swipe: false,
    }

    const statisticObj = [
        {
            icon: statisticIcon1,
            title: 'ALL USERS',
            amount: '12.921.251'
        },
        {
            icon: statisticIcon2,
            title: 'AVERAGE DEPOSIT',
            amount: '$5.000'
        },
        {
            icon: statisticIcon3,
            title: 'TOTAL ASSETS',
            amount: '5.000'
        },
        {
            icon: statisticIcon1,
            title: 'TOTAL PAID',
            amount: '$5.000.000'
        }
    ];

    const coursesObj = [
        {
            title: 'BTC / USD',
            difference: '-8,04%',
            color: 'red',
            amount: '$54254,70'
        },
        {
            title: 'BTC / USD',
            difference: '+8,04%',
            color: 'green',
            amount: '$54254,70'
        },
        {
            title: 'BTC / USD',
            difference: '+8,04%',
            color: 'green',
            amount: '$54254,70'
        },
        {
            title: 'BTC / USD',
            difference: '-8,04%',
            color: 'red',
            amount: '$54254,70'
        },
        {
            title: 'BTC / USD',
            difference: '-8,04%',
            color: 'red',
            amount: '$54254,70'
        },
        {
            title: 'BTC / USD',
            difference: '-8,04%',
            color: 'red',
            amount: '$54254,70'
        },
    ];

    const coursesList = coursesObj.map((item, i) => {

        return (
            <div className={`w-[220px]  h-[90px] rounded-[15px] border-[1px] border-[rgba(255,255,255,0.1)] pt-[14px] pl-[24px] ${_width <= 1900 ? ' mb-3' : ''}`} key={i}>
                <div className={`text-[16px]/[22px] flex items-center mb-[7px]`}>
                    <span className={` text-white font-medium mr-[10px]`}>
                        {item.title}
                    </span>
                    <span className={`${item.color === 'red' ? 'text-[#FE5151]' : 'text-[#51FE63]'}`}>
                        {item.difference}
                    </span>
                </div>
                <div className={`text-[24px]/[33px] text-white font-manrope`}>
                    {item.amount}
                </div>
            </div>
        );
    });

    const statisticBlocks = statisticObj.map((item, i) => {
        return (
            <div
                className={`flex w-[275px]  rounded-[15px] border-[1px] border-[rgba(255,255,255,0.1)] ${_width > 700 ? i < 2 ? 'mb-5' : 'mb-0' : 'mb-5'} bg-[rgba(16,17,19,0.80)] ${_width <= 1000 ? 'py-[10px]' : 'py-[31px] h-[125px]'} ${_width < 1450 ? _width < 450 ? 'mx-0' : 'mx-[10px]' : ''} pl-[25px]`}
                key={i}
            >
                <div className={` mr-3`}>
                    <img src={item.icon} alt="img" />
                </div>
                <div className={` font-manrope`}>
                    <div className={`text-[16px]/[20px] text-[#57A4FF] font-medium mb-[6px]`}>
                        {item.title}
                    </div>
                    <div className={`text-[24px]/[31px] text-white font-medium`}>
                        {item.amount}
                    </div>
                </div>
            </div>
        )
    });

    const farmingObj = [
        {
            title: 'We see the value in any market trend',
            description: 'We never panic, turning any trend into a profit',
            icon: farming2,
        },
        {
            title: 'We see the value in any market trend',
            description: 'We never panic, turning any trend into a profit',
            icon: farming2,
        },
        {
            title: 'We respect the laws of the market',
            description: 'We respect the financial market and work with care',
            icon: farming3,
        },
        {
            title: 'We make decentralized systems available to everyone',
            description: 'Each cent in the wallet must bring additional income',
            icon: farming4,
        },
        {
            title: 'We are open for collaboration',
            description: 'We are always open for mutually beneficial cooperation',
            icon: farming5,
        },
        {
            title: 'We are human creative intelligence and AI, an alliance',
            description: 'Responsible decision-making is based on data-driven thinking',
            icon: farming6,
        },
        {
            title: 'We use big-data to make the world a better place',
            description: 'Being professionals already, we continue to learn from every case',
            icon: farming7,
        },
        {
            title: 'We boldly take on any challenge',
            description: 'We face the boldest challenge head-on and respond quickly to changes',
            icon: farming8,
        },
        {
            title: 'We respect the fair combat rules in competition',
            description: 'Business is like a war, and we fight like brave soldiers, respecting the fair combat rules',
            icon: farming9,
        },
        {
            title: `To be smart and friendly`,
            description: 'We are open to new knowledge and our hearts are open to new friends',
            icon: farming10,
        },
    ];

    const farmingSlider = farmingObj.map((item, i) => {
        return (
            <div className={`w-[580px] h-[796px] pt-[141px]`} key={i}>
                <div className={`flex justify-center`}>
                    <img src={item.icon} alt="img" className={`${_width < 1450 ? _width < 900 ? _width < 650 ? 'w-[100px] h-[100px] mb-5' : '' : 'w-[100px] h-[100px] mb-5' : ''}`} />
                </div>
                <div className={`${_width < 1450 ? _width < 900 ? _width < 650 ? 'w-[300px] text-[24px]/[28px]' : 'w-[461px] text-[32px]/[39px]' : 'w-[300px] text-[24px]/[28px]' : 'w-[461px] text-[32px]/[39px]'}  mx-auto font-gilroy text-white text-center mb-3`}>
                    {item.title}
                </div>
                <div className={`${_width < 1450 ? _width < 900 ? _width < 650 ? 'w-[300px] text-[20px]/[24px]' : 'w-[473px] text-[24px]/[38px]' : 'w-[300px] text-[20px]/[24px]' : 'w-[473px] text-[24px]/[38px]'}  mx-auto text-[#B0B4BA] font-manrope text-center`}>
                    {item.description}
                </div>
            </div>
        );
    });

    const [slideNumber, setSlideNumber] = useState(0);
    const [secondSlideNumber, setSecondSlideNumber] = useState(0);
    const [secondSliderArrow, setSecondSliderArrow] = useState('');
    const [stage, setStage] = useState(true);
    const [secondSliderIndex, setSecondSliderIndex] = useState(1);

    let dotsSlider = [];
    for (let i = 0; i < 10; i++) {
        let dot = <div className={`${_width < 1450 ? _width < 900 ? _width < 650 ? 'w-5 h-[6px]' : 'w-[39px] h-2' : 'w-5 h-[6px]' : 'w-[39px] h-2'}  rounded ${slideNumber === i ? ' bg-white' : 'bg-[#1E2124]'}  mx-[3px]`} key={i}>

        </div>
        dotsSlider.push(dot);
    }

    const refSlider = useRef(null);
    const refSecondSlider = useRef(null);

    const [block, setBlock] = useState(false);

    const technologiesArr = [
        {
            icon: technology1,
            title: 'OUR BENEFIT',
            desc: 'Risk management',
        },
        {
            icon: technology2,
            title: 'OUR BENEFIT',
            desc: 'Comfortable environment',
        },
        {
            icon: technology3,
            title: 'OUR BENEFIT',
            desc: 'Profitability',
        },
        {
            icon: technology4,
            title: 'OUR BENEFIT',
            desc: 'Secure and fast transactions',
        },
    ];

    const technologiesList = technologiesArr.map((item, i) => {
        return (
            <div className={`w-[340px] h-[125px] rounded-[15px] border-[1px] border-[rgba(255,255,255,0.1)] bg-[rgba(16,17,19,0.80)] ${i === 0 || i === 1 ? ' mb-5' : ''} ${_width < 1450 ? _width < 1200 ? 'mx-2 mb-5' : 'mb-5' : ''} flex pl-[21px]`} key={i}>
                <div className={`h-full flex items-center mr-5`}>
                    <img src={item.icon} alt="img" />
                </div>
                <div className={`mt-[23px]`}>
                    <div className={`text-[16px]/[21px] text-[#57A4FF] font-manrope font-medium mb-[6px]`}>
                        {item.title}
                    </div>
                    <div className={`text-[20px]/[26px] font-manrope text-white font-medium`}>
                        {item.desc}
                    </div>
                </div>
            </div>
        );
    });

    const farmingFirst = {
        icon: farming01,
        title: 'Farming',
        desc: 'Team the main tasks to work effectively using the latest main softwar tasks effectively usin...'
    }

    const farmingArr = [
        {
            icon: farming02,
            title: 'Farming',
            desc: 'Team the main tasks to work effectively using the latest softwar...'
        },
        {
            icon: farming03,
            title: 'Farming',
            desc: 'Team the main tasks to work effectively using the latest softwar...'
        },
        {
            icon: farming04,
            title: 'Farming',
            desc: 'Team the main tasks to work effectively using the latest softwar...'
        },
        {
            icon: farming05,
            title: 'Farming',
            desc: 'Team the main tasks to work effectively using the latest softwar...'
        },
        {
            icon: farming06,
            title: 'Farming',
            desc: 'Team the main tasks to work effectively using the latest softwar...'
        },
        {
            icon: farming07,
            title: 'Farming',
            desc: 'Team the main tasks to work effectively using the latest softwar...'
        },
    ];

    const farmingList = farmingArr.map((item, i) => {
        return (
            <div
                className={`rounded-[15px] border-[1px] border-[rgba(255,255,255,0.1)] bg-[rgba(16,17,19,0.80)] flex ${_width < 1100 ? _width < 550 ? 'py-4 pl-4' : 'w-full pl-0 justify-center py-4' : 'w-[460px] pl-[22px] h-[175px]'}`}
                key={i}
            >
                <div className={` flex items-center mr-[21px]`}>
                    <div className={`w-[100px] h-[100px]`}>
                        <img src={item.icon} alt="img" />
                    </div>
                </div>
                <div className={` flex flex-col justify-center`}>
                    <div className={`text-[20px]/[26px] text-white font-manrope font-medium mb-[13px]`}>
                        {item.title}
                    </div>
                    <div className={`text-[16px]/[25px] text-[#B0B4BA] font-manrope max-w-[285px] mb-[13px]`}>
                        {item.desc}
                    </div>
                    <div className={` uppercase text-[18px]/[29px] text-[#57A4FF] font-manrope font-semibold pr-[30px] relative w-max cursor-pointer`}>
                        {'Read more'}
                        <img src={smallArrow} alt="" className={` absolute top-1/2 -translate-y-1/2 right-0`} />
                    </div>
                </div>
            </div>
        );
    });

    let exmoArr = [];
    for (let i = 0; i < 10; i++) {
        let temp = <img src={exmo} alt="img" key={i} className={`mr-[28px]`} />
        exmoArr.push(temp);
    }

    let refArr = [];
    for (let i = 0; i < 12; i++) {
        refArr.push(createRef());
    }

    const secondSliderList = [];

    for (let i = 0; i < 12; i++) {

        const secondSliderItem =
            <div
                className={`secondSliderItem w-[460px] h-[340px] rounded-[15px] pt-9 font-manrope ${_width < 500 ? 'pl-5' : 'pl-[43px]'} `}
                key={i}
                style={{ width: _width < 500 ? 370 : 460 }}
                ref={refArr[i]}
            >
                <div className={` text-[20px]/[26px] text-white font-medium mb-[13px]`}>
                    Launcing the platform registrations
                </div>
                <p className={` text-[16px]/[26px] text-[#B0B4BA] max-w-[373px] h-[204px]`}>
                    TOur team the main tasks to work effectively using the latest software solutions and machine technologies to multiply the pool participants, capita learning on the free and decentralized digital money market.
                </p>
                <div className={`flex items-center`}>
                    <span className={`text-[18px]/[29px] text-[#57A4FF] font-manrope font-semibold uppercase mr-[6px]`}>
                        Read more
                    </span>
                    <img src={smallArrow} alt="img" />
                </div>
            </div>

        const stage = <div className={`stage h-[340px]`} key={i} style={{ width: '97px' }}>
            <img src={i === 0 ? stage_1 : stage_2} alt="img" className={` block`} />
        </div>

        if (i === 0 || i === 6) {
            secondSliderList.push(stage);
        } else {
            secondSliderList.push(secondSliderItem)
        }
    }

    const financeArr = [
        {
            title: 'finance',
            email: 'dadsakdsa@gmail.com'
        },
        {
            title: 'finance',
            email: 'dadsakdsa@gmail.com'
        },
        {
            title: 'finance',
            email: 'dadsakdsa@gmail.com'
        },
        {
            title: 'finance',
            email: 'dadsakdsa@gmail.com'
        },
    ];

    return (
        <div className={`mainPageWrapper relative bg-[#0B0C0D] pt-[305px]`}>
            <section className={`section_1 ${_width < 1450 ? 'mx-auto' : 'mx-[250px]'}  relative z-[1]`}>
                <div className={`flex items-center mb-[30px] ${_width < 1450 ? _width < 480 ? 'w-[300px] text-center mx-auto' : ' justify-center' : ''}`}>
                    <img src={iconAI} alt="img" />
                    <span className={`${_width > 1000 ? 'text-[30px]/[41px]' : ''}  text-[#57A4FF] font-manrope ml-[30px]`}>
                        WITH SMART FARMING TECHNOLOGY
                    </span>
                </div>
                <h1 className={`text-[80px]/[89px] text-white font-gilroy max-w-[673px] mb-7 ${_width < 1450 ? ' text-center mx-auto' : ''}`}>
                    MAKE MONEY
                    ON CRYPTO PAIRS
                </h1>
                <div className={`text-[18px]/[25px] text-white font-manrope mb-[87px] ${_width < 1450 ? _width < 600 ? 'flex flex-col items-center' : 'flex justify-center' : ''}`}>
                    <a href="" className={`px-[55px] py-[13px] bg-[#0052B4] rounded-[15px] mr-[15px] w-max ${_width < 600 ? ' mb-4' : ''}`}>
                        Automatic income
                    </a>
                    <a href="" className={`px-[55px] py-[13px] border-[1px] border-[#3B3E45] bg-[#15171B] rounded-[15px] w-max`}>
                        More
                    </a>
                </div>
                <div className={`text-[32px]/[36px] text-white font-gilroy font-medium mb-8 ${_width < 1450 ? ' text-center' : ''}`}>
                    OUR STATISTIC
                </div>
                <div className={`statisticBlocks  flex flex-wrap mb-[85px] ${_width < 1450 ? 'mx-auto justify-center max-w-[600px]' : 'justify-between max-w-[570px]'}`}>
                    {statisticBlocks}
                </div>
                <div className={`flex justify-between flex-wrap font-manrope ${_width < 1450 ? ' mx-auto' : ''} ${_width <= 1900 ? _width <= 1000 ? _width < 570 ? 'max-w-[250px]' : 'max-w-[450px]' : 'max-w-[700px]' : 'w-full'}`}>
                    {coursesList}
                </div>
            </section>

            <section className={`section_2 ${_width < 650 ? 'pt-[50px]' : 'pt-[150px]'}   flex  ${_width < 1800 ? ' justify-center items-start' : 'pl-[226px]'} ${_width < 900 ? ' flex-col items-center mb-[70px]' : ' flex-row mb-[38px]'} ${_width < 650 ? 'pt-80px' : ''}`}>
                <div className={`${_width < 650 ? 'h-[600px]' : 'h-[796px]'}  ${_width < 1450 ? _width < 650 ? 'max-w-[360px]' : 'max-w-[360px]' : 'max-w-[580px]'} ${_width < 1500 ? _width < 900 ? _width < 650 ? 'max-w-[360px]' : 'mr-0 max-w-[580px] mb-[38px]' : ' mr-[70px]' : 'mr-[140px]'}`}>
                    <img src={Iphone} alt="img" className={``} />
                    <div className={` relative ${_width < 1450 ? _width < 900 ? _width < 650 ? 'bottom-[550px]' : 'bottom-[796px]' : 'bottom-[550px]' : 'bottom-[796px]'} `} onMouseDown={(e) => e.preventDefault()}>
                        <Slider
                            {...settings}
                            ref={refSlider}
                        >
                            {farmingSlider}
                        </Slider>
                        <div className={` absolute ${_width < 1450 ? _width < 900 ? _width < 650 ? 'bottom-[320px]' : 'bottom-[135px]' : ' bottom-[320px]' : 'bottom-[135px]'}  left-1/2 -translate-x-1/2 flex`}>
                            {dotsSlider}
                        </div>
                        <div className={` absolute ${_width < 1450 ? _width < 900 ? _width < 650 ? 'bottom-[340px]' : 'bottom-[160px]' : ' bottom-[340px]' : 'bottom-[160px]'}  left-1/2 -translate-x-1/2 text-white flex font-manrope text-[24px]/[27px]`}>
                            <img
                                className={`mr-[5px] cursor-pointer`}
                                src={leftArrow}
                                alt="img"
                                onClick={() => {
                                    if (!block) {
                                        refSlider.current.slickPrev();
                                        if (slideNumber === 0) {
                                            setSlideNumber(9);
                                        } else {
                                            setSlideNumber(slideNumber - 1);
                                        }

                                    }
                                    setBlock(true);
                                    setTimeout(() => {
                                        setBlock(false);
                                    }, 700);
                                }}
                            />
                            <span className={` font-bold`}>
                                {slideNumber + 1}
                            </span>
                            <span className={` text-[#B0B4BA] font-medium`}>
                                /10
                            </span>
                            <img
                                className={`ml-[5px] cursor-pointer`}
                                src={rightArrow}
                                alt="img"
                                onClick={() => {
                                    if (!block) {
                                        refSlider.current.slickNext();
                                        if (slideNumber === 9) {
                                            setSlideNumber(0);
                                        } else {
                                            setSlideNumber(() => slideNumber + 1);
                                        }

                                    }
                                    setBlock(true);
                                    setTimeout(() => {
                                        setBlock(false);
                                    }, 700);
                                }}

                            />
                        </div>
                        <div className={`w-[200px] h-[100px] absolute bottom-[100px] -translate-x-1/2 left-1/2 ${block ? ' block' : ' hidden'}`}>

                        </div>
                    </div>

                </div>
                <div className={`${_width < 900 ? 'max-w-[560px]' : ''} `}>
                    <div className={`${_width < 1450 ? _width < 900 ? _width < 650 ? 'max-w-[350px] text-[24px]/[28px]' : 'max-w-[580px] text-[32px]/[39px]' : 'max-w-[400px] text-[24px]/[28px]' : 'max-w-[580px] text-[32px]/[39px]'} text-white mb-[25px]`}>
                        WINCREASE YOUR INCOME WITH SMART FARMING TECHNOLOGIES
                    </div>
                    <p className={`${_width < 1450 ? _width < 900 ? _width < 650 ? 'text-[16px]/[20px] max-w-[350px]' : 'text-[18px]/[29px] max-w-[580px]' : 'text-[16px]/[20px] max-w-[400px]' : 'text-[18px]/[29px] max-w-[580px]'}  text-[#B0B4BA] font-manrope  mb-[25px]`}>
                        ll you need is to choose a cryptocurrency pair and form an exchange pool. The artificial intelligence algorithms and quantum computing techniques, embedded in the platform, will help you to make money on the difference in the selected pair value. We have taken the best from competing cryptocurrency exchanges to offer our investors the best solution embodied in Smart Farming technology.
                    </p>
                    <a href="" className={`${_width < 1450 ? _width < 900 ? _width < 650 ? 'px-[25px] py-[10px] text-[16px]/[20px]' : 'px-[55px] py-[13px] text-[18px]/[25px]' : 'px-[25px] py-[10px] text-[16px]/[20px]' : 'px-[55px] py-[13px] text-[18px]/[25px]'} inline-block  bg-[#0052B4] text-white  rounded-[15px] mb-[48px]`}>
                        Create free account
                    </a>
                    <div className={`union ${_width < 1450 ? _width < 900 ? _width < 650 ? 'max-w-[350px] h-[290px]' : 'max-w-[560px] h-[260px] pr-8' : 'max-w-[400px] h-[290px]' : 'w-[700px] h-[260px]'} rounded-[15px] pt-[43px] pl-8`}>
                        <div className={`${_width < 1450 ? 'text-[24px]/[28px]' : 'text-[32px]/[39px]'} font-gilroy  text-[#57A4FF] mb-[25px]`}>
                            THE HUMAN MIND AND ARTIFICIAL INTELLIGENCE SUCCESSFUL UNION
                        </div>
                        <p className={`${_width < 1450 ? 'text-[16px]/[20px]' : 'text-[18px]/[25px]'}  text-[#B0B4BA] font-manrope max-w-[580px]`}>
                            Setting ambitious goals, we are guided by experience, the latest technology and common sense. Aware of all the new times challenges and risks, we look confidently to the future, and it is DeFi.
                        </p>
                    </div>
                </div>
            </section>
            <section className={`section_3 ${_width < 1900 ? _width < 1200 ? ' flex-col-reverse' : 'pl-0 pr-0 justify-center' : 'pl-[226px] pr-[296px] justify-between'} flex mb-[131px]`}>
                <div className={`${_width < 1200 ? 'mr-0' : 'mr-[50px]'} `}>
                    <h2 className={` font-gilroy text-[32px]/[39px] text-white  mb-[33px] ${_width < 1450 ? _width < 1200 ? 'max-w-[580px] mx-auto text-center px-5' : 'max-w-[400px]' : 'max-w-[580px]'}`}>
                        WINCREASE YOUR INCOME WITH SMART FARMING TECHNOLOGIES
                    </h2>
                    <p className={`text-[18px]/[29px] text-[#B0B4BA] font-manrope  mb-[33px] ${_width < 1450 ? _width < 1200 ? 'max-w-[700px] text-center mx-auto px-8' : 'max-w-[400px]' : 'max-w-[580px]'}`}>
                        We are professionals, an ambitious teaming the artificial intelligence technology and operations in the cryptocurrency market field. <br /> <br /> НАЗВАНИЕ КРИПТОБИРЖИ - Smart Farming technology embodies the human and artificial intelligence harmony, designed to help achieve maximum benefits for our clients.
                    </p>
                    <div className={`flex  flex-wrap  ${_width < 1450 ? _width < 1200 ? 'w-full justify-center' : 'w-[400px]' : 'w-[700px] justify-between'}`}>
                        {technologiesList}
                    </div>
                </div>
                <div className={`${_width < 1450 ? _width < 1200 ? 'flex justify-center mb-10' : 'flex items-center' : ''} `}>
                    <img src={technologies} alt="img" className={`${_width < 1450 ? _width < 1200 ? '' : 'h-[588px]' : ''}`} />
                </div>
            </section>

            <section className={`section_4  flex  ${_width < 1900 ? _width < 1200 ? ' flex-col' : 'px-0 justify-center' : 'pl-[226px] pr-[270px] justify-between'}`}>
                <div className={`${_width < 1200 ? 'flex justify-center' : ''}`}>
                    <img src={communityBG} alt="img" />
                </div>
                <div className={` ${_width < 1200 ? 'pt-[100px]' : 'pt-[197px]'}`}>
                    <h2 className={` font-gilroy text-white text-[32px]/[39px] max-w-[580px] mb-[25px] ${_width < 1200 ? ' text-center mx-auto px-4' : ''}`}>
                        A COMMUNITY FOR FORWARD-THINKING PEOPLE
                    </h2>
                    <p className={`text-[18px]/[29px] text-[#B0B4BA] font-manrope mb-[25px] max-w-[580px] ${_width < 1200 ? ' text-center mx-auto px-4' : ''}`}>
                        At Apex One AI, the team's intelligence is complemented by the developments in Big Data, so farming in the community generates substantial passive income for our partners. Focused on the main goal, we share the progress and fairness a new world values.
                    </p>
                    <a href="" className={`text-[18px]/[25px] text-white font-manrope block w-max py-[13px] px-[55px] bg-[#0052B4] rounded-[15px] ${_width < 1200 ? 'mx-auto' : ''}`}>
                        Read more
                    </a>
                </div>
            </section>

            <section className={` flex relative mb-[134px] ${_width < 1900 ? _width < 1200 ? ' flex-col-reverse' : 'px-0 justify-center bottom-0' : 'pl-[226px] pr-[198px] justify-between bottom-[135px]'}`}>
                <div className={`max-w-[580px]  ${_width < 1400 ? _width < 1200 ? 'pt-[100px] mx-auto' : ' pl-9 pt-[326px]' : 'pt-[326px]'}`}>
                    <h2 className={`font-gilroy text-white text-[32px]/[39px] mb-[25px] ${_width < 1200 ? ' text-center px-7' : ''}`}>
                        ADVANCED TECHNOLOGIES FOR THE MONEY OF THE FUTURE
                    </h2>
                    <p className={`text-[18px]/[29px] text-[#B0B4BA] font-manrope mb-[25px] ${_width < 1200 ? ' text-center px-7' : ''}`}>
                        Our team the main tasks to work effectively using the latest software solutions and machine technologies to multiply the pool participants, capita learning on the free and decentralized digital money market.
                    </p>
                    <a href="" className={` block w-max text-[18px]/[25px] text-white font-manrope py-[13px] px-[55px] rounded-[15px] bg-[#0052B4] ${_width < 1200 ? ' mx-auto' : ''}`}>
                        Read more
                    </a>
                </div>
                <div className={`${_width < 1200 ? 'flex justify-center' : ''}`}>
                    <img src={futureBG} alt="img" />
                </div>
            </section>

            <section className={`mb-[130px] ${_width < 1900 ? _width < 1200 ? 'px-[50px]' : 'pl-0' : 'pl-[226px]'}`}>
                <div className={`max-w-[1420px] flex ${_width < 1900 ? _width < 1500 ? ' flex-col' : 'mx-auto' : ''}`}>
                    <div className={`rounded-[15px] border-[1px] border-[rgba(255,255,255,0.1)] bg-[rgba(16,17,19,0.80)] ${_width < 1500 ? 'mb-7 max-w-[940px] w-full mx-auto pt-[50px] h-[350px]' : 'w-[459px] mr-[21px] pt-[162px] h-[565px]'}`}>
                        <img src={farmingFirst.icon} alt="img" className={` block mx-auto mb-[13px]`} />
                        <div className={` text-center text-[20px]/[26px] text-white font-manrope font-medium mb-[13px]`}>
                            {farmingFirst.title}
                        </div>
                        <p className={`max-w-[363px] mx-auto text-center text-[16px]/[26px] text-[#B0B4BA] font-manrope mb-[13px]`}>
                            {farmingFirst.desc}
                        </p>
                        <div className={` uppercase text-[18px]/[29px] text-[#57A4FF] font-manrope font-semibold pr-[30px] relative w-max mx-auto cursor-pointer`}>
                            {'Read more'}
                            <img src={smallArrow} alt="" className={` absolute top-1/2 -translate-y-1/2 right-0`} />
                        </div>
                    </div>
                    <div className={`max-w-[940px] flex justify-between flex-wrap gap-5 ${_width < 1500 ? 'mx-auto' : ''}`}>
                        {farmingList}
                    </div>
                </div>
            </section>
            <div className={`flex mb-[149px]`}>
                {exmoArr}
            </div>
            <section className={`secondSlider ${_width < 500 ? 'pl-0 flex flex-col items-center' : 'pl-[226px] '} ${_width < 1450 ? 'pb-[400px]' : 'pb-[583px]'}  relative`}>
                <div className={`flex mb-[26px]`}>
                    <img src={leftArrow} alt="img" className={` cursor-pointer`} onClick={() => {
                        setSecondSliderArrow('prev');
                        if (!refArr[secondSliderIndex - 1]?.current) {
                            refSecondSlider.current.slickGoTo(secondSliderIndex - 2)
                        } else {
                            refSecondSlider.current.slickPrev();
                        }
                    }} />
                    <div className={` text-white text-[24px]/[27px] font-manrope`}>
                        <span className={` font-bold ml-[5px]`}>
                            {stage ? '-' : secondSlideNumber}
                        </span>
                        <span className={` font-medium text-[#B0B4BA] mr-[5px]`}>
                            /10
                        </span>
                    </div>
                    <img src={rightArrow} alt="img" className={` cursor-pointer`} onClick={() => {
                        setSecondSliderArrow('next');
                        if (!refArr[secondSliderIndex + 1]?.current) {
                            refSecondSlider.current.slickGoTo(secondSliderIndex + 2);
                        } else {
                            refSecondSlider.current.slickNext();
                        }
                    }} />
                </div>
                <h2 className={` text-[32px]/[36px] text-white font-gilroy mb-[26px]`}>
                    OUR WAY
                </h2>
                <div className={` absolute ${_width < 1450 ? 'bottom-[65px]' : 'bottom-[243px]'}  left-0 w-full h-[340px] overflow-hidden`}>
                    <Slider
                        {...secondSettings}
                        ref={refSecondSlider}
                        afterChange={(index) => {
                            setSecondSliderIndex(index);
                            if (refArr[index].current === null) {
                                setStage(true);
                            }
                            if (refArr[index]?.current?.getAttribute('class').includes('secondSliderItem')) {
                                setStage(false);
                                if (secondSliderArrow === 'prev') {
                                    if (secondSlideNumber === 1 || secondSlideNumber === 0) {
                                        setSecondSlideNumber(10)
                                    } else {
                                        setSecondSlideNumber(secondSlideNumber - 1);
                                    }
                                }
                                if (secondSliderArrow === 'next') {
                                    if (secondSlideNumber === 10) {
                                        setSecondSlideNumber(1);
                                    } else {
                                        setSecondSlideNumber(secondSlideNumber + 1);
                                    }
                                }
                            }
                        }}
                    >
                        {secondSliderList}
                    </Slider>
                </div>
            </section>
            <section>
                <div className={`${_width < 1450 ? _width < 500 ? 'flex flex-col items-center mb-[100px]' : 'flex justify-center mb-[100px]' : 'pl-[982px]'} mb-[220px]`}>
                    {['Show on map', 'Navigate'].map((item, i) => {
                        return (
                            <a href="" key={i} className={`text-[18px]/[25px] text-white font-manrope inline-block py-[13px] px-[55px] rounded-[15px] ${i === 0 ? _width < 500 ? 'mr-0 mb-5' : 'mr-[15px]' : ''} ${_width < 500 ? 'w-max' : ''} border-[1px] border-[#3B3E45] bg-[#15171B]`}>
                                {item}
                            </a>
                        );
                    })}
                </div>
                <div className={`${_width < 1600 ? 'pl-0 pr-0 justify-around' : 'pl-[286px] pr-[334px] justify-between'} ${_width < 1000 ? ' flex-wrap' : ''} flex `}>
                    {financeArr.map((item, i) => {
                        return (
                            <div className={` font-manrope  ${_width < 1000 ? ' px-5 mb-[50px]' : 'mb-[145px]'} `} key={i}>
                                <div className={`text-[16px]/[22px] text-[#57A4FF] font-medium uppercase mb-[10px]`}>
                                    {item.title}
                                </div>
                                <div className={`text-[18px]/[20px] text-white font-semibold`}>
                                    {item.email}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            <img src={mainBGTop} alt="img" className={` absolute top-0 left-0 `} />
            <div className={` absolute top-0 left-0 ${burger ? '' : ' hidden'} bg-[rgba(0,0,0,0.9)] w-full h-full z-20`}>

            </div>
        </div>
    );
}

export default MainPage;