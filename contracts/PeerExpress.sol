// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract PeerExpress  {
    constructor()  {}

    receive() external payable {}

    fallback() external payable {}
}
