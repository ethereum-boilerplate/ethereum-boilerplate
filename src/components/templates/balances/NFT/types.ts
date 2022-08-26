import { EvmNftContractType } from '@moralisweb3/evm-utils';
import { MoralisDataObjectValue } from '@moralisweb3/core';

export type TNFTBalance = {
  tokenAddress: string;
  chain: string | number;
  ownerOf: string | undefined;
  blockNumberMinted: string | undefined;
  blockNumber: string | undefined;
  tokenId: string | number;
  contractType: EvmNftContractType;
  tokenUri?: string | undefined;
  tokenHash?: string | undefined;
  metadata: MoralisDataObjectValue;
  name?: string | undefined;
  symbol?: string | undefined;
  lastMetadataSync?: Date | undefined;
  lastTokenUriSync?: Date | undefined;
  amount?: number | undefined;
};

export interface INFTBalances {
  balances?: TNFTBalance[];
}
