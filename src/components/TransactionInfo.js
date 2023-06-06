import TrxDetail from "./TrxDetail";
import { useState } from 'react';


function TransactionInfo({ trx, alchemy }) {

    const [trxDetail, setTrxDetail] = useState();
    const [showDetails, setShowDetails] = useState(false);

    async function getInfo() {
        if (!showDetails) {
            const response = await alchemy.core.getTransactionReceipt(trx);
            setTrxDetail(response);
            setShowDetails(!showDetails);
        } else{
            setShowDetails(!showDetails);
        }

    }

    return (
        <div>
            <div>
                <input type="submit" value={trx} onClick={getInfo} />
            </div>

            <div>
                {showDetails ? <TrxDetail trxDetails={trxDetail} /> : null}
            </div>
        </div>
    );
}

export default TransactionInfo;