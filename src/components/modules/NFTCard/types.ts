import { TNFTBalance } from 'components/templates/balances/NFT/types';

export interface INFTCard
  extends Pick<TNFTBalance, 'amount' | 'contractType' | 'name' | 'symbol' | 'tokenAddress' | 'tokenId' | 'metadata'> {}
