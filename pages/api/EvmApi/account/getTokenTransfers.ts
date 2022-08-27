import Moralis from "moralis";
import { NextApiRequest, NextApiResponse } from "next";
import type { getTokenTransfersParams } from "../../../../src/types/EvmApi";

interface getTokenTransfersRequest extends NextApiRequest {
  body: getTokenTransfersParams;
}

export default async function handler(
  req: getTokenTransfersRequest,
  res: NextApiResponse
) {
  await Moralis.start({ apiKey: process.env.MORALIS_API_KEY });

  try {
    const data = await Moralis.EvmApi.account.getTokenTransfers({
      address: req.body.address,
      chain: req.body.chain,
      subdomain: req.body.subdomain,
      toBlock: req.body.toBlock,
      tokenAddresses: req.body.tokenAddresses,
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
}
