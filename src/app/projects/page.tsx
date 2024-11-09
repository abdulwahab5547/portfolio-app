"use client"

import Footer from "../Components/footer";
import Navbar from "../Components/navbar";
import Image from 'next/image'
import Ending from '@/assets/ending.png'
import Projects from '@/app/Components/projects'

function ProjectsPage(){
    return(
        <div>
            <div className="sticky top-0 z-50">
                <Navbar activeLink="project"/>
            </div>
            <div className="bg-darkGreen text-white pb-5">
                
                
                
                <div className="max-w-[95%] m-auto py-32 text-center">
                    
                    <p className="md:text-xl text-lg py-2 text-orange font-bold">My work</p>
                    <h1 className="md:text-6xl text-4xl font-bold py-3">Projects</h1>
                    {/* <div className='max-w-[600px] m-auto'>
                        <p className="py-2 text-xl text-gray-400">A tournament management app that lets you create tournaments, organize them, and manage different roles like managers, operators, and players with ease. </p>
                    </div> */}

                    {/* <div className="flex gap-3 pt-5 justify-center">
                        <button className="bg-orange hover:opacity-80 font-semibold px-5 py-3 rounded-full"><a href="https://github.com/abdulwahab5547">My GitHub<span className="pl-3"><i className="fa-solid fa-arrow-right"></i></span></a></button>
                    </div> */}
                </div>
            </div>
            <Image className='' src={Ending} alt=''/>

            <div className="py-5">
                <Projects/>
            </div>
            <Footer/>
        </div>
    )
}

export default ProjectsPage; 