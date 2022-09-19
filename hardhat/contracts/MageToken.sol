// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract MageToken is ERC20 {
    constructor() ERC20('MageToken', 'MT') {}

    function mintTo(address recipient, uint256 amount) public {
        _mint(recipient, amount);
    }
}
