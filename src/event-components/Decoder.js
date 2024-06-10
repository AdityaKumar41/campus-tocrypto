import "./Decoder.css";
const imgKoinX =
  "https://campustocrypto.nyc3.cdn.digitaloceanspaces.com/koinx.svg";
const imgCutm =
  "https://campustocrypto.nyc3.cdn.digitaloceanspaces.com/centurion.png";
const imgFusionWave =
  "https://campustocrypto.nyc3.cdn.digitaloceanspaces.com/FusionWaveAI.png";
const imgBlockCation =
  "https://campustocrypto.nyc3.cdn.digitaloceanspaces.com/blockcationlogo.png";
const imgFilemarket =
  "https://campustocrypto.nyc3.cdn.digitaloceanspaces.com/filemarket.png";
const imgGramTarang =
  "https://campustocrypto.nyc3.cdn.digitaloceanspaces.com/gramtarang.png";
const imgePolkdot =
  "https://campustocrypto.nyc3.cdn.digitaloceanspaces.com/Polkadot_Logo.webp";
const imgweb3foundation =
  "https://campustocrypto.nyc3.cdn.digitaloceanspaces.com/web3foundation.webp";
const Decoder = () => {
  const ourEvent = [
    {
      image:
        "https://campustocrypto.nyc3.cdn.digitaloceanspaces.com/ppolkadot.png",
      title: "India’s first university to host polkadot workshop, by C2C.",
      subtitle:
        "Our students got a deep understanding on Web3 Foundation and Polkadot Ecosystem.",
      year: "2024",
      month: "MAR",
      date: "14",
      link: "https://www.campustocrypto.com",
    },
    {
      image:
        "https://campustocrypto.nyc3.cdn.digitaloceanspaces.com/filemarket.JPG",
      title: "Usecases of decentralized storage on Filemarket.",
      subtitle:
        "Navigating Decentralized Data: Insights from the FileMarket Workshop",
      year: "2024",
      month: "FEB",
      date: "13",
      link: "https://www.campustocrypto.com",
    },
    {
      image:
        "https://campustocrypto.nyc3.cdn.digitaloceanspaces.com/Blockseblock.png",
      title: "BlockseBlock Hackathon:",
      subtitle:
        " A transformative experience for our students, fostering collective creativity, knowledge acquisition, and invaluable hands-on experience.",
      year: "2024",
      month: "FEB",
      date: "06",
      link: "https://www.campustocrypto.com",
    },
    {
      image: "https://campustocrypto.nyc3.cdn.digitaloceanspaces.com/koinx.JPG",
      title: "Web3 & Fintech event in Centurion University hosted by C2C",
      subtitle:
        "enriching our understanding Tokenization of asset and other transformative technologies.",
      year: "2024",
      month: "JAN",
      date: "14",
      link: "https://www.campustocrypto.com",
    },
    {
      image:
        "https://campustocrypto.nyc3.cdn.digitaloceanspaces.com/fusionwaveanitdas.png",
      title: "Campus to Crypto: Career Journeys in Blockchain & AI",
      subtitle:
        "Exploring Career Trajectories in Blockchain and Generative AI with FusionWave AI",
      year: "2024",
      month: "JAN",
      date: "12",
      link: "https://www.campustocrypto.com",
    },
    {
      image:
        "https://campustocrypto.nyc3.cdn.digitaloceanspaces.com/nearprotocol.png",
      title: "How to grow inside Web3 as an Noncoder.",
      subtitle: "Directly seated and inside for you to enjoy the show.",
      year: "2023",
      month: "JAN",
      date: "12",
      link: "https://www.campustocrypto.com",
    },
  ];
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
            {ourEvent.map((data, key) => {
              return (
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
                          <b className="apr">{data.year}</b>
                        </div>
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
                        <b className="wonder-girls-2010">{data.title}</b>
                        <div className="well-get-you">{data.subtitle}</div>
                      </div>
                      <div className="view-more">
                        <a href={data.link}>Watch here</a>
                      </div>
                    </div>
                  </div>
                </div>
              );
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
