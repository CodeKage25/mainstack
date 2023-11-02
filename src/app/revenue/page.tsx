"use client"
import React, { useEffect, useState } from 'react';
import { fetchUserData, fetchWalletData, fetchTransactionData } from "@/api/api";
import Info from "@/assets/icons/Info"
import Download from "@/assets/icons/Download"
import Expand from "@/assets/icons/Expand"
import CallMade from "@/assets/icons/CallMade";
import {Button} from "@/lib/Button";
const Revenue: React.FC = () => {
    const [userData, setUserData] = useState<any>(null);
  const [walletData, setWalletData] = useState<any>(null);
  const [transactionData, setTransactionData] = useState<any[]>([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await fetchUserData();
        const wallet = await fetchWalletData();
        console.log(wallet)
        const transactions = await fetchTransactionData();

        setUserData(user);
        setWalletData(wallet);
        setTransactionData(transactions);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  if (!userData || !walletData || transactionData.length === 0) {
    return <div>Loading...</div>;
  }
  
    return (
      <main className="flex flex-col gap-5 w-[100%]">
        <div className="flex justify-between w-[100%]">
        <div className="flex flex-col">
        <div className="inline-flex items-center gap-16">
        <div className="flex flex-col items-start gap-2">
            <p className="text-[#56616B] text-center font-[Degular] text-sm not-italic font-medium leading-4 tracking-[-0.0125em]">Available Balance</p>
            <p className="color-[#131316] text-center font-[Degular] text-4xl not-italic font-bold leading-[48px] tracking-[-0.09375em]">{`USD ${walletData.balance.toFixed(2)}`}</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-[10px]">
            <Button className="flex pt-[14px] flex justify-center items-center self-stretch pr-7 pl-7 pb-[14px] rounded-[100px] bg-[#131316] font-[Degular] text-base not-italic font-semibold leading-6 tracking-[-0.025em]">Withdraw</Button>
        </div>
        </div>
        <div></div>
        </div>
        <div className="inline-flex flex-col items-start gap-8 w-[271px]">
            <div className="flex flex-col w-[271px] items-start gap-2">
                <div className="flex items-center w-[271px] justify-between">
                    <p className="text-[#56616B] font-[Degular] text-sm font-normal leading-4">Ledger Balance</p>
                    <Info />
                </div>
                <p className="text-[#131316] font-[Degular] text-[28px] not-talic font-bold leading-[38px]">{`USD ${walletData.ledger_balance.toFixed(2)}`}</p>
            </div>
            <div className="flex flex-col w-[271px] items-start gap-2">
                <div className="flex items-center w-[271px] justify-between">
                    <p className="text-[#56616B] font-[Degular] text-sm font-normal leading-4">Total Payout</p>
                    <Info />
                </div>
                <p className="text-[#131316] font-[Degular] text-[28px] not-talic font-bold leading-[38px]">{`USD ${walletData.total_payout.toFixed(2)}`}</p>
            </div>
            <div className="flex flex-col w-[271px] items-start gap-2">
                <div className="flex items-center w-[271px] justify-between">
                    <p className="text-[#56616B] font-[Degular] text-sm font-normal leading-4">Total Revenue</p>
                    <Info />
                </div>
                <p className="text-[#131316] font-[Degular] text-[28px] not-talic font-bold leading-[38px]">{`USD ${walletData.total_revenue.toFixed(2)}`}</p>
            </div>
            <div className="flex flex-col w-[271px] items-start gap-2">
                <div className="flex items-center w-[271px] justify-between">
                    <p className="text-[#56616B] font-[Degular] text-sm font-normal leading-4">Pending Payout</p>
                    <Info />
                </div>
                <p className="text-[#131316] font-[Degular] text-[28px] not-talic font-bold leading-[38px]">{`USD ${walletData.pending_payout.toFixed(2)}`}</p>
            </div>
        </div>
        </div>
        <div className="flex flex-col gap-6">
        <div className="flex pb-0 items-center justify-between border-b border-solid border-[#EFF1F6]">
            <div className="flex flex-col items-start flex-[1_0%_0%]">
                <p className="text-[#131316] font-[Degular] text-2xl not-italic font-bold leading-8">{`${transactionData.length} Transactions`}</p>
                <p className="text-[#56616B] self-stretch font-[Degular] not-italic font-medium leading-4">Your transactions for the last 7 days</p>
            </div>
            <div className="flex justify-end items-center gap-3">
                <Button className="flex pt-3 pb-3 pr-5 pl-[30px] justify-center items-center gap-3 rounded-[100px] bg-[#EFF1F6]">
                    <p className="text-[#131316] font-[Degular] text-base not-italic font-semibold leading-6">Filter</p>
                    <Expand />
                </Button>
                <Button className="flex pt-3 pb-3 pr-5 pl-[30px] justify-center items-center gap-3 rounded-[100px] bg-[#EFF1F6]">
                    <p className="text-[#131316] font-[Degular] text-base not-italic font-semibold leading-6">Export list</p>
                    <Download />
                </Button>
            </div>
        </div>
        <div className="inline-flex flex-col items-start gap-6">
            <div className="flex self-stretch">
                {transactionData.map((transaction) => (
                    <div>{transaction.status === "successful" ? <CallMade /> : <CallRecieved />}</div>
                    <div className="flex flex-col justify-between items-start "></div>
                    <div></div>
                ))}
            </div>
        </div>
        </div>
      </main>
    )
  }
export default Revenue;
  