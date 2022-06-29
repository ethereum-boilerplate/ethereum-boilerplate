import { Spin } from "antd";
import { MGLSmallLogo } from "Logos";

const mglLogo = (
  <div
    style={{
      padding: "1rem",
    }}
  >
    <MGLSmallLogo />
  </div>
);

const Loader = ({
  style = {
    display: "grid",
    placeItems: "center",
    minHeight: "80vh",
  },
}) => {
  return (
    <div style={style}>
      <div>
        <Spin size="large" tip={mglLogo} />
      </div>
    </div>
  );
};

export default Loader;
