# OpenapiClient::EntrepriseFicheAllOfActes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **type** | **String** | Type de l&#39;acte. | [optional] |
| **decision** | **String** | Décision de l&#39;acte. | [optional] |
| **date_acte** | **Date** | Date de l&#39;acte, au format AAAA-MM-JJ. | [optional] |
| **date_acte_formate** | **String** | Date formatée de l&#39;acte, au format JJ/MM/AAAA. | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::EntrepriseFicheAllOfActes.new(
  type: Décision(s) de l&#39;associé unique,
  decision: Augmentation du capital social,
  date_acte: Wed Mar 04 01:00:00 CET 2020,
  date_acte_formate: 04/03/2020
)
```

