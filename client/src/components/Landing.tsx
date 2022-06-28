import Eth1 from '../assets/eth1.png'

const Landing = () => {
    return (
        <section className="w-full h-screen flex justify-center pb-8">
            <div className="container h-full flex justify-between items-center relative">
                <div className="bg-violet-500 -z-10 w-12 h-96 rounded-[100%] absolute left-36 -mt-24 -rotate-12 blur-[80px] opacity-60"/>
                <div className="bg-blue-500 -z-10 w-12 h-96 rounded-[100%] absolute left-80 mt-16 -rotate-[70deg] blur-[80px] opacity-60"/>
                <img src={Eth1} alt="Background Image" className="absolute right-0 mt-36" />
                <div>
                    <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-300 font-extrabold text-[6rem]">Exchange.</h1>
                    <button className="bg-gradient-to-r from-violet-400 hover:from-violet-500 to-blue-300 hover:to-blue-400 w-full p-2 mt-2 rounded-lg text-[#0f121a] font-bold text-lg">Connect Wallet</button>
                </div>

            </div>
        </section>
    )
}

export default Landing