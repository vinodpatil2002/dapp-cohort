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

function App() {
    return (
        <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/pBONsoRb7HTNHg3W5rZ3Hvn4Tcg2jCE0"}>
            <WalletProvider wallets={[]} autoConnect>
                <WalletModalProvider>
                  <WalletMultiButton />
                  <WalletDisconnectButton />
                    <>
                        <div>hi there</div>
                    </>
                    <Airdrop />
                    <GetBalance />
                    <SignMessage />
                    <SendSol />
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
}

export default App;
