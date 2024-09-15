"use client";

import Navbar from './navbar'
import Footer from './footer'
import SocialCard from './socialcard'
import ContactSection from './contact'
import Image from 'next/image';

import Ending from '../../assets/ending.png'
import Tech from '../../assets/tech.jpg'
import ProjectCard from './projectcard'

// Images
import Buzz from '../../assets/buzz.jpg'
import Receiptify from '../../assets/receiptify.jpg'
import LaptopZone from '../../assets/laptopzone.jpg'
import Expense from '../../assets/expense-tracker.jpg'
import Todo from '../../assets/todo.jpg'
import Flux from '../../assets/flux.jpg'
import Me from '../../assets/my.jpeg'
import Profile from '../../assets/profile.jpeg'
import Coma from '../../assets/coma.png'
import LinkedIn from '../../assets/linkedin.webp'
import Instagram from '../../assets/instagram.webp'
import X from '../../assets/x.webp'
import GitHub from '../../assets/github.png'

import {LayoutGridDemo} from './layoutdemo';


export default function Homepage(){
    const frontendProjects = [
        {
          title: 'Expense tracker',
          features: ['Add and track expenses', 'Screenshot your expense sheet', 'View top expenses'],
          liveLink: 'https://abdulwahab5547.github.io/expense-tracker/',
          githubLink: 'https://github.com/abdulwahab5547/expense-tracker',
          youtubeLink: 'https://www.youtube.com/watch?v=C9g_ikS8l_4',
          image: Expense,
        },
        {
          title: 'Laptop zone',
          features: ['E-commerce website', 'Add items to cart', 'Manage cart'],
          liveLink: 'https://abdulwahab5547.github.io/laptop-zone/',
          githubLink: 'https://github.com/abdulwahab5547/laptop-zone',
          youtubeLink: 'https://abdulwahab5547.github.io/laptop-zone/',
          image: LaptopZone,  
        },
        {
            title: 'To-Do list app',
            features: ['Add new tasks', "Check off tasks when done", "Delete tasks as needed"],
            liveLink: 'https://abdulwahab5547.github.io/to-do/',
            githubLink: 'https://github.com/abdulwahab5547/to-do',
            youtubeLink: 'https://abdulwahab5547.github.io/to-do/',
            image: Todo,  
        },
    ];
    const fullstackProjects = [
        {
            title: 'Buzz',
            features: ["See others' posts", 'Create posts, reels, and more', 'Text other users'],
            liveLink: 'https://buzz-theta.vercel.app/',
            githubLink: 'https://github.com/abdulwahab5547/buzz',
            youtubeLink: 'https://www.youtube.com/watch?v=mynmWzcjg_8',
            image: Buzz,  
        },
        {
          title: 'Receiptify',
          features: ['Create customizable receipts', 'Download and email receipts', 'View receipt history'],
          liveLink: 'https://receiptify-app-wine.vercel.app/',
          githubLink: 'https://github.com/abdulwahab5547/receiptify-app',
          youtubeLink: 'https://www.youtube.com/watch?v=jTMGR012c6M',
          image: Receiptify,
        },
        {
            title: 'Flux',
            features: ["Track current & upcoming tasks", 'Create pages & add content', '3 different task views'],
            liveLink: 'https://flux-frontend-alpha.vercel.app/',
            githubLink: 'https://github.com/abdulwahab5547/flux',
            youtubeLink: 'https://www.youtube.com/watch?v=DDYiXpnJXX0&t=92s',
            image: Flux,  
        },
    ];
    const socialCards = [
        {
            title: 'LinkedIn',
            link: 'https://www.linkedin.com/in/aw-asif/',
            image: LinkedIn,  
        },
        {
            title: 'Instagram',
            link: 'https://www.instagram.com/abduldevelops',
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


    return(
        <div id="home" className="homepage">
            <div 
                data-aos="fade-down"
                data-aos-duration="1000">
                <Navbar/>           
            </div>
            <div 
            data-aos="fade-up"
            data-aos-duration="1000"
            className='main-part bg-darkGreen  text-white'>

                <div className='pt-10 text-center relative'>

                    <div className="text-wrapper absolute top-3 overflow-hidden whitespace-nowrap w-full hidden lg:flex items-center">
                        <span className="flowing-text select-none uppercase text-9xl opacity-5 font-extrabold ">
                            Abdul Wahab Abdul Wahab Abdul Wahab Abdul Wahab Abdul Wahab
                        </span>
                    </div>
                    <div className='px-5'>
                        <h1 className='py-4 text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold no-select'>Tailored web solutions.<br/> To grow <span className='text-orange'>your</span> brand</h1>
                        <p className='py-4 text-md sm:text-xl md:text-2xl lg:text-2xl   text-gray-400'>Boost your brand’s online presence with custom <br/> web solutions that deliver measurable results.</p>
                        <div className='py-4'
                        data-aos="zoom-in"
                        data-aos-duration="1500"
                        >
                            <button className='bg-orange hover:opacity-80 px-3 sm:px-4 md:px-6 lg:px-9 py-2 sm:py-3 md:py-4 lg:py-5 text-md sm:text-xl md:text-xl lg:text-xl rounded-full font-bold'><a href='#contact'>Grow With Me</a></button>
                        </div>
                    </div>
                    
                </div>

                <div className='py-4 pt-8'>
                    <div className='relative'>
                        {/* <div className="rounded-3xl absolute inset-0 dot-pattern z-0 w-[38%] h-auto m-auto"></div> */}
                        <div className='flex justify-center relative z-10 py-4 px-8'>
                            <Image className='rounded-3xl' src={Me} width={490} alt=''/>
                        </div>
                    </div>
                    
                    
                </div>

                <div className='py-6 pt-10' data-aos="fade-down"
                data-aos-duration="1500">
                    <div className='text-center'>
                        <p className='text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold'>Expert in <span className='text-orange'>MERN</span> stack</p>
                        <div className='flex justify-center'>
                            <Image className='' src={Tech} width={750} alt=''/>
                        </div>
                    </div>
                    
                </div>
                
            </div>
            <Image className='' src={Ending} alt=''/>

            <div id="about" className='about-me py-6 pb-4 md:pb-12'>
                <div className='text-center'>
                    <h2 className='py-4 text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-textGreen'>I&apos;m Abdul Wahab</h2>
                    <div className='flex gap-3 md:gap-6 justify-center pt-2 px-2'>
                        <div 
                        data-aos="fade-right"
                        data-aos-duration="1500"
                        className='border-textGreen border-2 rounded-full'>
                            <p className='text-textGreen text-md sm:text-lg md:text-xl lg:text-2xl py-2 px-2 md:p-2 md:px-4 font-semibold'>Web Developer</p>
                        </div>
                        <div 
                        data-aos="fade-left"
                        data-aos-duration="1500"
                        className='border-orange border-2 rounded-full'>
                            <p className='text-orange py-2 px-2 md:p-2 md:px-4 text-md sm:text-lg md:text-xl lg:text-2xl font-semibold'>Tech Enthusiast</p>
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
                                    <Image src={Coma} alt='' width={70}/>
                                </div>
                            
                                <div className=''>
                                    <p className='text-md sm:text-lg md:text-xl lg:text-2xl'>
                                        Hi! I&apos;m a MERN stack developer passionate about building efficient and clean web applications. My coding journey began with HTML in college, and now I&apos;ve mastered the MERN stack.
                                    </p>
                                    <p className='text-md sm:text-lg md:text-xl lg:text-2xl pt-4'>
                                        With skills in HTML, CSS, JavaScript, React, Node.js, and MongoDB, I can&apos;t wait to bring your ideas to life. Let&apos;s build something amazing together!
                                    </p>
                                    <div className='pt-7'>
                                        <button className='bg-orange hover:opacity-80 text-white px-3 sm:px-4 md:px-6 lg:px-9 py-2 sm:py-3 md:py-4 lg:py-5 text-md sm:text-xl md:text-xl lg:text-xl rounded-full font-bold'>
                                            <a href='#contact'>Contact Me<span className="pl-3"><i className="fa-solid fa-arrow-right"></i></span></a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div 
                        data-aos="fade-left"
                        data-aos-duration="1500"
                        className='w-full md:w-1/3 pb-6'>
                        <Image className='rounded-3xl' src={Profile} alt=''/>
                    </div>
                </div>



            </div>

            <hr className='bg-darkGreen h-0.5'/>

            <div className='flex flex-col md:flex-row px-4 py-10 md:py-20 justify-between w-[75%] m-auto text-textGreen text-center'>
                <div 
                data-aos="zoom-in"
                data-aos-duration="1500"
                className='py-3'>
                    <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl md:font-bold'><span className='text-xl sm:text-3xl md:text-5xl lg:text-7xl font-bold'>20+ </span><br/>projects <br/>completed</p>
                </div>
                <div 
                data-aos="zoom-in"
                data-aos-duration="1500"
                className='py-3'>
                    <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl md:font-bold'><span className='text-xl sm:text-3xl md:text-5xl lg:text-7xl font-bold'>8+ </span><br/>satisfied <br/>customers</p>
                </div>
                
                <div 
                data-aos="zoom-in"
                data-aos-duration="1500"
                className='py-3'>
                    <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl md:font-bold'><span className='text-xl sm:text-3xl md:text-5xl lg:text-7xl font-bold'>1+ </span><br/>years of <br/>experience</p>
                </div>
            </div>

            <hr className='bg-darkGreen h-0.5 mb-2'/>


            <Image className='rotate-180' src={Ending} alt=''/>
            <div id="portfolio" className='projects bg-darkGreen text-white py-6'>
                <div className='pt-12 pb-4'>
                    <p className='text-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold'>My <span className='text-orange'>Web dev</span> projects</p>
                </div>
                <div className='w-[75%] m-auto'>
                    <LayoutGridDemo/>
                </div> 
                
            </div>
            <Image className='' src={Ending} alt=''/>

            <div className='pb-8 pt-16 w-[80%] md:w-[75%] m-auto'>

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
                                <ProjectCard key={index} {...project} />
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
                                <ProjectCard key={index} {...project} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            
            <hr className='bg-darkGreen h-0.5 mb-2'/>

            <div className='w-[80%] md:w-[75%] m-auto pb-16 pt-6 px-5'>
                <div className='pb-8 pt-3'>
                    <h2 className='text-center py-4 text-3xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-textGreen'>Find <span className='text-orange'>me</span> on</h2>
                </div>
                
                <div className='flex flex-col justify-between md:flex-row gap-7'>
                    {socialCards.slice(0, 4).map((card, index) => (
                        <SocialCard key={index} {...card} />
                    ))}
                </div>
            </div>

            <div 
            data-aos="fade-up"
            data-aos-duration="1000">
                <ContactSection/>
                <Footer/>
            </div>  
        </div>
    )
}