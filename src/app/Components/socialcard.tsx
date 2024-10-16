import Image from 'next/image'
import { StaticImageData } from 'next/image';

interface SocialCardProps {
    title: string;
    link: string; 
    image: StaticImageData;
  }

  const SocialCard: React.FC<SocialCardProps> = ({ title, link, image }) => {
    return(
        <div className="bg-white rounded-3xl px-2 md:px-6 py-3 md:py-6 b-shadow w-[100%] flex flex-col items-center md:items-start">
            <div className='w-12 md:w-16 '>
                <Image src={image} alt=''/>
            </div>
            
            <p className='py-3 font-semibold text-md sm:text-lg md:text-xl'>{title}</p>
            <button className='text-orange font-bold text-left'><a href={link}>View<span className="pl-2"><i className="fa-solid fa-arrow-right"></i></span></a></button>
        </div>
    )
}

export default SocialCard; 