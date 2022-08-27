import Moralis from 'moralis';
import { NextApiRequest, NextApiResponse } from 'next';
import type { getNFTsParams } from '../../../../src/types/EvmApi';

interface getNFTsRequest extends NextApiRequest {
  body: getNFTsParams;
}

export default async function handler(req: getNFTsRequest, res: NextApiResponse) {
  const { address, chain, cursor, format, limit, offset, tokenAddresses } = req.body;
  await Moralis.start({ apiKey: process.env.MORALIS_API_KEY });

  try {
    const data = await Moralis.EvmApi.account.getNFTs({
      address,
      chain,
      cursor,
      format,
      limit,
      offset,
      tokenAddresses,
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
}
