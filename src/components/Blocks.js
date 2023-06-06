import { useEffect, useState } from 'react';
import BlockInfo from './BlockInfo';

function Blocks({ alchemy }) {

    const [blockNumber, setBlockNumber] = useState();
    const [previousBlocks, setPreviousBlocks] = useState([]);

    async function getBlockNumber() {
        setBlockNumber(await alchemy.core.getBlockNumber());
    }

    async function getPrevious5() {
        const previousBlocks = [];
        for (let i = 1; i <= 5; i++) {
            const bl = await alchemy.core.getBlock(blockNumber - i);
            previousBlocks.push(bl);
        }
        setPreviousBlocks(previousBlocks);
    }

    useEffect(() => {
        getBlockNumber();
        getPrevious5();
    });


    return (
        <div>
            <p>Most recently minned block Number: <b>{blockNumber}</b></p>

            <div className='blockContainer'>
                <p>Previous 5 blocks:</p>
                {previousBlocks.map((bl, index) => (
                    <BlockInfo key={index} block={bl} alchemy={alchemy} />
                ))}
            </div>
        </div>
    );
}

export default Blocks;