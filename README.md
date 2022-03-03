# ukraine-unchained-polygon
(Unofficial) smart contract to donate to Unchain Ukraine on Polygon

- The purpose of this contract is to provide DAOs and NFT projects a means to easily implement contract-to-contract donations to Unchain Ukraine. 
- ERC20 tokens are forwarded to the _Polygon_ Gnosis Safe Multisig listed at https://unchain.fund -- the destination address is hard-coded into the contract
- As a thank you, an ERC1155 NFT is issued to the `beneficiary` address submitted with the donation. NFT projects or DAOs can pass the address of their members to assign the NFT to them

If others find this useful, it could easily be modifed for networks other than Polygon.
