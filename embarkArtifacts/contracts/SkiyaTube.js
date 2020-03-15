import EmbarkJS from '../embarkjs';

const SkiyaTubeConfig = {"logger":{"events":{"_events":{"blockchain:started":[null,null,null,null,null,null,null,null,null],"outputDone":[null,null,null]},"_eventsCount":123,"_maxListeners":350},"logLevels":["error","warn","info","debug","trace"],"logLevel":"info","context":["run","build"]},"abiDefinition":[{"constant":false,"inputs":[{"internalType":"bytes","name":"url","type":"bytes"}],"name":"disLike","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x0ae11a76"},{"constant":true,"inputs":[{"internalType":"bytes","name":"url","type":"bytes"}],"name":"getVideo","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x0c87e746"},{"constant":false,"inputs":[{"internalType":"bytes","name":"url","type":"bytes"}],"name":"addView","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x37e86e5b"},{"constant":false,"inputs":[{"internalType":"bytes","name":"url","type":"bytes"}],"name":"addLike","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x4c7ca0ab"},{"constant":false,"inputs":[{"internalType":"bytes","name":"url","type":"bytes"}],"name":"addVideo","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xae7a8c86"},{"constant":true,"inputs":[],"name":"getVideURLS","outputs":[{"internalType":"bytes[]","name":"","type":"bytes[]"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xf704e968"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor","signature":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bool","name":"added","type":"bool"}],"name":"addedEvent","type":"event","signature":"0xee890fbb9170497b96c7f3f1327a65f0de8e9f8cabd310c92c32bca338662cf2"}],"deployedAddress":"0xd829a9Da5CB26F9137326932D2AcDaeF640296B0","className":"SkiyaTube","args":[],"gas":703488,"gasPrice":"20000000000","silent":false,"track":true,"deploy":true,"realRuntimeBytecode":"608060405234801561001057600080fd5b50600436106100625760003560e01c80630ae11a76146100675780630c87e7461461009057806337e86e5b146100b35780634c7ca0ab146100c6578063ae7a8c86146100d9578063f704e968146100ec575b600080fd5b61007a6100753660046107fc565b610101565b6040516100879190610a16565b60405180910390f35b6100a361009e3660046107fc565b6101e4565b6040516100879493929190610a64565b61007a6100c13660046107fc565b610281565b61007a6100d43660046107fc565b61035b565b61007a6100e73660046107fc565b610434565b6100f4610609565b6040516100879190610a05565b6000336101295760405162461bcd60e51b815260040161012090610a44565b60405180910390fd5b60338260405161013991906109f9565b9081526040519081900360200190206005015460ff1661016b5760405162461bcd60e51b815260040161012090610a34565b61019f600160338460405161018091906109f9565b908152604051908190036020019020600201549063ffffffff6106e216565b6033836040516101af91906109f9565b90815260405190819003602001812060020191909155600190600080516020610b5583398151915290600090a2506001919050565b6000806000806033856040516101fa91906109f9565b90815260200160405180910390206001015460338660405161021c91906109f9565b90815260200160405180910390206002015460338760405161023e91906109f9565b90815260200160405180910390206003015460338860405161026091906109f9565b90815260200160405180910390206004015493509350935093509193509193565b6000336102a05760405162461bcd60e51b815260040161012090610a44565b6033826040516102b091906109f9565b9081526040519081900360200190206005015460ff166102e25760405162461bcd60e51b815260040161012090610a34565b61031660016033846040516102f791906109f9565b908152604051908190036020019020600301549063ffffffff6106e216565b60338360405161032691906109f9565b90815260405190819003602001812060030191909155600190600080516020610b5583398151915290600090a2506001919050565b60003361037a5760405162461bcd60e51b815260040161012090610a44565b60338260405161038a91906109f9565b9081526040519081900360200190206005015460ff166103bc5760405162461bcd60e51b815260040161012090610a34565b6103f060016033846040516103d191906109f9565b908152604051908190036020019020600101549063ffffffff6106e216565b60338360405161040091906109f9565b908152604051908190036020018120600190810192909255600080516020610b5583398151915290600090a2506001919050565b6000336104535760405162461bcd60e51b815260040161012090610a44565b60338260405161046391906109f9565b9081526040519081900360200190206005015460ff16156104965760405162461bcd60e51b815260040161012090610a54565b816033836040516104a791906109f9565b908152602001604051809103902060000190805190602001906104cb929190610710565b5060006033836040516104de91906109f9565b908152602001604051809103902060010181905550600060338360405161050591906109f9565b908152602001604051809103902060020181905550600060338360405161052c91906109f9565b908152602001604051809103902060030181905550600160338360405161055391906109f9565b908152604051908190036020018120600501805492151560ff199093169290921790915542906033906105879085906109f9565b90815260405160209181900382019020600401919091556034805460018101808355600092909252845191926105e5927f46bddb1178e94d7f2892ff5f366840eb658911794f2c3a44c450aa2c505186c19092019190860190610710565b5050604051600190600080516020610b5583398151915290600090a2506001919050565b60606034805480602002602001604051908101604052809291908181526020016000905b828210156106d85760008481526020908190208301805460408051601f60026000196101006001871615020190941693909304928301859004850281018501909152818152928301828280156106c45780601f10610699576101008083540402835291602001916106c4565b820191906000526020600020905b8154815290600101906020018083116106a757829003601f168201915b50505050508152602001906001019061062d565b5050505090505b90565b6000828201838110156107075760405162461bcd60e51b815260040161012090610a24565b90505b92915050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061075157805160ff191683800117855561077e565b8280016001018555821561077e579182015b8281111561077e578251825591602001919060010190610763565b5061078a92915061078e565b5090565b6106df91905b8082111561078a5760008155600101610794565b600082601f8301126107b957600080fd5b81356107cc6107c782610ac9565b610aa2565b915080825260208301602083018583830111156107e857600080fd5b6107f3838284610b0e565b50505092915050565b60006020828403121561080e57600080fd5b813567ffffffffffffffff81111561082557600080fd5b610831848285016107a8565b949350505050565b600061084583836108f8565b9392505050565b600061085782610af7565b6108618185610afb565b93508360208202850161087385610af1565b8060005b858110156108ad57848403895281516108908582610839565b945061089b83610af1565b60209a909a0199925050600101610877565b5091979650505050505050565b6108c381610b09565b82525050565b60006108d482610af7565b6108de8185610b04565b93506108ee818560208601610b1a565b9290920192915050565b600061090382610af7565b61090d8185610afb565b935061091d818560208601610b1a565b61092681610b4a565b9093019392505050565b600061093d601b83610afb565b7f536166654d6174683a206164646974696f6e206f766572666c6f770000000000815260200192915050565b6000610976601283610afb565b71159a59195bc8191bd95cdb9d08195e1a5cdd60721b815260200192915050565b60006109a4601683610afb565b75496e76616c69642073656e646572206164647265737360501b815260200192915050565b60006109d6600b83610afb565b6a159a59195bc8195e1a5cdd60aa1b815260200192915050565b6108c3816106df565b600061084582846108c9565b60208082528101610845818461084c565b6020810161070a82846108ba565b6020808252810161070a81610930565b6020808252810161070a81610969565b6020808252810161070a81610997565b6020808252810161070a816109c9565b60808101610a7282876109f0565b610a7f60208301866109f0565b610a8c60408301856109f0565b610a9960608301846109f0565b95945050505050565b60405181810167ffffffffffffffff81118282101715610ac157600080fd5b604052919050565b600067ffffffffffffffff821115610ae057600080fd5b506020601f91909101601f19160190565b60200190565b5190565b90815260200190565b919050565b151590565b82818337506000910152565b60005b83811015610b35578181015183820152602001610b1d565b83811115610b44576000848401525b50505050565b601f01601f19169056feee890fbb9170497b96c7f3f1327a65f0de8e9f8cabd310c92c32bca338662cf2a365627a7a72315820e1720cf34f655023ad0c52f1c5a219d0f2a32037082a80","realArgs":[],"code":"608060405234801561001057600080fd5b50610bb7806100206000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80630ae11a76146100675780630c87e7461461009057806337e86e5b146100b35780634c7ca0ab146100c6578063ae7a8c86146100d9578063f704e968146100ec575b600080fd5b61007a6100753660046107fc565b610101565b6040516100879190610a16565b60405180910390f35b6100a361009e3660046107fc565b6101e4565b6040516100879493929190610a64565b61007a6100c13660046107fc565b610281565b61007a6100d43660046107fc565b61035b565b61007a6100e73660046107fc565b610434565b6100f4610609565b6040516100879190610a05565b6000336101295760405162461bcd60e51b815260040161012090610a44565b60405180910390fd5b60338260405161013991906109f9565b9081526040519081900360200190206005015460ff1661016b5760405162461bcd60e51b815260040161012090610a34565b61019f600160338460405161018091906109f9565b908152604051908190036020019020600201549063ffffffff6106e216565b6033836040516101af91906109f9565b90815260405190819003602001812060020191909155600190600080516020610b5583398151915290600090a2506001919050565b6000806000806033856040516101fa91906109f9565b90815260200160405180910390206001015460338660405161021c91906109f9565b90815260200160405180910390206002015460338760405161023e91906109f9565b90815260200160405180910390206003015460338860405161026091906109f9565b90815260200160405180910390206004015493509350935093509193509193565b6000336102a05760405162461bcd60e51b815260040161012090610a44565b6033826040516102b091906109f9565b9081526040519081900360200190206005015460ff166102e25760405162461bcd60e51b815260040161012090610a34565b61031660016033846040516102f791906109f9565b908152604051908190036020019020600301549063ffffffff6106e216565b60338360405161032691906109f9565b90815260405190819003602001812060030191909155600190600080516020610b5583398151915290600090a2506001919050565b60003361037a5760405162461bcd60e51b815260040161012090610a44565b60338260405161038a91906109f9565b9081526040519081900360200190206005015460ff166103bc5760405162461bcd60e51b815260040161012090610a34565b6103f060016033846040516103d191906109f9565b908152604051908190036020019020600101549063ffffffff6106e216565b60338360405161040091906109f9565b908152604051908190036020018120600190810192909255600080516020610b5583398151915290600090a2506001919050565b6000336104535760405162461bcd60e51b815260040161012090610a44565b60338260405161046391906109f9565b9081526040519081900360200190206005015460ff16156104965760405162461bcd60e51b815260040161012090610a54565b816033836040516104a791906109f9565b908152602001604051809103902060000190805190602001906104cb929190610710565b5060006033836040516104de91906109f9565b908152602001604051809103902060010181905550600060338360405161050591906109f9565b908152602001604051809103902060020181905550600060338360405161052c91906109f9565b908152602001604051809103902060030181905550600160338360405161055391906109f9565b908152604051908190036020018120600501805492151560ff199093169290921790915542906033906105879085906109f9565b90815260405160209181900382019020600401919091556034805460018101808355600092909252845191926105e5927f46bddb1178e94d7f2892ff5f366840eb658911794f2c3a44c450aa2c505186c19092019190860190610710565b5050604051600190600080516020610b5583398151915290600090a2506001919050565b60606034805480602002602001604051908101604052809291908181526020016000905b828210156106d85760008481526020908190208301805460408051601f60026000196101006001871615020190941693909304928301859004850281018501909152818152928301828280156106c45780601f10610699576101008083540402835291602001916106c4565b820191906000526020600020905b8154815290600101906020018083116106a757829003601f168201915b50505050508152602001906001019061062d565b5050505090505b90565b6000828201838110156107075760405162461bcd60e51b815260040161012090610a24565b90505b92915050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061075157805160ff191683800117855561077e565b8280016001018555821561077e579182015b8281111561077e578251825591602001919060010190610763565b5061078a92915061078e565b5090565b6106df91905b8082111561078a5760008155600101610794565b600082601f8301126107b957600080fd5b81356107cc6107c782610ac9565b610aa2565b915080825260208301602083018583830111156107e857600080fd5b6107f3838284610b0e565b50505092915050565b60006020828403121561080e57600080fd5b813567ffffffffffffffff81111561082557600080fd5b610831848285016107a8565b949350505050565b600061084583836108f8565b9392505050565b600061085782610af7565b6108618185610afb565b93508360208202850161087385610af1565b8060005b858110156108ad57848403895281516108908582610839565b945061089b83610af1565b60209a909a0199925050600101610877565b5091979650505050505050565b6108c381610b09565b82525050565b60006108d482610af7565b6108de8185610b04565b93506108ee818560208601610b1a565b9290920192915050565b600061090382610af7565b61090d8185610afb565b935061091d818560208601610b1a565b61092681610b4a565b9093019392505050565b600061093d601b83610afb565b7f536166654d6174683a206164646974696f6e206f766572666c6f770000000000815260200192915050565b6000610976601283610afb565b71159a59195bc8191bd95cdb9d08195e1a5cdd60721b815260200192915050565b60006109a4601683610afb565b75496e76616c69642073656e646572206164647265737360501b815260200192915050565b60006109d6600b83610afb565b6a159a59195bc8195e1a5cdd60aa1b815260200192915050565b6108c3816106df565b600061084582846108c9565b60208082528101610845818461084c565b6020810161070a82846108ba565b6020808252810161070a81610930565b6020808252810161070a81610969565b6020808252810161070a81610997565b6020808252810161070a816109c9565b60808101610a7282876109f0565b610a7f60208301866109f0565b610a8c60408301856109f0565b610a9960608301846109f0565b95945050505050565b60405181810167ffffffffffffffff81118282101715610ac157600080fd5b604052919050565b600067ffffffffffffffff821115610ae057600080fd5b506020601f91909101601f19160190565b60200190565b5190565b90815260200190565b919050565b151590565b82818337506000910152565b60005b83811015610b35578181015183820152602001610b1d565b83811115610b44576000848401525b50505050565b601f01601f19169056feee890fbb9170497b96c7f3f1327a65f0de8e9f8cabd310c92c32bca338662cf2a365627a7a72315820e1720cf34f655023ad0c52f1c5a219d0f2a32037082a80c7684de6969fefb9676c6578706572696d656e74616cf564736f6c634300050b0040","runtimeBytecode":"608060405234801561001057600080fd5b50600436106100625760003560e01c80630ae11a76146100675780630c87e7461461009057806337e86e5b146100b35780634c7ca0ab146100c6578063ae7a8c86146100d9578063f704e968146100ec575b600080fd5b61007a6100753660046107fc565b610101565b6040516100879190610a16565b60405180910390f35b6100a361009e3660046107fc565b6101e4565b6040516100879493929190610a64565b61007a6100c13660046107fc565b610281565b61007a6100d43660046107fc565b61035b565b61007a6100e73660046107fc565b610434565b6100f4610609565b6040516100879190610a05565b6000336101295760405162461bcd60e51b815260040161012090610a44565b60405180910390fd5b60338260405161013991906109f9565b9081526040519081900360200190206005015460ff1661016b5760405162461bcd60e51b815260040161012090610a34565b61019f600160338460405161018091906109f9565b908152604051908190036020019020600201549063ffffffff6106e216565b6033836040516101af91906109f9565b90815260405190819003602001812060020191909155600190600080516020610b5583398151915290600090a2506001919050565b6000806000806033856040516101fa91906109f9565b90815260200160405180910390206001015460338660405161021c91906109f9565b90815260200160405180910390206002015460338760405161023e91906109f9565b90815260200160405180910390206003015460338860405161026091906109f9565b90815260200160405180910390206004015493509350935093509193509193565b6000336102a05760405162461bcd60e51b815260040161012090610a44565b6033826040516102b091906109f9565b9081526040519081900360200190206005015460ff166102e25760405162461bcd60e51b815260040161012090610a34565b61031660016033846040516102f791906109f9565b908152604051908190036020019020600301549063ffffffff6106e216565b60338360405161032691906109f9565b90815260405190819003602001812060030191909155600190600080516020610b5583398151915290600090a2506001919050565b60003361037a5760405162461bcd60e51b815260040161012090610a44565b60338260405161038a91906109f9565b9081526040519081900360200190206005015460ff166103bc5760405162461bcd60e51b815260040161012090610a34565b6103f060016033846040516103d191906109f9565b908152604051908190036020019020600101549063ffffffff6106e216565b60338360405161040091906109f9565b908152604051908190036020018120600190810192909255600080516020610b5583398151915290600090a2506001919050565b6000336104535760405162461bcd60e51b815260040161012090610a44565b60338260405161046391906109f9565b9081526040519081900360200190206005015460ff16156104965760405162461bcd60e51b815260040161012090610a54565b816033836040516104a791906109f9565b908152602001604051809103902060000190805190602001906104cb929190610710565b5060006033836040516104de91906109f9565b908152602001604051809103902060010181905550600060338360405161050591906109f9565b908152602001604051809103902060020181905550600060338360405161052c91906109f9565b908152602001604051809103902060030181905550600160338360405161055391906109f9565b908152604051908190036020018120600501805492151560ff199093169290921790915542906033906105879085906109f9565b90815260405160209181900382019020600401919091556034805460018101808355600092909252845191926105e5927f46bddb1178e94d7f2892ff5f366840eb658911794f2c3a44c450aa2c505186c19092019190860190610710565b5050604051600190600080516020610b5583398151915290600090a2506001919050565b60606034805480602002602001604051908101604052809291908181526020016000905b828210156106d85760008481526020908190208301805460408051601f60026000196101006001871615020190941693909304928301859004850281018501909152818152928301828280156106c45780601f10610699576101008083540402835291602001916106c4565b820191906000526020600020905b8154815290600101906020018083116106a757829003601f168201915b50505050508152602001906001019061062d565b5050505090505b90565b6000828201838110156107075760405162461bcd60e51b815260040161012090610a24565b90505b92915050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061075157805160ff191683800117855561077e565b8280016001018555821561077e579182015b8281111561077e578251825591602001919060010190610763565b5061078a92915061078e565b5090565b6106df91905b8082111561078a5760008155600101610794565b600082601f8301126107b957600080fd5b81356107cc6107c782610ac9565b610aa2565b915080825260208301602083018583830111156107e857600080fd5b6107f3838284610b0e565b50505092915050565b60006020828403121561080e57600080fd5b813567ffffffffffffffff81111561082557600080fd5b610831848285016107a8565b949350505050565b600061084583836108f8565b9392505050565b600061085782610af7565b6108618185610afb565b93508360208202850161087385610af1565b8060005b858110156108ad57848403895281516108908582610839565b945061089b83610af1565b60209a909a0199925050600101610877565b5091979650505050505050565b6108c381610b09565b82525050565b60006108d482610af7565b6108de8185610b04565b93506108ee818560208601610b1a565b9290920192915050565b600061090382610af7565b61090d8185610afb565b935061091d818560208601610b1a565b61092681610b4a565b9093019392505050565b600061093d601b83610afb565b7f536166654d6174683a206164646974696f6e206f766572666c6f770000000000815260200192915050565b6000610976601283610afb565b71159a59195bc8191bd95cdb9d08195e1a5cdd60721b815260200192915050565b60006109a4601683610afb565b75496e76616c69642073656e646572206164647265737360501b815260200192915050565b60006109d6600b83610afb565b6a159a59195bc8195e1a5cdd60aa1b815260200192915050565b6108c3816106df565b600061084582846108c9565b60208082528101610845818461084c565b6020810161070a82846108ba565b6020808252810161070a81610930565b6020808252810161070a81610969565b6020808252810161070a81610997565b6020808252810161070a816109c9565b60808101610a7282876109f0565b610a7f60208301866109f0565b610a8c60408301856109f0565b610a9960608301846109f0565b95945050505050565b60405181810167ffffffffffffffff81118282101715610ac157600080fd5b604052919050565b600067ffffffffffffffff821115610ae057600080fd5b506020601f91909101601f19160190565b60200190565b5190565b90815260200190565b919050565b151590565b82818337506000910152565b60005b83811015610b35578181015183820152602001610b1d565b83811115610b44576000848401525b50505050565b601f01601f19169056feee890fbb9170497b96c7f3f1327a65f0de8e9f8cabd310c92c32bca338662cf2a365627a7a72315820e1720cf34f655023ad0c52f1c5a219d0f2a32037082a80c7684de6969fefb9676c6578706572696d656e74616cf564736f6c634300050b0040","linkReferences":{},"swarmHash":"c7684de6969fefb9676c6578706572696d656e74616cf564736f6c634300050b","gasEstimates":{"creation":{"codeDepositCost":"599800","executionCost":"632","totalCost":"600432"},"external":{"addLike(bytes)":"infinite","addVideo(bytes)":"infinite","addView(bytes)":"infinite","disLike(bytes)":"infinite","getVideURLS()":"infinite","getVideo(bytes)":"infinite"}},"functionHashes":{"addLike(bytes)":"4c7ca0ab","addVideo(bytes)":"ae7a8c86","addView(bytes)":"37e86e5b","disLike(bytes)":"0ae11a76","getVideURLS()":"f704e968","getVideo(bytes)":"0c87e746"},"filename":"C:/Users/Development/Documents/GitHub/skiyatube-poc/.embark/contracts/SkiyaTube.sol","originalFilename":"contracts\\SkiyaTube.sol","path":"C:\\Users\\Development\\Documents\\GitHub\\skiyatube-poc\\contracts\\SkiyaTube.sol","type":"file","deploymentAccount":"0xe314623E732d1aA85B408A35B77eEEd99Df54cA4","transactionHash":"0x4272994ca617ec7ca7753a50d68e68dfc88b1ee6471d475ef7259cf4349e70ba"};
const SkiyaTube = new EmbarkJS.Blockchain.Contract(SkiyaTubeConfig);

export default SkiyaTube;
