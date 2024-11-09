"use client"

import Ending from '@/assets/ending.png'
import Image from 'next/image'
import CheckItOff from '@/assets/checkitoff.jpg'
import One from '@/assets/tournament/1.jpg'
import Two from '@/assets/tournament/2.jpg'
import Three from '@/assets/tournament/3.jpg'
import Four from '@/assets/tournament/4.jpg'
import Five from '@/assets/tournament/5.jpg'
import Six from '@/assets/tournament/6.jpg'
import Nine from '@/assets/tournament/9.jpg'
import Fourteen from '@/assets/tournament/14.jpg'
import Seventeen from '@/assets/tournament/17.jpg'
import Eighteen from '@/assets/tournament/18.jpg'
import Footer from '@/app/Components/footer'

import React, { useState } from 'react';

function Project(){
    const [isOpen, setIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleImageClick = (imageSrc: string) => {
        setSelectedImage(imageSrc);
        setIsOpen(true);
      };
    
      const closeOverlay = () => {
        setSelectedImage(null);
        setIsOpen(false);
      };

    return(
        <div>
            <div className="bg-darkGreen text-white py-5">
                <div className='flex justify-between max-w-[95%] m-auto items-center'>
                    <div className="site-icon-div">
                        <p>
                            <a href="/">
                                <span className="text-2xl font-bold pr-1">Aw. </span>
                                <span className="text-xl text-orange">|</span>
                                <span className="pl-1 font-bold"> Abdul Wahab.</span>
                            </a>
                        </p>
                    </div>
                    <div className="py-3">
                        <ul className="footer-icons flex gap-5 text-xl md:text-2xl">
                            <a href="https://www.linkedin.com/in/aw-asif/"><li className="cursor-pointer"><i className="fa-brands fa-linkedin"></i></li></a>
                            <a href="https://www.instagram.com/abdul.develops/"><li className="cursor-pointer"><i className="fa-brands fa-instagram"></i></li></a>
                            <a href="https://github.com/abdulwahab5547"><li className="cursor-pointer"><i className="fa-brands fa-github"></i></li></a>
                        </ul>
                    </div>
                </div>
                
                <div className="max-w-[95%] m-auto py-32">
                    
                    <p className="md:text-xl text-lg py-2 text-orange font-bold">Project</p>
                    <h1 className="md:text-6xl text-4xl font-bold py-3">Tournament App</h1>
                    <div className='max-w-[800px]'>
                        <p className="py-2 text-xl text-gray-400">A tournament management app that lets you create tournaments, organize them, and manage different roles like managers, operators, and players with ease. </p>
                    </div>

                    <div className="flex gap-3 pt-5">
                        <button className="bg-orange hover:opacity-80 font-semibold px-5 py-3 rounded-full"><a href="#contact">GitHub<span className="pl-3"><i className="fa-solid fa-arrow-right"></i></span></a></button>
                        {/* <button className="bg-lightGreen hover:opacity-80 font-semibold px-5 py-3 rounded-full"><a href="#portfolio">View Live<span className="pl-3"><i className="fa-solid fa-arrow-right"></i></span></a></button> */}
                    </div>
                </div>
            </div>
            <Image className='' src={Ending} alt=''/>

            <div className='max-w-[95%] m-auto py-5'>
                <div className='py-3'>
                    <h2 className='font-bold md:text-4xl text-3xl'>Problems solved</h2>
                    <div className='max-w-[950px] pl-5 py-3'>
                        <ul className="list-disc text-lg">
                            <li>Difficulties in creating different screens for various roles (operators, managers, players)</li>
                            <li>Challenges in testing the entire workflow of the project</li>
                            <li>Ensuring the security of project routes</li>
                            <li>Managing the display screen for different devices</li>
                            <li>Ensuring seamless functionality of the app</li>
                        </ul>
                    </div>
                </div>

                <div className='py-3'>
                    <h2 className='font-bold md:text-4xl text-3xl'>Challenges I ran into</h2>
                    <div className='max-w-[950px] pl-5 py-3'>
                        <ul className="list-disc text-lg">
                            <li>Difficulties in creating different screens for various roles (operators, managers, players)</li>
                            <li>Challenges in testing the entire workflow of the project</li>
                            <li>Ensuring the security of project routes</li>
                            <li>Managing the display screen for different devices</li>
                            <li>Ensuring seamless functionality of the app</li>
                        </ul>
                    </div>
                </div>

                <div className='py-3'>
                    <h2 className='font-bold md:text-4xl text-3xl'>Things I learned</h2>
                    <div className='max-w-[950px] pl-5 py-3'>
                        <ul className="list-disc text-lg">
                            <li>Difficulties in creating different screens for various roles (operators, managers, players)</li>
                            <li>Challenges in testing the entire workflow of the project</li>
                            <li>Ensuring the security of project routes</li>
                            <li>Managing the display screen for different devices</li>
                            <li>Ensuring seamless functionality of the app</li>
                        </ul>
                    </div>
                </div>

                <div className='py-3'>
                    <h2 className='font-bold md:text-4xl text-3xl'>Stack</h2>
                    <div className='max-w-[950px] pl-5 py-3'>
                        <ul className="list-disc text-lg">
                            <li>NextJS (frontend)</li>
                            <li>ExpressJS & NodeJS (backend)</li>
                            <li>MongoDB & Mongoose (database)</li>
                        </ul>
                    </div>
                </div>
                
                <div className='py-3'>
                    <h2 className='font-bold md:text-4xl text-3xl'>Gallery</h2>
                    <div className='max-w-[950px] py-3'>
                        <div className='flex flex-wrap'>
                        {[One, Two, Three, Four, Five, Six, Nine, Fourteen, Seventeen, Eighteen].map((image, index) => (
                            <div key={index} className='md:w-1/2 p-2'>
                            <Image
                                src={image}
                                alt={`image ${index + 1}`}
                                className='img-fluid hover:scale-105 transition-transform duration-500 cursor-pointer'
                                onClick={() => handleImageClick(image.src)}
                            />
                            </div>
                        ))}
                        </div>
                    </div>
                </div>

            </div>

            {isOpen && selectedImage && (
                <div
                    className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm'
                    onClick={closeOverlay}
                >
                    <div className='relative max-w-[95%] m-auto'>
                        <Image
                        src={selectedImage}
                        alt='Selected image'
                        width={800}
                        height={600}
                        className='rounded my'
                        onClick={(e) => e.stopPropagation()} 
                        />
                        <button
                        onClick={closeOverlay}
                        className='absolute top-3 right-3 bg-white text-black rounded-full w-8 h-8 text-xl font-bold'
                        >
                        ×
                        </button>
                    </div>
                </div>
            )}
            <Footer/>
        </div>
    )
}

export default Project; 