import { Suspense } from "react";
import ProjectCard from "./projectcard";

import Buzz from '../../assets/buzz.jpg'
import Receiptify from '../../assets/receiptify.jpg'
import LaptopZone from '../../assets/laptopzone.jpg'
import Expense from '../../assets/expense-tracker.jpg'
import Todo from '../../assets/todo.jpg'
import CheckItOff from '../../assets/checkitoff.jpg'

function Projects(){
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
            title: 'CheckItOff',
            features: ["Track current & upcoming tasks", 'Options for adding goals and notes', 'Clean & simple UI', 'Pomodoro timer'],
            liveLink: 'https://checkitoff-frontend-v2.vercel.app/',
            githubLink: 'https://github.com/abdulwahab5547/checkitoff-v1',
            youtubeLink: 'https://checkitoff-frontend-v2.vercel.app/',
            image: CheckItOff,  
        },
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
    ];
    return(
        <div>
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
                </div>
        </div>
    )
}

export default Projects; 