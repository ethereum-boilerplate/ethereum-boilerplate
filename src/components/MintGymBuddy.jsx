import React, { useState } from "react";
import {
    pageTitleStyle,
    descriptionStyle,
    BtnPrimary,
    BtnInfo,
} from "GlobalStyles";
import { getExplorer } from "helpers/networks";
import { TestGymBuddiesContract, MainChainID } from "../MglNftMetadata";
import { SelectOutlined } from "@ant-design/icons";
import { Button, Modal, Image } from "antd";
import {
    useMoralis,
    useWeb3ExecuteFunction
} from "react-moralis";
import Loader from "./Loader";
import gymBuddiesGif from "./assets/gifs/gym-buddies.gif";

const fallbackImg =
    "data:image/png;base64,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";


const mintPrice = 0.001;

const MintGymBuddyPage = () => {

    const { chainId, isAuthenticated, Moralis } = useMoralis();
    const userChainId = chainId;
    const contractProcessor = useWeb3ExecuteFunction();
    const contractAddress = TestGymBuddiesContract;
    const [loading, setLoading] = useState(false);

    const handleMintClick = async () => {
        if (!isAuthenticated) {
            alert(`
            You need to connect your wallet\n
            to be able to buy NFTs
            `);
            return;
        } else if (userChainId !== MainChainID) {
            alert(`
            Please switch to\n
            Avalanche Fuji Testnet Network\n
            to be able to buy NFTs
            `);
            return;
        }
        setLoading(true);
        const ops = {
            contractAddress,
            functionName: "requestNft",
            abi: [{
                "inputs": [],
                "name": "requestNft",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "requestId",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "payable",
                "type": "function"
            }],
            msgValue: Moralis.Units.ETH(mintPrice),
        }
        await contractProcessor.fetch({
            params: ops,
            onSuccess: async () => {
                setLoading(false);
                const secondsToGo = 5;
                const modal = Modal.success({
                    title: "Success",
                    content: <div>
                        <p>You minted your GymBuddy&nbsp;🎉</p>
                        <br />
                        <p>Check your GymBuddies tab</p>
                        <p>Bear in mind it may take a few minutes</p>
                        <p>until your newly minted GymBuddy appear</p>
                    </div>,
                })
            },
            onError: (error) => {
                console.error(error);
                setLoading(false);
                const secondsToGo = 5;
                const modal = Modal.error({
                    title: "Oops, something went worng",
                    content: error,
                })
            },
        })
    }

    if (loading) {
        return (<Loader />);
    } else {
        return (
            <div style={{
                marginTop: "3rem",
                textAlign: "center",
            }}>
                <section style={{
                    ...pageTitleStyle,
                }}>
                    Mint your GymBuddy
                </section>
                <section style={{
                    ...descriptionStyle,
                    padding: "1rem",
                }}>
                    <p style={{ padding: "1rem" }}>
                        Mint price:&nbsp;<span style={{
                            fontWeight: "500",
                            fontSize: "1.5rem",
                        }}>{mintPrice} AVAX</span> + network fee</p>
                </section>
                <section style={{
                    display: "grid",
                    justifyContent: "center",
                    alignContent: "center",
                }}>
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "2rem",
                    }}>
                        <Button
                            style={BtnInfo}
                            onClick={() =>
                                window.open(
                                    `${getExplorer(chainId)}address/${contractAddress}`,
                                    "_blank"
                                )
                            }
                        >
                            <SelectOutlined style={{ marginRight: "5px" }} />
                            View NFT Contract
                        </Button>
                        <Button
                            type="primary"
                            style={{
                                ...BtnPrimary,
                            }}
                            onClick={handleMintClick}
                        >
                            Mint
                        </Button>
                    </div>
                </section>
                <section style={{
                    marginTop: "4rem",
                    marginBottom: "6rem"
                }}>
                    <Image
                        preview={false}
                        src={gymBuddiesGif}
                        fallback={fallbackImg}
                        alt="" />
                </section>
            </div>
        )
    }
}

export default MintGymBuddyPage;

