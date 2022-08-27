// Account API Param Types
import Moralis from 'moralis';

export type getNFTTransfersParams = Parameters<typeof Moralis.EvmApi.account.getNFTTransfers>[0];
export type getNFTsParams = Parameters<typeof Moralis.EvmApi.account.getNFTs>[0];
export type getNFTsForContractParams = Parameters<typeof Moralis.EvmApi.account.getNFTsForContract>[0];
export type getNativeBalanceParams = Parameters<typeof Moralis.EvmApi.account.getNativeBalance>[0];
export type getTokenBalancesParams = Parameters<typeof Moralis.EvmApi.account.getTokenBalances>[0];
export type getTokenTransfersParams = Parameters<typeof Moralis.EvmApi.account.getTokenTransfers>[0];
export type getTransactionsParams = Parameters<typeof Moralis.EvmApi.account.getTransactions>[0];
