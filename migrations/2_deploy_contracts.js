const Election = artifacts.require("Election.sol");

module.exports = async function(deployer) {
   
  deployer.deploy(Election,"Ganache 1","Kathmandu","0x225e9CFb1aa065A320D3C7364364703bD42c247F");
};
