import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";


export function GetBalance() {
    const wallet = useWallet();
    const {connection} = useConnection();
    // const balance = 0;
    async function getbalance() {
        const balance = await connection.getBalance(wallet.publicKey);
        document.getElementById('balance').innerHTML = balance / LAMPORTS_PER_SOL;
    }
    getbalance();
    return (
        <div>
            <p>Balance :</p><div id='balance'></div>
            {/* <button onClick={getbalance}>Show Balance</button> */}
        </div>
    );
};