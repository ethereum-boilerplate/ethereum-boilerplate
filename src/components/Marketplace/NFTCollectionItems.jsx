import React, { useState, useReducer } from "react";
import { getNativeByChain, getExplorer } from "../../helpers/networks"
import {
    useMoralis,
    useMoralisQuery,
    useWeb3ExecuteFunction
} from "react-moralis";
import {
    Divider, Card, Image,
    Tooltip, Modal, Badge, Alert, Spin
} from "antd";
import {
    FileSearchOutlined,
    ShoppingCartOutlined,
} from "@ant-design/icons";
import { useVerifyMetadata } from "hooks/useVerifyMetadata";
import { useNFTTokenIds } from "hooks/useNFTTokenIds";
import { mainMarketAddress, deployedABI, createdMarketItemsTable } from "../../MarketplaceSCMetadata";
import {
    NFTCardStyle,
    NFTsDiv,
    NFTImg,
    NFTImgWrapperStyle,
    pageTitle2Style,
} from "../../GlobalStyles";
import { AllowedNftContracts } from "../../MglNftMetadata";
import { MainChainID } from "../../MglNftMetadata";
import Loader from "../Loader";
import { shuffle } from "../../helpers/nft-list-utils";

const { Meta } = Card;
const fallbackImg =
    "data:image/png;base64,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";

function NFTCollectionItems({ nftAddress, colName }) {

    const { chainId, isAuthenticated, account, Moralis } = useMoralis();
    const userChainId = chainId;
    const marketPlaceChainId = MainChainID;
    const maxItems = 3;
    const { data: NFTTokenIds, error: NFTsFetchError, isLoading } = useNFTTokenIds(nftAddress, maxItems, marketPlaceChainId);

    const [visible, setVisibility] = useState(false);
    const [nftToBuy, setNftToBuy] = useState(null);
    const [loading, setLoading] = useState(false);

    const contractABI = deployedABI;
    const marketAddress = mainMarketAddress;

    const contractProcessor = useWeb3ExecuteFunction();
    const nativeName = getNativeByChain(marketPlaceChainId);
    const contractABIJson = JSON.parse(contractABI);
    const { verifyMetadata } = useVerifyMetadata();
    const listings = new Map();

    // eslint-disable-next-line no-unused-vars
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

    const queryMarketItems = useMoralisQuery(
        createdMarketItemsTable, query => {
            // get not sold items
            return query
                .equalTo("sold", false)
                .equalTo("confirmed", true)
                .containedIn("nftContract",
                    AllowedNftContracts.get(chainId)?.map(c => c.toLowerCase())
                );
        });
    const fetchMarketItems = JSON.parse(
        JSON.stringify(queryMarketItems.data, [
            "objectId",
            "createdAt",
            "price",
            "nftContract",
            "itemId",
            "sold",
            "tokenId",
            "seller",
            "owner",
            "confirmed",
        ])
    );
    const purchaseItemFunction = "createMarketSale";

    async function purchase() {
        setLoading(true);
        const tokenDetails = getMarketWithLowestPrice(nftToBuy);
        const itemID = tokenDetails.itemId;
        const tokenPrice = tokenDetails.price;
        const ops = {
            contractAddress: marketAddress,
            functionName: purchaseItemFunction,
            abi: contractABIJson,
            params: {
                nftContract: nftToBuy.token_address,
                itemId: itemID,
            },
            msgValue: tokenPrice,
        };

        await contractProcessor.fetch({
            params: ops,
            onSuccess: async () => {
                setLoading(false);
                setVisibility(false);
                await updateSoldMarketItem(tokenDetails);
                forceUpdate();
                succPurchase();
            },
            onError: (error) => {
                setLoading(false);
                failPurchase(error);
            },
        });
    }

    const handleBuyClick = (nft) => {
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
        setNftToBuy(nft);
        setVisibility(true);
    };

    function succPurchase() {
        let secondsToGo = 10;
        const modal = Modal.success({
            title: "Success!",
            content: (
                <>
                    <p>You have purchased this NFT</p>
                    <p>It may take around <b>5 minutes</b></p>
                    <p>until it will appear at (your NFTs) section</p>
                </>
            ),
        });
        setTimeout(() => {
            modal.destroy();
        }, secondsToGo * 1000);
    }

    function failPurchase(err) {
        Modal.error({
            title: "Error!",
            content: `There was a problem when purchasing this NFT\n
            Make sure to connect your wallet,\n
            and choose correct blockchain`,
        });
    }

    async function updateSoldMarketItem(tokenDetails) {
        const id = tokenDetails.objectId;
        const marketList = Moralis.Object.extend(createdMarketItemsTable);
        const query = new Moralis.Query(marketList);
        await query.get(id).then((obj) => {
            obj.set("sold", true);
            obj.set("owner", account);
            obj.save();
        });
    }

    // TODO workaround for now
    // MGL nft drops will have same price
    const getMarketWithLowestPrice = (nft) => {
        const items = getMarketItems(nft);
        if (items.length === 1) return items[0];
        if (items.length > 1) {
            return items.sort((a, b) => a.price - b.price)[0]
        }
        return items;
    };

    const getMarketItems = (nft) => {
        const result = fetchMarketItems.filter(
            (e) =>
                e.nftContract === nft?.token_address &&
                e.tokenId === nft?.token_id
        );
        const key = `${nft?.token_address}:${nft?.token_id}`
        listings.set(key, result.length);
        return result;
    };

    const hasMarketItems = (nft) => {
        const result = getMarketItems(nft);
        return result.length > 0;
    };

    const getAmountForSale = (nft) => {
        const key = `${nft?.token_address}:${nft?.token_id}`
        return listings.get(key)
    }

    if (isLoading) {
        return (<Loader />);
    } else {

        return (
            <>
                {/* Smart Contract Alert */}
                {contractABIJson.noContractDeployed && (
                    <>
                        <br /><br />
                        <Alert
                            message="No Smart Contract Details Provided. Please deploy smart contract and provide address + ABI in the MoralisDappProvider.js file"
                            type="error"
                        />
                        <div style={{ marginBottom: "10px" }}></div>
                    </>
                )}
                {(
                    <>
                        {NFTsFetchError && (
                            <>
                                <Alert
                                    message="Unable to fetch all NFT metadata... We are searching for a solution, please try again later!"
                                    type="warning"
                                />
                                <div style={{ marginBottom: "10px" }}></div>
                            </>
                        )}
                    </>
                )}
                {/* NFT token description */}
                <div style={{
                    ...pageTitle2Style,
                    textAlign: "center",
                    padding: "0 0 2rem",
                }}>
                    <div>
                        {colName}
                    </div>
                </div>

                <div style={NFTsDiv}>
                    {NFTTokenIds && shuffle(NFTTokenIds.result)
                        .map((nft, index) => {
                            //Verify Metadata
                            nft = verifyMetadata(nft);
                            return (
                                <Card
                                    key={index}
                                    hoverable
                                    actions={[
                                        <Tooltip title="View On Blockexplorer">
                                            <FileSearchOutlined
                                                onClick={() =>
                                                    window.open(
                                                        `${getExplorer(marketPlaceChainId)}address/${nft.token_address}`,
                                                        "_blank"
                                                    )
                                                }
                                            />
                                        </Tooltip>,
                                        <Tooltip title="Buy NFT">
                                            <ShoppingCartOutlined onClick={() => handleBuyClick(nft)} />
                                        </Tooltip>,
                                    ]}
                                    style={NFTCardStyle}
                                    cover={
                                        <Image
                                            preview={false}
                                            src={nft.image || "error"}
                                            fallback={fallbackImg}
                                            alt=""
                                            style={NFTImg}
                                            wrapperStyle={{
                                                backgroundColor: "#" + nft?.background_color,
                                                ...NFTImgWrapperStyle
                                            }}
                                        />
                                    }
                                >
                                    {hasMarketItems(nft) ? (
                                        <div onClick={() => handleBuyClick(nft)}>
                                            <Badge.Ribbon
                                                text="Buy Now"
                                                color="green"
                                                style={{
                                                    paddingRight: "5px",
                                                    paddingLeft: "5px",
                                                    marginRight: "-10px",
                                                }}
                                            />
                                        </div>
                                    ) : (
                                        <Badge.Ribbon
                                            text="Sold Out"
                                            color="orange"
                                            style={{
                                                paddingRight: "5px",
                                                paddingLeft: "5px",
                                                marginRight: "-10px",
                                            }}
                                        />
                                    )}
                                    <Meta
                                        title={nft.name}
                                        description={
                                            <>
                                                <p>{`#${nft.token_id}`}</p>
                                                <div style={{
                                                    textAlign: "center"
                                                }}>
                                                    <h3>
                                                        <b style={{ color: "#5740C1" }}>Total</b>
                                                        &nbsp;<b style={{ color: "#5740C1" }}>/</b>&nbsp;
                                                        <b style={{ color: "#FF74A6" }}>For Sale</b>
                                                    </h3>
                                                    <h1>
                                                        <b style={{ color: "#5740C1" }}>{nft.amount}</b>
                                                        &nbsp;<b style={{ color: "#5740C1" }}>/</b>&nbsp;
                                                        <b style={{ color: "#FF74A6" }}>{getAmountForSale(nft)}</b>
                                                    </h1>
                                                    <div>
                                                        {hasMarketItems(nft) ? (
                                                            <h4 style={{
                                                                background: "linear-gradient(90deg, #83B4FF 0%, #FFA2C4 96.53%)",
                                                                borderRadius: "1rem",
                                                                padding: "2px",
                                                            }}>
                                                                <b style={{ color: "#fff" }}>Best Price&nbsp;
                                                                    {
                                                                        getMarketWithLowestPrice(nft).price / ("1e" + 18)
                                                                    }
                                                                </b>
                                                                &nbsp;
                                                                <b style={{ color: "#fff" }}>{nativeName}</b>
                                                            </h4>
                                                        ) : (
                                                            <>
                                                            </>
                                                        )}
                                                    </div>
                                                </div>
                                            </>
                                        }
                                    />
                                </Card>
                            )
                        })}
                    {/* TODO get the one with lowest price */}
                    {/* modal boxes to be able to buy */}
                    {hasMarketItems(nftToBuy) ? (
                        <Modal
                            title={
                                <>
                                    Buy <b>{nftToBuy?.name}</b> #{nftToBuy?.token_id}
                                </>
                            }
                            visible={visible}
                            onCancel={() => setVisibility(false)}
                            onOk={() => purchase()}
                            okText="Buy"
                        >
                            <Spin spinning={loading}>
                                <div
                                    style={{
                                        width: "250px",
                                        margin: "auto",
                                    }}
                                >
                                    <Badge.Ribbon
                                        color="green"
                                        text={`${getMarketWithLowestPrice(nftToBuy).price / ("1e" + 18)
                                            } ${nativeName}`}
                                        style={{
                                            marginRight: "-100px",
                                        }}
                                    >
                                    </Badge.Ribbon>
                                    <img
                                        src={nftToBuy?.image}
                                        alt=""
                                        style={{
                                            width: "250px",
                                            borderRadius: "10px",
                                            marginBottom: "15px",
                                        }}
                                    />
                                </div>
                            </Spin>
                        </Modal>
                    ) : (
                        <Modal
                            title={
                                <>
                                    Buy <b>{nftToBuy?.name}</b> #{nftToBuy?.token_id}
                                </>
                            }
                            visible={visible}
                            onCancel={() => setVisibility(false)}
                            onOk={() => setVisibility(false)}
                        >
                            <img
                                src={nftToBuy?.image}
                                alt=""
                                style={{
                                    width: "250px",
                                    margin: "auto",
                                    borderRadius: "10px",
                                    marginBottom: "15px",
                                }}
                            />
                            <Alert
                                message="This NFT is currently not for sale"
                                type="warning"
                            />
                        </Modal>
                    )}
                </div>
            </>
        );
    }
}

export default NFTCollectionItems;
