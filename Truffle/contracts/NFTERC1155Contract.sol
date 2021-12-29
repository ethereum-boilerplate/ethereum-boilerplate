// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC1155/ERC1155.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol";

contract NFTContract is ERC1155, Ownable {
    uint256 public constant ERACH = 0;
    uint256 public constant ORLAI = 1;
    uint256 public constant ODIALT = 2;
    address marketplaceAddress;

    constructor(address _marketplaceAddress)
        ERC1155("https://ipfs.moralis.io:2053/ipfs/QmYUsDTWGCZzfJRosYgLcA5DdiiJpnu4WquWZVZNki25PZ/metadata/{id}.json")
    {
        marketplaceAddress = _marketplaceAddress;
        // autmoatically mint tokens to the sender
        _mint(msg.sender, ERACH, 10, "");
        _mint(msg.sender, ORLAI, 10, "");
        _mint(msg.sender, ODIALT, 10, "");
    }

    function mint(
        address account,
        uint256 id,
        uint256 amount
    ) public onlyOwner {
        _mint(account, id, amount, "");
        // marketplace can oprate on token
        setApprovalForAll(marketplaceAddress, true);
    }

    function burn(
        address account,
        uint256 id,
        uint256 amount
    ) public onlyOwner {
        require(msg.sender == account);
        _burn(account, id, amount);
    }
}

// last deployment on rinkeby testnet: 0x1904b52B2768E4DD72bf300202B4194E05dd0AFa

// check https://github.com/ProjectOpenSea/opensea-creatures/blob/master/contracts/ERC721Tradable.sol
// https://ethereum.stackexchange.com/questions/103625/how-to-approve-contract-to-transfer-tokens
// https://programtheblockchain.com/posts/2018/02/27/writing-a-token-market-contract/
// https://medium.com/coinmonks/developing-a-marketplace-contract-with-token-payment-d865323ea88c

// last deployment on rinkeby testnet: 0x6d996636c3917d8D0B99Dc1D877Fbf7fC189c8f1

// last deployment on rinkeby testnet: 0x7650D3448F8044d8732528148c2A2d6B1D17BA88

// latest contract deployment on rinkeby 0x7ae9f5b997dacd922e2da3fd79207d01ee6f5300

