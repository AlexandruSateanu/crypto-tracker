import isEmptyQueryString from "../../../utils/isEmptyQueryString";
import hmacSHA512 from 'crypto-js/hmac-sha256';

/**
 * @param {object} config
 * @param {string} endpoint
 * @param {object} params
 * @returns {Promise}
 */
const makeBinanceRequest = (config, endpoint, params = {}) => {
    if (!config.BINANCE_API) {
        return Promise.reject("Invalid Binance API config");
    };

    const binanceApi = config.BINANCE_API;
    const binanceSecretKey = binanceApi.SECRET_KEY;
    const timestamp = Date.now();
    let fullParams = {};

    if (params) {
        Object.keys(params).forEach(key => {
            if (key !== 'signature' && key !== 'timestamp' && !isEmptyQueryString(params[key])) {
                fullParams[key] = params[key];
            }
        });
    }

    Object.assign(fullParams, { timestamp });

    if (binanceSecretKey) {
        const queryString = Object.keys(fullParams).map((key) => {
            return `${key}=${fullParams[key]}`;
        }).join('&');

        const signature = hmacSHA512(queryString, binanceSecretKey).toString();
        Object.assign(fullParams, { signature });
    }
    console.log(fullParams);

    const signedParams = new URLSearchParams(fullParams);

    const url = binanceApi.API_DOMAIN + binanceApi.API_PREFIX + endpoint + "?" + signedParams;

    return fetch(url, {
        headers: {
            "Cache-Control": "no-cache",
            "content-type": "application/json",
            "credentials": "include",
            "X-MBX-APIKEY": binanceApi.API_KEY,
            "mode": "no-cors"
        }
    }).then(response => response.json());
};

export default makeBinanceRequest;
