type TNFTTransfer = {
  chain: string | number;
  blockNumber: string;
  fromAddress: string | undefined;
  toAddress: string;
  tokenAddress: string;
  value: string | undefined;
  operator: string | undefined;
  amount?: number | undefined;
  blockHash: string;
  blockTimestamp: Date;
  contractType: string;
  logIndex: number;
  tokenId: string;
  transactionHash: string;
  transactionIndex?: number | undefined;
  transactionType?: string | undefined;
};
export interface INFTTransfers {
  transfers?: TNFTTransfer[];
}
