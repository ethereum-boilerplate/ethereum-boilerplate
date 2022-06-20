import { chainIds } from './constants';
export const getChainIdByName = (chainName: string) => {
  return (Object.keys(chainIds) as Array<keyof typeof chainIds>).find(
    (key) => chainIds[key] === chainName
  );
};

export const IsNative = (address: string) =>
  address === '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';
