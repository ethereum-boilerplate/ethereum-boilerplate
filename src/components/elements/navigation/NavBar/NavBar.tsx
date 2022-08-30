import { HStack } from '@chakra-ui/react';
import { SearchBar } from 'components/modules';
import { NavItem } from '../NavItem';
import NAV_LINKS from './paths';
import { useState } from 'react';
import { Button } from '@chakra-ui/react';
import { CloseIcon, SearchIcon } from '@chakra-ui/icons';

const NavBar = () => {
  const [showInput, setShowInput] = useState<boolean>(false);
  return showInput ? (
    <HStack gap={'2px'}>
      <SearchBar />
      <Button colorScheme="teal" variant="ghost" onClick={() => setShowInput(false)}>
        <CloseIcon fontSize={'sm'} />
      </Button>
    </HStack>
  ) : (
    <HStack gap={'15px'}>
      {NAV_LINKS.map((link) => (
        <NavItem key={`link-${link.label}`} {...link} />
      ))}
      <Button colorScheme="teal" variant="ghost" onClick={() => setShowInput(true)}>
        <SearchIcon />
      </Button>
    </HStack>
  );
};

export default NavBar;
