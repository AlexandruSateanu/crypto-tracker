import {useState} from "react";
import { EXCHANGES } from "../../utils/constants"
import Wallet from "../Wallet/Wallet";

const DEFAULT = "default";

const ExchangePicker = () => {
    const [ exchangeValue, setExchangeValue ] = useState(DEFAULT);
    const [ wallet, setWallet ] = useState(null);

    const handleChange = (event) => {
        setExchangeValue(event.target.value);
        setWallet(null);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setWallet(exchangeValue);
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="mt-2">
                <div>
                    <label>Select your exchange: </label>
                    <select
                        value={exchangeValue}
                        onChange={handleChange}
                        className="bg-orange-100 px-2 border border-solid border-gray-500 rounded"
                    >
                        <option value={DEFAULT}>-</option>
                        <option value={EXCHANGES.BINANCE}>Binance</option>
                        <option value={EXCHANGES.KUKOIN}>Kukoin</option>
                    </select>
                </div>
                <div className="my-2">
                    {
                        !wallet &&
                            <input
                                type="submit"
                                value="Import data"
                                className={`px-2 border border-solid border-gray-500 rounded ${exchangeValue === DEFAULT ? "bg-gray-100 text-gray-300 cursor-not-allowed" : "bg-orange-100 cursor-pointer"}`}
                                disabled={exchangeValue === DEFAULT}
                            />
                    }
                </div>
            </form>

            {wallet && <Wallet exchange={exchangeValue} />}
        </>
    );
};

export default ExchangePicker;
