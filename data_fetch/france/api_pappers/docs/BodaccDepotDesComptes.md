# OpenapiClient::BodaccDepotDesComptes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **date_cloture** | **String** | Date de clôture des comptes, au format AAAA-MM-JJ. | [optional] |
| **type_depot** | **String** | Type de dépôt de comptes. | [optional] |
| **descriptif** | **String** | Descriptif du dépôt de comptes. | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::BodaccDepotDesComptes.new(
  date_cloture: 2020-08-02,
  type_depot: Comptes annuels et rapports,
  descriptif: null
)
```

