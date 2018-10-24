pragma solidity 0.4.24;

import "@linniaprotocol/linnia-smart-contracts/contracts/interfaces/PermissionPolicyI.sol";

contract DoNotAllowS3Policy is PermissionPolicyI {


    constructor() public { }

    function () public { }

    /// @param viewer the user being granted permission to view the data
    /// @param dataUri the path of the re-encrypted data
    /// @param dataHash the hash of the data to be scored
    function checkPolicy(bytes32 dataHash, address viewer, string dataUri)
    view
    external
    returns (bool)
    {
        return false;
    }

}
