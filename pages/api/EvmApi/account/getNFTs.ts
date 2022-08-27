import Moralis from "moralis";
import { NextApiRequest, NextApiResponse } from "next";
import type { getNFTsParams } from "../../../../src/types/EvmApi";

interface getNFTsRequest extends NextApiRequest {
  body: getNFTsParams;
}

export default async function handler(
  req: getNFTsRequest,
  res: NextApiResponse
) {
  await Moralis.start({ apiKey: process.env.MORALIS_API_KEY });

  try {
    const data = await Moralis.EvmApi.account.getNFTs({
      address: req.body.address,
      chain: req.body.chain,
      cursor: req.body.cursor,
      format: req.body.format,
      limit: req.body.limit,
      offset: req.body.offset,
      tokenAddresses: req.body.tokenAddresses,
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
}
