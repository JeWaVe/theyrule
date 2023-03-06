# OpenapiClient::EntrepriseFicheAllOfDetailsVotesIndirects

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **pourcentage_en_indivision** | **Float** | Droits de vote détenus de façon indirecte par le biais d&#39;une indivision par le bénéficiaire effectif, en pourcentage des droits de vote totaux. | [optional] |
| **pourcentage_en_personne_morale** | **Float** | Droits de vote détenus de façon indirecte par le biais d&#39;une personne morale par le bénéficiaire effectif, en pourcentage des droits de vote totaux. | [optional] |
| **details_en_indivision** | [**EntrepriseFicheAllOfDetailsVotesIndirectsDetailsEnIndivision**](EntrepriseFicheAllOfDetailsVotesIndirectsDetailsEnIndivision.md) |  | [optional] |
| **details_en_personne_morale** | [**EntrepriseFicheAllOfDetailsVotesIndirectsDetailsEnPersonneMorale**](EntrepriseFicheAllOfDetailsVotesIndirectsDetailsEnPersonneMorale.md) |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::EntrepriseFicheAllOfDetailsVotesIndirects.new(
  pourcentage_en_indivision: null,
  pourcentage_en_personne_morale: null,
  details_en_indivision: null,
  details_en_personne_morale: null
)
```

