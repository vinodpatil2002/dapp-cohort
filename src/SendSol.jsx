import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction} from "@solana/web3.js";



export function SendSol() {
    const wallet = useWallet();
    const { connection } = useConnection();

    async function sendSolana() {
        let to = document.getElementById("toKey").value;
        let amount = document.getElementById("amount").value;
        const transaction = new Transaction();
        transaction.add(SystemProgram.transfer({
            fromPubkey: wallet.publicKey,
            toPubkey: new PublicKey(to),
            lamports: amount * LAMPORTS_PER_SOL
        }));
        await wallet.sendTransaction(transaction, connection);
        alert("Sent "+amount+ "SOL to "+to);
    };
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