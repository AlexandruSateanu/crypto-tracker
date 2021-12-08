import makeBinanceRequest from "./makeBinanceRequest";

/**
 * @param {object} config
 * @returns {Promise}
 */
const getBinanceWalletData = (config) => {
    if (!config.BINANCE) {
        return Promise.reject("Invalid crypto-tracker-api Binance config");
    };

    return makeBinanceRequest(config, config.BINANCE.WALLET_ENDPOINT);
};

export default getBinanceWalletData;
