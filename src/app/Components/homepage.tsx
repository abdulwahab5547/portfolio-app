"use client";

import { useEffect, useState } from 'react';

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

import Navbar from './navbar'
import Footer from './footer'
import SocialCard from './socialcard'
import ContactSection from './contact'
import Image from 'next/image';

import Ending from '../../assets/ending.png'
// import Tech from '../../assets/tech.jpg'

// Images
// import Buzz from '../../assets/buzz.jpg'
// import Receiptify from '../../assets/receiptify.jpg'
// import LaptopZone from '../../assets/laptopzone.jpg'
// import Expense from '../../assets/expense-tracker.jpg'
// import Todo from '../../assets/todo.jpg'
// import CheckItOff from '../../assets/checkitoff.jpg'
import Profile from '../../assets/profile.jpeg'
import Coma from '../../assets/coma.jpg'
import LinkedIn from '../../assets/linkedin.webp'
import Instagram from '../../assets/instagram.webp'
import X from '../../assets/x.webp'
import GitHub from '../../assets/github.png'

import { LayoutGridDemo } from './layoutdemo';

export default function Homepage() {
    const [activeLink, setActiveLink] = useState('home'); // State to track active link

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'portfolio', 'contact'];
            const scrollPosition = window.scrollY;

            sections.forEach((section) => {
                const sectionElement = document.getElementById(section);
                if (sectionElement) {
                    const sectionTop = sectionElement.offsetTop;
                    const sectionHeight = sectionElement.offsetHeight;

                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        setActiveLink(section); // Update active link based on scroll position
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll); // Add scroll event listener
        return () => {
            window.removeEventListener('scroll', handleScroll); // Cleanup on unmount
        };
    }, []);

    // const frontendProjects = [
    //     {
    //         title: 'Expense tracker',
    //         features: ['Add and track expenses', 'Screenshot your expense sheet', 'View top expenses'],
    //         liveLink: 'https://abdulwahab5547.github.io/expense-tracker/',
    //         githubLink: 'https://github.com/abdulwahab5547/expense-tracker',
    //         youtubeLink: 'https://www.youtube.com/watch?v=C9g_ikS8l_4',
    //         image: Expense,
    //     },
    //     {
    //         title: 'Laptop zone',
    //         features: ['E-commerce website', 'Add items to cart', 'Manage cart'],
    //         liveLink: 'https://abdulwahab5547.github.io/laptop-zone/',
    //         githubLink: 'https://github.com/abdulwahab5547/laptop-zone',
    //         youtubeLink: 'https://abdulwahab5547.github.io/laptop-zone/',
    //         image: LaptopZone,
    //     },
    //     {
    //         title: 'To-Do list app',
    //         features: ['Add new tasks', "Check off tasks when done", "Delete tasks as needed"],
    //         liveLink: 'https://abdulwahab5547.github.io/to-do/',
    //         githubLink: 'https://github.com/abdulwahab5547/to-do',
    //         youtubeLink: 'https://abdulwahab5547.github.io/to-do/',
    //         image: Todo,
    //     },
    // ];
    // const fullstackProjects = [
    //     {
    //         title: 'CheckItOff',
    //         features: ["Track current & upcoming tasks", 'Options for adding goals and notes', 'Clean & simple UI', 'Pomodoro timer'],
    //         liveLink: 'https://checkitoff-frontend-v2.vercel.app/',
    //         githubLink: 'https://github.com/abdulwahab5547/checkitoff-v1',
    //         youtubeLink: 'https://checkitoff-frontend-v2.vercel.app/',
    //         image: CheckItOff,
    //     },
    //     {
    //         title: 'Buzz',
    //         features: ["See others' posts", 'Create posts, reels, and more', 'Text other users'],
    //         liveLink: 'https://buzz-theta.vercel.app/',
    //         githubLink: 'https://github.com/abdulwahab5547/buzz',
    //         youtubeLink: 'https://www.youtube.com/watch?v=mynmWzcjg_8',
    //         image: Buzz,
    //     },
    //     {
    //         title: 'Receiptify',
    //         features: ['Create customizable receipts', 'Download and email receipts', 'View receipt history'],
    //         liveLink: 'https://receiptify-app-wine.vercel.app/',
    //         githubLink: 'https://github.com/abdulwahab5547/receiptify-app',
    //         youtubeLink: 'https://www.youtube.com/watch?v=jTMGR012c6M',
    //         image: Receiptify,
    //     },
    // ];
    const socialCards = [
        {
            title: 'LinkedIn',
            link: 'https://www.linkedin.com/in/aw-asif/',
            image: LinkedIn,
        },
        {
            title: 'Instagram',
            link: 'https://www.instagram.com/abdul.develops/',
            image: Instagram,
        },
        {
            title: 'X - Twitter',
            link: 'https://twitter.com/',
            image: X,
        },
        {
            title: 'GitHub',
            link: 'https://github.com/abdulwahab5547',
            image: GitHub,
        },
    ];

    // Counter effect
    const { ref, inView } = useInView({
        triggerOnce: true, // Animate only once
        threshold: 0.5, // Trigger when 50% of the section is visible
    });

    const stats = [
        { count: 20, label: "projects", sublabel: "completed" },
        { count: 12, label: "satisfied", sublabel: "customers" },
        { count: 2, label: "years of", sublabel: "experience" },
    ];


    return (
        <div id="home" className="homepage">
            <div
                data-aos="fade-down"
                data-aos-duration="1000"
                className="sticky top-0 z-50">
                <Navbar activeLink={activeLink} /> {/* Pass activeLink to Navbar */}
            </div>

            <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className='main-part bg-darkGreen  text-white'>

                <div className='py-40 text-center relative'>

                    <div className="text-wrapper absolute top-3 overflow-hidden whitespace-nowrap w-full hidden lg:flex items-center">
                        <span className="flowing-text select-none uppercase text-9xl opacity-5 font-extrabold ">
                            Abdul Wahab Abdul Wahab Abdul Wahab Abdul Wahab Abdul Wahab
                        </span>
                    </div>
                    <div className='px-5'>
                        <h1 className='py-4 text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold no-select'>Tailored web solutions.<br /> To grow <span className='text-orange'>your</span> brand</h1>
                        <p className='py-4 text-md sm:text-xl md:text-2xl lg:text-2xl   text-gray-400'>Build your brand online with custom<br /> web solutions that <span className=''>work.</span></p>
                        <div className='py-4'
                            data-aos="zoom-in"
                            data-aos-duration="1500"
                        >
                            <a href='#contact'>
                                <button className='bg-orange hover:opacity-80 px-3 sm:px-4 md:px-6 lg:px-9 py-2 sm:py-3 md:py-4 lg:py-5 text-md sm:text-xl md:text-xl lg:text-xl rounded-full font-bold'>Grow With Me</button>
                            </a>
                        </div>
                    </div>

                </div>

                {/* <div className='py-4 pt-8'>
                    <div className='relative'>
                        <div className='flex justify-center relative z-10 py-4 px-8'>
                            <Image className='rounded-3xl' src={Me} width={490} alt=''/>
                        </div>
                    </div>
                </div> */}

                {/* <div className='py-16 pt-40' data-aos="fade-down"
                data-aos-duration="1500">
                    <div className='text-center'>
                        <p className='text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold'>Expert in <span className='text-orange'>MERN</span> stack</p>
                        <div className='flex justify-center'>
                            <Image className='' src={Tech} width={750} alt=''/>
                        </div>
                    </div>
                    
                </div> */}

            </div>
            <Image className='' src={Ending} alt='' />

            <div id="about">
                <div className='about-me py-6 pb-4 md:pb-12'>
                    <div className='text-center'>
                        <h2 className='py-4 text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-textGreen'>I&apos;m Abdul Wahab</h2>
                        <div className='flex gap-3 md:gap-6 justify-center pt-2 px-2'>
                            <div
                                data-aos="fade-right"
                                data-aos-duration="1500"
                                className='border-textGreen border-2 rounded-full'>
                                <p className='text-textGreen text-md sm:text-lg md:text-xl lg:text-2xl py-1 px-2 md:p-2 md:px-4 font-semibold'>Web Developer</p>
                            </div>
                            <div
                                data-aos="fade-left"
                                data-aos-duration="1500"
                                className='border-orange border-2 rounded-full'>
                                <p className='text-orange py-1 px-2 md:p-2 md:px-4 text-md sm:text-lg md:text-xl lg:text-2xl font-semibold'>Tech Enthusiast</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col md:flex-row justify-between items-center pt-5 md:pt-12 w-[75%] m-auto gap-4'>
                        <div
                            data-aos="fade-right"
                            data-aos-duration="1500"
                            className='w-full md:w-2/3 pt-4 pb-6'>
                            <div className='pr-3'>
                                <div className=''>

                                    <div className='pb-3'>
                                        <Image src={Coma} alt='' className='md:w-[70px] lg:w-[70px] sm:w-[50px] w-[30px]'/>
                                    </div>

                                    <div className=''>
                                        <div className='flex flex-col gap-4 text-md sm:text-md md:text-lg lg:text-xl'>
                                            <p className=''>
                                                I&apos;ve always loved building. It started with a Pentium 4 PC my father gave me, where I spent hours creating kingdoms in Age of Empires. As I upgraded my setup, I moved on to building houses in The Sims 4, then cities in Tropico 4 and Cities: Skylines.
                                            </p>
                                            <p className=''>
                                                Now? I build web solutions. <span className='font-bold'>I&apos;ve made websites, landing pages, tournament management tools, MVPs—you name it!</span>
                                            </p>
                                            <p className=''>
                                                I&apos;m skilled in the MERN stack and always looking to learn more. If you have an idea for a web app and need someone to bring it to life, hit me up and let&apos;s discuss.
                                            </p>
                                        </div>

                                        <div className='pt-7'>
                                            <a href='#contact'>
                                                <button className='bg-orange hover:opacity-80 text-white px-3 sm:px-4 md:px-6 lg:px-9 py-2 sm:py-3 md:py-4 lg:py-5 text-md sm:text-xl md:text-xl lg:text-xl rounded-full font-bold'>
                                                    <span>Contact Me<span className="pl-3"><i className="fa-solid fa-arrow-right"></i></span></span>
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            data-aos="fade-left"
                            data-aos-duration="1500"
                            className='w-full md:w-1/3 pb-6'>
                            <Image className='rounded-3xl' src={Profile} alt='' />
                        </div>
                    </div>



                </div>

                <hr className='bg-darkGreen h-0.5' />

                <div
                    ref={ref}
                    className="flex flex-col md:flex-row px-4 py-10 md:py-20 justify-between w-[75%] m-auto text-textGreen text-center"
                >
                    {stats.map((item, index) => (
                        <div
                            key={index}
                            data-aos="zoom-in"
                            data-aos-duration="1500"
                            className="py-3"
                        >
                            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl md:font-bold">
                                <span className="text-xl sm:text-3xl md:text-5xl lg:text-7xl font-bold lg:pr-0 md:pr-0 sm:pr-2 pr-2">
                                    {inView ? (
                                        <CountUp start={0} end={item.count} duration={2} />
                                    ) : (
                                        0
                                    )}
                                    +
                                </span>
                                <br />
                                {item.label} <br />
                                {item.sublabel}
                            </p>
                        </div>
                    ))}
                </div>

                <hr className='bg-darkGreen h-0.5 mb-2' />
                <Image className='rotate-180' src={Ending} alt='' />
            </div>

            <div id="portfolio">
                <div className='projects bg-darkGreen text-white py-6'>
                    <div className='pt-12 pb-4'>
                        <p className='text-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold'>My <span className='text-orange'>key</span> projects</p>
                    </div>
                    <div className='w-[80%] m-auto'>
                        <LayoutGridDemo />
                    </div>

                </div>
                <Image className='' src={Ending} alt='' />


                {/* <div className='pb-8 pt-16 w-[80%] md:w-[75%] m-auto'>

                    <div className='flex gap-7 pt-2 flex-col md:flex-row'>
                        <div className='w-[100%] md:w-[50%] flex flex-col items-center justify-center'>
                            <div
                                data-aos="fade-right"
                                data-aos-duration="1500"
                                className='border-textGreen border-2 rounded-full'>
                                <p className='text-textGreen text-md sm:text-lg md:text-xl lg:text-2xl p-2 px-4 font-semibold'>Front-end projects</p>
                            </div>
                            <div
                                data-aos="fade-up-right"
                                data-aos-duration="1500"
                                className='flex flex-col justify-between py-6 pt-10 md:px-5'>
                                {frontendProjects.slice(0, 3).map((project, index) => (
                                    <Suspense key={index} fallback={<div>Loading...</div>}>
                                        <ProjectCard {...project} />
                                    </Suspense>
                                ))}
                            </div>
                        </div>
                        <div className='w-[100%] md:w-[50%] flex flex-col items-center justify-center'>
                            <div
                                data-aos="fade-left"
                                data-aos-duration="1500"
                                className='border-orange border-2 rounded-full'>
                                <p className='text-orange text-md sm:text-lg md:text-xl lg:text-2xl p-2 px-4 font-semibold'>Full-stack projects</p>
                            </div>
                            <div
                                data-aos="fade-up-left"
                                data-aos-duration="1500"
                                className='flex flex-col justify-between py-6 pt-10 md:px-5'>
                                {fullstackProjects.slice(0, 3).map((project, index) => (
                                    <Suspense key={index} fallback={<div>Loading...</div>}>
                                        <ProjectCard {...project} />
                                    </Suspense>
                                ))}
                            </div>
                        </div>
                    </div>
                </div> */}


                <hr className='bg-darkGreen h-0.5 mb-2' />
                <div className='w-[80%] md:w-[75%] m-auto pb-24 pt-12 px-5'>
                    <div className='pb-8 pt-3'>
                        <h2 className='text-center py-4 text-3xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-textGreen'>Find <span className='text-orange'>me</span> on</h2>
                    </div>

                    {/* Social cards */}
                    <div className='flex flex-col justify-between md:flex-row gap-7'>
                        {socialCards.slice(0, 4).map((card, index) => ( // Add index as the second argument
                            <SocialCard key={index} {...card} /> // Add key prop
                        ))}
                    </div>
                </div>
            </div>

            <div
                id='contact'
                data-aos="fade-up"
                data-aos-duration="1000">
                <ContactSection />
                <Footer />
            </div>
        </div>
    )
}
