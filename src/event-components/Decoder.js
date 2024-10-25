import "./Decoder.css";
const imgKoinX =
  "https://campustocrypto.s3.ap-south-1.amazonaws.com/source/koinx.svg";
const imgCutm =
  "https://campustocrypto.s3.ap-south-1.amazonaws.com/source/centurion.png";
const imgFusionWave =
  "https://campustocrypto.s3.ap-south-1.amazonaws.com/source/FusionWaveAI.png";
const imgBlockCation =
  "https://campustocrypto.s3.ap-south-1.amazonaws.com/source/blockcationlogo.png";
const imgFilemarket =
  "https://campustocrypto.s3.ap-south-1.amazonaws.com/source/filemarket.png";
const imgGramTarang =
  "https://campustocrypto.s3.ap-south-1.amazonaws.com/source/gramtarang.png";
const imgePolkdot =
  "https://campustocrypto.s3.ap-south-1.amazonaws.com/source/Polkadot_Logo.webp";
const imgweb3foundation =
  "https://campustocrypto.s3.ap-south-1.amazonaws.com/source/web3foundationorg.png";

const avalanche =
  "https://campustocrypto.s3.ap-south-1.amazonaws.com/source/avalanche+(1).png";
const Decoder = () => {
  const ourEvent = [
    {
      image:
        "https://campustocrypto.s3.ap-south-1.amazonaws.com/source/devikamital.jpeg",
      title:
        "Introductory Speech by Devika Mittal, Ava Labs Head India - Day 4",
      subtitle:
        "Devika Mittal, Head of Ava Labs India, delivered an inspiring introductory speech, sharing insights into Ava Labs' vision and the future of blockchain technology, setting a motivating tone for the day's sessions.",
      year: "2024",
      month: "SEP",
      date: "27",
      link: "https://www.campustocrypto.com",
    },
    {
      image:
        "https://campustocrypto.s3.ap-south-1.amazonaws.com/source/avalanchehack.jpeg",
      title: "24-Hour Hackathon with 230+ Participants - Day 3",
      subtitle:
        "Over 230 participants joined a thrilling 24-hour hackathon, showcasing creativity and innovation as they tackled real-world challenges and built impactful projects in a competitive, high-energy environment.",
      year: "2023",
      month: "SEP",
      date: "26",
      link: "https://www.campustocrypto.com",
    },
    {
      image:
        "https://campustocrypto.s3.ap-south-1.amazonaws.com/source/avalancheday2.jpeg",
      title: "Solidity Smart Contracts and L1 Deployment Workshop - Day 2",
      subtitle:
        "Participants delved into the fundamentals of Solidity smart contract development and learned how to deploy on L1 blockchains, gaining hands-on experience in building and deploying decentralized applications.",
      year: "2024",
      month: "SEP",
      date: "25",
      link: "https://www.campustocrypto.com",
    },
    {
      image:
        "https://campustocrypto.s3.ap-south-1.amazonaws.com/source/avalancheday1.jpeg",
      title:
        "Avalanche Workshop: Community Building and Fundamentals by Shriyash Pandey",
      subtitle:
        "Day one of the Avalanche Workshop, focused on fostering community engagement and understanding the Avalanche blockchain.",
      year: "2024",
      month: "SEP",
      date: "24",
      link: "https://www.campustocrypto.com",
    },
    {
      image:
        "https://campustocrypto.s3.ap-south-1.amazonaws.com/source/icp2.jpg",
      title: "ICP Blockchain Workshop by Crewshpear at CUTM Andhra Pradesh",
      subtitle:
        " Crewshpear hosted an ICP blockchain workshop at CUTM Andhra Pradesh, featuring practical sessions on Motoko contract deployment and project creation.",
      year: "2023",
      month: "OCT",
      date: "3",
      link: "https://www.campustocrypto.com",
    },

    {
      image:
        "https://campustocrypto.s3.ap-south-1.amazonaws.com/source/icpcrewspear.jpeg",
      title: "ICP Blockchain Workshop by Crewshpear at CUTM Bhubaneswar",
      subtitle:
        "Hosted by ICP Crewshpear at CUTM Bhubaneswar, this workshop provided hands-on learning in ICP blockchain, including contract deployment with Motoko and creating diverse projects.",
      year: "2024",
      month: "SEP",
      date: "10",
      link: "https://www.campustocrypto.com",
    },
    {
      image:
        "https://campustocrypto.s3.ap-south-1.amazonaws.com/source/ppolkadot.png",
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
        "https://campustocrypto.s3.ap-south-1.amazonaws.com/source/filemarket.JPG",
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
        "https://campustocrypto.s3.ap-south-1.amazonaws.com/source/Blockseblock.png",
      title: "BlockseBlock Hackathon:",
      subtitle:
        " A transformative experience for our students, fostering collective creativity, knowledge acquisition, and invaluable hands-on experience.",
      year: "2024",
      month: "FEB",
      date: "06",
      link: "https://www.campustocrypto.com",
    },
    {
      image:
        "https://campustocrypto.s3.ap-south-1.amazonaws.com/source/koinx.JPG",
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
        "https://campustocrypto.s3.ap-south-1.amazonaws.com/source/fusionwaveanitdas.png",
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
        "https://campustocrypto.s3.ap-south-1.amazonaws.com/source/nearprotocol.png",
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
              <img src={avalanche} alt="img" />
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
