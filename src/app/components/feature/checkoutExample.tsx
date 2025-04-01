import { ThirdwebClient } from "thirdweb"
import { PayEmbed, getDefaultToken } from "thirdweb/react";
import { base } from "thirdweb/chains";
import { client } from "../client"

export default function CheckoutExample() {
    return (
        <PayEmbed
            client={client}
            theme={"light"}
            payOptions={{
                mode: "direct_payment",
                paymentInfo: {
                    amount: "35",
                    chain: base,
                    token: getDefaultToken(base, "USDC"),
                    sellerAddress:
                        "0xEb0effdFB4dC5b3d5d3aC6ce29F3ED213E95d675",
                },
                metadata: {
                    name: "Black Hoodie (Size L)",
                    image: "https://playground.thirdweb.com/drip-hoodie.png",
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
