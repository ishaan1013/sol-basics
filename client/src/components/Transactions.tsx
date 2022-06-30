import { useContext, FC } from 'react'
import { TransactionContext } from '../context/TransactionContext'
import { shortenAddressMore } from '../utils/shortenAddressMore'

import { MdOutlineLink } from 'react-icons/md'

interface CardProps {
    addressTo: string,
    addressFrom: string,
    timestamp: string,
    message: string,
    amount: string,
}

const TransactionsCard:FC<CardProps> = ({ addressTo, addressFrom, timestamp, message, amount }:CardProps) => {
  
    return (
        <div className="bg-gradient-to-bl from-white/[0.08] to-white/[0.01] border-[1px] border-white/10 backdrop-blur-md m-2 
        2xl:min-w-[450px] 2xl:max-w-[500px] sm:min-w-[270px] sm:max-w-[300px] 
        min-w-full flex justify-between items-center sm:p-8 p-6 rounded-xl hover:shadow-2xl
        relative hover:before:opacity-100 before:opacity-0 before:absolute before:w-full before:h-1/4 before:-z-10
        before:bg-gradient-to-r before:from-blue-600 before:to-green-400
        before:left-0 before:bottom-4 before:blur-[50px] duration-500">
            <div className="flex flex-col items-center">
                <div className="display-flex justify-start">
                    <a href={`https://goerli.etherscan.io/address/${addressFrom}`} target="_blank" rel="noreferrer" className="text-white hover:text-white/50 flex items-center">
                        <MdOutlineLink/><p className="ml-2 font-semibold md:text-base text-sm"><span className="select-none">From:</span> {shortenAddressMore(addressFrom)}</p>
                    </a>
                    <a href={`https://goerli.etherscan.io/address/${addressTo}`} target="_blank" rel="noreferrer" className="text-white hover:text-white/50 flex items-center">
                        <MdOutlineLink/><p className="ml-2 font-semibold md:text-base text-sm"><span className="select-none">To:</span> {shortenAddressMore(addressTo)}</p>
                    </a>
                    <p className="text-white font-light md:text-base text-sm select-none">Amount: {amount} ETH</p>
                    {message && (
                    <>
                        <br />
                        <p className="text-white md:text-base text-sm select-none">Message: {message}</p>
                    </>
                    )}
                </div>
            </div>
            <div>
                <p className="select-none text-end text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-green-400 font-extrabold md:text-sm text-xs">{timestamp.split(',')[0]}</p>
                <p className="select-none text-end text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-green-400 font-extrabold md:text-sm text-xs">{timestamp.substring(timestamp.indexOf(',') + 2)}</p>
            </div>
        </div>
    );
};
  

const Transactions = () => {
    const { currentAccount, transactions } = useContext(TransactionContext)

    return (
        <section className="w-screen flex-col flex py-16 lg:mt-0 mt-8 items-center">
            {currentAccount ? 
            <h1 className="sm:text-[3rem] text-[9vw] font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-green-400">Transactions</h1>
            :
            <h1 className="sm:text-[3rem] text-[9vw] font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-green-400">Connect Your Wallet To See Transactions.</h1>
            }

            <div className="flex flex-wrap justify-center items-center mt-12 px-12">
                {transactions.reverse().map((transaction:any, i:number) => (
                <TransactionsCard key={i} {...transaction} />
                ))}
            </div>

        </section>

    )
}

export default Transactions