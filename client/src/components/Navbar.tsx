import { useState } from 'react';
import Logo from '../assets/eth1.png';
import { MdOutlineMenu, MdClose } from 'react-icons/md'; 

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const scroll1 = () => {
        window.scroll({
            top: 0,
            behavior: "smooth"
        })
    }

    const scroll2 = () => {
        window.scroll({
            top: 2000,
            behavior: "smooth"
        })
    }

    return (
        <nav className="absolute w-full px-2 sm:px-4 pt-5 bg-transparent select-none">
            <div className="container flex flex-wrap justify-between items-center mx-auto border-b-white/[0.05] border-b-[1px] pb-4">
                <img src={Logo} className="mr-3 h-12 pointer-events-none select-none" alt="Logo" />

                <button 
                // onClick={() => {setMenuOpen(!menuOpen)}}
                type="button" 
                className="z-[51] inline-flex items-center ml-3 p-2 rounded-lg text-sm md:hidden focus:outline-none focus:ring-2 text-white hover:hover:bg-blue-50/10 focus:ring-gray-600" 
                aria-controls="mobile-menu"
                onClick={() => {setMenuOpen(!menuOpen)}}
                >
                    <span className="sr-only">Open main menu</span>
                    {!menuOpen ? <MdOutlineMenu size="1.75em" /> : <MdClose size="1.75em" />}
                </button>

                <div className="hidden w-full md:block md:w-auto z-50">
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-4 md:mt-0 md:text-sm md:font-medium">
                        <li>
                            <div 
                            onClick={scroll1}
                            className="cursor-pointer block py-2 pr-4 pl-3 text-white rounded-xl md:bg-transparent md:hover:bg-blue-50/10 hover:bg-blue-400 md:px-3 md:py-2 text-base" aria-current="page">Exchange</div>
                        </li>
                        <li>
                            <div 
                            onClick={scroll2}
                            className="cursor-pointer block py-2 pr-4 pl-3 text-white rounded-xl md:bg-transparent md:hover:bg-blue-50/10 hover:bg-blue-400 md:px-3 md:py-2 text-base" aria-current="page">Transactions</div>
                        </li>
                    </ul>
                </div>
                {menuOpen &&
                // mobile menu
                <div className="md:hidden rounded-bl-3xl border-[1px] bg-slate-900/50 border-b-white/20 border-l-white/20 absolute -top-1 right-0 h-56 z-50 overflow-hidden">
                    <div className="backdrop-blur-lg  w-full h-full">
                        <ul className="flex flex-col mt-24 xs:pr-24 xs:pl-8 pr-16 pl-6 font-medium">
                            <li>
                                <div 
                                onClick={scroll1}
                                className="slide cursor-pointer block my-2 py-2 pr-4 pl-3 text-white rounded-lg bg-transparent hover:bg-blue-50/10 text-base" aria-current="page">Exchange</div>
                            </li>
                            <li>
                                <div 
                                onClick={scroll2}
                                className="slide cursor-pointer block py-2 pr-4 pl-3 text-white rounded-lg bg-transparent hover:bg-blue-50/10 text-base" aria-current="page">Transactions</div>
                            </li>
                        </ul>
                    </div>
                </div>
                }
            </div>
        </nav>
    )
}

export default Navbar