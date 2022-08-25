import { Box, Link, Popover, PopoverContent, PopoverTrigger, Stack, useColorModeValue } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { FC } from 'react';
import { ISubNav } from '../SubNav/SubNav';
import { SubNav } from '../SubNav';
import NextLink from 'next/link';

const NavItem: FC<ISubNav> = ({ label, children, href }) => {
    const linkColor = useColorModeValue('gray.600', 'gray.400');
    const linkActiveColor = useColorModeValue('gray.800', 'white');

    return (
        <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
                <Box>
                    <NextLink href={href || '#'}>
                        <Link
                            fontSize={15}
                            fontWeight={500}
                            color={linkColor}
                            _hover={{
                                textDecoration: 'none',
                                color: linkActiveColor,
                            }}
                        >
                            {label} {children && <ChevronDownIcon />}
                        </Link>
                    </NextLink>
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
