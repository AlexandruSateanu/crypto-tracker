const mockWallet = [
    {
        asset: 'BTC',
        price: '55000',
        quantity: '0.05'
    },
    {
        asset: 'ETH',
        price: '4400',
        quantity: '0.5'
    },
    {
        asset: 'BNB',
        price: '610',
        quantity: '0.1'
    }
];

const getWalletData = () => {
    return new Promise(resolve => {
        resolve(mockWallet);
    });
};

export default getWalletData;
