import { FC, ReactNode } from 'react';
import { Header } from 'components/modules/Header';
import { Container } from '@chakra-ui/react';
import { Footer } from 'components/modules/Footer';

const Default: FC<{ children: ReactNode }> = ({ children }) => (
  <div>
    <Header />
    <Container maxW="container.lg" p={3} marginTop={100} as="main" minH="70vh">
      {children}
    </Container>
    <Footer />
  </div>
);

export default Default;
