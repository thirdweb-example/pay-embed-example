import TransactionExample from "../feature/transactionExample"
import BuyCryptoExample from "../feature/buyCryptoExample"
import CheckoutExample from "../feature/checkoutExample"


export function ArticleCard(props: {
    title: string
    href: string
    description: string
    payMode: "buy_crypto" | "checkout" | "fund_wallet"
  }) {
    return (
      <div className="flex flex-col border border-zinc-800 p-4 rounded-lg hover:bg-zinc-900 transition-colors hover:border-zinc-700">
        <article className="mb-4">
          <h2 className="text-lg font-semibold mb-2">{props.title}</h2>
          <p className="text-sm text-zinc-400">{props.description}</p>
        </article>
  
        <div className="mt-auto flex-grow">
          {props.payMode === "buy_crypto" && <BuyCryptoExample />}
          {props.payMode === "checkout" && <CheckoutExample />}
          {props.payMode === "fund_wallet" && <TransactionExample />}
        </div>
  
  
      </div>
    )
  }