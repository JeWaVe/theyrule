# OpenapiClient::EntrepriseFicheAllOfProceduresCollectives

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **type** | **String** | Type de la procédure collective. | [optional] |
| **date_debut** | **String** | Date de début de la procédure collective, au format AAAA-MM-JJ. | [optional] |
| **date_fin** | **String** | Date de fin de la procédure collective, au format AAAA-MM-JJ. | [optional] |
| **publications_bodacc** | [**Array&lt;Bodacc&gt;**](Bodacc.md) | Liste des publications relatives à la procédure collective. | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::EntrepriseFicheAllOfProceduresCollectives.new(
  type: Redressement judiciaire,
  date_debut: 2020-04-16,
  date_fin: 2020-08-27,
  publications_bodacc: null
)
```

