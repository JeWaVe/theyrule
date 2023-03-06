# OpenapiClient::EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **pourcentage_en_indivision** | **Float** | Parts dont le bénéficiaire effectif a vocation à devenir titulaire de façon indirecte par le biais d&#39;une indivision, en pourcentage des parts totales. | [optional] |
| **pourcentage_en_personne_morale** | **Float** | Parts dont le bénéficiaire effectif a vocation à devenir titulaire de façon indirecte par le biais d&#39;une personne morale, en pourcentage des parts totales. | [optional] |
| **details_en_indivision** | [**EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectesDetailsEnIndivision**](EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectesDetailsEnIndivision.md) |  | [optional] |
| **details_en_personne_morale** | [**EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectesDetailsEnPersonneMorale**](EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectesDetailsEnPersonneMorale.md) |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectes.new(
  pourcentage_en_indivision: null,
  pourcentage_en_personne_morale: null,
  details_en_indivision: null,
  details_en_personne_morale: null
)
```

