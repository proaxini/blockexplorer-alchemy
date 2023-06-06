import { Alchemy, Network } from 'alchemy-sdk';
import { Routes, Route, Link } from 'react-router-dom';
import Blocks from './components/Blocks';
import Balance from './components/Balance';
import Nft from './components/Nft';


import './App.css';

// Refer to the README doc for more information about using API
// keys in client-side code. You should never do this in production
// level code.
const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

function App() {

  return (
    <>
      <div>
        <p>Navigation:</p>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/balance">Check wallet balance</Link>
            </li>
            <li>
              <Link to="/nft">NFTs</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Blocks alchemy={alchemy} />} />
        <Route path="/balance" element={<Balance alchemy={alchemy}/>} />
        <Route path="/nft" element={<Nft alchemy={alchemy}/>} />
      </Routes>
    </>
  );
}

export default App;
