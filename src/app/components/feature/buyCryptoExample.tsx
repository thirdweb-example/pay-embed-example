import { PayEmbed } from "thirdweb/react"
import { client } from "../../client"

export default function BuyCryptoExample() {
    return (
        <PayEmbed
            client={client}
            payOptions={{
                mode: "fund_wallet",
                metadata: {
                    name: "Get funds",
                },


            }}
            className="w-full"
            style={{
              maxWidth: "100%",
              overflow: "hidden",
            }}
        />
    )
}
