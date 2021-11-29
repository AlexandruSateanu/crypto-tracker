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
            <div className="table-header rounded-md shadow-md bg-white p-3 flex">
                <div className="font-bold px-2">Coin</div>
                <div className="font-bold px-2">Price</div>
                <div className="font-bold px-2">Quantity</div>
            </div>
            { walletAssets.map(asset => <WalletAsset asset={asset} key={asset.tokenSymbol} />) }
        </div>
    );
};

export default Wallet;
