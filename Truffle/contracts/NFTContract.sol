// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC1155/ERC1155.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol";

contract NFTContract is ERC1155, Ownable {
    uint256 public constant ARTWORK = 0;
    uint256 public constant PHOTO = 1;
    address marketplaceAddress;

    constructor(address _marketplaceAddress)
        ERC1155("https://inzloc1b6zrv.usemoralis.com/{id}.json")
    {
        marketplaceAddress = _marketplaceAddress;
        _mint(msg.sender, ARTWORK, 1, "");
        _mint(msg.sender, PHOTO, 2, "");
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
