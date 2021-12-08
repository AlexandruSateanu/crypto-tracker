const BINANCE = {
    CRYPTO_TRACKER_API_URL: "http://localhost:7000/api/binance/",
    API_KEY: process.env.REACT_APP_BINANCE_API_KEY,
    SECRET_KEY: process.env.REACT_APP_BINANCE_SECRET_KEY,
    WALLET_ENDPOINT: "wallet/"
};

const config = {
    BINANCE
};

export default config;
