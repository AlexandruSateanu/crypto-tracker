import {useEffect, useState} from "react";

import getWallet from "../../services/wallet/getWallet";
import WalletAsset from "../WalletAsset/WalletAsset";

const Wallet = () => {
    const [ walletAssets, setWalletAssets ] = useState([]);

    useEffect(() => {
        getWallet().then(wallet => setWalletAssets(wallet));
    }, []);

    return (
        <div className="wallet py-3 space-y-3">
            <div className="table-header p-3 flex rounded-md shadow-md bg-white">
                <div className="px-1 font-bold font-mont">Coin</div>
                <div className="px-1 font-bold font-mont">Price</div>
                <div className="px-1 font-bold font-mont">Quantity</div>
            </div>
            { walletAssets.map(asset => <WalletAsset asset={asset} key={asset.tokenSymbol} />) }
        </div>
    );
};

export default Wallet;
