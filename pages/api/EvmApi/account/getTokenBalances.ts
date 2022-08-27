import Moralis from 'moralis';
import { NextApiRequest, NextApiResponse } from 'next';
import type { getTokenBalancesParams } from '../../../../src/types/EvmApi';

interface getTokenBalancesRequest extends NextApiRequest {
  body: getTokenBalancesParams;
}

export default async function handler(req: getTokenBalancesRequest, res: NextApiResponse) {
  const { address, chain, subdomain, toBlock, tokenAddresses } = req.body;
  await Moralis.start({ apiKey: process.env.MORALIS_API_KEY });

  try {
    const data = await Moralis.EvmApi.account.getTokenBalances({
      address,
      chain,
      subdomain,
      toBlock,
      tokenAddresses,
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
}
