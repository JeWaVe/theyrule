# OpenapiClient::RechercheDirigeants200ResponseResultatsInnerAllOf

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **entreprises** | [**Array&lt;EntrepriseRecherche&gt;**](EntrepriseRecherche.md) | Liste des entreprises du dirigeant, dans la limite de 100 entreprises. | [optional] |
| **nb_entreprises_total** | **Integer** | Nombre d&#39;entreprises du dirigeant au total | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::RechercheDirigeants200ResponseResultatsInnerAllOf.new(
  entreprises: null,
  nb_entreprises_total: null
)
```

