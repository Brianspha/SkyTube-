import EmbarkJS from '../embarkjs';

const SafeMathConfig = {"logger":{"events":{"_events":{"blockchain:started":[null,null,null,null,null,null,null,null,null],"outputDone":[null,null,null]},"_eventsCount":123,"_maxListeners":350},"logLevels":["error","warn","info","debug","trace"],"logLevel":"info","context":["run","build"]},"abiDefinition":[],"deployedAddress":"0x283ef286D541D308E71FcCE95fbE9B6b98191E95","className":"SafeMath","args":[],"gas":74505,"gasPrice":"20000000000","silent":false,"track":true,"deploy":true,"realRuntimeBytecode":"73000000000000000000000000000000000000000030146080604052600080fdfea265627a7a72315820558f3ea1b844005cef","realArgs":[],"code":"60556023600b82828239805160001a607314601657fe5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea265627a7a72315820558f3ea1b844005cef866f08583cb2925656110594f2a5752692d5e819d919cd64736f6c634300050b0032","runtimeBytecode":"73000000000000000000000000000000000000000030146080604052600080fdfea265627a7a72315820558f3ea1b844005cef866f08583cb2925656110594f2a5752692d5e819d919cd64736f6c634300050b0032","linkReferences":{},"swarmHash":"866f08583cb2925656110594f2a5752692d5e819d919cd64736f6c634300050b","gasEstimates":{"creation":{"codeDepositCost":"17000","executionCost":"94","totalCost":"17094"},"internal":{"add(uint256,uint256)":"infinite","div(uint256,uint256)":"infinite","div(uint256,uint256,string memory)":"infinite","mod(uint256,uint256)":"infinite","mod(uint256,uint256,string memory)":"infinite","mul(uint256,uint256)":"infinite","sub(uint256,uint256)":"infinite","sub(uint256,uint256,string memory)":"infinite"}},"functionHashes":{},"filename":"C:/Users/Development/Documents/GitHub/skiyatube-poc/.embark/node_modules/@openzeppelin/contracts/math/SafeMath.sol","originalFilename":"contracts/C:/Users/Development/Documents/GitHub/skiyatube-poc/.embark/node_modules/@openzeppelin/contracts/math/SafeMath.sol","path":"C:\\Users\\Development\\Documents\\GitHub\\skiyatube-poc\\contracts\\C:\\Users\\Development\\Documents\\GitHub\\skiyatube-poc\\.embark\\node_modules\\@openzeppelin\\contracts\\math\\SafeMath.sol","type":"file","deploymentAccount":"0xe314623E732d1aA85B408A35B77eEEd99Df54cA4","transactionHash":"0xf89d0cc995939c01e517da2c4e129a7cb87f2ad67cc32cacc81a708fa15c7a36"};
const SafeMath = new EmbarkJS.Blockchain.Contract(SafeMathConfig);

export default SafeMath;
