import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from "../Component/Navbar";

export const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="w-[99.999vw] h-auto lg:h-[91vh] flex flex-col lg:flex-row bg-black/45">
        
        {/* Left Side - Contact Information */}
        <div className="w-full lg:w-1/2 h-full flex flex-col justify-center items-start p-8 lg:p-16 gap-8">
          {/* Header */}
          <div className="w-full h-10 flex justify-start items-center font-bold text-2xl lg:text-3xl text-blue-700">
            <p>Contact Us</p>
          </div>

          {/* Main Message */}
          <div className="w-full h-auto flex justify-start items-start text-left font-bold text-3xl lg:text-5xl text-white leading-tight">
            <p>Get in touch today</p>
          </div>
          <div className="w-full h-auto flex justify-start items-start text-left font-bold text-lg lg:text-xl text-white leading-tight">
            <p>We love questions and feedback - we're always happy to help! Here are some ways to contact us.</p>
          </div>

          {/* Address Section */}
          <div className="w-full flex items-center text-left font-bold text-lg lg:text-xl text-white leading-tight rounded-lg p-3 gap-3">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-500 text-xl lg:text-2xl" />
            <div>
              <p>Address:</p>
              <p>L&T Bypass, Chinnayapalayam, Coimbatore, Tamil Nadu</p>
            </div>
          </div>

          {/* Email Section */}
          <div className="w-full flex items-center text-left font-bold text-lg lg:text-xl text-white leading-tight rounded-lg p-3 gap-3">
            <FontAwesomeIcon icon={faEnvelope} className="text-blue-500 text-xl lg:text-2xl" />
            <a href="mailto:postbox2992005@gmail.com" className="text-white">
              <p>Email:</p>
              postbox2992005@gmail.com
            </a>
          </div>

          {/* Phone Section */}
          <div className="w-full flex items-center text-left font-bold text-lg text-white leading-tight rounded-lg p-3 gap-3">
            <FontAwesomeIcon icon={faPhone} className="text-blue-500 text-xl lg:text-2xl" />
            <a href="tel:+91 7305294524" className="text-white">
              <p>Phone:</p>
              7305294524
            </a>
          </div>

          {/* Social Media Links Section */}
          <div className="w-full h-auto flex justify-start items-center gap-8 text-white text-xl lg:text-2xl mt-6">
            <p className='w-48 font-bold'>Reach out to us:</p>
            <a href="https://github.com/Mathesh-299" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="text-white hover:text-blue-500 transition-colors duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/mathesh290905/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="text-white hover:text-blue-500 transition-colors duration-300" />
            </a>
            <a href="https://twitter.com/your-twitter-handle" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} className="text-white hover:text-blue-500 transition-colors duration-300" />
            </a>
          </div>
        </div>
        
        {/* Right Side - Contact Form */}
        <div className="w-full lg:w-1/2 h-full flex flex-col justify-center items-start p-8 lg:p-16 gap-6">
          {/* Form Title */}
          <div className="w-full h-10 flex justify-start items-center font-bold text-2xl lg:text-3xl text-blue-700">
            <p>Send Us a Message</p>
          </div>

          {/* Form Fields */}
          <form className="w-full flex flex-col gap-6">
            {/* Full Name */}
            <div className="flex flex-col lg:flex-row gap-4">
              <input 
                type="text" 
                className="w-full lg:w-1/2 p-4 rounded-lg bg-gray-200 outline-none active:outline-none focus:border-b-2 hover:border-blue-500"  
                placeholder="First Name" 
                required 
              />
              <input 
                type="text" 
                className="w-full lg:w-1/2 p-4 rounded-lg bg-gray-200 outline-none active:outline-none focus:border-b-2 hover:border-blue-500" 
                placeholder="Last Name" 
                required 
              />
            </div>

            {/* Email */}
            <input 
              type="email" 
              className="w-full p-4 rounded-lg bg-gray-200 outline-none active:outline-none focus:border-b-2 hover:border-blue-500" 
              placeholder="Email Address" 
              required 
            />

            {/* Phone Number */}
            <input 
              type="tel" 
              className="w-full p-4 rounded-lg bg-gray-200 outline-none active:outline-none focus:border-b-2 hover:border-blue-500" 
              placeholder="Phone Number" 
              required 
            />

            {/* Message */}
            <textarea 
              className="w-full p-4 rounded-lg bg-gray-200 h-32 outline-none active:outline-none focus:border-b-2 hover:border-blue-500" 
              placeholder="Your Message" 
              required 
            />

            {/* Send Message Button */}
            <button 
              type="submit" 
              className="w-full lg:w-[50%] flex justify-center items-center p-4 border-white rounded-lg font-bold text-2xl hover:bg-white hover:border-white hover:text-black/70 ml-4 lg:ml-10 text-white transition-colors duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
