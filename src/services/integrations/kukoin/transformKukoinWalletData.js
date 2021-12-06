/**
 *
 * @param {object} asset
 * @returns {object}
 */
const transformKukoinWalletData = (asset) => (
    {
        tokenSymbol: asset.asset || '',
        price: asset.price || '',
        quantity: asset.quantity || '',
        isValid: !!asset.asset && !!asset.price && !!asset.quantity
    }
);

export default transformKukoinWalletData;
