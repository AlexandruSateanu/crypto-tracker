/**
 * @param {object} config
 * @returns {Promise}
 */
const getBinanceWalletData = (config) => {
    if (!config.BINANCE_API) {
        return Promise.reject("Invalid Binance API config");
    };

    const binanceApi = config.BINANCE_API;
    const params = new URLSearchParams({
        timestamp: "aa",
        signature: "bb"
    });
    const url = binanceApi.API_DOMAIN + binanceApi.API_PREFIX + binanceApi.ACCOUNT_INFORMATION + "?" + params;

    return fetch(url, {
        headers: {
            "Cache-Control": "no-cache",
            "content-type": "application/json",
            "credentials": "include",
            "X-MBX-APIKEY": "key"
        }
    }).then(response => response.json());
};

export default getBinanceWalletData;
