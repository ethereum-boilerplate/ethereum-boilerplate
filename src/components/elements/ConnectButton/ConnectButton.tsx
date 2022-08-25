import { InjectedConnector } from 'wagmi/connectors/injected';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useAccount, useConnect, useDisconnect, useSignMessage } from 'wagmi';
import apiPost from 'utils/apiPost';
import { Button, Text, HStack, Avatar } from '@chakra-ui/react';
import { getEllipsisTxt } from 'utils/format';

const ConnectButton = () => {
    const { connectAsync } = useConnect({ connector: new InjectedConnector() });
    const { disconnectAsync } = useDisconnect();
    const { isConnected } = useAccount();
    const { signMessageAsync } = useSignMessage();
    const { status, data } = useSession();

    const handleAuth = async () => {
        if (isConnected) {
            await disconnectAsync();
        }

        const { account, chain } = await connectAsync();

        const userData = { address: account, chain: chain.id, network: 'evm' };

        const { message } = await apiPost('/auth/request-message', userData);

        const signature = await signMessageAsync({ message });

        try {
            await signIn('credentials', { message, signature, redirect: false });
        } catch (e) {
            return;
        }
    };

    const handleDisconnect = async () => {
        await disconnectAsync();
        signOut({ redirect: false });
    };

    if (data?.user) {
        return (
            <HStack onClick={handleDisconnect} cursor={'pointer'}>
                <Avatar size="xs" />
                <Text fontWeight="medium">{getEllipsisTxt(data.user.address)}</Text>
            </HStack>
        );
    }

    return (
        <Button size="sm" onClick={handleAuth} colorScheme="blue">
            Connect Wallet
        </Button>
    );
};

export default ConnectButton;
