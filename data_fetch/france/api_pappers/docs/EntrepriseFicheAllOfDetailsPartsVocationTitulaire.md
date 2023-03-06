# OpenapiClient::EntrepriseFicheAllOfDetailsPartsVocationTitulaire

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **pourcentage_directes** | **Float** | Parts dont le bénéficiaire effectif a vocation à devenir titulaire de façon directe, en pourcentage des parts totales. | [optional] |
| **pourcentage_indirectes** | **Float** | Parts dont le bénéficiaire effectif a vocation à devenir titulaire de façon indirecte, en pourcentage des parts totales. | [optional] |
| **details_directes** | [**EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsDirectes**](EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsDirectes.md) |  | [optional] |
| **details_indirectes** | [**EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectes**](EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectes.md) |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::EntrepriseFicheAllOfDetailsPartsVocationTitulaire.new(
  pourcentage_directes: null,
  pourcentage_indirectes: null,
  details_directes: null,
  details_indirectes: null
)
```

