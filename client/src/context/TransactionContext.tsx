import { useEffect, useState, createContext, FC, ReactNode } from "react"
import { ethers } from "ethers"
import { contractABI, contractAddress } from "../utils/constants"

interface TransactionContext {
    transactionCount: number | string | null,
    connectWallet: () => void,

    //todo type
    transactions: any,
    currentAccount: string,
    isLoading: boolean,
    sendTransaction: (ethAddress:string, amount:string, message:string) => void,
    handleChange: (e: any, name: any) => void,
    formData: object,
}

export const TransactionContext = createContext<TransactionContext>({} as TransactionContext)

// @ts-ignore
const { ethereum } = window

interface ContextProps {
    children?: ReactNode
}

const createEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionsContract = new ethers.Contract(contractAddress, contractABI, signer);
  
    return transactionsContract;
  };

  export const TransactionsProvider: FC<ContextProps> = ({ children }) => {
    const [formData, setformData] = useState({ addressTo: "", amount: "", message: "" });
    const [currentAccount, setCurrentAccount] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [transactionCount, setTransactionCount] = useState(localStorage.getItem("transactionCount"));
    const [transactions, setTransactions] = useState([]);
  
    const handleChange = (e:any, name:any) => {
      setformData((prevState) => ({ ...prevState, [name]: e.target.value }));
    };
  
    const getAllTransactions = async () => {
      try {
        if (ethereum) {
          const transactionsContract = createEthereumContract();
  
          const availableTransactions = await transactionsContract.getAllTransactions();
  
          const structuredTransactions = availableTransactions.map((transaction:any) => ({
            addressTo: transaction.receiver,
            addressFrom: transaction.sender,
            timestamp: new Date(transaction.timestamp.toNumber() * 1000).toLocaleString(),
            message: transaction.message,
            amount: parseInt(transaction.amount._hex) / (10 ** 18)
          }));
  
          console.log(structuredTransactions);
  
          setTransactions(structuredTransactions);
        } else {
          console.log("Ethereum is not present");
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    const checkIfWalletIsConnect = async () => {
      try {
        if (!ethereum) return alert("Please install Metamask.");
  
        const accounts = await ethereum.request({ method: "eth_accounts" });
  
        if (accounts.length) {
          setCurrentAccount(accounts[0]);
  
          getAllTransactions();
          console.log(accounts)
        } else {
          console.log("No accounts found");
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    const checkIfTransactionsExist = async () => {
      try {
        if (ethereum) {
          const transactionsContract = createEthereumContract();
          const currentTransactionCount = await transactionsContract.getTransactionCount();
  
          window.localStorage.setItem("transactionCount", currentTransactionCount);
        }
      } catch (error) {
        console.log(error);
  
        throw new Error("No ethereum object");
      }
    };
  
    const connectWallet = async () => {
        
        try {
            if (!ethereum) return alert("Please install MetaMask.");
    
            const accounts = await ethereum.request({ method: "eth_requestAccounts", });
    
            setCurrentAccount(accounts[0]);
            window.location.reload();
        } catch (error) {
            console.log(error);
    
            throw new Error("No ethereum object");
        }
    };
  
    const sendTransaction = async (ethAddress:string, amount:string, message:string) => {
      try {
        if (ethereum) {
        //   const { addressTo, amount, message } = formData;
          const transactionsContract = createEthereumContract();
          const parsedAmount = ethers.utils.parseEther(amount);
  
          await ethereum.request({
            method: "eth_sendTransaction",
            params: [{
              from: currentAccount,
              to: ethAddress,
              gas: "0x5208",
              value: parsedAmount._hex,
            }],
          });
  
          const transactionHash = await transactionsContract.addToBlockchain(ethAddress, parsedAmount, message);
  
          setIsLoading(true);
          console.log(`Loading - ${transactionHash.hash}`);
          await transactionHash.wait();
          console.log(`Success - ${transactionHash.hash}`);
          setIsLoading(false);
  
          const transactionsCount = await transactionsContract.getTransactionCount();
  
          setTransactionCount(transactionsCount.toNumber());
          window.location.reload();
        } else {
          console.log("No ethereum object");
        }
      } catch (error) {
        console.log(error);
  
        throw new Error("No ethereum object");
      }
    };
  
    useEffect(() => {
      checkIfWalletIsConnect();
      checkIfTransactionsExist();
    }, [transactionCount]);
  
    return (
      <TransactionContext.Provider
        value={{
          transactionCount,
          connectWallet,
          transactions,
          currentAccount,
          isLoading,
          sendTransaction,
          handleChange,
          formData,
        }}
      >
        {children}
      </TransactionContext.Provider>
    );
  };