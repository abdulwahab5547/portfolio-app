import emailjs from 'emailjs-com';
import { Toaster, toast } from 'react-hot-toast';

function ContactSection() {

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm('service_wkxin9y', 'template_74gnliu', e.target as HTMLFormElement, '1dBXuEBzWQZzPGRaP')
      .then((result) => {
        console.log(result.text);
        toast.success('Email sent!');
      }, (error) => {
        console.log(error.text);
        toast.error('Error sending email.');
      });

    e.currentTarget.reset();  // Reset form after submission
  };

  return (
    <div id="contact" className="contact-section bg-darkGreen text-white pb-4 pt-16">
      <Toaster />
      <div className="flex flex-col items-center text-center px-5">
        <h1 className='py-4 text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold'>
          Ready to <span className="text-orange">level up</span> <br /> your business?
        </h1>
        <p className='py-4 text-md sm:text-xl md:text-2xl lg:text-2xl text-gray-400'>
          If you have a query, or a project to discuss, feel free to leave <br />
          a message below and I&apos;ll get back to you soon.
        </p>

        <form onSubmit={sendEmail}>
          <div className="py-3">
            <input 
              className='bg-greenInput message-input mx-2 py-3 md:py-6 px-3 md:px-5 w-50 md:w-96 rounded-full my-2' 
              type='email' 
              name="user_email" 
              placeholder='Enter your email address' 
              required 
            />
            <br />
            <input 
              className='bg-greenInput message-input mx-2 py-3 md:py-6 px-3 md:px-5 w-50 md:w-96 rounded-full my-2' 
              type='text' 
              name="subject" 
              placeholder='Enter subject...' 
              required 
            />
            <br />
            <textarea 
              className='bg-greenInput message-textarea mx-2 py-3 md:py-6 px-3 md:px-5 w-50 md:w-96 rounded-full h-18 md:h-24 my-2' 
              name="message" 
              placeholder='Enter your message...' 
              required 
            />
          </div>

          <div className='py-4' data-aos="zoom-in" data-aos-duration="1500">
            <button 
              type="submit" 
              className='bg-orange hover:opacity-80 px-3 sm:px-4 md:px-6 lg:px-9 py-2 sm:py-3 md:py-4 lg:py-5 text-md sm:text-xl md:text-xl lg:text-xl rounded-full font-bold'
            >
              Send <span className="pl-3"><i className="fa-solid fa-arrow-right"></i></span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactSection;