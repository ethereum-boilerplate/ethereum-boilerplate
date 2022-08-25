import { FC, ReactNode } from 'react';
import { Header } from 'components/modules/Header';
import { Container } from '@chakra-ui/react';
import { Footer } from 'components/modules/Footer';
import Head from 'next/head';

const Default: FC<{ children: ReactNode; pageName: string }> = ({ children, pageName }) => (
  <>
    <Head>
      <title>{`${pageName} | ETH Boilerplate`}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <Container maxW="container.lg" p={3} marginTop={100} as="main" minH="70vh">
      {children}
    </Container>
    <Footer />
  </>
);

export default Default;
