import { useState } from "react";
import { useIPFS } from "./useIPFS";

/**
 * This is a hook that loads the NFT metadata in case it doesn't alreay exist
 * If metadata is missing, the object is replaced with a reactive object that updatees when the data becomes available
 * The hook will retry until request is successful (with OpenSea, for now)
 */
export const useVerifyMetadata = () => {
  const { resolveLink } = useIPFS();
  const [results, setResults] = useState({});

  /**
   * Fet Metadata  from NFT and Cache Results
   * @param {object} NFT
   * @returns NFT
   */
  function verifyMetadata(NFT) {
    //Pass Through if Metadata already present
    if (NFT.metadata) {
      //Set Image
      const metadata = NFT.metadata;
      resolveCommonMetadata(NFT, metadata);
      return NFT;
    }
    //Get the Metadata
    getMetadata(NFT);
    //Return Hooked NFT Object
    return results?.[NFT.token_uri] ? results?.[NFT.token_uri] : NFT;
  } //verifyMetadata()

  /**
   * Extract Metadata from NFT,
   *  Fallback: Fetch from URI
   * @param {object} NFT
   * @returns void
   */
  async function getMetadata(NFT) {
    //Validate URI
    if (!NFT.token_uri || !NFT.token_uri.includes("://")) {
      console.log("getMetadata() Invalid URI", { URI: NFT.token_uri, NFT });
      return;
    }
    //Get Metadata
    fetch(NFT.token_uri)
      .then((res) => res.json())
      .then((metadata) => {
        if (!metadata) {
          //Log
          console.error(
            "useVerifyMetadata.getMetadata() No Metadata found on URI:",
            { URI: NFT.token_uri, NFT },
          );
        }
        //Handle Setbacks
        else if (
          metadata?.detail &&
          metadata.detail.includes("Request was throttled")
        ) {
          //Log
          console.warn(
            "useVerifyMetadata.getMetadata() Bad Result for:" +
              NFT.token_uri +
              "  Will retry later",
            { results, metadata },
          );
          //Retry That Again after 1s
          setTimeout(function () {
            getMetadata(NFT);
          }, 1000);
        } //Handle Opensea's {detail: "Request was throttled. Expected available in 1 second."}
        else {
          //No Errors
          //Set
          setMetadata(NFT, metadata);
          //Log
          console.log(
            "getMetadata() Late-load for NFT Metadata " + NFT.token_uri,
            { metadata },
          );
        } //Valid Result
      })
      .catch((err) => {
        console.error("useVerifyMetadata.getMetadata() Error Caught:", {
          err,
          NFT,
          URI: NFT.token_uri,
        });
      });
  } //getMetadata()

  /**
   * Update NFT Object
   * @param {object} NFT
   * @param {object} metadata
   */
  function setMetadata(NFT, metadata) {
    //Add Metadata
    NFT.metadata = metadata;
    resolveCommonMetadata(NFT, metadata);
    //Set to State
    if (metadata && !results[NFT.token_uri])
      setResults({ ...results, [NFT.token_uri]: NFT });
  } //setMetadata()

  function resolveCommonMetadata(NFT, metadata) {
    if (metadata?.image) NFT.image = resolveLink(metadata.image);
    if (metadata?.name) NFT.name = metadata.name;
    if (metadata?.cover_image) NFT.cover_image = metadata.cover_image;
    if (metadata?.collection_cover_image)
      NFT.collection_cover_image = metadata.collection_cover_image;
    if (metadata?.background_color)
      NFT.background_color = metadata.background_color;
    if (metadata?.sprite) NFT.sprite = metadata.sprite;
    if (metadata?.attributes) NFT.attributes = metadata.attributes;
    if (metadata?.collection_name)
      NFT.collection_name = metadata.collection_name;
    // TODO get from blockchain later
    NFT.snap_ar_link =
      "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=9e06d0b5e63c43379dd549a6b0f625c1&metadata=01";
    NFT.snap_ar_miniature_link =
      "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=8c5841788ffc4c45bca2a77360834218&metadata=01";
  }

  return { verifyMetadata };
};
