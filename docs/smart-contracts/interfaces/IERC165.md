---
id: IERC165
title: IERC165
---

Contains a subset of the full IERC165 interface that is used in Monopole

## Functions

### supportsInterface

```solidity
function supportsInterface(
  bytes4 interfaceID
) external view returns (bool);
```

Returns true if this contract implements the interface defined by interfaceId

#### Parameters:

| Name      | Type    | Description                                                                    |
| :-------- | :------ | :----------------------------------------------------------------------------- |
| `interfaceID` | bytes4 | interface id |

#### Return Values:

| Type    | Description                          |
| :------ | :----------------------------------- |
| bool | True if this contract implements the interface |
