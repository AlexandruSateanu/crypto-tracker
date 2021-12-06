import {useEffect, useState} from "react";

import getWallet from "../../services/wallet/getWallet";
import WalletAsset from "../WalletAsset/WalletAsset";

const Wallet = ({ exchange }) => {
    const [ walletAssets, setWalletAssets ] = useState([]);
    const [ walletError, setWalletError ] = useState("");

    useEffect(() => {
        getWallet(exchange)
            .then(wallet => {
                console.log(wallet);
                setWalletAssets(wallet);
            })
            .catch(error => setWalletError("There was an error importing data: " + error));
    }, [ exchange ]);

    return (
        <div className="wallet py-3 space-y-3">
            <div className="table-header p-3 flex rounded-md shadow-md bg-white">
                <div className="px-1 font-bold font-mont">Coin</div>
                <div className="px-1 font-bold font-mont">Price</div>
                <div className="px-1 font-bold font-mont">Quantity</div>
            </div>
            { walletAssets.map(asset => <WalletAsset asset={asset} key={asset.tokenSymbol} />) }
            { walletError && <div className="rounded-md shadow-md bg-white p-3 flex text-red-400">{walletError}</div>}
        </div>
    );
};

export default Wallet;
