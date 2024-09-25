import { CircleUser, X } from 'lucide-react'; // Importing the "X" icon for the close state
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
    const [visible, setVisible] = useState(false);

    const NavLinks = [
        { title: 'Profile', path: '/' },
        { title: 'Projects', path: '/project' },
        { title: 'Contact', path: '/contact' }
    ];

     // const [userdata, setUserdata] = useState({
    //     email: '',
    //     password: ''
    // })
    // const handleChange = (e) => {
    //     setUserdata({ ...userdata, [e.target.id]: e.target.value })
    //     console.log(userdata)

    // }
    // const emailref = useRef(null)
    // const nameref = useRef(null)
    // const numberref = useRef(null)
    // const passwordref = useRef(null)
    // const ageref = useRef(null)

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     // console.log(nameref.current.value);
    //     // console.log(emailref.current.value);
    //     // console.log(numberref.current.value);
    //     // console.log(ageref.current.value);
    //     // console.log(passwordref.current.value);
    //     //  console.log(userdata)

    // }

    return (
        <>
            {/* Navbar Container */}
            <div className='w-[100vw] h-[4rem] flex bg-gray-600 justify-center items-center shadow-lg shadow-cyan-100'>
                <div className='w-[90%] lg:w-[80%] h-full flex justify-between items-center'>

                    {/* Logo Section */}
                    <div className='w-1/2 lg:w-1/3 h-full flex justify-start items-center'>
                        <Link to='/'>
                            <p className='font-bold text-2xl lg:text-4xl text-white'>M Mathesh</p>
                        </Link>
                    </div>

                    {/* Navigation Links for Larger Screens */}
                    <div className='w-1/2 lg:w-2/3 h-full flex justify-end items-center'>
                        <ul className='hidden lg:flex lg:w-full justify-end items-center gap-8'>
                            {NavLinks.map((navdata, index) => (
                                <NavLink key={index} to={navdata.path}>
                                    <li className='font-bold text-lg lg:text-2xl text-white hover:bg-blue-300 px-3 py-1 rounded-md'>
                                        {navdata.title}
                                    </li>
                                </NavLink>
                            ))}
                        </ul>

                        {/* User Icon for Login */}
                        <button
                            className='hidden lg:flex justify-end items-center border-2 border-white hover:bg-white hover:border-white hover:text-black/70 ml-4 lg:ml-10 text-white'
                        >
                            <Link to='/login'>
                                <CircleUser size={32} />
                            </Link>
                        </button>
                    </div>
                </div>

                {/* Hamburger Icon for Small Screens */}
                <div className='lg:hidden flex w-full justify-end items-center pr-4'>
                    <button
                        onClick={() => setVisible(!visible)}
                        className='text-white text-3xl focus:outline-none'
                    >
                        {visible ? <X size={32} /> : '☰'} {/* Show X when open, ☰ when closed */}
                    </button>
                </div>

                {/* Responsive Mobile Menu */}
                {visible && (
                    <ul className='absolute top-[4rem] right-0 w-full bg-gray-600 flex flex-col items-center gap-4 py-2 lg:hidden z-50'>
                        {NavLinks.map((navdata, index) => (
                            <NavLink
                                key={index}
                                to={navdata.path}
                                className='w-full text-center'
                                onClick={() => setVisible(false)} // Close the menu after clicking a link
                            >
                                <li className='font-bold text-lg text-white hover:bg-blue-300 w-full px-3 py-2'>
                                    {navdata.title}
                                </li>
                            </NavLink>
                        ))}
                        <button
                            className='flex justify-end items-center border-2 border-white hover:bg-white hover:border-white hover:text-black/70 text-white px-3 py-2'
                            onClick={() => setVisible(false)}
                        >
                            <Link to='/login'>
                                <CircleUser size={32} />
                            </Link>
                        </button>
                    </ul>
                )}
            </div>
        </>
    );
}

export default Navbar;
