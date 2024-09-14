import FrameComponent1 from "../../event-components/FrameComponent1";
import FrameComponent from "../../event-components/FrameComponent";
import Decoder from "../../event-components/Decoder";
import ControlUnit from "../../event-components/ControlUnit";
import "./event.css";
const event = () => {
  return (
    <div className="page">
      <FrameComponent1 />
      <FrameComponent/>
      <section className="validator">
        <Decoder />
        <ControlUnit />
      </section>
    </div>
  );
};

export default event;
