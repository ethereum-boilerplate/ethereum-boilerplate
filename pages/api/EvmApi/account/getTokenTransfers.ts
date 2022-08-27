import Moralis from 'moralis';
import { NextApiRequest, NextApiResponse } from 'next';
import type { getTokenTransfersParams } from '../../../../src/types/EvmApi';

interface getTokenTransfersRequest extends NextApiRequest {
  body: getTokenTransfersParams;
}

export default async function handler(req: getTokenTransfersRequest, res: NextApiResponse) {
  const { address, chain, cursor, fromBlock, fromDate, limit, offset, subdomain, toBlock, toDate } = req.body;
  await Moralis.start({ apiKey: process.env.MORALIS_API_KEY });

  try {
    const data = await Moralis.EvmApi.account.getTokenTransfers({
      address,
      chain,
      cursor,
      fromBlock,
      fromDate,
      limit,
      offset,
      subdomain,
      toBlock,
      toDate,
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
}
