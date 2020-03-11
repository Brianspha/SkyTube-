pragma solidity >= 0.5 .0;
import "@openzeppelin/upgrades/contracts/Initializable.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";

/*
 *@dev contract definition
 */
contract SkiyaTube is Initializable {
    using SafeMath
    for uint;
    /**==================================================================== Strut Definition Start==================================================================== */
    struct Video {
        bytes url;
        uint256 likes;
        uint256 dislikes;
        uint256 views;
        bool exists;
    }

    /**==================================================================== Events Definition Start==================================================================== */
    event addedEvent(bool indexed added);
    /**==================================================================== Modifiers Definition Start==================================================================== */

    /**==================================================================== Contract Globals Definition Start==================================================================== */
    mapping(bytes => Video) videos;
    bytes[] videos_ids;
    /**==================================================================== Function Definition Start==================================================================== */
    constructor() public {

    }

    function addVideo(bytes memory url) public returns(bool) {
        require(msg.sender != address(0), "Invalid sender address");
        require(!videos[url].exists, "Video exist");
        videos[url].url = url;
        videos[url].likes = 0;
        videos[url].dislikes = 0;
        videos[url].views = 0;
        videos[url].exists = true;
        emit addedEvent(true);
        return true;
    }

    function addLike(bytes memory url) public returns(bool) {
        require(msg.sender != address(0), "Invalid sender address");
        require(videos[url].exists, "Video doesnt exist");
        videos[url].likes = videos[url].likes.add(1);
        emit addedEvent(true);
        return true;
    }

    function disLike(bytes memory url) public returns(bool) {
        require(msg.sender != address(0), "Invalid sender address");
        require(videos[url].exists, "Video doesnt exist");
        videos[url].dislikes = videos[url].dislikes.add(1);
        emit addedEvent(true);
        return true;
    }

    function addView(bytes memory url) public returns(bool) {
        require(msg.sender != address(0), "Invalid sender address");
        require(videos[url].exists, "Video doesnt exist");
        videos[url].views = videos[url].views.add(1);
        emit addedEvent(true);
        return true;
    }

    function getVideo(bytes memory url) public view returns(uint256, uint256, uint256) {
        return (videos[url].likes, videos[url].dislikes, videos[url].views);
    }
}