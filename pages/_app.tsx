import '@rainbow-me/rainbowkit/styles.css';
import { ChakraProvider } from '@chakra-ui/react';
import { createClient, configureChains, defaultChains, WagmiConfig } from 'wagmi';
import { darkTheme, getDefaultWallets, lightTheme, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { extendTheme } from '@chakra-ui/react';
import { publicProvider } from 'wagmi/providers/public';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';

const { provider, webSocketProvider, chains } = configureChains(defaultChains, [publicProvider()]);

const { connectors } = getDefaultWallets({
    appName: 'Ethereum Boilerplate',
    chains,
});

const client = createClient({
    provider,
    webSocketProvider,
    autoConnect: true,
    connectors,
});

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
};

const theme = extendTheme({ config });

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <ChakraProvider resetCSS theme={theme}>
            <WagmiConfig client={client}>
                <SessionProvider session={pageProps.session} refetchInterval={0}>
                    <RainbowKitProvider
                        chains={chains}
                        theme={{
                            lightMode: lightTheme(),
                            darkMode: darkTheme(),
                        }}
                    >
                        <Component {...pageProps} />
                    </RainbowKitProvider>
                </SessionProvider>
            </WagmiConfig>
        </ChakraProvider>
    );
};

export default MyApp;
