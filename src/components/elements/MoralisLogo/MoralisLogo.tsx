import { useColorMode } from '@chakra-ui/react';
import Image from 'next/image';

const MoralisLogo = () => {
  const { colorMode } = useColorMode();

  return (
    <Image
      src={colorMode === 'dark' ? '/Moralis-DarkBG.svg' : '/Moralis-LightBG.svg'}
      height={45}
      width={150}
      alt="Moralis"
    />
  );
};

export default MoralisLogo;
