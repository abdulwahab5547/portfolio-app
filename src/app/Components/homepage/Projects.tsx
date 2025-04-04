import Image from "next/image";
import TournamentApp from "@/assets/tournament/1.jpg"
import TournamentAppTwo from "@/assets/tournament/2.jpg"
import WebScraper from "@/assets/scraper/web-scraper.jpg"
import MaleehaPortfolio from "@/assets/maleeha-portfolio/maleeha-portfolio.webp"
import Button from "../common/Button";
import Buzz from "@/assets/buzz//buzz-one.webp"
import BuzzTwo from "@/assets/buzz/buzz-two.webp"
import BuzzThree from "@/assets/buzz/buzz-three.webp"


export default function Projects() {
    return (
        <div className='flex flex-col gap-5 py-10 px-5 md:px-5'>
            <div className='flex md:flex-row flex-col gap-5'>
                <div className='md:w-2/5 w-full bg-greenInput rounded-3xl border-2 border-cardBorder flex flex-col'>
                    {/* Image on top */}
                    <div className='w-full h-[250px]'>
                        <Image src={WebScraper} alt="tournament" className="w-full h-full object-cover rounded-t-3xl" />
                    </div>

                    {/* Text content below */}
                    <div className="md:p-6 p-4 flex-1">
                        <h3 className="md:text-3xl text-xl font-bold">E-Commerce Web Scraper</h3>
                        <div className="pt-2">
                            <p className="font-bold">Built With: <span className="font-normal">Puppeteer JS</span></p>
                            <p className="py-2">What It Is: <span>{"It's a web scraper that scraps all data from an E-commerce website, stores that in database, and sends that to an API. "}</span></p>
                            <ul className="py-3 pb-5">
                                <li className="before:content-['→'] before:mr-2">Scraps all categories, subcategories, product pages, product data, and so on.</li>
                            </ul>
                            <Button text="View Project" URL="/" />
                        </div>
                    </div>
                </div>

                <div className='md:w-3/5 w-full bg-greenInput rounded-3xl border-2 border-cardBorder flex flex-wrap md:flex-row flex-col-reverse'>

                    {/* Text Part */}
                    <div className='md:w-1/2'>
                        <div className="md:p-6 p-4">
                            <h3 className="md:text-3xl text-xl font-bold">Tournament Web App</h3>
                            <div className="pt-2">
                                <p className="font-bold">Built With: <span className="font-normal">MERN Stack</span></p>
                                <p className="py-3">What It Is: <span>{"It's a tournament management app that lets you create and organize tournaments with ease. "}</span></p>
                                <ul className="space-y-3 pb-4">
                                    <li className="before:content-['→'] before:mr-2">
                                        Separate interfaces and permissions for managers, operators, and players.
                                    </li>
                                    <li className="before:content-['→'] before:mr-2">
                                        Managers can create and end tournaments.
                                    </li>
                                    <li className="before:content-['→'] before:mr-2 ">
                                        Operators can manage teams, players, and enter scores.
                                    </li>
                                    <li className="before:content-['→'] before:mr-2">
                                        Team leaders can create teams and add players.
                                    </li>
                                </ul>
                                <Button text="View Project" URL="/projects/tournament-app" />
                            </div>

                        </div>
                    </div>

                    {/* Images */}
                    <div className='md:w-1/2 flex flex-col gap-4 justify-center'>
                        <Image src={TournamentApp} alt="tournament" className="md:rounded-3xl rounded-t-3xl md:h-auto h-[250px] w-full object-cover" />
                        <Image src={TournamentAppTwo} alt="tournament" className="rounded-3xl hidden md:inline-block" />
                    </div>
                </div>
            </div>

            <div className='flex md:flex-row-reverse flex-col-reverse gap-5'>
                <div className='md:w-2/5 w-full bg-greenInput rounded-3xl border-2 border-cardBorder flex flex-col'>
                    {/* Image on top */}
                    <div className='w-full h-[250px]'>
                        <Image src={MaleehaPortfolio} alt="tournament" className="w-full h-full object-cover rounded-t-3xl" />
                    </div>

                    {/* Text content below */}
                    <div className="md:p-6 p-4 flex-1">
                        <h3 className="md:text-3xl text-xl font-bold">Portfolio Website</h3>
                        <div className="pt-2">
                            <p className="font-bold">Built With: <span className="font-normal">WordPress & Custom Code</span></p>
                            <p className="py-2">What It Is: <span>{"It's a portfolio website I made for my client with WordPress. I also used custom code for some sections like slider and accordion."}</span></p>
                            <ul className="pt-2 pb-3">
                                <li className="before:content-['→'] before:mr-2">{"Showcases my client's work, services, and testimonials."}</li>
                            </ul>
                            <Button text="View Project" URL="https://maleehalovestobuild.com/" />
                        </div>
                    </div>
                </div>

                <div className='md:w-3/5 w-full bg-greenInput rounded-3xl border-2 border-cardBorder flex flex-wrap md:flex-row flex-col-reverse'>

                    {/* Text Part */}
                    <div className='md:w-1/2'>
                        <div className="md:p-6 p-4">
                            <h3 className="md:text-3xl text-xl font-bold">Buzz Social Media App</h3>
                            <div className="pt-2">
                                <p className="font-bold">Built With: <span className="font-normal">MERN Stack</span></p>
                                <p className="py-3">What It Is: <span>{"It's a social media platform I made. Like all other platforms, it lets you create posts, engage with other users, and so on."}</span></p>
                                <ul className="space-y-3 pb-4">
                                    <li className="before:content-['→'] before:mr-2">
                                        {"Create posts, like others' posts, and add comments."}
                                    </li>
                                    <li className="before:content-['→'] before:mr-2">
                                        Post reels
                                    </li>
                                    <li className="before:content-['→'] before:mr-2 ">
                                        Send friend requests and chat with others
                                    </li>
                                    <li className="before:content-['→'] before:mr-2">
                                        Edit your profile information like username and bio.
                                    </li>
                                </ul>
                                <Button text="View Project" URL="https://buzz-theta.vercel.app/" />
                            </div>

                        </div>
                    </div>

                    {/* Images */}
                    <div className='md:w-1/2 flex flex-col gap-4 justify-center'>
                        <Image src={Buzz} alt="tournament" className="md:rounded-3xl rounded-t-3xl md:h-auto h-[250px] w-full object-cover" />
                        <Image src={BuzzTwo} alt="tournament" className="rounded-3xl hidden md:inline-block" />
                        <Image src={BuzzThree} alt="tournament" className="rounded-3xl hidden md:inline-block" />
                    </div>
                </div>
            </div>
        </div>
    )
}