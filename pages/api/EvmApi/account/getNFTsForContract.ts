import Moralis from 'moralis';
import { NextApiRequest, NextApiResponse } from 'next';
import type { getNFTsForContractParams } from '../../../../src/types/EvmApi';

interface getNFTsForContractRequest extends NextApiRequest {
  body: getNFTsForContractParams;
}

export default async function handler(req: getNFTsForContractRequest, res: NextApiResponse) {
  const { address, chain, cursor, format, limit, offset, tokenAddress } = req.body;
  await Moralis.start({ apiKey: process.env.MORALIS_API_KEY });

  try {
    const data = await Moralis.EvmApi.account.getNFTsForContract({
      address,
      chain,
      cursor,
      format,
      limit,
      offset,
      tokenAddress,
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
}
