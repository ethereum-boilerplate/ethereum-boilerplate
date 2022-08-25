import Moralis from 'moralis';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';

type Data = {
    name: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const token = await getToken({ req });
    console.log(token);
    // await Moralis.start({ apiKey: process.env.MORALIS_API_KEY });

    // const balances = await Moralis.EvmApi.account.getTokenBalances({
    //     address: '',
    // });
    res.status(200).json({ name: 'John Doe' });
};

export default handler;
