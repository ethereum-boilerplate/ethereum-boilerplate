import { Button, Image, List, Alert, } from "antd";
import { SelectOutlined, HeartFilled } from "@ant-design/icons";
import { getExplorer } from "helpers/networks";
import {
    mainFontColor,
    mainBgColor,
    pageTitle2Style,
    pageTitleStyle,
    descriptionStyle,
} from "../GlobalStyles";
import { useNFTMetadata } from "hooks/useNFTMetadata";
import { MainChainID, TestGymBuddiesContract } from "../MglNftMetadata";
import Loader from "./Loader";
import { useParams } from 'react-router';
import { LeftOutlined } from "@ant-design/icons";

const fallbackImg =
    "data:image/png;base64,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";

const resolveLink = (url) => {
    if (!url || !url.includes("ipfs://")) return url;
    return url.replace("ipfs://", "https://nftstorage.link/ipfs/");
};


function GymBuddyDetails() {
    // eslint-disable-next-line no-unused-vars
    const chainId = MainChainID;
    const { address, id } = useParams();

    const options = {
        address: address,
        token_id: id,
        chain: chainId,
    };

    const traitTypeToStyle = (trait_type) => {
        if (trait_type === "name") {
            return {
                color: "#408CFD",
            }
        }
        if (trait_type === "level") {
            return {
                color: "#FFA149",
            }
        }
        if (["endurance", "sweatiness", "strength"].includes(trait_type)) {
            return {
                color: "#FF74A6",
            }
        }
        return {}
    }

    const mapValue = (v) => {
        const str = new String(v).replace("_", " ")
        return str.charAt(0).toUpperCase() + str.slice(1)
    }

    const displayAttributes = (attr) => {
        const attrSorted = attr.sort((a, _) => {
            if (a.trait_type === "name" || a.trait_type === "level") {
                return -1;
            }
            return 1;
        })
        return (<List
            dataSource={attrSorted}
            renderItem={a => {
                const styles = traitTypeToStyle(a.trait_type)
                const type = mapValue(a.trait_type);
                const value = mapValue(a.value);
                return (
                    <List.Item
                        style={{
                            ...descriptionStyle,
                            ...styles,
                            textAlign: "left"
                        }}
                    >
                        {type}:&nbsp;
                        <b>{value}</b>
                    </List.Item>
                )
            }}
        />)
    }


    const fixMoralisTokenUri = (nft) => {
        if (!nft.token_uri) return "";
        return nft.token_uri.replace("https://ipfs.moralis.io:2053/ipfs/", "ipfs://");
    }

    const displayNftMeta = (nft) => {
        if (!nft.metadata) return (<></>);
        const nftMeta = JSON.parse(nft.metadata);
        return (<>
            <section style={{
                ...descriptionStyle,
                marginBottom: "2rem",
            }}>
                <p style={{ color: "#535353", marginBottom: "0.5rem" }}>{fixMoralisTokenUri(nft)}</p>
                <Button
                    style={{
                        marginBottom: "0.5rem"
                    }}
                    onClick={() =>
                        window.open(
                            `${getExplorer(chainId)}address/${options.address}`,
                            "_blank"
                        )
                    }
                >
                    <SelectOutlined style={{ marginRight: "5px" }} />
                    View NFT Contract
                </Button>
                <p><b>ID#</b> {options.token_id}</p>
            </section>
            <section style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
            }}>
                <div style={{
                    marginTop: "2rem",
                }}>
                    <Image
                        preview={false}
                        src={resolveLink(nftMeta.image) || "error"}
                        fallback={fallbackImg}
                        alt=""
                        style={{
                            borderRadius: "20px",
                        }}
                    />
                    <br />
                    <Image
                        preview={false}
                        src={resolveLink(nftMeta.sprite) || "error"}
                        fallback={fallbackImg}
                        alt=""
                    />
                </div>
                <div>
                    <p style={{
                        textAlign: "left",
                        ...pageTitle2Style
                    }}>Traits</p>
                    {displayAttributes(nftMeta.attributes)}
                </div>
            </section>
        </>)
    }

    const { data: NFTTokenMetadata, error: NFTsFetchError, isLoading } = useNFTMetadata(
        options.address, options.token_id, options.chain);

    if (isLoading) {
        return (<Loader />);
    } else {

        if (address != TestGymBuddiesContract) {
            return (<div style={{
                textAlign: "center",
                padding: "6rem"
            }}>
                <Alert
                    message="Incorrect NFT contract!"
                    type="warning"
                />
                <div style={{ marginBottom: "10px" }}></div>
            </div>);
        }

        if (NFTsFetchError) {
            return (
                <div style={{
                    textAlign: "center",
                    padding: "6rem"
                }}>
                    <Alert
                        message="Unable to fetch NFT. We are searching for a solution, please try again later!"
                        type="warning"
                    />
                    <div style={{ marginBottom: "10px" }}></div>
                </div>
            )
        }
        return NFTTokenMetadata && (
            <div style={{
                textAlign: "center",
                padding: "0 6rem 6rem 6rem"
            }}>
                <section style={{
                    marginTop: "3rem",
                }}>
                    <Button
                        type="primary"
                        onClick={() => window.history.back()}
                        style={{
                            float: "left",
                            backgroundColor: mainBgColor,
                            color: mainFontColor,
                            border: `1px solid ${mainFontColor}`
                        }}
                    >
                        <LeftOutlined />
                        Back
                    </Button>
                    <div style={{
                        ...pageTitleStyle,
                    }}>I am Your GymBuddy <HeartFilled style={{ color: "#FF74A6" }} />
                    </div>
                </section>
                <section style={{
                    marginTop: "3rem",
                }}>
                    {displayNftMeta(NFTTokenMetadata)}
                </section>
            </div >
        );
    }
}

export default GymBuddyDetails;

