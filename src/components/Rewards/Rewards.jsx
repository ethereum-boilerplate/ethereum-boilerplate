import {
    pageTitleStyle,
    pageTitle2Style,
    pageTitle3Style,
    descriptionStyle,
    MBMT_TICKER,
    activeColor,
} from "../../GlobalStyles";
import card from "./card.png";
import dividerpng from "./divider.png";
import { useMoralis } from "react-moralis";

const colName = 'mbmtBalance';
const honeyColor = "#F8B60A";

const mbmt = <span style={{ color: activeColor }}>{MBMT_TICKER}</span>;
const mbmtWhite = <span style={{ color: "#FFF" }}>{MBMT_TICKER}</span>;
const mgl = <span style={{ color: activeColor }}>$MGL</span>;
const mbmtlong = <span style={{ color: honeyColor }}>Meta Body Movement Token</span>;
const commingSoon = <span style={{}}>Comming Soon 🚀</span>;
const borderRadius = "3rem";

const divider = (
    <div style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "3rem",
        alignItems: "center",
        justifyItems: "center",
    }}>
        <img src={dividerpng} alt="divider" />
    </div>);

const activeBgStyle = {
    backgroundColor: activeColor,
    borderRadius: borderRadius,
    padding: "0.2rem",
    display: "flex",
    alignItems: "center",
    justifyItems: "center",
    justifyContent: "center",
    textAlign: "center",
    whiteSpace: "nowrap",
}

const RewardsPage = () => {
    const { user } = useMoralis();
    const mbmtBalance = user && user.get && user.get(colName) ? user.get(colName) : 0;
    return (
        <div style={{
            marginTop: "1rem",
        }}>
            <section
                style={{
                    display: "grid",
                    gridTemplateColumns: "50% 50%",
                    gridGap: "1rem",
                    padding: "0rem 1rem",
                }}>
                <div style={{
                    padding: "1rem",
                }}>
                    <div>
                        <h1 style={{
                            ...pageTitleStyle,
                        }}>Stretch To Earn&nbsp;
                            <span style={{ color: honeyColor }}>
                                {MBMT_TICKER}
                            </span>
                        </h1>
                        <h2>Meta Body Movement Token</h2>
                        <div style={{ marginBottom: "2rem", }} />
                    </div>
                    <div style={{
                        ...pageTitle3Style,
                    }}>
                        With {mbmtlong} you will be able to:
                    </div>
                    <div style={{
                        ...descriptionStyle,
                    }}>
                        <ul style={{
                            padding: "1rem",
                            listStyle: "square",
                        }}>
                            <li>Claim rewards like:
                                <ul style={{
                                    padding: "1rem",
                                    display: "grid",
                                    gridTemplateColumns: "1fr 2fr 2fr",
                                    gridGap: "1rem",
                                    textAlign: "center",
                                    listStyle: "none",
                                }}>
                                    <li style={activeBgStyle}>NFTs</li>
                                    <li style={activeBgStyle}>Avatar upgrades</li>
                                    <li style={activeBgStyle}>More to come</li>
                                </ul>
                            </li>
                            <li>
                                Claim token to your wallet
                                &nbsp;{commingSoon}
                            </li>

                        </ul>
                    </div>
                    <div>
                        <p style={{
                            ...descriptionStyle,
                            backgroundColor: "aliceblue",
                            padding: "0.4rem 1rem",
                            borderRadius: borderRadius,
                            textAlign: "center",
                            color: "black",
                            display: "table-cell",
                            whiteSpace: "nowrap",
                        }}>
                            You will not be able to earn <b>$MBMT</b> with demo avatar
                        </p>
                    </div>
                </div>
                <div
                    style={{
                        display: "grid",
                        gridTemplateRows: "1fr",
                        gridTemplateColumns: "1fr",
                        gridTemplateAreas: "overlap",
                    }}
                >
                    <div style={{
                        gridArea: "overlap",
                        alignSelf: "center",
                        justifySelf: "center",
                        marginTop: "-3rem",
                    }}>
                        <img
                            style={{

                            }}
                            src={card} alt="" />

                    </div>
                    <div style={{
                        gridArea: "overlap",
                        alignSelf: "center",
                        justifySelf: "center",
                        textAlign: "center",
                        marginTop: "-11rem",
                    }}>
                        <h1 style={{
                            ...pageTitle3Style,
                            padding: "1rem",
                        }}>Your current balance:
                        </h1>
                        <div style={{
                            ...pageTitle2Style,
                        }}><span style={{
                            color: honeyColor,
                        }}>
                                {mbmtBalance.toFixed(4)}
                            </span>
                            &nbsp;
                            {mbmtWhite}
                        </div>
                    </div>
                </div>
            </section>
            {/* desc */}
            <section style={{
                marginTop: "3rem",
                // marginBottom: "2rem",
                color: "black",
                backgroundColor: "white",
                padding: "3rem 0rem",
                width: "100vw",
            }}>
                <div style={{
                    ...pageTitle2Style,
                    textAlign: "center",
                }}>
                    Meta Body Movement Token and MetaGymLand tokens economy
                </div>
                <div style={{
                    ...pageTitle3Style,
                    textAlign: "center",
                    marginBottom: "2rem",
                }}>
                    How will this all work?
                </div>
                <div style={{
                    ...descriptionStyle,
                    textAlign: "center",
                }}>
                    The {mbmt} token will attempt to reflect the energy that you would feel after doing a workout
                    <br />
                    But in the virtual world
                    {divider}
                    How does energy after a workout or stretching usually works?<br />
                    It feels good after the workout, but you need to do them regularly otherwise it will go away
                    {divider}
                    {mbmt} will work in a similar way<br />
                    It will reflect the energy that you accumulated after the workout<br />
                    But not used and not maintained it will go away
                    {divider}
                    If you would like to claim other MetaGymLand digital assets with your {mbmt}<br />
                    they will be automatically burned
                    {divider}
                    This way {mbmt} will behave as an <span style={{
                        fontWeight: 700,
                    }}>
                        inflationary/deflationary algorithmic token
                    </span>
                    {divider}
                    Once claiming youre earned {mbmt} into your wallet<br />
                    or to using {mbmt} to claim other MetaGymLand digital assets<br />
                    you will need to pay a small fee with {mgl} token
                    {divider}
                    {mgl} will be the MetaGymLand governance and platform token<br />
                </div>
            </section>
        </div>
    );
}

export default RewardsPage;
