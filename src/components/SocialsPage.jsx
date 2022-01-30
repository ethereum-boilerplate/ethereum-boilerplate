import {
    Discord,
    Telegram,
    Twitter,
    Newsletter
} from "../SocialLinksCfg";
import { Button } from 'antd';
import { BtnPrimary, BtnInfo, pageTitleStyle } from "../GlobalStyles";

const btnsPadding = "0.5rem";

export const SocialsLinks = () => {
    return (
        <>
            <div style={{
                padding: btnsPadding,
            }}>
                <Button style={{
                    ...BtnInfo,
                    backgroundColor: "#5562EA",
                    color: "#FFF",
                    width: "100%",
                }}>
                    <a href={Discord} target="_blank" class="button contact w-button">Join us on Discord</a>
                </Button>
            </div>
            <div style={{
                padding: btnsPadding,
            }}>
                <Button style={{
                    ...BtnInfo,
                    backgroundColor: "#30A9DD",
                    color: "#FFF",
                    width: "100%",
                }}>
                    <a href={Telegram} target="_blank" class="button contact w-button">Join us on Telegram</a>
                </Button>
            </div>
            <div style={{
                padding: btnsPadding,
            }}>
                <Button style={{
                    ...BtnInfo,
                    backgroundColor: "#1C9BF0",
                    color: "#FFF",
                    width: "100%",
                }}>
                    <a href={Twitter} target="_blank" class="button contact w-button">Join us on Twitter</a>
                </Button>
            </div>
            <div style={{
                padding: btnsPadding,
            }}>
                <Button style={{
                    ...BtnPrimary,
                    color: "#FFF",
                    width: "100%",
                }}>
                    <a href={Newsletter} target="_blank" class="button contact w-button">Sing up to newsletter</a>
                </Button>
            </div>
        </>
    );
}

export const SocialsComponent = () => {
    return (
        <div>
            <div style={{
                ...pageTitleStyle,
                paddingBottom: "2rem"
            }}>
                Join MetaGymLand community
            </div>
            <SocialsLinks />
        </div>
    );
}

const SocialsPage = () => {
    return (
        <div style={{
            display: "grid",
            placeItems: "center",
            minHeight: "70vh",
        }}>
            <SocialsComponent />
        </div >);
}

export default SocialsPage;
