import { useState } from "react";
import NftDetail from "./NftDetail";

function Nft({ alchemy }) {

    const [address, setAddress] = useState('');
    const [nfts, setNfts] = useState([]);
    const [error, setError] = useState(null);

    function onChange(evt) {
        setAddress(evt.target.value);
    }

    async function getNFT() {
        try {
            const response = await alchemy.nft.getNftsForOwner(address);
            if (response.totalCount === 0) {
                setNfts([]);
            }
            setNfts(response.ownedNfts);
            console.log(response);
            setError(null);
        } catch (err) {
            setError(err);
            setNfts([]);
        }
    }

    return (
        <div>
            <h1>Check your NFT collection</h1>

            <label>
                Wallet address:
                <input placeholder="Paste in any wallet address" value={address} onChange={onChange}></input>
            </label>

            <input type="submit" value="Show NFTs" onClick={getNFT} />
            {error ? <p>An error occurred: {error.message}</p> : null}
            {!error && <h1>Your NFT collection:</h1>}
            {nfts.length === 0 && !error 
                ? <p>You dont own any NFTs.</p> 
                : nfts.map( (nft, index) => <NftDetail key={index} nft={nft} /> ) }
        </div>
    );
}

export default Nft;