import Image from 'next/image';
import { StaticImageData } from 'next/image';

interface ProjectCardProps {
  title: string;
  features: string[];
  liveLink: string;
  githubLink: string;
  youtubeLink: string;
  image: StaticImageData;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, features, liveLink, githubLink, youtubeLink, image }) => {
  return (
    <div className='py-4'>
      <div className='bg-white px-4 md:px-7 py-6 rounded-3xl b-shadow'>

      
        <div className='flex gap-6 items-center flex-col'>

          <div className='w-[100%]'>
            <Image className='rounded-xl' src={image} alt={title} />
          </div>

          <div className='w-[100%]'>
              <p className='text-xl font-bold text-textGreen'>{title}</p>
            <div>
              <ul className='pt-2 text-md'>
                {features.map((feature, index) => (
                  <li key={index}>
                    <span className='text-orange pl-1 pr-3'>
                      <i className='fa-solid fa-arrow-right'></i>
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className='flex gap-6 pt-3 text-md'>
              <button><a href={liveLink} target="_blank" rel="noopener noreferrer"><span className='pr-2 text-textGreen'><i className='fa-solid fa-square-arrow-up-right'></i></span>Live</a></button>
              <button><a href={githubLink} target="_blank" rel="noopener noreferrer"><span className='text-textGreen'><i className='fa-brands fa-github'></i></span></a></button>
              <button><a href={youtubeLink} target="_blank" rel="noopener noreferrer"><span className='text-orange'><i className='fa-brands fa-youtube'></i></span></a></button>
            </div>
          </div>
        </div>
        <div className='flex justify-center text-white pt-6'>
          <button className='bg-orange hover:opacity-80 px-6 py-2 sm:py-3 md:py-3 lg:py-3 text-md rounded-full font-bold'><a href={liveLink}>View live</a></button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
