import Moralis from "moralis";
import { NextApiRequest, NextApiResponse } from "next";
import type { getNFTTransfersParams } from "../../../../src/types/EvmApi";

interface getNFTTransfersRequest extends NextApiRequest {
  body: getNFTTransfersParams;
}

export default async function handler(
  req: getNFTTransfersRequest,
  res: NextApiResponse
) {
  await Moralis.start({ apiKey: process.env.MORALIS_API_KEY });

  try {
    const data = await Moralis.EvmApi.account.getNFTTransfers({
      address: req.body.address,
      chain: req.body.chain,
      cursor: req.body.cursor,
      direction: req.body.direction,
      format: req.body.format,
      fromBlock: req.body.fromBlock,
      limit: req.body.limit,
      offset: req.body.offset,
      toBlock: req.body.toBlock,
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
}
