import { useConnection, useWallet } from "@solana/wallet-adapter-react";

export function Airdrop() {
    const wallet = useWallet();
    const { connection } = useConnection();
    async function sendAirdropToUser() {
        const amt = document.getElementById("publickey").value;
        await connection.requestAirdrop(wallet.publicKey, amt * 1000000000);
        alert("Airdrop sent");
    }
    return (
        <div className="container">
            {/* Hi mr {wallet.publicKey.toString()} */}
            <input className='input-box' id="publickey" type="text" placeholder="Enter Amount" />
            <button className="component-button" onClick={sendAirdropToUser}>Request Airdrop</button>
        </div>
    );
}
