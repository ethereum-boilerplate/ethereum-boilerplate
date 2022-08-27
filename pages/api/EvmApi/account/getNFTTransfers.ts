import Moralis from 'moralis';
import { NextApiRequest, NextApiResponse } from 'next';
import type { getNFTTransfersParams } from '../../../../src/types/EvmApi';

interface getNFTTransfersRequest extends NextApiRequest {
  body: getNFTTransfersParams;
}

export default async function handler(req: getNFTTransfersRequest, res: NextApiResponse) {
  const { address, chain, cursor, direction, format, fromBlock, limit, offset, toBlock } = req.body;
  await Moralis.start({ apiKey: process.env.MORALIS_API_KEY });

  try {
    const data = await Moralis.EvmApi.account.getNFTTransfers({
      address,
      chain,
      cursor,
      direction,
      format,
      fromBlock,
      limit,
      offset,
      toBlock,
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
}
