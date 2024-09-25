import { faAws, faEnvira, faGit, faHtml5, faJava, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from '../Component/Navbar';
import Pic from '../assets/img/IMG-20221115-WA0002.jpg';

export const Profile = () => {
  return (
    <>
      <Navbar />

      <div className='w-screen min-h-screen bg-black/70 flex justify-center items-center'>
        <div className='w-full h-full flex flex-col md:flex-row justify-center items-center md:items-start md:justify-between px-4 py-8'>

          {/* Image Section */}
          <div className="w-full md:w-[40%] flex justify-center items-center mb-6 md:mb-0 md:mt-[-3vh] lg:mt-[-5vh]">
            <div className='w-[60%] md:w-[80%] lg:w-[60%] max-w-[250px] max-h-[250px] aspect-square flex justify-center items-center rounded-full overflow-hidden'>
              <img src={Pic} alt="Profile" className='w-full h-full' />
            </div>
          </div>

          {/* Text Section */}
          <div className='w-full md:w-[50%] flex flex-col justify-center items-center md:items-start text-center md:text-left'>

            {/* Welcome Text */}
            <div className='mb-4'>
              <h1 className='text-yellow-300 font-bold text-3xl sm:text-4xl lg:text-5xl'>
                Hello, Welcome!!!
              </h1>
            </div>

            {/* Name Section */}
            <div className='mb-4'>
              <h2 className='text-white/55 font-bold text-xl sm:text-2xl'>
                I'm Mathesh M.
              </h2>
            </div>

            {/* Description Section */}
            <div className='px-4 md:px-0 mb-4'>
              <p className='text-white/55 font-bold text-lg leading-relaxed sm:text-xl md:text-lg lg:text-xl'>
                Mathesh M is a dedicated third-year IT student with expertise in the MERN (MongoDB Express React NodeJS) stack and Spring framework. Proficient in data structures and algorithms, Mathesh is focused on mastering key technologies while enhancing problem-solving skills. His goal is to apply his knowledge to drive innovation in dynamic software development environments.
              </p>
            </div>

            {/* Icons Section */}
            <div className="w-full flex flex-wrap justify-center md:justify-start space-x-5 sm:space-x-6 lg:space-x-8 text-3xl sm:text-4xl lg:text-5xl text-gray-900 gap-2">
              <div className="flex justify-center items-center w-[80px] h-[80px]">
                <FontAwesomeIcon icon={faEnvira} size="2x" title="MongoDB" className="text-green-500" />
              </div>
              <div className="flex justify-center items-center w-[80px] h-[80px]">
                <FontAwesomeIcon icon={faReact} size="2x" title="React" className="text-indigo-800" />
              </div>
              <div className="flex justify-center items-center w-[80px] h-[80px]">
                <FontAwesomeIcon icon={faNodeJs} size="2x" title="Node.js" className="text-green-500" />
              </div>
              <div className="flex justify-center items-center w-[80px] h-[80px]">
                <FontAwesomeIcon icon={faJava} size="2x" title="Spring" className="text-gray-700" />
              </div>
              <div className="flex justify-center items-center w-[80px] h-[80px]">
                <FontAwesomeIcon icon={faGit} size="2x" className="text-gray-600" />
              </div>
              <div className="flex justify-center items-center w-[80px] h-[80px]">
                <FontAwesomeIcon icon={faAws} size="2x" className="text-gray-600" />
              </div>
              <div className="flex justify-center items-center w-[80px] h-[80px]">
                <FontAwesomeIcon icon={faHtml5} size="2x" title="HTML5" className="text-orange-500" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
