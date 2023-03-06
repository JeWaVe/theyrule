# OpenapiClient::EntrepriseRechercheAllOf

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **siege** | [**EtablissementRecherche**](EtablissementRecherche.md) |  | [optional] |
| **villes** | **Array&lt;String&gt;** | Liste des villes où l&#39;entreprise a au moins un établissement. | [optional] |
| **chiffre_affaires** | **Integer** | Chiffre d&#39;affaires de l&#39;entreprise. | [optional] |
| **resultat** | **Integer** | Résultat de l&#39;entreprise. | [optional] |
| **effectifs_finances** | **Integer** | Effectif de l&#39;entreprise. | [optional] |
| **annee_finances** | **String** | Année de correspondance des variables financières (chiffre_affaires, resultat, effectifs_finances). | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::EntrepriseRechercheAllOf.new(
  siege: null,
  villes: null,
  chiffre_affaires: 411016329,
  resultat: 29327087,
  effectifs_finances: 723,
  annee_finances: 2018
)
```

