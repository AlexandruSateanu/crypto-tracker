import makeBinanceRequest from "./makeBinanceRequest";

/**
 * @param {object} config
 * @returns {Promise}
 */
const getBinanceWalletData = (config) => {
    if (!config.BINANCE_API) {
        return Promise.reject("Invalid Binance API config");
    };

    return makeBinanceRequest(config, config.BINANCE_API.ACCOUNT_INFORMATION);
};

export default getBinanceWalletData;
