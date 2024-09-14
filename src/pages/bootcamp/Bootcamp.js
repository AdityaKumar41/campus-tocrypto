import { Navigate, useParams } from "react-router-dom";
import GroupComponent2 from "../../bootcamp-com/GroupComponent2";
import Confetti from "../Confetti";
import "./Bootcamp.css";
// import { useEffect } from 'react';
const Bootcamp = () => {
  let { id } = useParams();
  let details;
  if (id === "1") {
    details = (
      <div className="bootcamp">
        <main className="rectangle-parent-pr">
          <div className="frame-child" />
          <Confetti />
          <GroupComponent2 />
          <img className="frame-item-boot" src="/avalanchebg.png" alt="" />
          <section className="registration-is-now-container">
            <h1>Description</h1>
            <p className="registration-is-now">
              Get ready for an electrifying 4-day Avalanche BootCamp at CUTM
              University, Bhubaneswar! This is your exclusive chance to advance
              into blockchain development and build real-world Dapps that will
              be deployed on Avalanche!
            </p>
            <p className="all-sessions-will">
              The first three days are packed with intense, hands-on training,
              preparing you with all the theoretical knowledge you need. But
              here’s the kicker – on day four, you'll put your skills to the
              test in a thrilling real-world challenge!
            </p>
            <p className="this-is-your">
              ​Seats are super limited, and they're going fast! Don’t miss out
              on being part of this one-of-a-kind experience. ​RSVP now before
              it’s too late! Location
            </p>
            <p className="bootcamp-structure">Location:</p>
            <p className="">
              Centurion University of Technology & Management, Bhubaneswar
              (CUTM) Ramachandrapur, Jatni, Bhubaneswar, Odisha 752050, India
            </p>
            {/* <p className="bootcamp-structure">​Bootcamp Structure:</p>
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
            </ul> */}
          </section>
        </main>
      </div>
    );
  } else if (id === "2") {
    details = (
      <div className="bootcamp">
        <main className="rectangle-parent-pr">
          <div className="frame-child" />

          <GroupComponent2 />
          <img className="frame-item-boot" src="/chainlinkbg.png" alt="" />
          <section className="registration-is-now-container-no">
            <h1>Description</h1>
            <p className="registration-is-now">No Description Yet.</p>
          </section>
        </main>
      </div>
    );
  } else {
    return <Navigate to="/404" />;
  }
  return details;
};

export default Bootcamp;
