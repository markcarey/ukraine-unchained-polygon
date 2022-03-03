// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract Ukraine is ERC1155, Ownable, ReentrancyGuard {

    // Polygon Gnosis Safe from https://unchain.fund/
    address public constant UNCHAIN = 0xb37b3b78022E6964fe80030C9161525880274010;

    constructor()
        ERC1155("ipfs://QmUTGDw4rD3aFsomiDMPipYBM9WaR4oREaD8nf3b4bNSXM")
    {}

    function deposit(address tokenAddress, uint _amount, address beneficiary) public nonReentrant {
        _donate(tokenAddress, _amount, beneficiary);
    }
    function donate(address tokenAddress, uint _amount, address beneficiary) public nonReentrant {
        _donate(tokenAddress, _amount, beneficiary);
    }

    function _donate(address tokenAddress, uint _amount, address beneficiary) internal {
        require(_amount > 0, "!0");
        IERC20 token = IERC20(tokenAddress);
        token.transferFrom(msg.sender, UNCHAIN, _amount);
        if ( beneficiary == address(0) ) {
            beneficiary = msg.sender;
        }
        _mint(beneficiary, 0, 1, "");
    }

    function contractURI() public pure returns (string memory) {
        return "ipfs://QmaLy6f5z5yJPVMLHnWsdodYkvnpfmJGDknRmJYZ7fUVMj";
    }

}