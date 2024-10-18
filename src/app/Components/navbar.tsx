import { useState } from 'react';

interface NavbarProps {
  activeLink: string;
}

export default function Navbar({ activeLink }: NavbarProps){
    const [isPhoneNavVisible, setIsPhoneNavVisible] = useState(false);
    const togglePhoneNav = () => {
        setIsPhoneNavVisible(!isPhoneNavVisible);
    };
    const hidePhoneNav = () => {
        setIsPhoneNavVisible(false);
    }
    
    return(
        <div className="relative">
            <div className="navbar bg-darkGreen">
                        <div className="nav-inner flex items-center px-8 py-4 text-white">
                            <div className="w-[33%] site-icon-div">
                            <p>
                                <a href="#home">
                                        <span className="text-2xl font-bold pr-1">Aw. </span>
                                        <span className="text-xl text-orange">|</span>
                                        <span className="pl-1 font-bold"> Abdul Wahab.</span>
                                    </a>
                            </p>
                            </div>
                            <div className="w-[34%] flex justify-center nav-icons-div">
                                <ul className="nav-icons flex gap-5">
                                    <li className={`hover:text-orange ${activeLink === 'home' ? 'text-orange' : ''}`}><a href="#home">Home</a></li>
                                    <li className={`hover:text-orange ${activeLink === 'about' ? 'text-orange' : ''}`}><a href="#about">About</a></li>
                                    <li className={`hover:text-orange ${activeLink === 'portfolio' ? 'text-orange' : ''}`}><a href="#portfolio">Portfolio</a></li>
                                    <li className={`hover:text-orange ${activeLink === 'contact' ? 'text-orange' : ''}`}><a href="#contact">Contact</a></li>
                                </ul>
                            </div>
                            <div className="nav-buttons flex gap-5 w-[%33] ml-auto nav-buttons-div">
                                
                                <button className="bg-orange hover:opacity-80 font-semibold px-5 py-3 rounded-full"><a href="#contact">Contact Me<span className="pl-3"><i className="fa-solid fa-arrow-right"></i></span></a></button>
                                <button className="bg-lightGreen hover:opacity-80 font-semibold px-5 py-3 rounded-full"><a href="#portfolio">See My Work<span className="pl-3"><i className="fa-solid fa-arrow-right"></i></span></a></button>
                            </div>

                            <div onClick={togglePhoneNav} className="bars-icon border-2 border-gray-500 px-3 rounded-lg">
                                <i className="fa-solid fa-bars py-1"></i>
                            </div>
                        </div>

                        
                    </div>
            <hr/>

            {isPhoneNavVisible && (
            <div className="absolute z-50 h-screen w-[100%] bottom-[-10] bg-darkGreen text-white px-4 flex flex-col items-center pt-10 pb-5">
                <div className="">
                    <ul className="nav-icons flex gap-5 flex-col text-center text-lg">
                        <li onClick={hidePhoneNav} className={`hover:text-orange ${activeLink === 'home' ? 'text-orange' : ''} py-1`}><a href="#home">Home</a></li>
                        <li onClick={hidePhoneNav} className={`hover:text-orange ${activeLink === 'about' ? 'text-orange' : ''} py-1`}><a href="#about">About</a></li>
                        <li onClick={hidePhoneNav} className={`hover:text-orange ${activeLink === 'portfolio' ? 'text-orange' : ''} py-1`}><a href="#portfolio">Portfolio</a></li>
                        <li onClick={hidePhoneNav} className={`hover:text-orange ${activeLink === 'contact' ? 'text-orange' : ''} py-1`}><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="flex flex-col pt-3 items-center">          
                    <button onClick={hidePhoneNav} className="bg-orange my-3 w-fit hover:opacity-80 font-semibold px-5 py-3 rounded-full"><a href="#contact">Contact Me<span className="pl-3"><i className="fa-solid fa-arrow-right"></i></span></a></button>
                    <button onClick={hidePhoneNav} className="bg-lightGreen my-3 w-fit hover:opacity-80 font-semibold px-5 py-3 rounded-full"><a href="#portfolio">See My Work<span className="pl-3"><i className="fa-solid fa-arrow-right"></i></span></a></button>
                </div>
                <div className="py-3 pt-5">
                    <ul className="footer-icons flex gap-10 text-xl md:text-2xl">
                        <a href="https://www.linkedin.com/in/aw-asif/"><li className="cursor-pointer"><i className="fa-brands fa-linkedin"></i></li></a>
                        <a href="https://www.instagram.com/abdul.develops/"><li className="cursor-pointer"><i className="fa-brands fa-instagram"></i></li></a>
                        <a href="https://github.com/abdulwahab5547"><li className="cursor-pointer"><i className="fa-brands fa-github"></i></li></a>
                    </ul>
                </div>
            </div>
            )}
        </div>
    )
}