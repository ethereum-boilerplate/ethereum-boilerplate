import {
    pageTitle2Style,
    pageTitle3Style,
    descriptionStyle,
    pageTitle4Style,
    MBMT_TICKER,
    activeColor,
    BtnInfo,
    paddingLRContent,
} from "../../GlobalStyles";
import card from "./card.png";
import dividerpng from "./divider.png";
import { useMoralis } from "react-moralis";
import { Button, Popover } from 'antd';

const colName = 'mbmtBalance';
const honeyColor = "#F8B60A";

const mbmt = <span style={{ color: activeColor, fontWeight: 550, }}>{MBMT_TICKER}</span>;
const mbmtWhite = <span style={{ color: "#FFF" }}>{MBMT_TICKER}</span>;
const mgl = <span style={{ color: "blue", fontWeight: 550, }}>$MGL</span>;
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
    padding: "0.4rem",
    fontWeight: "450",
    whiteSpace: "nowrap",
}

const RewardsPage = () => {
    const { user } = useMoralis();
    const mbmtBalance = user && user.get && user.get(colName) ? user.get(colName) : 0;
    return (
        <div style={{
            marginTop: "1rem",
        }}>
            <section style={{
                ...paddingLRContent,
            }}>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "50% 50%",
                        ...paddingLRContent,
                    }}>
                    {/* text */}
                    <div style={{
    
                    }}>
                        <div>
                            <h1 style={{
                                ...pageTitle2Style,
                                padding: "0.5rem 0rem",
                            }}>Stretch To Earn&nbsp;
                                <span style={{ color: honeyColor }}>
                                    {MBMT_TICKER}
                                </span>
                            </h1>
                            <div style={{
                                ...descriptionStyle,
                            }}>Meta Body Movement Token</div>
                            <div style={{ marginBottom: "2rem", }} />
                        </div>
                        <div style={{
                            ...pageTitle4Style,
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
                                    <div style={{
                                        padding: "1rem 0rem",
                                    }}>
                                        <span style={{
                                            ...activeBgStyle,
                                            marginRight: "0.5rem",
                                        }}>NFTs</span>
                                        <span style={{
                                            ...activeBgStyle,
                                            marginRight: "0.5rem",
                                        }}>Avatar upgrades</span>
                                        <span style={{
                                            ...activeBgStyle,
                                        }}>More to come</span>
                                    </div>
                                </li>
                                <li>
                                    Claim <b>$MBMT</b> token to your wallet&nbsp;{commingSoon}
                                </li>

                            </ul>
                        </div>
                        <div>
                            <span style={{
                                ...descriptionStyle,
                                backgroundColor: "aliceblue",
                                padding: "0.4rem 1rem",
                                borderRadius: borderRadius,
                                textAlign: "center",
                                color: "black",
                                whiteSpace: "nowrap",
                            }}>
                                You will not be able to earn <b>$MBMT</b> with demo avatar
                            </span>
                        </div>
                    </div>
                    {/* image */}
                    <div
                        style={{
                            display: "grid",
                            gridTemplateRows: "1fr",
                            gridTemplateColumns: "1fr",
                            gridTemplateAreas: "overlap",
                            placeSelf: "start",
                        }}
                    >
                        <div style={{
                            gridArea: "overlap",
                            alignSelf: "center",
                            marginTop: "-2.4rem",
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
                            marginTop: "-6rem",
                        }}>
                            <div style={{
                                ...pageTitle3Style,
                            }}>
                                <div>Your current balance:</div>
                                <div><span style={{
                                    color: honeyColor,
                                }}>
                                    {mbmtBalance.toFixed(4)}
                                </span>
                                    &nbsp;
                                    {mbmtWhite}
                                </div>
                                <div style={{
                                    padding: "1.5%",
                                }}>
                                    <Popover

                                        placement="bottom"
                                        title={
                                            <div style={{
                                                textAlign: "center",
                                                padding: "2rem",
                                                ...pageTitle3Style
                                            }}>{commingSoon}</div>
                                        } content={
                                            <div style={{
                                                textAlign: "center",
                                                padding: "4rem",
                                                ...descriptionStyle
                                            }}>
                                                <div>Join our social channels</div>
                                                <div> to stay tuned:</div>
                                                <div>...</div>
                                            </div>
                                        } trigger="click">
                                        <Button style={{
                                            ...BtnInfo,
                                            width: "auto",
                                        }}>
                                            Claim
                                        </Button>
                                    </Popover>

                                </div>
                            </div>
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
                // width: "100vw",
            }}>
                <div style={{
                    ...pageTitle2Style,
                    textAlign: "center",
                }}>
                    Meta Body Movement Token and MetaGymLand tokens ecosystem
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
                    Once claiming other MetaGymLand digital assets with your {mbmt}<br />
                    {mbmt} tokens used in claiming transaction will be automatically burned
                    {divider}
                    This way {mbmt} will behave as an <span style={{
                        fontWeight: 700,
                    }}>
                        inflationary/deflationary algorithmic token
                    </span>
                    {divider}
                    Once claiming youre earned {mbmt} into your wallet<br />
                    or using {mbmt} to claim other MetaGymLand digital assets<br />
                    you will need to pay a small fee with {mgl} token
                    {divider}
                    {mgl} will be the MetaGymLand governance and platform token<br />
                </div>
            </section>
        </div>
    );
}

export default RewardsPage;
