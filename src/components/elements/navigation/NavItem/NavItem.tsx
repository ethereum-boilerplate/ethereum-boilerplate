import { Box, Popover, PopoverContent, PopoverTrigger, Stack, useColorModeValue } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { FC } from 'react';
import { ISubNav } from '../SubNav/SubNav';
import { SubNav } from '../SubNav';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

const NavItem: FC<ISubNav> = ({ label, children, href }) => {
  const linkColor = useColorModeValue('gray.600', 'gray.400');
  const linkActiveColor = useColorModeValue('gray.800', 'white');
  const router = useRouter();
  const isCurrentPath = router.asPath === href || (href !== '/' && router.pathname.startsWith(href || ''));

  return (
    <Popover trigger={'hover'} placement={'bottom-start'}>
      <PopoverTrigger>
        <Box>
          <Box
            fontSize={15}
            fontWeight={500}
            color={isCurrentPath ? linkActiveColor : linkColor}
            _hover={{
              textDecoration: 'none',
              color: linkActiveColor,
            }}
            cursor="pointer"
          >
            {children ? (
              <>
                {label} <ChevronDownIcon />
              </>
            ) : (
              <NextLink href={href || '/'}>{label}</NextLink>
            )}
          </Box>
        </Box>
      </PopoverTrigger>

      {children && (
        <PopoverContent border={0} boxShadow={'xl'} p={4} rounded={'xl'} minW={'sm'}>
          <Stack>
            {children.map((child) => (
              <SubNav key={child.label} {...child} />
            ))}
          </Stack>
        </PopoverContent>
      )}
    </Popover>
  );
};

export default NavItem;
