// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Person {
    struct PersonStruct {
        bytes32 UniqueId;
        address Account;
        uint256 BuddyId;
    }

    mapping (uint256 => PersonStruct) public people;

    uint256 public personCount;

    function createPerson(bytes32 _UniqueId, address _Account, uint256 _BuddyId) public {
        personCount++;
        people[personCount] = PersonStruct(_UniqueId, _Account, _BuddyId);
    }

    function getPerson(uint256 _index) public view returns (bytes32, address, uint256) {
        require(_index <= personCount, "Person does not exist");
        return (people[_index].UniqueId, people[_index].Account, people[_index].BuddyId);
    }
}