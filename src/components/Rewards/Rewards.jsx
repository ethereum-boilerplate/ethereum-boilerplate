import {
    highlightTextColor,
    pageTitleStyle,
    pageTitle2Style,
    descriptionStyle,
    MBMT_TICKER,
} from "../../GlobalStyles";
import { useMoralis } from "react-moralis";

const mbmt = <span style={{ color: highlightTextColor }}>{MBMT_TICKER}</span>;
const mgl = <span style={{ color: "gold" }}>$MGL</span>;

const mbmtlong = <span style={{ color: "goldenrod" }}>{"<"}Meta Body Movement Token{">"}</span>;

const commingSoon = <span style={{ color: "chocolate" }}>Comming Soon 🚀</span>;
const colName = 'mbmtBalance';

const RewardsPage = () => {
    const { user } = useMoralis();
    const curXP = user && user.get && user.get(colName) ? user.get(colName) : 0;
    return (
        <div>
            <section
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gridGap: "10rem",
                    marginTop: "4rem",
                }}>
                <div>
                    <h1 style={{
                        ...pageTitleStyle,
                    }}>Stretch To Earn {mbmt}</h1>
                    <h2>Meta Body Movement Token</h2>
                    <div style={{ marginBottom: "2rem", }} />
                    <div style={{
                        flexBasis: "100%",
                    }} />
                    <div style={{
                        ...descriptionStyle,
                    }}>
                        <p>With {mbmtlong} you will be able to:</p>
                        <ul style={{
                            padding: "1.5rem",
                            listStyle: "square",
                        }}>
                            <li>Claim rewards like:
                                <ul style={{
                                    padding: "0.5rem 1.5rem",
                                    listStyle: "none",
                                }}>

                                    <li>NFTs</li>
                                    <li>Avatar upgrades</li>
                                    <li>More to come</li></ul>
                            </li>
                            <li>
                                Claim token to your wallet
                                &nbsp;{commingSoon}
                            </li>

                        </ul>
                    </div>
                    <div style={{
                        flexBasis: "100%",
                    }} />
                    <div
                        style={{
                            ...descriptionStyle,
                            backgroundColor: "aliceblue",
                            padding: "0.4rem 0rem",
                            borderRadius: "3px",
                            textAlign: "center",
                            color: "black"
                        }}>
                        <p>You will not be able to earn <b>$MBMT</b> with demo avatar</p>
                    </div>
                </div>
                <div>
                    <h1 style={{
                        ...pageTitleStyle,
                        textAlign: "center",
                    }}>Your current balance:
                    </h1>
                    <div style={{
                        ...pageTitleStyle,
                        textAlign: "center",
                    }}><span style={{
                        color: "gold",
                    }}>{curXP}</span>&nbsp;
                        {mbmt}
                    </div>
                </div>
            </section>
            <div style={{
                flexBasis: "100%",
            }} />
            <section style={{
                marginTop: "6rem",
                marginBottom: "2rem",
            }}>

                <div style={{
                    ...pageTitleStyle,
                    textAlign: "center",
                }}>
                    Meta Body Movement Token and MetaGymLand tokens economy
                </div>
                <div style={{
                    ...pageTitle2Style,
                    textAlign: "center",
                    marginBottom: "2rem",
                }}>
                    How will this all work?
                </div>
                <div style={{
                    ...descriptionStyle,
                    wordWrap: "break-word",
                }}>
                    The {mbmt} token will attempt to reflect the energy that you would feel after doing a workout
                    <br />
                    But in the virtual world
                    <br /><br />
                    How does energy after a workout or stretching usually works?<br />
                    It feels good after the workout, but you need to do them regularly otherwise it will go away
                    <br /><br />
                    {mbmt} will work in a similar way<br />
                    It will reflect the energy that you accumulated after the workout<br />
                    But not used and not maintained it will go away
                    <br /><br />
                    If you would like to claim other MetaGymLand digital assets with your {mbmt}<br />
                    they will be automatically burned<br />
                    <br />
                    This way {mbmt} will behave as an <span style={{
                        color: "chartreuse",
                    }}>
                        inflationary/deflationary algorithmic token</span>
                    <br /><br />
                    Once claiming youre earned {mbmt} into your wallet<br />
                    or to using {mbmt} to claim other MetaGymLand digital assets<br />
                    you will need to pay a small fee with {mgl} token
                    <br /><br />
                    {mgl} will be the MetaGymLand governance and platform token<br />
                </div>
            </section>
        </div>
    );
}

export default RewardsPage;
