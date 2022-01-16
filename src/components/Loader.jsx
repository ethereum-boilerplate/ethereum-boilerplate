import { Spin } from 'antd';
import { MGLSmallLogo } from 'Logos';

const mglLogo = <div style={{
    padding: "1rem",
}}>
    <MGLSmallLogo
        width={"25"}
        height={"25"}
        viewBox={"0 0 16 16"}
    />
</div>

const Loader = () => {
    return (
        <div style={{
            display: "flex",
            // flexDirection: "column",
            marginTop: "10%",
            justifyContent: "center",
            width: "50rem",
        }}>

            <div>
                <Spin size="large" tip={mglLogo} />
            </div>
        </div >
    );
}

export default Loader;
