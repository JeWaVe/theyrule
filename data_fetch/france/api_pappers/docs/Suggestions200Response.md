# OpenapiClient::Suggestions200Response

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **resultats_nom_entreprise** | [**Array&lt;Suggestions200ResponseResultatsNomEntrepriseInner&gt;**](Suggestions200ResponseResultatsNomEntrepriseInner.md) | Liste des entreprises dont le nom (dénomination ou nom/prénom) peut compléter la recherche textuelle. Uniquement présent si le paramètre &#x60;cibles&#x60; contient &#x60;nom_entreprise&#x60;. | [optional] |
| **resultats_denomination** | [**Array&lt;Suggestions200ResponseResultatsDenominationInner&gt;**](Suggestions200ResponseResultatsDenominationInner.md) | Liste des entreprises dont la dénomination peut compléter la recherche textuelle (concerne les personnes morales seulement). Uniquement présent si le paramètre &#x60;cibles&#x60; contient &#x60;denomination&#x60;. | [optional] |
| **resultats_nom_complet** | [**Array&lt;Suggestions200ResponseResultatsNomCompletInner&gt;**](Suggestions200ResponseResultatsNomCompletInner.md) | Liste des entreprises dont le nom complet (nom + prénom ou prénom + nom) peut compléter la recherche textuelle (concerne les personnes physiques seulement). Uniquement présent si le paramètre &#x60;cibles&#x60; contient &#x60;nom_complet&#x60;. | [optional] |
| **resultats_representant** | [**Array&lt;Suggestions200ResponseResultatsRepresentantInner&gt;**](Suggestions200ResponseResultatsRepresentantInner.md) | Liste des représentants dont le nom complet (nom + prénom ou prénom + nom) peut compléter la recherche textuelle. Uniquement présent si le paramètre &#x60;cibles&#x60; contient &#x60;representant&#x60;. | [optional] |
| **resultats_siren** | [**Array&lt;Suggestions200ResponseResultatsSirenInner&gt;**](Suggestions200ResponseResultatsSirenInner.md) | Liste des entreprises dont le numéro SIREN peut compléter la recherche textuelle. Uniquement présent si le paramètre &#x60;cibles&#x60; contient &#x60;siren&#x60;. | [optional] |
| **resultats_siret** | [**Array&lt;Suggestions200ResponseResultatsSiretInner&gt;**](Suggestions200ResponseResultatsSiretInner.md) | Liste des entreprises dont le numéro SIRET peut compléter la recherche textuelle. Uniquement présent si le paramètre &#x60;cibles&#x60; contient &#x60;siret&#x60;. | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::Suggestions200Response.new(
  resultats_nom_entreprise: null,
  resultats_denomination: null,
  resultats_nom_complet: null,
  resultats_representant: null,
  resultats_siren: null,
  resultats_siret: null
)
```

