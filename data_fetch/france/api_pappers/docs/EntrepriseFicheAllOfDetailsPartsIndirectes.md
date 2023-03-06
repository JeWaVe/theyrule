# OpenapiClient::EntrepriseFicheAllOfDetailsPartsIndirectes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **pourcentage_en_indivision** | **Float** | Parts détenues de façon indirecte par le biais d&#39;une indivision par le bénéficiaire effectif, en pourcentage des parts totales. | [optional] |
| **pourcentage_en_personne_morale** | **Float** | Parts détenues de façon indirecte par le biais d&#39;une personne morale par le bénéficiaire effectif, en pourcentage des parts totales. | [optional] |
| **details_en_indivision** | [**EntrepriseFicheAllOfDetailsPartsIndirectesDetailsEnIndivision**](EntrepriseFicheAllOfDetailsPartsIndirectesDetailsEnIndivision.md) |  | [optional] |
| **details_en_personne_morale** | [**EntrepriseFicheAllOfDetailsPartsIndirectesDetailsEnPersonneMorale**](EntrepriseFicheAllOfDetailsPartsIndirectesDetailsEnPersonneMorale.md) |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::EntrepriseFicheAllOfDetailsPartsIndirectes.new(
  pourcentage_en_indivision: null,
  pourcentage_en_personne_morale: null,
  details_en_indivision: null,
  details_en_personne_morale: null
)
```

