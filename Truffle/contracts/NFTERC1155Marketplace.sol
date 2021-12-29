// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/Counters.sol";
import "github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC1155/ERC1155.sol";
import "github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC1155/utils/ERC1155Receiver.sol";
import "github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/security/ReentrancyGuard.sol";
import "github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol";

contract MarketPlace is ERC1155Receiver, ReentrancyGuard, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _itemIds;
    Counters.Counter private _itemsSold;

    address public _owner;

    // fee
    // uint256 listingPrice = 0.025 ether;

    constructor() {
        _owner = msg.sender;
    }

    function onERC1155Received(
        address, /* operator */
        address, /* from */
        uint256, /* id */
        uint256, /* value */
        bytes calldata /* data */
    ) external pure override returns (bytes4) {
        return this.onERC1155Received.selector;
    }

    function onERC1155BatchReceived(
        address, /* operator */
        address, /* from */
        uint256[] calldata, /* ids */
        uint256[] calldata, /* values */
        bytes calldata /* data */
    ) external pure override returns (bytes4) {
        return this.onERC1155BatchReceived.selector;
    }

    struct MarketItem {
        uint256 itemId;
        address nftContract;
        uint256 tokenId;
        address payable seller;
        address payable owner;
        uint256 price;
        /**
         unitPrice
         amount
         */

        /**
         * for ERC1155
         bool soldOut;
         uint256 left;
         uint256 sold;
         */
        bool sold;
    }

    mapping(uint256 => MarketItem) private idToMarketItem;

    event MarketItemCreated(
        uint256 indexed itemId,
        address indexed nftContract,
        uint256 indexed tokenId,
        address seller,
        address owner,
        uint256 price,
        bool sold
    );

    event MarketItemSold(uint256 indexed itemId, address owner);

    // list items in batch
    // like a NFT drop done by the marketplace
    function createBatchMarketItems(
        address nftContract,
        uint256[] memory tokenIds,
        uint256 price
    ) public onlyOwner {
        require(price > 0, "Price must be greater than 0");

        uint256[] memory amounts = new uint256[](tokenIds.length);

        for (uint256 i = 0; i < tokenIds.length; i++) {
            _itemIds.increment();
            uint256 itemId = _itemIds.current();

            idToMarketItem[itemId] = MarketItem(
                itemId,
                nftContract,
                tokenIds[i],
                payable(msg.sender),
                // TODO seller is still the owner, not 0 address
                payable(address(0)),
                price,
                false
            );

            amounts[i] = 1;
        }

        IERC1155(nftContract).safeBatchTransferFrom(
            msg.sender,
            address(this),
            tokenIds,
            amounts, // amount
            ""
        );
    }

    function createMarketItem(
        address nftContract,
        uint256 tokenId,
        uint256 price
    ) public payable nonReentrant {
        require(price > 0, "Price must be greater than 0");

        _itemIds.increment();
        uint256 itemId = _itemIds.current();

        idToMarketItem[itemId] = MarketItem(
            itemId,
            nftContract,
            tokenId,
            payable(msg.sender),
            // TODO seller is still the owner, not 0 address
            payable(address(0)),
            price,
            false
        );

        IERC1155(nftContract).safeTransferFrom(
            msg.sender,
            address(this),
            tokenId,
            1, // amount
            ""
        );

        emit MarketItemCreated(
            itemId,
            nftContract,
            tokenId,
            msg.sender,
            // TODO seller is still the owner, not 0 address
            address(0),
            price,
            false
        );
    }

    function createMarketSale(address nftContract, uint256 itemId)
        public
        payable
        nonReentrant
    {
        uint256 price = idToMarketItem[itemId].price;
        uint256 tokenId = idToMarketItem[itemId].tokenId;
        bool sold = idToMarketItem[itemId].sold;
        require(
            msg.value == price,
            "Please submit the asking price in order to complete the purchase"
        );
        require(sold != true, "This Sale has alredy finnished");

        idToMarketItem[itemId].seller.transfer(msg.value);
        IERC1155(nftContract).safeTransferFrom(
            address(this),
            msg.sender,
            tokenId,
            1, // amount
            ""
        );
        idToMarketItem[itemId].owner = payable(msg.sender);
        idToMarketItem[itemId].sold = true;
        _itemsSold.increment();
        // fee
        // payable(owner).transfer(listingPrice);
        emit MarketItemSold(itemId, msg.sender);
    }

    // return unsold items
    function fetchMarketItems() public view returns (MarketItem[] memory) {
        uint256 itemCount = _itemIds.current();
        uint256 unsoldItemCount = _itemIds.current() - _itemsSold.current();
        uint256 currentIndex = 0;

        MarketItem[] memory items = new MarketItem[](unsoldItemCount);
        for (uint256 i = 0; i < itemCount; i++) {
            // TODO seller is still the owner, not 0 address
            if (idToMarketItem[i + 1].owner == address(0)) {
                uint256 currentId = i + 1;
                MarketItem storage currentItem = idToMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }
}

/// Thanks for inspiration: https://github.com/dabit3/polygon-ethereum-nextjs-marketplace/

// last deployment on rinkeby testnet: 0x38132Af11613795d87343F87d6f43AA0d97fb8a2

// last deployment on rinkeby testnet: 0xee8a8722ab74aaa445e26f9e220d10b92f895522

// last deployment on rinkeby testnet: 0x2E73616DE3cfCE0bE102764C5D0b86117D95C4C4

// last deployment on rinkeby testnet: 0x2e73616de3cfce0be102764c5d0b86117d95c4c4

