import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction} from "@solana/web3.js";



export function SendSol() {
    const wallet = useWallet();
    const { connection } = useConnection();

    async function sendSolana() {
        let to = document.getElementById("toKey").value;
        let amount = document.getElementById("amount").value;
    
        if (!wallet.connected) {
            alert("Please connect your wallet first.");
            return;
        }
    
        if (!to || !amount || isNaN(amount) || Number(amount) <= 0) {
            alert("Please provide a valid recipient and amount.");
            return;
        }
    
        try {
            const transaction = new Transaction();
            transaction.add(SystemProgram.transfer({
                fromPubkey: wallet.publicKey,
                toPubkey: new PublicKey(to),
                lamports: Number(amount) * LAMPORTS_PER_SOL
            }));
    
            const signature = await wallet.sendTransaction(transaction, connection);
            await connection.confirmTransaction(signature);
    
            alert("Sent " + amount + " SOL to " + to);
        } catch (error) {
            console.error("Transaction error:", error);
            alert("Transaction failed: " + error.message);
        }
    }
    
    return(<>
            <p>Send SOL</p>
            <div className="container" >
                <input className='input-box' type="text" name="" id="toKey" placeholder="Enter Public key" />
                <input className='input-box' type="text" name="" id="amount" placeholder="Enter Amount" />
                <button className="component-button" onClick={sendSolana}>Send SOL</button>
            </div>
            </>
    )
};