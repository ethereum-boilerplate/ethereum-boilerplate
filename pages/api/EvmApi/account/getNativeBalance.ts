import Moralis from "moralis";
import { NextApiRequest, NextApiResponse } from "next";
import type { getNativeBalanceParams } from "../../../../src/types/EvmApi";

interface getNativeBalanceRequest extends NextApiRequest {
  body: getNativeBalanceParams;
}

export default async function handler(
  req: getNativeBalanceRequest,
  res: NextApiResponse
) {
  await Moralis.start({ apiKey: process.env.MORALIS_API_KEY });

  try {
    const data = await Moralis.EvmApi.account.getNativeBalance({
      address: req.body.address,
      chain: req.body.chain,
      providerUrl: req.body.providerUrl,
      toBlock: req.body.toBlock,
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
}
