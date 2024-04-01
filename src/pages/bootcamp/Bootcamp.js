import { Navigate, useParams } from 'react-router-dom';
import GroupComponent2 from "../../bootcamp-com/GroupComponent2";
import Confetti from '../Confetti';
import "./Bootcamp.css";
// import { useEffect } from 'react';
const Bootcamp = () => {
  let { id } = useParams();
  let details;
  if(id==='1'){
    details = (
      <div className="bootcamp">
      <main className="rectangle-parent-pr">
        <div className="frame-child" />
        <Confetti/>
        <GroupComponent2/>
        <img className="frame-item-boot" src="/chainlinkbg.png" alt="" />
        <section className="registration-is-now-container">
          <h1>Description</h1>
          <p className="registration-is-now">
            ​Registration is now open for the Smart Contracts 2024 Bootcamp for
            Developers!Dive into smart contract development with our immersive
            2 weeks Smart Contract Developer Bootcamp, delivered online directly
            to you. Regardless of your experience level, from blockchain
            enthusiasts to seasoned Web3 developers, you'll gain hands-on
            experience in building, deploying, and executing smart contracts,
            exploring DeFi protocols, gaming applications, and the latest in
            Web3.
          </p>
          <p className="all-sessions-will">
            ​All sessions will be led by Chainlink developer advocates and
            experts - all successful smart contract developers with a number of
            accomplished projects to their names.
          </p>
          <p className="this-is-your">
            ​This is your chance to join the blockchain industry! Spaces are
            limited. Reserve your spot today! Please note: If your circumstances
            change and you can no longer attend, please cancel your
            participation so your colleagues on the waiting list can attend the
            Bootcamp.
          </p>
          <p className="bootcamp-structure">​Bootcamp Structure:</p>
          <ul className="duration-2-weeks-sessions">
            <li className="duration-2-weeks">​​​Duration: 2 weeks</li>
            <li className="sessions-10-2">​​​Sessions: 10 (2 hours each)</li>
            <li className="cost-free">​​​Cost: Free</li>
            <li className="language-english">​​​Language: English</li>
          </ul>
          <p className="what-you-will">​What You Will Learn:</p>
          <ul className="solidity-fundamentals-blockch">
            <li className="solidity-fundamentals-blockch1">
              ​Solidity fundamentals, blockchain concepts, and wallet
              management.
            </li>
            <li className="creating-erc20-tokens">
              ​Creating ERC20 Tokens and utilizing Chainlink Data Feeds.
            </li>
            <li>
              ​Developing cross-chain tokens with Chainlink CCIP and more.
            </li>
          </ul>
        </section>
      </main>
    </div>
    );
  }else if(id === '2'){
    details = (
      <div className="bootcamp">
      <main className="rectangle-parent-pr">
        <div className="frame-child" />
        
        <GroupComponent2/>
        <img className="frame-item-boot" src="/chainlinkbg.png" alt="" />
        <section className="registration-is-now-container-no">
          <h1>Description</h1>
          <p className="registration-is-now">
            No Description Yet.
            </p>
        </section>
      </main>
    </div>
    );
  }else{
    return <Navigate to="/404" />;
  }
  return details;
};

export default Bootcamp;
