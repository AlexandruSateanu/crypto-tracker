const WalletAsset = ({ asset }) => {
    if (!asset.isValid) {
        return null;
    }

    return (
        <div className="comment rounded-md shadow-md bg-white p-3 flex">
            <div className="font-semibold">
                { asset.tokenSymbol }
            </div>
            <div className="px-2">|</div>
            <div>
                { asset.price }
            </div>
            <div className="px-2">|</div>
            <div>
                { asset.quantity }
            </div>
        </div>
    );
};

export default WalletAsset;
