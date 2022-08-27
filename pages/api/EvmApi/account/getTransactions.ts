import Moralis from 'moralis';
import { NextApiRequest, NextApiResponse } from 'next';
import type { getTransactionsParams } from '../../../../src/types/EvmApi';

interface getTransactionsRequest extends NextApiRequest {
  body: getTransactionsParams;
}

export default async function handler(req: getTransactionsRequest, res: NextApiResponse) {
  const { address, chain, cursor, fromBlock, fromDate, limit, offset, subdomain, toBlock, toDate } = req.body;
  await Moralis.start({ apiKey: process.env.MORALIS_API_KEY });

  try {
    const data = await Moralis.EvmApi.account.getTransactions({
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
