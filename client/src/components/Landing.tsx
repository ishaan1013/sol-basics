import Eth1 from '../assets/eth1.png'

const Landing = () => {
    return (
        <section className="w-full h-screen flex justify-center pb-8">
            <div className="container h-full flex justify-between items-center relative">
                <img src={Eth1} alt="Background Image" className="absolute right-0 mt-36" />
                <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-blue-300 font-extrabold text-[6rem]">Exchange.</h1>
                {/* <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-600 font-extrabold text-[6rem]">Exchange.</h1> */}
            </div>
        </section>
    )
}

export default Landing