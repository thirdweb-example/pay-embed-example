import { getContract } from "thirdweb"
import { base } from "thirdweb/chains";
import { claimTo, getNFT } from "thirdweb/extensions/erc1155";
import { PayEmbed, useActiveAccount, useReadContract } from "thirdweb/react";
import { client } from "../../client"

export default function TransactionExample() {
    const account = useActiveAccount();
    const nftContract = getContract({
        client,
        address: "0xf0d0CBf84005Dd4eC81364D1f5D7d896Bd53D1B8",
        chain: base,
    });
    const { data: nft } = useReadContract(getNFT, {
        contract: nftContract,
        tokenId: 0n,
    });
    return (
        <PayEmbed
            client={client}
            payOptions={{
                mode: "transaction",
                transaction: claimTo({
                    contract: nftContract,
                    quantity: 1n,
                    tokenId: 0n,
                    to: account?.address || "",
                }),
                metadata: nft?.metadata,
            }}
            className="w-full"
            style={{
              maxWidth: "100%",
              overflow: "hidden",
            }}
        />
    )
}
