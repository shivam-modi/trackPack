pragma solidity ^0.5.11;

// pragma experimental ABIEncoderV2;

contract AssetTracker {
    int256 counter = 0;
    struct Asset {
        string title;
        string description;
        string manufacturer;
        bool initialised;
        string[] locations;
    }

    //mapping assets with unique uuid
    mapping(int256 => Asset) private assetStore;
    //mapping current ownership of asset
    mapping(address => mapping(int256 => bool)) private WalletStore;

    //events
    event AssetCreated(int256 uuid, string manufacturer, string title);
    event AssetTransferred(int256 uuid, address from, address to);
    event RejectTransfer(string message);

    //uuid generator
    function generateUUID() private returns (int256) {
        counter++;
        return counter;
    }

    //generate new asset
    function createAsset(
        string memory title,
        string memory description,
        string memory manufacturer
    ) public {
        //genarate uuid using keccak256
        int256 uuid = generateUUID();
        string[] memory locations;
        assetStore[uuid] = Asset(
            title,
            description,
            manufacturer,
            true,
            locations
        );
        WalletStore[msg.sender][uuid] = true;
        emit AssetCreated(uuid, manufacturer, title);
    }

    //update asset location
    function transferAsset(
        int256 uuid,
        address targetAddress,
        string memory location
    ) public {
        //does asset exist
        if (!assetStore[uuid].initialised) {
            emit RejectTransfer("asset does not exist");
            return;
        }
        //is it current owner of asset
        if (!WalletStore[msg.sender][uuid]) {
            emit RejectTransfer("you are not allowed to transfer asset");
            return;
        }
        //handing over asset
        assetStore[uuid].locations.push(location);
        WalletStore[msg.sender][uuid] = false;
        WalletStore[targetAddress][uuid] = true;
        emit AssetTransferred(uuid, msg.sender, targetAddress);
    }

    //view asset info
    function getAssetByUUID(int256 uuid)
        public
        view
        returns (
            string memory,
            string memory,
            string memory
        )
    {
        require(assetStore[uuid].initialised);
        return (
            assetStore[uuid].title,
            assetStore[uuid].description,
            assetStore[uuid].manufacturer
        );
    }

    function getAssetLocations(int256 uuid)
        public
        view
        returns (string memory)
    {
        require(assetStore[uuid].initialised);
        string[] memory locations = assetStore[uuid].locations;
        string memory val = locations[0];
        for (uint256 i = 1; i < locations.length; i++) {
            val = string(abi.encodePacked(val, "-", locations[i]));
        }
        return val;
    }
}
