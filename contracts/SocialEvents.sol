// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract SocialEvent is ERC1155URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _eventIds;

    struct SocialEventStruct {
        uint256 id;
        uint256 rewardFees;
        uint256 startTime;
        uint256 endTime;
        bytes32 creatorUniqueId;
    }

    mapping (uint256 => SocialEventStruct) public events;

    constructor(string memory _uri) ERC1155(_uri) {}

    function createEvent(
        uint256 _rewardFees,
        uint256 _startTime,
        uint256 _endTime,
        bytes32 _creatorUniqueId
    ) public {
        require(_startTime >= block.timestamp + 24 hours, "Start time must be at least 24 hours away");
        require(_endTime > _startTime, "End time must be after start time");

        _eventIds.increment();
        uint256 newEventId = _eventIds.current();

        events[newEventId] = SocialEventStruct(
            newEventId,
            _rewardFees,
            _startTime,
            _endTime,
            _creatorUniqueId
        );

        _mint(msg.sender, newEventId, 1, "");
    }

    function getAllEvents() public view returns (uint256[] memory) {
        uint256[] memory allEvents = new uint256[](_eventIds.current());
        for (uint256 i = 1; i <= _eventIds.current(); i++) {
            allEvents[i - 1] = i;
        }
        return allEvents;
    }
}