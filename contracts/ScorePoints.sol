// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

contract ScorePoints is ERC20, Pausable, Ownable, ERC20Burnable {
    // Events
    event TokensMinted(address indexed to, uint256 amount);
    event TokensBurned(address indexed from, uint256 amount);
    
    // Token decimals
    uint8 private constant DECIMALS = 18;
    
    // Maximum supply
    uint256 public constant MAX_SUPPLY = 1000000000 * 10**DECIMALS; // 1 billion tokens
    
    constructor() ERC20("ScorePoints", "SCORE") Ownable(msg.sender) {
        // Initial minting to contract deployer
        _mint(msg.sender, 100000000 * 10**DECIMALS); // 100 million tokens initially
    }
    
    // Pause token transfers
    function pause() public onlyOwner {
        _pause();
    }

    // Unpause token transfers
    function unpause() public onlyOwner {
        _unpause();
    }
    
    // Mint new tokens (only owner)
    function mint(address to, uint256 amount) public onlyOwner {
        require(totalSupply() + amount <= MAX_SUPPLY, "Max supply exceeded");
        _mint(to, amount);
        emit TokensMinted(to, amount);
    }
    
    // Burn tokens from caller's address
    function burn(uint256 amount) public override {
        super.burn(amount);
        emit TokensBurned(_msgSender(), amount);
    }
    
    // Burn tokens from specific address (requires approval)
    function burnFrom(address account, uint256 amount) public override {
        super.burnFrom(account, amount);
        emit TokensBurned(account, amount);
    }
    
    // Override transfer function to add pause functionality
    function _update(
        address from,
        address to,
        uint256 amount
    ) internal override whenNotPaused {
        super._update(from, to, amount);
    }
    
    // View function to get token decimals
    function decimals() public pure override returns (uint8) {
        return DECIMALS;
    }
    
    // View function to check if account is contract owner
    function isOwner(address account) public view returns (bool) {
        return owner() == account;
    }
    
    // View function to get remaining mintable supply
    function remainingSupply() public view returns (uint256) {
        return MAX_SUPPLY - totalSupply();
    }
}