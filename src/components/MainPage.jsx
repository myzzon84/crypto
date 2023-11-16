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


import '../assets/scss/slick.scss';
import '../assets/scss/slick-theme.scss';

import Slider from 'react-slick';

import { useRef, useState } from 'react';


const MainPage = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
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
            <div className={`w-[220px] h-[90px] rounded-[15px] border-[1px] border-[rgba(255,255,255,0.1)] pt-[14px] pl-[24px]`} key={i}>
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
                className={`flex w-[275px] h-[125px] rounded-[15px] border-[1px] border-[rgba(255,255,255,0.1)] ${i < 2 ? 'mb-5' : 'mb-0'} bg-[rgba(16,17,19,0.80)] py-[31px] pl-[25px]`}
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
                    <img src={item.icon} alt="img" />
                </div>
                <div className={`w-[461px] mx-auto font-gilroy text-[32px]/[39px] text-white text-center mb-3`}>
                    {item.title}
                </div>
                <div className={`w-[473px] mx-auto text-[24px]/[38px] text-[#B0B4BA] font-manrope text-center`}>
                    {item.description}
                </div>
            </div>
        );
    });

    const [slideNumber, setSlideNumber] = useState(0);

    let dotsSlider = [];
    for (let i = 0; i < 10; i++) {
        let dot = <div className={`w-[39px] h-2 rounded ${slideNumber === i ? ' bg-white' : 'bg-[#1E2124]'}  mx-[3px]`} key={i}>

        </div>
        dotsSlider.push(dot);
    }

    const refSlider = useRef(null);

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
            <div className={`w-[340px] h-[125px] rounded-[15px] border-[1px] border-[rgba(255,255,255,0.1)] bg-[rgba(16,17,19,0.80)] ${i === 0 || i === 1 ? ' mb-5' : ''} flex pl-[21px]`}>
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
                className={`w-[460px] h-[175px] rounded-[15px] border-[1px] border-[rgba(255,255,255,0.1)] bg-[rgba(16,17,19,0.80)] flex pl-[22px]`}
                key={i}
            >
                <div className={` flex items-center mr-[21px]`}>
                    <div>
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

    return (
        <div className={`mainPageWrapper h-[6000px] relative bg-[#0B0C0D] pt-[305px]`}>
            <section className={` mx-[250px] relative z-[1]`}>
                <div className={`flex items-center mb-[30px]`}>
                    <img src={iconAI} alt="img" />
                    <span className={`text-[30px]/[41px] text-[#57A4FF] font-manrope ml-[30px]`}>
                        WITH SMART FARMING TECHNOLOGY
                    </span>
                </div>
                <h1 className={`text-[80px]/[89px] text-white font-gilroy max-w-[673px] mb-7`}>
                    MAKE MONEY
                    ON CRYPTO PAIRS
                </h1>
                <div className={`text-[18px]/[25px] text-white font-manrope mb-[87px]`}>
                    <a href="" className={`px-[55px] py-[13px] bg-[#0052B4] rounded-[15px] mr-[15px]`}>
                        Automatic income
                    </a>
                    <a href="" className={`px-[55px] py-[13px] border-[1px] border-[#3B3E45] bg-[#15171B] rounded-[15px]`}>
                        More
                    </a>
                </div>
                <div className={`text-[32px]/[36px] text-white font-gilroy font-medium mb-8`}>
                    OUR STATISTIC
                </div>
                <div className={`max-w-[570px] flex flex-wrap justify-between mb-[85px]`}>
                    {statisticBlocks}
                </div>
                <div className={`flex justify-between w-full font-manrope`}>
                    {coursesList}
                </div>
            </section>

            <section className={` pl-[226px] pr-[274px] pt-[150px] flex justify-between mb-[38px]`}>
                <div className={`w-[580px] h-[796px]`}>
                    <img src={Iphone} alt="img" className={``} />
                    <div className={` relative bottom-[796px]`} onMouseDown={(e) => e.preventDefault()}>
                        <Slider
                            {...settings}
                            ref={refSlider}
                        >
                            {farmingSlider}
                        </Slider>
                        <div className={` absolute bottom-[135px] left-1/2 -translate-x-1/2 flex`}>
                            {dotsSlider}
                        </div>
                        <div className={` absolute bottom-[160px] left-1/2 -translate-x-1/2 text-white flex font-manrope text-[24px]/[27px]`}>
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
                <div>
                    <div className={`max-w-[580px] text-[32px]/[39px] text-white mb-[25px]`}>
                        WINCREASE YOUR INCOME WITH SMART FARMING TECHNOLOGIES
                    </div>
                    <p className={`text-[18px]/[29px] text-[#B0B4BA] font-manrope max-w-[580px] mb-[25px]`}>
                        ll you need is to choose a cryptocurrency pair and form an exchange pool. The artificial intelligence algorithms and quantum computing techniques, embedded in the platform, will help you to make money on the difference in the selected pair value. We have taken the best from competing cryptocurrency exchanges to offer our investors the best solution embodied in Smart Farming technology.
                    </p>
                    <a href="" className={` inline-block px-[55px] py-[13px] bg-[#0052B4] text-white text-[18px]/[25px] rounded-[15px] mb-[48px]`}>
                        Create free account
                    </a>
                    <div className={`union w-[700px] h-[260px] rounded-[15px] pt-[43px] pl-8`}>
                        <div className={` font-gilroy text-[32px]/[39px] text-[#57A4FF] mb-[25px]`}>
                            THE HUMAN MIND AND ARTIFICIAL INTELLIGENCE SUCCESSFUL UNION
                        </div>
                        <p className={`text-[18px]/[25px] text-[#B0B4BA] font-manrope max-w-[580px]`}>
                            Setting ambitious goals, we are guided by experience, the latest technology and common sense. Aware of all the new times challenges and risks, we look confidently to the future, and it is DeFi.
                        </p>
                    </div>
                </div>
            </section>
            <section className={`pl-[226px] pr-[296px] flex justify-between mb-[131px]`}>
                <div>
                    <h2 className={` font-gilroy text-[32px]/[39px] text-white max-w-[580px] mb-[33px]`}>
                        WINCREASE YOUR INCOME WITH SMART FARMING TECHNOLOGIES
                    </h2>
                    <p className={`text-[18px]/[29px] text-[#B0B4BA] font-manrope max-w-[580px] mb-[33px]`}>
                        We are professionals, an ambitious teaming the artificial intelligence technology and operations in the cryptocurrency market field. <br /> <br /> НАЗВАНИЕ КРИПТОБИРЖИ - Smart Farming technology embodies the human and artificial intelligence harmony, designed to help achieve maximum benefits for our clients.
                    </p>
                    <div className={`flex justify-between flex-wrap w-[700px]`}>
                        {technologiesList}
                    </div>
                </div>
                <div>
                    <img src={technologies} alt="img" />
                </div>
            </section>

            <section className={`pl-[226px] pr-[270px] flex justify-between`}>
                <div>
                    <img src={communityBG} alt="img" />
                </div>
                <div className={`pt-[197px]`}>
                    <h2 className={` font-gilroy text-white text-[32px]/[39px] max-w-[580px] mb-[25px]`}>
                        A COMMUNITY FOR FORWARD-THINKING PEOPLE
                    </h2>
                    <p className={`text-[18px]/[29px] text-[#B0B4BA] font-manrope mb-[25px] max-w-[580px]`}>
                        At Apex One AI, the team's intelligence is complemented by the developments in Big Data, so farming in the community generates substantial passive income for our partners. Focused on the main goal, we share the progress and fairness a new world values.
                    </p>
                    <a href="" className={`text-[18px]/[25px] text-white font-manrope inline-block py-[13px] px-[55px] bg-[#0052B4] rounded-[15px]`}>
                        Read more
                    </a>
                </div>
            </section>

            <section className={`pl-[226px] pr-[198px] flex justify-between relative bottom-[135px] mb-[134px]`}>
                <div className={`max-w-[580px] pt-[326px]`}>
                    <h2 className={`font-gilroy text-white text-[32px]/[39px] mb-[25px]`}>
                        ADVANCED TECHNOLOGIES FOR THE MONEY OF THE FUTURE
                    </h2>
                    <p className={`text-[18px]/[29px] text-[#B0B4BA] font-manrope mb-[25px]`}>
                        Our team the main tasks to work effectively using the latest software solutions and machine technologies to multiply the pool participants, capita learning on the free and decentralized digital money market.
                    </p>
                    <a href="" className={` inline-block text-[18px]/[25px] text-white font-manrope py-[13px] px-[55px] rounded-[15px] bg-[#0052B4]`}>
                        Read more
                    </a>
                </div>
                <div>
                    <img src={futureBG} alt="img" />
                </div>
            </section>

            <section className={` pl-[226px] mb-[130px]`}>
                <div className={`max-w-[1420px] flex`}>
                    <div className={`w-[459px] h-[565px] rounded-[15px] border-[1px] border-[rgba(255,255,255,0.1)] bg-[rgba(16,17,19,0.80)] mr-[21px] pt-[162px]`}>
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
                    <div className={`max-w-[940px] flex justify-between flex-wrap gap-5`}>
                        {farmingList}
                    </div>
                </div>
            </section>

            <img src={mainBGTop} alt="img" className={` absolute top-0 left-0 `} />
        </div>
    );
}

export default MainPage;