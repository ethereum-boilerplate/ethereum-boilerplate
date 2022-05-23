import React, { useState } from "react";
import {
    pageTitleStyle,
    descriptionStyle,
    BtnPrimary,
} from "GlobalStyles";
import { getExplorer } from "helpers/networks";
import { SmileFilled } from "@ant-design/icons";
import { TestGymBuddiesContract, MainChainID } from "../MglNftMetadata";
import { SelectOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import {
    useMoralis,
    useWeb3ExecuteFunction
} from "react-moralis";
import Loader from "./Loader";

/**
 * TODO
 * this is very dummy implementation of random mint
 * replace with chainlink VRF
*/
////////////////////////////////////
let rngAttempts = 0;
const mintedGymBuddies = new Set();
const minGbId = 1;
const maxGbId = 100;
const getRandomGymBuddyIdHelper = () => {
    return Math.floor(Math.random() * (maxGbId - minGbId + 1)) + minGbId;
}
const getRandomGymBuddyId = () => {
    const rgGymBuddyId = getRandomGymBuddyIdHelper();
    if (rngAttempts > 100) return rgGymBuddyId;
    if (!mintedGymBuddies.has(rgGymBuddyId)) {
        rngAttempts = 0;
        mintedGymBuddies.add(rgGymBuddyId);
        return rgGymBuddyId;
    }
    rngAttempts += 1;
    return getRandomGymBuddyId();
}
////////////////////////////////////

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
        const gymBuddyId = getRandomGymBuddyId();
        const ops = {
            contractAddress,
            functionName: "createToken",
            abi: [{
                "inputs": [
                    {
                        "internalType": "uint32",
                        "name": "gbId",
                        "type": "uint32"
                    }
                ],
                "name": "createToken",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            }],
            params: {
                gbId: gymBuddyId,
            },
            // TODO: make smart contract payable
            // msgValue: Moralis.Units.ETH(mintPrice),
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
                        <p>Bear in mind it may take few minutes</p>
                        <p>until your newle minted GymBuddy appear</p>
                    </div>,
                })
                setTimeout(() => {
                    modal.destroy();
                }, secondsToGo * 1000)
            },
            onError: (error) => {
                console.error(error);
                setLoading(false);
                const secondsToGo = 5;
                const modal = Modal.error({
                    title: "Oops, something went worng",
                    content: error,
                })
                setTimeout(() => {
                    modal.destroy();
                }, secondsToGo * 1000)
            },
        })
    }

    if (loading) {
        return (<Loader />);
    } else {
        return (
            <div style={{
                textAlign: "center",
            }}>
                <div style={{
                    marginTop: "1rem",
                }}>
                    <div style={{
                        ...pageTitleStyle,
                    }}>Mint your GymBuddy <SmileFilled style={{ color: "#FFBE59" }} />
                    </div>
                    <div style={{
                        ...descriptionStyle,
                        padding: "1rem 0",
                    }}>
                        <div style={{ marginTop: "10px", padding: "0 10px" }}>
                            <a
                                style={{ color: "ivory" }}
                                href={`${getExplorer(chainId)}/address/${contractAddress}`}
                                target="_blank" rel="noreferrer"
                            >
                                <SelectOutlined style={{ marginRight: "5px" }} />
                                View GymBuddies NFT Contract on Explorer
                            </a>
                        </div>
                        <br />
                        <br />
                        <div>
                            Mint price: <b>{mintPrice} AVAX</b> + network fee
                        </div>
                    </div>
                    <br />
                    <br />
                    <Button
                        type="primary"
                        style={BtnPrimary}
                        onClick={handleMintClick}
                    >
                        Mint
                    </Button>
                    <br />
                    <br />
                    <br />
                    <br />
                </div>
            </div>
        )
    }
}

export default MintGymBuddyPage;

