import Moralis from "moralis";
import { NextApiRequest, NextApiResponse } from "next";
import type { getTokenBalancesParams } from "../../../../src/types/EvmApi";

interface getTokenBalancesRequest extends NextApiRequest {
  body: getTokenBalancesParams;
}

export default async function handler(
  req: getTokenBalancesRequest,
  res: NextApiResponse
) {
  await Moralis.start({ apiKey: process.env.MORALIS_API_KEY });

  try {
    const data = await Moralis.EvmApi.account.getTokenBalances({
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
