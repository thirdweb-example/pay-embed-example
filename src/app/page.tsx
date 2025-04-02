"use client"

import Image from "next/image"
import { ConnectButton } from "thirdweb/react"
import thirdwebIcon from "@public/thirdweb.svg"
import { client } from "./client"
import { ArticleCard } from "./components/ui/ArticleCard"

export default function Home() {
  return (
    <main className="p-4 pb-10 min-h-[100vh] flex items-center justify-center container max-w-screen-lg mx-auto">
      <div className="py-20">
        <header className="flex flex-col items-center mb-20 md:mb-20">
          <Image
            src={thirdwebIcon || "/placeholder.svg"}
            alt=""
            className="size-[150px] md:size-[150px]"
            style={{
              filter: "drop-shadow(0px 0px 24px #a726a9a8)",
            }}
          />

          <h1 className="text-2xl md:text-6xl font-semibold md:font-bold tracking-tighter mb-6 text-zinc-100">
            thirdweb
            <span className="text-zinc-300 inline-block mx-1"></span>
            <span className="inline-block -skew-x-6 text-blue-500">Universal Bridge</span>
          </h1>

          <p className="text-zinc-300 text-base">
            Supported Chains:
            <a
              className="bg-zinc-800 text-zinc-300 px-2 rounded py-1 text-sm mx-1"
              href="https://thirdweb.com/chainlist?service=pay"
              target="_blank"
              rel="noreferrer"
            >
              Link
            </a>{" "}
          </p>
        </header>

        <div className="flex justify-center mb-20">
          <ConnectButton
            client={client}
          />
        </div>

        <div className="grid gap-4 lg:grid-cols-3 justify-center">
          <ArticleCard
            title="Buy Crypto"
            href="https://portal.thirdweb.com/typescript/v5"
            description="Inline component that allows users to buy any currency."
            payMode="buy_crypto"
          />

          <ArticleCard
            title="Commerce"
            href="https://portal.thirdweb.com/typescript/v5/react"
            description="Take payments from Fiat or Crypto directly to your seller wallet."
            payMode="checkout"
          />

          <ArticleCard
            title="Transactions"
            href="https://thirdweb.com/dashboard"
            description="Let your users pay for onchain transactions with fiat or crypto on any chain."
            payMode="fund_wallet"
          />
        </div>
      </div>
    </main>
  )
}




