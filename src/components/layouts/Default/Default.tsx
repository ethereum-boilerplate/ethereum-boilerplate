import { FC, ReactNode } from 'react';
import Image from 'next/image';
import { Header } from 'components/modules/Header';
import { Container, Flex } from '@chakra-ui/react';

const links = [
    { name: 'Forum', href: 'https://moralis.io/' },
    { name: 'Discord', href: 'https://moralis.io/joindiscord/' },
    { name: 'Docs', href: 'https://docs.moralis.io/introduction/readme' },
    { name: 'Blog', href: 'https://moralis.io/blog/' },
    { name: 'Youtube', href: 'https://www.youtube.com/channel/UCgWS9Q3P5AxCWyQLT2kQhBw' },
];

const Default: FC<{ children: ReactNode }> = ({ children }) => (
    <div>
        <Header />
        <main>
            <Container maxW="container.lg" p={3} marginTop={100}>
                {children}
            </Container>
        </main>
        <footer>
            <div>
                {links.map(({ href, name }) => (
                    <a href={href} target="_blank" rel="noopener noreferrer" key={name}>
                        {name}
                    </a>
                ))}
            </div>
            {/* <a href="https://moralis.io/" target="_blank" rel="noopener noreferrer">
                <Image src="/assets/poweredByMoralis.svg" alt="Powered By Moralis Logo" width={173} height={28} />
            </a> */}
        </footer>
    </div>
);

export default Default;
