import { useColorMode } from '@chakra-ui/react';
import Image from 'next/image';

const EinpunkLogo = () => {
  const { colorMode } = useColorMode();

  return (
    <Image
      src={colorMode === 'dark' ? '/Einpunk-DarkBG.svg' : '/Einpunk-LightBG.svg'}
      height={45}
      width={150}
      alt="Einpunk"
    />
  );
};

export default EinpunkLogo;
