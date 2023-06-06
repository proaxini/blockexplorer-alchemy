const { Utils } = require("alchemy-sdk");

function TrxDetail({trxDetails}){
    return(
        <div>
            <p><b>To:</b> {trxDetails.to}</p>
            <p><b>From:</b> {trxDetails.from}</p>
            <p><b>Confirmations:</b> {trxDetails.confirmations}</p>
            <p><b>Gas used:</b> {Utils.formatUnits(trxDetails.gasUsed, "ether")} ETH</p>
        </div>
        
    );
}

export default TrxDetail;