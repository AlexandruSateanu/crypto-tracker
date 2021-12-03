import ExchangePicker from "./components/ExchangePicker/ExchangePicker";

function App() {
    return (
        <div className="App container mx-auto px-3 lg:px-4 xl:px-6">
            <h1 className="py-2 text-3xl font-bold">Crypto Tracker</h1>
            <ExchangePicker />
        </div>
    );
}

export default App;
