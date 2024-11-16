// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Buddy is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    mapping (uint256 => bytes32) public creatorPersons;
    mapping (uint256 => uint256) public totalStars;
    mapping (uint256 => uint256) public starsReceived;

    constructor() ERC721("Buddy", "BUDDY") {}

    function mintBuddy(address recipient, string memory tokenURI, bytes32 _creatorPerson) public returns (uint256) {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(recipient, newItemId);
        _setTokenURI(newItemId, tokenURI);
        creatorPersons[newItemId] = _creatorPerson;

        return newItemId;
    }

    function getCreatorPerson(uint256 _tokenId) public view returns (bytes32) {
        return creatorPersons[_tokenId];
    }

    function giveRating(uint256 _tokenId, uint256 _rating) public {
        require(_rating >= 1 && _rating <= 5, "Rating must be between 1 and 5");
        totalStars[_tokenId] += _rating;
        starsReceived[_tokenId]++;
    }

    function getRating(uint256 _tokenId) public view returns (uint256) {
        if (starsReceived[_tokenId] == 0) return 0;
        return totalStars[_tokenId] / starsReceived[_tokenId];
    }

    function getAllBuddies() public view returns (uint256[] memory) {
        uint256[] memory buddies = new uint256[](_tokenIds.current());
        for (uint256 i = 1; i <= _tokenIds.current(); i++) {
            buddies[i - 1] = i;
        }
        return buddies;
    }
}