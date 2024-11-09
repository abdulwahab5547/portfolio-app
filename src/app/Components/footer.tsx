

function Footer(){
    return(
        <div className="footer bg-darkGreen text-white">
            <div className="flex justify-between items-start px-10 py-10 pt-10 flex-col md:flex-row">
                <div className="py-4">
                   <p className=""><span className="text-xl sm:text-2xl md:text-3xl font-bold">AW. </span><span className="text-orange text-xl sm:text-2xl md:text-3xl">|</span> <span className="text-md sm:text-xl md:text-2xl pb-2 font-bold">Abdul Wahab</span></p>
                </div>
                <div className="py-4">
                    <ul className="nav-icons flex flex-col md:flex-row gap-5">
                        <li className="hover:text-orange"><a href="/#home">Home</a></li>
                        <li className="hover:text-orange"><a href="/#about">About</a></li>
                        <li className="hover:text-orange"><a href="/#portfolio">Portfolio</a></li>
                        <li className="hover:text-orange"><a href="/#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div className="px-10 pb-8">
                <hr/>
            </div>
            <div className="px-10 pb-5 flex justify-between items-start flex-col md:flex-row md:items-center">
                <div className="py-3">
                    <p>©2024 - Abdul Wahab. All rights reserved. </p>
                </div>
                <div className="py-3">
                    <ul className="footer-icons flex gap-10 text-xl md:text-2xl">
                        <a href="https://www.linkedin.com/in/aw-asif/"><li className="cursor-pointer"><i className="fa-brands fa-linkedin"></i></li></a>
                        <a href="https://www.instagram.com/abdul.develops/"><li className="cursor-pointer"><i className="fa-brands fa-instagram"></i></li></a>
                        <a href="https://github.com/abdulwahab5547"><li className="cursor-pointer"><i className="fa-brands fa-github"></i></li></a>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer; 