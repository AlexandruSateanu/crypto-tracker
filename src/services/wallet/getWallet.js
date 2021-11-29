import getWalletData from '../../data/mockWallet';
import transformWalletData from "./transformWalletData";

/**
 *
 * @returns {Promise};
 */
const getWallet = () => getWalletData().then(data => data.map(asset => transformWalletData(asset)));

export default getWallet;
