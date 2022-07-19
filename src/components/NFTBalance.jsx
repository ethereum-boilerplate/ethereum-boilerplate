import React, { useState, useContext } from "react";
import {
  useMoralis,
  useNFTBalances,
  useWeb3ExecuteFunction,
} from "react-moralis";
import { Modal, Input, Button, Image, Skeleton } from "antd";
import {
  FileSearchOutlined,
  // eslint-disable-next-line no-unused-vars
  InfoCircleTwoTone,
  SkinFilled,
} from "@ant-design/icons";
import { getExplorer } from "helpers/networks";
import { useVerifyMetadata } from "hooks/useVerifyMetadata";
import {
  mainFontColor,
  BtnInfo,
  pageTitleStyle,
  descriptionStyle,
} from "GlobalStyles";
import { Link } from "react-router-dom";
import {
  mainMarketAddress,
  deployedABI,
  listItemFunction,
} from "../MarketplaceSCMetadata";
import {
  NFTCardStyle,
  NFTsDiv,
  NFTImg,
  BtnPrimary,
  NFTImgWrapperStyle,
} from "../GlobalStyles";
import { AllowedNftContracts } from "../MglNftMetadata";
import { AvatarCtx } from "index";
import Loader from "./Loader";
import SnapArBtn from "./SnapArBtn";
import {
  resolveNftSprite,
  resolveBGColor,
} from "../helpers/nft-props-resolvers";
import { shuffle } from "../helpers/nft-list-utils";

function NFTBalance() {
  // eslint-disable-next-line no-unused-vars
  const [avatar, setAvatar] = useContext(AvatarCtx);

  const { data: NFTBalances, isLoading } = useNFTBalances();
  const { chainId, user } = useMoralis();
  const { verifyMetadata } = useVerifyMetadata();

  // eslint-disable-next-line no-unused-vars
  const [visible, setVisibility] = useState(false);
  const [nftToList, setNftToList] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [listingPrice, setListingPrice] = useState(0);

  const contractABI = deployedABI;
  const marketAddress = mainMarketAddress;

  const contractABIJson = JSON.parse(contractABI);
  const contractProcessor = useWeb3ExecuteFunction();

  // eslint-disable-next-line no-unused-vars
  const handleListForSaleClick = (nft) => {
    setNftToList(nft);
    setVisibility(true);
  };

  function succListing() {
    let secondsToGo = 10;
    const modal = Modal.success({
      title: "Success!",
      content: (
        <>
          <p>You have listed your NFT</p>
          <p>
            It may take around <b>5 minutes</b>
          </p>
          <p>until it will appear in our Marketplace</p>
        </>
      ),
    });
    setTimeout(() => {
      modal.destroy();
    }, secondsToGo * 1000);
  }

  // eslint-disable-next-line no-unused-vars
  const listNft = async () => {
    if (listingPrice <= 0) {
      alert("price must be greater then 0");
    }
    const p = listingPrice * ("1e" + 18);
    const ops = {
      contractAddress: marketAddress,
      functionName: listItemFunction,
      abi: contractABIJson,
      params: {
        nftContract: nftToList.token_address,
        tokenId: nftToList.token_id,
        price: String(p),
      },
    };
    await contractProcessor.fetch({
      params: ops,
      onSuccess: () => {
        succListing();
      },
      onError: (err) => {
        console.error(err);
        alert(JSON.stringify(err));
      },
    });
  };

  const filteredNFTBalances = NFTBalances?.result.filter((nft) => {
    return (
      nft.image &&
      AllowedNftContracts.get(chainId)
        ?.map((c) => c.toLowerCase())
        .includes(nft.token_address?.toLowerCase())
    );
  });

  if (isLoading) {
    return <Loader />;
  } else {
    return (
      <div
        style={{
          marginTop: "3rem",
          marginBottom: "3rem",
          padding: "0 14%",
          width: "100%",
          background: "none",
          color: mainFontColor,
          textAlign: "center",
        }}
      >
        <section
          style={{
            ...pageTitleStyle,
          }}
        >
          Your GymBuddies <SkinFilled />
        </section>
        {filteredNFTBalances && filteredNFTBalances.length > 0 ? (
          <>
            <section
              style={{
                ...descriptionStyle,
                marginBottom: "2rem",
                marginTop: "1rem",
              }}
            >
              <p>
                Click&nbsp;
                <span style={{ fontWeight: 500 }}>Play with me</span>
                &nbsp; button on selected Avatar and start your&nbsp;
                <span style={{ fontWeight: 500 }}>MetaGymLand Metaverse</span>
                &nbsp; adventure.
              </p>
              <p>
                <b>Have fun!</b>
              </p>
            </section>

            <section style={NFTsDiv}>
              <Skeleton loading={!NFTBalances?.result}>
                {filteredNFTBalances &&
                  shuffle(filteredNFTBalances).map((nft, index) => {
                    //Verify Metadata
                    nft = verifyMetadata(nft);
                    const gymBuddyDetailsLink = `/gym-buddy-details/${nft.token_address}/${nft.token_id}`;
                    const snapArMinatureLink =
                      nft?.snap_ar_miniature_link ?? "";
                    return (
                      <div
                        key={`card-${index}`}
                        style={{
                          ...NFTCardStyle,
                        }}
                      >
                        <section>
                          <div
                            style={{
                              display: "grid",
                              gridTemplateRows: "1fr",
                              gridTemplateColumns: "1fr",
                              gridTemplateAreas: "overlap",
                            }}
                          >
                            <div
                              style={{
                                // grid props
                                gridArea: "overlap",
                                alignSelf: "center",
                                justifySelf: "center",
                              }}
                            >
                              <Image
                                key={`${nft?.token_address}${nft?.token_id}`}
                                preview={false}
                                src={nft?.image || "error"}
                                fallback="data:image/png;base64,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"
                                alt=""
                                style={{
                                  ...NFTImg,
                                  // grid props
                                  gridArea: "overlap",
                                  alignSelf: "center",
                                  justifySelf: "center",
                                }}
                                wrapperStyle={{
                                  ...NFTImgWrapperStyle,
                                  backgroundColor: resolveBGColor(nft),
                                }}
                              ></Image>
                            </div>
                            {snapArMinatureLink && (
                              <SnapArBtn snapARLink={snapArMinatureLink} />
                            )}
                          </div>
                          {/* hack to prefetch avatar sprite */}
                          <div
                            style={{
                              display: "none",
                            }}
                          >
                            <Image
                              key={`${nft?.token_address}${nft?.token_id}_sprite`}
                              preview={false}
                              src={resolveNftSprite(nft) || "error"}
                              fallback="data:image/png;base64,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"
                              alt=""
                            />
                          </div>
                        </section>
                        <div
                          style={{
                            padding: "1rem",
                          }}
                        >
                          <section
                            style={{
                              padding: "0 0.5rem",
                              marginBottom: "1rem",
                              color: mainFontColor,
                            }}
                          >
                            <div
                              style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                              }}
                            >
                              <div>
                                <p>
                                  <b>{nft.name}</b>
                                </p>
                                <p>
                                  <span>#{nft.token_id}</span>
                                </p>
                              </div>
                              <div
                                style={{
                                  textAlign: "right",
                                }}
                              >
                                <Link to={gymBuddyDetailsLink}>
                                  <InfoCircleTwoTone />
                                </Link>
                              </div>
                            </div>
                            <hr
                              style={{
                                border: "1px solid #CDCDCD",
                              }}
                            />
                          </section>
                          <section
                            style={{
                              display: "grid",
                              alignContent: "center",
                            }}
                          >
                            <div
                              style={{
                                display: "grid",
                                gridTemplateColumns: "2fr 1fr 4fr",
                              }}
                            >
                              <FileSearchOutlined
                                style={{
                                  paddingTop: "0.6rem",
                                }}
                                onClick={() =>
                                  window.open(
                                    `${getExplorer(chainId)}address/${
                                      nft.token_address
                                    }`,
                                    "_blank",
                                  )
                                }
                              />
                              <div
                                style={{
                                  borderLeft: `1px solid #CDCDCD`,
                                  margin: "0.5rem",
                                }}
                              ></div>
                              <Button
                                onClick={() => {
                                  const avatarUri = resolveNftSprite(nft);
                                  const coverUri = nft?.image;
                                  const avatarTokenAddress = nft?.token_address;
                                  const avatarTokenId = nft?.token_id;
                                  const curAvatar = {
                                    uri: avatarUri,
                                    snapARLink: nft?.snap_ar_link ?? "",
                                    coverUri: coverUri,
                                    tokenAddress: avatarTokenAddress,
                                    tokenId: avatarTokenId,
                                    user: user,
                                  };
                                  setAvatar({
                                    uri: avatarUri,
                                    snapARLink: nft?.snap_ar_link ?? "",
                                    coverUri: coverUri,
                                    tokenAddress: avatarTokenAddress,
                                    tokenId: avatarTokenId,
                                    user: user,
                                  });
                                  window.localStorage.setItem(
                                    "avatar",
                                    JSON.stringify(curAvatar),
                                  );
                                }}
                                type="primary"
                                style={BtnPrimary}
                              >
                                <Link to="/play-setup">Play with me</Link>
                              </Button>
                              {/* <Button
                                    onClick={() => handleListForSaleClick(nft)}
                                  >
                                    list
                                  </Button> */}
                              <Modal
                                title={`List ${nftToList?.name} #${nftToList?.token_id}`}
                                visible={visible}
                                onCancel={() => setVisibility(false)}
                                onOk={() => {
                                  listNft();
                                  if (listingPrice > 0) setVisibility(false);
                                }}
                                okText="List for Sale"
                              >
                                <img
                                  src={nftToList?.image}
                                  alt=""
                                  style={{
                                    width: "250px",
                                    margin: "auto",
                                    borderRadius: "10px",
                                    marginBottom: "15px",
                                  }}
                                />
                                <Input
                                  autoFocus
                                  required
                                  placeholder="set price"
                                  onChange={(e) =>
                                    setListingPrice(e.target.value)
                                  }
                                />
                              </Modal>
                            </div>
                          </section>
                        </div>
                      </div>
                    );
                  })}
              </Skeleton>
            </section>
          </>
        ) : (
          <section>
            <div
              style={{
                ...descriptionStyle,
                marginBottom: "2rem",
                marginTop: "1rem",
              }}
            >
              <p>
                It looks like you have no avatars. <b>Dont worry!</b>
              </p>
              <br />
              <p>Simply mint your first GymBuddy or visit Marketplace</p>
              <p>and start your MetaGymLand Metaverse adventure!</p>

              <section
                style={{
                  display: "grid",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                <br />
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "2rem",
                  }}
                >
                  <Button
                    type="primary"
                    style={{
                      ...BtnPrimary,
                    }}
                  >
                    <Link to="/mint">Mint</Link>
                  </Button>
                  <Button type="primary" style={BtnInfo}>
                    <Link to="/marketplace">Marketplace</Link>
                  </Button>
                </div>
              </section>
              <br />
              <b>If this is not right? Refresh the page</b>
            </div>
          </section>
        )}
      </div>
    );
  }
}

export default NFTBalance;
