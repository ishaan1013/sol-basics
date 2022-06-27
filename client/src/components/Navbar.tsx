import { useState } from 'react';
import Logo from '../assets/logo.png';
import { MdOutlineMenu, MdClose } from 'react-icons/md'; 

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className="px-2 sm:px-4 pt-5 bg-transparent">
            <div className="container flex flex-wrap justify-between items-center mx-auto border-b-white/20 border-b-[1px] pb-4">
                <img src={Logo} className="mr-3 h-12 pointer-events-none select-none" alt="Logo" />

                <button 
                // onClick={() => {setMenuOpen(!menuOpen)}}
                type="button" 
                className="z-20 inline-flex items-center ml-3 p-2 rounded-lg text-sm md:hidden focus:outline-none focus:ring-2 text-white hover:hover:bg-blue-50/10 focus:ring-gray-600" 
                aria-controls="mobile-menu"
                onClick={() => {setMenuOpen(!menuOpen)}}
                >
                    <span className="sr-only">Open main menu</span>
                    {!menuOpen ? <MdOutlineMenu size="1.75em" /> : <MdClose size="1.75em" />}
                </button>

                <div className="hidden w-full md:block md:w-auto">
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-4 md:mt-0 md:text-sm md:font-medium">
                        <li>
                            <p className="cursor-pointer block py-2 pr-4 pl-3 text-white bg-blue-400 rounded-xl md:bg-transparent md:hover:bg-blue-50/10 hover:bg-blue-400 md:px-3 md:py-2 text-[1rem]" aria-current="page">Exchange</p>
                        </li>
                        <li>
                            <p className="cursor-pointer block py-2 pr-4 pl-3 text-white bg-blue-400 rounded-xl md:bg-transparent md:hover:bg-blue-50/10 hover:bg-blue-400 md:px-3 md:py-2 text-[1rem]" aria-current="page">History</p>
                        </li>
                    </ul>
                </div>
                {menuOpen &&
                <div className="md:hidden absolute top-0 right-0 h-screen bg-slate-900/50 backdrop-blur-lg sm:w-2/5 xs:w-3/5 w-4/5">
                    
                </div>
                }
            </div>
        </nav>
    )
}

export default Navbar