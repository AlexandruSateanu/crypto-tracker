/**
 * @param {object} config
 * @param {string} endpoint
 * @param {object} params
 * @returns {Promise}
 */
const makeBinanceRequest = (config, endpoint, params = {}) => {
    const binanceConfig = config.BINANCE;

    if (!binanceConfig) {
        return Promise.reject("Invalid crypto-tracker-api Binance config");
    };

    const apiKey = binanceConfig.API_KEY;
    const secretKey = binanceConfig.SECRET_KEY;

    if (!apiKey || !secretKey) {
        return Promise.reject("Invalid apiKey or secretKey");
    };

    const queryParams = new URLSearchParams({
        apiKey,
        secretKey,
        ...params
    });

    const url = binanceConfig.CRYPTO_TRACKER_API_URL + endpoint + "?" + queryParams;

    return fetch(url, {
        headers: {
            "Cache-Control": "no-cache",
            "content-type": "application/json",
            "credentials": "include"
        }
    }).then(response => response.json());
};

export default makeBinanceRequest;
