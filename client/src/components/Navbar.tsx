import { useState } from 'react';
import Logo from '../assets/eth1.png';
import { MdOutlineMenu, MdClose } from 'react-icons/md'; 

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className="absolute w-full px-2 sm:px-4 pt-5 bg-transparent select-none">
            <div className="container flex flex-wrap justify-between items-center mx-auto border-b-white/[0.05] border-b-[1px] pb-4">
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

                <div className="hidden w-full md:block md:w-auto z-50">
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-4 md:mt-0 md:text-sm md:font-medium">
                        <li>
                            <p className="cursor-pointer block py-2 pr-4 pl-3 text-white rounded-xl md:bg-transparent md:hover:bg-blue-50/10 hover:bg-blue-400 md:px-3 md:py-2 text-[1rem]" aria-current="page">Exchange</p>
                        </li>
                        <li>
                            <p className="cursor-pointer block py-2 pr-4 pl-3 text-white rounded-xl md:bg-transparent md:hover:bg-blue-50/10 hover:bg-blue-400 md:px-3 md:py-2 text-[1rem]" aria-current="page">Transactions</p>
                        </li>
                    </ul>
                </div>
                {menuOpen &&
                <div className="md:hidden absolute top-0 right-0 h-screen bg-slate-900/50 backdrop-blur-lg">
                    <ul className="flex flex-col mt-24 xs:pr-24 xs:pl-8 pr-16 pl-6 font-medium">
                        <li>
                            <p className="slide cursor-pointer block my-2 py-2 pr-4 pl-3 text-white rounded-lg bg-transparent hover:bg-blue-50/10 text-[1rem]" aria-current="page">Exchange</p>
                        </li>
                        <li>
                            <p className="slide cursor-pointer block py-2 pr-4 pl-3 text-white rounded-lg bg-transparent hover:bg-blue-50/10 text-[1rem]" aria-current="page">Transactions</p>
                        </li>
                    </ul>
                </div>
                }
            </div>
        </nav>
    )
}

export default Navbar