import "./ControlUnit.css";
const joinLink = "/";
const ControlUnit = () => {
  return (
    <div className="control-unit">
      <div className="signal-processor">
        <div className="logging-system" />
        <div className="status-monitor">
          <div className="data-transformer">
            <div className="trigger-manager">
              <div className="connection-builder">
                <div className="data-splitter">
                  <div className="filter-chain">
                    <div className="error-collector">
                      <div className="email-reimagined">Be a part of our vibrant </div>
                      <div className="message-serializer">
                        <div className="available-today">community Join today!</div>
                      </div>
                    </div>
                    <div className="resource-requestor">
                      <div className="command-executor">
                        <button className="link-text-base1">
                          <div className="contact-us"><a href={joinLink}>Join Us</a></div>
                          <img className="icon1" alt="" src="/icon.svg" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  className="connection-builder-child"
                  loading="lazy"
                  alt=""
                  src="/group-52.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="task-monitor">
        <div className="event-forwarder" />
      </div>
    </div>
  );
};

export default ControlUnit;
