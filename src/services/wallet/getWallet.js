import getBinanceWalletData from '../../data/integrations/binance/mockBinanceWallet';
import transformBinanceWalletData from "../integrations/binance/transformBinanceWalletData";
import getKukoinWalletData from "../../data/integrations/kukoin/mockKukoinWallet";
import transformKukoinWalletData from "../integrations/kukoin/transformKukoinWalletData";
import { EXCHANGES } from "../../utils/constants"

/**
 * @param {string} exchange
 * @returns {Promise};
 */
const getWallet = (exchange) => {

    switch (exchange) {
        case EXCHANGES.BINANCE:
            return getBinanceWalletData().then(data => data.map(asset => transformBinanceWalletData(asset)));
        case EXCHANGES.KUKOIN:
            return getKukoinWalletData().then(data => data.map(asset => transformKukoinWalletData(asset)));
        default:
            return getBinanceWalletData().then(data => data.map(asset => transformBinanceWalletData(asset)));
    }
};

export default getWallet;
