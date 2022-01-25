import {
    highlightTextColor,
    pageTitleStyle,
    descriptionStyle
} from "../../GlobalStyles";
import { AvaxLogo } from "../Chains/Logos";

const ConnectWalletWarn = () => {
    return (
        <div>
            <div style={{
                marginTop: "4rem",
                marginBottom: "6rem",
            }}>
                <h1 style={{
                    ...pageTitleStyle,
                }}>
                    Please connect your wallet
                </h1>
                <p style={{
                    ...descriptionStyle,
                }}>To see your&nbsp;
                    <span style={{ color: highlightTextColor }}>
                        MetaGymLAnd NFTs
                    </span>
                </p>
            </div>
        </div>
    )
}

const UseCorrectNetworkWarn = () => {
    return (
        <div>
            <div style={{
                marginTop: "4rem",
                textAlign: "center",
                marginBottom: "6rem",
            }}>
                <h1 style={{
                    ...pageTitleStyle,
                }}>
                    Please switch to
                </h1>
                <h1 style={{
                    ...pageTitleStyle,
                }}>
                    Avalanche Fuji Testnet Network
                </h1>
                <div style={{
                    margin: "1rem",
                }}>
                    <AvaxLogo
                        width={"60"}
                        height={"60"}
                    />
                </div>
                <p style={{
                    ...descriptionStyle,
                }}>To see your&nbsp;
                    <span style={{ color: highlightTextColor }}>
                        MetaGymLAnd NFTs
                    </span>
                </p>
            </div>
        </div>
    )
}

export {
    ConnectWalletWarn,
    UseCorrectNetworkWarn,
}
