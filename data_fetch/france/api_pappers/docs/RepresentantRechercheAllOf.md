# OpenapiClient::RepresentantRechercheAllOf

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **actuel** | **Boolean** | Vaut vrai si le représentant est toujours à son poste. | [optional] |
| **date_depart_de_poste** | **String** | Date de départ de poste dans le cas où le représentant n&#39;est plus un représentant actuel, au format AAAA-MM-JJ. | [optional] |
| **forme_juridique** | **String** | Forme juridique du représentant dans le cas d&#39;une personne morale. | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::RepresentantRechercheAllOf.new(
  actuel: null,
  date_depart_de_poste: null,
  forme_juridique: null
)
```

