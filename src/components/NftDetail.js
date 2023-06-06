function NftDetail({ nft }) {
    return (
        <div className="container">
            <p><b>Title:</b> {nft.title}</p>
            <p><b>Description:</b> {nft.description}</p>
            <p><b>Token ID:</b> {nft.tokenId}</p>
            <p><b>Token type:</b> {nft.tokenType}</p>
            <p><b>Balance:</b> {nft.balance}</p>
        </div>
    )
}

export default NftDetail;