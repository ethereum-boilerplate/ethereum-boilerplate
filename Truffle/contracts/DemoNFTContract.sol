// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/ERC721.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol";

contract DemoNFTContract is ERC721URIStorage, Ownable {
    uint256 itemID = 1;
    address marketplaceAddress;

    constructor(address _marketplaceAddress)
        ERC721("MetaGymLandDemoAvatar", "MGLDA1")
    {
        marketplaceAddress = _marketplaceAddress;
        // automatically mint tokens to the contract deployer
        createToken(
            "https://ipfs.moralis.io:2053/ipfs/QmeBjJN594ZqAnTcR6oaQe7GP2svbzz3ytiMnyJgxCH8bR/metadata/0000000000000000000000000000000000000000000000000000000000000003.json"
        );
    }

    function createToken(string memory tokenURI) public returns (uint256) {
        _mint(msg.sender, itemID);
        _setTokenURI(itemID, tokenURI);
        setApprovalForAll(marketplaceAddress, true);
        return itemID;
    }
}

// latest contract deployment on rinkeby: 0x4bD789C6D44F2e2f9963a5eb26D3b34D2eE42307
// latest contract deployment on rinkeby: 0xa7f993f90ffaaa400c6360ef1e2017113c5ced91
// latest contract deployment on rinkeby: 0xCB14609cCcE601fC24A7b39F39E0609b0B62acE4