import { useState } from 'react';
import TransactionInfo from './TransactionInfo'

function BlockInfo({ block, alchemy }) {

    const [showTransactions, setShowTransactions] = useState(false);

    async function getInfo() {
        setShowTransactions(!showTransactions);
    }

    return (
        <div className="container">
            <p><b>Block:</b> {block.hash}</p>
            <p><b>Block parent Hash:</b> {block.parentHash}</p>
            <p><b>Block miner:</b> {block.miner}</p>
            <p><b>Block number:</b> {block.number}</p>
            <p><b>Block timestamp:</b> {block.timestamp}</p>
            <p><b>Block nonce:</b> {block.nonce}</p>
            <p><b>Block difficulty:</b> {block.difficulty}</p>
            {/* <p>Block gasLimit: {block.gasLimit}</p>
        <p>Block gasUsed: {block.gasUsed}</p> */}
            <div>
                <b>Transactions:</b>
                <br />
                <a href="#" onClick={getInfo}>(show/hide details)</a>
                {showTransactions && (
                    <ul>
                        {block.transactions.map(
                            (trx, index) => 
                                <li key={index}>
                                    <TransactionInfo trx={trx} alchemy={alchemy} />
                                </li>
                        )}
                    </ul>
                )}

            </div>
        </div>
    );
}

export default BlockInfo;