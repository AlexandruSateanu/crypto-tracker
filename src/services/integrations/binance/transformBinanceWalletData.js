/**
 *
 * @param {object} asset
 * @returns {object}
 */
const transformBinanceWalletData = (asset) => (
    {
        tokenSymbol: asset.asset || '',
        price: asset.price || '',
        quantity: asset.free || '',
        isValid: !!asset.asset && !!asset.free
    }
);

export default transformBinanceWalletData;
