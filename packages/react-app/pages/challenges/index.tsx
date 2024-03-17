import PrimaryButton from "@/components/Button";
import { useWeb3 } from "@/contexts/useWeb3";

export default function Challenges() {
    const {mintMinipayNFT} = useWeb3()
    return  <div className="w-full px-3 mt-5">
    <PrimaryButton
        
        onClick={() => {
            // write logic
            mintMinipayNFT()
        }}
        title="Mint Minipay NFT"
        widthFull
    />
</div>;
}






