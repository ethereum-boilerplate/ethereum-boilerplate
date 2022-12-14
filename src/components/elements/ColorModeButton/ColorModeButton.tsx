import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { Button, useColorMode } from '@chakra-ui/react';

const ColorModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button size="sm" onClick={toggleColorMode}>
      {colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
};

export default ColorModeButton;
