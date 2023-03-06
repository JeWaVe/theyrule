# OpenapiClient::RechercheBeneficiaires200ResponseResultatsInnerAllOf

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **entreprises** | [**Array&lt;EntrepriseRecherche&gt;**](EntrepriseRecherche.md) | Liste des entreprises dont le bénéficiaire effectif est bénéficiaire effectif, dans la limite de 100 entreprises. | [optional] |
| **nb_entreprises_total** | **Integer** | Nombre d&#39;entreprises du bénéficiaire effectif au total. | [optional] |
| **entreprises_dirigeant** | [**Array&lt;EntrepriseRecherche&gt;**](EntrepriseRecherche.md) | Liste des entreprises dont le bénéficiaire effectif est dirigeant (sans forcément en être bénéficiaire effectif), dans la limite de 100 entreprises. | [optional] |
| **nb_entreprises_dirigeant_total** | **Integer** | Nombre d&#39;entreprises dont le bénéficiaire effectif est dirigeant au total. | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::RechercheBeneficiaires200ResponseResultatsInnerAllOf.new(
  entreprises: null,
  nb_entreprises_total: null,
  entreprises_dirigeant: null,
  nb_entreprises_dirigeant_total: null
)
```

