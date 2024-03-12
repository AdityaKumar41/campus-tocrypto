import "./ParentFrame.css";

const ParentFrame = () => {
  return (
    <div className="parent-frame1">
      <div className="inner-vector">
        <img
          className="text-label-icon"
          loading="lazy"
          alt=""
          src="/vector-1.svg"
        />
      </div>
      <div className="text-label">
        <div className="youre-offline">You’re offline</div>
      </div>
      <div className="please-connect-to">
        Please connect to the internet and try again.
      </div>
      <div className="parent-frame2">
        <button className="vector-arrow">
          <img className="inner-frame-icon" alt="" src="/vector-2.svg" />
          <div className="text-label1">
            <div className="retry">Retry</div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ParentFrame;
