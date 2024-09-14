import React, { FC, useMemo } from "react";
import {
    ConnectionProvider,
    WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { UnsafeBurnerWalletAdapter } from "@solana/wallet-adapter-wallets";
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton,
    WalletConnectButton,
} from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";
import { Airdrop } from "./Airdrop";
// Default styles that can be overridden by your app
import "@solana/wallet-adapter-react-ui/styles.css";
import { GetBalance } from "./GetBalance";
import { SignMessage } from "./SignMessage";
import { SendSol } from "./SendSol";
import "./App.css";
function App() {
    return (
        <div className="background">
        <ConnectionProvider
            endpoint={
                "https://solana-devnet.g.alchemy.com/v2/pBONsoRb7HTNHg3W5rZ3Hvn4Tcg2jCE0"
            }
        >   
            <div className="heading">
                        <h1>SOL Faucet</h1>
            </div>
            <WalletProvider wallets={[]} autoConnect>
                <WalletModalProvider>
                    <div className="wallet-buttons">
                        <WalletMultiButton />
                        <WalletDisconnectButton />
                    </div>
                    <Airdrop />
                    <GetBalance />
                    <SignMessage />
                    <SendSol />
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
        </div>
    );
}

export default App;
