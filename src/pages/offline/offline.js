import ParentFrame from "../../components/ParentFrame";
import "./offline.css";

const offline = () => {
  return (
    <div className="desktop-3">
      <div className="desktop-frame">
        <div className="ellipse-shape" />
        <div className="wide-screen-offline">
          <img className="vector-arrow-icon" alt="" src="/vector-arrow.svg" />
          <ParentFrame />
        </div>
      </div>
    </div>
  );
};

export default offline;
