import {
    Discord,
    Telegram,
    Twitter,
    TikTok,
    Newsletter
} from "../SocialLinksCfg";
import { Button } from 'antd';
import { BtnPrimary, BtnInfo, pageTitleStyle } from "../GlobalStyles";

const btnsPadding = "0.5rem";

const DiscordIcon = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={41.333}
        height={41.333}
        viewBox="0 0 31 31"
        {...props}
    >
        <path d="M7.4 5.4C4.1 6.9 1.8 11.5.5 19.1c-.5 3.6-.4 3.8 4.1 6l4.7 2.2 1.8-2.1c2.2-2.8 6.6-2.8 8.8 0l1.8 2.1 4.6-2.2c4.7-2.3 4.7-2.3 4.1-6.4-1.2-7.6-3.9-12.5-7.6-13.5-2.7-.8-3.5-.6-4.7.9-1.8 2.5-3.8 2.4-5.1-.1-1.2-2.3-1.5-2.4-5.6-.6zM12 6.9c0 .4-1.4 1.2-3.1 1.7-2.4.7-.8.9 6.6.9 7.4 0 9-.2 6.6-.9-3.4-1-4.2-2.6-1.2-2.6 4.2 0 8.1 6.4 8.1 13.3 0 3.3-2.3 5.6-5.7 5.7-3.5 0-3.6-1.7-.1-2.9 1.7-.6 2.9-1.3 2.6-1.6-.3-.3-1.7-.1-3.2.5-3.5 1.3-10.7 1.3-14.2 0-4-1.5-4.2-.3-.3 1.3 2.8 1.2 3.1 1.6 1.6 2.2-.9.4-3.1.2-4.7-.5-2.5-1-3-1.8-3-4.5C2 15 3.9 9.8 6.2 7.7 8.3 5.9 12 5.4 12 6.9z" />
        <path d="M8.7 14.4c-1 2.6.4 4.7 2.7 4.4 3-.4 3-5.2 0-5.6-1.2-.2-2.4.4-2.7 1.2zm3.9.7c.3.6.1 1.6-.5 2.2-.9.9-1.4.8-2.1-.3-.9-1.5-.4-3 1-3 .5 0 1.2.5 1.6 1.1zM17.4 14.5c-.9 2.3.3 4.5 2.5 4.5 2.1 0 3.3-2.2 2.5-4.5-.4-.8-1.5-1.5-2.5-1.5-1.1 0-2.2.7-2.5 1.5zm4 .3c.2.4.1 1.4-.4 2.2-.7 1.1-1.2 1.2-2.1.3-.6-.6-.8-1.6-.5-2.2.8-1.3 2.3-1.4 3-.3z" />
    </svg>
)


const TwitterIcon = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={37.333}
        height={37.333}
        viewBox="0 0 28 28"
        {...props}
    >
        <path d="M24 3c-.8.5-2.3.7-3.3.4C18.3 2.6 14 5.6 14 8c0 1-.4 2.1-.8 2.4-1.2.7-6.4-2.1-8.4-4.4C2.6 3.3 2 3.5 2 6.9c0 1.6-.5 3.1-1.1 3.3-.6.2-.3 1.3.9 2.8 1 1.4 1.7 3 1.5 3.6-.2.6.8 1.6 2.2 2.2C8.7 20.3 7.9 22 3.9 22-.7 22 .5 23.7 6 25c11.1 2.7 20-2.7 20-12 0-1.7.5-4 1-5.1.8-1.3.7-1.9 0-1.9s-.9-.8-.5-2c.7-2.2-.2-2.5-2.5-1zm.3 3.2c.7.6 1.1 3 .8 5.7-.6 8.8-7.9 14.3-16.8 12.6l-3.8-.7 2.8-1.4c3.4-1.8 3.4-3 .2-3.8C4.9 17.9 4 16 6.3 16c.6-.1 0-.8-1.5-1.6C2.1 13 1 11 2.9 11c.4 0 .6-1.2.3-2.8l-.5-2.7 2.4 2.2c2.3 2.1 6.9 4.3 9 4.3.5 0 .9-1 .9-2.2 0-3.3 3-6 5.8-5.3 1.3.3 2.9 1.1 3.5 1.7z" />
    </svg>
)


const TelegramIcon = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={37.333}
        height={37.333}
        viewBox="0 0 28 28"
        {...props}
    >
        <path d="M13.2 6.4C6.4 8.7.8 11 .8 11.5c0 .6 1.5 1.8 3.4 2.7 3.1 1.5 3.7 2.3 4.2 6.3l.7 4.6 3.2-2 3.2-2 2.7 2.6c1.7 1.6 3.2 2.3 3.7 1.7.7-.8 4.6-15.8 5.3-20.8.2-1-.1-2-.7-2.2-.5-.1-6.5 1.7-13.3 4zm10.5 9.8L21.5 25l-4.3-3.8-4.3-3.7 4.1-4.8c2.3-2.6 3.8-4.7 3.3-4.7-.4 0-3.5 1.6-6.7 3.5-5.7 3.2-6.1 3.3-8.9 1.9-1.6-.9-2.7-1.8-2.4-2 .2-.2 5.5-2.2 11.8-4.3 13.5-4.5 13.2-4.8 9.6 9.1zm-10-1.4c-1.5 1.5-2.7 3.3-2.7 3.9 0 .7-.4 1.5-1 1.8-.6.4-1-.6-1-2.4 0-2.3.7-3.4 2.8-4.5 4.2-2.3 4.8-1.9 1.9 1.2zm-.6 6.5c-1.3 1.3-2.6.3-1.6-1.2.3-.6 1.1-.8 1.7-.5.6.4.6 1-.1 1.7z" />
    </svg>
)

const TikTokIcon = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={37.333}
        height={37.333}
        viewBox="0 0 28 28"
        {...props}
    >
        <path d="M13.8 10.7c-.3 10.1-.4 10.8-2.4 11.1-1.1.2-2.6-.3-3.3-1.1-1.5-1.9-.4-4.7 2-4.7 1.5 0 1.9-.7 1.9-3.1 0-2.9-.2-3.1-2.7-2.5-1.6.4-3.8 1.8-5 3.2-5.9 6.6.8 16.2 9.4 13.3 4.2-1.4 5.3-3.4 5.3-10.4v-5.6l3.5.7c3.2.6 3.5.4 3.5-1.9 0-1.6-.7-2.6-2-3-1.1-.3-2.8-1.9-3.7-3.6-1.2-2-2.6-3.1-4-3.1-2.1 0-2.2.4-2.5 10.7zM19 3.5c.5 1.4 2.1 3 3.5 3.7C23.9 7.8 25 9 25 9.8c0 1.4-1.3 1.3-5.2-.3-1.6-.6-1.8 0-1.8 5.7 0 9.6-4.3 13.8-10.9 10.4-5.8-3.1-5.5-10.2.6-13.4 2.9-1.6 3.3-1.5 3.3.8 0 1.1-.7 2-1.5 2s-1.9.9-2.5 2c-1.5 2.7.4 6 3.3 6 4 0 4.7-1.8 4.7-12.2 0-8.1.3-9.8 1.5-9.8.9 0 2 1.1 2.5 2.5z" />
    </svg>
)

export const SocialsLinks = () => {
    return (
        <>
            <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr 1fr",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <div style={{
                    display: "grid",
                    justifyContent: "center",
                }}>
                    <a href={Discord} target="_blank" rel="noreferrer">
                        <DiscordIcon />
                    </a>
                </div>
                <div style={{
                    display: "grid",
                    justifyContent: "center",
                }}>
                    <a href={Telegram} target="_blank" rel="noreferrer">
                        <TelegramIcon />
                    </a>
                </div>
                <div style={{
                    display: "grid",
                    justifyContent: "center",
                }}>
                    <a href={Twitter} target="_blank" rel="noreferrer">
                        <TwitterIcon />
                    </a>
                </div>
                <div style={{
                    display: "grid",
                    justifyContent: "center",
                }}>
                    <a href={TikTok} target="_blank" rel="noreferrer">
                        <TikTokIcon />
                    </a>
                </div>

            </div>
            <div style={{
                marginTop: "1rem",
                display: "grid",
                justifyContent: "center",
            }}>
                <div style={{
                    padding: btnsPadding,
                }}>
                    <Button style={{
                        ...BtnPrimary,

                    }}>
                        <a href={Newsletter} target="_blank" rel="noreferrer">
                            Sing up to newsletter                        </a>
                    </Button>
                </div>
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
