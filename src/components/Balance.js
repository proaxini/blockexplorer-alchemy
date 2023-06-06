import { useState } from "react";
const { Utils } = require("alchemy-sdk");

function Balance({ alchemy }) {

    const [address, setAddress] = useState('');
    const [balance, setBalance] = useState();
    const [error, setError] = useState(null);

    function onChange(evt) {
        setAddress(evt.target.value);
    }

    async function getBalance() {
        try{
            const response = await alchemy.core.getBalance(address);
            const ether = Utils.formatUnits(response, "ether");
            setBalance(ether);
            setError(null);
        } catch (err){
            setError(err);
            setBalance(null);
        }
    }

    return (
        <div>
            <h1>Check Wallet Balance</h1>

            <label>
                Wallet address:
                <input placeholder="Paste in any wallet address" value={address} onChange={onChange}></input>
            </label>

            <input type="submit" className="button" value="Show Balance" onClick={getBalance} />
            {error ? <p>An error occurred: {error.message}</p> : null}
            {balance && <div className="balance">Address Balance: <b>{balance} ETH</b></div>}
        </div>
    );
}

export default Balance;