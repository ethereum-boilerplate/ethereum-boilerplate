export const TestGymBuddiesContract = "0x63f165eB1DB0a4E1d7d5c81c3Ed48f8e38E40FF9";
export const AvaxMoralis2021HackatonNfts = "0xbba97ea3912c598a39ce0802d5cd67dd3d873457";
export const DemoNFT = "0xa27B2B17D60902C60397ae8D406Ec2B88c656e51";
export const AllowedNftContracts = new Map([
    ["0xa869", // AVAX fuji testnet
        [
            TestGymBuddiesContract,
            AvaxMoralis2021HackatonNfts,
            DemoNFT,
        ],
    ]
]);

export const DemoNFTContracts = new Map([
    ["0xa869", // AVAX fuji testnet
        DemoNFT
    ]
]);

export const MainChainID = "0xa869"; // AVAX fuji testnet
