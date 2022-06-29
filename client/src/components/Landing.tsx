import { useContext, SyntheticEvent } from "react"
import {
    Formik,
    FormikHelpers,
    FormikProps,
    Form,
    Field,
    FieldProps,
} from 'formik';
import { TransactionContext } from '../context/TransactionContext';

import Eth1 from '../assets/eth1.png'
import Eth2 from '../assets/eth2.png'
  
interface MyFormValues {
    ethAddress: string;
    amount: string;
    keyword: string;
    message: string;
}

const Landing = () => {
    const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext);

    const initialValues: MyFormValues = { ethAddress: '', amount: '', keyword: '', message: '' };
    return (
        <section className="w-full h-screen flex justify-center pt-8">
            <div className="container h-full flex justify-between items-center relative">
                <div className="bg-violet-500 -z-10 w-12 h-96 rounded-[100%] absolute left-36 -mt-24 -rotate-12 blur-[80px] opacity-60"/>
                <div className="bg-blue-500 -z-10 w-12 h-96 rounded-[100%] absolute left-80 mt-16 -rotate-[70deg] blur-[80px] opacity-60"/>
                <img src={Eth1} alt="Background Image" className="absolute -right-44 -z-10 mb-20" />
                <div>
                    <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-300 font-extrabold text-[6rem]">Exchange</h1>
                    { currentAccount ? 
                    <button 
                    className="select-none bg-gradient-to-r from-violet-400 to-blue-300 w-full p-2 mt-2 rounded-lg text-[#0f121a] font-bold text-lg cursor-not-allowed opacity-50">
                        Wallet Connected!
                    </button>
                    :
                    <button 
                    onClick={() => {connectWallet()}}
                    className="select-none bg-gradient-to-r from-violet-400 hover:from-violet-500 to-blue-300 hover:to-blue-400 w-full p-2 mt-2 rounded-lg text-[#0f121a] font-bold text-lg">
                        Connect Wallet
                    </button>
                    }
                </div>

                <div>
                    <div className="select-none overflow-hidden relative p-6 w-[26rem] h-52 mb-8 bg-gradient-to-bl from-white/[0.05] to-white/[0.01] border-[1px] border-white/10 rounded-3xl backdrop-blur-xl -z-20">
                        <div className="bg-violet-500 -z-10 w-24 h-96 rounded-[100%] absolute right-16 -mt-36 blur-2xl -rotate-12 opacity-50"/>
                        <div className="bg-blue-500 -z-10 w-24 h-96 rounded-[100%] absolute right-36 mt-4 blur-2xl -rotate-12 opacity-50"/>
                        <div className="absolute w-full left-0 bottom-0 bg-white/10 h-16"/>
                        <img src={Eth2} alt="Eth Image" className="absolute bottom-0 left-0 mb-3 ml-6 w-10 h-10 opacity-90" />

                        <p className="text-white/60 italic font-light">Address</p>
                        <h1 className="text-white/90 text-xl font-bold">...</h1>
                    </div>
                    <div className="w-[26rem] p-6 rounded-3xl bg-gradient-to-bl from-white/[0.05] to-white/[0.01] border-[1px] border-white/50 backdrop-blur-3xl">
                        <Formik
                        initialValues={initialValues}
                        onSubmit={(values, actions) => {
                            // console.log({ values, actions });
                            // alert(values.ethAddress);

                            if (values.ethAddress && values.amount && values.keyword && values.message) {
                                sendTransaction(values.ethAddress, values.amount, values.keyword, values.message);
                            }

                            actions.setSubmitting(false);
                        }}
                        >
                            <Form>
                                <div className="flex flex-col w-full">
                                    <label className="text-white font-medium text-xs mb-1 pl-2" htmlFor="ethAddress">Address</label>
                                    <Field className="bg-white/[0.05] text-sm text-white font-medium rounded-lg p-2 border-[1px] border-white/20 focus:outline-white/20 outline-1 placeholder:select-none placeholder-white/30 placeholder:font-normal" id="ethAddress" name="ethAddress" placeholder="Your Address" />
                                    <label className="text-white font-medium text-xs mb-1 pl-2 mt-4" htmlFor="amount">Amount</label>
                                    <Field className="bg-white/[0.05] text-sm text-white font-medium rounded-lg p-2 border-[1px] border-white/20 focus:outline-white/20 outline-1 placeholder:select-none placeholder-white/30 placeholder:font-normal" id="amount" name="amount" placeholder="Your Amount" />
                                    <label className="text-white font-medium text-xs mb-1 pl-2 mt-4" htmlFor="keyword">Keyword</label>
                                    <Field className="bg-white/[0.05] text-sm text-white font-medium rounded-lg p-2 border-[1px] border-white/20 focus:outline-white/20 outline-1 placeholder:select-none placeholder-white/30 placeholder:font-normal" id="keyword" name="keyword" placeholder="Your Keyword" />
                                    <label className="text-white font-medium text-xs mb-1 pl-2 mt-4" htmlFor="message">Message</label>
                                    <Field className="bg-white/[0.05] text-sm text-white font-medium rounded-lg p-2 border-[1px] border-white/20 focus:outline-white/20 outline-1 placeholder:select-none placeholder-white/30 placeholder:font-normal" id="message" name="message" placeholder="Your Message" />

                                    <button className="focus:outline-violet-400 focus:border-none select-none bg-gradient-to-r from-violet-400 hover:from-violet-500 to-blue-300 hover:to-blue-400 w-full p-2 mt-6 rounded-lg text-[#0f121aee] font-bold" type="submit">Submit</button>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Landing