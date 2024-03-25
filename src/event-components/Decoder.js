
import "./Decoder.css";
const imgKoinX = "https://campus-crypto.s3.eu-north-1.amazonaws.com/ICONS/koinx.webp";
const imgCutm = "https://campus-crypto.s3.eu-north-1.amazonaws.com/ICONS/cutm+logo.png";
const imgFusionWave = "https://campus-crypto.s3.eu-north-1.amazonaws.com/ICONS/FusionWaveAI.png";
const imgBlockCation = "https://campus-crypto.s3.eu-north-1.amazonaws.com/ICONS/blockcation_logo.png";
const imgFilemarket = "https://campus-crypto.s3.eu-north-1.amazonaws.com/ICONS/filemarket.png";
const imgGramTarang = "https://campus-crypto.s3.eu-north-1.amazonaws.com/ICONS/logo.png";
const imgePolkdot = "https://campus-crypto.s3.eu-north-1.amazonaws.com/Polkadot_Logo.webp";
const imgweb3foundation = "https://campus-crypto.s3.eu-north-1.amazonaws.com/web3-foundation.png";
const Decoder = () => {
  const ourEvent = [
    {
      image: "https://campus-crypto.s3.eu-north-1.amazonaws.com/event/polkadot.png",
      title: "India’s first university to host polkadot workshop, by C2C.",
      subtitle: "Our students got a deep understanding on Web3 Foundation and Polkadot Ecosystem.",
      month: "MAR",
      date: "14",
      link: "https://www.campustocrypto.com"
    },
    {
      image: "https://campus-crypto.s3.eu-north-1.amazonaws.com/event/filemarket.png",
      title: "Usecases or decentralize storage on Filemarket.",
      subtitle: "Navigating Decentralized Data: Insights from the FileMarket Workshop",
      month: "APR",
      date: "14",
      link: "https://www.campustocrypto.com"

    },
    {
      image: "https://campus-crypto.s3.eu-north-1.amazonaws.com/event/blocktion.png",
      title: "BlockseBlock Hackathon:",
      subtitle: " A transformative experience for our students, fostering collective creativity, knowledge acquisition, and invaluable hands-on experience.",
      month: "APR",
      date: "14",
      link: "https://www.campustocrypto.com"

    },
    {
      image: "https://campus-crypto.s3.eu-north-1.amazonaws.com/event/koinx.png",
      title: "Web3 & Fintech event in Centurion University hosted by C2C",
      subtitle: "enriching our understanding Tokenization of asset and other transformative technologies.",
      month: "APR",
      date: "14",
      link: "https://www.campustocrypto.com"

    },
    {
      image: "https://campus-crypto.s3.eu-north-1.amazonaws.com/event/fusionwaveAi.png",
      title: "Campus to Crypto: Career Journeys in Blockchain & AI",
      subtitle: "Exploring Career Trajectories in Blockchain and Generative AI with FusionWave AI",
      month: "APR",
      date: "14",
      link: "https://www.campustocrypto.com"

    },{
      image: "https://campus-crypto.s3.eu-north-1.amazonaws.com/event/nearprotocol.jpg",
      title: "How to grow inside Web3 as an Noncoder.",
      subtitle: "Directly seated and inside for you to enjoy the show.",
      month: "APR",
      date: "14",
      link: "https://www.campustocrypto.com"

    }
  ]
  return (
    <div className="decoder">
      <div className="encoder">
        <div className="queue-manager" />
      </div>
      <div className="stack-manager">
        <div className="tree-builder">
        <div className="section3-tree">
          <div className="section3-down-tree">
            <img src={imgCutm} alt="img" />
            <img src={imgGramTarang} alt="img" />
            <img src={imgePolkdot} alt="imgpol" />
            <img src={imgweb3foundation} alt="web3img" />
            <img src={imgFilemarket} alt="img" />
            <img src={imgKoinX} alt="img" />
            <img src={imgFusionWave} alt="img" />
            <img src={imgBlockCation} alt="img" />
          </div>
        </div>
        </div>
        <div className="comparator">
          <h1 className="our-events">
            <span>Our</span>
            <span className="span1">{` `}</span>
            <span className="events1">Events</span>
          </h1>
          <div className="frame-parent4">
          {ourEvent.map((data,key)=>{
            return(
              <div className="rectangle-container" key={key}>
            <img
              className="frame-child2"
              loading="lazy"
              alt=""
              src={data.image}
            />
            <div className="rectangle-parent1">
              {/* <div className="rectangle-div"></div> */}
                <div className="frame-wrapper1">
                  <div className="frame-parent1">
                    <div className="apr-wrapper">
                      <b className="apr">{data.month}</b>
                    </div>
                    <div className="wrapper">
                      <b className="b">{data.date}</b>
                    </div>
                  </div>
                </div>
              
              <div className="frame-parent2">
                <div className="wonder-girls-2010-wonder-girls-parent">
                  <b className="wonder-girls-2010">
                    {data.title}
                  </b>
                  <div className="well-get-you">
                   {data.subtitle}
                  </div>
                </div>
                <div className="view-more"><a href={data.link}>Watch here</a></div>
              </div>
            </div>
          </div>
            )
          })}
          </div>
          <div className="signal-router">
                  <button className="group-button">
                    <div className="frame-child11" />
                    <b className="load-more">Load More</b>
                  </button>
                </div>
        </div>
      </div>
    </div>
  );
};

export default Decoder;
