import { useContext, FC } from 'react'
import { TransactionContext } from '../context/TransactionContext'
import testData from '../utils/testData'
import { shortenAddress } from '../utils/shortenAddress'

interface CardProps {
    addressTo: string,
    addressFrom: string,
    timestamp: string,
    message: string,
    amount: string,
}

const TransactionsCard:FC<CardProps> = ({ addressTo, addressFrom, timestamp, message, amount }:CardProps) => {
  
    return (
      <div className="bg-[#181918] m-4 flex flex-1
        2xl:min-w-[450px]
        2xl:max-w-[500px]
        sm:min-w-[270px]
        sm:max-w-[300px]
        min-w-full
        flex-col p-3 rounded-md hover:shadow-2xl"
      >
        <div className="flex flex-col items-center w-full mt-3">
          <div className="display-flex justify-start w-full mb-6 p-2">
            <a href={`https://ropsten.etherscan.io/address/${addressFrom}`} target="_blank" rel="noreferrer">
              <p className="text-white text-base">From: {shortenAddress(addressFrom)}</p>
            </a>
            <a href={`https://ropsten.etherscan.io/address/${addressTo}`} target="_blank" rel="noreferrer">
              <p className="text-white text-base">To: {shortenAddress(addressTo)}</p>
            </a>
            <p className="text-white text-base">Amount: {amount} ETH</p>
            {message && (
              <>
                <br />
                <p className="text-white text-base">Message: {message}</p>
              </>
            )}
          </div>
          <div className="bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
            <p className="text-[#37c7da] font-bold">{timestamp}</p>
          </div>
        </div>
      </div>
    );
};
  

const Transactions = () => {
    const { currentAccount } = useContext(TransactionContext)

    return (
        <section className="w-screen flex-col flex py-16 items-center">
            <h1 className="text-3xl font-bold text-white">test</h1>

            <div className="flex flex-wrap justify-center items-center mt-12">
                {testData.reverse().map((transaction, i) => (
                <TransactionsCard key={i} {...transaction} />
                ))}
            </div>

        </section>

    )
}

export default Transactions