---
id: IERC721Receiver
title: IERC721Receiver
---

Contains a subset of the full IERC721Receiver interface that is used in Monopole

## Functions

### onERC721Received

```solidity
function onERC721Received(
    address operator,
    address from,
    uint256 tokenId,
    bytes calldata data
) external returns (bytes4);
```

Whenever an ERC721 `tokenId` token is transferred to this contract via ERC721.safeTransferFrom by `operator` from `from`, this function is called.

#### Parameters:

| Name      | Type    | Description                                                                    |
| :-------- | :------ | :----------------------------------------------------------------------------- |
| `operator` | address | operator address |
| `from` | address | from address |
| `tokenId` | uint256 | id of token |
| `data` | bytes | data is additional |

#### Return Values:

| Type    | Description                          |
| :------ | :----------------------------------- |
| bytes4 |  |
